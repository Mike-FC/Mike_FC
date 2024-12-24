// Un programa interactivo en JavaScript para un paisaje relajante

// Configuración inicial del lienzo
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.style.margin = '0';
document.body.style.overflow = 'hidden';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = 'linear-gradient(to top, #87cefa, #ffffff)';
document.body.appendChild(canvas);

// Elementos de UI
const button = document.createElement('button');
button.innerText = 'Disfrutar del Paisaje';
button.style.position = 'absolute';
button.style.bottom = '20px';
button.style.left = '50%';
button.style.transform = 'translateX(-50%)';
button.style.padding = '15px 30px';
button.style.background = 'linear-gradient(to right, #56ab2f, #a8e063)';
button.style.color = 'white';
button.style.border = 'none';
button.style.fontSize = '18px';
button.style.cursor = 'pointer';
button.style.borderRadius = '10px';
button.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.2)';
button.addEventListener('click', startJourney);
document.body.appendChild(button);

// Dibujar cielo con nubes
function drawSky() {
    ctx.fillStyle = '#87cefa';
    ctx.fillRect(0, 0, canvas.width, canvas.height / 2);

    for (let i = 0; i < 5; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height / 2;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(x, y, 50, 0, Math.PI * 2);
        ctx.arc(x + 40, y, 50, 0, Math.PI * 2);
        ctx.arc(x + 20, y - 30, 40, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Dibujar colinas
function drawHills() {
    const colors = ['#228B22', '#32CD32', '#7CFC00'];

    colors.forEach((color, i) => {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(0, canvas.height - (100 * i));
        ctx.quadraticCurveTo(
            canvas.width / 4, canvas.height - (200 * (i + 1)),
            canvas.width / 2, canvas.height - (100 * i)
        );
        ctx.quadraticCurveTo(
            (canvas.width * 3) / 4, canvas.height - (200 * (i + 1)),
            canvas.width, canvas.height - (100 * i)
        );
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fill();
    });
}

// Mostrar mensajes relajantes
function showMessage(messages, index = 0) {
    if (index < messages.length) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawSky();
        drawHills();
        ctx.fillStyle = 'Red';
        ctx.textAlign = 'center';
        ctx.font = '24px Helvetica';
        ctx.fillText(messages[index], canvas.width / 2, canvas.height / 2);
        setTimeout(() => showMessage(messages, index + 1), 3000);
    } else {
        displayThanks();
    }
}

// Mostrar mensaje de agradecimiento final
function displayThanks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSky();
    drawHills();
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.font = '28px Helvetica';
    ctx.fillText('Gracias por ver este intento de paisaje jajaja  🌿✨', canvas.width / 2, canvas.height / 2);
}

// Iniciar el viaje relajante
function startJourney() {
    const messages = [
        "Cruzare los montes, los rios, los valles por irte a encontrar...",
        "Salvaria tormentas, ciclones, dragones sin exagerar...",
        "Por poder mirarme en tus ojos bonitos Y vivir la gloria de estar a tu lado...",
        "Porque en mi ya siento que te nececito...",
        "Que me he enamorado." 
    ];
    showMessage(messages);
}

// Dibujar escena inicial
drawSky();
drawHills();
