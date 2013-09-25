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
            id:'w_minus',
            type:'rect',
            rect:['154','23','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'w_minus',
            symbolName:'w_minus'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '420px'],
            ["style", "height", '305px'],
            ["style", "overflow", 'hidden']
         ],
         "${_w_minus}": [
            ["style", "top", '19px'],
            ["transform", "scaleX", '0.74346'],
            ["transform", "scaleY", '0.74346'],
            ["style", "left", '83px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4400,
         autoPlay: true,
         timeline: [
            { id: "eid147", tween: [ "transform", "${_w_minus}", "scaleX", '0.74346', { fromValue: '0.74346'}], position: 3500, duration: 0, easing: "easeInOutBack" },
            { id: "eid148", tween: [ "transform", "${_w_minus}", "scaleY", '0.74346', { fromValue: '0.74346'}], position: 3500, duration: 0, easing: "easeInOutBack" },
            { id: "eid157", tween: [ "style", "${_w_minus}", "left", '83px', { fromValue: '83px'}], position: 3500, duration: 0, easing: "easeInOutBack" },
            { id: "eid153", tween: [ "style", "${_w_minus}", "top", '19px', { fromValue: '19px'}], position: 3500, duration: 0, easing: "easeInOutBack" },
            { id: "eid158", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_w_minus}', [] ], ""], position: 4400 }         ]
      }
   }
},
"w_minus": {
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
      id: 'Group',
      type: 'group',
      rect: ['0px','0px','255','327','auto','auto'],
      c: [
      {
         rect: ['2px','183px','250px','74px','auto','auto'],
         borderRadius: ['60px 60px','47px 47px','46px 46px','24px 24px'],
         id: 'RoundRect2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         id: 'wminbody',
         type: 'image',
         rect: ['0px','203px','255px','73px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/wminbody.png','0px','0px']
      },
      {
         id: 'wminhead',
         type: 'image',
         rect: ['0px','87px','255px','139px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/wminhead.png','0px','0px']
      },
      {
         id: 'wminleftleg',
         type: 'image',
         rect: ['66px','268px','41px','59px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/wminleftleg.png','0px','0px']
      },
      {
         transform: [],
         id: 'wminsat',
         type: 'image',
         rect: ['107px','0px','58px','90px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/wminsat.png','0px','0px']
      }]
   },
   {
      rect: ['0px','223px','4px','18px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(218,0,27,1.00)']
   },
   {
      rect: ['249px','212px','6px','18px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(218,0,27,1.00)']
   },
   {
      id: 'wminfoot',
      type: 'image',
      rect: ['152px','309px','46px','18px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wminfoot.png','0px','0px']
   },
   {
      id: 'wminleg',
      type: 'image',
      rect: ['152px','268px','46px','43px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wminleg.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_wminfoot}": [
            ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '309px'],
            ["style", "left", '152px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_RoundRect}": [
            ["style", "top", '223px'],
            ["style", "height", '4px'],
            ["color", "background-color", 'rgba(218,0,27,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '4px']
         ],
         "${_RoundRect2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [60,60], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [46,46], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '2px'],
            ["style", "width", '250px'],
            ["style", "top", '183px'],
            ["style", "border-bottom-left-radius", [24,24], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '63px'],
            ["style", "border-top-right-radius", [47,47], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_wminhead}": [
            ["style", "height", '139px'],
            ["style", "top", '87px'],
            ["style", "left", '0px'],
            ["style", "width", '255px']
         ],
         "${_wminleftleg}": [
            ["style", "height", '59px'],
            ["style", "top", '268px'],
            ["style", "left", '66px'],
            ["style", "width", '41px']
         ],
         "${_RoundRectCopy}": [
            ["color", "background-color", 'rgba(218,0,27,1)'],
            ["style", "height", '4px'],
            ["style", "top", '212px'],
            ["style", "left", '249px'],
            ["style", "width", '6px']
         ],
         "${_wminleg}": [
            ["style", "left", '152px'],
            ["style", "top", '268px']
         ],
         "${_wminbody}": [
            ["style", "height", '73px'],
            ["style", "top", '203px'],
            ["style", "left", '0px'],
            ["style", "width", '255px']
         ],
         "${symbolSelector}": [
            ["style", "height", '327px'],
            ["style", "width", '255px']
         ],
         "${_wminsat}": [
            ["style", "height", '90px'],
            ["style", "top", '0px'],
            ["style", "left", '107px'],
            ["style", "width", '58px']
         ],
         "${_Group}": [
            ["style", "height", '327px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '255px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: true,
         timeline: [
            { id: "eid43", tween: [ "style", "${_RoundRect2}", "height", '74px', { fromValue: '63px'}], position: 2600, duration: 729, easing: "easeInOutBack" },
            { id: "eid54", tween: [ "style", "${_RoundRect2}", "height", '63px', { fromValue: '74px'}], position: 3329, duration: 671, easing: "easeInOutBack" },
            { id: "eid75", tween: [ "style", "${_wminsat}", "top", '-9px', { fromValue: '0px'}], position: 2600, duration: 729, easing: "easeInOutBack" },
            { id: "eid80", tween: [ "style", "${_wminsat}", "top", '0px', { fromValue: '-9px'}], position: 3329, duration: 671, easing: "easeInOutBack" },
            { id: "eid79", tween: [ "style", "${_RoundRect}", "top", '214px', { fromValue: '223px'}], position: 2600, duration: 729, easing: "easeInOutBack" },
            { id: "eid84", tween: [ "style", "${_RoundRect}", "top", '223px', { fromValue: '214px'}], position: 3329, duration: 671, easing: "easeInOutBack" },
            { id: "eid37", tween: [ "style", "${_RoundRectCopy}", "height", '18px', { fromValue: '4px'}], position: 2600, duration: 729, easing: "easeInOutBack" },
            { id: "eid51", tween: [ "style", "${_RoundRectCopy}", "height", '4px', { fromValue: '18px'}], position: 3329, duration: 671, easing: "easeInOutBack" },
            { id: "eid134", tween: [ "style", "${_wminfoot}", "-webkit-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 398, duration: 0 },
            { id: "eid167", tween: [ "style", "${_wminfoot}", "-moz-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 398, duration: 0 },
            { id: "eid168", tween: [ "style", "${_wminfoot}", "-ms-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 398, duration: 0 },
            { id: "eid169", tween: [ "style", "${_wminfoot}", "msTransformOrigin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 398, duration: 0 },
            { id: "eid170", tween: [ "style", "${_wminfoot}", "-o-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 398, duration: 0 },
            { id: "eid76", tween: [ "style", "${_RoundRect2}", "top", '174px', { fromValue: '183px'}], position: 2600, duration: 729, easing: "easeInOutBack" },
            { id: "eid81", tween: [ "style", "${_RoundRect2}", "top", '183px', { fromValue: '174px'}], position: 3329, duration: 671, easing: "easeInOutBack" },
            { id: "eid27", tween: [ "style", "${_wminbody}", "top", '207px', { fromValue: '203px'}], position: 2600, duration: 729, easing: "easeInOutBack" },
            { id: "eid53", tween: [ "style", "${_wminbody}", "top", '203px', { fromValue: '207px'}], position: 3329, duration: 671, easing: "easeInOutBack" },
            { id: "eid77", tween: [ "style", "${_wminhead}", "top", '78px', { fromValue: '87px'}], position: 2600, duration: 729, easing: "easeInOutBack" },
            { id: "eid82", tween: [ "style", "${_wminhead}", "top", '87px', { fromValue: '78px'}], position: 3329, duration: 671, easing: "easeInOutBack" },
            { id: "eid132", tween: [ "transform", "${_wminfoot}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid135", tween: [ "transform", "${_wminfoot}", "rotateZ", '-26deg', { fromValue: '0deg'}], position: 250, duration: 148 },
            { id: "eid136", tween: [ "transform", "${_wminfoot}", "rotateZ", '0deg', { fromValue: '-26deg'}], position: 398, duration: 153 },
            { id: "eid137", tween: [ "transform", "${_wminfoot}", "rotateZ", '-26deg', { fromValue: '0deg'}], position: 551, duration: 148 },
            { id: "eid138", tween: [ "transform", "${_wminfoot}", "rotateZ", '0deg', { fromValue: '-26deg'}], position: 699, duration: 153 },
            { id: "eid139", tween: [ "transform", "${_wminfoot}", "rotateZ", '-26deg', { fromValue: '0deg'}], position: 852, duration: 148 },
            { id: "eid140", tween: [ "transform", "${_wminfoot}", "rotateZ", '0deg', { fromValue: '-26deg'}], position: 1000, duration: 153 },
            { id: "eid78", tween: [ "style", "${_RoundRectCopy}", "top", '203px', { fromValue: '212px'}], position: 2600, duration: 729, easing: "easeInOutBack" },
            { id: "eid83", tween: [ "style", "${_RoundRectCopy}", "top", '212px', { fromValue: '203px'}], position: 3329, duration: 671, easing: "easeInOutBack" },
            { id: "eid36", tween: [ "style", "${_RoundRect}", "height", '18px', { fromValue: '4px'}], position: 2600, duration: 729, easing: "easeInOutBack" },
            { id: "eid52", tween: [ "style", "${_RoundRect}", "height", '4px', { fromValue: '18px'}], position: 3329, duration: 671, easing: "easeInOutBack" }         ]
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
})(jQuery, AdobeEdge, "EDGE-18741332");
