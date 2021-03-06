// JavaScript Document
/*jslint browser: true*/
/*jslint regexp: true */
/*jshint globalstrict: true*/
/*global $, jQuery, FastClick, jwplayer, device, appName, Modernizr */
if (typeof String.prototype.endsWith !== 'function') {
    String.prototype.endsWith = function(str) {
        "use strict";
        return this.substring(this.length - str.length, this.length) === str;
    };
}

function sortByKey(array, key) {
    "use strict";
    return array.sort(function (a, b) {
        var x = a[key], y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}
function testEasingQuad(x) {
    "use strict";
    return (x / 100) * x;
}
function animationFunctionSpike(x, d) {
    "use strict";
    if (x < -d || x > d) {
        return 0;
    }
    return -Math.abs(x / d) + 1;
}
var mode, /* app, website */
    language = "",
    languageSuffix = "",
    bypassScreensaver = false;

function checkScreensaver() {
    "use strict";

    var now = new Date(),
        hours = now.getHours();

    if ((hours > 7 && hours < 19) || bypassScreensaver) {
        $("#screensaver").hide();
    } else {
        $("#screensaver").show();
        bypassScreensaver = false;
    }
    setTimeout(checkScreensaver, 2000);
}
function isAppMode() {
    "use strict";
    return mode === "app";
}
function isWebsiteMode() {
    "use strict";
    return mode === "website";
}

var particles = [
        {
            shortname: "e",
            name: "electron",
            rgb: "#5591B4",
            properties: [0.3, -100, 100, 0, 0, 0, 0, 0, 100, 0],
            title_de: "Elektron",
            description_de: "Elektronen gibt es überall: in Steckdosen, in Röntgenröhren, in jedem Atom. Elektronen sind negativ geladen. (Daher beschreiben wir sie hier als <em>pessimistisch</em>.) Ihre geringe Masse macht sie selbst für Elementarteilchen zu <em>Leichtgewichten</em>. Negative Ladung und geringe Masse sorgen für leichte <em>Ablenkbarkeit</em> durch Magnete. Elektronen gelten als <em>stabil</em>, da ihr Zerfall noch nicht beobachtet wurde. Das Elektron wurde im Jahr 1897 als erstes der Elementarteilchen nachgewiesen. (Es steht also gern im <em>Rampenlicht</em>.) Sein Name geht auf das griechische Wort für Bernstein zurück, der in frühen Versuchen mit Elektrizität eine wichtige Rolle gespielt hat.",
            title_en: "Electrons",
            description_en: "Electrons are everywhere: in electric sockets, in X-ray tubes and in every atom. Electrons carry a negative charge (which is why we refer to them here as <em>pessimistic</em>.) Their small mass makes them <em>lightweights</em>even by the standards of elementary particles. Their negative charge and small mass makes them easily <em>deflectable</em>, by magnets. Electrons are regarded as <em>stable</em>, because no one has yet seen them decay.The electron was the first elementary particle to be detected, back in 1897. (It therefore likes to stand in the <em>spotlight</em>.) Its name is derived from the Greek word for amber, a material that played an important role in early experiments with electricity."
        },
        {
            shortname: "μ",
            name: "myon",
            rgb: "#2D509B",
            properties: [4, -100, 8, 23, 0, 0, 25, 0, 100, 0],
            title_de: "Myon",
            description_de: "Myonen ähneln Elektronen in vielen Eigenschaften. Sie besitzen die gleiche negative Ladung (Daher beschreiben wir sie hier als <em>pessimistisch</em>.) und sie reagieren auf die gleichen Kräfte. Myonen sind jedoch 207-mal schwerer als Elektronen. Für Elementarteilchen sind sie damit aber immer noch relativ <em>leicht</em> und durch Magnete gut <em>ablenkbar</em>. Myonen sind im Gegensatz zu den stabilen Elektronen von <em>labiler</em> Art und zerfallen im Durchschnitt nach gut 2 Millionstel Sekunden. Dabei entstehen leichtere Teilchen, unter anderem Elektronen und Neutrinos. Die Identität des Myons wurde 1947 ausgemacht.",
            title_en: "Muons",
            description_en: "Muons are similar to electrons in many ways. For example, they have the same negative electric charge as electrons (which is why we refer to them here as <em>pessimistic</em>), and they also react to the same forces. Although muons are 207 times heavier than electrons, they are still relatively <em>light </em>and easy to <em>deflect</em> with magnets. Unlike electrons, which are stable, muons tend to be <em>labile </em>and decay after a little more than two millionths of a second on average. This decay leads to the creation of lighter particles, including electrons and neutrinos. Muons were first identified in 1947."
        },
        {
            shortname: "τ",
            name: "tauon",
            rgb: "#223574",
            properties: [14, -100, 2, 50, 0, 0, 51, 0, 100, 0],
            title_de: "Tauon",
            description_de: "Tauonen ähneln Elektronen in vielen Eigenschaften: Sie besitzen die gleiche negative Ladung (Daher beschreiben sie hier als <em>pessimistisch</em>.) und sie reagieren auf die gleichen Kräfte. Tauonen sind jedoch 3500-mal schwerer als Elektronen und gehören damit zu den <em>Schwergewichten</em>. Das Tauon ist <em>labil</em>, es hat nur eine sehr kurze Lebensdauer. In 290 Millionstel Milliardstel Sekunden zerfällt es in andere Teilchen. Das Tauon wurde erst 1975 nachgewiesen (<em>schüchtern</em>). Tauonen sind nach den Myonen die dritten Elektronen-ähnlichen Teilchen. Das spiegelt auch ihr Name wider: Tau, beziehungsweise τ, ist der Anfangsbuchstabe des griechischen Wortes für Drittes (triton).",
            title_en: "Tauons",
            description_en: "Tauons are similar to electrons in many ways. For example, they have the same negative electric charge as electrons (which is why we refer to them here as <em>pessimistic</em>), and they also react to the same forces. However, tauons are 3500 times heavier than electrons, which makes them <em>heavyweights</em>. Tauons are <em>labile</em> — they have only a very short lifetime. They decay into other particles in 290 millionths of a billionth of a second. Tauons, which were first detected in 1975 (<em>shy</em>&#8239;), are the third particle in the electron family, with muons being the second. This is reflected in their name, which comes from <em>Tau</em> (&tau;) — the first letter in the Greek word for third (<em>triton</em>)."
        },
        {
            shortname: "νe",
            name: "electron_neutrino",
            rgb: "#DAE9F2",
            properties: [0, 0, 0, 0, 100, 0, 38, 0, 0, 0],
            title_de: "Elektron-Neutrino",
            description_de: "Neutrinos sind geisterhaft: Sie können Materie fast mühelos durchdringen. Das liegt unter anderem daran, dass sie elektrisch neutral sind. (Wir nennen sie hier deshalb <em>gelassen</em>.) Sie sind extreme <em>Leichtgewichte</em>. Ihre Masse ist verschwindend gering, wenn auch nicht null. Es gibt drei Typen von Neutrinos: Elektron-Neutrinos, Myon-Neutrinos und Tauon-Neutrinos. Eine Besonderheit ist, dass sich diese drei Typen ineinander umwandeln können. Neutrinos sind also ziemlich <em>wechselhaft</em>. Entdeckt wurden die <em>schüchternen</em> Elektron-Neutrinos erst spät: im Jahr 1956. Ihren Namen erhielten die Teilchen vom italienischen Physiker Enrico Fermi. Er bedeutet »kleines Ungeladenes«.",
            title_en: "Electron neutrinos",
            description_en: "Neutrinos are ghostlike: they can pass through matter almost effortlessly. One of the reasons for this is that they are electrically neutral. (As a result, we call them <em>relaxed</em>.) They are extreme <em>lightweights</em>, with a mass of almost, but not quite, zero. There are three types of neutrinos: electron neutrinos, muon neutrinos and tau neutrinos. One special property of neutrinos is that they can change from one of these types to another. They are thus fairly <em>changeable</em>. These <em>shy</em> particles were discovered only recently: electron neutrinos in 1956 and the tau neutrino as recently as 2000. They received their name from the Italian physicist Enrico Fermi; it means &ldquo;small uncharged entity&rdquo;."
        },
        {
            shortname: "νμ",
            name: "myon_neutrino",
            rgb: "#D9E0F2",
            properties: [0, 0, 0, 0, 100, 0, 42, 0, 0, 0],
            title_de: "Myon-Neutrino",
            description_de: "Neutrinos sind geisterhaft: Sie können Materie fast mühelos durchdringen. Das liegt unter anderem daran, dass sie elektrisch neutral sind. (Wir nennen sie hier deshalb <em>gelassen</em>.) Sie sind extreme <em>Leichtgewichte</em>. Ihre Masse ist verschwindend gering, wenn auch nicht null. Es gibt drei Typen von Neutrinos: Elektron-Neutrinos, Myon-Neutrinos und Tauon-Neutrinos. Eine Besonderheit ist, dass sich diese drei Typen ineinander umwandeln können. Neutrinos sind also ziemlich <em>wechselhaft</em>. Entdeckt wurden die <em>schüchternen</em> Myon-Neutrinos erst spät: im Jahr 1962. Ihren Namen erhielten die Teilchen vom italienischen Physiker Enrico Fermi. Er bedeutet »kleines Ungeladenes«.",
            title_en: "Muon neutrinos",
            description_en: "Neutrinos are ghostlike: they can pass through matter almost effortlessly. One of the reasons for this is that they are electrically neutral. (As a result, we call them <em>relaxed</em>.) They are extreme <em>lightweights</em>, with a mass of almost, but not quite, zero. There are three types of neutrinos: electron neutrinos, muon neutrinos and tau neutrinos. One special property of neutrinos is that they can change from one of these types to another. They are thus fairly <em>changeable</em>. These <em>shy</em> particles were discovered only recently: electron neutrinos in 1956 and the tau neutrino as recently as 2000. They received their name from the Italian physicist Enrico Fermi; it means &ldquo;small uncharged entity&rdquo;."
        },
        {
            shortname: "ντ",
            name: "tauon_neutrino",
            rgb: "#CED4E6",
            properties: [0, 0, 0, 0, 100, 0, 67, 0, 0, 0],
            title_de: "Tauon-Neutrino",
            description_de: "Neutrinos sind geisterhaft: Sie können Materie fast mühelos durchdringen. Das liegt unter anderem daran, dass sie elektrisch neutral sind. (Wir nennen sie hier deshalb <em>gelassen</em>.) Sie sind extreme <em>Leichtgewichte</em>. Ihre Masse ist verschwindend gering, wenn auch nicht null. Es gibt drei Typen von Neutrinos: Elektron-Neutrinos, Myon-Neutrinos und Tauon-Neutrinos. Eine Besonderheit ist, dass sich diese drei Typen ineinander umwandeln können. Neutrinos sind also ziemlich <em>wechselhaft</em>. Entdeckt wurden die <em>schüchternen</em> Tauon-Neutrinos erst spät: im Jahr 2000. Ihren Namen erhielten die Teilchen vom italienischen Physiker Enrico Fermi. Er bedeutet »kleines Ungeladenes«.",
            title_en: "Tauon neutrinos",
            description_en: "Neutrinos are ghostlike: they can pass through matter almost effortlessly. One of the reasons for this is that they are electrically neutral. (As a result, we call them <em>relaxed</em>.) They are extreme <em>lightweights</em>, with a mass of almost, but not quite, zero. There are three types of neutrinos: electron neutrinos, muon neutrinos and tau neutrinos. One special property of neutrinos is that they can change from one of these types to another. They are thus fairly <em>changeable</em>. These <em>shy</em> particles were discovered only recently: electron neutrinos in 1956 and the tau neutrino as recently as 2000. They received their name from the Italian physicist Enrico Fermi; it means &ldquo;small uncharged entity&rdquo;."
        },
        {
            shortname: "u",
            name: "up_quark",
            rgb: "#92C020",
            properties: [0.3, 67, 67, 0, 0, 100, 47, 0, 100, 0],
            title_de: "Up-Quark",
            description_de: "Das Up-Quark ist eines von sechs Quark-Sorten. Es ist ein <em>Leichtgewicht</em>. Up-Quarks sind elektrisch positiv geladen. (Man könnte sie daher als <em>optimistisch</em> beschreiben.) Gemeinsam ist allen sechs Quark-Sorten, dass sie niemals alleine vorkommen: Quarks sind <em>Gruppenwesen</em>. Sie setzen sich immer in Zweier- oder Dreiergruppen zu anderen Teilchen zusammen. Das Up-Quark zählt zu den ersten drei Quark-Sorten, die 1969 experimentell nachgewiesen wurden. Der Name »Quark« geht auf eine Passage aus einem Roman von James Joyce zurück.",
            title_en: "Up quarks",
            description_en: "There are six different kinds of quarks, including <em>lightweights</em>, <em>middleweights</em> and <em>heavyweights</em>. Three kinds of quarks have a positive charge, and the other three have a negative charge. (We could therefore call them <em>optimistic</em> or <em>pessimistic</em>, respectively.) What all six of them have in common is the fact that they never occur singly: quarks are <em>gregarious.</em> They always bond together in groups of two or three to form other kinds of particles.The lightweight quarks were detected in atomic nuclei in 1969; the heaviest quark was not detected until 1995. The name &ldquo;quark&rdquo; comes from a passage in a novel by James Joyce."
        },
        {
            shortname: "d",
            name: "down_quark",
            rgb: "#64A641",
            properties: [0.7, -33, 14, 0, 0, 100, 47, 0, 100, 0],
            title_de: "Down-Quark",
            description_de: "Das Down-Quark ist eines von sechs Quark-Sorten. Es ist ein <em>Leichtgewicht</em>. Down-Quarks sind elektrisch negativ geladen. (Man könnte sie daher als <em>pessimistisch</em> beschreiben.) Gemeinsam ist allen sechs Quark-Sorten, dass sie niemals alleine vorkommen: Quarks sind <em>Gruppenwesen</em>. Sie setzen sich immer in Zweier- oder Dreiergruppen zu anderen Teilchen zusammen. Das Down-Quark zählt zu den ersten drei Quark-Sorten, die 1969 experimentell nachgewiesen wurden. Der Name »Quark« geht auf eine Passage aus einem Roman von James Joyce zurück.",
            title_en: "Down quarks",
            description_en: "There are six different kinds of quarks, including <em>lightweights</em>, <em>middleweights</em> and <em>heavyweights</em>. Three kinds of quarks have a positive charge, and the other three have a negative charge. (We could therefore call them <em>optimistic</em> or <em>pessimistic</em>, respectively.) What all six of them have in common is the fact that they never occur singly: quarks are <em>gregarious.</em> They always bond together in groups of two or three to form other kinds of particles.The lightweight quarks were detected in atomic nuclei in 1969; the heaviest quark was not detected until 1995. The name &ldquo;quark&rdquo; comes from a passage in a novel by James Joyce."
        },
        {
            shortname: "c",
            name: "charm_quark",
            rgb: "#00A88C",
            properties: [12, 67, 2, 48, 0, 100, 50, 0, 100, 0],
            title_de: "Charm-Quark",
            description_de: "Das Charm-Quark ist eines von sechs Quark-Sorten. Es ist ein <em>Mittelgewicht</em>. Charm-Quarks sind elektrisch positiv geladen. (Man könnte sie daher als <em>optimistisch</em> beschreiben.) Gemeinsam ist allen sechs Quark-Sorten, dass sie niemals alleine vorkommen: Quarks sind <em>Gruppenwesen</em>. Sie setzen sich immer in Zweier- oder Dreiergruppen zu anderen Teilchen zusammen. Das Charm-Quark wurde 1974 experimentell nachgewiesen. Der Name »Quark« geht auf eine Passage aus einem Roman von James Joyce zurück.",
            title_en: "Charm quarks",
            description_en: "There are six different kinds of quarks, including <em>lightweights</em>, <em>middleweights</em> and <em>heavyweights</em>. Three kinds of quarks have a positive charge, and the other three have a negative charge. (We could therefore call them <em>optimistic</em> or <em>pessimistic</em>, respectively.) What all six of them have in common is the fact that they never occur singly: quarks are <em>gregarious.</em> They always bond together in groups of two or three to form other kinds of particles.The lightweight quarks were detected in atomic nuclei in 1969; the heaviest quark was not detected until 1995. The name &ldquo;quark&rdquo; comes from a passage in a novel by James Joyce."
        },
        {
            shortname: "s",
            name: "strange_quark",
            rgb: "#009B90",
            properties: [3.5, -33, 3, 29, 0, 100, 47, 0, 100, 0],
            title_de: "Strange-Quark",
            description_de: "Das Strange-Quark ist eines von sechs Quark-Sorten. Es ist ein <em>Mittelgewicht</em>. Quarks sind elektrisch negativ geladen. (Man könnte sie daher als <em>pessimistisch</em> beschreiben.) Gemeinsam ist allen sechs Quark-Sorten, dass sie niemals alleine vorkommen: Quarks sind <em>Gruppenwesen</em>. Sie setzen sich immer in Zweier- oder Dreiergruppen zu anderen Teilchen zusammen. Das Strange-Quark zählt zu den ersten drei Quark-Sorten, die 1969 experimentell nachgewiesen wurden. Der Name »Quark« geht auf eine Passage aus einem Roman von James Joyce zurück.",
            title_en: "Strange quarks",
            description_en: "There are six different kinds of quarks, including <em>lightweights</em>, <em>middleweights</em> and <em>heavyweights</em>. Three kinds of quarks have a positive charge, and the other three have a negative charge. (We could therefore call them <em>optimistic</em> or <em>pessimistic</em>, respectively.) What all six of them have in common is the fact that they never occur singly: quarks are <em>gregarious.</em> They always bond together in groups of two or three to form other kinds of particles.The lightweight quarks were detected in atomic nuclei in 1969; the heaviest quark was not detected until 1995. The name &ldquo;quark&rdquo; comes from a passage in a novel by James Joyce."
        },
        {
            shortname: "t",
            name: "top_quark",
            rgb: "#118953",
            properties: [100, 67, 0, 96, 0, 100, 64, 0, 100, 0],
            title_de: "Top-Quark",
            description_de: "Das Top-Quark ist eines von sechs Quark-Sorten. Es ist ein <em>Schwergewicht</em>. Top-Quarks sind elektrisch positiv geladen. (Man könnte sie daher als <em>optimistisch</em> beschreiben.) Gemeinsam ist allen sechs Quark-Sorten, dass sie niemals alleine vorkommen: Quarks sind <em>Gruppenwesen</em>. Sie setzen sich immer in Zweier- oder Dreiergruppen zu anderen Teilchen zusammen. Das <em>schüchterne</em> Top-Quark wurde erst 1995 experimentell nachgewiesen wurden. Der Name »Quark« geht auf eine Passage aus einem Roman von James Joyce zurück.",
            title_en: "Top quarks",
            description_en: "There are six different kinds of quarks, including <em>lightweights</em>, <em>middleweights</em> and <em>heavyweights</em>. Three kinds of quarks have a positive charge, and the other three have a negative charge. (We could therefore call them <em>optimistic</em> or <em>pessimistic</em>, respectively.) What all six of them have in common is the fact that they never occur singly: quarks are <em>gregarious.</em> They always bond together in groups of two or three to form other kinds of particles.The lightweight quarks were detected in atomic nuclei in 1969; the heaviest quark was not detected until 1995. The name &ldquo;quark&rdquo; comes from a passage in a novel by James Joyce."
        },
        {
            shortname: "b",
            name: "bottom_quark",
            rgb: "#359745",
            properties: [22, -33, 0, 47, 0, 100, 52, 0, 100, 0],
            title_de: "Bottom-Quark",
            description_de: "Das Bottom-Quark ist eines von sechs Quark-Sorten. Es ist ein <em>Schwergewicht</em>. Bottom-Quarks sind elektrisch negativ geladen. (Man könnte sie daher als <em>pessimistisch</em> beschreiben.) Gemeinsam ist allen sechs Quark-Sorten, dass sie niemals alleine vorkommen: Quarks sind <em>Gruppenwesen</em>. Sie setzen sich immer in Zweier- oder Dreiergruppen zu anderen Teilchen zusammen. Das Bottom-Quark wurde erst 1977 experimentell nachgewiesen wurden. Der Name »Quark« geht auf eine Passage aus einem Roman von James Joyce zurück.",
            title_en: "Bottom quarks",
            description_en: "There are six different kinds of quarks, including <em>lightweights</em>, <em>middleweights</em> and <em>heavyweights</em>. Three kinds of quarks have a positive charge, and the other three have a negative charge. (We could therefore call them <em>optimistic</em> or <em>pessimistic</em>, respectively.) What all six of them have in common is the fact that they never occur singly: quarks are <em>gregarious.</em> They always bond together in groups of two or three to form other kinds of particles.The lightweight quarks were detected in atomic nuclei in 1969; the heaviest quark was not detected until 1995. The name &ldquo;quark&rdquo; comes from a passage in a novel by James Joyce."
        },
        {
            shortname: "γ",
            name: "photon",
            rgb: "#F6D713",
            properties: [0, 0, 0, 0, 0, 0, 5, 100, 100, 0],
            title_de: "Photon",
            description_de: "Photonen übertragen die elektromagnetische Kraft: Wenn zwei Elementarteilchen über diese Kraft miteinander wechselwirken, wird immer ein Photon ausgetauscht. (Aufgrund dieses Austausches beschreiben wir Photonen hier als <em>kommunikativ</em>.) Aus Photonen besteht auch das bekannteste elektromagnetische Phänomen: Licht. Photonen sind <em>Leichtgewichte</em>, masselos sind sie ständig mit Lichtgeschwindigkeit unterwegs. Im Vakuum haben Photonen eine unendlich lange Lebensdauer. Sie sind also <em>stabil</em>. Nach den Elektronen wurden Photonen als zweite Elementarteilchensorte vorhergesagt und nachgewiesen. (Sie lieben also das <em>Rampenlicht</em>.) Der Name stammt vom griechischen Wort für Licht.",
            title_en: "Photons",
            description_en: "Photons mediate the electromagnetic force. Whenever two elementary particles interact with each other via this force, a photon is exchanged. (Because of this exchange, we describe photons here as <em>communicative</em>.) The best-known electromagnetic phenomenon, light, consists of photons. Photons are <em>lightweights</em>. Because they have no mass, they are constantly on the move at the speed of light. When they are in a vacuum, photons have an infinitely long lifespan. In other words, they are <em>stable</em>. Photons were the second kind of elementary particle, after electrons, to be predicted and detected. (They thus love to be in the <em>spotlight</em>.) Their name comes from the Greek word for light."
        },
        {
            shortname: "W+",
            name: "w_plus",
            rgb: "#DC0714",
            properties: [85, 100, 0, 98, 0, 0, 56, 100, 0, 0],
            title_de: "W-plus",
            description_de: "W-Teilchen übertragen die Schwache Kraft. Wenn zwei Elementarteilchen über diese Kraft miteinander wechselwirken, werden entweder W- oder Z-Teilchen ausgetauscht. (Aufgrund dieses Austausches beschreiben wir W- und Z-Teilchen hier als <em>kommunikativ</em>.) Die Schwäche der Schwachen Kraft hängt mit der großen Masse der W- und Z-Teilchen zusammen. Alle drei Teilchen sind <em>Schwergewichte</em>. W-plus-Teilchen sind elektrisch positiv geladen. (Daher werden die Teilchen hier als <em>optimistisch</em> beschrieben.) Die Teilchen zerfallen nach einem Bruchteil einer Sekunde. Sie sind <em>labil</em>. Nachgewiesen wurden die <em>schüchternen</em> W-plus-Teilchen 1983. Der Buchstabe »W« leitet sich aus dem englischen Wort für schwach ab: »weak«.",
            title_en: "W plus particles",
            description_en: "W and Z particles mediate the weak force. A W or a Z particle is exchanged whenever two elementary particles interact via the weak force. (Because of this exchange, we describe these particles here as <em>communicative</em>.) The weak force is weak because of the W and Z particles&rsquo; great mass. All three of these particles are <em>heavyweights</em>. W particles have an electric charge. The W-plus has a positive charge and the W-minus a negative one. The Z particle is electrically neutral. (That is why we refer to these particles here as <em>optimistic</em>, <em>pessimistic</em> and <em>relaxed</em>, respectively.) The W and Z particles were discovered in 1983. The letter &ldquo;W&rdquo; stands for &ldquo;weak&rdquo;."
        },
        {
            shortname: "W-",
            name: "w_minus",
            rgb: "#DC0714",
            properties: [85, -100, 0, 98, 0, 0, 56, 100, 0, 0],
            title_de: "W-minus",
            description_de: "W-Teilchen übertragen die Schwache Kraft. Wenn zwei Elementarteilchen über diese Kraft miteinander wechselwirken, werden entweder W- oder Z-Teilchen ausgetauscht. (Aufgrund dieses Austausches beschreiben wir W- und Z-Teilchen hier als <em>kommunikativ</em>.) Die Schwäche der Schwachen Kraft hängt mit der großen Masse der W- und Z-Teilchen zusammen. Alle drei Teilchen sind <em>Schwergewichte</em>. W-minus-Teilchen sind elektrisch negativ geladen. (Daher werden die Teilchen hier als <em>pessimistisch</em> beschrieben.) Die Teilchen zerfallen nach einem Bruchteil einer Sekunde. Sie sind <em>labil</em>. Nachgewiesen wurden die <em>schüchternen</em> W-minus-Teilchen 1983. Der Buchstabe »W« leitet sich aus dem englischen Wort für schwach ab: »weak«.",
            title_en: "W minus particles",
            description_en: "W and Z particles mediate the weak force. A W or a Z particle is exchanged whenever two elementary particles interact via the weak force. (Because of this exchange, we describe these particles here as <em>communicative</em>.) The weak force is weak because of the W and Z particles&rsquo; great mass. All three of these particles are <em>heavyweights</em>. W particles have an electric charge. The W-plus has a positive charge and the W-minus a negative one. The Z particle is electrically neutral. (That is why we refer to these particles here as <em>optimistic</em>, <em>pessimistic</em> and <em>relaxed</em>, respectively.) The W and Z particles were discovered in 1983. The letter &ldquo;W&rdquo; stands for &ldquo;weak&rdquo;."
        },
        {
            shortname: "Z0",
            name: "z_null",
            rgb: "#981F48",
            properties: [88, 0, 0, 98, 0, 0, 56, 100, 0, 0],
            title_de: "Z-null",
            description_de: "Z-Teilchen übertragen die Schwache Kraft. Wenn zwei Elementarteilchen über diese Kraft miteinander wechselwirken, werden entweder W- oder Z-Teilchen ausgetauscht. (Aufgrund dieses Austausches beschreiben wir W- und Z-Teilchen hier als <em>kommunikativ</em>.) Die Schwäche der Schwachen Kraft hängt mit der großen Masse der W- und Z-Teilchen zusammen. Alle drei Teilchen sind <em>Schwergewichte</em>. Z-Teilchen sind elektrisch neutral. (Daher werden die Teilchen hier als <em>gelassen</em> beschrieben.) Die Teilchen zerfallen nach einem Bruchteil einer Sekunde. Sie sind <em>labil</em>. Nachgewiesen wurden die <em>schüchternen</em> Z-null-Teilchen 1983.",
            title_en: "Z particles",
            description_en: "W and Z particles mediate the weak force. A W or a Z particle is exchanged whenever two elementary particles interact via the weak force. (Because of this exchange, we describe these particles here as <em>communicative</em>.) The weak force is weak because of the W and Z particles&rsquo; great mass. All three of these particles are <em>heavyweights</em>. W particles have an electric charge. The W-plus has a positive charge and the W-minus a negative one. The Z particle is electrically neutral. (That is why we refer to these particles here as <em>optimistic</em>, <em>pessimistic</em> and <em>relaxed</em>, respectively.) The W and Z particles were discovered in 1983. The letter &ldquo;W&rdquo; stands for &ldquo;weak&rdquo;."
        },
        {
            shortname: "g",
            name: "gluon",
            rgb: "#CD5E8A",
            properties: [0, 0, 0, 0, 0, 0, 50, 100, 100, 0],
            title_de: "Gluon",
            description_de: "Gluonen übertragen die Starke Kraft. Wenn Quarks stark miteinander wechselwirken, werden immer Gluonen ausgetauscht. (Aufgrund dieses Austausches beschreiben wir Gluonen hier als <em>kommunikativ</em>.) Gluonen sind elektrisch neutrale Teilchen (<em>gelassen</em>). Es handelt sich bei ihnen um masselose <em>Leichtgewichte</em>, die sich wie alle masselosen Teilchen mit Lichtgeschwindigkeit durchs Vakuum bewegen. Gluonen zerfallen nicht, sie gelten als <em>stabil</em>. Es gibt acht verschiedene Gluonen-Sorten. Die Gluonen wurden 1979 bei DESY nachgewiesen. Ihr Name leitet sich vom englischen Wort für Klebstoff ab. Denn Gluonen kleben die Quarks im Atomkern zusammen.",
            title_en: "Gluons",
            description_en: "Gluons mediate the strong force. Whenever there is a strong interaction between quarks, they exchange gluons. (Because of this exchange, we describe gluons here as <em>communicative</em>.) Gluons are electrically neutral (<em>relaxed</em>) particles. They are considered to be massless<em> lightweights,</em> and, like all massless particles, they move through a vacuum at the speed of light. Gluons don&rsquo;t decay, so they are referred to as <em>stable</em>. There are eight different types of gluons. Gluons were first detected in 1979 at DESY. The name &ldquo;gluon&rdquo; is derived from the English word &ldquo;glue&rdquo;. That&rsquo;s because the quarks in the atomic nucleus are &ldquo;stuck together&rdquo; by gluons."
        },
        {
            shortname: "G",
            name: "graviton",
            rgb: "#E9550C",
            properties: [0, 0, 0, 0, 0, 0, 100, 100, 100, 100],
            title_de: "Graviton",
            description_de: "Gravitonen sollen die Schwerkraft übertragen. Wenn Teilchen über diese Kraft miteinander wechselwirken, sollen dabei Gravitonen ausgetauscht werden. (Aufgrund dieses Austausches beschreiben wir Gravitonen hier als <em>kommunikativ</em>.) Doch Gravitonen wurden noch nicht nachgewiesen, vielleicht sind sie einfach nur <em>schüchtern</em>, vielleicht bleiben sie auch <em>Phantasie</em>. Ihre Außenseiterposition verdanken sie der Schwäche der Schwerkraft. Sie ist mehr als billionen-billionen-billionen-mal schwächer als die elektromagnetische Kraft. Gravitonen sollen die Anziehung zwischen Massen erklären, sind wohl selbst aber masselose <em>Leichtgewichte</em>. Eine elektrische Ladung besitzen sie auch nicht. Man könnte sie daher als <em>gelassen</em> beschreiben.",
            title_en: "Gravitons",
            description_en: "Gravitons are believed to transmit the force of gravity. When particles affect one another via this force, we postulate that gravitons are exchanged. (Because of this exchange, we describe gravitons here as <em>communicative</em>.) However, gravitons have not been detected yet — perhaps they are simply <em>shy</em>, or maybe they will remain nothing more than a <em>fantasy</em>. Their position as outsiders can be attributed to the weakness of gravity. It is more than a trillion trillion trillion times weaker than the electromagnetic force. If they exist, gravitons would explain the attraction between masses, although gravitons themselves are massless <em>lightweights</em>. They would also be electrically neutral and therefore <em>relaxed</em>."
        },
        {
            shortname: "H",
            name: "higgs",
            rgb: "#7C2780",
            properties: [96, 0, 0, 100, 0, 0, 75, 0, 100, 0],
            title_de: "Higgs",
            description_de: "Higgs-Teilchen vermitteln den Elementarteilchen ihre Masse. Deshalb werden sie hier als <em>kommunikativ</em> bezeichnet. Die <em>Schwergewichte</em> sind selbst die massivsten Bewohner des Teilchenzoos, elektrisch neutral (<em>gelassen</em>) und extrem <em>labil</em> &ndash; sie zerfallen nach einem Bruchteil einer Sekunde. Die <em>schüchternen</em> Higgs-Teilchen haben sich erst 2012 in Experimenten zu erkennen gegeben. Die Suche dauerte fast 50 Jahre lang. Sie sind die einzigen Teilchen, die nach einer Person benannt sind, dem schottischen Physiker Peter Higgs.",
            title_en: "Higgs particles",
            description_en: "Higgs particles are created as a result of a phenomenon that provides elementary particles with mass. These <em>heavyweights </em>are the most massive particles in existence. They are also electrically neutral (<em>relaxed</em>) and extremely <em>unstable </em>— they decay within a fraction of a second. The <em>shy </em>Higgs particles did not make themselves known until 2012, after a 50-year search. These particles are the only ones to be named after a person, the Scottish physicist Peter Higgs."
        },
        {
            shortname: "wi",
            name: "wimp",
            rgb: "#404D6A",
            properties: [100, 0, 0, 0, 0, 0, 100, 0, 100, 100],
            title_de: "Wimp",
            description_de: "Wimps wurden noch nicht nachgewiesen, vielleicht sind sie einfach nur <em>schüchtern</em>, vielleicht bleiben sie auch <em>Phantasie</em>. Wimps wurden vorhergesagt, um die sogenannte Dunkle Materie zu erklären. Diese Dunkle Materie soll es geben, weil man ansonsten Beobachtungen wie die Drehgeschwindigkeiten von Galaxien nicht erklären kann. Wimps haben keine elektrische Ladung. (Deshalb werden sie hier als <em>gelassen</em> beschrieben.) Aufgrund ihrer großen Masse sind Wimps <em>Schwergewichte</em>. Die Abkürzung WIMP steht für »weakly interacting massive particle«, das heißt »schwach wechselwirkende massereiche Teilchen«. Es heißt aber auch Schwächling.",
            title_en: "WIMPs",
            description_en: "WIMPs are great unknowns. They have never been detected — perhaps they&rsquo;re just <em>shy</em>, or perhaps they will simply remain a <em>fantasy</em>. WIMPs were predicted in order to explain what is known as dark matter. Without dark matter, it is difficult to explain observed phenomena such as the high rotation speeds of galaxies. WIMPs have no electric charge and are thus <em>relaxed</em>. WIMPs also have a very large mass, making them <em>heavyweights</em>. WIMP stands for &ldquo;weakly interacting massive particle&rdquo; — but in colloquial speech, it means a coward or weakling."
        }
    ];


function getQuizModel(inputValues) {
    "use strict";

    var bestMatches = [],
        bestMatchesMax = 0,
        bestMatchesMin = 10000,
        i,
        j,
        particle,
        distance,
        propertiesLength = inputValues.length,
        particlesLength = particles.length,
        sortedResults = [];

    for (i = 0; i < particlesLength; i += 1) {

        particle = particles[i];
        distance = 0;
        for (j = 0; j < propertiesLength; j += 1) {
            distance += Math.pow(inputValues[j] - particle.properties[j], 2);
        }

        distance = Math.sqrt(distance);
        bestMatches.push(distance);

        if (distance > bestMatchesMax) {
            bestMatchesMax = distance;
        }
        if (distance < bestMatchesMin) {
            bestMatchesMin = distance;
        }
    }

    /* sorted results */

    for (i = 0; i < particlesLength; i += 1) {

        sortedResults.push({particle: i, result: bestMatches[i]});
    }
    sortedResults = sortByKey(sortedResults, "result");

    return {
        sortedResults: sortedResults,
        bestMatches : bestMatches,
        bestMatchesMin : bestMatchesMin,
        bestMatchesMax : bestMatchesMax,
        particleToBeShown : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    };
}


function getQuizView(model) {
    "use strict";

    var i,
        tableView = "<table class='quizResultTable'>",
        particlesLength = particles.length,
        particle,
        normalizedValue;

    for (i = 0; i < particlesLength; i += 1) {

        if (model.particleToBeShown[i] === 1) {

            particle = particles[i];
            normalizedValue = testEasingQuad(100 - (model.bestMatches[i] - model.bestMatchesMin) / (model.bestMatchesMax - model.bestMatchesMin) * 100);

            tableView += "<tr>";
            tableView += "<td class='particleThumbnail'><img src='images/particles_cropped_100/" + particle.name + ".png' alt=''/></td>";
            tableView += "<td class='value'><div id='resultBin" + particle.name + "' class='resultBin " + particle.name + "' style='background-color: " + particle.rgb + ";width: " + normalizedValue + "%;'></td>";
            tableView += "</tr>";
        }
    }

    tableView += "</table>";

    return tableView;
}



function updateParticlomaticTableView(model) {
    "use strict";

    var i,
        tableView = "<table class='quizResultTable'>",
        particlesLength = particles.length,
        particle,
        normalizedValue;

    for (i = 0; i < particlesLength; i += 1) {

        if (model.particleToBeShown[i] === 1) {

            particle = particles[i];
            normalizedValue = testEasingQuad(100 - (model.bestMatches[i] - model.bestMatchesMin) / (model.bestMatchesMax - model.bestMatchesMin) * 100);
    //      normalizedValue = 100 - (model.bestMatches[i] - model.bestMatchesMin) / (model.bestMatchesMax - model.bestMatchesMin) * 100;

            $("#resultBin" + particle.name).css("width", normalizedValue + "%");
        }
    }

    tableView += "</table>";

    return tableView;
}

function getQuizTop3View(quizModel) {
    "use strict";

    var titleKey,
        descriptionKey,
        result;

    if (language === "en") {
        titleKey = "title_en";
        descriptionKey = "description_en";
    } else {
        titleKey = "title_de";
        descriptionKey = "description_de";
    }

    result = "<div class='particlomatic_result_top3_rank'><h1>1. " + particles[quizModel.sortedResults[0].particle][titleKey]  + " </h1>";
    result += "<div class='body'><div id='rank1'><img class='rank1_img' src='images/particles_cropped_500/" + particles[quizModel.sortedResults[0].particle].name + ".png'></div>";
    result += "<p class='particleDescription'>" + particles[quizModel.sortedResults[0].particle][descriptionKey]  + "</p></div></div>";
    result += "<div class='particlomatic_result_top3_rank'><h1>2. " + particles[quizModel.sortedResults[1].particle][titleKey]  + " </h1>";
    result += "<div class='body' style='display: none;'><div id='rank1'><img class='rank1_img' src='images/particles_cropped_500/" + particles[quizModel.sortedResults[1].particle].name + ".png'></div>";
    result += "<p  class='particleDescription'>" + particles[quizModel.sortedResults[1].particle][descriptionKey]  + "</p></div></div>";
    result += "<div class='particlomatic_result_top3_rank'><h1>3. " + particles[quizModel.sortedResults[2].particle][titleKey]  + " </h1>";
    result += "<div class='body' style='display: none;'><div id='rank1'><img class='rank1_img' src='images/particles_cropped_500/" + particles[quizModel.sortedResults[2].particle].name + ".png'></div>";
    result += "<p  class='particleDescription'>" + particles[quizModel.sortedResults[2].particle][descriptionKey]  + "</p></div></div>";
    return result;
}

var show_particlomatic_info = false;

function updateQuiz() {
    "use strict";

    var inputValues = [],
        quizModel;

    $("#particlomaticForm input").each(function () {
        inputValues.push($(this).val());
    });
    quizModel = getQuizModel(inputValues);

    updateParticlomaticTableView(quizModel);

    $("#particlomatic_result_top3").html(getQuizTop3View(quizModel));

    $("#particlomatic_result_top3 h1").on("click", function () {
        $(".body", $(this).parent().parent).hide();
        $(".body", $(this).parent()).show();
    });

    if (show_particlomatic_info) {
        $('.particlomatic_result_control_info').trigger("click");
    } else if ($('.particlomatic_result_control_info').hasClass("btn-active")) {
        $('.particlomatic_result_control_table').trigger("click");
    }
}

function updateQuizTeaser(scrollPosition) {
    "use strict";

    var inputValues = [scrollPosition, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        quizModel = getQuizModel(inputValues);

    quizModel.particleToBeShown = [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];

    if ($("#quizTeaser .quizResultTable").length == 0){
    $("#quizTeaser").html(getQuizView(quizModel));
    } else {
    updateParticlomaticTableView(quizModel);

    }
}

function initParticlomatic() {
    "use strict";

    console.log("initParticlomatic");
    $(".particlomatic-range-input button").on("click", function(event) {

        event.preventDefault();
        var parent = $(this).parent(),
            data_input_ref = $(parent).attr("data-input-ref"),
            rangeElement = $("#" + data_input_ref),
            minValue = parseFloat($(rangeElement).attr("min")),
            maxValue = parseFloat($(rangeElement).attr("max")),
            buttonValue = parseFloat($(this).attr("data-value")),
            newRangeElementValue = minValue + (maxValue - minValue) * buttonValue / 10;

        $(".btn", parent).removeClass("btn-active");
        $(".btn", parent).addClass("btn-inactive");
        $(".btn", parent).each(function() {

            if (parseFloat($(this).attr("data-value")) <= buttonValue) {
                $(this).addClass("btn-active");
                $(this).removeClass("btn-inactive");
            }
        });

        $(rangeElement).val(newRangeElementValue);
        $(rangeElement).trigger("change");
    });

    if (isWebsiteMode()) {
        $(".particlomatic-range-input button[data-value='5']").trigger("click");
    }

    $("#particlomaticForm input").on("change", $.throttle(100, function () {updateQuiz(); }));
    show_particlomatic_info = true;
    updateQuiz();
    show_particlomatic_info = false;

    $(".particlomatic_button_hide_info").hide();

    $(".particlomatic_button_show_info").on("click", function (event) {
        event.preventDefault();
        $(this).hide();
        $(".particlomatic_button_hide_info").show();
        $(".particlomaticHelp").show();
    });

    $(".particlomatic_button_hide_info").on("click", function (event) {
        event.preventDefault();
        $(this).hide();
        $(".particlomatic_button_show_info").show();
        $(".particlomaticHelp").hide();
    });

    $(".particlomatic_result_control_button").on("click", function (event) {

        var targetSelector = $(this).attr("data-href");
        event.preventDefault();
        $(".particlomatic_result_control_button").removeClass("btn-active");
        $(".particlomatic_result_control_button").addClass("btn-inactive");
        $(".particlomatic_result_control_button[data-href='" + targetSelector + "']").removeClass("btn-inactive");
        $(".particlomatic_result_control_button[data-href='" + targetSelector + "']").addClass("btn-active");
        $(".particlomatic_result_pane").hide();
        $(targetSelector).show();
    });

    $(".particlomatic_button_reset").on("click", function (event) {

        event.preventDefault();
        $(".particlomatic-range-input button[data-value='5']").trigger("click");
        $("#particlomaticForm input").each(function () {
            var mediumValue = (parseFloat($(this).attr("max")) + parseFloat($(this).attr("min"))) / 2;
            $(this).val(mediumValue);
        });
    });

    var inputValues = [],
        quizModel;

    $("#particlomaticForm input").each(function () {
        inputValues.push($(this).val());
    });
    quizModel = getQuizModel(inputValues);
    quizModel.particleToBeShown  = [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    $("#particlomatic_result_table #leptons").html(getQuizView(quizModel));
    quizModel.particleToBeShown  = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
    $("#particlomatic_result_table #quarks").html(getQuizView(quizModel));
    quizModel.particleToBeShown  = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1];
    $("#particlomatic_result_table #remaining").html(getQuizView(quizModel));
    $("#particlomatic_result_top3").html(getQuizTop3View(quizModel));

    $("#particlomatic_result_top3 h1").on("click", function () {
        $(".body", $(this).parent().parent()).hide();
        $(".body", $(this).parent()).show();
    });

}

var videoPlaylist = [];

function stopVideoplayer() {
    "use strict";
    var videoplayer = document.getElementsByTagName('video')[0];
    if (videoplayer.pause !== "undefined") {
        videoplayer.pause();
    }
}

function playNextVideo() {
    "use strict";
    var videoplayer = document.getElementsByTagName('video')[0],
        i,
        indexOfPlayingVideo;

    //console.log("videoplayer.src: " + videoplayer.src);
    //console.log("videoPlaylist.size: " + videoPlaylist.length);
    indexOfPlayingVideo = -1;
    for (i = 0; i < videoPlaylist.length - 1; i += 1) {
        if (videoplayer.src.endsWith(videoPlaylist[i])) {
            indexOfPlayingVideo = i;
        }
    }
    $(".videocontroller li[data-video-href='" + videoPlaylist[indexOfPlayingVideo + 1] + "']").trigger("click");


}


function initVideoPlayer() {
    "use strict";

    videoPlaylist = [];
    $(".videocontroller li").each(function() {
        videoPlaylist.push($(this).attr("data-video-href"));
    });

    var videoplayer = document.getElementsByTagName('video')[0];
    $("#videoplayer").height("576px");
    videoplayer.addEventListener('ended', playNextVideo);

    videoplayer.src = "";
    videoplayer.load();
    $(".videocontroller li").removeClass("playing");
    $(".videocontroller li").removeClass("pausing");



    $(".videocontroller li").on("click", function(event) {

        var videoplayer = $("#videoplayer")[0],
            src = $(this).attr("data-video-href");

        event.stopImmediatePropagation();

        if ($(this).hasClass("playing")) {

            videoplayer.pause();
            $(".videocontroller li").removeClass("playing");
            $(".videocontroller li").removeClass("pausing");
            $(this).addClass("pausing");

        } else {

            $(".videocontroller li").removeClass("playing");
            $(".videocontroller li").removeClass("pausing");
            $(this).addClass("playing");
            if (videoplayer.src.endsWith(src)) {
                videoplayer.play();
            } else {
                videoplayer.src = src;
                videoplayer.load();
                videoplayer.play();
            }
        }
    });

    $(".videocontroller li:first-child").trigger("click");
}


function initEncyclopedia() {
    "use strict";

    $("#encyclopedia_index").hide();

    $("#encyclopedia_overview").show();
    $("#encyclopedia_stage").html("");

    $("#encyclopedia_index a, #encyclopedia_overview a").on("click", function (event) {

        var target = $(this).attr("href").substr(1),
            contentFileName = "encyclopedia/" + target + languageSuffix + ".html";

        if (target === "overview") {

            $("#encyclopedia_overview").show();
            $("#encyclopedia_index").hide();
            $("#encyclopedia_stage").html("");

        } else {

            $("#encyclopedia_overview").hide();
            $("#encyclopedia_index").show();
            $("#encyclopedia_stage").load(contentFileName, function () {
                $("#encyclopedia_stage a").on("click", function (event) {

                    var target2 = $(this).attr("href").substr(1),
                        contentFileName2 = "encyclopedia/" + target2 + languageSuffix + ".html";
                    if (target2 === "overview") {
                        $("#encyclopedia_overview").show();
                        $(".encyclopedia_link_detail").hide();
                    } else {
                        $("#encyclopedia_overview").hide();
                        $(".encyclopedia_link_detail").show();
                    }
                    event.preventDefault();
                    $("#encyclopedia_stage").load(contentFileName2);
                });
            });
        }
        event.preventDefault();
    });
}

var animateScroll = function (targetElement, speed) {
    "use strict";

    var elementWidth = 300,
        elementGap = 600,
        elementsAndGapWidth = elementWidth + elementGap,
        width = targetElement.width(),
        backgroundPositionSplit = [],
        background_position_x,
        stepNumber,
        newBackgroundPositionX,
        newBackgroundPosition;

    if (targetElement.css('background-position')) {
        backgroundPositionSplit = targetElement.css('background-position').split(" ");
    }

    background_position_x  = 0;
    if (backgroundPositionSplit.length > 0) {
        background_position_x = parseInt(backgroundPositionSplit[0].replace(/[^\-\d\.]/g, ''), 10) || 0;
    }

    stepNumber = Math.floor(background_position_x / elementsAndGapWidth);
    stepNumber -= 2;
    if (stepNumber < -7) {
        stepNumber += 7;
    }
    newBackgroundPositionX = stepNumber * elementsAndGapWidth + (width - elementWidth) / 2;
    newBackgroundPosition = newBackgroundPositionX + "px 0px";

    $(targetElement).animate(
        {
            backgroundPosition: newBackgroundPosition
        },
        {
            duration: speed,
            easing: "easeOutQuint",
            complete: function () {
                var that = this;
                setTimeout(function () {animateScroll($(that), speed); }, 2000);
            }
        }
    );
};

function initPageHome() {
    "use strict";

    FastClick.attach(document.body);

    animateScroll($("#teilchenzoo_teaser_teilchen_roll_stage"), 200);
    updateQuizTeaser(0);

    $(window).on("scroll", $.throttle(100, function () {

        var scrollTop = $(document).scrollTop(),
            scrollPosition = scrollTop / $(document).height();

        updateQuizTeaser((scrollPosition * 250 - 50) * 3);

    }));

    $(window).on("scroll", function () {

        var scrollPosition = $(document).scrollTop() / $(document).height();

        $(".test_teaser_text").each(function (index) {

            var value = animationFunctionSpike(scrollPosition * 2 - (index + 1) / 6, 0.1);
            $(this).css("opacity", value);
        });

        $("#questions_teaser_container img").each(function (index) {

            if (Math.pow(Math.sin(scrollPosition * 50 + Math.PI * (index + 1) / 16), 2) > 0.5) {
                $(this).attr("src", "images/teaser_exclamationmark.png");
            } else {
                $(this).attr("src", "images/teaser_questionmark.png");
            }
        });
    });
}


function initPageParticlomatic() {
    "use strict";

    if (Modernizr.inputtypes.range) {
        $("html").addClass("inputtype-range");
    } else {
        $("html").addClass("no-inputtype-range");
    }

    FastClick.attach(document.body);
    initParticlomatic();
}


function getParameterByName(name) {
    "use strict";
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var website = {

    initialize: function() {
        "use strict";

        mode = "website";
        language = getParameterByName("l");
        if (language === "de_sie") {

            $("html").removeClass("de_du");
            $("html").addClass("de_sie");
            $(".i18nable").each(function() {

                var href = $(this).attr("href"),
                    url = href.substr(0, href.indexOf("#")),
                    hash = href.substr(href.indexOf("#"));
                $(this).attr("href",  url + "?l=de_sie" + hash);
            });

        } else {

            if ($("html").hasClass("en")) {
                language = "en";
                languageSuffix = "_en";
            }
        }
    }
};


var app = {

    initialize: function() {
        "use strict";

        FastClick.attach(document.body);

        $(document).bind('click', function () {bypassScreensaver = true; });
        $(document).bind('tap', function () {bypassScreensaver = true; });
        setTimeout(checkScreensaver, 10000);

        mode = "app";
        language = getParameterByName("l");

        if (language === "de_sie") {

            $("html").removeClass("de_du");
            $("html").addClass("de_sie");
            $(".i18nable").each(function() {
                var href = $(this).attr("href"),
                    url = href.substr(0, href.indexOf("#")),
                    hash = href.substr(href.indexOf("#"));
                $(this).attr("href",  url + "?l=de_sie" + hash);
            });

        } else {

            if ($("html").hasClass("en")) {
                language = "en";
                languageSuffix = "_en";
            }
        }

        var self = this;
        this.registerEvents();

        if (appName === "Teilchomat") {

            window.location.hash = "#page-particlomatic";
            $("html").addClass("particlomaticOnlyApp");
            initParticlomatic();
            app.route();
//            setTimeout("", 5000);
//           initEncyclopedia();

        } else {

            self.route();
            initParticlomatic();
            initEncyclopedia();
        }
    },

    route: function() {
        "use strict";

        var self = this,
            hash = window.location.hash;

        stopVideoplayer();
        if (!hash) {
            hash = "#page-home";
        }

        $(".navbar-fixed-bottom a").removeClass("selected");

        $(".page").hide();
        $(hash).show();
        if (hash === "#page-home") {
            $("body").removeClass("videoBody");
            $("a.navbarHomeLink").addClass("selected");
        } else if (hash === "#page-particlomatic") {
            $("body").removeClass("videoBody");
            $("a.navbarParticlomaticLink").addClass("selected");
        } else if (hash === "#page-videos") {
            $("body").addClass("videoBody");
            $("a.navbarVideosLink").addClass("selected");
            initVideoPlayer();
        } else if (hash === "#page-content") {
            $("body").removeClass("videoBody");
            $(".content").css("min-height", ($(window).height() - 50) + 'px');
            $("a.navbarContentLink").addClass("selected");
        }
//        $(document).scrollTop(0);
    },

    registerEvents: function() {
        "use strict";

        var self = this;

        if (document.documentElement.hasOwnProperty('ontouchstart')) {
            /*... if yes: register touch event listener
            to change the 'selected' state of the item */
            $('body').on('touchstart', 'a', function(event) {
                $(event.target).addClass('tappable-active');
            });
            $('body').on('touchend', 'a', function(event) {
                $(event.target).removeClass('tappable-active');
            });
        } else {
            // ... if not: register mouse events instead
            $('body').on('mousedown', 'a', function(event) {
                $(event.target).addClass('tappable-active');
            });
            $('body').on('mouseup', 'a', function(event) {
                $(event.target).removeClass('tappable-active');
            });
        }

        $(window).on('hashchange', $.proxy(this.route, this));
    }
};