// Inicializar EmailJS
(function () {
  emailjs.init("TEzQuHfY1IqF0GlXY");
})();
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;
    // Enviar correo principal
    emailjs
      .send("servicio_46165672", "formulario_356167721", {
        nombre: nombre,
        email: email,
        mensaje: mensaje,
      })
      .then(
        function () {
          // Enviar correo de confirmación
          emailjs
            .send("servicio_46165672", "confirmar_kww928319", {
              nombre: nombre,
              email: email,
            })
            .then(
              function () {
                form.style.display = "none";
                const resultado = document.getElementById("resultadoExito");
                const mensajeExito = document.getElementById("mensajeExito");

                mensajeExito.textContent =
                  "¡Gracias por contactarnos, " +
                  nombre +
                  "! Te hemos enviado una confirmación por correo.";
                resultado.style.display = "block";
              },
              function (error) {
                console.error("Error en confirmación:", error);
                alert(
                  "Tu mensaje fue enviado, pero no pudimos enviarte un correo de confirmación."
                );
              }
            );
        },
        function (error) {
          console.error("Error al enviar el mensaje:", error);
          alert("Hubo un error al enviar el mensaje.");
        }
      );
  });
});
