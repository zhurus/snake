$(document).ready(function(){
    // objects.game.state = new objects.State();
    objects.game = new objects.Game;
    objects.game.state.draw();
    objects.game.level = 10;
    var time = 1000 - (1000 - 100)/10*(objects.game.level-1);
    setInterval(timeFlows,time);
});

function timeFlows(){
    objects.checkFoodEaten();
    objects.game.state.snake.move();
    objects.game.state.updateDrawing();
    objects.checkGameOver();
}