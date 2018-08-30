(function(){
    $(window).keydown(function(e){
        switch(e.key){
            case 'ArrowDown':
                arrowDown();
                break;
            case 'ArrowUp':
                arrowUp();
                break;
            case 'ArrowLeft':
                arrowLeft();
                break;
            case 'ArrowRight':
                arrowRight();
                break;
        }
    })

    function arrowDown(){
        if(!(objects.game.state.snake.headSpeed.x==0&&
            objects.game.state.snake.headSpeed.y==1)){
                // debugger
            objects.game.state.snake.parts[0].speed = {x:0,y:-1};
        }
    }
    function arrowUp(){
        if(!(objects.game.state.snake.headSpeed.x==0&&
            objects.game.state.snake.headSpeed.y==-1)){
            objects.game.state.snake.parts[0].speed = {x:0,y:1};
        }
    }
    function arrowLeft(){
        // debugger
        if(!(objects.game.state.snake.headSpeed.x==1&&
            objects.game.state.snake.headSpeed.y==0)){
            objects.game.state.snake.parts[0].speed = {x:-1,y:0};
        }
    }
    function arrowRight(){
        if(!(objects.game.state.snake.headSpeed.x==-1&&
            objects.game.state.snake.headSpeed.y==0)){
            objects.game.state.snake.parts[0].speed = {x:1,y:0};
        }
    }
})()