const contactSubmit = document.getElementById("contact-submit");
const waNumber = "6285185799456";

if (contactSubmit) {
  contactSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const message = messageInput ? messageInput.value.trim() : "";

    if (!name || !email || !message) {
      alert("Mohon lengkapi semua field terlebih dahulu.");
      return;
    }

    const rawText = `Halo, saya ${name} (${email}).\n\n${message}`;
    
    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(rawText)}`;
    
    window.open(waLink, "_blank");
  });
}
