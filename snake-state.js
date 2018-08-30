(function(){
    function State(){
        this.snake = new objects.Snake({x:7,y:13},4,{x:1,y:0});
        this.food = new objects.Section(randomInteger(1,25),
            randomInteger(1,25),{x:0, y:0});
        this.food.selector.removeClass('section').addClass('food');
        this.draw = drawState.bind(this);
        this.updateDrawing = updateDrawing.bind(this);
    }

    function drawState(){
        this.snake.draw();
        this.food.draw();
    }

    function updateDrawing(){
        this.food.updatePosition();
        this.snake.updatePosition();
    }

    // function foodCoordinates(){
    //     //TODO
    //     return {x:X, y:Y}
    // }

    function randomInteger(from,to){
        return from + Math.round((to - from) * Math.random());
    }

    objects.State = State;
})()