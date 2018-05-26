import 'canvas-dashed-arc';
// import '../bin/bundle';

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.setAttribute('width', 800);
canvas.setAttribute('height', 600);

const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.dashedArc(400, 300, 200, 0, 2 * Math.PI, 150);
ctx.stroke();
