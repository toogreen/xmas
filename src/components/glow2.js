import $ from "jquery";

function glow2() {

// Faire clignoter les lumieres dans le sapin
        $("#glow-1").animate({opacity:"0"},800).animate({opacity:"1"},800);
        $("#glow-2").animate({opacity:"0"},750).animate({opacity:"1"},750);
        $("#glow-3").animate({opacity:"0"},700).animate({opacity:"1"},700);
        $("#glow-4").animate({opacity:"0"},650).animate({opacity:"1"},650);
        $("#glow-5").animate({opacity:"0"},600).animate({opacity:"1"},600);
        $("#glow-6").animate({opacity:"0"},550).animate({opacity:"1"},550);
        setTimeout("glow2()",1000);
}


export default glow2;