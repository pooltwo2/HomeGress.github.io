document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".img-galeria");

  images.forEach(img => {
    img.addEventListener("click", (e) => {
      e.stopPropagation();

      // Si ya está ampliada, se cierra
      if (img.classList.contains("ampliada")) {
        cerrarImagen(img);
        return;
      }

      // Cerrar cualquier otra ampliada
      document.querySelectorAll(".img-galeria.ampliada")
        .forEach(i => cerrarImagen(i));

      // Ampliar esta
      img.classList.add("ampliada");
      document.body.classList.add("imagen-ampliada");
    });
  });

  // Cerrar al hacer clic en cualquier parte del body
  document.addEventListener("click", () => {
    document.querySelectorAll(".img-galeria.ampliada")
      .forEach(i => cerrarImagen(i));
  });

  // Cerrar con Escape
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".img-galeria.ampliada")
        .forEach(i => cerrarImagen(i));
    }
  });

  // Función para cerrar
  function cerrarImagen(img) {
    img.classList.remove("ampliada");
    document.body.classList.remove("imagen-ampliada");
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("whatsappForm");
  
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Obtener datos
      const nombre = document.getElementById("nombre").value.trim();
      const ubicacion = document.getElementById("ubicacion").value.trim();
      const email = document.getElementById("email").value.trim() || "no tengo correo";
      const mensaje = document.getElementById("mensaje").value.trim();

      // Número de destino
      const telefono = "573165177013";

      // Crear texto del mensaje profesional
      const texto = 
        `Hola, soy ${nombre}. Quiero ${mensaje}. ` +
        `Me encuentro en ${ubicacion}. ` +
        `Mi correo electrónico es ${email}.`;

      // Codificar mensaje para URL
      const textoCodificado = encodeURIComponent(texto);

      // Enlace de WhatsApp
      const url = `https://wa.me/${telefono}?text=${textoCodificado}`;

      // Abrir WhatsApp
      window.open(url, "_blank");
    });
  }
});
