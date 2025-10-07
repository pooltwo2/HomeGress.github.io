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
  // Observador para detectar cuando los elementos entran en pantalla
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.2 // se activa cuando el 20% del elemento es visible
  });

  // Aplica el observador a todos los elementos con scroll-animate
  document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
});



// Botón "Ir arriba"
const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
});

btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// FORMULARIO QUE ENVÍA MENSAJE A WHATSAPP
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("whatsappForm");
  
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // evita recargar la página

      // Obtener datos del formulario
      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim() || "no tengo correo";
      const mensaje = document.getElementById("mensaje").value.trim();

      // Número de destino (reemplázalo con el tuyo)
      const telefono = "573165177013";

      // Crear texto del mensaje
      const texto = `Hola, soy ${nombre}. Quiero ${mensaje}. Mi correo es ${email}.`;

      // Codificar para URL
      const textoCodificado = encodeURIComponent(texto);

      // Crear enlace de WhatsApp
      const url = `https://wa.me/${telefono}?text=${textoCodificado}`;

      // Abrir WhatsApp
      window.open(url, "_blank");
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const galeria = document.querySelector("#Galeria");
  const titulo = document.querySelector(".Galeria-titulo");
  const texto = document.querySelector(".texto-galeria");
  const imagenes = document.querySelectorAll(".img-galeria");

  if (galeria) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          // 1️⃣ Aparece el título
          if (titulo) {
            setTimeout(() => titulo.classList.add("visible"), 200);
          }

          // 2️⃣ Luego el texto
          if (texto) {
            setTimeout(() => texto.classList.add("visible"), 600);
          }

          // 3️⃣ Finalmente las imágenes una a una
          imagenes.forEach((img, index) => {
            setTimeout(() => img.classList.add("visible"), 1000 + index * 250);
          });

          observer.disconnect(); // evita repetir la animación
        }
      });
    }, { threshold: 0.3 });

    observer.observe(galeria);
  }
});
