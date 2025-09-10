document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".scroll-animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // aparece
        } else {
          entry.target.classList.remove("visible"); // desaparece => se repite siempre
        }
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -100px 0px", // ajusta cuándo empieza
      threshold: 0,
    }
  );

  elements.forEach((el) => observer.observe(el));
});





document.getElementById('animatedText').textContent = "Explorando gradientes con JS";





    // Selecciona todos los elementos con la clase "exp-item"
    const expItems = document.querySelectorAll(".exp-item");
    document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".exp-item"); // Selecciona los elementos con la animación

    const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate"); // Agrega la clase para activar la animación
        }
        });
    },
    {
        root: null,
        rootMargin: "0px 0px -200px 0px", 
        threshold: 0,
    }
    );

    elements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".exp-item");

    const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate"); 
        } else {
            entry.target.classList.remove("animate");
        }
        });
    },
    {
        root: null,
        rootMargin: "0px 0px -100px 0px",
        threshold: 0,
    }
    );

  elements.forEach((el) => observer.observe(el)); // Observa cada elemento
});

