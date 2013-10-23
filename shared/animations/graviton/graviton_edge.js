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
            id:'graviton',
            type:'rect',
            rect:['167','17','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'graviton',
            symbolName:'graviton'
         }
         ]
      },
   states: {
      "Base State": {
         "${_graviton}": [
            ["style", "top", '24px'],
            ["style", "left", '91px'],
            ["transform", "scaleY", '0.61742'],
            ["transform", "scaleX", '0.61742']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '420px'],
            ["style", "height", '305px'],
            ["style", "overflow", 'hidden']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 28413,
         autoPlay: true,
         timeline: [
            { id: "eid72", tween: [ "transform", "${_graviton}", "scaleX", '0.61742', { fromValue: '0.61742'}], position: 7328, duration: 0 },
            { id: "eid80", tween: [ "style", "${_graviton}", "top", '24px', { fromValue: '24px'}], position: 7328, duration: 0 },
            { id: "eid78", tween: [ "style", "${_graviton}", "left", '91px', { fromValue: '91px'}], position: 7328, duration: 0 },
            { id: "eid73", tween: [ "transform", "${_graviton}", "scaleY", '0.61742', { fromValue: '0.61742'}], position: 7328, duration: 0 },
            { id: "eid79", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_graviton}', [] ], ""], position: 7328 },
            { id: "eid81", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_graviton}', [] ], ""], position: 14331 },
            { id: "eid82", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_graviton}', [] ], ""], position: 21332 }         ]
      }
   }
},
"graviton": {
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
      id: 'grabody2',
      type: 'image',
      rect: ['0px','0px','238px','349px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/grabody2.png','0px','0px']
   },
   {
      id: 'grabody3',
      type: 'image',
      rect: ['0px','0px','238px','350px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/grabody3.png','0px','0px']
   },
   {
      id: 'grabody1',
      type: 'image',
      rect: ['4px','4px','230px','342px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/grabody1.png','0px','0px']
   },
   {
      id: 'grairis',
      type: 'image',
      rect: ['115px','167px','18px','21px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/grairis.png','0px','0px']
   },
   {
      id: 'grapupil',
      type: 'image',
      rect: ['124px','172px','7px','8px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/grapupil.png','0px','0px']
   },
   {
      rect: ['83px','127px','59px','26px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(231,87,16,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_grapupil}": [
            ["style", "top", '172px'],
            ["style", "left", '124px']
         ],
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(231,87,16,1.00)'],
            ["style", "height", '26px'],
            ["style", "opacity", '0'],
            ["style", "left", '83px'],
            ["style", "top", '127px']
         ],
         "${symbolSelector}": [
            ["style", "height", '350px'],
            ["style", "width", '238px']
         ],
         "${_grabody2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_grabody1}": [
            ["style", "top", '4px'],
            ["style", "opacity", '1'],
            ["style", "left", '4px']
         ],
         "${_grabody3}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_grairis}": [
            ["style", "top", '167px'],
            ["style", "left", '115px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6771,
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
            { id: "eid14", tween: [ "style", "${_grairis}", "left", '96px', { fromValue: '115px'}], position: 0, duration: 750, easing: "easeOutCubic" },
            { id: "eid20", tween: [ "style", "${_grairis}", "left", '104px', { fromValue: '96px'}], position: 750, duration: 552, easing: "easeOutQuint" },
            { id: "eid24", tween: [ "style", "${_grairis}", "left", '103px', { fromValue: '104px'}], position: 1302, duration: 448, easing: "easeOutQuart" },
            { id: "eid26", tween: [ "style", "${_grairis}", "left", '104px', { fromValue: '103px'}], position: 1750, duration: 433, easing: "easeInBack" },
            { id: "eid60", tween: [ "style", "${_grairis}", "left", '115px', { fromValue: '104px'}], position: 5357, duration: 143 },
            { id: "eid31", tween: [ "style", "${_grabody1}", "opacity", '0', { fromValue: '1'}], position: 2596, duration: 80 },
            { id: "eid52", tween: [ "style", "${_grabody1}", "opacity", '1', { fromValue: '0'}], position: 4174, duration: 76 },
            { id: "eid15", tween: [ "style", "${_grairis}", "top", '176px', { fromValue: '167px'}], position: 0, duration: 750, easing: "easeOutCubic" },
            { id: "eid21", tween: [ "style", "${_grairis}", "top", '159px', { fromValue: '176px'}], position: 750, duration: 552, easing: "easeOutQuint" },
            { id: "eid25", tween: [ "style", "${_grairis}", "top", '185px', { fromValue: '159px'}], position: 1302, duration: 448, easing: "easeOutQuart" },
            { id: "eid27", tween: [ "style", "${_grairis}", "top", '173px', { fromValue: '185px'}], position: 1750, duration: 433, easing: "easeInBack" },
            { id: "eid61", tween: [ "style", "${_grairis}", "top", '167px', { fromValue: '173px'}], position: 5357, duration: 143 },
            { id: "eid16", tween: [ "style", "${_grapupil}", "left", '99px', { fromValue: '124px'}], position: 0, duration: 750, easing: "easeOutCubic" },
            { id: "eid18", tween: [ "style", "${_grapupil}", "left", '110px', { fromValue: '99px'}], position: 750, duration: 552, easing: "easeOutQuint" },
            { id: "eid22", tween: [ "style", "${_grapupil}", "left", '110px', { fromValue: '110px'}], position: 1302, duration: 448, easing: "easeOutQuart" },
            { id: "eid28", tween: [ "style", "${_grapupil}", "left", '110px', { fromValue: '110px'}], position: 1750, duration: 433, easing: "easeInBack" },
            { id: "eid58", tween: [ "style", "${_grapupil}", "left", '124px', { fromValue: '110px'}], position: 5357, duration: 143 },
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
            { id: "eid17", tween: [ "style", "${_grapupil}", "top", '184px', { fromValue: '172px'}], position: 0, duration: 750, easing: "easeOutCubic" },
            { id: "eid19", tween: [ "style", "${_grapupil}", "top", '161px', { fromValue: '184px'}], position: 750, duration: 552, easing: "easeOutQuint" },
            { id: "eid23", tween: [ "style", "${_grapupil}", "top", '194px', { fromValue: '161px'}], position: 1302, duration: 448, easing: "easeOutQuart" },
            { id: "eid29", tween: [ "style", "${_grapupil}", "top", '179px', { fromValue: '194px'}], position: 1750, duration: 433, easing: "easeInBack" },
            { id: "eid59", tween: [ "style", "${_grapupil}", "top", '172px', { fromValue: '179px'}], position: 5357, duration: 143 }         ]
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
