import $ from "jquery";

function animation3() {

        // Cadeau se referme
        $("#cadeau-top").css({'display':'block', 'opacity':'1'}).animate({bottom:"-=100px"},1000).unbind('click');

        // L'avion disparait en fade out et en se deplacant en diagonale vers le top-left
        $("#paperplane").css({'display':'block', 'opacity':'1'}).animate({left: "-=200", bottom:"+=200px" },1000);
        //$("#paperplane").animate({bottom:"+=50px"},400);
        $("#paperplane").fadeTo( 400 , 0, function() {animation4()});
        

}

export default animation3;