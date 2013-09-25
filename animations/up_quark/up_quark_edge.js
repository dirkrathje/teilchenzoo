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
            id:'up_quark',
            type:'rect',
            rect:['111','99','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'up_quark',
            symbolName:'up_quark'
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
         "${_up_quark}": [
            ["transform", "scaleX", '0.79518'],
            ["style", "top", '72px'],
            ["transform", "scaleY", '0.79518'],
            ["style", "left", '44px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 8555,
         autoPlay: true,
         timeline: [
            { id: "eid596", tween: [ "transform", "${_up_quark}", "scaleX", '0.79518', { fromValue: '0.79518'}], position: 8000, duration: 0 },
            { id: "eid597", tween: [ "transform", "${_up_quark}", "scaleY", '0.79518', { fromValue: '0.79518'}], position: 8000, duration: 0 },
            { id: "eid602", tween: [ "style", "${_up_quark}", "top", '72px', { fromValue: '72px'}], position: 8000, duration: 0 },
            { id: "eid600", tween: [ "style", "${_up_quark}", "left", '44px', { fromValue: '44px'}], position: 8000, duration: 0 },
            { id: "eid574", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_up_quark}', [] ], ""], position: 8555 }         ]
      }
   }
},
"up_quark": {
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
      rect: ['-53px','-38px','466','334','auto','auto'],
      id: 'Group',
      type: 'group',
      transform: [[],[],[],['0.77447','0.77447']],
      c: [
      {
         id: 'upbody',
         type: 'image',
         rect: ['78px','0px','252px','290px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/upbody.png','0px','0px']
      },
      {
         id: 'upleftarm',
         type: 'image',
         rect: ['0px','46px','172px','133px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/upleftarm.png','0px','0px']
      },
      {
         id: 'uprightarm',
         type: 'image',
         rect: ['270px','83px','196px','79px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/uprightarm.png','0px','0px']
      },
      {
         id: 'upleftleg',
         type: 'image',
         rect: ['41px','198px','137px','136px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/upleftleg.png','0px','0px']
      },
      {
         id: 'uprightleg',
         type: 'image',
         rect: ['209px','201px','166px','133px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/uprightleg.png','0px','0px']
      },
      {
         id: 'upmouth',
         type: 'image',
         rect: ['182px','100px','89px','28px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/upmouth.png','0px','0px']
      },
      {
         id: 'upleftiris',
         type: 'image',
         rect: ['113px','23px','34px','42px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/upleftiris.png','0px','0px']
      },
      {
         id: 'uprightiris',
         type: 'image',
         rect: ['266px','25px','31px','35px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/uprightiris.png','0px','0px']
      },
      {
         id: 'upleftpupil',
         type: 'image',
         rect: ['123px','45px','14px','14px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/upleftpupil.png','0px','0px']
      },
      {
         id: 'uprightpupil',
         type: 'image',
         rect: ['274px','40px','14px','14px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/uprightpupil.png','0px','0px']
      }]
   },
   {
      rect: ['193px','10px','47px','64px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(149,188,48,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_upleftiris}": [
            ["style", "top", '23px'],
            ["style", "left", '113px']
         ],
         "${_upbody}": [
            ["style", "height", '290px'],
            ["style", "top", '0px'],
            ["style", "left", '78px'],
            ["style", "width", '252px']
         ],
         "${_upmouth}": [
            ["style", "height", '28px'],
            ["style", "top", '101px'],
            ["style", "left", '181px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_uprightpupil}": [
            ["style", "top", '40px'],
            ["style", "left", '274px']
         ],
         "${_upleftpupil}": [
            ["style", "top", '45px'],
            ["style", "left", '123px']
         ],
         "${_Group}": [
            ["transform", "scaleX", '0.77447'],
            ["transform", "scaleY", '0.77447'],
            ["style", "left", '-53px'],
            ["style", "top", '-38px']
         ],
         "${_upleftleg}": [
            ["style", "top", '198px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '136px'],
            ["style", "left", '41px'],
            ["style", "width", '137px']
         ],
         "${_Ellipse}": [
            ["style", "top", '10px'],
            ["color", "background-color", 'rgba(149,188,48,1.00)'],
            ["style", "height", '2px'],
            ["style", "opacity", '0'],
            ["style", "left", '201px'],
            ["style", "width", '39px']
         ],
         "${_uprightleg}": [
            ["style", "top", '201px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '133px'],
            ["style", "left", '209px'],
            ["style", "width", '166px']
         ],
         "${symbolSelector}": [
            ["style", "height", '259px'],
            ["style", "width", '361px']
         ],
         "${_upleftarm}": [
            ["style", "-webkit-transform-origin", [70.18,58.26], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [70.18,58.26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [70.18,58.26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [70.18,58.26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [70.18,58.26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '50px'],
            ["style", "left", '3px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_uprightarm}": [
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '84px'],
            ["style", "left", '267px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_uprightiris}": [
            ["style", "top", '25px'],
            ["style", "left", '266px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 8000,
         autoPlay: true,
         timeline: [
            { id: "eid223", tween: [ "transform", "${_upmouth}", "rotateZ", '-12deg', { fromValue: '0deg'}], position: 3736, duration: 156 },
            { id: "eid269", tween: [ "transform", "${_upmouth}", "rotateZ", '0deg', { fromValue: '-12deg'}], position: 4577, duration: 156 },
            { id: "eid3", tween: [ "style", "${_upbody}", "width", '252px', { fromValue: '252px'}], position: 250, duration: 0 },
            { id: "eid59", tween: [ "style", "${_upmouth}", "left", '181px', { fromValue: '181px'}], position: 137, duration: 0 },
            { id: "eid219", tween: [ "style", "${_upmouth}", "left", '171px', { fromValue: '181px'}], position: 3736, duration: 156 },
            { id: "eid268", tween: [ "style", "${_upmouth}", "left", '181px', { fromValue: '171px'}], position: 4577, duration: 156 },
            { id: "eid47", tween: [ "style", "${_uprightleg}", "left", '221px', { fromValue: '209px'}], position: 137, duration: 558 },
            { id: "eid72", tween: [ "style", "${_uprightleg}", "left", '192px', { fromValue: '221px'}], position: 695, duration: 105, easing: "easeInSine" },
            { id: "eid154", tween: [ "style", "${_uprightleg}", "left", '209px', { fromValue: '192px'}], position: 1379, duration: 47, easing: "easeInQuad" },
            { id: "eid30", tween: [ "style", "${_upbody}", "top", '29px', { fromValue: '0px'}], position: 250, duration: 445 },
            { id: "eid66", tween: [ "style", "${_upbody}", "top", '0px', { fromValue: '29px'}], position: 695, duration: 164, easing: "easeInSine" },
            { id: "eid135", tween: [ "style", "${_upbody}", "top", '29px', { fromValue: '0px'}], position: 1164, duration: 164 },
            { id: "eid134", tween: [ "style", "${_upbody}", "top", '0px', { fromValue: '29px'}], position: 1328, duration: 445 },
            { id: "eid45", tween: [ "style", "${_upleftleg}", "left", '32px', { fromValue: '41px'}], position: 137, duration: 558 },
            { id: "eid77", tween: [ "style", "${_upleftleg}", "left", '54px', { fromValue: '32px'}], position: 695, duration: 105, easing: "easeInSine" },
            { id: "eid150", tween: [ "style", "${_upleftleg}", "left", '41px', { fromValue: '54px'}], position: 1379, duration: 47, easing: "easeInQuad" },
            { id: "eid60", tween: [ "style", "${_upmouth}", "top", '129px', { fromValue: '101px'}], position: 137, duration: 558 },
            { id: "eid180", tween: [ "style", "${_upmouth}", "top", '101px', { fromValue: '129px'}], position: 1269, duration: 558, easing: "easeInQuad" },
            { id: "eid220", tween: [ "style", "${_upmouth}", "top", '98px', { fromValue: '101px'}], position: 3736, duration: 156 },
            { id: "eid267", tween: [ "style", "${_upmouth}", "top", '101px', { fromValue: '98px'}], position: 4577, duration: 156 },
            { id: "eid31", tween: [ "style", "${_upbody}", "height", '262px', { fromValue: '290px'}], position: 250, duration: 445 },
            { id: "eid65", tween: [ "style", "${_upbody}", "height", '290px', { fromValue: '262px'}], position: 695, duration: 164, easing: "easeInSine" },
            { id: "eid137", tween: [ "style", "${_upbody}", "height", '262px', { fromValue: '290px'}], position: 1164, duration: 164 },
            { id: "eid136", tween: [ "style", "${_upbody}", "height", '290px', { fromValue: '262px'}], position: 1328, duration: 445 },
            { id: "eid20", tween: [ "style", "${_uprightpupil}", "top", '53px', { fromValue: '40px'}], position: 137, duration: 181 },
            { id: "eid25", tween: [ "style", "${_uprightpupil}", "top", '82px', { fromValue: '53px'}], position: 318, duration: 377 },
            { id: "eid83", tween: [ "style", "${_uprightpupil}", "top", '63px', { fromValue: '82px'}], position: 695, duration: 305, easing: "easeInSine" },
            { id: "eid165", tween: [ "style", "${_uprightpupil}", "top", '82px', { fromValue: '63px'}], position: 1051, duration: 305 },
            { id: "eid164", tween: [ "style", "${_uprightpupil}", "top", '53px', { fromValue: '82px'}], position: 1356, duration: 377 },
            { id: "eid163", tween: [ "style", "${_uprightpupil}", "top", '40px', { fromValue: '53px'}], position: 1733, duration: 181 },
            { id: "eid212", tween: [ "style", "${_uprightpupil}", "top", '50px', { fromValue: '40px'}], position: 3550, duration: 261 },
            { id: "eid287", tween: [ "style", "${_uprightpupil}", "top", '40px', { fromValue: '50px'}], position: 4469, duration: 261 },
            { id: "eid372", tween: [ "style", "${_uprightpupil}", "top", '58px', { fromValue: '40px'}], position: 6110, duration: 311, easing: "easeInOutQuad" },
            { id: "eid380", tween: [ "style", "${_uprightpupil}", "top", '48px', { fromValue: '58px'}], position: 6421, duration: 273, easing: "swing" },
            { id: "eid390", tween: [ "style", "${_uprightpupil}", "top", '58px', { fromValue: '48px'}], position: 7008, duration: 299, easing: "swing" },
            { id: "eid404", tween: [ "style", "${_uprightpupil}", "top", '46px', { fromValue: '58px'}], position: 7409, duration: 201 },
            { id: "eid489", tween: [ "style", "${_uprightpupil}", "top", '40px', { fromValue: '46px'}], position: 7798, duration: 202 },
            { id: "eid17", tween: [ "style", "${_upleftpupil}", "left", '125px', { fromValue: '123px'}], position: 137, duration: 181 },
            { id: "eid166", tween: [ "style", "${_upleftpupil}", "left", '123px', { fromValue: '125px'}], position: 1733, duration: 181 },
            { id: "eid209", tween: [ "style", "${_upleftpupil}", "left", '125px', { fromValue: '123px'}], position: 3550, duration: 261 },
            { id: "eid288", tween: [ "style", "${_upleftpupil}", "left", '123px', { fromValue: '125px'}], position: 4469, duration: 261 },
            { id: "eid369", tween: [ "style", "${_upleftpupil}", "left", '112px', { fromValue: '123px'}], position: 6110, duration: 311, easing: "easeInOutQuad" },
            { id: "eid377", tween: [ "style", "${_upleftpupil}", "left", '138px', { fromValue: '112px'}], position: 6421, duration: 273, easing: "swing" },
            { id: "eid391", tween: [ "style", "${_upleftpupil}", "left", '112px', { fromValue: '138px'}], position: 7008, duration: 299, easing: "swing" },
            { id: "eid401", tween: [ "style", "${_upleftpupil}", "left", '125px', { fromValue: '112px'}], position: 7409, duration: 201 },
            { id: "eid484", tween: [ "style", "${_upleftpupil}", "left", '123px', { fromValue: '125px'}], position: 7798, duration: 202 },
            { id: "eid46", tween: [ "style", "${_upleftleg}", "top", '195px', { fromValue: '198px'}], position: 137, duration: 558 },
            { id: "eid78", tween: [ "style", "${_upleftleg}", "top", '215px', { fromValue: '195px'}], position: 695, duration: 105, easing: "easeInSine" },
            { id: "eid148", tween: [ "style", "${_upleftleg}", "top", '198px', { fromValue: '215px'}], position: 1379, duration: 108, easing: "easeInQuad" },
            { id: "eid214", tween: [ "style", "${_upmouth}", "height", '62px', { fromValue: '28px'}], position: 3736, duration: 156 },
            { id: "eid266", tween: [ "style", "${_upmouth}", "height", '28px', { fromValue: '62px'}], position: 4577, duration: 156 },
            { id: "eid15", tween: [ "style", "${_upleftiris}", "left", '115px', { fromValue: '113px'}], position: 137, duration: 181 },
            { id: "eid174", tween: [ "style", "${_upleftiris}", "left", '113px', { fromValue: '115px'}], position: 1733, duration: 181 },
            { id: "eid207", tween: [ "style", "${_upleftiris}", "left", '114px', { fromValue: '113px'}], position: 3550, duration: 261 },
            { id: "eid292", tween: [ "style", "${_upleftiris}", "left", '113px', { fromValue: '114px'}], position: 4469, duration: 261 },
            { id: "eid367", tween: [ "style", "${_upleftiris}", "left", '107px', { fromValue: '113px'}], position: 6110, duration: 311, easing: "easeInOutQuad" },
            { id: "eid375", tween: [ "style", "${_upleftiris}", "left", '122px', { fromValue: '107px'}], position: 6421, duration: 273, easing: "swing" },
            { id: "eid395", tween: [ "style", "${_upleftiris}", "left", '107px', { fromValue: '122px'}], position: 7008, duration: 299, easing: "swing" },
            { id: "eid399", tween: [ "style", "${_upleftiris}", "left", '115px', { fromValue: '107px'}], position: 7409, duration: 201 },
            { id: "eid490", tween: [ "style", "${_upleftiris}", "left", '113px', { fromValue: '115px'}], position: 7798, duration: 202 },
            { id: "eid75", tween: [ "transform", "${_uprightleg}", "rotateZ", '19deg', { fromValue: '0deg'}], position: 695, duration: 105, easing: "easeInSine" },
            { id: "eid160", tween: [ "transform", "${_uprightleg}", "rotateZ", '0deg', { fromValue: '19deg'}], position: 1328, duration: 51 },
            { id: "eid1", tween: [ "style", "${_upbody}", "left", '78px', { fromValue: '78px'}], position: 250, duration: 0 },
            { id: "eid520", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0'}], position: 7409, duration: 60 },
            { id: "eid522", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 7858, duration: 93 },
            { id: "eid79", tween: [ "transform", "${_upleftleg}", "rotateZ", '-18deg', { fromValue: '0deg'}], position: 695, duration: 105, easing: "easeInSine" },
            { id: "eid151", tween: [ "transform", "${_upleftleg}", "rotateZ", '0deg', { fromValue: '-18deg'}], position: 1328, duration: 51 },
            { id: "eid242", tween: [ "transform", "${_upleftarm}", "rotateZ", '6deg', { fromValue: '0deg'}], position: 3811, duration: 158 },
            { id: "eid243", tween: [ "transform", "${_upleftarm}", "rotateZ", '0deg', { fromValue: '6deg'}], position: 3969, duration: 141 },
            { id: "eid244", tween: [ "transform", "${_upleftarm}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 4110, duration: 163 },
            { id: "eid250", tween: [ "transform", "${_upleftarm}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 4273, duration: 141 },
            { id: "eid251", tween: [ "transform", "${_upleftarm}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 4414, duration: 163 },
            { id: "eid249", tween: [ "transform", "${_upleftarm}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 4577, duration: 158 },
            { id: "eid260", tween: [ "transform", "${_uprightarm}", "rotateZ", '-14deg', { fromValue: '0deg'}], position: 3811, duration: 158, easing: "easeInQuad" },
            { id: "eid261", tween: [ "transform", "${_uprightarm}", "rotateZ", '0deg', { fromValue: '-14deg'}], position: 3969, duration: 141, easing: "easeOutQuad" },
            { id: "eid295", tween: [ "transform", "${_uprightarm}", "rotateZ", '14deg', { fromValue: '0deg'}], position: 4110, duration: 163, easing: "easeOutQuad" },
            { id: "eid296", tween: [ "transform", "${_uprightarm}", "rotateZ", '0deg', { fromValue: '14deg'}], position: 4273, duration: 141, easing: "easeOutQuad" },
            { id: "eid298", tween: [ "transform", "${_uprightarm}", "rotateZ", '14deg', { fromValue: '0deg'}], position: 4414, duration: 163, easing: "easeOutQuad" },
            { id: "eid299", tween: [ "transform", "${_uprightarm}", "rotateZ", '0deg', { fromValue: '14deg'}], position: 4577, duration: 158, easing: "easeOutQuad" },
            { id: "eid36", tween: [ "style", "${_uprightleg}", "width", '166px', { fromValue: '166px'}], position: 137, duration: 0 },
            { id: "eid411", tween: [ "style", "${_Ellipse}", "width", '47px', { fromValue: '39px'}], position: 7506, duration: 156 },
            { id: "eid418", tween: [ "style", "${_Ellipse}", "width", '39px', { fromValue: '47px'}], position: 7662, duration: 149 },
            { id: "eid13", tween: [ "style", "${_uprightiris}", "left", '268px', { fromValue: '266px'}], position: 137, duration: 181 },
            { id: "eid170", tween: [ "style", "${_uprightiris}", "left", '266px', { fromValue: '268px'}], position: 1733, duration: 181 },
            { id: "eid205", tween: [ "style", "${_uprightiris}", "left", '267px', { fromValue: '266px'}], position: 3550, duration: 261 },
            { id: "eid290", tween: [ "style", "${_uprightiris}", "left", '266px', { fromValue: '267px'}], position: 4469, duration: 261 },
            { id: "eid365", tween: [ "style", "${_uprightiris}", "left", '260px', { fromValue: '266px'}], position: 6110, duration: 311, easing: "easeInOutQuad" },
            { id: "eid373", tween: [ "style", "${_uprightiris}", "left", '275px', { fromValue: '260px'}], position: 6421, duration: 273, easing: "swing" },
            { id: "eid393", tween: [ "style", "${_uprightiris}", "left", '260px', { fromValue: '275px'}], position: 7008, duration: 299, easing: "swing" },
            { id: "eid397", tween: [ "style", "${_uprightiris}", "left", '268px', { fromValue: '260px'}], position: 7409, duration: 201 },
            { id: "eid487", tween: [ "style", "${_uprightiris}", "left", '266px', { fromValue: '268px'}], position: 7798, duration: 202 },
            { id: "eid16", tween: [ "style", "${_upleftiris}", "top", '36px', { fromValue: '23px'}], position: 137, duration: 181 },
            { id: "eid28", tween: [ "style", "${_upleftiris}", "top", '65px', { fromValue: '36px'}], position: 318, duration: 377 },
            { id: "eid81", tween: [ "style", "${_upleftiris}", "top", '46px', { fromValue: '65px'}], position: 695, duration: 305, easing: "easeInSine" },
            { id: "eid177", tween: [ "style", "${_upleftiris}", "top", '65px', { fromValue: '46px'}], position: 1051, duration: 305 },
            { id: "eid176", tween: [ "style", "${_upleftiris}", "top", '36px', { fromValue: '65px'}], position: 1356, duration: 377 },
            { id: "eid175", tween: [ "style", "${_upleftiris}", "top", '23px', { fromValue: '36px'}], position: 1733, duration: 181 },
            { id: "eid208", tween: [ "style", "${_upleftiris}", "top", '39px', { fromValue: '23px'}], position: 3550, duration: 261 },
            { id: "eid293", tween: [ "style", "${_upleftiris}", "top", '23px', { fromValue: '39px'}], position: 4469, duration: 261 },
            { id: "eid368", tween: [ "style", "${_upleftiris}", "top", '42px', { fromValue: '23px'}], position: 6110, duration: 311, easing: "easeInOutQuad" },
            { id: "eid376", tween: [ "style", "${_upleftiris}", "top", '35px', { fromValue: '42px'}], position: 6421, duration: 273, easing: "swing" },
            { id: "eid396", tween: [ "style", "${_upleftiris}", "top", '42px', { fromValue: '35px'}], position: 7008, duration: 299, easing: "swing" },
            { id: "eid400", tween: [ "style", "${_upleftiris}", "top", '33px', { fromValue: '42px'}], position: 7409, duration: 201 },
            { id: "eid491", tween: [ "style", "${_upleftiris}", "top", '23px', { fromValue: '33px'}], position: 7798, duration: 202 },
            { id: "eid19", tween: [ "style", "${_uprightpupil}", "left", '276px', { fromValue: '274px'}], position: 137, duration: 181 },
            { id: "eid162", tween: [ "style", "${_uprightpupil}", "left", '274px', { fromValue: '276px'}], position: 1733, duration: 181 },
            { id: "eid211", tween: [ "style", "${_uprightpupil}", "left", '276px', { fromValue: '274px'}], position: 3550, duration: 261 },
            { id: "eid286", tween: [ "style", "${_uprightpupil}", "left", '274px', { fromValue: '276px'}], position: 4469, duration: 261 },
            { id: "eid371", tween: [ "style", "${_uprightpupil}", "left", '263px', { fromValue: '274px'}], position: 6110, duration: 311, easing: "easeInOutQuad" },
            { id: "eid379", tween: [ "style", "${_uprightpupil}", "left", '289px', { fromValue: '263px'}], position: 6421, duration: 273, easing: "swing" },
            { id: "eid389", tween: [ "style", "${_uprightpupil}", "left", '263px', { fromValue: '289px'}], position: 7008, duration: 299, easing: "swing" },
            { id: "eid403", tween: [ "style", "${_uprightpupil}", "left", '277px', { fromValue: '263px'}], position: 7409, duration: 201 },
            { id: "eid483", tween: [ "style", "${_uprightpupil}", "left", '274px', { fromValue: '277px'}], position: 7798, duration: 202 },
            { id: "eid61", tween: [ "style", "${_Group}", "left", '-53px', { fromValue: '-53px'}], position: 695, duration: 0 },
            { id: "eid409", tween: [ "style", "${_Ellipse}", "height", '64px', { fromValue: '2px'}], position: 7506, duration: 156 },
            { id: "eid416", tween: [ "style", "${_Ellipse}", "height", '2px', { fromValue: '64px'}], position: 7662, duration: 149 },
            { id: "eid54", tween: [ "style", "${_upleftarm}", "left", '5px', { fromValue: '3px'}], position: 137, duration: 558 },
            { id: "eid68", tween: [ "style", "${_upleftarm}", "left", '-28px', { fromValue: '5px'}], position: 695, duration: 387, easing: "easeOutQuad" },
            { id: "eid139", tween: [ "style", "${_upleftarm}", "left", '5px', { fromValue: '-28px'}], position: 1164, duration: 164 },
            { id: "eid138", tween: [ "style", "${_upleftarm}", "left", '3px', { fromValue: '5px'}], position: 1328, duration: 558 },
            { id: "eid53", tween: [ "style", "${_uprightarm}", "left", '264px', { fromValue: '267px'}], position: 137, duration: 558 },
            { id: "eid70", tween: [ "style", "${_uprightarm}", "left", '265px', { fromValue: '264px'}], position: 695, duration: 164, easing: "easeInSine" },
            { id: "eid143", tween: [ "style", "${_uprightarm}", "left", '264px', { fromValue: '265px'}], position: 1164, duration: 164 },
            { id: "eid142", tween: [ "style", "${_uprightarm}", "left", '267px', { fromValue: '264px'}], position: 1328, duration: 558 },
            { id: "eid410", tween: [ "style", "${_Ellipse}", "left", '193px', { fromValue: '201px'}], position: 7506, duration: 156 },
            { id: "eid417", tween: [ "style", "${_Ellipse}", "left", '201px', { fromValue: '193px'}], position: 7662, duration: 149 },
            { id: "eid52", tween: [ "style", "${_uprightarm}", "top", '104px', { fromValue: '84px'}], position: 250, duration: 445 },
            { id: "eid71", tween: [ "style", "${_uprightarm}", "top", '85px', { fromValue: '104px'}], position: 695, duration: 164, easing: "easeInSine" },
            { id: "eid145", tween: [ "style", "${_uprightarm}", "top", '104px', { fromValue: '85px'}], position: 1164, duration: 164 },
            { id: "eid144", tween: [ "style", "${_uprightarm}", "top", '84px', { fromValue: '104px'}], position: 1328, duration: 445 },
            { id: "eid64", tween: [ "style", "${_Group}", "top", '-124px', { fromValue: '-38px'}], position: 695, duration: 305, easing: "easeInSine" },
            { id: "eid179", tween: [ "style", "${_Group}", "top", '-76px', { fromValue: '-124px'}], position: 1000, duration: 328, easing: "easeInQuad" },
            { id: "eid178", tween: [ "style", "${_Group}", "top", '-38px', { fromValue: '-76px'}], position: 1328, duration: 223, easing: "easeOutQuad" },
            { id: "eid50", tween: [ "style", "${_upleftarm}", "top", '69px', { fromValue: '50px'}], position: 250, duration: 445 },
            { id: "eid69", tween: [ "style", "${_upleftarm}", "top", '24px', { fromValue: '69px'}], position: 695, duration: 387, easing: "easeOutQuad" },
            { id: "eid141", tween: [ "style", "${_upleftarm}", "top", '69px', { fromValue: '24px'}], position: 1164, duration: 164 },
            { id: "eid140", tween: [ "style", "${_upleftarm}", "top", '50px', { fromValue: '69px'}], position: 1328, duration: 445 },
            { id: "eid38", tween: [ "style", "${_uprightleg}", "height", '133px', { fromValue: '133px'}], position: 137, duration: 0 },
            { id: "eid241", tween: [ "style", "${_upleftarm}", "-webkit-transform-origin", [70.18,58.26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [70.18,58.26]}], position: 3811, duration: 0 },
            { id: "eid603", tween: [ "style", "${_upleftarm}", "-moz-transform-origin", [70.18,58.26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [70.18,58.26]}], position: 3811, duration: 0 },
            { id: "eid604", tween: [ "style", "${_upleftarm}", "-ms-transform-origin", [70.18,58.26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [70.18,58.26]}], position: 3811, duration: 0 },
            { id: "eid605", tween: [ "style", "${_upleftarm}", "msTransformOrigin", [70.18,58.26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [70.18,58.26]}], position: 3811, duration: 0 },
            { id: "eid606", tween: [ "style", "${_upleftarm}", "-o-transform-origin", [70.18,58.26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [70.18,58.26]}], position: 3811, duration: 0 },
            { id: "eid18", tween: [ "style", "${_upleftpupil}", "top", '58px', { fromValue: '45px'}], position: 137, duration: 181 },
            { id: "eid23", tween: [ "style", "${_upleftpupil}", "top", '87px', { fromValue: '58px'}], position: 318, duration: 377 },
            { id: "eid82", tween: [ "style", "${_upleftpupil}", "top", '68px', { fromValue: '87px'}], position: 695, duration: 305, easing: "easeInSine" },
            { id: "eid169", tween: [ "style", "${_upleftpupil}", "top", '87px', { fromValue: '68px'}], position: 1051, duration: 305 },
            { id: "eid168", tween: [ "style", "${_upleftpupil}", "top", '58px', { fromValue: '87px'}], position: 1356, duration: 377 },
            { id: "eid167", tween: [ "style", "${_upleftpupil}", "top", '45px', { fromValue: '58px'}], position: 1733, duration: 181 },
            { id: "eid210", tween: [ "style", "${_upleftpupil}", "top", '55px', { fromValue: '45px'}], position: 3550, duration: 261 },
            { id: "eid289", tween: [ "style", "${_upleftpupil}", "top", '45px', { fromValue: '55px'}], position: 4469, duration: 261 },
            { id: "eid370", tween: [ "style", "${_upleftpupil}", "top", '61px', { fromValue: '45px'}], position: 6110, duration: 311, easing: "easeInOutQuad" },
            { id: "eid378", tween: [ "style", "${_upleftpupil}", "top", '53px', { fromValue: '61px'}], position: 6421, duration: 273, easing: "swing" },
            { id: "eid392", tween: [ "style", "${_upleftpupil}", "top", '61px', { fromValue: '53px'}], position: 7008, duration: 299, easing: "swing" },
            { id: "eid402", tween: [ "style", "${_upleftpupil}", "top", '46px', { fromValue: '61px'}], position: 7409, duration: 201 },
            { id: "eid485", tween: [ "style", "${_upleftpupil}", "top", '45px', { fromValue: '46px'}], position: 7798, duration: 202 },
            { id: "eid259", tween: [ "style", "${_uprightarm}", "-webkit-transform-origin", [19.56,47.47], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 3811, duration: 158 },
            { id: "eid607", tween: [ "style", "${_uprightarm}", "-moz-transform-origin", [19.56,47.47], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 3811, duration: 158 },
            { id: "eid608", tween: [ "style", "${_uprightarm}", "-ms-transform-origin", [19.56,47.47], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 3811, duration: 158 },
            { id: "eid609", tween: [ "style", "${_uprightarm}", "msTransformOrigin", [19.56,47.47], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 3811, duration: 158 },
            { id: "eid610", tween: [ "style", "${_uprightarm}", "-o-transform-origin", [19.56,47.47], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 3811, duration: 158 },
            { id: "eid14", tween: [ "style", "${_uprightiris}", "top", '38px', { fromValue: '25px'}], position: 137, duration: 181 },
            { id: "eid27", tween: [ "style", "${_uprightiris}", "top", '67px', { fromValue: '38px'}], position: 318, duration: 377 },
            { id: "eid80", tween: [ "style", "${_uprightiris}", "top", '48px', { fromValue: '67px'}], position: 695, duration: 305, easing: "easeInSine" },
            { id: "eid173", tween: [ "style", "${_uprightiris}", "top", '67px', { fromValue: '48px'}], position: 1051, duration: 305 },
            { id: "eid172", tween: [ "style", "${_uprightiris}", "top", '38px', { fromValue: '67px'}], position: 1356, duration: 377 },
            { id: "eid171", tween: [ "style", "${_uprightiris}", "top", '25px', { fromValue: '38px'}], position: 1733, duration: 181 },
            { id: "eid206", tween: [ "style", "${_uprightiris}", "top", '41px', { fromValue: '25px'}], position: 3550, duration: 261 },
            { id: "eid291", tween: [ "style", "${_uprightiris}", "top", '25px', { fromValue: '41px'}], position: 4469, duration: 261 },
            { id: "eid366", tween: [ "style", "${_uprightiris}", "top", '44px', { fromValue: '25px'}], position: 6110, duration: 311, easing: "easeInOutQuad" },
            { id: "eid374", tween: [ "style", "${_uprightiris}", "top", '37px', { fromValue: '44px'}], position: 6421, duration: 273, easing: "swing" },
            { id: "eid394", tween: [ "style", "${_uprightiris}", "top", '44px', { fromValue: '37px'}], position: 7008, duration: 299, easing: "swing" },
            { id: "eid398", tween: [ "style", "${_uprightiris}", "top", '35px', { fromValue: '44px'}], position: 7409, duration: 201 },
            { id: "eid488", tween: [ "style", "${_uprightiris}", "top", '25px', { fromValue: '35px'}], position: 7798, duration: 202 },
            { id: "eid48", tween: [ "style", "${_uprightleg}", "top", '200px', { fromValue: '201px'}], position: 137, duration: 558 },
            { id: "eid73", tween: [ "style", "${_uprightleg}", "top", '220px', { fromValue: '200px'}], position: 695, duration: 105, easing: "easeInSine" },
            { id: "eid156", tween: [ "style", "${_uprightleg}", "top", '201px', { fromValue: '220px'}], position: 1379, duration: 108, easing: "easeInQuad" }         ]
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
})(jQuery, AdobeEdge, "EDGE-19792875");
