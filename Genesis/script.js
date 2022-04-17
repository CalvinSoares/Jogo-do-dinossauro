const dino = document.querySelector('.dino');
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

document.addEventListener('keyup', handleKeyUp);