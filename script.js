document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("#nav-toggle");
  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.addEventListener("click", () => { if (toggle) toggle.checked = false; });
  });

  const form = document.querySelector("#contact-form");
  const feedback = document.querySelector("#form-feedback");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) return form.reportValidity();
    feedback.hidden = false;
    form.reset();
  });
});
