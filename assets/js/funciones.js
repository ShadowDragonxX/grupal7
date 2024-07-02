function validador(event) {
  event.preventDefault();
  let errores = [];
  const camposValidacion = {
    nombre: { mensaje: "El campo nombre no puede estar vacío" },
    email: {
      mensaje: "El campo email no puede estar vacío",
      validacion: (valor) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor),
      mensajeErrorValidacion: "El formato del email no es válido",
    },
    telefono: { mensaje: "El campo teléfono no puede estar vacío" },
    mensaje: { mensaje: "El campo mensaje no puede estar vacío" },
  };

  Object.keys(camposValidacion).forEach((campo) => {
    let valor = document.getElementById(campo).value;
    let validacion =
      camposValidacion[campo].validacion || ((valor) => valor.trim() !== "");
    if (!validacion(valor)) {
      errores.push(camposValidacion[campo].mensaje);
    } else if (
      camposValidacion[campo].mensajeErrorValidacion &&
      !validacion(valor)
    ) {
      errores.push(camposValidacion[campo].mensajeErrorValidacion);
    }
  });
  function mostrarModalErrores(errores) {
    const errorMessages = document.getElementById("errorMessages");
    errorMessages.innerHTML = errores.join("<br>"); // Mostrar los errores en el modal
    const errorModal = new bootstrap.Modal(
      document.getElementById("errorModal"),
    );
    errorModal.show();
  }
  if (errores.length > 0) {
    mostrarModalErrores(errores);
    return false; // Prevenir el envío del formulario
  } else {
    // Cerrar el modal si no hay errores, opcionalmente
    const modal = document.getElementById("errorModal");
    if (modal) {
      modal.classList.add("modal-closing");
      setTimeout(() => {
        modal.style.display = "none";
        modal.classList.remove("modal-closing");
      }, 1000); // Asegúrate de que este tiempo coincida con la duración de tu animación.
    }
  }
}
function contactoPage() {
  window.location.href = "/html/contacto.html";
}
function volver() {
  window.location.href = "/index.html";
}

