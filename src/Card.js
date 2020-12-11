import React from 'react';
import "./css/iphone.css";
import "./css/main.css";
import $ from "jquery";
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
                

            <MainScript />

            {/* <Flocons /> */}

            {/* <!--<![endif]-->            */}
        </div>
    )
}

export default Card
