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
            id:'Group',
            type:'group',
            rect:['146','68','295','300','auto','auto'],
            c:[
            {
               id:'eneubody',
               type:'image',
               rect:['0px','107px','250px','193px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"eneubody.png",'0px','0px']
            },
            {
               id:'eneuhead',
               type:'image',
               rect:['114px','0px','135px','93px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"eneuhead.png",'0px','0px']
            },
            {
               id:'eneumask',
               type:'image',
               rect:['65px','37px','230px','133px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"eneumask.png",'0px','0px']
            },
            {
               id:'eneuleftiris',
               type:'image',
               rect:['111px','94px','37px','35px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"eneuleftiris.png",'0px','0px']
            },
            {
               id:'eneuleftpupil',
               type:'image',
               rect:['131px','113px','10px','10px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"eneuleftpupil.png",'0px','0px']
            },
            {
               id:'eneurightiris',
               type:'image',
               rect:['176px','113px','40px','33px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"eneurightiris.png",'0px','0px']
            },
            {
               id:'eneurightpupil',
               type:'image',
               rect:['182px','128px','11px','9px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"eneurightpupil.png",'0px','0px']
            }]
         },
         {
            id:'RoundRect2',
            type:'rect',
            rect:['309px','156px','83px','14px','auto','auto'],
            borderRadius:["10px","10px","10px","0px"],
            fill:["rgba(151,173,180,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_eneuleftiris}": [
            ["style", "top", '96px'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '111px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_eneumask}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '37px'],
            ["style", "left", '65px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_RoundRect2}": [
            ["color", "background-color", 'rgba(151,173,180,1.00)'],
            ["transform", "rotateZ", '28deg'],
            ["style", "opacity", '0'],
            ["style", "left", '243px'],
            ["style", "width", '77px'],
            ["style", "top", '142px'],
            ["style", "border-bottom-left-radius", [126,126], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '0.40312'],
            ["style", "height", '1px'],
            ["style", "border-bottom-right-radius", [22,22], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_eneurightiris}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '113px'],
            ["style", "left", '176px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_eneuhead}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '114px']
         ],
         "${_eneuleftpupil}": [
            ["style", "top", '116px'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '131px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '400px'],
            ["style", "width", '550px']
         ],
         "${_eneubody}": [
            ["style", "top", '107px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_eneurightpupil}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '128px'],
            ["style", "left", '182px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Group}": [
            ["style", "top", '68px'],
            ["style", "height", '300px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "-webkit-transform-origin", [8.18,62.07], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [8.18,62.07],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [8.18,62.07],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [8.18,62.07],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [8.18,62.07],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '146px'],
            ["style", "width", '295px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4750,
         autoPlay: true,
         timeline: [
            { id: "eid199", tween: [ "transform", "${_eneumask}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1330, duration: 0 },
            { id: "eid203", tween: [ "transform", "${_eneumask}", "rotateZ", '720deg', { fromValue: '0deg'}], position: 1898, duration: 1330, easing: "easeInOutElastic" },
            { id: "eid186", tween: [ "style", "${_eneurightiris}", "-webkit-transform-origin", [-28.12,22.03], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid546", tween: [ "style", "${_eneurightiris}", "-moz-transform-origin", [-28.12,22.03], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid547", tween: [ "style", "${_eneurightiris}", "-ms-transform-origin", [-28.12,22.03], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid548", tween: [ "style", "${_eneurightiris}", "msTransformOrigin", [-28.12,22.03], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid549", tween: [ "style", "${_eneurightiris}", "-o-transform-origin", [-28.12,22.03], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid356", tween: [ "style", "${_RoundRect2}", "top", '93px', { fromValue: '142px'}], position: 3978, duration: 250, easing: "easeInQuad" },
            { id: "eid360", tween: [ "style", "${_RoundRect2}", "top", '141px', { fromValue: '93px'}], position: 4228, duration: 250, easing: "easeInQuad" },
            { id: "eid188", tween: [ "style", "${_eneuleftpupil}", "-webkit-transform-origin", [337.52,42.7], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid550", tween: [ "style", "${_eneuleftpupil}", "-moz-transform-origin", [337.52,42.7], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid551", tween: [ "style", "${_eneuleftpupil}", "-ms-transform-origin", [337.52,42.7], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid552", tween: [ "style", "${_eneuleftpupil}", "msTransformOrigin", [337.52,42.7], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid553", tween: [ "style", "${_eneuleftpupil}", "-o-transform-origin", [337.52,42.7], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid196", tween: [ "transform", "${_eneuleftiris}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1330, duration: 0 },
            { id: "eid205", tween: [ "transform", "${_eneuleftiris}", "rotateZ", '720deg', { fromValue: '0deg'}], position: 1898, duration: 1330, easing: "easeInOutElastic" },
            { id: "eid195", tween: [ "transform", "${_eneurightiris}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1330, duration: 0 },
            { id: "eid201", tween: [ "transform", "${_eneurightiris}", "rotateZ", '720deg', { fromValue: '0deg'}], position: 1898, duration: 1330, easing: "easeInOutElastic" },
            { id: "eid307", tween: [ "style", "${_RoundRect2}", "opacity", '1', { fromValue: '0'}], position: 3912, duration: 66, easing: "easeInOutElastic" },
            { id: "eid166", tween: [ "style", "${_eneuhead}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid170", tween: [ "style", "${_eneuhead}", "opacity", '0', { fromValue: '1'}], position: 1330, duration: 568 },
            { id: "eid257", tween: [ "style", "${_eneuhead}", "opacity", '1', { fromValue: '0'}], position: 2806, duration: 632, easing: "easeInOutElastic" },
            { id: "eid197", tween: [ "transform", "${_eneurightpupil}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1330, duration: 0 },
            { id: "eid200", tween: [ "transform", "${_eneurightpupil}", "rotateZ", '720deg', { fromValue: '0deg'}], position: 1898, duration: 1330, easing: "easeInOutElastic" },
            { id: "eid187", tween: [ "style", "${_eneurightpupil}", "-webkit-transform-origin", [-156.8,-85.89], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid554", tween: [ "style", "${_eneurightpupil}", "-moz-transform-origin", [-156.8,-85.89], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid555", tween: [ "style", "${_eneurightpupil}", "-ms-transform-origin", [-156.8,-85.89], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid556", tween: [ "style", "${_eneurightpupil}", "msTransformOrigin", [-156.8,-85.89], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid557", tween: [ "style", "${_eneurightpupil}", "-o-transform-origin", [-156.8,-85.89], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid167", tween: [ "style", "${_eneubody}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid171", tween: [ "style", "${_eneubody}", "opacity", '0', { fromValue: '1'}], position: 1330, duration: 568 },
            { id: "eid256", tween: [ "style", "${_eneubody}", "opacity", '1', { fromValue: '0'}], position: 2806, duration: 632, easing: "easeInOutElastic" },
            { id: "eid198", tween: [ "transform", "${_eneuleftpupil}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1330, duration: 0 },
            { id: "eid202", tween: [ "transform", "${_eneuleftpupil}", "rotateZ", '720deg', { fromValue: '0deg'}], position: 1898, duration: 1330, easing: "easeInOutElastic" },
            { id: "eid189", tween: [ "style", "${_eneuleftiris}", "-webkit-transform-origin", [145.28,69.34], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid558", tween: [ "style", "${_eneuleftiris}", "-moz-transform-origin", [145.28,69.34], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid559", tween: [ "style", "${_eneuleftiris}", "-ms-transform-origin", [145.28,69.34], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid560", tween: [ "style", "${_eneuleftiris}", "msTransformOrigin", [145.28,69.34], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid561", tween: [ "style", "${_eneuleftiris}", "-o-transform-origin", [145.28,69.34], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid185", tween: [ "style", "${_eneumask}", "-webkit-transform-origin", [43.37,62.61], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid562", tween: [ "style", "${_eneumask}", "-moz-transform-origin", [43.37,62.61], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid563", tween: [ "style", "${_eneumask}", "-ms-transform-origin", [43.37,62.61], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid564", tween: [ "style", "${_eneumask}", "msTransformOrigin", [43.37,62.61], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid565", tween: [ "style", "${_eneumask}", "-o-transform-origin", [43.37,62.61], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid355", tween: [ "style", "${_RoundRect2}", "height", '153px', { fromValue: '1px'}], position: 3978, duration: 250, easing: "easeInQuad" },
            { id: "eid359", tween: [ "style", "${_RoundRect2}", "height", '2px', { fromValue: '153px'}], position: 4228, duration: 250, easing: "easeInQuad" },
            { id: "eid357", tween: [ "style", "${_RoundRect2}", "left", '228px', { fromValue: '243px'}], position: 3978, duration: 250, easing: "easeInQuad" },
            { id: "eid361", tween: [ "style", "${_RoundRect2}", "left", '242px', { fromValue: '228px'}], position: 4228, duration: 250, easing: "easeInQuad" }         ]
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
})(jQuery, AdobeEdge, "EDGE-7171848");
