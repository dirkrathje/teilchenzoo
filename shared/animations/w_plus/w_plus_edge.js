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
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'w_plus',
            type:'rect',
            rect:['129px','15px','auto','auto','auto','auto'],
            transform:[[],[],[],['0.75334','0.75334']]
         }],
         symbolInstances: [
         {
            id:'w_plus',
            symbolName:'w_plus'
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
         "${_w_plus}": [
            ["transform", "scaleX", '0.75334'],
            ["style", "top", '15px'],
            ["style", "left", '129px'],
            ["transform", "scaleY", '0.75334']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 39750,
         autoPlay: true,
         timeline: [
            { id: "eid778", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_w_plus}', [] ], ""], position: 12750 },
            { id: "eid779", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_w_plus}', [] ], ""], position: 26500 }         ]
      }
   }
},
"w_plus": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Group',
      type: 'group',
      rect: ['0px','0px','262','331','auto','auto'],
      c: [
      {
         id: 'wplusbody',
         type: 'image',
         rect: ['0px','155px','262px','123px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/wplusbody.png','0px','0px']
      },
      {
         id: 'wplushead',
         type: 'image',
         rect: ['47px','0px','199px','174px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/wplushead.png','0px','0px']
      },
      {
         id: 'wplusleftleg',
         type: 'image',
         rect: ['60px','268px','44px','58px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/wplusleftleg.png','0px','0px']
      },
      {
         id: 'wplusrightleg',
         type: 'image',
         rect: ['154px','268px','45px','63px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/wplusrightleg.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Group}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_wplushead}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '47px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_wplusrightleg}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '268px'],
            ["style", "left", '154px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_wplusleftleg}": [
            ["style", "-webkit-transform-origin", [82.01,-0.15], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [82.01,-0.15],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [82.01,-0.15],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [82.01,-0.15],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [82.01,-0.15],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '268px'],
            ["style", "left", '60px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_wplusbody}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '155px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '331px'],
            ["style", "width", '262px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 12294,
         autoPlay: true,
         timeline: [
            { id: "eid20", tween: [ "style", "${_wplusbody}", "top", '155px', { fromValue: '155px'}], position: 0, duration: 0 },
            { id: "eid140", tween: [ "style", "${_wplusbody}", "top", '155px', { fromValue: '155px'}], position: 5441, duration: 0, easing: "easeOutQuart" },
            { id: "eid443", tween: [ "style", "${_wplusbody}", "top", '158px', { fromValue: '155px'}], position: 10076, duration: 277, easing: "swing" },
            { id: "eid463", tween: [ "style", "${_wplusbody}", "top", '155px', { fromValue: '158px'}], position: 10353, duration: 277, easing: "swing" },
            { id: "eid473", tween: [ "style", "${_wplusbody}", "top", '158px', { fromValue: '155px'}], position: 10630, duration: 277, easing: "swing" },
            { id: "eid474", tween: [ "style", "${_wplusbody}", "top", '155px', { fromValue: '158px'}], position: 10907, duration: 277, easing: "swing" },
            { id: "eid487", tween: [ "style", "${_wplusbody}", "top", '158px', { fromValue: '155px'}], position: 11185, duration: 277, easing: "swing" },
            { id: "eid488", tween: [ "style", "${_wplusbody}", "top", '155px', { fromValue: '158px'}], position: 11462, duration: 277, easing: "swing" },
            { id: "eid501", tween: [ "style", "${_wplusbody}", "top", '158px', { fromValue: '155px'}], position: 11740, duration: 277, easing: "swing" },
            { id: "eid502", tween: [ "style", "${_wplusbody}", "top", '155px', { fromValue: '158px'}], position: 12017, duration: 277, easing: "swing" },
            { id: "eid10", tween: [ "style", "${_wplusbody}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid861", tween: [ "style", "${_wplusbody}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid862", tween: [ "style", "${_wplusbody}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid863", tween: [ "style", "${_wplusbody}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid864", tween: [ "style", "${_wplusbody}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
            { id: "eid145", tween: [ "style", "${_wplusbody}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 5441, duration: 0, easing: "easeOutQuart" },
            { id: "eid871", tween: [ "style", "${_wplusbody}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 5441, duration: 0, easing: "easeOutQuart" },
            { id: "eid872", tween: [ "style", "${_wplusbody}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 5441, duration: 0, easing: "easeOutQuart" },
            { id: "eid873", tween: [ "style", "${_wplusbody}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 5441, duration: 0, easing: "easeOutQuart" },
            { id: "eid874", tween: [ "style", "${_wplusbody}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 5441, duration: 0, easing: "easeOutQuart" },
            { id: "eid439", tween: [ "style", "${_wplusbody}", "-webkit-transform-origin", [72.8,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 10076, duration: 277, easing: "swing" },
            { id: "eid875", tween: [ "style", "${_wplusbody}", "-moz-transform-origin", [72.8,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 10076, duration: 277, easing: "swing" },
            { id: "eid876", tween: [ "style", "${_wplusbody}", "-ms-transform-origin", [72.8,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 10076, duration: 277, easing: "swing" },
            { id: "eid877", tween: [ "style", "${_wplusbody}", "msTransformOrigin", [72.8,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 10076, duration: 277, easing: "swing" },
            { id: "eid878", tween: [ "style", "${_wplusbody}", "-o-transform-origin", [72.8,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 10076, duration: 277, easing: "swing" },
            { id: "eid464", tween: [ "style", "${_wplusbody}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [72.8,18]}], position: 10353, duration: 277, easing: "swing" },
            { id: "eid879", tween: [ "style", "${_wplusbody}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [72.8,18]}], position: 10353, duration: 277, easing: "swing" },
            { id: "eid880", tween: [ "style", "${_wplusbody}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [72.8,18]}], position: 10353, duration: 277, easing: "swing" },
            { id: "eid881", tween: [ "style", "${_wplusbody}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [72.8,18]}], position: 10353, duration: 277, easing: "swing" },
            { id: "eid882", tween: [ "style", "${_wplusbody}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [72.8,18]}], position: 10353, duration: 277, easing: "swing" },
            { id: "eid475", tween: [ "style", "${_wplusbody}", "-webkit-transform-origin", [72.8,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 10630, duration: 277, easing: "swing" },
            { id: "eid883", tween: [ "style", "${_wplusbody}", "-moz-transform-origin", [72.8,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 10630, duration: 277, easing: "swing" },
            { id: "eid884", tween: [ "style", "${_wplusbody}", "-ms-transform-origin", [72.8,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 10630, duration: 277, easing: "swing" },
            { id: "eid885", tween: [ "style", "${_wplusbody}", "msTransformOrigin", [72.8,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 10630, duration: 277, easing: "swing" },
            { id: "eid886", tween: [ "style", "${_wplusbody}", "-o-transform-origin", [72.8,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 10630, duration: 277, easing: "swing" },
            { id: "eid476", tween: [ "style", "${_wplusbody}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [72.8,18]}], position: 10907, duration: 277, easing: "swing" },
            { id: "eid887", tween: [ "style", "${_wplusbody}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [72.8,18]}], position: 10907, duration: 277, easing: "swing" },
            { id: "eid888", tween: [ "style", "${_wplusbody}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [72.8,18]}], position: 10907, duration: 277, easing: "swing" },
            { id: "eid889", tween: [ "style", "${_wplusbody}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [72.8,18]}], position: 10907, duration: 277, easing: "swing" },
            { id: "eid890", tween: [ "style", "${_wplusbody}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [72.8,18]}], position: 10907, duration: 277, easing: "swing" },
            { id: "eid489", tween: [ "style", "${_wplusbody}", "-webkit-transform-origin", [72.8,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 11185, duration: 277, easing: "swing" },
            { id: "eid891", tween: [ "style", "${_wplusbody}", "-moz-transform-origin", [72.8,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 11185, duration: 277, easing: "swing" },
            { id: "eid892", tween: [ "style", "${_wplusbody}", "-ms-transform-origin", [72.8,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 11185, duration: 277, easing: "swing" },
            { id: "eid893", tween: [ "style", "${_wplusbody}", "msTransformOrigin", [72.8,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 11185, duration: 277, easing: "swing" },
            { id: "eid894", tween: [ "style", "${_wplusbody}", "-o-transform-origin", [72.8,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 11185, duration: 277, easing: "swing" },
            { id: "eid490", tween: [ "style", "${_wplusbody}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [72.8,18]}], position: 11462, duration: 277, easing: "swing" },
            { id: "eid895", tween: [ "style", "${_wplusbody}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [72.8,18]}], position: 11462, duration: 277, easing: "swing" },
            { id: "eid896", tween: [ "style", "${_wplusbody}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [72.8,18]}], position: 11462, duration: 277, easing: "swing" },
            { id: "eid897", tween: [ "style", "${_wplusbody}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [72.8,18]}], position: 11462, duration: 277, easing: "swing" },
            { id: "eid898", tween: [ "style", "${_wplusbody}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [72.8,18]}], position: 11462, duration: 277, easing: "swing" },
            { id: "eid503", tween: [ "style", "${_wplusbody}", "-webkit-transform-origin", [72.8,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 11740, duration: 277, easing: "swing" },
            { id: "eid899", tween: [ "style", "${_wplusbody}", "-moz-transform-origin", [72.8,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 11740, duration: 277, easing: "swing" },
            { id: "eid900", tween: [ "style", "${_wplusbody}", "-ms-transform-origin", [72.8,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 11740, duration: 277, easing: "swing" },
            { id: "eid901", tween: [ "style", "${_wplusbody}", "msTransformOrigin", [72.8,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 11740, duration: 277, easing: "swing" },
            { id: "eid902", tween: [ "style", "${_wplusbody}", "-o-transform-origin", [72.8,18], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 11740, duration: 277, easing: "swing" },
            { id: "eid504", tween: [ "style", "${_wplusbody}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [72.8,18]}], position: 12017, duration: 277, easing: "swing" },
            { id: "eid903", tween: [ "style", "${_wplusbody}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [72.8,18]}], position: 12017, duration: 277, easing: "swing" },
            { id: "eid904", tween: [ "style", "${_wplusbody}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [72.8,18]}], position: 12017, duration: 277, easing: "swing" },
            { id: "eid905", tween: [ "style", "${_wplusbody}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [72.8,18]}], position: 12017, duration: 277, easing: "swing" },
            { id: "eid906", tween: [ "style", "${_wplusbody}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [72.8,18]}], position: 12017, duration: 277, easing: "swing" },
            { id: "eid31", tween: [ "transform", "${_wplusrightleg}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 122, duration: 243 },
            { id: "eid38", tween: [ "transform", "${_wplusrightleg}", "rotateZ", '-4deg', { fromValue: '-15deg'}], position: 365, duration: 268 },
            { id: "eid60", tween: [ "transform", "${_wplusrightleg}", "rotateZ", '-54deg', { fromValue: '-4deg'}], position: 633, duration: 992 },
            { id: "eid64", tween: [ "transform", "${_wplusrightleg}", "rotateZ", '0deg', { fromValue: '-54deg'}], position: 1626, duration: 311 },
            { id: "eid165", tween: [ "transform", "${_wplusrightleg}", "rotateZ", '-12deg', { fromValue: '0deg'}], position: 5441, duration: 469 },
            { id: "eid174", tween: [ "transform", "${_wplusrightleg}", "rotateZ", '-45deg', { fromValue: '-12deg'}], position: 6187, duration: 281 },
            { id: "eid183", tween: [ "transform", "${_wplusrightleg}", "rotateZ", '-12deg', { fromValue: '-45deg'}], position: 6739, duration: 281 },
            { id: "eid66", tween: [ "transform", "${_wplushead}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 832, duration: 839, easing: "easeOutQuart" },
            { id: "eid74", tween: [ "transform", "${_wplushead}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 1671, duration: 887, easing: "easeOutBounce" },
            { id: "eid149", tween: [ "transform", "${_wplushead}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 5441, duration: 0, easing: "easeOutQuart" },
            { id: "eid415", tween: [ "transform", "${_wplushead}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 10076, duration: 277, easing: "swing" },
            { id: "eid462", tween: [ "transform", "${_wplushead}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 10353, duration: 277, easing: "swing" },
            { id: "eid471", tween: [ "transform", "${_wplushead}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 10630, duration: 277, easing: "swing" },
            { id: "eid472", tween: [ "transform", "${_wplushead}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 10907, duration: 277, easing: "swing" },
            { id: "eid485", tween: [ "transform", "${_wplushead}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 11185, duration: 277, easing: "swing" },
            { id: "eid486", tween: [ "transform", "${_wplushead}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 11462, duration: 277, easing: "swing" },
            { id: "eid499", tween: [ "transform", "${_wplushead}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 11740, duration: 277, easing: "swing" },
            { id: "eid500", tween: [ "transform", "${_wplushead}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 12017, duration: 277, easing: "swing" },
            { id: "eid9", tween: [ "style", "${_wplushead}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1339, duration: 0 },
            { id: "eid907", tween: [ "style", "${_wplushead}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1339, duration: 0 },
            { id: "eid908", tween: [ "style", "${_wplushead}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1339, duration: 0 },
            { id: "eid909", tween: [ "style", "${_wplushead}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1339, duration: 0 },
            { id: "eid910", tween: [ "style", "${_wplushead}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1339, duration: 0 },
            { id: "eid144", tween: [ "style", "${_wplushead}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 5441, duration: 0, easing: "easeOutQuart" },
            { id: "eid911", tween: [ "style", "${_wplushead}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 5441, duration: 0, easing: "easeOutQuart" },
            { id: "eid912", tween: [ "style", "${_wplushead}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 5441, duration: 0, easing: "easeOutQuart" },
            { id: "eid913", tween: [ "style", "${_wplushead}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 5441, duration: 0, easing: "easeOutQuart" },
            { id: "eid914", tween: [ "style", "${_wplushead}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 5441, duration: 0, easing: "easeOutQuart" },
            { id: "eid15", tween: [ "style", "${_wplusbody}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid139", tween: [ "style", "${_wplusbody}", "left", '0px', { fromValue: '0px'}], position: 5441, duration: 0, easing: "easeOutQuart" },
            { id: "eid436", tween: [ "style", "${_wplusbody}", "left", '-9px', { fromValue: '0px'}], position: 10076, duration: 277, easing: "swing" },
            { id: "eid465", tween: [ "style", "${_wplusbody}", "left", '0px', { fromValue: '-9px'}], position: 10353, duration: 277, easing: "swing" },
            { id: "eid477", tween: [ "style", "${_wplusbody}", "left", '-9px', { fromValue: '0px'}], position: 10630, duration: 277, easing: "swing" },
            { id: "eid478", tween: [ "style", "${_wplusbody}", "left", '0px', { fromValue: '-9px'}], position: 10907, duration: 277, easing: "swing" },
            { id: "eid491", tween: [ "style", "${_wplusbody}", "left", '-9px', { fromValue: '0px'}], position: 11185, duration: 277, easing: "swing" },
            { id: "eid492", tween: [ "style", "${_wplusbody}", "left", '0px', { fromValue: '-9px'}], position: 11462, duration: 277, easing: "swing" },
            { id: "eid505", tween: [ "style", "${_wplusbody}", "left", '-9px', { fromValue: '0px'}], position: 11740, duration: 277, easing: "swing" },
            { id: "eid506", tween: [ "style", "${_wplusbody}", "left", '0px', { fromValue: '-9px'}], position: 12017, duration: 277, easing: "swing" },
            { id: "eid67", tween: [ "style", "${_wplushead}", "left", '23px', { fromValue: '47px'}], position: 832, duration: 839, easing: "easeOutQuart" },
            { id: "eid73", tween: [ "style", "${_wplushead}", "left", '47px', { fromValue: '23px'}], position: 1671, duration: 887, easing: "easeOutBounce" },
            { id: "eid137", tween: [ "style", "${_wplushead}", "left", '47px', { fromValue: '47px'}], position: 5441, duration: 0, easing: "easeOutQuart" },
            { id: "eid413", tween: [ "style", "${_wplushead}", "left", '25px', { fromValue: '47px'}], position: 10076, duration: 277, easing: "swing" },
            { id: "eid461", tween: [ "style", "${_wplushead}", "left", '47px', { fromValue: '25px'}], position: 10353, duration: 277, easing: "swing" },
            { id: "eid469", tween: [ "style", "${_wplushead}", "left", '25px', { fromValue: '47px'}], position: 10630, duration: 277, easing: "swing" },
            { id: "eid470", tween: [ "style", "${_wplushead}", "left", '47px', { fromValue: '25px'}], position: 10907, duration: 277, easing: "swing" },
            { id: "eid483", tween: [ "style", "${_wplushead}", "left", '25px', { fromValue: '47px'}], position: 11185, duration: 277, easing: "swing" },
            { id: "eid484", tween: [ "style", "${_wplushead}", "left", '47px', { fromValue: '25px'}], position: 11462, duration: 277, easing: "swing" },
            { id: "eid497", tween: [ "style", "${_wplushead}", "left", '25px', { fromValue: '47px'}], position: 11740, duration: 277, easing: "swing" },
            { id: "eid498", tween: [ "style", "${_wplushead}", "left", '47px', { fromValue: '25px'}], position: 12017, duration: 277, easing: "swing" },
            { id: "eid24", tween: [ "style", "${_Group}", "-webkit-transform-origin", [98.55,56.9], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 250 },
            { id: "eid915", tween: [ "style", "${_Group}", "-moz-transform-origin", [98.55,56.9], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 250 },
            { id: "eid916", tween: [ "style", "${_Group}", "-ms-transform-origin", [98.55,56.9], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 250 },
            { id: "eid917", tween: [ "style", "${_Group}", "msTransformOrigin", [98.55,56.9], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 250 },
            { id: "eid918", tween: [ "style", "${_Group}", "-o-transform-origin", [98.55,56.9], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 250 },
            { id: "eid49", tween: [ "style", "${_Group}", "-webkit-transform-origin", [37.29,102.8], { valueTemplate: '@@0@@% @@1@@%', fromValue: [98.55,56.9]}], position: 250, duration: 1375, easing: "easeOutQuart" },
            { id: "eid919", tween: [ "style", "${_Group}", "-moz-transform-origin", [37.29,102.8], { valueTemplate: '@@0@@% @@1@@%', fromValue: [98.55,56.9]}], position: 250, duration: 1375, easing: "easeOutQuart" },
            { id: "eid920", tween: [ "style", "${_Group}", "-ms-transform-origin", [37.29,102.8], { valueTemplate: '@@0@@% @@1@@%', fromValue: [98.55,56.9]}], position: 250, duration: 1375, easing: "easeOutQuart" },
            { id: "eid921", tween: [ "style", "${_Group}", "msTransformOrigin", [37.29,102.8], { valueTemplate: '@@0@@% @@1@@%', fromValue: [98.55,56.9]}], position: 250, duration: 1375, easing: "easeOutQuart" },
            { id: "eid922", tween: [ "style", "${_Group}", "-o-transform-origin", [37.29,102.8], { valueTemplate: '@@0@@% @@1@@%', fromValue: [98.55,56.9]}], position: 250, duration: 1375, easing: "easeOutQuart" },
            { id: "eid53", tween: [ "style", "${_Group}", "-webkit-transform-origin", [51.63,58.57], { valueTemplate: '@@0@@% @@1@@%', fromValue: [37.32,102.78]}], position: 1625, duration: 312 },
            { id: "eid923", tween: [ "style", "${_Group}", "-moz-transform-origin", [51.63,58.57], { valueTemplate: '@@0@@% @@1@@%', fromValue: [37.32,102.78]}], position: 1625, duration: 312 },
            { id: "eid924", tween: [ "style", "${_Group}", "-ms-transform-origin", [51.63,58.57], { valueTemplate: '@@0@@% @@1@@%', fromValue: [37.32,102.78]}], position: 1625, duration: 312 },
            { id: "eid925", tween: [ "style", "${_Group}", "msTransformOrigin", [51.63,58.57], { valueTemplate: '@@0@@% @@1@@%', fromValue: [37.32,102.78]}], position: 1625, duration: 312 },
            { id: "eid926", tween: [ "style", "${_Group}", "-o-transform-origin", [51.63,58.57], { valueTemplate: '@@0@@% @@1@@%', fromValue: [37.32,102.78]}], position: 1625, duration: 312 },
            { id: "eid156", tween: [ "style", "${_Group}", "-webkit-transform-origin", [24.81,97.29], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51.63,58.57]}], position: 5441, duration: 469 },
            { id: "eid927", tween: [ "style", "${_Group}", "-moz-transform-origin", [24.81,97.29], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51.63,58.57]}], position: 5441, duration: 469 },
            { id: "eid928", tween: [ "style", "${_Group}", "-ms-transform-origin", [24.81,97.29], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51.63,58.57]}], position: 5441, duration: 469 },
            { id: "eid929", tween: [ "style", "${_Group}", "msTransformOrigin", [24.81,97.29], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51.63,58.57]}], position: 5441, duration: 469 },
            { id: "eid930", tween: [ "style", "${_Group}", "-o-transform-origin", [24.81,97.29], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51.63,58.57]}], position: 5441, duration: 469 },
            { id: "eid170", tween: [ "style", "${_Group}", "-webkit-transform-origin", [79.6,96.29], { valueTemplate: '@@0@@% @@1@@%', fromValue: [24.81,97.29]}], position: 6187, duration: 281 },
            { id: "eid931", tween: [ "style", "${_Group}", "-moz-transform-origin", [79.6,96.29], { valueTemplate: '@@0@@% @@1@@%', fromValue: [24.81,97.29]}], position: 6187, duration: 281 },
            { id: "eid932", tween: [ "style", "${_Group}", "-ms-transform-origin", [79.6,96.29], { valueTemplate: '@@0@@% @@1@@%', fromValue: [24.81,97.29]}], position: 6187, duration: 281 },
            { id: "eid933", tween: [ "style", "${_Group}", "msTransformOrigin", [79.6,96.29], { valueTemplate: '@@0@@% @@1@@%', fromValue: [24.81,97.29]}], position: 6187, duration: 281 },
            { id: "eid934", tween: [ "style", "${_Group}", "-o-transform-origin", [79.6,96.29], { valueTemplate: '@@0@@% @@1@@%', fromValue: [24.81,97.29]}], position: 6187, duration: 281 },
            { id: "eid180", tween: [ "style", "${_Group}", "-webkit-transform-origin", [24.81,97.29], { valueTemplate: '@@0@@% @@1@@%', fromValue: [79.6,96.29]}], position: 6739, duration: 281 },
            { id: "eid935", tween: [ "style", "${_Group}", "-moz-transform-origin", [24.81,97.29], { valueTemplate: '@@0@@% @@1@@%', fromValue: [79.6,96.29]}], position: 6739, duration: 281 },
            { id: "eid936", tween: [ "style", "${_Group}", "-ms-transform-origin", [24.81,97.29], { valueTemplate: '@@0@@% @@1@@%', fromValue: [79.6,96.29]}], position: 6739, duration: 281 },
            { id: "eid937", tween: [ "style", "${_Group}", "msTransformOrigin", [24.81,97.29], { valueTemplate: '@@0@@% @@1@@%', fromValue: [79.6,96.29]}], position: 6739, duration: 281 },
            { id: "eid938", tween: [ "style", "${_Group}", "-o-transform-origin", [24.81,97.29], { valueTemplate: '@@0@@% @@1@@%', fromValue: [79.6,96.29]}], position: 6739, duration: 281 },
            { id: "eid21", tween: [ "style", "${_wplusleftleg}", "-webkit-transform-origin", [82.01,-0.15], { valueTemplate: '@@0@@% @@1@@%', fromValue: [82.01,-0.15]}], position: 0, duration: 0 },
            { id: "eid939", tween: [ "style", "${_wplusleftleg}", "-moz-transform-origin", [82.01,-0.15], { valueTemplate: '@@0@@% @@1@@%', fromValue: [82.01,-0.15]}], position: 0, duration: 0 },
            { id: "eid940", tween: [ "style", "${_wplusleftleg}", "-ms-transform-origin", [82.01,-0.15], { valueTemplate: '@@0@@% @@1@@%', fromValue: [82.01,-0.15]}], position: 0, duration: 0 },
            { id: "eid941", tween: [ "style", "${_wplusleftleg}", "msTransformOrigin", [82.01,-0.15], { valueTemplate: '@@0@@% @@1@@%', fromValue: [82.01,-0.15]}], position: 0, duration: 0 },
            { id: "eid942", tween: [ "style", "${_wplusleftleg}", "-o-transform-origin", [82.01,-0.15], { valueTemplate: '@@0@@% @@1@@%', fromValue: [82.01,-0.15]}], position: 0, duration: 0 },
            { id: "eid143", tween: [ "style", "${_wplusleftleg}", "-webkit-transform-origin", [82.01,-0.15], { valueTemplate: '@@0@@% @@1@@%', fromValue: [82.01,-0.15]}], position: 5441, duration: 0, easing: "easeOutQuart" },
            { id: "eid943", tween: [ "style", "${_wplusleftleg}", "-moz-transform-origin", [82.01,-0.15], { valueTemplate: '@@0@@% @@1@@%', fromValue: [82.01,-0.15]}], position: 5441, duration: 0, easing: "easeOutQuart" },
            { id: "eid944", tween: [ "style", "${_wplusleftleg}", "-ms-transform-origin", [82.01,-0.15], { valueTemplate: '@@0@@% @@1@@%', fromValue: [82.01,-0.15]}], position: 5441, duration: 0, easing: "easeOutQuart" },
            { id: "eid945", tween: [ "style", "${_wplusleftleg}", "msTransformOrigin", [82.01,-0.15], { valueTemplate: '@@0@@% @@1@@%', fromValue: [82.01,-0.15]}], position: 5441, duration: 0, easing: "easeOutQuart" },
            { id: "eid946", tween: [ "style", "${_wplusleftleg}", "-o-transform-origin", [82.01,-0.15], { valueTemplate: '@@0@@% @@1@@%', fromValue: [82.01,-0.15]}], position: 5441, duration: 0, easing: "easeOutQuart" },
            { id: "eid68", tween: [ "style", "${_wplushead}", "top", '2px', { fromValue: '0px'}], position: 832, duration: 839, easing: "easeOutQuart" },
            { id: "eid72", tween: [ "style", "${_wplushead}", "top", '0px', { fromValue: '2px'}], position: 1671, duration: 887, easing: "easeOutBounce" },
            { id: "eid138", tween: [ "style", "${_wplushead}", "top", '0px', { fromValue: '0px'}], position: 5441, duration: 0, easing: "easeOutQuart" },
            { id: "eid411", tween: [ "style", "${_wplushead}", "top", '2px', { fromValue: '0px'}], position: 10076, duration: 277, easing: "swing" },
            { id: "eid460", tween: [ "style", "${_wplushead}", "top", '0px', { fromValue: '2px'}], position: 10353, duration: 277, easing: "swing" },
            { id: "eid467", tween: [ "style", "${_wplushead}", "top", '2px', { fromValue: '0px'}], position: 10630, duration: 277, easing: "swing" },
            { id: "eid468", tween: [ "style", "${_wplushead}", "top", '0px', { fromValue: '2px'}], position: 10907, duration: 277, easing: "swing" },
            { id: "eid481", tween: [ "style", "${_wplushead}", "top", '2px', { fromValue: '0px'}], position: 11185, duration: 277, easing: "swing" },
            { id: "eid482", tween: [ "style", "${_wplushead}", "top", '0px', { fromValue: '2px'}], position: 11462, duration: 277, easing: "swing" },
            { id: "eid495", tween: [ "style", "${_wplushead}", "top", '2px', { fromValue: '0px'}], position: 11740, duration: 277, easing: "swing" },
            { id: "eid496", tween: [ "style", "${_wplushead}", "top", '0px', { fromValue: '2px'}], position: 12017, duration: 277, easing: "swing" },
            { id: "eid18", tween: [ "style", "${_wplusleftleg}", "top", '268px', { fromValue: '268px'}], position: 0, duration: 0 },
            { id: "eid136", tween: [ "style", "${_wplusleftleg}", "top", '268px', { fromValue: '268px'}], position: 5441, duration: 0, easing: "easeOutQuart" },
            { id: "eid40", tween: [ "style", "${_wplusrightleg}", "left", '147px', { fromValue: '154px'}], position: 0, duration: 633 },
            { id: "eid58", tween: [ "style", "${_wplusrightleg}", "left", '154px', { fromValue: '147px'}], position: 633, duration: 1304 },
            { id: "eid133", tween: [ "style", "${_wplusrightleg}", "left", '154px', { fromValue: '154px'}], position: 5441, duration: 0, easing: "easeOutQuart" },
            { id: "eid32", tween: [ "style", "${_Group}", "left", '-22px', { fromValue: '0px'}], position: 0, duration: 365 },
            { id: "eid42", tween: [ "style", "${_Group}", "left", '-44px', { fromValue: '-22px'}], position: 365, duration: 268 },
            { id: "eid50", tween: [ "style", "${_Group}", "left", '-54px', { fromValue: '-44px'}], position: 633, duration: 660 },
            { id: "eid685", tween: [ "style", "${_Group}", "left", '-52px', { fromValue: '-54px'}], position: 1293, duration: 332, easing: "easeOutQuart" },
            { id: "eid56", tween: [ "style", "${_Group}", "left", '-76px', { fromValue: '-52px'}], position: 1625, duration: 312 },
            { id: "eid157", tween: [ "style", "${_Group}", "left", '-74px', { fromValue: '-76px'}], position: 5441, duration: 469 },
            { id: "eid185", tween: [ "style", "${_Group}", "left", '0px', { fromValue: '-74px'}], position: 5910, duration: 1658 },
            { id: "eid23", tween: [ "transform", "${_wplusleftleg}", "rotateZ", '18deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid34", tween: [ "transform", "${_wplusleftleg}", "rotateZ", '34deg', { fromValue: '18deg'}], position: 250, duration: 383 },
            { id: "eid63", tween: [ "transform", "${_wplusleftleg}", "rotateZ", '46deg', { fromValue: '34deg'}], position: 633, duration: 660 },
            { id: "eid687", tween: [ "transform", "${_wplusleftleg}", "rotateZ", '0deg', { fromValue: '46deg'}], position: 1293, duration: 207 },
            { id: "eid172", tween: [ "transform", "${_wplusleftleg}", "rotateZ", '20deg', { fromValue: '0deg'}], position: 6256, duration: 483 },
            { id: "eid184", tween: [ "transform", "${_wplusleftleg}", "rotateZ", '0deg', { fromValue: '20deg'}], position: 6739, duration: 483 },
            { id: "eid41", tween: [ "style", "${_wplusrightleg}", "top", '273px', { fromValue: '268px'}], position: 0, duration: 633 },
            { id: "eid59", tween: [ "style", "${_wplusrightleg}", "top", '268px', { fromValue: '273px'}], position: 633, duration: 1304 },
            { id: "eid134", tween: [ "style", "${_wplusrightleg}", "top", '268px', { fromValue: '268px'}], position: 5441, duration: 0, easing: "easeOutQuart" },
            { id: "eid33", tween: [ "style", "${_Group}", "top", '-1px', { fromValue: '0px'}], position: 0, duration: 365 },
            { id: "eid43", tween: [ "style", "${_Group}", "top", '1px', { fromValue: '-1px'}], position: 365, duration: 268 },
            { id: "eid51", tween: [ "style", "${_Group}", "top", '-1px', { fromValue: '1px'}], position: 633, duration: 660 },
            { id: "eid686", tween: [ "style", "${_Group}", "top", '-25px', { fromValue: '-1px'}], position: 1293, duration: 332, easing: "easeOutQuart" },
            { id: "eid54", tween: [ "style", "${_Group}", "top", '-5px', { fromValue: '-25px'}], position: 1625, duration: 312 },
            { id: "eid158", tween: [ "style", "${_Group}", "top", '-4px', { fromValue: '-5px'}], position: 5441, duration: 469 },
            { id: "eid171", tween: [ "style", "${_Group}", "top", '1px', { fromValue: '-4px'}], position: 5910, duration: 483 },
            { id: "eid181", tween: [ "style", "${_Group}", "top", '0px', { fromValue: '1px'}], position: 6739, duration: 483 },
            { id: "eid30", tween: [ "transform", "${_Group}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid37", tween: [ "transform", "${_Group}", "rotateZ", '4deg', { fromValue: '-3deg'}], position: 250, duration: 383 },
            { id: "eid52", tween: [ "transform", "${_Group}", "rotateZ", '-30deg', { fromValue: '4deg'}], position: 633, duration: 992, easing: "easeOutQuart" },
            { id: "eid57", tween: [ "transform", "${_Group}", "rotateZ", '-1deg', { fromValue: '-30deg'}], position: 1625, duration: 312 },
            { id: "eid164", tween: [ "transform", "${_Group}", "rotateZ", '-9deg', { fromValue: '-1deg'}], position: 5441, duration: 469 },
            { id: "eid166", tween: [ "transform", "${_Group}", "rotateZ", '10deg', { fromValue: '-9deg'}], position: 5910, duration: 483 },
            { id: "eid182", tween: [ "transform", "${_Group}", "rotateZ", '-9deg', { fromValue: '10deg'}], position: 6739, duration: 483 },
            { id: "eid298", tween: [ "transform", "${_Group}", "rotateZ", '0deg', { fromValue: '-9deg'}], position: 7222, duration: 271 },
            { id: "eid13", tween: [ "style", "${_wplusleftleg}", "left", '60px', { fromValue: '60px'}], position: 0, duration: 0 },
            { id: "eid135", tween: [ "style", "${_wplusleftleg}", "left", '60px', { fromValue: '60px'}], position: 5441, duration: 0, easing: "easeOutQuart" },
            { id: "eid5", tween: [ "transform", "${_wplusbody}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid150", tween: [ "transform", "${_wplusbody}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 5441, duration: 0, easing: "easeOutQuart" },
            { id: "eid442", tween: [ "transform", "${_wplusbody}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 10076, duration: 277, easing: "swing" },
            { id: "eid466", tween: [ "transform", "${_wplusbody}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 10353, duration: 277, easing: "swing" },
            { id: "eid479", tween: [ "transform", "${_wplusbody}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 10630, duration: 277, easing: "swing" },
            { id: "eid480", tween: [ "transform", "${_wplusbody}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 10907, duration: 277, easing: "swing" },
            { id: "eid493", tween: [ "transform", "${_wplusbody}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 11185, duration: 277, easing: "swing" },
            { id: "eid494", tween: [ "transform", "${_wplusbody}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 11462, duration: 277, easing: "swing" },
            { id: "eid507", tween: [ "transform", "${_wplusbody}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 11740, duration: 277, easing: "swing" },
            { id: "eid508", tween: [ "transform", "${_wplusbody}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 12017, duration: 277, easing: "swing" },
            { id: "eid39", tween: [ "style", "${_wplusrightleg}", "-webkit-transform-origin", [16.27,3.09], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 633 },
            { id: "eid947", tween: [ "style", "${_wplusrightleg}", "-moz-transform-origin", [16.27,3.09], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 633 },
            { id: "eid948", tween: [ "style", "${_wplusrightleg}", "-ms-transform-origin", [16.27,3.09], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 633 },
            { id: "eid949", tween: [ "style", "${_wplusrightleg}", "msTransformOrigin", [16.27,3.09], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 633 },
            { id: "eid950", tween: [ "style", "${_wplusrightleg}", "-o-transform-origin", [16.27,3.09], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 633 },
            { id: "eid142", tween: [ "style", "${_wplusrightleg}", "-webkit-transform-origin", [16.27,3.09], { valueTemplate: '@@0@@% @@1@@%', fromValue: [16.27,3.09]}], position: 5441, duration: 0, easing: "easeOutQuart" },
            { id: "eid951", tween: [ "style", "${_wplusrightleg}", "-moz-transform-origin", [16.27,3.09], { valueTemplate: '@@0@@% @@1@@%', fromValue: [16.27,3.09]}], position: 5441, duration: 0, easing: "easeOutQuart" },
            { id: "eid952", tween: [ "style", "${_wplusrightleg}", "-ms-transform-origin", [16.27,3.09], { valueTemplate: '@@0@@% @@1@@%', fromValue: [16.27,3.09]}], position: 5441, duration: 0, easing: "easeOutQuart" },
            { id: "eid953", tween: [ "style", "${_wplusrightleg}", "msTransformOrigin", [16.27,3.09], { valueTemplate: '@@0@@% @@1@@%', fromValue: [16.27,3.09]}], position: 5441, duration: 0, easing: "easeOutQuart" },
            { id: "eid954", tween: [ "style", "${_wplusrightleg}", "-o-transform-origin", [16.27,3.09], { valueTemplate: '@@0@@% @@1@@%', fromValue: [16.27,3.09]}], position: 5441, duration: 0, easing: "easeOutQuart" }         ]
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
})(jQuery, AdobeEdge, "EDGE-21315373");
