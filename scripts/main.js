/**
 * @author: Adrián Iglesias Riño
 * @github: 
 */
import { random, width,height,loop } from "./canvas-setup.js";
import { Ball } from "./class-ball.js";

export const balls = [];
//cambio el numero de bolas para que sea mas visual. pero no es el error...
while (balls.length < 25) {
    const size = random(10, 20);
    const ball = new Ball(
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        size
    );

    balls.push(ball);
}

loop();