import 'canvas-dashed-arc';
// import '../bin/bundle';

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.setAttribute('width', 400);
canvas.setAttribute('height', 300);

const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.dashedArc(200, 150, 100, 0, 2 * Math.PI, 90);
ctx.stroke();
