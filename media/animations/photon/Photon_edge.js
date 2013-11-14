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
            id:'photon',
            type:'rect',
            rect:['71','66','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'photon',
            symbolName:'photon'
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
         "${_photon}": [
            ["style", "top", '22px'],
            ["transform", "scaleX", '0.77188'],
            ["style", "left", '-21px'],
            ["transform", "scaleY", '0.77188']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 16291,
         autoPlay: true,
         timeline: [
            { id: "eid1039", tween: [ "style", "${_photon}", "left", '-21px', { fromValue: '-21px'}], position: 2820, duration: 0 },
            { id: "eid1040", tween: [ "style", "${_photon}", "top", '22px', { fromValue: '22px'}], position: 2820, duration: 0 },
            { id: "eid1037", tween: [ "transform", "${_photon}", "scaleX", '0.77188', { fromValue: '0.77188'}], position: 2820, duration: 0 },
            { id: "eid1038", tween: [ "transform", "${_photon}", "scaleY", '0.77188', { fromValue: '0.77188'}], position: 2820, duration: 0 },
            { id: "eid1041", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_photon}', [3309] ], ""], position: 9842 }         ]
      }
   }
},
"photon": {
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
      id: 'footleft',
      type: 'image',
      rect: ['127px','253px','77px','67px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/footleft.png','0px','0px']
   },
   {
      id: 'footright',
      type: 'image',
      rect: ['223px','257px','65px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/footright.png','0px','0px']
   },
   {
      id: 'fueleft',
      type: 'image',
      rect: ['0px','131px','152px','36px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/fueleft.png','0px','0px']
   },
   {
      id: 'fuelefttop',
      type: 'image',
      rect: ['97px','7px','90px','110px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/fuelefttop.png','0px','0px']
   },
   {
      id: 'fueright',
      type: 'image',
      rect: ['280px','141px','197px','38px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/fueright.png','0px','0px']
   },
   {
      id: 'fuerighttop',
      type: 'image',
      rect: ['258px','0px','64px','115px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/fuerighttop.png','0px','0px']
   },
   {
      id: 'mouth2',
      type: 'image',
      rect: ['127px','195px','175px','64px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mouth2.png','0px','0px']
   },
   {
      id: 'mouth',
      type: 'image',
      rect: ['129px','196px','175px','64px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mouth.png','0px','0px']
   },
   {
      id: 'head',
      type: 'image',
      rect: ['149px','103px','143px','95px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/head.png','0px','0px']
   },
   {
      id: 'tooth',
      type: 'image',
      rect: ['251px','205px','19px','20px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tooth.png','0px','0px']
   },
   {
      id: 'tooth2',
      type: 'image',
      rect: ['214px','204px','23px','32px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tooth2.png','0px','0px']
   },
   {
      id: 'tooth3',
      type: 'image',
      rect: ['187px','204px','13px','23px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tooth3.png','0px','0px']
   },
   {
      id: 'irisright',
      type: 'image',
      rect: ['223px','145px','20px','26px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/irisright.png','0px','0px']
   },
   {
      id: 'irisleft',
      type: 'image',
      rect: ['166px','150px','20px','26px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/irisleft.png','0px','0px']
   },
   {
      id: 'pupilrightCopy',
      type: 'image',
      rect: ['226px','158px','10px','10px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pupilright.png','0px','0px']
   },
   {
      type: 'image',
      id: 'pupilright',
      rect: ['171px','163px','10px','10px','auto','auto'],
      transform: [[0,0],['180']],
      fill: ['rgba(0,0,0,0)','images/pupilright.png','0px','0px']
   },
   {
      id: 'tooth4',
      type: 'image',
      rect: ['158px','207px','16px','18px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tooth4.png','0px','0px']
   },
   {
      rect: ['213px','44px','68px','69px','auto','auto'],
      borderRadius: ['156px 156px','231px 231px','94px 94px','164px 164px'],
      transform: [[0,0],['183'],[],['1.0909','1.13299']],
      id: 'RoundRect',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(99,94,71,1)']
   },
   {
      rect: ['152px','119px','68px','69px','auto','auto'],
      borderRadius: ['432px 432px','231px 231px','217px 217px','243px 243px'],
      transform: [[0,0],['361'],[],['0.98176','0.95306']],
      id: 'RoundRectCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(99,94,71,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "top", '44px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.00629'],
            ["transform", "rotateZ", '183deg'],
            ["transform", "scaleX", '0.51094'],
            ["style", "opacity", '0'],
            ["style", "left", '213px'],
            ["color", "background-color", 'rgba(252,205,3,1.00)']
         ],
         "${_mouth2}": [
            ["style", "top", '195px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '64px'],
            ["style", "left", '127px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_fueleft}": [
            ["style", "-webkit-transform-origin", [98.74,69.7], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [98.74,69.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [98.74,69.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [98.74,69.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [98.74,69.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "top", '131px']
         ],
         "${_head}": [
            ["transform", "scaleX", '1.03563'],
            ["style", "left", '149px'],
            ["style", "top", '103px']
         ],
         "${_fueright}": [
            ["style", "-webkit-transform-origin", [2.29,22.83], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [2.29,22.83],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [2.29,22.83],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [2.29,22.83],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [2.29,22.83],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '280px'],
            ["style", "top", '141px']
         ],
         "${symbolSelector}": [
            ["style", "height", '320px'],
            ["style", "width", '477px']
         ],
         "${_tooth}": [
            ["style", "top", '205px'],
            ["style", "left", '251px']
         ],
         "${_fuelefttop}": [
            ["style", "-webkit-transform-origin", [101,94.03], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [101,94.03],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [101,94.03],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [101,94.03],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [101,94.03],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '97px'],
            ["style", "top", '7px']
         ],
         "${_fuerighttop}": [
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '258px'],
            ["style", "top", '0px']
         ],
         "${_tooth3}": [
            ["style", "height", '24px'],
            ["style", "top", '204px'],
            ["style", "left", '187px'],
            ["style", "width", '16px']
         ],
         "${_irisright}": [
            ["style", "top", '145px'],
            ["style", "left", '223px']
         ],
         "${_tooth4}": [
            ["style", "height", '20px'],
            ["style", "top", '207px'],
            ["style", "left", '158px'],
            ["style", "width", '17px']
         ],
         "${_RoundRectCopy}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "border-top-left-radius", [432,432], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [217,217], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleX", '0.15152'],
            ["style", "opacity", '0'],
            ["style", "left", '152px'],
            ["style", "top", '119px'],
            ["style", "border-bottom-left-radius", [243,243], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '-0.01208'],
            ["transform", "rotateZ", '361deg'],
            ["color", "background-color", 'rgba(252,205,3,1.00)']
         ],
         "${_irisleft}": [
            ["style", "top", '150px'],
            ["style", "left", '166px']
         ],
         "${_pupilright}": [
            ["style", "top", '163px'],
            ["style", "left", '171px'],
            ["transform", "rotateZ", '180deg']
         ],
         "${_mouth}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["style", "top", '196px'],
            ["transform", "scaleX", '1'],
            ["style", "clip", [0,175,64,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '129px'],
            ["style", "height", '64px']
         ],
         "${_tooth2}": [
            ["style", "top", '204px'],
            ["style", "left", '214px']
         ],
         "${_footright}": [
            ["style", "left", '223px'],
            ["style", "top", '257px']
         ],
         "${_pupilrightCopy}": [
            ["style", "top", '158px'],
            ["style", "left", '226px']
         ],
         "${_footleft}": [
            ["style", "left", '127px'],
            ["style", "top", '253px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 9750,
         autoPlay: true,
         timeline: [
            { id: "eid138", tween: [ "style", "${_pupilright}", "top", '148px', { fromValue: '163px'}], position: 573, duration: 302, easing: "easeOutElastic" },
            { id: "eid422", tween: [ "style", "${_pupilright}", "top", '104px', { fromValue: '148px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid446", tween: [ "style", "${_pupilright}", "top", '114px', { fromValue: '104px'}], position: 2784, duration: 264, easing: "easeOutElastic" },
            { id: "eid590", tween: [ "style", "${_pupilright}", "top", '90px', { fromValue: '114px'}], position: 7945, duration: 325, easing: "easeInOutElastic" },
            { id: "eid602", tween: [ "style", "${_pupilright}", "top", '88px', { fromValue: '90px'}], position: 8270, duration: 175, easing: "easeInOutElastic" },
            { id: "eid610", tween: [ "style", "${_pupilright}", "top", '106px', { fromValue: '88px'}], position: 8445, duration: 214, easing: "easeInOutElastic" },
            { id: "eid622", tween: [ "style", "${_pupilright}", "top", '114px', { fromValue: '106px'}], position: 9622, duration: 128, easing: "easeInOutElastic" },
            { id: "eid103", tween: [ "style", "${_tooth4}", "left", '157px', { fromValue: '158px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid5", tween: [ "style", "${_mouth2}", "left", '127px', { fromValue: '127px'}], position: 2034, duration: 0 },
            { id: "eid119", tween: [ "style", "${_fueleft}", "top", '89px', { fromValue: '131px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid25", tween: [ "style", "${_tooth2}", "top", '183px', { fromValue: '204px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid516", tween: [ "style", "${_fueleft}", "-webkit-transform-origin", [98.74,69.7], { valueTemplate: '@@0@@% @@1@@%', fromValue: [98.74,69.7]}], position: 4828, duration: 0, easing: "easeInQuint" },
            { id: "eid1091", tween: [ "style", "${_fueleft}", "-moz-transform-origin", [98.74,69.7], { valueTemplate: '@@0@@% @@1@@%', fromValue: [98.74,69.7]}], position: 4828, duration: 0, easing: "easeInQuint" },
            { id: "eid1092", tween: [ "style", "${_fueleft}", "-ms-transform-origin", [98.74,69.7], { valueTemplate: '@@0@@% @@1@@%', fromValue: [98.74,69.7]}], position: 4828, duration: 0, easing: "easeInQuint" },
            { id: "eid1093", tween: [ "style", "${_fueleft}", "msTransformOrigin", [98.74,69.7], { valueTemplate: '@@0@@% @@1@@%', fromValue: [98.74,69.7]}], position: 4828, duration: 0, easing: "easeInQuint" },
            { id: "eid1094", tween: [ "style", "${_fueleft}", "-o-transform-origin", [98.74,69.7], { valueTemplate: '@@0@@% @@1@@%', fromValue: [98.74,69.7]}], position: 4828, duration: 0, easing: "easeInQuint" },
            { id: "eid4", tween: [ "style", "${_head}", "top", '59px', { fromValue: '103px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid567", tween: [ "transform", "${_fuelefttop}", "scaleX", '0.37862', { fromValue: '1'}], position: 8445, duration: 688, easing: "easeInOutBounce" },
            { id: "eid573", tween: [ "transform", "${_fuelefttop}", "scaleX", '1', { fromValue: '0.37862'}], position: 9133, duration: 489, easing: "easeInOutElastic" },
            { id: "eid523", tween: [ "transform", "${_fuerighttop}", "rotateZ", '-44deg', { fromValue: '0deg'}], position: 4828, duration: 281, easing: "easeInOutQuad" },
            { id: "eid527", tween: [ "transform", "${_fuerighttop}", "rotateZ", '53deg', { fromValue: '-44deg'}], position: 5109, duration: 474 },
            { id: "eid544", tween: [ "transform", "${_fuerighttop}", "rotateZ", '0deg', { fromValue: '53deg'}], position: 5583, duration: 282, easing: "easeOutQuad" },
            { id: "eid22", tween: [ "style", "${_tooth}", "top", '184px', { fromValue: '205px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid28", tween: [ "style", "${_mouth}", "-webkit-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 2034, duration: 0 },
            { id: "eid1095", tween: [ "style", "${_mouth}", "-moz-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 2034, duration: 0 },
            { id: "eid1096", tween: [ "style", "${_mouth}", "-ms-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 2034, duration: 0 },
            { id: "eid1097", tween: [ "style", "${_mouth}", "msTransformOrigin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 2034, duration: 0 },
            { id: "eid1098", tween: [ "style", "${_mouth}", "-o-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 2034, duration: 0 },
            { id: "eid566", tween: [ "transform", "${_fuerighttop}", "scaleY", '0.37862', { fromValue: '1'}], position: 8445, duration: 688, easing: "easeInOutBounce" },
            { id: "eid576", tween: [ "transform", "${_fuerighttop}", "scaleY", '1', { fromValue: '0.37862'}], position: 9133, duration: 489, easing: "easeInOutElastic" },
            { id: "eid118", tween: [ "style", "${_fuelefttop}", "top", '-35px', { fromValue: '7px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid114", tween: [ "style", "${_fuerighttop}", "left", '258px', { fromValue: '258px'}], position: 2034, duration: 0, easing: "easeOutElastic" },
            { id: "eid112", tween: [ "style", "${_fuelefttop}", "left", '97px', { fromValue: '97px'}], position: 2034, duration: 0, easing: "easeOutElastic" },
            { id: "eid23", tween: [ "style", "${_tooth4}", "top", '186px', { fromValue: '207px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid136", tween: [ "style", "${_irisleft}", "top", '139px', { fromValue: '150px'}], position: 573, duration: 302, easing: "easeOutElastic" },
            { id: "eid418", tween: [ "style", "${_irisleft}", "top", '95px', { fromValue: '139px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid442", tween: [ "style", "${_irisleft}", "top", '105px', { fromValue: '95px'}], position: 2784, duration: 264, easing: "easeOutElastic" },
            { id: "eid586", tween: [ "style", "${_irisleft}", "top", '84px', { fromValue: '105px'}], position: 7945, duration: 325, easing: "easeInOutElastic" },
            { id: "eid604", tween: [ "style", "${_irisleft}", "top", '82px', { fromValue: '84px'}], position: 8270, duration: 175, easing: "easeInOutElastic" },
            { id: "eid606", tween: [ "style", "${_irisleft}", "top", '96px', { fromValue: '82px'}], position: 8445, duration: 214, easing: "easeInOutElastic" },
            { id: "eid626", tween: [ "style", "${_irisleft}", "top", '105px', { fromValue: '96px'}], position: 9622, duration: 128, easing: "easeInOutElastic" },
            { id: "eid521", tween: [ "transform", "${_fuelefttop}", "rotateZ", '-44deg', { fromValue: '0deg'}], position: 4828, duration: 281, easing: "easeInOutQuad" },
            { id: "eid525", tween: [ "transform", "${_fuelefttop}", "rotateZ", '53deg', { fromValue: '-44deg'}], position: 5109, duration: 474 },
            { id: "eid543", tween: [ "transform", "${_fuelefttop}", "rotateZ", '0deg', { fromValue: '53deg'}], position: 5583, duration: 282, easing: "easeOutQuad" },
            { id: "eid121", tween: [ "style", "${_fuerighttop}", "top", '-42px', { fromValue: '0px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid109", tween: [ "style", "${_tooth4}", "width", '17px', { fromValue: '17px'}], position: 2784, duration: 0, easing: "easeOutElastic" },
            { id: "eid137", tween: [ "style", "${_pupilright}", "left", '177px', { fromValue: '171px'}], position: 573, duration: 302, easing: "easeOutElastic" },
            { id: "eid421", tween: [ "style", "${_pupilright}", "left", '180px', { fromValue: '177px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid445", tween: [ "style", "${_pupilright}", "left", '169px', { fromValue: '180px'}], position: 2784, duration: 264, easing: "easeOutElastic" },
            { id: "eid589", tween: [ "style", "${_pupilright}", "left", '184px', { fromValue: '169px'}], position: 7945, duration: 325, easing: "easeInOutElastic" },
            { id: "eid601", tween: [ "style", "${_pupilright}", "left", '178px', { fromValue: '184px'}], position: 8270, duration: 175, easing: "easeInOutElastic" },
            { id: "eid609", tween: [ "style", "${_pupilright}", "left", '182px', { fromValue: '178px'}], position: 8445, duration: 214, easing: "easeInOutElastic" },
            { id: "eid621", tween: [ "style", "${_pupilright}", "left", '169px', { fromValue: '182px'}], position: 9622, duration: 128, easing: "easeInOutElastic" },
            { id: "eid29", tween: [ "transform", "${_mouth}", "scaleY", '1', { fromValue: '1'}], position: 2034, duration: 0 },
            { id: "eid192", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 61, easing: "easeOutQuad" },
            { id: "eid196", tween: [ "style", "${_RoundRect}", "opacity", '0', { fromValue: '1'}], position: 1589, duration: 108, easing: "easeInQuint" },
            { id: "eid564", tween: [ "transform", "${_fueleft}", "scaleY", '0.37862', { fromValue: '1'}], position: 8445, duration: 688, easing: "easeInOutBounce" },
            { id: "eid572", tween: [ "transform", "${_fueleft}", "scaleY", '1', { fromValue: '0.37862'}], position: 9133, duration: 489, easing: "easeInOutElastic" },
            { id: "eid177", tween: [ "transform", "${_RoundRectCopy}", "scaleY", '0.95306', { fromValue: '-0.01208'}], position: 1311, duration: 84, easing: "easeOutQuad" },
            { id: "eid186", tween: [ "transform", "${_RoundRectCopy}", "scaleY", '-0.01208', { fromValue: '0.95306'}], position: 1395, duration: 105, easing: "easeInQuint" },
            { id: "eid17", tween: [ "style", "${_tooth}", "left", '251px', { fromValue: '251px'}], position: 2034, duration: 0 },
            { id: "eid514", tween: [ "style", "${_fuerighttop}", "-webkit-transform-origin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 4828, duration: 0, easing: "easeInQuint" },
            { id: "eid1099", tween: [ "style", "${_fuerighttop}", "-moz-transform-origin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 4828, duration: 0, easing: "easeInQuint" },
            { id: "eid1100", tween: [ "style", "${_fuerighttop}", "-ms-transform-origin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 4828, duration: 0, easing: "easeInQuint" },
            { id: "eid1101", tween: [ "style", "${_fuerighttop}", "msTransformOrigin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 4828, duration: 0, easing: "easeInQuint" },
            { id: "eid1102", tween: [ "style", "${_fuerighttop}", "-o-transform-origin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 4828, duration: 0, easing: "easeInQuint" },
            { id: "eid107", tween: [ "style", "${_tooth3}", "width", '16px', { fromValue: '16px'}], position: 2784, duration: 0, easing: "easeOutElastic" },
            { id: "eid565", tween: [ "transform", "${_fuerighttop}", "scaleX", '0.37862', { fromValue: '1'}], position: 8445, duration: 688, easing: "easeInOutBounce" },
            { id: "eid575", tween: [ "transform", "${_fuerighttop}", "scaleX", '1', { fromValue: '0.37862'}], position: 9133, duration: 489, easing: "easeInOutElastic" },
            { id: "eid102", tween: [ "transform", "${_head}", "scaleX", '1.03563', { fromValue: '1.03563'}], position: 2034, duration: 0, easing: "easeOutElastic" },
            { id: "eid562", tween: [ "transform", "${_fueright}", "scaleY", '0.37862', { fromValue: '1'}], position: 8445, duration: 688, easing: "easeInOutBounce" },
            { id: "eid570", tween: [ "transform", "${_fueright}", "scaleY", '1', { fromValue: '0.37862'}], position: 9133, duration: 489, easing: "easeInOutElastic" },
            { id: "eid11", tween: [ "transform", "${_mouth2}", "scaleY", '1.7428', { fromValue: '1'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid135", tween: [ "style", "${_irisleft}", "left", '171px', { fromValue: '166px'}], position: 573, duration: 302, easing: "easeOutElastic" },
            { id: "eid417", tween: [ "style", "${_irisleft}", "left", '174px', { fromValue: '171px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid441", tween: [ "style", "${_irisleft}", "left", '163px', { fromValue: '174px'}], position: 2784, duration: 264, easing: "easeOutElastic" },
            { id: "eid585", tween: [ "style", "${_irisleft}", "left", '176px', { fromValue: '163px'}], position: 7945, duration: 325, easing: "easeInOutElastic" },
            { id: "eid603", tween: [ "style", "${_irisleft}", "left", '171px', { fromValue: '176px'}], position: 8270, duration: 175, easing: "easeInOutElastic" },
            { id: "eid605", tween: [ "style", "${_irisleft}", "left", '176px', { fromValue: '171px'}], position: 8445, duration: 214, easing: "easeInOutElastic" },
            { id: "eid625", tween: [ "style", "${_irisleft}", "left", '163px', { fromValue: '176px'}], position: 9622, duration: 128, easing: "easeInOutElastic" },
            { id: "eid515", tween: [ "style", "${_fuelefttop}", "-webkit-transform-origin", [101,94.03], { valueTemplate: '@@0@@% @@1@@%', fromValue: [101,94.03]}], position: 4828, duration: 0, easing: "easeInQuint" },
            { id: "eid1103", tween: [ "style", "${_fuelefttop}", "-moz-transform-origin", [101,94.03], { valueTemplate: '@@0@@% @@1@@%', fromValue: [101,94.03]}], position: 4828, duration: 0, easing: "easeInQuint" },
            { id: "eid1104", tween: [ "style", "${_fuelefttop}", "-ms-transform-origin", [101,94.03], { valueTemplate: '@@0@@% @@1@@%', fromValue: [101,94.03]}], position: 4828, duration: 0, easing: "easeInQuint" },
            { id: "eid1105", tween: [ "style", "${_fuelefttop}", "msTransformOrigin", [101,94.03], { valueTemplate: '@@0@@% @@1@@%', fromValue: [101,94.03]}], position: 4828, duration: 0, easing: "easeInQuint" },
            { id: "eid1106", tween: [ "style", "${_fuelefttop}", "-o-transform-origin", [101,94.03], { valueTemplate: '@@0@@% @@1@@%', fromValue: [101,94.03]}], position: 4828, duration: 0, easing: "easeInQuint" },
            { id: "eid120", tween: [ "style", "${_fueright}", "top", '99px', { fromValue: '141px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid191", tween: [ "style", "${_RoundRectCopy}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 61, easing: "easeOutQuad" },
            { id: "eid195", tween: [ "style", "${_RoundRectCopy}", "opacity", '0', { fromValue: '1'}], position: 1589, duration: 108, easing: "easeInQuint" },
            { id: "eid31", tween: [ "transform", "${_mouth}", "scaleX", '0.74188', { fromValue: '1'}], position: 2034, duration: 407, easing: "easeOutElastic" },
            { id: "eid561", tween: [ "transform", "${_fueright}", "scaleX", '0.37862', { fromValue: '1'}], position: 8445, duration: 688, easing: "easeInOutBounce" },
            { id: "eid569", tween: [ "transform", "${_fueright}", "scaleX", '1', { fromValue: '0.37862'}], position: 9133, duration: 489, easing: "easeInOutElastic" },
            { id: "eid568", tween: [ "transform", "${_fuelefttop}", "scaleY", '0.37862', { fromValue: '1'}], position: 8445, duration: 688, easing: "easeInOutBounce" },
            { id: "eid574", tween: [ "transform", "${_fuelefttop}", "scaleY", '1', { fromValue: '0.37862'}], position: 9133, duration: 489, easing: "easeInOutElastic" },
            { id: "eid110", tween: [ "style", "${_fueleft}", "left", '0px', { fromValue: '0px'}], position: 2034, duration: 0, easing: "easeOutElastic" },
            { id: "eid522", tween: [ "transform", "${_fueleft}", "rotateZ", '-44deg', { fromValue: '0deg'}], position: 4828, duration: 281, easing: "easeInOutQuad" },
            { id: "eid526", tween: [ "transform", "${_fueleft}", "rotateZ", '53deg', { fromValue: '-44deg'}], position: 5109, duration: 474 },
            { id: "eid542", tween: [ "transform", "${_fueleft}", "rotateZ", '0deg', { fromValue: '53deg'}], position: 5583, duration: 282, easing: "easeOutQuad" },
            { id: "eid133", tween: [ "style", "${_pupilrightCopy}", "left", '237px', { fromValue: '226px'}], position: 573, duration: 302, easing: "easeOutElastic" },
            { id: "eid419", tween: [ "style", "${_pupilrightCopy}", "left", '240px', { fromValue: '237px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid443", tween: [ "style", "${_pupilrightCopy}", "left", '229px', { fromValue: '240px'}], position: 2784, duration: 264, easing: "easeOutElastic" },
            { id: "eid587", tween: [ "style", "${_pupilrightCopy}", "left", '247px', { fromValue: '229px'}], position: 7945, duration: 325, easing: "easeInOutElastic" },
            { id: "eid595", tween: [ "style", "${_pupilrightCopy}", "left", '230px', { fromValue: '247px'}], position: 8270, duration: 175, easing: "easeInOutElastic" },
            { id: "eid611", tween: [ "style", "${_pupilrightCopy}", "left", '235px', { fromValue: '230px'}], position: 8445, duration: 214, easing: "easeInOutElastic" },
            { id: "eid623", tween: [ "style", "${_pupilrightCopy}", "left", '229px', { fromValue: '235px'}], position: 9622, duration: 128, easing: "easeInOutElastic" },
            { id: "eid108", tween: [ "style", "${_tooth4}", "height", '20px', { fromValue: '20px'}], position: 2784, duration: 0, easing: "easeOutElastic" },
            { id: "eid3", tween: [ "style", "${_head}", "left", '148px', { fromValue: '149px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid132", tween: [ "style", "${_irisright}", "top", '137px', { fromValue: '145px'}], position: 573, duration: 302, easing: "easeOutElastic" },
            { id: "eid424", tween: [ "style", "${_irisright}", "top", '93px', { fromValue: '137px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid448", tween: [ "style", "${_irisright}", "top", '103px', { fromValue: '93px'}], position: 2784, duration: 264, easing: "easeOutElastic" },
            { id: "eid592", tween: [ "style", "${_irisright}", "top", '78px', { fromValue: '103px'}], position: 7945, duration: 325, easing: "easeInOutElastic" },
            { id: "eid594", tween: [ "style", "${_irisright}", "top", '80px', { fromValue: '78px'}], position: 8270, duration: 175, easing: "easeInOutElastic" },
            { id: "eid608", tween: [ "style", "${_irisright}", "top", '94px', { fromValue: '80px'}], position: 8445, duration: 214, easing: "easeInOutElastic" },
            { id: "eid628", tween: [ "style", "${_irisright}", "top", '103px', { fromValue: '94px'}], position: 9622, duration: 128, easing: "easeInOutElastic" },
            { id: "eid180", tween: [ "transform", "${_RoundRect}", "scaleX", '1.0909', { fromValue: '0.51094'}], position: 1311, duration: 84, easing: "easeOutQuad" },
            { id: "eid187", tween: [ "transform", "${_RoundRect}", "scaleX", '0.51094', { fromValue: '1.0909'}], position: 1395, duration: 105, easing: "easeInQuint" },
            { id: "eid106", tween: [ "style", "${_tooth3}", "height", '24px', { fromValue: '24px'}], position: 2784, duration: 0, easing: "easeOutElastic" },
            { id: "eid14", tween: [ "style", "${_tooth2}", "left", '214px', { fromValue: '214px'}], position: 2034, duration: 0 },
            { id: "eid179", tween: [ "transform", "${_RoundRect}", "scaleY", '1.05492', { fromValue: '0.00629'}], position: 1311, duration: 84, easing: "easeOutQuad" },
            { id: "eid188", tween: [ "transform", "${_RoundRect}", "scaleY", '0.00629', { fromValue: '1.05492'}], position: 1395, duration: 105, easing: "easeInQuint" },
            { id: "eid178", tween: [ "transform", "${_RoundRectCopy}", "scaleX", '0.98176', { fromValue: '0.15152'}], position: 1311, duration: 84, easing: "easeOutQuad" },
            { id: "eid185", tween: [ "transform", "${_RoundRectCopy}", "scaleX", '0.15152', { fromValue: '0.98176'}], position: 1395, duration: 105, easing: "easeInQuint" },
            { id: "eid131", tween: [ "style", "${_irisright}", "left", '233px', { fromValue: '223px'}], position: 573, duration: 302, easing: "easeOutElastic" },
            { id: "eid423", tween: [ "style", "${_irisright}", "left", '236px', { fromValue: '233px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid447", tween: [ "style", "${_irisright}", "left", '225px', { fromValue: '236px'}], position: 2784, duration: 264, easing: "easeOutElastic" },
            { id: "eid591", tween: [ "style", "${_irisright}", "left", '243px', { fromValue: '225px'}], position: 7945, duration: 325, easing: "easeInOutElastic" },
            { id: "eid593", tween: [ "style", "${_irisright}", "left", '226px', { fromValue: '243px'}], position: 8270, duration: 175, easing: "easeInOutElastic" },
            { id: "eid607", tween: [ "style", "${_irisright}", "left", '231px', { fromValue: '226px'}], position: 8445, duration: 214, easing: "easeInOutElastic" },
            { id: "eid627", tween: [ "style", "${_irisright}", "left", '225px', { fromValue: '231px'}], position: 9622, duration: 128, easing: "easeInOutElastic" },
            { id: "eid24", tween: [ "style", "${_tooth3}", "top", '184px', { fromValue: '204px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid104", tween: [ "style", "${_tooth3}", "left", '183px', { fromValue: '187px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid116", tween: [ "style", "${_fueright}", "left", '280px', { fromValue: '280px'}], position: 2034, duration: 0, easing: "easeOutElastic" },
            { id: "eid134", tween: [ "style", "${_pupilrightCopy}", "top", '145px', { fromValue: '158px'}], position: 573, duration: 302, easing: "easeOutElastic" },
            { id: "eid420", tween: [ "style", "${_pupilrightCopy}", "top", '101px', { fromValue: '145px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid444", tween: [ "style", "${_pupilrightCopy}", "top", '111px', { fromValue: '101px'}], position: 2784, duration: 264, easing: "easeOutElastic" },
            { id: "eid588", tween: [ "style", "${_pupilrightCopy}", "top", '83px', { fromValue: '111px'}], position: 7945, duration: 325, easing: "easeInOutElastic" },
            { id: "eid596", tween: [ "style", "${_pupilrightCopy}", "top", '85px', { fromValue: '83px'}], position: 8270, duration: 175, easing: "easeInOutElastic" },
            { id: "eid612", tween: [ "style", "${_pupilrightCopy}", "top", '102px', { fromValue: '85px'}], position: 8445, duration: 214, easing: "easeInOutElastic" },
            { id: "eid624", tween: [ "style", "${_pupilrightCopy}", "top", '111px', { fromValue: '102px'}], position: 9622, duration: 128, easing: "easeInOutElastic" },
            { id: "eid9", tween: [ "style", "${_mouth2}", "-webkit-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 2034, duration: 0 },
            { id: "eid1107", tween: [ "style", "${_mouth2}", "-moz-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 2034, duration: 0 },
            { id: "eid1108", tween: [ "style", "${_mouth2}", "-ms-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 2034, duration: 0 },
            { id: "eid1109", tween: [ "style", "${_mouth2}", "msTransformOrigin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 2034, duration: 0 },
            { id: "eid1110", tween: [ "style", "${_mouth2}", "-o-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 2034, duration: 0 },
            { id: "eid27", tween: [ "style", "${_mouth}", "clip", [52.6796875,175,64,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,175,64,0]}], position: 2034, duration: 407, easing: "easeOutElastic" },
            { id: "eid524", tween: [ "transform", "${_fueright}", "rotateZ", '-44deg', { fromValue: '0deg'}], position: 4828, duration: 281, easing: "easeInOutQuad" },
            { id: "eid528", tween: [ "transform", "${_fueright}", "rotateZ", '53deg', { fromValue: '-44deg'}], position: 5109, duration: 474 },
            { id: "eid541", tween: [ "transform", "${_fueright}", "rotateZ", '0deg', { fromValue: '53deg'}], position: 5583, duration: 282, easing: "easeOutQuad" },
            { id: "eid513", tween: [ "style", "${_fueright}", "-webkit-transform-origin", [2.29,22.83], { valueTemplate: '@@0@@% @@1@@%', fromValue: [2.29,22.83]}], position: 4828, duration: 0, easing: "easeInQuint" },
            { id: "eid1111", tween: [ "style", "${_fueright}", "-moz-transform-origin", [2.29,22.83], { valueTemplate: '@@0@@% @@1@@%', fromValue: [2.29,22.83]}], position: 4828, duration: 0, easing: "easeInQuint" },
            { id: "eid1112", tween: [ "style", "${_fueright}", "-ms-transform-origin", [2.29,22.83], { valueTemplate: '@@0@@% @@1@@%', fromValue: [2.29,22.83]}], position: 4828, duration: 0, easing: "easeInQuint" },
            { id: "eid1113", tween: [ "style", "${_fueright}", "msTransformOrigin", [2.29,22.83], { valueTemplate: '@@0@@% @@1@@%', fromValue: [2.29,22.83]}], position: 4828, duration: 0, easing: "easeInQuint" },
            { id: "eid1114", tween: [ "style", "${_fueright}", "-o-transform-origin", [2.29,22.83], { valueTemplate: '@@0@@% @@1@@%', fromValue: [2.29,22.83]}], position: 4828, duration: 0, easing: "easeInQuint" },
            { id: "eid563", tween: [ "transform", "${_fueleft}", "scaleX", '0.37862', { fromValue: '1'}], position: 8445, duration: 688, easing: "easeInOutBounce" },
            { id: "eid571", tween: [ "transform", "${_fueleft}", "scaleX", '1', { fromValue: '0.37862'}], position: 9133, duration: 489, easing: "easeInOutElastic" }         ]
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
})(jQuery, AdobeEdge, "EDGE-651261");
