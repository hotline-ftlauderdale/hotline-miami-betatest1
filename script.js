const player = document.getElementById('player');

// Initial player position
let playerX = 50;
let playerY = 50;

// Update player position and rotation based on mouse movement
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const angle = Math.atan2(mouseY - playerY, mouseX - playerX);
    const degrees = angle * (180 / Math.PI);

    player.style.transform = `translate(-50%, -50%) translate(${playerX}px, ${playerY}px) rotate(${degrees}deg)`;
});

// Update player position based on keyboard input
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'w':
            playerY -= 5;
            break;
        case 'a':
            playerX -= 5;
            break;
        case 's':
            playerY += 5;
            break;
        case 'd':
            playerX += 5;
            break;
    }
    player.style.left = playerX + 'px';
    player.style.top = playerY + 'px';
});
