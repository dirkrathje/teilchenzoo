function createMap() {
	
	var particlesLength = particles.length;
	for (var i = 0; i < particlesLength ; i++) {
		
		var particle = particles[i];
		
		if (particle['coordinates']) {
			var coordinatesLength = particle['coordinates'].length;
			for (var j = 0; j < coordinatesLength; j++) {
				
				var points = particle['coordinates'][j];

				//console.log(j);
				$("#perspective").append(	"<div class='cube " + particle['name'] + "' id='" + particle['name'] + "-" + j + "' style='top: " + points[1]*3 + "em; left: " + points[0]*3  + "em;'>" +
				"<figure class='front' style='background: " + particle['rgb'] + "'></figure>" + 
				"<figure class='back' style='background: " + particle['rgb'] + "'></figure>" +
				"<figure class='right' style='background: " + particle['rgb'] + "'></figure>" +
				"<figure class='left' style='background: " + particle['rgb'] + "'></figure>" +
				"<figure class='top' style='background: " + particle['rgb'] + "'></figure>" +
				"<figure class='bottom'  style='background: " + particle['rgb'] + "'></figure>"); 			
			}
		}
	}
}





var animateScroll2 = function(targetElement, speed){
	

	var elementWidth = 300;
	var elementGap= 600;
	var elementsAndGapWidth = elementWidth + elementGap;
	
//	alert(targetElement.css("background-position"));
	
	var width = targetElement.width();
	
	var pos = targetElement.css('background-position').split(" ");
	//console.log(pos);
    var background_position_x = parseInt(pos[0].replace(/[^-\d\.]/g, '')) || 0;
	console.log(background_position_x);

	var stepNumber = Math.floor(background_position_x/elementsAndGapWidth);
	var currentOffsetX = background_position_x - stepNumber*elementsAndGapWidth;
	var newOffsetX = (width - elementWidth) / 2;
	var offsetDiff = currentOffsetX-newOffsetX;
	var animationDiff = 900 + offsetDiff; 
	var newPositionX = (stepNumber +1) * 900 + animationDiff;

	//var diff = Math.floor(background_position_x/elementWidth)*elementWidth
	console.log(stepNumber); 
	
	var newBackgroundPosition = "-" + newPositionX + "px"; // + " 0px"; 
	console.log(newBackgroundPosition);

    $(targetElement).animate(
		{
    		"background-position-x": newBackgroundPosition
		},
       {
        duration: speed,
		easing: "easeOutQuint",
        complete: function(){
			 var that = this;
			 setTimeout(function() {animateScroll($(that), speed);},2000);
            
            }
        }
    );

};





function oldStuff() {
	
	$('.slider-handle').draggable({
        containment:'parent',
        axis:'x',
        drag:function(e,ui){

            /* The drag function is called on every drag movement, no matter how minute */

            if(!this.par)
            {
                /* Initializing the variables only on the first drag move for performance */

                this.par = $(this).parent();
                this.parHeight = this.par.height();
                this.height = $(this).height();
                this.color = $.trim(this.par.attr('class').replace('colorful-slider',''));
            }

            var ratio = 1-(ui.position.top+this.height)/this.parHeight;

        }
    });
	
	
}

