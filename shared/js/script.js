// JavaScript Document

var particles = [
	{shortname: "e", 	name: "electron", 				title_de: "Elektron", rgb: "#5591B4", properties: [0.3,-100,100,0,0,0,0,0,100,0], coordinates: [[5,1], [6,1], [5,2], [6,2]]},
	{shortname: "μ", 	name: "myon", 					title_de: "Myon", rgb: "#2D509B", properties: [4,-100,100,23,0,0,17,0,100,0], coordinates: [[3,1], [4,1]]},
	{shortname: "τ", 	name: "tauon", 				title_de: "Tauon", rgb: "#223574", properties: [14,-100,100,50,0,0,34,0,100,0], coordinates: [[3,2], [4,2]]},
	{shortname: "νe", 	name: "electron_neutrino", 	title_de: "Elektron-Neutrino", rgb: "#DAE9F2", properties: [0,0,0,0,100,0,25,0,100,0], coordinates: [[3,4]]},
	{shortname: "νμ", 	name: "myon_neutrino", 		title_de: "Myon-Neutrino", rgb: "#D9E0F2", properties: [0,0,0,0,100,0,28,0,100,0], coordinates: [[4,4]]},
	{shortname: "ντ", 	name: "tauon_neutrino", 		title_de: "Tauon-Neutrino", rgb: "#CED4E6", properties: [0,0,0,0,100,0,44,0,100,0], coordinates: [[5,4]]},
	{shortname: "u", 	name: "up_quark", 				title_de: "Up-Quark", rgb: "#92C020", properties: [0.3,67,100,0,0,100,31,0,100,0], coordinates: [[5,5]]},
	{shortname: "d", 	name: "down_quark", 			title_de: "Down-Quark", rgb: "#64A641", properties: [0.7,-33,100,0,0,100,31,0,100,0], coordinates: [[6,5]]},
	{shortname: "s", 	name: "strange_quark", 		title_de: "Strange-Quark", rgb: "#009B90", properties: [3.5,67,100,29,0,100,31,0,100,0], coordinates: [[5,6]]},
	{shortname: "c", 	name: "charm_quark", 			title_de: "Charm-Quark", rgb: "#118953", properties: [12,-33,100,48,0,100,33,0,100,0], coordinates: [[6,6]]},
	{shortname: "t", 	name: "top_quark", 			title_de: "Top-Quark", rgb: "#00A88C", properties: [100,67,100,96,0,100,42,0,100,0], coordinates: [[5,7]]},
	{shortname: "b", 	name: "bottom_quark", 		title_de: "Botton-Quark", rgb: "#359745", properties: [22,-33,100,47,0,100,34,0,100,0], coordinates: [[6,7]]},
	{shortname: "γ", 	name: "photon", 				title_de: "Photon", rgb: "#F6D713", properties: [0,0,0,0,0,0,3,100,100,0], coordinates: [[7,1], [8,1], [7,2], [8,2]]},
	{shortname: "W+", 	name: "w_plus", 				title_de: "W-Plus", rgb: "#DC0714", properties: [85,100,0,98,0,0,37,100,0,0], coordinates: [[7,3]]},
	{shortname: "W-", 	name: "w_minus", 				title_de: "W-Minus", rgb: "#DC0714", properties: [85,-100,0,98,0,0,37,100,0,0], coordinates: [[7,4]]},
	{shortname: "Z0", 	name: "z_null", 				title_de: "Z-Null", rgb: "#981F48", properties: [88,0,0,98,0,0,37,100,0,0], coordinates: [[8,3],[8,4]]},
	{shortname: "g", 	name: "gluon", 				title_de: "Gluon", rgb: "#CD5E8A", properties: [0,0,0,0,0,0,33,100,100,0], coordinates: [[7,5], [8,5], [7,6], [8,6]]},
	{shortname: "G", 	name: "graviton", 				title_de: "Graviton", rgb: "#E9550C", properties: [0,0,0,0,0,0,100,100,100,100], coordinates: [[7,7],[8,7]]},
	{shortname: "H", 	name: "higgs", 				title_de: "Higgs", rgb: "#7C2780", properties: [96,0,0,100,0,0,50,0,100,0], coordinates: [[7,9],[8,9]]},
	{shortname: "wi", 	name: "wimp", 					title_de: "Wimp", rgb: "#404D6A", properties: [5,0,0,0,0,0,100,0,100,100], coordinates: [[5,8],[6,8]]}
];

function getCountdownDays() {

	var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
	var firstDate = new Date();
	var secondDate = new Date(2013,8,26);

	var countdownDays = -Math.round((firstDate.getTime() - secondDate.getTime())/(oneDay));
	return countdownDays;

}

function testEasing(x) {
		return 100*(x/=100)*x*x*x*x;
}


function testEasingQuad(x) {
		return 100*(x/=100)*x ;
}


function getQuizModel(inputValues)  {
	
	
	var bestMatches = [];
	var bestMatchesMax = 0; 
	var bestMatchesMin = 10000; 

	var particlesLength = particles.length;
	for (var i = 0; i < particlesLength ; i++) {
		
		var particle = particles[i];
		var propertiesLength = inputValues.length; 
		var distance = 0; 
		for (var j = 0; j < propertiesLength ; j++) {
			
			distance += Math.pow(inputValues[j]-particle.properties[j], 2);
			//console.log(new Date() + i+ ":" + inputValues[j] + " - " + particle.properties[j]);
		}		
		distance = Math.sqrt(distance); 
		bestMatches.push(distance);

		if (distance > bestMatchesMax) 
			bestMatchesMax = distance; 
		if (distance < bestMatchesMin) 
			bestMatchesMin = distance; 
	}
	
	/* sorted results */
	
	var sortedResults = [];
	for (var i = 0; i < particlesLength ; i++) {		
		sortedResults.push({particle: i, result: bestMatches[i]});	
	}
	sortedResults = sortByKey(sortedResults, "result");
	
	
	return model = {
		sortedResults: sortedResults,
		bestMatches : bestMatches, 
		bestMatchesMin : bestMatchesMin,
		bestMatchesMax : bestMatchesMax,
		particleToBeShown : [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
	};
}


function getQuizView(model)  {
	
	
	var result = "<div id='resultChart'>";
	
	var tableView = "<table class='quizResultTable'>"; 
	particlesLength = particles.length;
	for (var i = 0; i < particlesLength ; i++) {
		
		if (model.particleToBeShown[i] == 1) {
		
				var particle = particles[i];
				var normalizedValue = testEasingQuad(100-(model.bestMatches[i]-model.bestMatchesMin)/(model.bestMatchesMax-model.bestMatchesMin)*100);
				var normalizedValueRounded = Math.round(normalizedValue);
				var zTransform = 3-(model.bestMatches[i]-model.bestMatchesMin)/(model.bestMatchesMax-model.bestMatchesMin)*3;
				
				
				result +=  "<div id='test_result_2d'><div class='resultBin' style='background-color: " + particle['rgb'] + "; width: " + 2*normalizedValue + "px;'><div class='resultBinLabel'>" + particle.title_de + " (" + normalizedValueRounded + ") </div></div></div>";
		
				tableView += "<tr>";
//				tableView += "<td class='name'>" + particle.title_de + "</td>";
				tableView += "<td class='particelThumbnail'><img src='images/particles/" + particle.name + ".png' alt=''/></td>";
				tableView += "<td class='value'><div class='resultBin' style='background-color: " + particle['rgb'] + "; width: " + normalizedValue + "%;'></td>";
		
		
				tableView += "</tr>";
		
				}
/*
		$(".cube." + particle['name'] +" .front").css("-webkit-transform", "translateZ( " + zTransform + "em )");
		$(".cube." + particle['name'] +" .right").css("width", zTransform + "em");
		$(".cube." + particle['name'] +" .left").css("width", zTransform + "em");
		$(".cube." + particle['name'] +" .top").css("height", zTransform + "em");
		$(".cube." + particle['name'] +" .bottom").css("height", zTransform + "em");*/
	}

	result += "</div>";
	tableView += "</table>";
	
	return tableView; 
}

function getQuizTop3View(quizModel) {
	
	console.log();
	
	var result = ""; 
	
	result += "<div id='rank1'><img class='rank1_img' src='images/particles/" + particles[quizModel.sortedResults[0].particle].name + ".png'></div>"; 

	result += "<h2>" + particles[quizModel.sortedResults[0].particle].title_de + "</h2>";
	result += "<p>Elektronen gibt es überall: in Steckdosen, in Röntgenröhren und in jedem Atom. Elektronen sind negativ geladen. (Daher nennen wir sie hier pessimistisch.) Ihre geringe Masse macht sie selbst für Elementarteilchen zu Leichtgewichten. Negative Ladung und geringe Masse sorgen für leichte Ablenkbarkeit durch Magnete. Elektronen gelten als stabil, da ihr Zerfall noch nicht beobachtet wurde. Das Elektron wurde im Jahr 1897 als erstes der Elementarteilchen nachgewiesen (Es steht gern im Rampenlicht). Sein Name geht auf das griechische Wort für Bernstein zurück, der in frühen Versuchen mit Elektrizität eine wichtige Rolle gespielt hat.</p>"; 
		result += "<ol>"; 
	result += "<li>" + particles[quizModel.sortedResults[0].particle].title_de + "</li>"; 
	result += "<li>" + particles[quizModel.sortedResults[1].particle].title_de + "</li>"; 
	result += "<li>" + particles[quizModel.sortedResults[2].particle].title_de + "</li>"; 
	result += "</ol>"; 
	return result; 
	
	return "getQuizTop3View";	
}



function updateQuiz() {
	
	
	//console.log("updateQuiz: start" + document.URL);

	var inputValues = []; 
	$("#quiz-form input").each(function(){
		inputValues.push($(this).val());  	
	});

	var quizModel = getQuizModel(inputValues); 

	quizModel.particleToBeShown  = [1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0];
	$("#quiz-2d-graph #leptons").html(getQuizView(quizModel)); 
	quizModel.particleToBeShown  = [0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0];
	$("#quiz-2d-graph #quarks").html(getQuizView(quizModel)); 
	quizModel.particleToBeShown  = [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];
	$("#quiz-2d-graph #remaining").html(getQuizView(quizModel)); 
	
	$("#quiz-top3").html(getQuizTop3View(quizModel)); 
	
	
	//console.log("updateQuiz: end" + document.URL);
	
}

function updateQuizTeaser(scrollPosition) {
	
	//console.log("updateTeaserQuiz: start" + scrollPosition);

	var inputValues = [50,50,50,50,50,50,50,50,50,50]; 
	inputValues[1] = scrollPosition; 

	var quizModel = getQuizModel(inputValues); 
	quizModel.particleToBeShown  = [1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1];

	$("#quizTeaser").html(getQuizView(quizModel)); 
	
}


$(document).on('pageinit', function(){
 


	FastClick.attach(document.body);

	/*	if ($.event.props.join('|').replace('layerX|layerY|', ''))
		$.event.props = $.event.props.join('|').replace('layerX|layerY|', '').split('|');
	*/
	var countdownDays = getCountdownDays();
	if (countdownDays > 1) {
		$("#countdown").show(); 
		$("#countdownNrOfDays").html(countdownDays);
	}
	
	
//	$("#quiz-mass input").bind("change", function(event, ui){updateQuiz();});
	$("#quiz-form input").change(function(event, ui){updateQuiz();});
	updateQuiz();
	//$("#quiz-form input").trigger("change");
	

	
});

function easeInOutElastic(x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
}

function animationFunctionSpike(x, d) {
	
	if (x < -d || x > d) {
		return 0;
	} else {
		return -Math.abs(x/d)+1; 
	}
}

var animateScroll = function(targetElement, speed){
	
	var elementWidth = 300;
	var elementGap= 600;
	var elementsAndGapWidth = elementWidth + elementGap;
	
	var width = targetElement.width();

	var backgroundPositionSplit = [];

	if (targetElement.css('background-position'))	
		backgroundPositionSplit = targetElement.css('background-position').split(" ")
	
	var background_position_x  = 0;	
	if (backgroundPositionSplit.length > 0) {
		background_position_x = parseInt(backgroundPositionSplit[0].replace(/[^-\d\.]/g, '')) || 0;	
	}
	
	var stepNumber = Math.floor(background_position_x/elementsAndGapWidth);
	//console.log("stepNumber: " + stepNumber); 
	
	var newBackgroundPositionX = (stepNumber-1) * elementsAndGapWidth + (width - elementWidth) / 2;
	var newBackgroundPosition  = newBackgroundPositionX + "px 0px";
	

	//console.log(targetElement.css('background-position') + " ---- " + newBackgroundPosition);
	

    $(targetElement).animate(
		{
    		backgroundPosition: newBackgroundPosition
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

function initPageHome() {
	
	animateScroll($("#teilchenzoo_teaser_teilchen_roll_stage"), 200);
	updateQuizTeaser(0);

	$(window).on("scroll", $.throttle( 200, function() {	
		var scrollPosition = $(document).scrollTop()/$(document).height();
		updateQuizTeaser((scrollPosition*250-50)*3);
		}));
	
    $(window).on("scroll", function() {
		
		var scrollPosition = $(document).scrollTop()/$(document).height();
		
		$(".test_teaser_text").each(function(index) {
	//		$(this).css("opacity", Math.pow(Math.sin(scrollPosition/200+Math.PI*(index+1)/6),18));
			var value = animationFunctionSpike(scrollPosition*2-(index+1)/6, 0.1);
			$(this).css("opacity", value);
			
	//		$(this).css("opacity", (index+1)*scrollPosition/10800);
		});
		$("#questions_teaser_container img").each(function(index) {
			if (Math.pow(Math.sin(scrollPosition*50+Math.PI*(index+1)/16),2) > 0.5) {
				$(this).attr("src", "images/teaser_exclamationmark.png");
			} else {
				$(this).attr("src", "images/teaser_questionmark.png");			
			}
		});
		

    });	
}


function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}	

$( document ).on( "pageinit", function() {
    $( ".popupVideo iframe" )
        .attr( "width", 0 )
        .attr( "height", 0 );
 
    $( ".popupVideo" ).on({
        popupbeforeposition: function() {
            var size = scale( 900, 500, 15, 1 ),
                w = size.width,
                h = size.height;
 
            $( ".popupVideo iframe" )
                .attr( "width", w )
                .attr( "height", h );
        },
        popupafterclose: function() {
            $( ".popupVideo iframe" )
                .attr( "width", 0 )
                .attr( "height", 0 );
        }
    });
});


// jquery mobile popup scaling
function scale( width, height, padding, border ) {
    var scrWidth = $( window ).width() - 30,
        scrHeight = $( window ).height() - 30,
        ifrPadding = 2 * padding,
        ifrBorder = 2 * border,
        ifrWidth = width + ifrPadding + ifrBorder,
        ifrHeight = height + ifrPadding + ifrBorder,
        h, w;
 
    if ( ifrWidth < scrWidth && ifrHeight < scrHeight ) {
        w = ifrWidth;
        h = ifrHeight;
    } else if ( ( ifrWidth / scrWidth ) > ( ifrHeight / scrHeight ) ) {
        w = scrWidth;
        h = ( scrWidth / ifrWidth ) * ifrHeight;
    } else {
        h = scrHeight;
        w = ( scrHeight / ifrHeight ) * ifrWidth;
    }
 
    return {
        'width': w - ( ifrPadding + ifrBorder ),
        'height': h - ( ifrPadding + ifrBorder )
    };
};