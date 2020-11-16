import React from "React";

    // Disable scrolling
    $("body").css("overflow", "hidden");

    // loader la musique d'avance
    var audioElement1 = document.createElement('audio');

    audioElement1.setAttribute('src', 'sound/jazzy1.mp3'); // Fonctionne juste sous webkit browsers

    if ($.browser.mozilla || $.browser.opera) {
        audioElement1.setAttribute('src', 'sound/jazzy1.theora.ogv'); // Pour que ça joue partout
    }

    // Vu que la musique joue pas encore on definie une variable qui servira pour notre bouton play/pause plus tard
    const audioplaying = false;


// D'abord on fait apparaitre etoile qui "glow" pour attirer le clic
glow1();

    // Si on clique sur l'etoile
    $("#star").click(function(){

        // On fait apparaitre les lumieres dans l'arbre qui clignotent
        glow2();

        // Empecher qu'on puisse cliquer a nouveau dessus
        $(this).unbind('click');


        // Pars la musique!
        audioElement1.play();

        // On averti notre variable qu'on joue maintenant
        audioplaying = true;

        // On affiche les boutons pause et reload
        $("#pause").css({'display':'block', 'opacity':'1'})
        $("#reload").css({'display':'block', 'opacity':'1'})


        // On joue la première séquence (cadeau 1 apparait)
        animation1();

    });

    // If we click on cadeau1
    $("#cadeau-open, #cadeau-top").click(function(){

        // Empecher qu'on puisse cliquer a nouveau dessus
        $(this).unbind('click');

        // Joue animation pour ouvrir cadeau
        animation2();

        // If we click on paper plane (ou sur le cadeau)
        // $("#paperplane, #cadeau-open, #cadeau-top").click(function(){

        // 	// Empecher qu'on puisse cliquer a nouveau dessus
        // 	$(this).unbind('click');

        // 	// Joue animation pour fermer cadeau
        // 	animation3();

        // });

    });

    // If we click on message softvoyage
    $("#message").click(function(){

        // STOP la musique!
        audioElement1.pause();
        audioplaying = false;
        $("#pause").css('background', 'url(img/sound-off.png)');

        // On joue la dernière séquence (Message de bons voeux apparait et l'étoile sur le sapin)
        animation4();

    });

    // If we click sur bouton pause musique
    $("#pause").click(function(){

        if(audioplaying == true){
                    
            // STOP la musique!
            audioElement1.pause();
            audioplaying = false;
            $("#pause").css('background', 'url(img/sound-off.png)');

        } else {
            // PLAY la musique!
            audioElement1.play();
            audioplaying = true;
            $("#pause").css('background', 'url(img/sound-on.png)');
        }
    });


    // Pour les mouse-over sur le bouton reload
    $( "#reload" ).mouseenter(function() {
    $(this).css('background', 'url(img/reload-hover.png)');
    });

    $( "#reload" ).mouseleave(function() {
    $(this).css('background', 'url(img/reload.png)');
    });

    // Si on clique sur le bouton reload on reload la page
    $( "#reload" ).click(function() {
    location.reload();
    });



}); // fin du jQuery


// Fonctions principales

    function glow1(){ // Faire clignoter l'etoile
        $("#star").animate({opacity:"0"},1000).animate({opacity:"1"},1000);
        setTimeout("glow1()",1);
    }

    function glow2(){ // Faire clignoter les lumieres dans le sapin
        $("#glow-1").animate({opacity:"0"},800).animate({opacity:"1"},800);
        $("#glow-2").animate({opacity:"0"},750).animate({opacity:"1"},750);
        $("#glow-3").animate({opacity:"0"},700).animate({opacity:"1"},700);
        $("#glow-4").animate({opacity:"0"},650).animate({opacity:"1"},650);
        $("#glow-5").animate({opacity:"0"},600).animate({opacity:"1"},600);
        $("#glow-6").animate({opacity:"0"},550).animate({opacity:"1"},550);
        setTimeout("glow2()",1000);
    }

    function animation1(){

        // Show cadeau 1
        $("#cadeau-open, #cadeau-top, #paperplane").css({'display':'block', 'opacity':'1'}).animate({bottom:"-=2020px"},1000);
        
    }

    function animation2(){

        // Cadeau qui s'ouvre
        $("#cadeau-top").css({'display':'block', 'opacity':'1'}).animate({bottom:"+=100px"},1000);

        // L'avion apparait en fade in
        $("#paperplane" ).css({'display':'block', 'opacity':'0'}).fadeTo( 1000 , 1, function() {animation3()});

    }

    function animation3(){

        // Cadeau se referme
        $("#cadeau-top").css({'display':'block', 'opacity':'1'}).animate({bottom:"-=100px"},1000).unbind('click');

        // L'avion disparait en fade out et en se deplacant en diagonale vers le top-left
        $("#paperplane").css({'display':'block', 'opacity':'1'}).animate({left: "-=200", bottom:"+=200px" },1000);
        //$("#paperplane").animate({bottom:"+=50px"},400);
        $("#paperplane").fadeTo( 400 , 0, function() {animation4()});
        

    }

    function animation4(){

        // Faire apparaitre message de bons souhaits
        $("#message" ).css({'visibility':'visible', 'display':'block', 'opacity':'0'}).fadeTo( 500 , 1, function() {});

    }

export default MainScript