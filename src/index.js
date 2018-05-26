CanvasRenderingContext2D.prototype.dashedArc = function (ox, oy, r, start, end, parts, anticlockwise) {
    const unitSegment = (end - start) / parts;
    for (let i = 0; i < parts; i++) {
        const curStart = start + unitSegment * i;
        const curEnd = curStart + unitSegment;
        if (i % 2 === 0) {
            this.arc(ox, oy, r, curStart, curEnd, anticlockwise);
        } else {
            this.moveTo(ox + r * Math.cos(curEnd), oy + r * Math.sin(curEnd));
        }
    }
};
