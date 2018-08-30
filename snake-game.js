(function(){
    function Game(){
        this.state = new objects.State;
        
        this.cells = [];
        this.size = 25;
        for(var i = 0;i<this.size;++i){
            for(var j = 0;j<this.size;++j){
                this.cells.push({x:i+1,y:j+1});
            }
        }
        
        this.score = 0;
        this.level = 1;
        $('#header').text('Score: 0 ');
    }

    objects.Game = Game;

    objects.game = new Game;
})();
