(function(){
    $(document).ready(function(){
        centerGameField();
        $(window).resize(function(){
            objects.centerGameField();
            objects.game.state.updateDrawing();
        });
    })

    function centerGameField(){
        // debugger
        if($(window).outerWidth()>$(window).outerHeight()-$('#header').outerHeight()){
            // ширина поля больше, чем высота 
            var margin_right = ($(window).outerWidth() - $(window).outerHeight() + 
                $('#header').outerHeight())/2
            var margin_top = $('#header').outerHeight();

            $('#game').css('left',margin_right+"px");
            $('#game').css('right',margin_right+"px");
            $('#game').css('top',margin_top);
            $('#game').css('bottom',0);
        }
        else{
            // ширина поля меньше чем высота
            var margin_bottom = ($(window).outerHeight() 
                - $('#header').outerHeight() - $(window).outerWidth())/2;
            var margin_top = $('#header').outerHeight() + 
                margin_bottom;
            var margin_right = ($(window).outerWidth() - 
                $('#game').outerHeight())*50/$(window).outerWidth();
            
            $('#game').css('left',0);
            $('#game').css('right',0);
            $('#game').css('top',margin_top+'px');
            $('#game').css('bottom',margin_bottom+'px');
        }
    }
    objects.centerGameField = centerGameField;
})()