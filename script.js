const preguntas = document.querySelectorAll(".pregunta");

preguntas.forEach(function (pregunta) {
  pregunta.addEventListener("click", function () {
    const respuesta = pregunta.nextElementSibling;

    // Cierra todas las respuestas
    document.querySelectorAll(".respuesta").forEach(function (r) {
      if (r !== respuesta) {
        r.classList.remove("activa");
      }
    });

    // Abre o cierra la que se hizo clic
    respuesta.classList.toggle("activa");
  });
});