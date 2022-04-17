const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isjumping = false;


function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (!isjumping) {
         jump();
        }
    }
}

function jump() {
    let position = 0;
    isjumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isjumping = false;
                } else {
                position -= 20;
                dino.style.bottom = position + 'px';
                }
            }, 20);
        }else {
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20);
}

function creatCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        cactusPosition -= 18;
        cactus.style.left = cactusPosition + 'px';
    }, 20);
}

creatCactus();
document.addEventListener('keyup', handleKeyUp);
