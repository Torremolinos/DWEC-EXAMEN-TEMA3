import { balls } from "./main.js";
const canvas = document.querySelector('canvas');
export const ctx = canvas.getContext('2d');

//Aqui hago un cambio en el innerWidth porque los dos eran height y uno debe ocuparse del largo y otro del ancho.
export const width = canvas.width = window.innerWidth;
export const height = canvas.height = window.innerHeight;

export function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomRGB() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}
export function loop() {
    //El color del fondo es verde asi que si cambiamos los paramtros rgba a (0,0,0,0.25) lo dejamos de color negro.
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);

    for (const ball of balls) {
        ball.draw();
        ball.update();
        for (const otherBall of balls) {
            if (ball !== otherBall) {
                ball.collisionDetect(otherBall);
            }
        }
    }

    requestAnimationFrame(loop);
}