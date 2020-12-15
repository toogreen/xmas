import $ from "jquery";

function animation2() {

        // Cadeau qui s'ouvre
        $("#cadeau-top").css({'display':'block', 'opacity':'1'}).animate({bottom:"+=100px"},1000);

        // L'avion apparait en fade in
        //$("#paperplane" ).css({'display':'block', 'opacity':'0'}).fadeTo( 1000 , 1, function() {animation3()});

}

export default animation2;