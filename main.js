let straightLineFunction = function (pointA, pointB) {
    this.Gradient = pointB.x - pointA.x > 0 ? (pointB.y - pointA.y) / (pointB.x - pointA.x) : null;
    this.YIntercept = this.Gradient === null ? null : pointA.y - this.Gradient*pointA.x;

    this.FindX = y => (y - this.YIntercept) / Gradient;
    this.FindY = x => this.Gradient*x + this.YIntercept;

    this.FindX = this.FindX.bind(this);
    this.FindY = this.FindY.bind(this);
}

window.addEventListener('DOMContentLoaded', (event) => {
    let linePath = d3.path();
    linePath.moveTo(50, 0);
    linePath.lineTo(100, 100);
    linePath.lineTo(0, 100);
    linePath.closePath();

    d3.select('#svgCanvas')
        .attr('viewBox', "0 0 100 100")
        .append('path')
        .attr('d', linePath.toString())
        .attr('id', 'unfilledArrow');
    
    let newLinePathContext = d3.path();
    newLinePathContext.moveTo(50, 0);
    newLinePathContext.lineTo(50, 0);

    d3.select('#svgCanvas')
        .append('path')
        .attr('d', linePath.toString());
});