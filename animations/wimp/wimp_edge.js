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
            rect:['121','22','301','294','auto','auto'],
            transform:[[],[],[],[],['38.3077%','98.0401%']],
            c:[
            {
               id:'wimphead',
               type:'image',
               rect:['0px','0px','301px','122px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"wimphead.png",'0px','0px']
            },
            {
               id:'wimpbody',
               type:'image',
               rect:['57px','99px','168px','195px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"wimpbody.png",'0px','0px']
            }]
         },
         {
            id:'wimpleftleg',
            type:'image',
            rect:['203px','294px','37px','78px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"wimpleftleg.png",'0px','0px']
         },
         {
            id:'wimprightleg',
            type:'image',
            rect:['271px','304px','31px','70px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"wimprightleg.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_wimprightleg}": [
            ["style", "top", '318px'],
            ["style", "left", '282px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_wimphead}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_wimpleftleg}": [
            ["style", "top", '308px'],
            ["style", "left", '214px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '550px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Group}": [
            ["style", "-webkit-transform-origin", [38.31,98.04], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [38.31,98.04],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [38.31,98.04],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [38.31,98.04],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [38.31,98.04],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '36px'],
            ["style", "left", '132px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_wimpbody}": [
            ["style", "top", '99px'],
            ["style", "left", '57px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 8062,
         autoPlay: true,
         timeline: [
            { id: "eid22", tween: [ "style", "${_Group}", "left", '132px', { fromValue: '132px'}], position: 0, duration: 0 },
            { id: "eid10", tween: [ "style", "${_wimphead}", "top", '5px', { fromValue: '0px'}], position: 0, duration: 715 },
            { id: "eid29", tween: [ "style", "${_wimphead}", "top", '8px', { fromValue: '5px'}], position: 715, duration: 715 },
            { id: "eid44", tween: [ "style", "${_wimphead}", "top", '5px', { fromValue: '8px'}], position: 1429, duration: 935, easing: "easeInOutQuad" },
            { id: "eid54", tween: [ "style", "${_wimphead}", "top", '8px', { fromValue: '5px'}], position: 2364, duration: 935, easing: "easeInOutQuad" },
            { id: "eid61", tween: [ "style", "${_wimphead}", "top", '5px', { fromValue: '8px'}], position: 3299, duration: 935, easing: "easeInOutQuad" },
            { id: "eid62", tween: [ "style", "${_wimphead}", "top", '8px', { fromValue: '5px'}], position: 4234, duration: 934, easing: "easeInOutQuad" },
            { id: "eid84", tween: [ "style", "${_wimphead}", "top", '5px', { fromValue: '8px'}], position: 5168, duration: 935, easing: "easeInOutQuad" },
            { id: "eid79", tween: [ "style", "${_wimphead}", "top", '0px', { fromValue: '5px'}], position: 6103, duration: 715 },
            { id: "eid21", tween: [ "style", "${_wimprightleg}", "top", '318px', { fromValue: '318px'}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "transform", "${_wimpleftleg}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "transform", "${_wimphead}", "rotateZ", '-13deg', { fromValue: '0deg'}], position: 0, duration: 715 },
            { id: "eid31", tween: [ "transform", "${_wimphead}", "rotateZ", '16deg', { fromValue: '-13deg'}], position: 715, duration: 715 },
            { id: "eid46", tween: [ "transform", "${_wimphead}", "rotateZ", '-13deg', { fromValue: '16deg'}], position: 1429, duration: 935, easing: "easeInOutQuad" },
            { id: "eid56", tween: [ "transform", "${_wimphead}", "rotateZ", '16deg', { fromValue: '-13deg'}], position: 2364, duration: 935, easing: "easeInOutQuad" },
            { id: "eid65", tween: [ "transform", "${_wimphead}", "rotateZ", '-13deg', { fromValue: '16deg'}], position: 3299, duration: 935, easing: "easeInOutQuad" },
            { id: "eid66", tween: [ "transform", "${_wimphead}", "rotateZ", '16deg', { fromValue: '-13deg'}], position: 4234, duration: 934, easing: "easeInOutQuad" },
            { id: "eid86", tween: [ "transform", "${_wimphead}", "rotateZ", '-13deg', { fromValue: '16deg'}], position: 5168, duration: 935, easing: "easeInOutQuad" },
            { id: "eid81", tween: [ "transform", "${_wimphead}", "rotateZ", '0deg', { fromValue: '-13deg'}], position: 6103, duration: 715 },
            { id: "eid6", tween: [ "transform", "${_Group}", "rotateZ", '-14deg', { fromValue: '0deg'}], position: 0, duration: 715 },
            { id: "eid28", tween: [ "transform", "${_Group}", "rotateZ", '4deg', { fromValue: '-14deg'}], position: 715, duration: 715 },
            { id: "eid43", tween: [ "transform", "${_Group}", "rotateZ", '-14deg', { fromValue: '4deg'}], position: 1429, duration: 935, easing: "easeInOutQuad" },
            { id: "eid53", tween: [ "transform", "${_Group}", "rotateZ", '4deg', { fromValue: '-14deg'}], position: 2364, duration: 935, easing: "easeInOutQuad" },
            { id: "eid59", tween: [ "transform", "${_Group}", "rotateZ", '-14deg', { fromValue: '4deg'}], position: 3299, duration: 935, easing: "easeInOutQuad" },
            { id: "eid60", tween: [ "transform", "${_Group}", "rotateZ", '4deg', { fromValue: '-14deg'}], position: 4234, duration: 934, easing: "easeInOutQuad" },
            { id: "eid83", tween: [ "transform", "${_Group}", "rotateZ", '-14deg', { fromValue: '4deg'}], position: 5168, duration: 935, easing: "easeInOutQuad" },
            { id: "eid78", tween: [ "transform", "${_Group}", "rotateZ", '0deg', { fromValue: '-14deg'}], position: 6103, duration: 715 },
            { id: "eid20", tween: [ "style", "${_wimprightleg}", "left", '282px', { fromValue: '282px'}], position: 0, duration: 0 },
            { id: "eid36", tween: [ "style", "${_Group}", "-webkit-transform-origin", [52.51,98.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.31,98.04]}], position: 0, duration: 1429 },
            { id: "eid152", tween: [ "style", "${_Group}", "-moz-transform-origin", [52.51,98.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.31,98.04]}], position: 0, duration: 1429 },
            { id: "eid153", tween: [ "style", "${_Group}", "-ms-transform-origin", [52.51,98.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.31,98.04]}], position: 0, duration: 1429 },
            { id: "eid154", tween: [ "style", "${_Group}", "msTransformOrigin", [52.51,98.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.31,98.04]}], position: 0, duration: 1429 },
            { id: "eid155", tween: [ "style", "${_Group}", "-o-transform-origin", [52.51,98.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.31,98.04]}], position: 0, duration: 1429 },
            { id: "eid42", tween: [ "style", "${_Group}", "-webkit-transform-origin", [38.31,98.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.51,98.33]}], position: 1429, duration: 935, easing: "easeInOutQuad" },
            { id: "eid156", tween: [ "style", "${_Group}", "-moz-transform-origin", [38.31,98.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.51,98.33]}], position: 1429, duration: 935, easing: "easeInOutQuad" },
            { id: "eid157", tween: [ "style", "${_Group}", "-ms-transform-origin", [38.31,98.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.51,98.33]}], position: 1429, duration: 935, easing: "easeInOutQuad" },
            { id: "eid158", tween: [ "style", "${_Group}", "msTransformOrigin", [38.31,98.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.51,98.33]}], position: 1429, duration: 935, easing: "easeInOutQuad" },
            { id: "eid159", tween: [ "style", "${_Group}", "-o-transform-origin", [38.31,98.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.51,98.33]}], position: 1429, duration: 935, easing: "easeInOutQuad" },
            { id: "eid52", tween: [ "style", "${_Group}", "-webkit-transform-origin", [52.51,98.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.31,98.04]}], position: 2364, duration: 935, easing: "easeInOutQuad" },
            { id: "eid160", tween: [ "style", "${_Group}", "-moz-transform-origin", [52.51,98.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.31,98.04]}], position: 2364, duration: 935, easing: "easeInOutQuad" },
            { id: "eid161", tween: [ "style", "${_Group}", "-ms-transform-origin", [52.51,98.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.31,98.04]}], position: 2364, duration: 935, easing: "easeInOutQuad" },
            { id: "eid162", tween: [ "style", "${_Group}", "msTransformOrigin", [52.51,98.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.31,98.04]}], position: 2364, duration: 935, easing: "easeInOutQuad" },
            { id: "eid163", tween: [ "style", "${_Group}", "-o-transform-origin", [52.51,98.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.31,98.04]}], position: 2364, duration: 935, easing: "easeInOutQuad" },
            { id: "eid57", tween: [ "style", "${_Group}", "-webkit-transform-origin", [38.31,98.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.51,98.33]}], position: 3299, duration: 935, easing: "easeInOutQuad" },
            { id: "eid164", tween: [ "style", "${_Group}", "-moz-transform-origin", [38.31,98.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.51,98.33]}], position: 3299, duration: 935, easing: "easeInOutQuad" },
            { id: "eid165", tween: [ "style", "${_Group}", "-ms-transform-origin", [38.31,98.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.51,98.33]}], position: 3299, duration: 935, easing: "easeInOutQuad" },
            { id: "eid166", tween: [ "style", "${_Group}", "msTransformOrigin", [38.31,98.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.51,98.33]}], position: 3299, duration: 935, easing: "easeInOutQuad" },
            { id: "eid167", tween: [ "style", "${_Group}", "-o-transform-origin", [38.31,98.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.51,98.33]}], position: 3299, duration: 935, easing: "easeInOutQuad" },
            { id: "eid58", tween: [ "style", "${_Group}", "-webkit-transform-origin", [52.51,98.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.31,98.04]}], position: 4234, duration: 934, easing: "easeInOutQuad" },
            { id: "eid168", tween: [ "style", "${_Group}", "-moz-transform-origin", [52.51,98.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.31,98.04]}], position: 4234, duration: 934, easing: "easeInOutQuad" },
            { id: "eid169", tween: [ "style", "${_Group}", "-ms-transform-origin", [52.51,98.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.31,98.04]}], position: 4234, duration: 934, easing: "easeInOutQuad" },
            { id: "eid170", tween: [ "style", "${_Group}", "msTransformOrigin", [52.51,98.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.31,98.04]}], position: 4234, duration: 934, easing: "easeInOutQuad" },
            { id: "eid171", tween: [ "style", "${_Group}", "-o-transform-origin", [52.51,98.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.31,98.04]}], position: 4234, duration: 934, easing: "easeInOutQuad" },
            { id: "eid82", tween: [ "style", "${_Group}", "-webkit-transform-origin", [38.31,98.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.51,98.33]}], position: 5168, duration: 935, easing: "easeInOutQuad" },
            { id: "eid172", tween: [ "style", "${_Group}", "-moz-transform-origin", [38.31,98.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.51,98.33]}], position: 5168, duration: 935, easing: "easeInOutQuad" },
            { id: "eid173", tween: [ "style", "${_Group}", "-ms-transform-origin", [38.31,98.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.51,98.33]}], position: 5168, duration: 935, easing: "easeInOutQuad" },
            { id: "eid174", tween: [ "style", "${_Group}", "msTransformOrigin", [38.31,98.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.51,98.33]}], position: 5168, duration: 935, easing: "easeInOutQuad" },
            { id: "eid175", tween: [ "style", "${_Group}", "-o-transform-origin", [38.31,98.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.51,98.33]}], position: 5168, duration: 935, easing: "easeInOutQuad" },
            { id: "eid9", tween: [ "style", "${_wimphead}", "left", '-17px', { fromValue: '0px'}], position: 0, duration: 715 },
            { id: "eid30", tween: [ "style", "${_wimphead}", "left", '23px', { fromValue: '-17px'}], position: 715, duration: 715 },
            { id: "eid45", tween: [ "style", "${_wimphead}", "left", '-17px', { fromValue: '23px'}], position: 1429, duration: 935, easing: "easeInOutQuad" },
            { id: "eid55", tween: [ "style", "${_wimphead}", "left", '23px', { fromValue: '-17px'}], position: 2364, duration: 935, easing: "easeInOutQuad" },
            { id: "eid63", tween: [ "style", "${_wimphead}", "left", '-17px', { fromValue: '23px'}], position: 3299, duration: 935, easing: "easeInOutQuad" },
            { id: "eid64", tween: [ "style", "${_wimphead}", "left", '23px', { fromValue: '-17px'}], position: 4234, duration: 934, easing: "easeInOutQuad" },
            { id: "eid85", tween: [ "style", "${_wimphead}", "left", '-17px', { fromValue: '23px'}], position: 5168, duration: 935, easing: "easeInOutQuad" },
            { id: "eid80", tween: [ "style", "${_wimphead}", "left", '0px', { fromValue: '-17px'}], position: 6103, duration: 715 },
            { id: "eid23", tween: [ "style", "${_Group}", "top", '36px', { fromValue: '36px'}], position: 0, duration: 0 },
            { id: "eid18", tween: [ "style", "${_wimpleftleg}", "left", '214px', { fromValue: '214px'}], position: 0, duration: 0 },
            { id: "eid1", tween: [ "transform", "${_wimprightleg}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid19", tween: [ "style", "${_wimpleftleg}", "top", '308px', { fromValue: '308px'}], position: 0, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-14919722");
