const canvas = document.getElementById('myCanvas');
const c = canvas.getContext('2d');


let mouse = {
    x: undefined,
    y: undefined
}
let allBubbels = [];



function Bubble(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = 'rgba(255, 255, 255, 0.4)';
        c.fill();
        c.strokeStyle = '#fff';
        c.stroke();
    };
    this.update = function() {
        this.x += (Math.random() - 0.5) * 2;
        this.y += (Math.random() - 0.5) * 2;
        this.draw();
    };
}

window.addEventListener('click', (e) => {
    mouse.x = e.x - (window.innerWidth - canvas.width) / 2;
    mouse.y = e.y - (window.innerHeight - canvas.height) / 2;
    let x = mouse.x;
    let y = mouse.y;
    let radius = (Math.random() * 4) + 10 ;
    allBubbels.push(new Bubble(x, y, radius));
    animate();
});

function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height);

    for(let i = 0; i < allBubbels.length; i++) {
        allBubbels[i].update();
    }

    requestAnimationFrame(animate);
}
