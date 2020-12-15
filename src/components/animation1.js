import $ from "jquery";

function animation1() {

    // Show cadeau 1
    $("#cadeau-open, #cadeau-top, #paperplane").css({'display':'block', 'opacity':'1'}).animate({bottom:"-=2020px"},1000);
        
}

export default animation1;