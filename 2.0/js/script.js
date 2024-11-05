// Scroll suave para todos los enlaces
document.querySelectorAll('.header__nav-link, .hero__cta').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href'); // Obtiene el atributo href
    const target = document.querySelector(targetId); // Selecciona el objetivo

    if (target) { // Verifica si el objetivo existe
      target.scrollIntoView({
        behavior: 'smooth' // Desplazamiento suave
      });
    }
  });
});

// Validación de formulario de contacto
document
  .querySelector(".contact__form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector('.contact__input[type="text"]');
    const email = document.querySelector('.contact__input[type="email"]');
    const message = document.querySelector(".contact__textarea");
    let isValid = true;

    // Limpiar mensajes de error previos
    document.querySelectorAll(".error").forEach((error) => error.remove());

    // Validación de nombre
    if (name.value.trim() === "") {
      showError(name, "El nombre es obligatorio");
      isValid = false;
    }

    // Validación de correo
    if (!validateEmail(email.value.trim())) {
      showError(email, "El correo no es válido");
      isValid = false;
    }

    // Validación de mensaje
    if (message.value.trim() === "") {
      showError(message, "El mensaje es obligatorio");
      isValid = false;
    }

    // Si todo es válido, mostrar alerta de éxito
    if (isValid) {
      alert("Formulario enviado con éxito");
      // Aquí puedes procesar el envío del formulario
    }
  });

// Mostrar mensaje de error
function showError(input, message) {
  const error = document.createElement("small");
  error.classList.add("error");
  error.style.color = "#FF0000";
  error.textContent = message;
  input.parentElement.appendChild(error);
}

// Validación simple de correo
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
}


