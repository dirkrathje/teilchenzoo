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
            id:'taun_neutrino',
            type:'rect',
            rect:['162','93','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'taun_neutrino',
            symbolName:'taun_neutrino'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '305px'],
            ["style", "width", '420px']
         ],
         "${_taun_neutrino}": [
            ["style", "top", '68px'],
            ["transform", "scaleX", '0.82369'],
            ["transform", "scaleY", '0.82369'],
            ["style", "left", '99px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 16025,
         autoPlay: true,
         timeline: [
            { id: "eid1076", tween: [ "transform", "${_taun_neutrino}", "scaleX", '0.82369', { fromValue: '0.82369'}], position: 11000, duration: 0 },
            { id: "eid1086", tween: [ "style", "${_taun_neutrino}", "top", '68px', { fromValue: '68px'}], position: 11000, duration: 0 },
            { id: "eid1087", tween: [ "style", "${_taun_neutrino}", "top", '68px', { fromValue: '68px'}], position: 16025, duration: 0 },
            { id: "eid1080", tween: [ "style", "${_taun_neutrino}", "left", '99px', { fromValue: '99px'}], position: 11000, duration: 0 },
            { id: "eid1077", tween: [ "transform", "${_taun_neutrino}", "scaleY", '0.82369', { fromValue: '0.82369'}], position: 11000, duration: 0 },
            { id: "eid1088", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_taun_neutrino}', [] ], ""], position: 16025 }         ]
      }
   }
},
"taun_neutrino": {
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
      transform: [],
      id: 'tauontribody',
      type: 'image',
      rect: ['14px','0px','200px','260px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tauontribody.png','0px','0px']
   },
   {
      id: 'Tauontribrille',
      type: 'image',
      rect: ['0px','12px','226px','120px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Tauontribrille.png','0px','0px']
   },
   {
      id: 'tau_irisleft',
      type: 'image',
      rect: ['49px','42px','27px','23px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tau_irisleft.png','0px','0px']
   },
   {
      id: 'tau_irisright',
      type: 'image',
      rect: ['113px','53px','27px','24px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tau_irisright.png','0px','0px']
   },
   {
      id: 'tau_pupilleft',
      type: 'image',
      rect: ['57px','49px','11px','9px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tau_pupilleft.png','0px','0px']
   },
   {
      id: 'tau_pupilright',
      type: 'image',
      rect: ['121px','60px','11px','9px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tau_pupilright.png','0px','0px']
   },
   {
      transform: [[0,0],['10'],[],['1','0.44214']],
      rect: ['46px','18px','63px','10px','auto','auto'],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(121,121,123,1.00)']
   },
   {
      transform: [[0,0],['12'],[],['1','0.30903']],
      rect: ['114px','31px','63px','10px','auto','auto'],
      id: 'RoundRect2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(121,121,123,1.00)']
   },
   {
      transform: [[0,0],['7'],[],['1','1.20366']],
      borderRadius: ['50%','50%','0px','0px'],
      rect: ['100px','76px','62px','25px','auto','auto'],
      id: 'Ellipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(121,121,123,1)']
   },
   {
      transform: [[0,0],['7'],[],['1','1.20366']],
      borderRadius: ['50%','50%','0px','0px'],
      rect: ['32px','67px','62px','25px','auto','auto'],
      id: 'EllipseCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(121,121,123,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_tau_pupilleft}": [
            ["style", "top", '49px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '9px'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '57px'],
            ["style", "width", '11px']
         ],
         "${_tau_pupilright}": [
            ["style", "top", '60px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '9px'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '121px'],
            ["style", "width", '11px']
         ],
         "${_RoundRect2}": [
            ["color", "background-color", 'rgba(121,121,123,1.00)'],
            ["transform", "rotateZ", '10deg'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '46px'],
            ["style", "top", '17px'],
            ["style", "border-bottom-left-radius", [26,26], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '0.44214'],
            ["style", "height", '10px'],
            ["style", "border-bottom-right-radius", [24,24], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_tau_irisright}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "height", '24px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "top", '53px'],
            ["style", "left", '113px'],
            ["style", "width", '27px']
         ],
         "${_Tauontribrille}": [
            ["style", "top", '12px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px']
         ],
         "${_Ellipse}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '7deg'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '98px'],
            ["style", "width", '62px'],
            ["style", "top", '78px'],
            ["transform", "scaleY", '0.20176'],
            ["style", "height", '25px']
         ],
         "${symbolSelector}": [
            ["style", "height", '260px'],
            ["style", "width", '226px']
         ],
         "${_RoundRect2Copy}": [
            ["color", "background-color", 'rgba(121,121,123,1.00)'],
            ["transform", "rotateZ", '12deg'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '111px'],
            ["style", "top", '29px'],
            ["style", "border-bottom-left-radius", [33,33], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '0.30903'],
            ["style", "height", '10px'],
            ["style", "border-bottom-right-radius", [37,37], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_EllipseCopy}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '7deg'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '30px'],
            ["style", "width", '62px'],
            ["style", "top", '66px'],
            ["transform", "scaleY", '0.20176'],
            ["style", "height", '25px']
         ],
         "${_tauontribody}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "left", '14px'],
            ["style", "top", '0px']
         ],
         "${_tau_irisleft}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "height", '23px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "top", '42px'],
            ["style", "left", '49px'],
            ["style", "width", '27px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 15597,
         autoPlay: true,
         timeline: [
            { id: "eid154", tween: [ "style", "${_RoundRect2}", "height", '159px', { fromValue: '10px'}], position: 2102, duration: 148 },
            { id: "eid166", tween: [ "style", "${_RoundRect2}", "height", '3px', { fromValue: '159px'}], position: 2250, duration: 143, easing: "easeInQuad" },
            { id: "eid174", tween: [ "style", "${_RoundRect2}", "height", '4px', { fromValue: '3px'}], position: 2393, duration: 185 },
            { id: "eid179", tween: [ "style", "${_RoundRect2}", "height", '158px', { fromValue: '4px'}], position: 2578, duration: 226, easing: "easeOutQuad" },
            { id: "eid185", tween: [ "style", "${_RoundRect2}", "height", '4px', { fromValue: '158px'}], position: 2804, duration: 122 },
            { id: "eid198", tween: [ "style", "${_RoundRect2}", "border-bottom-right-radius", [24,24], { valueTemplate: '@@0@@px @@1@@px', fromValue: [24,24]}], position: 2321, duration: 0 },
            { id: "eid487", tween: [ "transform", "${_EllipseCopy}", "scaleY", '0.28222', { fromValue: '0.20176'}], position: 13250, duration: 386, easing: "easeOutQuad" },
            { id: "eid488", tween: [ "transform", "${_EllipseCopy}", "scaleY", '1.20366', { fromValue: '0.28222'}], position: 13636, duration: 250, easing: "easeInOutElastic" },
            { id: "eid489", tween: [ "transform", "${_EllipseCopy}", "scaleY", '1.08', { fromValue: '1.20366'}], position: 13886, duration: 759, easing: "easeInBounce" },
            { id: "eid490", tween: [ "transform", "${_EllipseCopy}", "scaleY", '1.14999', { fromValue: '1.08'}], position: 14645, duration: 193, easing: "easeInBounce" },
            { id: "eid491", tween: [ "transform", "${_EllipseCopy}", "scaleY", '1.05', { fromValue: '1.14999'}], position: 14838, duration: 199, easing: "easeInBounce" },
            { id: "eid492", tween: [ "transform", "${_EllipseCopy}", "scaleY", '1.19', { fromValue: '1.05'}], position: 15037, duration: 174, easing: "easeInBounce" },
            { id: "eid493", tween: [ "transform", "${_EllipseCopy}", "scaleY", '0.15806', { fromValue: '1.19'}], position: 15211, duration: 175, easing: "easeOutBounce" },
            { id: "eid97", tween: [ "style", "${_tau_irisleft}", "height", '23px', { fromValue: '23px'}], position: 1500, duration: 0 },
            { id: "eid129", tween: [ "style", "${_tau_irisleft}", "height", '23px', { fromValue: '23px'}], position: 2102, duration: 0 },
            { id: "eid449", tween: [ "transform", "${_tau_irisleft}", "scaleX", '1.43', { fromValue: '1'}], position: 13250, duration: 386, easing: "easeOutQuad" },
            { id: "eid509", tween: [ "transform", "${_tau_irisleft}", "scaleX", '1', { fromValue: '1.43'}], position: 15211, duration: 386, easing: "easeOutQuad" },
            { id: "eid148", tween: [ "style", "${_RoundRect2}", "opacity", '1', { fromValue: '0.000000'}], position: 1873, duration: 77 },
            { id: "eid93", tween: [ "style", "${_tau_irisright}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1500, duration: 0 },
            { id: "eid1117", tween: [ "style", "${_tau_irisright}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1500, duration: 0 },
            { id: "eid1118", tween: [ "style", "${_tau_irisright}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1500, duration: 0 },
            { id: "eid1119", tween: [ "style", "${_tau_irisright}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1500, duration: 0 },
            { id: "eid1120", tween: [ "style", "${_tau_irisright}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1500, duration: 0 },
            { id: "eid124", tween: [ "style", "${_tau_irisright}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2102, duration: 0 },
            { id: "eid1121", tween: [ "style", "${_tau_irisright}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2102, duration: 0 },
            { id: "eid1122", tween: [ "style", "${_tau_irisright}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2102, duration: 0 },
            { id: "eid1123", tween: [ "style", "${_tau_irisright}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2102, duration: 0 },
            { id: "eid1124", tween: [ "style", "${_tau_irisright}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2102, duration: 0 },
            { id: "eid435", tween: [ "transform", "${_Tauontribrille}", "scaleY", '1.03597', { fromValue: '1'}], position: 7810, duration: 808, easing: "easeInBounce" },
            { id: "eid439", tween: [ "transform", "${_Tauontribrille}", "scaleY", '1', { fromValue: '1.03597'}], position: 8618, duration: 831, easing: "easeOutQuad" },
            { id: "eid96", tween: [ "style", "${_tau_irisleft}", "width", '27px', { fromValue: '27px'}], position: 1500, duration: 0 },
            { id: "eid132", tween: [ "style", "${_tau_irisleft}", "width", '27px', { fromValue: '27px'}], position: 2102, duration: 0 },
            { id: "eid78", tween: [ "style", "${_tau_pupilright}", "width", '11px', { fromValue: '11px'}], position: 1500, duration: 0 },
            { id: "eid114", tween: [ "style", "${_tau_pupilright}", "width", '11px', { fromValue: '11px'}], position: 2102, duration: 0 },
            { id: "eid458", tween: [ "style", "${_Ellipse}", "-webkit-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 14386, duration: 0, easing: "easeOutQuad" },
            { id: "eid1125", tween: [ "style", "${_Ellipse}", "-moz-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 14386, duration: 0, easing: "easeOutQuad" },
            { id: "eid1126", tween: [ "style", "${_Ellipse}", "-ms-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 14386, duration: 0, easing: "easeOutQuad" },
            { id: "eid1127", tween: [ "style", "${_Ellipse}", "msTransformOrigin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 14386, duration: 0, easing: "easeOutQuad" },
            { id: "eid1128", tween: [ "style", "${_Ellipse}", "-o-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 14386, duration: 0, easing: "easeOutQuad" },
            { id: "eid495", tween: [ "style", "${_EllipseCopy}", "opacity", '1', { fromValue: '0'}], position: 13250, duration: 386, easing: "easeOutQuad" },
            { id: "eid496", tween: [ "style", "${_EllipseCopy}", "opacity", '1', { fromValue: '1'}], position: 14386, duration: 0, easing: "easeOutQuad" },
            { id: "eid593", tween: [ "style", "${_EllipseCopy}", "opacity", '0', { fromValue: '1'}], position: 15386, duration: 211, easing: "easeOutQuad" },
            { id: "eid459", tween: [ "style", "${_Ellipse}", "left", '98px', { fromValue: '98px'}], position: 14386, duration: 0, easing: "easeOutQuad" },
            { id: "eid87", tween: [ "style", "${_tau_pupilleft}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1500, duration: 0 },
            { id: "eid1129", tween: [ "style", "${_tau_pupilleft}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1500, duration: 0 },
            { id: "eid1130", tween: [ "style", "${_tau_pupilleft}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1500, duration: 0 },
            { id: "eid1131", tween: [ "style", "${_tau_pupilleft}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1500, duration: 0 },
            { id: "eid1132", tween: [ "style", "${_tau_pupilleft}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1500, duration: 0 },
            { id: "eid118", tween: [ "style", "${_tau_pupilleft}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2102, duration: 0 },
            { id: "eid1133", tween: [ "style", "${_tau_pupilleft}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2102, duration: 0 },
            { id: "eid1134", tween: [ "style", "${_tau_pupilleft}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2102, duration: 0 },
            { id: "eid1135", tween: [ "style", "${_tau_pupilleft}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2102, duration: 0 },
            { id: "eid1136", tween: [ "style", "${_tau_pupilleft}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2102, duration: 0 },
            { id: "eid191", tween: [ "style", "${_RoundRect2}", "top", '-24px', { fromValue: '17px'}], position: 2102, duration: 148 },
            { id: "eid167", tween: [ "style", "${_RoundRect2}", "top", '20px', { fromValue: '-24px'}], position: 2250, duration: 143, easing: "easeInQuad" },
            { id: "eid175", tween: [ "style", "${_RoundRect2}", "top", '19px', { fromValue: '20px'}], position: 2393, duration: 185 },
            { id: "eid180", tween: [ "style", "${_RoundRect2}", "top", '-24px', { fromValue: '19px'}], position: 2578, duration: 226, easing: "easeOutQuad" },
            { id: "eid186", tween: [ "style", "${_RoundRect2}", "top", '19px', { fromValue: '-24px'}], position: 2804, duration: 122 },
            { id: "eid501", tween: [ "style", "${_EllipseCopy}", "left", '30px', { fromValue: '30px'}], position: 15211, duration: 0, easing: "easeInBounce" },
            { id: "eid434", tween: [ "transform", "${_Tauontribrille}", "scaleX", '1.01', { fromValue: '1'}], position: 7810, duration: 377, easing: "easeInQuad" },
            { id: "eid438", tween: [ "transform", "${_Tauontribrille}", "scaleX", '1', { fromValue: '1.01'}], position: 8187, duration: 1262, easing: "easeOutQuad" },
            { id: "eid86", tween: [ "transform", "${_tau_pupilleft}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1500, duration: 0 },
            { id: "eid116", tween: [ "transform", "${_tau_pupilleft}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2102, duration: 0 },
            { id: "eid81", tween: [ "transform", "${_tau_pupilright}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1500, duration: 0 },
            { id: "eid110", tween: [ "transform", "${_tau_pupilright}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2102, duration: 0 },
            { id: "eid450", tween: [ "transform", "${_tau_irisleft}", "scaleY", '1.43', { fromValue: '1'}], position: 13250, duration: 386, easing: "easeOutQuad" },
            { id: "eid510", tween: [ "transform", "${_tau_irisleft}", "scaleY", '1', { fromValue: '1.43'}], position: 15211, duration: 386, easing: "easeOutQuad" },
            { id: "eid451", tween: [ "transform", "${_tau_irisright}", "scaleX", '1.4334', { fromValue: '1'}], position: 13250, duration: 386, easing: "easeOutQuad" },
            { id: "eid507", tween: [ "transform", "${_tau_irisright}", "scaleX", '1', { fromValue: '1.4334'}], position: 15211, duration: 386, easing: "easeOutQuad" },
            { id: "eid452", tween: [ "transform", "${_tau_irisright}", "scaleY", '1.4334', { fromValue: '1'}], position: 13250, duration: 386, easing: "easeOutQuad" },
            { id: "eid508", tween: [ "transform", "${_tau_irisright}", "scaleY", '1', { fromValue: '1.4334'}], position: 15211, duration: 386, easing: "easeOutQuad" },
            { id: "eid98", tween: [ "transform", "${_tau_irisleft}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1500, duration: 0 },
            { id: "eid128", tween: [ "transform", "${_tau_irisleft}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2102, duration: 0 },
            { id: "eid199", tween: [ "style", "${_RoundRect2}", "border-bottom-left-radius", [26,26], { valueTemplate: '@@0@@px @@1@@px', fromValue: [26,26]}], position: 2321, duration: 0 },
            { id: "eid80", tween: [ "style", "${_tau_pupilright}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1500, duration: 0 },
            { id: "eid1137", tween: [ "style", "${_tau_pupilright}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1500, duration: 0 },
            { id: "eid1138", tween: [ "style", "${_tau_pupilright}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1500, duration: 0 },
            { id: "eid1139", tween: [ "style", "${_tau_pupilright}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1500, duration: 0 },
            { id: "eid1140", tween: [ "style", "${_tau_pupilright}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1500, duration: 0 },
            { id: "eid112", tween: [ "style", "${_tau_pupilright}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2102, duration: 0 },
            { id: "eid1141", tween: [ "style", "${_tau_pupilright}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2102, duration: 0 },
            { id: "eid1142", tween: [ "style", "${_tau_pupilright}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2102, duration: 0 },
            { id: "eid1143", tween: [ "style", "${_tau_pupilright}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2102, duration: 0 },
            { id: "eid1144", tween: [ "style", "${_tau_pupilright}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2102, duration: 0 },
            { id: "eid196", tween: [ "style", "${_RoundRect2Copy}", "border-bottom-right-radius", [37,37], { valueTemplate: '@@0@@px @@1@@px', fromValue: [37,37]}], position: 2612, duration: 0 },
            { id: "eid103", tween: [ "style", "${_tau_irisright}", "top", '54px', { fromValue: '53px'}], position: 1500, duration: 602 },
            { id: "eid138", tween: [ "style", "${_tau_irisright}", "top", '53px', { fromValue: '54px'}], position: 2926, duration: 602 },
            { id: "eid800", tween: [ "style", "${_tau_irisright}", "top", '51px', { fromValue: '53px'}], position: 14136, duration: 250, easing: "easeInOutBounce" },
            { id: "eid806", tween: [ "style", "${_tau_irisright}", "top", '53px', { fromValue: '51px'}], position: 14838, duration: 241, easing: "easeInOutBounce" },
            { id: "eid108", tween: [ "style", "${_tau_pupilleft}", "top", '55px', { fromValue: '49px'}], position: 1500, duration: 602 },
            { id: "eid136", tween: [ "style", "${_tau_pupilleft}", "top", '49px', { fromValue: '55px'}], position: 2926, duration: 602 },
            { id: "eid784", tween: [ "style", "${_tau_pupilleft}", "top", '48px', { fromValue: '49px'}], position: 14136, duration: 250, easing: "easeInOutBounce" },
            { id: "eid792", tween: [ "style", "${_tau_pupilleft}", "top", '49px', { fromValue: '48px'}], position: 14838, duration: 241, easing: "easeInOutBounce" },
            { id: "eid460", tween: [ "style", "${_Ellipse}", "top", '78px', { fromValue: '78px'}], position: 14386, duration: 0, easing: "easeOutQuad" },
            { id: "eid107", tween: [ "style", "${_tau_pupilleft}", "left", '69px', { fromValue: '57px'}], position: 1500, duration: 602 },
            { id: "eid135", tween: [ "style", "${_tau_pupilleft}", "left", '57px', { fromValue: '69px'}], position: 2926, duration: 602 },
            { id: "eid783", tween: [ "style", "${_tau_pupilleft}", "left", '62px', { fromValue: '57px'}], position: 14136, duration: 250, easing: "easeInOutBounce" },
            { id: "eid791", tween: [ "style", "${_tau_pupilleft}", "left", '57px', { fromValue: '62px'}], position: 14838, duration: 241, easing: "easeInOutBounce" },
            { id: "eid147", tween: [ "style", "${_RoundRect2Copy}", "opacity", '1', { fromValue: '0.000000'}], position: 1873, duration: 77 },
            { id: "eid463", tween: [ "transform", "${_Ellipse}", "scaleY", '0.28222', { fromValue: '0.20176'}], position: 13250, duration: 386, easing: "easeOutQuad" },
            { id: "eid466", tween: [ "transform", "${_Ellipse}", "scaleY", '1.20366', { fromValue: '0.28222'}], position: 13636, duration: 250, easing: "easeInOutElastic" },
            { id: "eid468", tween: [ "transform", "${_Ellipse}", "scaleY", '1.08', { fromValue: '1.20366'}], position: 13886, duration: 759, easing: "easeInBounce" },
            { id: "eid470", tween: [ "transform", "${_Ellipse}", "scaleY", '1.14999', { fromValue: '1.08'}], position: 14645, duration: 193, easing: "easeInBounce" },
            { id: "eid471", tween: [ "transform", "${_Ellipse}", "scaleY", '1.05', { fromValue: '1.14999'}], position: 14838, duration: 199, easing: "easeInBounce" },
            { id: "eid472", tween: [ "transform", "${_Ellipse}", "scaleY", '1.19', { fromValue: '1.05'}], position: 15037, duration: 174, easing: "easeInBounce" },
            { id: "eid469", tween: [ "transform", "${_Ellipse}", "scaleY", '0.28', { fromValue: '1.19'}], position: 15211, duration: 175, easing: "easeOutBounce" },
            { id: "eid464", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0'}], position: 13250, duration: 386, easing: "easeOutQuad" },
            { id: "eid465", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '1'}], position: 14386, duration: 0, easing: "easeOutQuad" },
            { id: "eid594", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 15386, duration: 211, easing: "easeOutQuad" },
            { id: "eid90", tween: [ "style", "${_tau_irisright}", "width", '27px', { fromValue: '27px'}], position: 1500, duration: 0 },
            { id: "eid126", tween: [ "style", "${_tau_irisright}", "width", '27px', { fromValue: '27px'}], position: 2102, duration: 0 },
            { id: "eid99", tween: [ "style", "${_tau_irisleft}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1500, duration: 0 },
            { id: "eid1145", tween: [ "style", "${_tau_irisleft}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1500, duration: 0 },
            { id: "eid1146", tween: [ "style", "${_tau_irisleft}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1500, duration: 0 },
            { id: "eid1147", tween: [ "style", "${_tau_irisleft}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1500, duration: 0 },
            { id: "eid1148", tween: [ "style", "${_tau_irisleft}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1500, duration: 0 },
            { id: "eid130", tween: [ "style", "${_tau_irisleft}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2102, duration: 0 },
            { id: "eid1149", tween: [ "style", "${_tau_irisleft}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2102, duration: 0 },
            { id: "eid1150", tween: [ "style", "${_tau_irisleft}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2102, duration: 0 },
            { id: "eid1151", tween: [ "style", "${_tau_irisleft}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2102, duration: 0 },
            { id: "eid1152", tween: [ "style", "${_tau_irisleft}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2102, duration: 0 },
            { id: "eid680", tween: [ "transform", "${_tauontribody}", "scaleY", '0.93961', { fromValue: '1'}], position: 13250, duration: 526 },
            { id: "eid685", tween: [ "transform", "${_tauontribody}", "scaleY", '0.96', { fromValue: '0.93961'}], position: 13776, duration: 213, easing: "easeInOutBounce" },
            { id: "eid687", tween: [ "transform", "${_tauontribody}", "scaleY", '0.874', { fromValue: '0.96'}], position: 13989, duration: 397, easing: "easeOutBounce" },
            { id: "eid684", tween: [ "transform", "${_tauontribody}", "scaleY", '0.92164', { fromValue: '0.874'}], position: 14386, duration: 452, easing: "easeInElastic" },
            { id: "eid688", tween: [ "transform", "${_tauontribody}", "scaleY", '0.86085', { fromValue: '0.92164'}], position: 14838, duration: 373, easing: "easeInOutBounce" },
            { id: "eid686", tween: [ "transform", "${_tauontribody}", "scaleY", '1', { fromValue: '0.86085'}], position: 15211, duration: 386 },
            { id: "eid104", tween: [ "style", "${_tau_irisright}", "left", '121px', { fromValue: '113px'}], position: 1500, duration: 602 },
            { id: "eid137", tween: [ "style", "${_tau_irisright}", "left", '113px', { fromValue: '121px'}], position: 2926, duration: 602 },
            { id: "eid799", tween: [ "style", "${_tau_irisright}", "left", '119px', { fromValue: '113px'}], position: 14136, duration: 250, easing: "easeInOutBounce" },
            { id: "eid805", tween: [ "style", "${_tau_irisright}", "left", '113px', { fromValue: '119px'}], position: 14838, duration: 241, easing: "easeInOutBounce" },
            { id: "eid79", tween: [ "style", "${_tau_pupilright}", "height", '9px', { fromValue: '9px'}], position: 1500, duration: 0 },
            { id: "eid111", tween: [ "style", "${_tau_pupilright}", "height", '9px', { fromValue: '9px'}], position: 2102, duration: 0 },
            { id: "eid91", tween: [ "style", "${_tau_irisright}", "height", '24px', { fromValue: '24px'}], position: 1500, duration: 0 },
            { id: "eid123", tween: [ "style", "${_tau_irisright}", "height", '24px', { fromValue: '24px'}], position: 2102, duration: 0 },
            { id: "eid85", tween: [ "style", "${_tau_pupilleft}", "height", '9px', { fromValue: '9px'}], position: 1500, duration: 0 },
            { id: "eid117", tween: [ "style", "${_tau_pupilleft}", "height", '9px', { fromValue: '9px'}], position: 2102, duration: 0 },
            { id: "eid102", tween: [ "style", "${_tau_pupilright}", "left", '130px', { fromValue: '121px'}], position: 1500, duration: 602 },
            { id: "eid133", tween: [ "style", "${_tau_pupilright}", "left", '121px', { fromValue: '130px'}], position: 2926, duration: 602 },
            { id: "eid781", tween: [ "style", "${_tau_pupilright}", "left", '126px', { fromValue: '121px'}], position: 14136, duration: 250, easing: "easeInOutBounce" },
            { id: "eid789", tween: [ "style", "${_tau_pupilright}", "left", '121px', { fromValue: '126px'}], position: 14838, duration: 241, easing: "easeInOutBounce" },
            { id: "eid494", tween: [ "transform", "${_EllipseCopy}", "scaleX", '1', { fromValue: '1'}], position: 14386, duration: 0, easing: "easeOutQuad" },
            { id: "eid420", tween: [ "transform", "${_Tauontribrille}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 7810, duration: 377 },
            { id: "eid421", tween: [ "transform", "${_Tauontribrille}", "rotateZ", '-2deg', { fromValue: '5deg'}], position: 8187, duration: 431 },
            { id: "eid422", tween: [ "transform", "${_Tauontribrille}", "rotateZ", '4deg', { fromValue: '-2deg'}], position: 8618, duration: 417 },
            { id: "eid423", tween: [ "transform", "${_Tauontribrille}", "rotateZ", '-3deg', { fromValue: '4deg'}], position: 9035, duration: 414 },
            { id: "eid427", tween: [ "transform", "${_Tauontribrille}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 9449, duration: 169 },
            { id: "eid441", tween: [ "transform", "${_Tauontribrille}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 9618, duration: 250 },
            { id: "eid443", tween: [ "transform", "${_Tauontribrille}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 9868, duration: 250, easing: "easeOutQuad" },
            { id: "eid190", tween: [ "style", "${_RoundRect2}", "left", '37px', { fromValue: '46px'}], position: 2102, duration: 148 },
            { id: "eid168", tween: [ "style", "${_RoundRect2}", "left", '43px', { fromValue: '37px'}], position: 2250, duration: 143, easing: "easeInQuad" },
            { id: "eid181", tween: [ "style", "${_RoundRect2}", "left", '37px', { fromValue: '43px'}], position: 2393, duration: 411, easing: "easeOutQuad" },
            { id: "eid187", tween: [ "style", "${_RoundRect2}", "left", '43px', { fromValue: '37px'}], position: 2804, duration: 122 },
            { id: "eid92", tween: [ "transform", "${_tau_irisright}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1500, duration: 0 },
            { id: "eid122", tween: [ "transform", "${_tau_irisright}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 2102, duration: 0 },
            { id: "eid101", tween: [ "style", "${_tau_pupilright}", "top", '62px', { fromValue: '60px'}], position: 1500, duration: 602 },
            { id: "eid134", tween: [ "style", "${_tau_pupilright}", "top", '60px', { fromValue: '62px'}], position: 2926, duration: 602 },
            { id: "eid782", tween: [ "style", "${_tau_pupilright}", "top", '59px', { fromValue: '60px'}], position: 14136, duration: 250, easing: "easeInOutBounce" },
            { id: "eid790", tween: [ "style", "${_tau_pupilright}", "top", '60px', { fromValue: '59px'}], position: 14838, duration: 241, easing: "easeInOutBounce" },
            { id: "eid417", tween: [ "style", "${_Tauontribrille}", "top", '11px', { fromValue: '12px'}], position: 7868, duration: 1167, easing: "easeInOutBounce" },
            { id: "eid425", tween: [ "style", "${_Tauontribrille}", "top", '12px', { fromValue: '11px'}], position: 9035, duration: 414 },
            { id: "eid502", tween: [ "style", "${_EllipseCopy}", "top", '66px', { fromValue: '66px'}], position: 15211, duration: 0, easing: "easeInBounce" },
            { id: "eid189", tween: [ "style", "${_RoundRect2Copy}", "top", '-45px', { fromValue: '29px'}], position: 2393, duration: 148 },
            { id: "eid164", tween: [ "style", "${_RoundRect2Copy}", "top", '32px', { fromValue: '-45px'}], position: 2541, duration: 143, easing: "easeInQuad" },
            { id: "eid177", tween: [ "style", "${_RoundRect2Copy}", "top", '-49px', { fromValue: '32px'}], position: 2869, duration: 226, easing: "easeOutQuad" },
            { id: "eid183", tween: [ "style", "${_RoundRect2Copy}", "top", '31px', { fromValue: '-49px'}], position: 3095, duration: 122 },
            { id: "eid676", tween: [ "style", "${_tauontribody}", "-webkit-transform-origin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 13250, duration: 0, easing: "easeOutQuad" },
            { id: "eid1153", tween: [ "style", "${_tauontribody}", "-moz-transform-origin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 13250, duration: 0, easing: "easeOutQuad" },
            { id: "eid1154", tween: [ "style", "${_tauontribody}", "-ms-transform-origin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 13250, duration: 0, easing: "easeOutQuad" },
            { id: "eid1155", tween: [ "style", "${_tauontribody}", "msTransformOrigin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 13250, duration: 0, easing: "easeOutQuad" },
            { id: "eid1156", tween: [ "style", "${_tauontribody}", "-o-transform-origin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 13250, duration: 0, easing: "easeOutQuad" },
            { id: "eid461", tween: [ "transform", "${_Ellipse}", "scaleX", '1', { fromValue: '1'}], position: 14386, duration: 0, easing: "easeOutQuad" },
            { id: "eid188", tween: [ "style", "${_RoundRect2Copy}", "left", '103px', { fromValue: '111px'}], position: 2393, duration: 148 },
            { id: "eid165", tween: [ "style", "${_RoundRect2Copy}", "left", '110px', { fromValue: '103px'}], position: 2541, duration: 143, easing: "easeInQuad" },
            { id: "eid178", tween: [ "style", "${_RoundRect2Copy}", "left", '103px', { fromValue: '110px'}], position: 2684, duration: 411, easing: "easeOutQuad" },
            { id: "eid184", tween: [ "style", "${_RoundRect2Copy}", "left", '110px', { fromValue: '103px'}], position: 3095, duration: 122 },
            { id: "eid151", tween: [ "style", "${_RoundRect2Copy}", "height", '224px', { fromValue: '10px'}], position: 2393, duration: 148 },
            { id: "eid163", tween: [ "style", "${_RoundRect2Copy}", "height", '4px', { fromValue: '224px'}], position: 2541, duration: 143, easing: "easeInQuad" },
            { id: "eid173", tween: [ "style", "${_RoundRect2Copy}", "height", '6px', { fromValue: '4px'}], position: 2684, duration: 185 },
            { id: "eid176", tween: [ "style", "${_RoundRect2Copy}", "height", '237px', { fromValue: '6px'}], position: 2869, duration: 226, easing: "easeOutQuad" },
            { id: "eid182", tween: [ "style", "${_RoundRect2Copy}", "height", '7px', { fromValue: '237px'}], position: 3095, duration: 122 },
            { id: "eid498", tween: [ "style", "${_EllipseCopy}", "-webkit-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 14386, duration: 0, easing: "easeOutQuad" },
            { id: "eid1157", tween: [ "style", "${_EllipseCopy}", "-moz-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 14386, duration: 0, easing: "easeOutQuad" },
            { id: "eid1158", tween: [ "style", "${_EllipseCopy}", "-ms-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 14386, duration: 0, easing: "easeOutQuad" },
            { id: "eid1159", tween: [ "style", "${_EllipseCopy}", "msTransformOrigin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 14386, duration: 0, easing: "easeOutQuad" },
            { id: "eid1160", tween: [ "style", "${_EllipseCopy}", "-o-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 14386, duration: 0, easing: "easeOutQuad" },
            { id: "eid197", tween: [ "style", "${_RoundRect2Copy}", "border-bottom-left-radius", [33,33], { valueTemplate: '@@0@@px @@1@@px', fromValue: [33,33]}], position: 2612, duration: 0 },
            { id: "eid105", tween: [ "style", "${_tau_irisleft}", "left", '59px', { fromValue: '49px'}], position: 1500, duration: 602 },
            { id: "eid139", tween: [ "style", "${_tau_irisleft}", "left", '49px', { fromValue: '59px'}], position: 2926, duration: 602 },
            { id: "eid797", tween: [ "style", "${_tau_irisleft}", "left", '55px', { fromValue: '49px'}], position: 14136, duration: 250, easing: "easeInOutBounce" },
            { id: "eid807", tween: [ "style", "${_tau_irisleft}", "left", '49px', { fromValue: '55px'}], position: 14838, duration: 241, easing: "easeInOutBounce" },
            { id: "eid414", tween: [ "style", "${_Tauontribrille}", "left", '6px', { fromValue: '0px'}], position: 7868, duration: 385 },
            { id: "eid415", tween: [ "style", "${_Tauontribrille}", "left", '-8px', { fromValue: '6px'}], position: 8253, duration: 365 },
            { id: "eid416", tween: [ "style", "${_Tauontribrille}", "left", '4px', { fromValue: '-8px'}], position: 8618, duration: 417 },
            { id: "eid418", tween: [ "style", "${_Tauontribrille}", "left", '0px', { fromValue: '4px'}], position: 9035, duration: 414 },
            { id: "eid428", tween: [ "style", "${_Tauontribrille}", "left", '0px', { fromValue: '0px'}], position: 9618, duration: 0 },
            { id: "eid678", tween: [ "transform", "${_tauontribody}", "scaleX", '1', { fromValue: '1'}], position: 13250, duration: 0, easing: "easeOutQuad" },
            { id: "eid84", tween: [ "style", "${_tau_pupilleft}", "width", '11px', { fromValue: '11px'}], position: 1500, duration: 0 },
            { id: "eid120", tween: [ "style", "${_tau_pupilleft}", "width", '11px', { fromValue: '11px'}], position: 2102, duration: 0 },
            { id: "eid106", tween: [ "style", "${_tau_irisleft}", "top", '47px', { fromValue: '42px'}], position: 1500, duration: 602 },
            { id: "eid140", tween: [ "style", "${_tau_irisleft}", "top", '42px', { fromValue: '47px'}], position: 2926, duration: 602 },
            { id: "eid798", tween: [ "style", "${_tau_irisleft}", "top", '40px', { fromValue: '42px'}], position: 14136, duration: 250, easing: "easeInOutBounce" },
            { id: "eid808", tween: [ "style", "${_tau_irisleft}", "top", '42px', { fromValue: '40px'}], position: 14838, duration: 241, easing: "easeInOutBounce" }         ]
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
})(jQuery, AdobeEdge, "EDGE-6428867");
