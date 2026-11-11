
const enlaces = document.querySelectorAll("nav a");

const secciones = document.querySelectorAll(
    "main section[id]"
);

function actualizarMenu() {

    let actual = "";

    secciones.forEach(seccion => {

        const posicion = seccion.offsetTop;

        if (window.scrollY >= posicion - 150) {
            actual = seccion.id;
        }

    });

    enlaces.forEach(enlace => {

        enlace.classList.remove("activo");

        if (enlace.getAttribute("href") === "#" + actual) {
            enlace.classList.add("activo");
        }

    });
}

window.addEventListener("scroll", actualizarMenu);

