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
            id:'top_quark',
            type:'rect',
            rect:['151','206','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'top_quark',
            symbolName:'top_quark'
         }
         ]
      },
   states: {
      "Base State": {
         "${_top_quark}": [
            ["transform", "scaleX", '0.70599'],
            ["style", "top", '160px'],
            ["transform", "scaleY", '0.70599'],
            ["style", "left", '90px']
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
         duration: 24250,
         autoPlay: true,
         timeline: [
            { id: "eid721", tween: [ "style", "${_top_quark}", "left", '90px', { fromValue: '90px'}], position: 12648, duration: 0 },
            { id: "eid718", tween: [ "transform", "${_top_quark}", "scaleY", '0.70599', { fromValue: '0.70599'}], position: 12648, duration: 0 },
            { id: "eid723", tween: [ "style", "${_top_quark}", "top", '160px', { fromValue: '160px'}], position: 12648, duration: 0 },
            { id: "eid717", tween: [ "transform", "${_top_quark}", "scaleX", '0.70599', { fromValue: '0.70599'}], position: 12648, duration: 0 },
            { id: "eid749", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${_top_quark}', [] ], ""], position: 12588 },
            { id: "eid750", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_top_quark}', [] ], ""], position: 24250 }         ]
      }
   }
},
"top_quark": {
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
      id: 'qupbody',
      type: 'image',
      rect: ['51px','81px','146px','88px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/qupbody.png','0px','0px']
   },
   {
      id: 'qupleftarm',
      type: 'image',
      rect: ['-82px','-75px','99px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/qupleftarm.png','0px','0px']
   },
   {
      id: 'quprightarm',
      type: 'image',
      rect: ['250px','-54px','93px','97px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/quprightarm.png','0px','0px']
   },
   {
      id: 'Quphead',
      type: 'image',
      rect: ['7px','-87px','260px','175px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Quphead.png','0px','0px']
   },
   {
      id: 'Qupeye',
      type: 'image',
      rect: ['80px','26px','101px','36px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Qupeye.png','0px','0px']
   },
   {
      id: 'qupleftiris',
      type: 'image',
      rect: ['86px','38px','21px','20px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/qupleftiris.png','0px','0px']
   },
   {
      id: 'quprightiris',
      type: 'image',
      rect: ['152px','40px','21px','20px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/quprightiris.png','0px','0px']
   },
   {
      id: 'qupleftpupil',
      type: 'image',
      rect: ['95px','49px','4px','4px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/qupleftpupil.png','0px','0px']
   },
   {
      id: 'quprightpupil',
      type: 'image',
      rect: ['159px','50px','4px','4px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/quprightpupil.png','0px','0px']
   },
   {
      rect: ['76px','17px','38px','7px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(14,133,78,1.00)']
   },
   {
      rect: ['145px','16px','38px','7px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(14,133,78,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "top", '17px'],
            ["color", "background-color", 'rgba(14,133,78,1.00)'],
            ["style", "height", '8px'],
            ["style", "opacity", '0'],
            ["style", "left", '76px'],
            ["style", "width", '38px']
         ],
         "${_quprightiris}": [
            ["style", "top", '30px'],
            ["style", "height", '20px'],
            ["style", "left", '155px'],
            ["style", "width", '21px']
         ],
         "${_qupleftpupil}": [
            ["style", "top", '34px'],
            ["style", "height", '4px'],
            ["style", "left", '92px'],
            ["style", "width", '4px']
         ],
         "${_Quphead}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.98232'],
            ["style", "height", '175px'],
            ["style", "top", '-3px'],
            ["style", "left", '0px'],
            ["style", "width", '260px']
         ],
         "${_RoundRectCopy}": [
            ["style", "top", '16px'],
            ["color", "background-color", 'rgba(14,133,78,1.00)'],
            ["style", "height", '8px'],
            ["style", "opacity", '0'],
            ["style", "left", '145px'],
            ["style", "width", '38px']
         ],
         "${symbolSelector}": [
            ["style", "height", '172px'],
            ["style", "width", '260px']
         ],
         "${_quprightpupil}": [
            ["style", "top", '34px'],
            ["style", "height", '4px'],
            ["style", "left", '164px'],
            ["style", "width", '4px']
         ],
         "${_qupbody}": [
            ["style", "top", '81px'],
            ["style", "height", '88px'],
            ["style", "left", '51px'],
            ["style", "width", '146px']
         ],
         "${_qupleftarm}": [
            ["style", "top", '43px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '104px'],
            ["style", "-webkit-transform-origin", [102.03,90.87], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [102.03,90.87],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [102.03,90.87],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [102.03,90.87],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [102.03,90.87],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '18px'],
            ["style", "width", '99px']
         ],
         "${_quprightarm}": [
            ["style", "top", '40px'],
            ["style", "height", '97px'],
            ["style", "left", '152px'],
            ["style", "width", '93px']
         ],
         "${_Qupeye}": [
            ["style", "top", '26px'],
            ["style", "height", '36px'],
            ["style", "left", '80px'],
            ["style", "width", '101px']
         ],
         "${_qupleftiris}": [
            ["style", "top", '31px'],
            ["style", "height", '20px'],
            ["style", "left", '84px'],
            ["style", "width", '21px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 12000,
         autoPlay: true,
         timeline: [
            { id: "eid40", tween: [ "style", "${_quprightarm}", "top", '-54px', { fromValue: '40px'}], position: 828, duration: 626, easing: "easeInOutBounce" },
            { id: "eid101", tween: [ "style", "${_Qupeye}", "left", '79px', { fromValue: '80px'}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid102", tween: [ "style", "${_Qupeye}", "left", '80px', { fromValue: '79px'}], position: 250, duration: 1887, easing: "easeInOutElastic" },
            { id: "eid103", tween: [ "style", "${_Qupeye}", "top", '49px', { fromValue: '26px'}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid104", tween: [ "style", "${_Qupeye}", "top", '26px', { fromValue: '49px'}], position: 250, duration: 1887, easing: "easeInOutElastic" },
            { id: "eid45", tween: [ "style", "${_quprightiris}", "left", '154px', { fromValue: '155px'}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid99", tween: [ "style", "${_quprightiris}", "left", '153px', { fromValue: '154px'}], position: 250, duration: 536 },
            { id: "eid115", tween: [ "style", "${_quprightiris}", "left", '151px', { fromValue: '153px'}], position: 786, duration: 214 },
            { id: "eid131", tween: [ "style", "${_quprightiris}", "left", '155px', { fromValue: '151px'}], position: 1000, duration: 515 },
            { id: "eid137", tween: [ "style", "${_quprightiris}", "left", '152px', { fromValue: '155px'}], position: 1515, duration: 313 },
            { id: "eid402", tween: [ "style", "${_quprightiris}", "left", '154px', { fromValue: '152px'}], position: 6750, duration: 500, easing: "easeOutQuad" },
            { id: "eid432", tween: [ "style", "${_quprightiris}", "left", '152px', { fromValue: '154px'}], position: 8671, duration: 500, easing: "easeOutQuad" },
            { id: "eid74", tween: [ "style", "${_Quphead}", "-webkit-transform-origin", [49.07,104.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid751", tween: [ "style", "${_Quphead}", "-moz-transform-origin", [49.07,104.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid752", tween: [ "style", "${_Quphead}", "-ms-transform-origin", [49.07,104.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid753", tween: [ "style", "${_Quphead}", "msTransformOrigin", [49.07,104.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid754", tween: [ "style", "${_Quphead}", "-o-transform-origin", [49.07,104.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid37", tween: [ "style", "${_Quphead}", "left", '7px', { fromValue: '0px'}], position: 250, duration: 1204, easing: "easeInOutBounce" },
            { id: "eid352", tween: [ "style", "${_qupleftarm}", "height", '81px', { fromValue: '104px'}], position: 0, duration: 1166, easing: "easeInOutBounce" },
            { id: "eid353", tween: [ "style", "${_qupleftarm}", "height", '104px', { fromValue: '81px'}], position: 1166, duration: 169, easing: "easeInBounce" },
            { id: "eid50", tween: [ "style", "${_qupleftpupil}", "top", '71px', { fromValue: '34px'}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid105", tween: [ "style", "${_qupleftpupil}", "top", '65px', { fromValue: '71px'}], position: 250, duration: 536 },
            { id: "eid112", tween: [ "style", "${_qupleftpupil}", "top", '53px', { fromValue: '65px'}], position: 786, duration: 214 },
            { id: "eid120", tween: [ "style", "${_qupleftpupil}", "top", '52px', { fromValue: '53px'}], position: 1000, duration: 250 },
            { id: "eid128", tween: [ "style", "${_qupleftpupil}", "top", '49px', { fromValue: '52px'}], position: 1250, duration: 0 },
            { id: "eid411", tween: [ "style", "${_qupleftpupil}", "top", '43px', { fromValue: '49px'}], position: 6750, duration: 500, easing: "easeOutQuad" },
            { id: "eid431", tween: [ "style", "${_qupleftpupil}", "top", '49px', { fromValue: '43px'}], position: 8671, duration: 500, easing: "easeOutQuad" },
            { id: "eid39", tween: [ "style", "${_quprightarm}", "left", '250px', { fromValue: '152px'}], position: 828, duration: 626, easing: "easeInOutBounce" },
            { id: "eid84", tween: [ "style", "${_Quphead}", "top", '-1px', { fromValue: '-3px'}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid38", tween: [ "style", "${_Quphead}", "top", '-87px', { fromValue: '-1px'}], position: 250, duration: 1204, easing: "easeInOutBounce" },
            { id: "eid46", tween: [ "style", "${_quprightiris}", "top", '61px', { fromValue: '30px'}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid100", tween: [ "style", "${_quprightiris}", "top", '55px', { fromValue: '61px'}], position: 250, duration: 536 },
            { id: "eid116", tween: [ "style", "${_quprightiris}", "top", '49px', { fromValue: '55px'}], position: 786, duration: 214 },
            { id: "eid122", tween: [ "style", "${_quprightiris}", "top", '48px', { fromValue: '49px'}], position: 1000, duration: 250 },
            { id: "eid132", tween: [ "style", "${_quprightiris}", "top", '40px', { fromValue: '48px'}], position: 1250, duration: 0 },
            { id: "eid404", tween: [ "style", "${_quprightiris}", "top", '40px', { fromValue: '40px'}], position: 3349, duration: 0, easing: "easeOutQuad" },
            { id: "eid403", tween: [ "style", "${_quprightiris}", "top", '38px', { fromValue: '40px'}], position: 6750, duration: 500, easing: "easeOutQuad" },
            { id: "eid433", tween: [ "style", "${_quprightiris}", "top", '40px', { fromValue: '38px'}], position: 8671, duration: 500, easing: "easeOutQuad" },
            { id: "eid48", tween: [ "style", "${_quprightpupil}", "top", '73px', { fromValue: '34px'}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid98", tween: [ "style", "${_quprightpupil}", "top", '67px', { fromValue: '73px'}], position: 250, duration: 536 },
            { id: "eid118", tween: [ "style", "${_quprightpupil}", "top", '56px', { fromValue: '67px'}], position: 786, duration: 214 },
            { id: "eid126", tween: [ "style", "${_quprightpupil}", "top", '55px', { fromValue: '56px'}], position: 1000, duration: 250 },
            { id: "eid134", tween: [ "style", "${_quprightpupil}", "top", '50px', { fromValue: '55px'}], position: 1250, duration: 0 },
            { id: "eid407", tween: [ "style", "${_quprightpupil}", "top", '46px', { fromValue: '50px'}], position: 6750, duration: 500, easing: "easeOutQuad" },
            { id: "eid430", tween: [ "style", "${_quprightpupil}", "top", '50px', { fromValue: '46px'}], position: 8671, duration: 500, easing: "easeOutQuad" },
            { id: "eid41", tween: [ "style", "${_qupleftarm}", "left", '-82px', { fromValue: '18px'}], position: 828, duration: 626, easing: "easeInOutBounce" },
            { id: "eid172", tween: [ "style", "${_RoundRectCopy}", "height", '50px', { fromValue: '8px'}], position: 1879, duration: 224, easing: "easeInOutBounce" },
            { id: "eid174", tween: [ "style", "${_RoundRectCopy}", "height", '5px', { fromValue: '50px'}], position: 2103, duration: 181, easing: "easeInOutBounce" },
            { id: "eid441", tween: [ "style", "${_RoundRectCopy}", "height", '48px', { fromValue: '5px'}], position: 11250, duration: 250, easing: "easeInQuad" },
            { id: "eid442", tween: [ "style", "${_RoundRectCopy}", "height", '4px', { fromValue: '48px'}], position: 11500, duration: 500, easing: "easeOutQuad" },
            { id: "eid166", tween: [ "style", "${_RoundRectCopy}", "opacity", '1', { fromValue: '0.000000'}], position: 1789, duration: 90, easing: "easeInOutBounce" },
            { id: "eid437", tween: [ "style", "${_RoundRectCopy}", "opacity", '1', { fromValue: '1'}], position: 11250, duration: 0, easing: "easeInOutBounce" },
            { id: "eid380", tween: [ "transform", "${_qupleftarm}", "rotateZ", '-17deg', { fromValue: '0deg'}], position: 4439, duration: 311, easing: "easeInQuad" },
            { id: "eid381", tween: [ "transform", "${_qupleftarm}", "rotateZ", '9deg', { fromValue: '-17deg'}], position: 4750, duration: 250, easing: "easeInOutQuad" },
            { id: "eid382", tween: [ "transform", "${_qupleftarm}", "rotateZ", '-18deg', { fromValue: '9deg'}], position: 5000, duration: 250, easing: "easeOutQuad" },
            { id: "eid383", tween: [ "transform", "${_qupleftarm}", "rotateZ", '0deg', { fromValue: '-18deg'}], position: 5250, duration: 445 },
            { id: "eid173", tween: [ "style", "${_RoundRect}", "height", '50px', { fromValue: '8px'}], position: 1879, duration: 224, easing: "easeInOutBounce" },
            { id: "eid175", tween: [ "style", "${_RoundRect}", "height", '5px', { fromValue: '50px'}], position: 2103, duration: 181, easing: "easeInOutBounce" },
            { id: "eid443", tween: [ "style", "${_RoundRect}", "height", '47px', { fromValue: '5px'}], position: 11250, duration: 250, easing: "easeInQuad" },
            { id: "eid444", tween: [ "style", "${_RoundRect}", "height", '5px', { fromValue: '47px'}], position: 11500, duration: 500, easing: "easeOutQuad" },
            { id: "eid47", tween: [ "style", "${_quprightpupil}", "left", '163px', { fromValue: '164px'}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid143", tween: [ "style", "${_quprightpupil}", "left", '162px', { fromValue: '163px'}], position: 250, duration: 536 },
            { id: "eid117", tween: [ "style", "${_quprightpupil}", "left", '154px', { fromValue: '162px'}], position: 786, duration: 214 },
            { id: "eid125", tween: [ "style", "${_quprightpupil}", "left", '155px', { fromValue: '154px'}], position: 1000, duration: 250 },
            { id: "eid133", tween: [ "style", "${_quprightpupil}", "left", '159px', { fromValue: '155px'}], position: 1250, duration: 578 },
            { id: "eid406", tween: [ "style", "${_quprightpupil}", "left", '162px', { fromValue: '159px'}], position: 6750, duration: 500, easing: "easeOutQuad" },
            { id: "eid429", tween: [ "style", "${_quprightpupil}", "left", '159px', { fromValue: '162px'}], position: 8671, duration: 500, easing: "easeOutQuad" },
            { id: "eid167", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0.000000'}], position: 1789, duration: 90, easing: "easeInOutBounce" },
            { id: "eid439", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '1'}], position: 11250, duration: 0, easing: "easeInOutBounce" },
            { id: "eid49", tween: [ "style", "${_qupleftpupil}", "left", '91px', { fromValue: '92px'}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid110", tween: [ "style", "${_qupleftpupil}", "left", '92px', { fromValue: '91px'}], position: 250, duration: 536 },
            { id: "eid111", tween: [ "style", "${_qupleftpupil}", "left", '85px', { fromValue: '92px'}], position: 786, duration: 214 },
            { id: "eid119", tween: [ "style", "${_qupleftpupil}", "left", '86px', { fromValue: '85px'}], position: 1000, duration: 250 },
            { id: "eid127", tween: [ "style", "${_qupleftpupil}", "left", '95px', { fromValue: '86px'}], position: 1250, duration: 578 },
            { id: "eid394", tween: [ "style", "${_qupleftpupil}", "left", '95px', { fromValue: '95px'}], position: 6750, duration: 0, easing: "easeOutQuad" },
            { id: "eid85", tween: [ "transform", "${_Quphead}", "scaleY", '0.82415', { fromValue: '0.98232'}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid93", tween: [ "transform", "${_Quphead}", "scaleY", '0.98232', { fromValue: '0.82415'}], position: 250, duration: 1204, easing: "easeInOutBounce" },
            { id: "eid377", tween: [ "style", "${_qupleftarm}", "-webkit-transform-origin", [102.03,90.87], { valueTemplate: '@@0@@% @@1@@%', fromValue: [102.03,90.87]}], position: 4439, duration: 0 },
            { id: "eid755", tween: [ "style", "${_qupleftarm}", "-moz-transform-origin", [102.03,90.87], { valueTemplate: '@@0@@% @@1@@%', fromValue: [102.03,90.87]}], position: 4439, duration: 0 },
            { id: "eid756", tween: [ "style", "${_qupleftarm}", "-ms-transform-origin", [102.03,90.87], { valueTemplate: '@@0@@% @@1@@%', fromValue: [102.03,90.87]}], position: 4439, duration: 0 },
            { id: "eid757", tween: [ "style", "${_qupleftarm}", "msTransformOrigin", [102.03,90.87], { valueTemplate: '@@0@@% @@1@@%', fromValue: [102.03,90.87]}], position: 4439, duration: 0 },
            { id: "eid758", tween: [ "style", "${_qupleftarm}", "-o-transform-origin", [102.03,90.87], { valueTemplate: '@@0@@% @@1@@%', fromValue: [102.03,90.87]}], position: 4439, duration: 0 },
            { id: "eid42", tween: [ "style", "${_qupleftarm}", "top", '-75px', { fromValue: '43px'}], position: 828, duration: 626, easing: "easeInOutBounce" },
            { id: "eid43", tween: [ "style", "${_qupleftiris}", "left", '83px', { fromValue: '84px'}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid96", tween: [ "style", "${_qupleftiris}", "left", '84px', { fromValue: '83px'}], position: 250, duration: 536 },
            { id: "eid113", tween: [ "style", "${_qupleftiris}", "left", '82px', { fromValue: '84px'}], position: 786, duration: 214 },
            { id: "eid123", tween: [ "style", "${_qupleftiris}", "left", '83px', { fromValue: '82px'}], position: 1000, duration: 250 },
            { id: "eid129", tween: [ "style", "${_qupleftiris}", "left", '87px', { fromValue: '83px'}], position: 1250, duration: 265 },
            { id: "eid139", tween: [ "style", "${_qupleftiris}", "left", '86px', { fromValue: '87px'}], position: 1515, duration: 313 },
            { id: "eid408", tween: [ "style", "${_qupleftiris}", "left", '85px', { fromValue: '86px'}], position: 6750, duration: 500, easing: "easeOutQuad" },
            { id: "eid434", tween: [ "style", "${_qupleftiris}", "left", '86px', { fromValue: '85px'}], position: 8671, duration: 500, easing: "easeOutQuad" },
            { id: "eid44", tween: [ "style", "${_qupleftiris}", "top", '59px', { fromValue: '31px'}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid97", tween: [ "style", "${_qupleftiris}", "top", '53px', { fromValue: '59px'}], position: 250, duration: 536 },
            { id: "eid114", tween: [ "style", "${_qupleftiris}", "top", '47px', { fromValue: '53px'}], position: 786, duration: 214 },
            { id: "eid124", tween: [ "style", "${_qupleftiris}", "top", '46px', { fromValue: '47px'}], position: 1000, duration: 250 },
            { id: "eid130", tween: [ "style", "${_qupleftiris}", "top", '38px', { fromValue: '46px'}], position: 1250, duration: 0 },
            { id: "eid410", tween: [ "style", "${_qupleftiris}", "top", '38px', { fromValue: '38px'}], position: 3349, duration: 0, easing: "easeOutQuad" },
            { id: "eid409", tween: [ "style", "${_qupleftiris}", "top", '35px', { fromValue: '38px'}], position: 6750, duration: 500, easing: "easeOutQuad" },
            { id: "eid435", tween: [ "style", "${_qupleftiris}", "top", '38px', { fromValue: '35px'}], position: 8671, duration: 500, easing: "easeOutQuad" }         ]
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
})(jQuery, AdobeEdge, "EDGE-217813");
