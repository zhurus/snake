(function(){
    function Snake(headCoordinates,sectionsNumber,speed){
        this.parts = [];
        for(var i = 0;i<sectionsNumber;++i){
            var x = headCoordinates.x - i*speed.x;
            var y = headCoordinates.y - i*speed.y;
            this.parts.push(new objects.Section(x,y,speed));
        }
        this.headSpeed = speed;
        this.draw = drawSnake.bind(this);
        this.updatePosition = locateSnake.bind(this);
        this.move = move.bind(this);
    }

    function drawSnake(){
        this.parts.forEach(section => {
            section.draw();
        });
    }

    function locateSnake(){
        this.parts.forEach(section=>{
            section.updatePosition();
        });
    }

    function move(){
        this.parts.forEach((part,i)=>{
            if(i < objects.game.state.snake.parts.length-1){
                objects.game.state.snake.parts[i+1].speed = {
                    x: objects.game.state.snake.parts[i].x - 
                        objects.game.state.snake.parts[i+1].x,
                    y: objects.game.state.snake.parts[i].y -
                        objects.game.state.snake.parts[i+1].y
                };
            }
            part.move();
        });
        this.headSpeed = this.parts[0].speed;
    }

    objects.Snake = Snake;
})()