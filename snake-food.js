(function(){
    function foodEatenHandler(objects){
        
        generateNewPositionOfFood();
        
        objects.game.score++;
        $('#header').text('Score: ' + objects.game.score);
    }

    function checkFoodEaten(){
        if(objects.game.state.snake.parts[0].x == objects.game.state.food.x &&
        objects.game.state.snake.parts[0].y == objects.game.state.food.y){
            
            foodEatenHandler(objects);

            var length = objects.game.state.snake.parts.length;
            var x = objects.game.state.snake.parts[length-1].x;
            var y = objects.game.state.snake.parts[length-1].y;
            var speed = {x:0,y:0};
            objects.game.state.snake.parts.push(new objects.Section(x,y,speed));
            objects.game.state.snake.parts[length].draw();        
        }
    }

    function generateNewPositionOfFood(){
        var cellsCopy = objects.game.cells; //all gamefield cells
        // filtering gamefield cells to find spare cells
        cellsCopy = cellsCopy.filter(function(cell){
            var result = true; 
            objects.game.state.snake.parts.forEach(part => {
                
                if(part.x == cell.x && part.y == cell.y){
                    result = false;
                }
            });
            return result;
        })
        // random number between 1 and length of filtered cells array 
        var i = Math.round((cellsCopy.length - 1) * Math.random()) 
        // move position of food to a new position on the screen
        objects.game.state.food.x = cellsCopy[i].x;
        objects.game.state.food.y = cellsCopy[i].y;
        objects.game.state.food.updatePosition();
    }

    objects.checkFoodEaten = checkFoodEaten;
})()