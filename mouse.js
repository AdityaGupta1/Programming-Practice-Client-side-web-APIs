paper.install(window);

window.onload = function() {
    paper.setup('myCanvas');

    // Create a simple drawing tool:
    let tool = new Tool();
    let path;
    let interval;

    function setPathColor() {
        let time = new Date().getTime();
        let hue = time / 5;
        path.strokeColor = 'hsl(' + hue + ', 100%, 50%)';
    }

    function getRandomInt(min, max) {
      return min + Math.floor(Math.random() * max);
    }

    // Define a mousedown and mousedrag handler
    tool.onMouseDown = function(event) {
        path = new Path();
        setPathColor();
        path.strokeWidth = 0;
        path.add(event.point);
        path.dashArray = [30, getRandomInt(2, 4)];

        interval = setInterval(setPathColor, 100);
    }

    tool.onMouseDrag = function(event) {
        path.add(event.point);
        path.strokeWidth = Math.min(path.length / 50, 20);
    }

    tool.onMouseUp = function(event) {
        clearInterval(interval);

        for (let i = 5; i > 0; --i) {
            let pathScaleFactor = Math.min(path.length / 50, 20);

            let circle = new Path.Circle({
                center: event.point,
                radius: i * pathScaleFactor
            });

            circle.strokeColor = 'black';
            circle.fillColor = path.strokeColor;
        }
    }
}