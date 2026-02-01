// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll to services
const scrollToServicesBtn = document.getElementById("scrollToServices");
if (scrollToServicesBtn) {
  scrollToServicesBtn.addEventListener("click", () => {
    const section = document.getElementById("servicesSection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// Contact Us button scrolls to form
const contactUsBtn = document.getElementById("contactUsBtn");
if (contactUsBtn) {
  contactUsBtn.addEventListener("click", () => {
    const formSection = document.getElementById("requestFormSection");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// Toggle services dropdown
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

// Handle service item clicks
const serviceItems = document.querySelectorAll(".service-item");
const formTitle = document.getElementById("formTitle");
const selectedServiceInput = document.getElementById("selectedService");

serviceItems.forEach((btn) => {
  btn.addEventListener("click", () => {
    const service = btn.getAttribute("data-service") || "Service";
    if (formTitle) {
      formTitle.textContent = ${service} Request;
    }
    if (selectedServiceInput) {
      selectedServiceInput.value = service;
    }

    const formSection = document.getElementById("requestFormSection");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Handle form submission
const form = document.getElementById("serviceRequestForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const service = document.getElementById("selectedService").value;
    const name = document.getElementById("customerName").value;
    const address = document.getElementById("customerAddress").value;
    const phone = document.getElementById("customerPhone").value;
    const description = document.getElementById("workDescription").value;
    const timeline = document.getElementById("timeline").value;
    const priceRange = document.getElementById("priceRange").value;
    const additional = document.getElementById("additionalDetails").value;

    const subject = encodeURIComponent(${service} Request from ${name});
    const bodyLines = [
      Service: ${service},
      Customer's Name: ${name},
      Address: ${address},
      Phone Number: ${phone},
      "",
      Description of Work Being Requested:,
      ${description},
      "",
      Requested Timeline: ${timeline},
      Allotted Price Range: ${priceRange},
      "",
      Additional Details and/or Information:,
      ${additional},
      "",
      "Please forward this request to:",
      "Will: 513-800-5489 | cione.construction.llc@gmail.com",
      "Joe: 513-940-6296 | afixItservice@gmail.com"
    ];

    const body = encodeURIComponent(bodyLines.join("\n"));

    // Send to both emails via mailto (user can choose which to send from)
    const mailtoLink = mailto:cione.construction.llc@gmail.com,afixItservice@gmail.com?subject=${subject}&body=${body};
    window.location.href = mailtoLink;

    // Optionally clear the form
    form.reset();
    document.getElementById("selectedService").value = "General Request";
    if (formTitle) {
      formTitle.textContent = "Request a Service";
    }
  });
}
