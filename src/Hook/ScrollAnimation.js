const logo_img = document.getElementById("logo_img");

const CargarImg = (entradas, observador) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible")
        }else{
            // entrada.target.classList.remove("visible")
        }
    })
};

const observador = new IntersectionObserver(CargarImg, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0,
});

observador.observe(logo_img);
