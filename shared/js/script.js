// JavaScript Document

var particles = [
	{shortname: "e", 	name: "electron", 				title_de: "Elektron", rgb: "#5591B4", properties: [0.3, -100, 100, 0, 0, 0, 0, 0, 100, 0], description_de: "Elektronen gibt es überall: in Steckdosen, in Röntgenröhren, in jedem Atom. Elektronen sind negativ geladen. (Daher beschreiben wir sie hier als <em>pessimistisch</em>.) Ihre geringe Masse macht sie selbst für Elementarteilchen zu <em>Leichtgewichten</em>. Negative Ladung und geringe Masse sorgen für leichte <em>Ablenkbarkeit</em> durch Magnete. Elektronen gelten als <em>stabil</em>, da ihr Zerfall noch nicht beobachtet wurde. Das Elektron wurde im Jahr 1897 als erstes der Elementarteilchen nachgewiesen. (Es steht also gern im <em>Rampenlicht</em>.) Sein Name geht auf das griechische Wort für Bernstein zurück, der in frühen Versuchen mit Elektrizität eine wichtige Rolle gespielt hat."},
	{shortname: "μ", 	name: "myon", 					title_de: "Myon", rgb: "#2D509B", properties: [4, -100, 8, 23, 0, 0, 25, 0, 100, 0], description_de: "Myonen ähneln Elektronen in vielen Eigenschaften. Sie besitzen die gleiche negative Ladung (Daher beschreiben sie hier als <em>pessimistisch</em>.) und sie reagieren auf die gleichen Kräfte. Myonen sind jedoch 207-mal schwerer als Elektronen. Für Elementarteilchen sind sie damit aber immer noch <em>leicht</em> und durch Magnete gut <em>ablenkbar</em>. Myonen sind im Gegensatz zu den stabilen Elektronen von <em>labiler</em> Art und zerfallen im Durchschnitt nach gut 2 Millionstel Sekunden. Dabei entstehen leichtere Teilchen, unter anderem Elektronen und Neutrinos. Die Identität des Myons wurde 1947 ausgemacht."},
	{shortname: "τ", 	name: "tauon", 				title_de: "Tauon", rgb: "#223574", properties: [14, -100, 2, 50, 0, 0, 51, 0, 100, 0], description_de: "Tauonen ähneln Elektronen in vielen Eigenschaften: Sie besitzen die gleiche negative Ladung. (Daher beschreiben sie hier als <em>pessimistisch</em>.) und sie reagieren auf die gleichen Kräfte. Tauonen sind jedoch 3500-mal schwerer als Elektronen und gehören damit zu den <em>Mittelgewichten</em>. Das Tauon ist <em>labil</em>, es hat nur eine sehr kurze Lebensdauer. In 290 Millionstel Milliardstel Sekunden zerfällt es in andere Teilchen. Das Tauon wurde erst 1975 nachgewiesen (<em>schüchtern</em>). Tauonen sind nach den Myonen die dritten Elektronen-ähnlichen Teilchen. Das spiegelt auch ihr Name wider: Tau, beziehungsweise τ, ist der Anfangsbuchstabe des griechischen Wortes für Drittes (triton)."},
	{shortname: "νe", 	name: "electron_neutrino", 	title_de: "Elektron-Neutrino", rgb: "#DAE9F2", properties: [0, 0, 0, 0, 100, 0, 38, 0, 0, 0], description_de: "Neutrinos sind geisterhaft: Sie können Materie fast mühelos durchdringen. Das liegt unter anderem daran, dass sie elektrisch neutral sind. (Wir nennen sie hier deshalb <em>gelassen</em>.) Sie sind extreme <em>Leichtgewichte</em>. Ihre Masse ist verschwindend gering, wenn auch nicht null. Es gibt drei Typen von Neutrinos: Elektron-Neutrinos, Myon-Neutrinos und Tauon-Neutrinos. Eine Besonderheit ist, dass sich diese drei Typen ineinander umwandeln können. Neutrinos sind also ziemlich <em>wechselhaft</em>. Entdeckt wurden die <em>scheuen</em> Elektron-Neutrinos erst spät: im Jahr 1956. Ihren Namen erhielten die Teilchen vom italienischen Physiker Enrico Fermi. Er bedeutet »kleines Ungeladenes«."},
	{shortname: "νμ", 	name: "myon_neutrino", 		title_de: "Myon-Neutrino", rgb: "#D9E0F2", properties: [0, 0, 0, 0, 100, 0, 42, 0, 0, 0], description_de: "Neutrinos sind geisterhaft: Sie können Materie fast mühelos durchdringen. Das liegt unter anderem daran, dass sie elektrisch neutral sind. (Wir nennen sie hier deshalb <em>gelassen</em>.) Sie sind extreme <em>Leichtgewichte</em>. Ihre Masse ist verschwindend gering, wenn auch nicht null. Es gibt drei Typen von Neutrinos: Elektron-Neutrinos, Myon-Neutrinos und Tauon-Neutrinos. Eine Besonderheit ist, dass sich diese drei Typen ineinander umwandeln können. Neutrinos sind also ziemlich <em>wechselhaft</em>. Entdeckt wurden die <em>scheuen</em> Myon-Neutrinos erst spät: im Jahr 1962. Ihren Namen erhielten die Teilchen vom italienischen Physiker Enrico Fermi. Er bedeutet »kleines Ungeladenes«."},
	{shortname: "ντ", 	name: "tauon_neutrino", 		title_de: "Tauon-Neutrino", rgb: "#CED4E6", properties: [0, 0, 0, 0, 100, 0, 67, 0, 0, 0], description_de: "Neutrinos sind geisterhaft: Sie können Materie fast mühelos durchdringen. Das liegt unter anderem daran, dass sie elektrisch neutral sind (Wir nennen sie hier deshalb <em>gelassen</em>.) Sie sind extreme <em>Leichtgewichte</em>. Ihre Masse ist verschwindend gering, wenn auch nicht null. Es gibt drei Typen von Neutrinos: Elektron-Neutrinos, Myon-Neutrinos und Tauon-Neutrinos. Eine Besonderheit ist, dass sich diese drei Typen ineinander umwandeln können. Neutrinos sind also ziemlich <em>wechselhaft</em>. Entdeckt wurden die <em>scheuen</em> Tauon-Neutrinos erst spät: im Jahr 2000. Ihren Namen erhielten die Teilchen vom italienischen Physiker Enrico Fermi. Er bedeutet »kleines Ungeladenes«."},
	{shortname: "u", 	name: "up_quark", 				title_de: "Up-Quark", rgb: "#92C020", properties: [0.3, 67, 67, 0, 0, 100, 47, 0, 100, 0], description_de: "Das Up-Quark ist eines von sechs Quark-Sorten. Es ist ein <em>Leichtgewicht</em>. Up-Quarks sind elektrisch positiv geladen. (Man könnte sie daher als <em>optimistisch</em> beschreiben.) Gemeinsam ist allen sechs Quark-Sorten, dass sie niemals alleine vorkommen: Quarks sind <em>Gruppenwesen</em>. Sie setzen sich immer in Zweier- oder Dreiergruppen zu anderen Teilchen zusammen. Das Up-Quark zählt zu den ersten drei Quark-Sorten, die 1969 experimentell nachgewiesen wurden. Der Name »Quark« geht auf eine Passage aus einem Roman von James Joyce zurück."},
	{shortname: "d", 	name: "down_quark", 			title_de: "Down-Quark", rgb: "#64A641", properties: [0.7, -33, 14, 0, 0, 100, 47, 0, 100, 0], description_de: "Das Down-Quark ist eines von sechs Quark-Sorten. Es ist ein <em>Leichtgewicht</em>. Down-Quarks sind elektrisch negativ geladen. (Man könnte sie daher als <em>pessimistisch</em> beschreiben.) Gemeinsam ist allen sechs Quark-Sorten, dass sie niemals alleine vorkommen: Quarks sind <em>Gruppenwesen</em>. Sie setzen sich immer in Zweier- oder Dreiergruppen zu anderen Teilchen zusammen. Das Down-Quark zählt zu den ersten drei Quark-Sorten, die 1969 experimentell nachgewiesen wurden. Der Name »Quark« geht auf eine Passage aus einem Roman von James Joyce zurück."},
	{shortname: "s", 	name: "strange_quark", 		title_de: "Strange-Quark", rgb: "#009B90", properties: [3.5, 67, 6, 29, 0, 100, 47, 0, 100, 0], description_de: "Das Charm-Quark ist eines von sechs Quark-Sorten. Es ist ein <em>Mittelgewicht</em>. Charm-Quarks sind elektrisch positiv geladen. (Man könnte sie daher als <em>optimistisch</em> beschreiben.) Gemeinsam ist allen sechs Quark-Sorten, dass sie niemals alleine vorkommen: Quarks sind <em>Gruppenwesen</em>. Sie setzen sich immer in Zweier- oder Dreiergruppen zu anderen Teilchen zusammen. Das Charm-Quark wurde 1974 experimentell nachgewiesen. Der Name »Quark« geht auf eine Passage aus einem Roman von James Joyce zurück."},
	{shortname: "c", 	name: "charm_quark", 			title_de: "Charm-Quark", rgb: "#118953", properties: [12, -33, 1, 48, 0, 100, 50, 0, 100, 0], description_de: "Das Strange-Quark ist eines von sechs Quark-Sorten. Es ist ein <em>Leichtgewicht</em>. Quarks sind elektrisch negativ geladen. (Man könnte sie daher als <em>pessimistisch</em> beschreiben.) Gemeinsam ist allen sechs Quark-Sorten, dass sie niemals alleine vorkommen: Quarks sind <em>Gruppenwesen</em>. Sie setzen sich immer in Zweier- oder Dreiergruppen zu anderen Teilchen zusammen. Das Strange-Quark zählt zu den ersten drei Quark-Sorten, die 1969 experimentell nachgewiesen wurden. Der Name »Quark« geht auf eine Passage aus einem Roman von James Joyce zurück."},
	{shortname: "t", 	name: "top_quark", 			title_de: "Top-Quark", rgb: "#00A88C", properties: [100, 67, 0, 96, 0, 100, 64, 0, 100, 0], description_de: "Das Top-Quark ist eines von sechs Quark-Sorten. Es ist ein <em>Schwergewicht</em>. Top-Quarks sind elektrisch positiv geladen. (Man könnte sie daher als <em>optimistisch</em> beschreiben.) Gemeinsam ist allen sechs Quark-Sorten, dass sie niemals alleine vorkommen: Quarks sind <em>Gruppenwesen</em>. Sie setzen sich immer in Zweier- oder Dreiergruppen zu anderen Teilchen zusammen. Das <em>scheue</em> Top-Quark wurde erst 1995 experimentell nachgewiesen wurden. Der Name »Quark« geht auf eine Passage aus einem Roman von James Joyce zurück."},
	{shortname: "b", 	name: "bottom_quark", 		title_de: "Botton-Quark", rgb: "#359745", properties: [22, -33, 0, 47, 0, 100, 52, 0, 100, 0], description_de: "Das Bottom-Quark ist eines von sechs Quark-Sorten. Es ist ein <em>Mittelgewicht</em>. Bottom-Quarks sind elektrisch negativ geladen. (Man könnte sie daher als <em>pessimistisch</em> beschreiben.) Gemeinsam ist allen sechs Quark-Sorten, dass sie niemals alleine vorkommen: Quarks sind <em>Gruppenwesen</em>. Sie setzen sich immer in Zweier- oder Dreiergruppen zu anderen Teilchen zusammen. Das Bottom-Quark wurde erst 1977 experimentell nachgewiesen wurden. Der Name »Quark« geht auf eine Passage aus einem Roman von James Joyce zurück."},
	{shortname: "γ", 	name: "photon", 				title_de: "Photon", rgb: "#F6D713", properties: [0, 0, 0, 0, 0, 0, 5, 100, 100, 0], description_de: "Photonen übertragen die elektromagnetische Kraft: Wenn zwei Elementarteilchen über diese Kraft miteinander wechselwirken, wird immer ein Photon ausgetauscht. (Aufgrund dieses Austausches beschreiben wir Photonen hier als <em>kommunikativ</em>.) Aus Photonen besteht auch das bekannteste elektromagnetische Phänomen: Licht. Photonen sind <em>Leichtgewichte</em>, masselos sind sie ständig mit Lichtgeschwindigkeit unterwegs. Im Vakuum haben Photonen eine unendlich lange Lebensdauer. Sie sind also <em>stabil</em>. Nach den Elektronen wurden Photonen als zweite Elementarteilchensorte vorhergesagt und nachgewiesen. (Sie lieben also das <em>Rampenlicht</em>.) Der Name stammt vom griechischen Wort für Licht."},
	{shortname: "W+", 	name: "w_plus", 				title_de: "W-plus", rgb: "#DC0714", properties: [85, 100, 0, 98, 0, 0, 56, 100, 0, 0], description_de: "W-Teilchen übertragen die Schwache Kraft. Wenn zwei Elementarteilchen über diese Kraft miteinander wechselwirken, werden entweder W- oder Z-Teilchen ausgetauscht. (Aufgrund dieses Austausches beschreiben wir W- und Z-Teilchen hier als <em>kommunikativ</em>.) Die Schwäche der Schwachen Kraft hängt mit der großen Masse der W- und Z-Teilchen zusammen. Alle drei Teilchen sind <em>Schwergewichte</em>. W-plus-Teilchen sind elektrisch positiv geladen. (Daher werden die Teilchen hier als <em>optimistisch</em> beschrieben.) Die Teilchen zerfallen nach einem Bruchteil einer Sekunde. Sie sind <em>labil</em>. Nachgewiesen wurden die <em>scheuen</em> W-plus-Teilchen 1983. Der Buchstabe »W« leitet sich aus dem englischen Wort für schwach ab: »weak«."},
	{shortname: "W-", 	name: "w_minus", 				title_de: "W-minus", rgb: "#DC0714", properties: [85, -100, 0, 98, 0, 0, 56, 100, 0, 0], description_de: "W-Teilchen übertragen die Schwache Kraft. Wenn zwei Elementarteilchen über diese Kraft miteinander wechselwirken, werden entweder W- oder Z-Teilchen ausgetauscht. (Aufgrund dieses Austausches beschreiben wir W- und Z-Teilchen hier als <em>kommunikativ</em>.) Die Schwäche der Schwachen Kraft hängt mit der großen Masse der W- und Z-Teilchen zusammen. Alle drei Teilchen sind <em>Schwergewichte</em>. W-minus-Teilchen sind elektrisch positiv geladen. (Daher werden die Teilchen hier als <em>pessimistisch</em> beschrieben.) Die Teilchen zerfallen nach einem Bruchteil einer Sekunde. Sie sind <em>labil</em>. Nachgewiesen wurden die <em>scheuen</em> W-minus-Teilchen 1983. Der Buchstabe »W« leitet sich aus dem englischen Wort für schwach ab: »weak«."},
	{shortname: "Z0", 	name: "z_null", 				title_de: "Z-null", rgb: "#981F48", properties: [88, 0, 0, 98, 0, 0, 56, 100, 0, 0], description_de: "Z-Teilchen übertragen die Schwache Kraft. Wenn zwei Elementarteilchen über diese Kraft miteinander wechselwirken, werden entweder W- oder Z-Teilchen ausgetauscht. (Aufgrund dieses Austausches beschreiben wir W- und Z-Teilchen hier als <em>kommunikativ</em>.) Die Schwäche der Schwachen Kraft hängt mit der großen Masse der W- und Z-Teilchen zusammen. Alle drei Teilchen sind <em>Schwergewichte</em>. W-Teilchen sind elektrisch positiv geladen. (Daher werden die Teilchen hier als optimistisch beschrieben.) Die Teilchen zerfallen nach einem Bruchteil einer Sekunde. Sie sind <em>labil</em>. Nachgewiesen wurden die <em>scheuen</em> Z-null-Teilchen 1983."},
	{shortname: "g", 	name: "gluon", 				title_de: "Gluon", rgb: "#CD5E8A", properties: [0, 0, 0, 0, 0, 0, 50, 100, 100, 0], description_de: "Gluonen übertragen die Starke Kraft. Wenn Quarks stark miteinander wechselwirken, werden immer Gluonen ausgetauscht. (Aufgrund dieses Austausches beschreiben wir Gluonen hier als <em>kommunikativ</em>.) Gluonen sind elektrisch neutrale Teilchen (<em>gelassen</em>). Es handelt sich bei ihnen um masselose <em>Leichtgewichte</em>, die sich wie alle masselosen Teilchen mit Lichtgeschwindigkeit durchs Vakuum bewegen. Gluonen zerfallen nicht, sie gelten als <em>stabil</em>. Es gibt acht verschiedene Gluonen-Sorten. Die Gluonen wurden 1979 bei DESY nachgewiesen. Ihr Name leitet sich vom englischen Wort für Klebstoff ab. Denn Gluonen kleben die Quarks im Atomkern zusammen."},
	{shortname: "G", 	name: "graviton", 				title_de: "Graviton", rgb: "#E9550C", properties: [0, 0, 0, 0, 0, 0, 100, 100, 100, 100], description_de: "Gravitonen sollen die Schwerkraft übertragen. Wenn Teilchen über diese Kraft miteinander wechselwirken, sollen dabei Gravitonen ausgetauscht werden. (Aufgrund dieses Austausches beschreiben wir Gravitonen hier als <em>kommunikativ</em>.) Doch Gravitonen wurden noch nicht nachgewiesen, vielleicht sind sie einfach nur <em>schüchtern</em>, vielleicht bleiben sie auch <em>Phantasie</em>. Ihre Außenseiterposition verdanken sie der Schwäche der Schwerkraft. Sie ist mehr als billionen-billionen-billionen-mal schwächer als die elektromagnetische Kraft. Gravitonen sollen die Anziehung zwischen Massen erklären, sind wohl selbst aber masselose <em>Leichtgewichte</em>. Eine elektrische Ladung besitzen sie auch nicht. Man könnte sie daher als <em>gelassen</em> beschreiben."},
	{shortname: "H", 	name: "higgs", 				title_de: "Higgs", rgb: "#7C2780", properties: [96, 0, 0, 100, 0, 0, 75, 0, 100, 0], description_de: "Higgs-Teilchen entstehen aufgrund eines Phänomens, über den Elementarteilchen an Masse gelangen. Die <em>Schwergewichte</em> sind selbst die massivsten Bewohner des Teilchenzoos, elektrisch neutral (<em>gelassen</em>) und extrem <em>labil</em> – sie zerfallen nach einem Bruchteil einer Sekunde. Die <em>scheuen</em> Higgs-Teilchen haben sich erst 2013 in Experimenten zu erkennen gegeben. Die Suche dauerte 50 Jahre lang. Sie sind die einzigen Teilchen, die nach einer Person benannt sind, dem schottischen Physiker Peter Higgs."},
	{shortname: "wi", 	name: "wimp", 					title_de: "Wimp", rgb: "#404D6A", properties: [100, 0, 0, 0, 0, 0, 100, 0, 100, 100], description_de: "Wimps sind große Unbekannte. Sie wurden noch nicht nachgewiesen, vielleicht sind sie einfach nur <em>schüchtern</em>, vielleicht bleiben sie auch <em>Phantasie</em>. Wimps wurden vorhergesagt, um die sogenannte Dunkle Materie zu erklären. Diese Dunkle Materie soll es geben, weil man ansonsten Beobachtungen wie die Drehgeschwindigkeiten von Galaxien nicht erklären kann. Wimps haben keine elektrische Ladung. (Deshalb werden sie hier als <em>gelassen</em> beschrieben.) Aufgrund ihrer großen Masse sind Wimps <em>Schwergewichte</em>. Die Abkürzung WIMP steht für »weakly interacting massive particle«, das heißt »schwach wechselwirkende massereiche Teilchen«. Es heißt aber auch Schwächling."}
];


function getCountdownDays() {

	var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
	var firstDate = new Date();
	var secondDate = new Date(2013,8,26);

	var countdownDays = -Math.round((firstDate.getTime() - secondDate.getTime())/(oneDay));
	return countdownDays;

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
				tableView += "<td class='particleThumbnail'><img src='images/particles_cropped/" + particle.name + ".png' alt=''/></td>";
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

function getBestMatchView(quizModel) {
	
	var result = ""; 
	result += "<h2>" + particles[quizModel.sortedResults[0].particle].title_de + /*" (" + Math.round(quizModel.sortedResults[0].result) + " Punkte)"+ */  "</h2>";
	result += "<div id='rank1'><img class='rank1_img' src='images/particles/" + particles[quizModel.sortedResults[0].particle].name + ".png'></div>"; 
	result += "<p>" + particles[quizModel.sortedResults[0].particle].description_de  + "</p>"; 
	return result; 
	
}

function getQuizTop3View(quizModel) {
	

	var result = ""; 
	
	result += "<table><tr>";
	result += "<td style='width: 5%;'><h2>1.</h2></td><td style='width: 50%;'><h2>" + particles[quizModel.sortedResults[0].particle].title_de  + " <h2></td><td style='width: 20%;'>" +"<img style='width: 100%' src='images/particles/" + particles[quizModel.sortedResults[0].particle].name + ".png'>" + "</td>";	
	result += "</tr><tr>"; 
		result += "<td><h2>2.</h2></td><td style='width: 50%;'><h2>" + particles[quizModel.sortedResults[1].particle].title_de  + " <h2></td><td style='width: 20%;'>" +"<img style='width: 100%' src='images/particles/" + particles[quizModel.sortedResults[1].particle].name + ".png'>" + "</td>";	
	result += "</tr><tr>"; 
		result += "<td><h2>3.</h2></td><td style='width: 50%;'><h2>" + particles[quizModel.sortedResults[2].particle].title_de  + " <h2></td><td style='width: 20%;'>" +"<img style='width: 100%' src='images/particles/" + particles[quizModel.sortedResults[2].particle].name + ".png'>" + "</td>";	
	result += "</tr></table>";
	
	result = "<div class='particlomatic_result_top3_rank'><h2>1. " + particles[quizModel.sortedResults[0].particle].title_de  + " </h2>";
	result += "<div class='body'><div id='rank1'><img class='rank1_img' src='images/particles_cropped/" + particles[quizModel.sortedResults[0].particle].name + ".png'></div>"; 
	result += "<p class='particleDescription'>" + particles[quizModel.sortedResults[0].particle].description_de  + "</p></div></div>"; 
	result += "<div class='particlomatic_result_top3_rank'><h2>2. " + particles[quizModel.sortedResults[1].particle].title_de  + " </h2>"; 
	result += "<div class='body' style='display: none;'><div id='rank1'><img class='rank1_img' src='images/particles_cropped/" + particles[quizModel.sortedResults[1].particle].name + ".png'></div>"; 
	result += "<p  class='particleDescription'>" + particles[quizModel.sortedResults[1].particle].description_de  + "</p></div></div>"; 
	result += "<div class='particlomatic_result_top3_rank'><h2>3. " + particles[quizModel.sortedResults[2].particle].title_de  + " </h2>"; 
	result += "<div class='body' style='display: none;'><div id='rank1'><img class='rank1_img' src='images/particles_cropped/" + particles[quizModel.sortedResults[2].particle].name + ".png'></div>"; 
	result += "<p  class='particleDescription'>" + particles[quizModel.sortedResults[2].particle].description_de  + "</p></div></div>"; 
	
	/*
	result += "<h2> 1. " + +  + "</h2>";
		result += "<h2> 2. " + particles[quizModel.sortedResults[1].particle].title_de + "</h2>";
		result += "<h2> 3. " + particles[quizModel.sortedResults[2].particle].title_de + "</h2>";
	result += "<p>"; 	
result += "<img style='width: 20%' src='images/particles/" + particles[quizModel.sortedResults[1].particle].name + ".png'>"; 
	result += "<img style='width: 20%' src='images/particles/" + particles[quizModel.sortedResults[2].particle].name + ".png'>"; 
	result += "</p>"; 	*/
	/*	result += "<ol>"; 
	result += "<li>" + particles[quizModel.sortedResults[0].particle].title_de + "</li>"; 
	result += "<li>" + particles[quizModel.sortedResults[1].particle].title_de + "</li>"; 
	result += "<li>" + particles[quizModel.sortedResults[2].particle].title_de + "</li>"; 
	result += "</ol>"; */
	return result; 
	
	
}

var show_particlomatic_info = false;

function updateQuiz(event) {
	
	var inputValues = []; 
	$("#quiz-form input").each(function(){
		inputValues.push($(this).val());  	
	});

	var quizModel = getQuizModel(inputValues); 

	quizModel.particleToBeShown  = [1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0];
	$("#particlomatic_result_table #leptons").html(getQuizView(quizModel)); 
	quizModel.particleToBeShown  = [0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0];
	$("#particlomatic_result_table  #quarks").html(getQuizView(quizModel)); 
	quizModel.particleToBeShown  = [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];
	$("#particlomatic_result_table #remaining").html(getQuizView(quizModel)); 
	
/*	$("#particlomatic_result_bestMatch").html(getBestMatchView(quizModel)); */
	$("#particlomatic_result_top3").html(getQuizTop3View(quizModel)); 
	
	$("#particlomatic_result_top3 h2").on("click", function() {
		$(".body", $(this).parent().parent).hide(); 
		$(".body", $(this).parent()).show(); 
	});

				
	
		
	if (show_particlomatic_info) {
			$('#particlomatic_result_control_info').trigger("click");
	} else if ($('#particlomatic_result_control_info').hasClass("btn-success")) {
		$('#particlomatic_result_control_table').trigger("click");
	}
	
	
}

function updateQuizTeaser(scrollPosition) {
	
	var inputValues = [50,50,50,50,50,50,50,50,50,50]; 
	inputValues[1] = scrollPosition; 

	var quizModel = getQuizModel(inputValues); 
	quizModel.particleToBeShown  = [1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1];

	$("#quizTeaser").html(getQuizView(quizModel)); 
	
}


$(document).on('pageinit', function(){
 
	FastClick.attach(document.body);

	var countdownDays = getCountdownDays();
	if (countdownDays > 1) {
		$("#countdown").show(); 
		$("#countdownNrOfDays").html(countdownDays);
	}

	$("#quiz-form input").on("change",  $.throttle(400, function(event, ui) {updateQuiz();}));
	show_particlomatic_info = true; 
	updateQuiz(); 
	show_particlomatic_info = false; 
	
	$("#particlomatic_button_hide_info").hide(); 

	$("#particlomatic_button_show_info").on("click", function(event) {
			event.preventDefault();
			$(this).hide(); 
			$("#particlomatic_button_hide_info").show(); 
			$(".particlomaticHelp").show(); 	
	});
	$("#particlomatic_button_hide_info").on("click", function(event) {
			event.preventDefault();
			$(this).hide(); 
			$("#particlomatic_button_show_info").show(); 
			$(".particlomaticHelp").hide(); 	
	});
	
	
	$("#particlomatic_info").show(); 
	$("#particlomatic_result_table").hide(); 
	$("#particlomatic_result_top3").hide(); 
	
	
	$(".particlomatic_result_control_button").on("click", function(){
		
		$(".particlomatic_result_control_button").removeClass("btn-success");
		$(".particlomatic_result_control_button").addClass("btn-info");

		$(this).removeClass("btn-info");
		$(this).addClass("btn-success");
		
		$(".particlomatic_result_pane").hide(); 
		var paneId = $(this).attr("href");
		$(paneId).show(); 	
		
	});
	
	
	
	$("#particlomatic_button_reset").on("click", function(event) {
		
		event.preventDefault();
		
		$("#quiz-form input").each(function(){
			var mediumValue = (parseFloat($(this).attr("max")) + parseFloat($(this).attr("min"))) /2 ;
			$(this).val(mediumValue);
			$(this).slider('refresh');
			$('#particlomatic_result_tab a[href="#particlomatic_info"]').tab('show');	
		});
		
	});
	
	
	$("#ecyclopedia_index a").on("click", function(event) {
				event.preventDefault();
	
	
		var contentFileName = "encyclopedia/" + $(this).attr("href").substr(1) + ".html";
		$("#ecyclopedia_stage").load(contentFileName);
			
		var animationFileName = "animations/photon/photon_embedded.html";
		$("#ecyclopedia_stage_animation").load(animationFileName);
			
	/*	$("#encylopedia_table a").on("click", function(event) {
				event.preventDefault();
	
		var fileName = "encyclopedia/" + $(this).attr("href").substr(1) + ".html";
		$("#ecyclopedia_stage").load(fileName);	*/

		
	});
	
	
	//$("#particlomatic_result").scrollToFixed({marginTop: 0}); 
	
	

	
	
	
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

	$(window).on("scroll", $.throttle( 100, function() {	
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

