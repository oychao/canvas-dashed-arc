# canvas-dashed-arc

An API to draw dashed arc in canvas of HTML5.

[![Build Status](https://travis-ci.org/oychao/canvas-dashed-arc.svg?branch=master)](https://travis-ci.org/oychao/canvas-dashed-arc)

## When will you use canvas-dashed-arc

You won't, unless your weirdo designer co-worker ask you to.

## How it works

An method named `dashedArc` is added onto `CanvasRenderingContext2D.prototype`.

## How to use

### Demo

Check the [demo][1].

```javascript
import 'canvas-dashed-arc';

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.setAttribute('width', 800);
canvas.setAttribute('height', 600);

const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.dashedArc(400, 300, 200, 0, 2 * Math.PI, 150);
ctx.stroke();
```
### Syntax

```javascript
void ctx.arc(x, y, radius, startAngle, endAngle, parts [, anticlockwise]);
```

**x** The x coordinate of the arc's center.  
**y** The y coordinate of the arc's center.  
**radius** The arc's radius.  
**startAngle** The angle at which the arc starts, measured clockwise from the positive x axis and expressed in radians.  
**endAngle** The angle at which the arc ends, measured clockwise from the positive x axis and expressed in radians.  
**parts** The segment number (including blank parts) the arc will be devided into.  
**anticlockwise** *Optional* An optional Boolean which, if true, causes the arc to be drawn counter-clockwise between the two angles. By default it is drawn clockwise.  

## License

[![](http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png)](http://www.wtfpl.net/)

[1]: https://github.com/oychao/canvas-dashed-arc/tree/master/demo
