(function () {
  emailjs.init("TEzQuHfY1IqF0GlXY");
  console.log("EmailJS inicializado");
})();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    console.log("Formulario enviado", { nombre, email, mensaje });

    const sendEmail = (service, template, params) => {
      console.log(`Enviando correo con servicio: ${service} y plantilla: ${template}`, params);
      return emailjs.send(service, template, params);
    };

    sendEmail("servicio_46165672", "formulario_356167721", { nombre, email, mensaje })
      .then(() => {
        console.log("Mensaje enviado correctamente.");
        return sendEmail("servicio_46165672", "confirmar_kww928319", { nombre, email });
      })
      .then(() => {
        console.log("Correo de confirmación enviado.");
        form.style.display = "none";
        const resultado = document.getElementById("resultadoExito");
        const mensajeExito = document.getElementById("mensajeExito");

        mensajeExito.textContent = `¡Gracias por contactarnos, ${nombre}! Te hemos enviado una confirmación por correo.`;
        resultado.style.display = "block";
      })
      .catch((error) => {
        console.error("Error durante el proceso:", error);
        alert(error.message || "Hubo un error al enviar el mensaje.");
      });
  });
});
