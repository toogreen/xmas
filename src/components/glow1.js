import $ from "jquery";

function glow1() {

// Fonctions principales

    // Faire clignoter l'etoile
        $("#star").animate({opacity:"0"},1000).animate({opacity:"1"},1000);
        setTimeout("glow1()",1);

}

export default glow1;