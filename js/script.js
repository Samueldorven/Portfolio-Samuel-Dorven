$(function(){
	// Ici, le DOM est entièrement défini
	// On peut y mettre le code de traitement
    
//Fonction d'agrandissement d'image
function afficherGrandeImage(){
    var divFond = $("<div>");
    divFond.css({'position': 'fixed', 'top': '0px', 'left': '0px', 'background-color': 'rgba(0,0,0, 0.8)', 'width': '100%', 'height': '100%'});
    $('body').append(divFond);
    
    var divGrandeImage = $('<div>'); 
    divFond.css({'position': 'fixed',});
    divFond.append(divGrandeImage);
    
    var grandeImage = $(this).clone();
    grandeImage.css({'width': '600px', 'height': '400px'});
    divGrandeImage.append(grandeImage);
    
    divFond.css({'display': 'flex', 'justify-content': 'center', 'align-items': 'center' });
    
    divFond.on('click', function(){
    divFond.remove();
    });
    
}

$(".html1, .js1").on("click", afficherGrandeImage);
    
//Fonction faire tourner les logos en 360°
    
function animLogoPage(){  

    console.log("dans la fonct...");
    $(".logopage").css('transform', 'rotateY(360deg)');
	$(".logopage").css('transition', 'transform 1s');
      
}
    
$('.logopage').on('mouseenter', animLogoPage)
    
    
function annuleAnimDivReserver(){
		
		$('.logopage').css('transform', 'rotateY(0deg)');
		$('.logopage').css('transition', 'transform 1s');
	}
$('.logopage').on('mouseleave', annuleAnimDivReserver); // 2.1
    

//Fonction afficher et enlever les images mobile avec bouton
  
function filtrerDesign(){
    
$('.webmobile1').show(1000);
$('.webmobile2').hide(1000);

}
	
$('.bouton1').on('click', filtrerDesign);
    
function filtrerDesign2(){
    
$('.webmobile2').show(1000);
$('.webmobile1').hide(1000);

}
	
$('.bouton2').on('click', filtrerDesign2);
    
//Fonction afficher et enlever les images web avec bouton
  
function filtrerDesign3(){
    
$('.webdesign1').show(1000);
$('.webdesign2').hide(1000);

}
	
$('.bouton3').on('click', filtrerDesign3);
    
function filtrerDesign4(){
    
$('.webdesign2').show(1000);
$('.webdesign1').hide(1000);

}
	
$('.bouton4').on('click', filtrerDesign4);

//Fonction grossissement des images webdesign mobile
    

var largeurImage = $(".mobile1").css("width");
console.log(largeurImage);   
    
function agrandissementImage(){
    
    $(this).css("width", "270px");

}

$(".mobile1").on("mouseenter", agrandissementImage)
    
function annulationAgrandissementImage(){
    
    $(this).css("width", largeurImage);
}

$(".mobile1").on("mouseleave", annulationAgrandissementImage);
    
    
//Fonction grossissement des listes de l'en-tête   

function agrandissementListe(){
    
    $(this).css("font-size", "17px");

}

$("li").on("mouseenter", agrandissementListe)
    
function annulationAgrandissementListe(){
    
    $(this).css("font-size", "13px");
}

$("li").on("mouseleave", annulationAgrandissementListe);


});
