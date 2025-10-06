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
