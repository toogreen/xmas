import React from 'react';
import "./css/iphone.css";
import "./css/main.css";
import $ from "jquery";
import MainScript from "./MainScript"
// import Flocons from "./Flocons";

function Card() {
    return (
        <div>
            {/* <!--[if lt IE 9]> */}
                <canvas id="message-ie8" width="100%" height="100%" style="margin-top: 0px;">
                    <div style="color: white;">
                    Your browser does not appear to support HTML5.  Try upgrading your browser to the latest version.  <a style="color: white;" href="http://www.whatbrowser.org">What is a browser?</a>
                    <br/>
                    Votre fureteur ne supporte pas le HTML5. Mettez-le à jour vers la dernière version.  <a style="color: white;" href="http://www.whatbrowser.org">Qu'est-ce qu'un fureteur?</a>
                    <br/><br/>
                    <b>Recommended browsers / Fureteurs recommandés:</b><br/>
                    <a style="color: white;" href="http://www.mozilla.com/firefox/">Mozilla Firefox</a><br/>
                    <a style="color: white;" href="http://www.google.com/chrome/">Google Chrome</a><br/>
                    <a style="color: white;" href="http://www.apple.com/safari/download/">Apple Safari</a><br/>
                    <a style="color: white;" href="http://www.google.com/chromeframe">Google Chrome Frame for Internet Explorer</a><br/>
                    </div>
                </canvas>
            {/* <![endif]--> */}


                {/* Snow floor */}
                <div id="snow-floor" class="snow-floor"></div>

                {/* <!-- Message de Softvoyage avec logo dedans --> */}
                <a href="http://www.mccarthy.ca" target="_blank"><div id="message"></div></a>

                
                <div class="sapin-container">
                    
                    {/* <!-- Sapin de noel --> */}
                    <div id="sapin" class="sapin"></div>
                    
                    {/* <!-- Etoile --> */}
                    <a href="#"><div id="star" class="star"></div></a>

                    {/* <!-- Lumieres --> */}
                    <div id="glow-1" class="glow"></div>
                    <div id="glow-2" class="glow"></div>
                    <div id="glow-3" class="glow"></div>
                    <div id="glow-4" class="glow"></div>
                    <div id="glow-5" class="glow"></div>
                    <div id="glow-6" class="glow"></div>

                    {/* <!-- Cadeaux --> */}
                    <a href="#"><div id="cadeau-open" class="cadeau-open"></div></a>
                    <a href="#"><div id="cadeau-top" class="cadeau-top"></div></a>
                    <a href="#"><div id="paperplane" class="paperplane"></div></a>

                </div> {/* <!-- /sapin-container --> */}



                {/* <!-- Boutons pause et reload --> */}
                <a href="#"><div id="pause" class="pause"></div></a>
                <a href="#"><div id="reload" class="reload"></div></a>

            {/* <!--[if !IE 8 ]> */}

                {/* <!-- Script Divers pour les flocons animés --> */}
                <script type="text/javascript" src="js/ThreeCanvas.js"></script>
                <script type="text/javascript" src="js/Snow.js"></script>

                {/* <!-- jQuery normal --> */}
                <script type="text/javascript" src="js/jquery.min.js"></script>

                {/* <!-- Ajouté ça pour meilleures animations --> */}
                <script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
                
    // Disable scrolling
    $("body").css("overflow", "hidden");

    // loader la musique d'avance
    var audioElement1 = document.createElement('audio');

    audioElement1.setAttribute('src', 'sound/jazzy1.mp3'); // Fonctionne juste sous webkit browsers

    if ($.browser.mozilla || $.browser.opera) {
        audioElement1.setAttribute('src', 'sound/jazzy1.theora.ogv') // Pour que ça joue partout
    }

    // Vu que la musique joue pas encore on definie une variable qui servira pour notre bouton play/pause plus tard
    const audioplaying = false;


// D'abord on fait apparaitre etoile qui "glow" pour attirer le clic
glow1();

    // Si on clique sur l'etoile
    $("#star").click(function(){

        // On fait apparaitre les lumieres dans l'arbre qui clignotent
        glow2()

        // Empecher qu'on puisse cliquer a nouveau dessus
        $(this).unbind('click')

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
        $(this).unbind('click')

        // Joue animation pour ouvrir cadeau
        animation2();

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


            <MainScript />

            {/* <Flocons /> */}

            {/* <!--<![endif]-->            */}
        </div>
    )
}

export default Card
