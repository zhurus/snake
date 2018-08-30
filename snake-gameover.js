(function(){
    function checkSnakeHasEatenItself(){
        for(var i = 1; i<objects.game.state.snake.parts.length;++i){
            if(objects.game.state.snake.parts[0].x == objects.game.state.snake.parts[i].x &&
                objects.game.state.snake.parts[0].y == objects.game.state.snake.parts[i].y){
                    return true;
                }   
        }
    }

    function checkSnakeHasCrashed(){
        if(objects.game.state.snake.parts[0].x>objects.game.size||
            objects.game.state.snake.parts[0].y>objects.game.size||
            objects.game.state.snake.parts[0].x<1||
            objects.game.state.snake.parts[0].y<1){
                return true;
        }
    }

    function checkGameOver(){
        if(checkSnakeHasCrashed()||checkSnakeHasEatenItself()){
            gameOverHandler();
        }
    }

    function gameOverHandler(){
        alert('Game over with score ' + objects.game.score)
        $('#game').html(''); 
        objects.game = new objects.Game();
        objects.game.state.draw();
    }

    objects.checkGameOver = checkGameOver;
})()

