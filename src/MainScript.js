import $ from "jquery";

function MainScript() {

// Fonctions principales

    const glow1 = () => { // Faire clignoter l'etoile
        $("#star").animate({opacity:"0"},1000).animate({opacity:"1"},1000);
        setTimeout("glow1()",1);
    }

    const glow2 = () => { // Faire clignoter les lumieres dans le sapin
        $("#glow-1").animate({opacity:"0"},800).animate({opacity:"1"},800);
        $("#glow-2").animate({opacity:"0"},750).animate({opacity:"1"},750);
        $("#glow-3").animate({opacity:"0"},700).animate({opacity:"1"},700);
        $("#glow-4").animate({opacity:"0"},650).animate({opacity:"1"},650);
        $("#glow-5").animate({opacity:"0"},600).animate({opacity:"1"},600);
        $("#glow-6").animate({opacity:"0"},550).animate({opacity:"1"},550);
        setTimeout("glow2()",1000);
    }

    const animation1 = () => {

        // Show cadeau 1
        $("#cadeau-open, #cadeau-top, #paperplane").css({'display':'block', 'opacity':'1'}).animate({bottom:"-=2020px"},1000);
        
    }

    const animation2 = () => {

        // Cadeau qui s'ouvre
        $("#cadeau-top").css({'display':'block', 'opacity':'1'}).animate({bottom:"+=100px"},1000);

        // L'avion apparait en fade in
        $("#paperplane" ).css({'display':'block', 'opacity':'0'}).fadeTo( 1000 , 1, function() {animation3()});

    }

    const animation3 = () => {

        // Cadeau se referme
        $("#cadeau-top").css({'display':'block', 'opacity':'1'}).animate({bottom:"-=100px"},1000).unbind('click');

        // L'avion disparait en fade out et en se deplacant en diagonale vers le top-left
        $("#paperplane").css({'display':'block', 'opacity':'1'}).animate({left: "-=200", bottom:"+=200px" },1000);
        //$("#paperplane").animate({bottom:"+=50px"},400);
        $("#paperplane").fadeTo( 400 , 0, function() {animation4()});
        

    }

    const animation4 = () => {

        // Faire apparaitre message de bons souhaits
        $("#message" ).css({'visibility':'visible', 'display':'block', 'opacity':'0'}).fadeTo( 500 , 1, function() {});

    }

}

export default MainScript;