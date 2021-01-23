
$(document).ready(function() {
    $('ul li a').on('click',function(){
        var elm = $("ul .in");
        if(elm.length > 0){
            elm[0].classList.remove("in");
        }
    })

    $(window).click(function() {
        var elm = $("ul .in");
        if(elm.length > 0){
            elm[0].classList.remove("in");
        }
        });
});
