const container = document.querySelector(".hearts-background");

function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.style.position = "absolute";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animation = `fall ${Math.random() * 3 + 4}s linear`;
  heart.style.opacity = Math.random();

  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 400);

const inicio = new Date("2025-12-28T22:30:00"); // AAAA-MM-DDTHH:MM:SS

    function actualizarContador() {
        const ahora = new Date();
        let diferencia = Math.floor((ahora - inicio) / 1000);

        const dias = Math.floor(diferencia / (3600 * 24));
        diferencia %= 3600 * 24;

        const horas = Math.floor(diferencia / 3600);
        diferencia %= 3600;

        const minutos = Math.floor(diferencia / 60);
        const segundos = diferencia % 60;

        document.getElementById("tiempo").innerHTML =
            `${dias} días<br>
             ${horas} h ${minutos} m ${segundos} s`;
    }

    actualizarContador();
    setInterval(actualizarContador, 1000);