/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'grabody2',
            type:'image',
            rect:['167px','17px','238px','349px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"grabody2.png",'0px','0px']
         },
         {
            id:'grabody3',
            type:'image',
            rect:['167px','17px','238px','350px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"grabody3.png",'0px','0px']
         },
         {
            id:'grabody1',
            type:'image',
            rect:['171px','21px','230px','342px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"grabody1.png",'0px','0px']
         },
         {
            id:'grairis',
            type:'image',
            rect:['282px','184px','18px','21px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"grairis.png",'0px','0px']
         },
         {
            id:'grapupil',
            type:'image',
            rect:['291px','189px','7px','8px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"grapupil.png",'0px','0px']
         },
         {
            id:'Ellipse',
            type:'ellipse',
            rect:['250px','144px','59px','26px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(231,87,16,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_grapupil}": [
            ["style", "top", '189px'],
            ["style", "left", '291px']
         ],
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(231,87,16,1.00)'],
            ["style", "height", '26px'],
            ["style", "opacity", '0'],
            ["style", "left", '250px'],
            ["style", "top", '144px']
         ],
         "${_grabody3}": [
            ["style", "top", '17px'],
            ["style", "opacity", '0'],
            ["style", "left", '167px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '550px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ],
         "${_grabody1}": [
            ["style", "top", '21px'],
            ["style", "opacity", '1'],
            ["style", "left", '171px']
         ],
         "${_grairis}": [
            ["style", "top", '184px'],
            ["style", "left", '282px']
         ],
         "${_grabody2}": [
            ["style", "top", '17px'],
            ["style", "opacity", '0'],
            ["style", "left", '167px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 7328,
         autoPlay: true,
         timeline: [
            { id: "eid63", tween: [ "style", "${_Ellipse}", "height", '86px', { fromValue: '26px'}], position: 4865, duration: 189, easing: "easeInBack" },
            { id: "eid64", tween: [ "style", "${_Ellipse}", "height", '14px', { fromValue: '86px'}], position: 5054, duration: 196, easing: "easeInBack" },
            { id: "eid68", tween: [ "style", "${_Ellipse}", "height", '86px', { fromValue: '26px'}], position: 6260, duration: 189, easing: "easeInBack" },
            { id: "eid69", tween: [ "style", "${_Ellipse}", "height", '14px', { fromValue: '86px'}], position: 6449, duration: 196, easing: "easeInBack" },
            { id: "eid67", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0'}], position: 4739, duration: 126, easing: "easeInBack" },
            { id: "eid71", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 6645, duration: 126, easing: "easeInBack" },
            { id: "eid33", tween: [ "style", "${_grabody2}", "opacity", '1', { fromValue: '0.000000'}], position: 2676, duration: 154 },
            { id: "eid35", tween: [ "style", "${_grabody2}", "opacity", '0', { fromValue: '1'}], position: 2830, duration: 170 },
            { id: "eid38", tween: [ "style", "${_grabody2}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 154 },
            { id: "eid40", tween: [ "style", "${_grabody2}", "opacity", '0', { fromValue: '1'}], position: 3154, duration: 166 },
            { id: "eid42", tween: [ "style", "${_grabody2}", "opacity", '1', { fromValue: '0'}], position: 3320, duration: 180 },
            { id: "eid44", tween: [ "style", "${_grabody2}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 153 },
            { id: "eid46", tween: [ "style", "${_grabody2}", "opacity", '1', { fromValue: '0'}], position: 3653, duration: 167 },
            { id: "eid48", tween: [ "style", "${_grabody2}", "opacity", '0', { fromValue: '1'}], position: 3820, duration: 180 },
            { id: "eid49", tween: [ "style", "${_grabody2}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 174 },
            { id: "eid51", tween: [ "style", "${_grabody2}", "opacity", '0', { fromValue: '1'}], position: 4174, duration: 76 },
            { id: "eid14", tween: [ "style", "${_grairis}", "left", '263px', { fromValue: '282px'}], position: 0, duration: 750, easing: "easeOutCubic" },
            { id: "eid20", tween: [ "style", "${_grairis}", "left", '271px', { fromValue: '263px'}], position: 750, duration: 552, easing: "easeOutQuint" },
            { id: "eid24", tween: [ "style", "${_grairis}", "left", '270px', { fromValue: '271px'}], position: 1302, duration: 448, easing: "easeOutQuart" },
            { id: "eid26", tween: [ "style", "${_grairis}", "left", '271px', { fromValue: '270px'}], position: 1750, duration: 433, easing: "easeInBack" },
            { id: "eid60", tween: [ "style", "${_grairis}", "left", '282px', { fromValue: '271px'}], position: 5357, duration: 143 },
            { id: "eid17", tween: [ "style", "${_grapupil}", "top", '201px', { fromValue: '189px'}], position: 0, duration: 750, easing: "easeOutCubic" },
            { id: "eid19", tween: [ "style", "${_grapupil}", "top", '178px', { fromValue: '201px'}], position: 750, duration: 552, easing: "easeOutQuint" },
            { id: "eid23", tween: [ "style", "${_grapupil}", "top", '211px', { fromValue: '178px'}], position: 1302, duration: 448, easing: "easeOutQuart" },
            { id: "eid29", tween: [ "style", "${_grapupil}", "top", '196px', { fromValue: '211px'}], position: 1750, duration: 433, easing: "easeInBack" },
            { id: "eid59", tween: [ "style", "${_grapupil}", "top", '189px', { fromValue: '196px'}], position: 5357, duration: 143 },
            { id: "eid15", tween: [ "style", "${_grairis}", "top", '193px', { fromValue: '184px'}], position: 0, duration: 750, easing: "easeOutCubic" },
            { id: "eid21", tween: [ "style", "${_grairis}", "top", '176px', { fromValue: '193px'}], position: 750, duration: 552, easing: "easeOutQuint" },
            { id: "eid25", tween: [ "style", "${_grairis}", "top", '202px', { fromValue: '176px'}], position: 1302, duration: 448, easing: "easeOutQuart" },
            { id: "eid27", tween: [ "style", "${_grairis}", "top", '190px', { fromValue: '202px'}], position: 1750, duration: 433, easing: "easeInBack" },
            { id: "eid61", tween: [ "style", "${_grairis}", "top", '184px', { fromValue: '190px'}], position: 5357, duration: 143 },
            { id: "eid16", tween: [ "style", "${_grapupil}", "left", '266px', { fromValue: '291px'}], position: 0, duration: 750, easing: "easeOutCubic" },
            { id: "eid18", tween: [ "style", "${_grapupil}", "left", '277px', { fromValue: '266px'}], position: 750, duration: 552, easing: "easeOutQuint" },
            { id: "eid22", tween: [ "style", "${_grapupil}", "left", '277px', { fromValue: '277px'}], position: 1302, duration: 448, easing: "easeOutQuart" },
            { id: "eid28", tween: [ "style", "${_grapupil}", "left", '277px', { fromValue: '277px'}], position: 1750, duration: 433, easing: "easeInBack" },
            { id: "eid58", tween: [ "style", "${_grapupil}", "left", '291px', { fromValue: '277px'}], position: 5357, duration: 143 },
            { id: "eid32", tween: [ "style", "${_grabody3}", "opacity", '1', { fromValue: '0'}], position: 2596, duration: 80 },
            { id: "eid34", tween: [ "style", "${_grabody3}", "opacity", '0', { fromValue: '1'}], position: 2676, duration: 154 },
            { id: "eid36", tween: [ "style", "${_grabody3}", "opacity", '1', { fromValue: '0'}], position: 2830, duration: 170 },
            { id: "eid37", tween: [ "style", "${_grabody3}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 154 },
            { id: "eid39", tween: [ "style", "${_grabody3}", "opacity", '1', { fromValue: '0.000000'}], position: 3154, duration: 166 },
            { id: "eid41", tween: [ "style", "${_grabody3}", "opacity", '0', { fromValue: '1'}], position: 3320, duration: 180 },
            { id: "eid43", tween: [ "style", "${_grabody3}", "opacity", '1', { fromValue: '0.000000'}], position: 3500, duration: 153 },
            { id: "eid45", tween: [ "style", "${_grabody3}", "opacity", '0', { fromValue: '1'}], position: 3653, duration: 167 },
            { id: "eid47", tween: [ "style", "${_grabody3}", "opacity", '1', { fromValue: '0.000000'}], position: 3820, duration: 180 },
            { id: "eid53", tween: [ "style", "${_grabody3}", "opacity", '0', { fromValue: '1'}], position: 4000, duration: 174 },
            { id: "eid31", tween: [ "style", "${_grabody1}", "opacity", '0', { fromValue: '1'}], position: 2596, duration: 80 },
            { id: "eid52", tween: [ "style", "${_grabody1}", "opacity", '1', { fromValue: '0'}], position: 4174, duration: 76 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-12814302");
