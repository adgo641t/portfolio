document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", () => {
        let scrollTop = window.scrollY;
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        let porcentaje = scrollTop / maxScroll; // Porcentaje del scroll

        // Interpolación lineal entre azul oscuro (0, 0, 51) y negro (0, 0, 0)
        let azul = Math.floor(51 * (1 - porcentaje)); // Reduce el azul hasta 0

        document.body.style.backgroundColor = `rgb(0, 0, ${azul})`;
    });
})