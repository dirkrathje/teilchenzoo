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
            id:'wimp',
            type:'rect',
            rect:['132','36','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'wimp',
            symbolName:'wimp'
         }
         ]
      },
   states: {
      "Base State": {
         "${_wimp}": [
            ["transform", "scaleX", '0.68757'],
            ["style", "left", '66px'],
            ["transform", "scaleY", '0.68757'],
            ["style", "top", '8px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '305px'],
            ["style", "width", '420px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 29207,
         autoPlay: true,
         timeline: [
            { id: "eid182", tween: [ "transform", "${_wimp}", "scaleX", '0.68757', { fromValue: '0.68757'}], position: 0, duration: 0 },
            { id: "eid185", tween: [ "style", "${_wimp}", "top", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
            { id: "eid183", tween: [ "transform", "${_wimp}", "scaleY", '0.68757', { fromValue: '0.68757'}], position: 0, duration: 0 },
            { id: "eid187", tween: [ "style", "${_wimp}", "left", '66px', { fromValue: '66px'}], position: 0, duration: 0 },
            { id: "eid188", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_wimp}', [] ], ""], position: 8250 },
            { id: "eid238", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_wimp}', [] ], ""], position: 15255 },
            { id: "eid239", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_wimp}', [] ], ""], position: 22188 }         ]
      }
   }
},
"wimp": {
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
      rect: ['-11px','-14px','301','294','auto','auto'],
      id: 'Group',
      type: 'group',
      transform: [],
      c: [
      {
         id: 'wimphead',
         type: 'image',
         rect: ['0px','0px','301px','122px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/wimphead.png','0px','0px']
      },
      {
         id: 'wimpbody',
         type: 'image',
         rect: ['57px','99px','168px','195px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/wimpbody.png','0px','0px']
      }]
   },
   {
      id: 'wimpleftleg',
      type: 'image',
      rect: ['71px','258px','37px','78px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wimpleftleg.png','0px','0px']
   },
   {
      id: 'wimprightleg',
      type: 'image',
      rect: ['139px','268px','31px','70px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wimprightleg.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Group}": [
            ["style", "-webkit-transform-origin", [38.31,98.04], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [38.31,98.04],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [38.31,98.04],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [38.31,98.04],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [38.31,98.04],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
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
            ["style", "top", '272px'],
            ["style", "left", '82px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '352px'],
            ["style", "width", '301px']
         ],
         "${_wimprightleg}": [
            ["style", "top", '282px'],
            ["style", "left", '150px'],
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
         duration: 6818,
         autoPlay: true,
         timeline: [
            { id: "eid22", tween: [ "style", "${_Group}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid9", tween: [ "style", "${_wimphead}", "left", '-17px', { fromValue: '0px'}], position: 0, duration: 715 },
            { id: "eid30", tween: [ "style", "${_wimphead}", "left", '23px', { fromValue: '-17px'}], position: 715, duration: 715 },
            { id: "eid45", tween: [ "style", "${_wimphead}", "left", '-17px', { fromValue: '23px'}], position: 1429, duration: 935, easing: "easeInOutQuad" },
            { id: "eid55", tween: [ "style", "${_wimphead}", "left", '23px', { fromValue: '-17px'}], position: 2364, duration: 935, easing: "easeInOutQuad" },
            { id: "eid63", tween: [ "style", "${_wimphead}", "left", '-17px', { fromValue: '23px'}], position: 3299, duration: 935, easing: "easeInOutQuad" },
            { id: "eid64", tween: [ "style", "${_wimphead}", "left", '23px', { fromValue: '-17px'}], position: 4234, duration: 934, easing: "easeInOutQuad" },
            { id: "eid85", tween: [ "style", "${_wimphead}", "left", '-17px', { fromValue: '23px'}], position: 5168, duration: 935, easing: "easeInOutQuad" },
            { id: "eid80", tween: [ "style", "${_wimphead}", "left", '0px', { fromValue: '-17px'}], position: 6103, duration: 715 },
            { id: "eid21", tween: [ "style", "${_wimprightleg}", "top", '282px', { fromValue: '282px'}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "transform", "${_wimpleftleg}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid1", tween: [ "transform", "${_wimprightleg}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid23", tween: [ "style", "${_Group}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid20", tween: [ "style", "${_wimprightleg}", "left", '150px', { fromValue: '150px'}], position: 0, duration: 0 },
            { id: "eid36", tween: [ "style", "${_Group}", "-webkit-transform-origin", [52.51,98.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.31,98.04]}], position: 0, duration: 1429 },
            { id: "eid240", tween: [ "style", "${_Group}", "-moz-transform-origin", [52.51,98.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.31,98.04]}], position: 0, duration: 1429 },
            { id: "eid241", tween: [ "style", "${_Group}", "-ms-transform-origin", [52.51,98.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.31,98.04]}], position: 0, duration: 1429 },
            { id: "eid242", tween: [ "style", "${_Group}", "msTransformOrigin", [52.51,98.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.31,98.04]}], position: 0, duration: 1429 },
            { id: "eid243", tween: [ "style", "${_Group}", "-o-transform-origin", [52.51,98.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.31,98.04]}], position: 0, duration: 1429 },
            { id: "eid42", tween: [ "style", "${_Group}", "-webkit-transform-origin", [38.31,98.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.51,98.33]}], position: 1429, duration: 935, easing: "easeInOutQuad" },
            { id: "eid244", tween: [ "style", "${_Group}", "-moz-transform-origin", [38.31,98.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.51,98.33]}], position: 1429, duration: 935, easing: "easeInOutQuad" },
            { id: "eid245", tween: [ "style", "${_Group}", "-ms-transform-origin", [38.31,98.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.51,98.33]}], position: 1429, duration: 935, easing: "easeInOutQuad" },
            { id: "eid246", tween: [ "style", "${_Group}", "msTransformOrigin", [38.31,98.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.51,98.33]}], position: 1429, duration: 935, easing: "easeInOutQuad" },
            { id: "eid247", tween: [ "style", "${_Group}", "-o-transform-origin", [38.31,98.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.51,98.33]}], position: 1429, duration: 935, easing: "easeInOutQuad" },
            { id: "eid52", tween: [ "style", "${_Group}", "-webkit-transform-origin", [52.51,98.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.31,98.04]}], position: 2364, duration: 935, easing: "easeInOutQuad" },
            { id: "eid248", tween: [ "style", "${_Group}", "-moz-transform-origin", [52.51,98.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.31,98.04]}], position: 2364, duration: 935, easing: "easeInOutQuad" },
            { id: "eid249", tween: [ "style", "${_Group}", "-ms-transform-origin", [52.51,98.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.31,98.04]}], position: 2364, duration: 935, easing: "easeInOutQuad" },
            { id: "eid250", tween: [ "style", "${_Group}", "msTransformOrigin", [52.51,98.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.31,98.04]}], position: 2364, duration: 935, easing: "easeInOutQuad" },
            { id: "eid251", tween: [ "style", "${_Group}", "-o-transform-origin", [52.51,98.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.31,98.04]}], position: 2364, duration: 935, easing: "easeInOutQuad" },
            { id: "eid57", tween: [ "style", "${_Group}", "-webkit-transform-origin", [38.31,98.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.51,98.33]}], position: 3299, duration: 935, easing: "easeInOutQuad" },
            { id: "eid252", tween: [ "style", "${_Group}", "-moz-transform-origin", [38.31,98.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.51,98.33]}], position: 3299, duration: 935, easing: "easeInOutQuad" },
            { id: "eid253", tween: [ "style", "${_Group}", "-ms-transform-origin", [38.31,98.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.51,98.33]}], position: 3299, duration: 935, easing: "easeInOutQuad" },
            { id: "eid254", tween: [ "style", "${_Group}", "msTransformOrigin", [38.31,98.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.51,98.33]}], position: 3299, duration: 935, easing: "easeInOutQuad" },
            { id: "eid255", tween: [ "style", "${_Group}", "-o-transform-origin", [38.31,98.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.51,98.33]}], position: 3299, duration: 935, easing: "easeInOutQuad" },
            { id: "eid58", tween: [ "style", "${_Group}", "-webkit-transform-origin", [52.51,98.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.31,98.04]}], position: 4234, duration: 934, easing: "easeInOutQuad" },
            { id: "eid256", tween: [ "style", "${_Group}", "-moz-transform-origin", [52.51,98.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.31,98.04]}], position: 4234, duration: 934, easing: "easeInOutQuad" },
            { id: "eid257", tween: [ "style", "${_Group}", "-ms-transform-origin", [52.51,98.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.31,98.04]}], position: 4234, duration: 934, easing: "easeInOutQuad" },
            { id: "eid258", tween: [ "style", "${_Group}", "msTransformOrigin", [52.51,98.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.31,98.04]}], position: 4234, duration: 934, easing: "easeInOutQuad" },
            { id: "eid259", tween: [ "style", "${_Group}", "-o-transform-origin", [52.51,98.33], { valueTemplate: '@@0@@% @@1@@%', fromValue: [38.31,98.04]}], position: 4234, duration: 934, easing: "easeInOutQuad" },
            { id: "eid82", tween: [ "style", "${_Group}", "-webkit-transform-origin", [38.31,98.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.51,98.33]}], position: 5168, duration: 935, easing: "easeInOutQuad" },
            { id: "eid260", tween: [ "style", "${_Group}", "-moz-transform-origin", [38.31,98.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.51,98.33]}], position: 5168, duration: 935, easing: "easeInOutQuad" },
            { id: "eid261", tween: [ "style", "${_Group}", "-ms-transform-origin", [38.31,98.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.51,98.33]}], position: 5168, duration: 935, easing: "easeInOutQuad" },
            { id: "eid262", tween: [ "style", "${_Group}", "msTransformOrigin", [38.31,98.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.51,98.33]}], position: 5168, duration: 935, easing: "easeInOutQuad" },
            { id: "eid263", tween: [ "style", "${_Group}", "-o-transform-origin", [38.31,98.04], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.51,98.33]}], position: 5168, duration: 935, easing: "easeInOutQuad" },
            { id: "eid10", tween: [ "style", "${_wimphead}", "top", '5px', { fromValue: '0px'}], position: 0, duration: 715 },
            { id: "eid29", tween: [ "style", "${_wimphead}", "top", '8px', { fromValue: '5px'}], position: 715, duration: 715 },
            { id: "eid44", tween: [ "style", "${_wimphead}", "top", '5px', { fromValue: '8px'}], position: 1429, duration: 935, easing: "easeInOutQuad" },
            { id: "eid54", tween: [ "style", "${_wimphead}", "top", '8px', { fromValue: '5px'}], position: 2364, duration: 935, easing: "easeInOutQuad" },
            { id: "eid61", tween: [ "style", "${_wimphead}", "top", '5px', { fromValue: '8px'}], position: 3299, duration: 935, easing: "easeInOutQuad" },
            { id: "eid62", tween: [ "style", "${_wimphead}", "top", '8px', { fromValue: '5px'}], position: 4234, duration: 934, easing: "easeInOutQuad" },
            { id: "eid84", tween: [ "style", "${_wimphead}", "top", '5px', { fromValue: '8px'}], position: 5168, duration: 935, easing: "easeInOutQuad" },
            { id: "eid79", tween: [ "style", "${_wimphead}", "top", '0px', { fromValue: '5px'}], position: 6103, duration: 715 },
            { id: "eid18", tween: [ "style", "${_wimpleftleg}", "left", '82px', { fromValue: '82px'}], position: 0, duration: 0 },
            { id: "eid6", tween: [ "transform", "${_Group}", "rotateZ", '-14deg', { fromValue: '0deg'}], position: 0, duration: 715 },
            { id: "eid28", tween: [ "transform", "${_Group}", "rotateZ", '4deg', { fromValue: '-14deg'}], position: 715, duration: 715 },
            { id: "eid43", tween: [ "transform", "${_Group}", "rotateZ", '-14deg', { fromValue: '4deg'}], position: 1429, duration: 935, easing: "easeInOutQuad" },
            { id: "eid53", tween: [ "transform", "${_Group}", "rotateZ", '4deg', { fromValue: '-14deg'}], position: 2364, duration: 935, easing: "easeInOutQuad" },
            { id: "eid59", tween: [ "transform", "${_Group}", "rotateZ", '-14deg', { fromValue: '4deg'}], position: 3299, duration: 935, easing: "easeInOutQuad" },
            { id: "eid60", tween: [ "transform", "${_Group}", "rotateZ", '4deg', { fromValue: '-14deg'}], position: 4234, duration: 934, easing: "easeInOutQuad" },
            { id: "eid83", tween: [ "transform", "${_Group}", "rotateZ", '-14deg', { fromValue: '4deg'}], position: 5168, duration: 935, easing: "easeInOutQuad" },
            { id: "eid78", tween: [ "transform", "${_Group}", "rotateZ", '0deg', { fromValue: '-14deg'}], position: 6103, duration: 715 },
            { id: "eid11", tween: [ "transform", "${_wimphead}", "rotateZ", '-13deg', { fromValue: '0deg'}], position: 0, duration: 715 },
            { id: "eid31", tween: [ "transform", "${_wimphead}", "rotateZ", '16deg', { fromValue: '-13deg'}], position: 715, duration: 715 },
            { id: "eid46", tween: [ "transform", "${_wimphead}", "rotateZ", '-13deg', { fromValue: '16deg'}], position: 1429, duration: 935, easing: "easeInOutQuad" },
            { id: "eid56", tween: [ "transform", "${_wimphead}", "rotateZ", '16deg', { fromValue: '-13deg'}], position: 2364, duration: 935, easing: "easeInOutQuad" },
            { id: "eid65", tween: [ "transform", "${_wimphead}", "rotateZ", '-13deg', { fromValue: '16deg'}], position: 3299, duration: 935, easing: "easeInOutQuad" },
            { id: "eid66", tween: [ "transform", "${_wimphead}", "rotateZ", '16deg', { fromValue: '-13deg'}], position: 4234, duration: 934, easing: "easeInOutQuad" },
            { id: "eid86", tween: [ "transform", "${_wimphead}", "rotateZ", '-13deg', { fromValue: '16deg'}], position: 5168, duration: 935, easing: "easeInOutQuad" },
            { id: "eid81", tween: [ "transform", "${_wimphead}", "rotateZ", '0deg', { fromValue: '-13deg'}], position: 6103, duration: 715 },
            { id: "eid19", tween: [ "style", "${_wimpleftleg}", "top", '272px', { fromValue: '272px'}], position: 0, duration: 0 }         ]
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
