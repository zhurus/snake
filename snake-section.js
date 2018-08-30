(function(){
    function Section(x,y,speed){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.selector = $('<div>').addClass('section');
        this.draw = drawSection.bind(this);
        this.updatePosition = locateSection.bind(this);
        this.move = move.bind(this);
    }

    function locateSection(){
        this.selector.offset(coordinatesToScreen(this));
    }

    function drawSection (){
        this.selector.appendTo($('#game'));
        secSelector= this.selector;
        var o = $('#game').offset();
        secSelector.offset(coordinatesToScreen(this));
    }

    function coordinatesToScreen(section){
        var o = $('#game').offset();
        var x = (section.x-1)*$('.section').width()-2;
        var y = $('#game').width()-$('.section').height()*section.y - 2;
        return({
            left: o.left + x,
            top: o.top + y
        })
    }

    function move(){
        this.x += this.speed.x;
        this.y += this.speed.y;
    }

    objects.Section = Section;
})()