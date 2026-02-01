document.getElementById("year").textContent = new Date().getFullYear();

// Scroll to services
const scrollToServicesBtn = document.getElementById("scrollToServices");
if (scrollToServicesBtn) {
  scrollToServicesBtn.addEventListener("click", () => {
    const section = document.getElementById("servicesSection");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  });
}

// Contact Us scroll to form
const contactUsBtn = document.getElementById("contactUsBtn");
if (contactUsBtn) {
  contactUsBtn.addEventListener("click", () => {
    const formSection = document.getElementById("requestFormSection");
    if (formSection) formSection.scrollIntoView({ behavior: "smooth" });
  });
}

// Services dropdown
const servicesToggle = document.getElementById("servicesToggle");
const servicesList = document.getElementById("servicesList");

if (servicesToggle && servicesList) {
  servicesToggle.addEventListener("click", () => {
    servicesList.classList.toggle("show");
    servicesToggle.textContent = servicesList.classList.contains("show")
      ? "Services We Provide ▴"
      : "Services We Provide ▾";
  });
}

// Service selection → update form title
const serviceItems = document.querySelectorAll(".service-item");
const formTitle = document.getElementById("formTitle");
const selectedServiceInput = document.getElementById("selectedService");

serviceItems.forEach((btn) => {
  btn.addEventListener("click", () => {
    const service = btn.getAttribute("data-service") || "Service";
    if (formTitle) formTitle.textContent = ${service} Request;
    if (selectedServiceInput) selectedServiceInput.value = service;

    const formSection = document.getElementById("requestFormSection");
    if (formSection) formSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Form submission: EmailJS + Netlify SMS
const form = document.getElementById("serviceRequestForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const service = document.getElementById("selectedService").value;
    const name = document.getElementById("customerName").value;
    const address = document.getElementById("customerAddress").value;
    const phone = document.getElementById("customerPhone").value;
    const description = document.getElementById("workDescription").value;
    const timeline = document.getElementById("timeline").value;
    const priceRange = document.getElementById("priceRange").value;
    const additional = document.getElementById("additionalDetails").value;

    // 1) Send email via EmailJS
    try {
      await emailjs.send("EMAILJSSERVICEID", "EMAILJSTEMPLATEID", {
        selectedService: service,
        customerName: name,
        customerAddress: address,
        customerPhone: phone,
        workDescription: description,
        timeline: timeline,
        priceRange: priceRange,
        additionalDetails: additional
      });
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("There was an issue sending the email. Please try again.");
      return;
    }

    // 2) Send SMS via Netlify Function
    try {
      await fetch("/.netlify/functions/send-sms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service,
          name,
          address,
          phone,
          description,
          timeline,
          priceRange,
          additional
        })
      });
    } catch (err) {
      console.error("SMS error:", err);
      // We won't block the user if SMS fails, since email already sent
    }

    alert("Your request has been sent successfully!");
    form.reset();
    document.getElementById("selectedService").value = "General Request";
    if (formTitle) formTitle.textContent = "Request a Service";
  });
}
`

> Replace:
> - EMAILJSPUBLICKEY in index.html
> - EMAILJSSERVICEID in script.js (you said one is service_46uripb)
> - EMAILJSTEMPLATEID in script.js with your actual template ID from EmailJS.

---

netlify/functions/send-sms.js

`javascript
// Netlify Function: send-sms.js
// This runs on Netlify's server and uses Twilio to send SMS

const twilio = require("twilio");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed"
    };
  }

  try {
    const data = JSON.parse(event.body || "{}");

    const client = twilio(
      process.env.TWILIO_SID,
      process.env.TWILIO_AUTH
    );

    const messageText = `
Fratello Home Pros - New Request

Service: ${data.service}
Name: ${data.name}
Phone: ${data.phone}
Address: ${data.address}

Description:
${data.description}

Timeline: ${data.timeline}
Price Range: ${data.priceRange}

Additional:
${data.additional}
`.trim();

    // Send to Will
    await client.messages.create({
      body: messageText,
      from: process.env.TWILIO_NUMBER,
      to: "+15138005489"
    });

    // Send to Joe
    await client.messages.create({
      body: messageText,
      from: process.env.TWILIO_NUMBER,
      to: "+15139406296"
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (err) {
    console.error("Twilio SMS error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send SMS" })
    };
  }
};
`
