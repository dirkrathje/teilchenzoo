/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='animations/electron/images/';

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
            id:'electron',
            type:'rect',
            rect:['106','65','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'electron',
            symbolName:'electron'
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
         "${_electron}": [
            ["transform", "scaleX", '0.74622'],
            ["style", "top", '51px'],
            ["transform", "scaleY", '0.74622'],
            ["style", "left", '44px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 21350,
         autoPlay: true,
         timeline: [
            { id: "eid712", tween: [ "style", "${_electron}", "top", '51px', { fromValue: '51px'}], position: 3250, duration: 0, easing: "easeInOutBounce" },
            { id: "eid713", tween: [ "style", "${_electron}", "left", '44px', { fromValue: '44px'}], position: 3250, duration: 0, easing: "easeInOutBounce" },
            { id: "eid708", tween: [ "transform", "${_electron}", "scaleY", '0.74622', { fromValue: '0.74622'}], position: 3250, duration: 0, easing: "easeInOutBounce" },
            { id: "eid707", tween: [ "transform", "${_electron}", "scaleX", '0.74622', { fromValue: '0.74622'}], position: 3250, duration: 0, easing: "easeInOutBounce" },
            { id: "eid714", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_electron}', [] ], ""], position: 10645 }         ]
      }
   }
},
"electron": {
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
      rect: ['157px','31px','62px','53px','auto','auto'],
      id: 'elektip',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','animations/electron/images/elektip.png','0px','0px']
   },
   {
      rect: ['0px','0px','331','291','auto','auto'],
      id: 'Group',
      type: 'group',
      transform: [],
      c: [
      {
         id: 'Body',
         type: 'image',
         rect: ['28px','0px','303px','249px','auto','auto'],
         fill: ['rgba(0,0,0,0)','animations/electron/images/Body.png','0px','0px']
      },
      {
         id: 'elekleftiris',
         type: 'image',
         rect: ['122px','98px','40px','35px','auto','auto'],
         fill: ['rgba(0,0,0,0)','animations/electron/images/elekleftiris.png','0px','0px']
      },
      {
         id: 'elekleftleg',
         type: 'image',
         rect: ['0px','197px','123px','93px','auto','auto'],
         fill: ['rgba(0,0,0,0)','animations/electron/images/elekleftleg.png','0px','0px']
      },
      {
         id: 'elekleftpupil',
         type: 'image',
         rect: ['143px','116px','11px','10px','auto','auto'],
         fill: ['rgba(0,0,0,0)','animations/electron/images/elekleftpupil.png','0px','0px']
      },
      {
         id: 'elekmouth',
         type: 'image',
         rect: ['138px','189px','87px','15px','auto','auto'],
         fill: ['rgba(0,0,0,0)','animations/electron/images/elekmouth.png','0px','0px']
      },
      {
         id: 'elekrightiris',
         type: 'image',
         rect: ['194px','99px','40px','34px','auto','auto'],
         fill: ['rgba(0,0,0,0)','animations/electron/images/elekrightiris.png','0px','0px']
      },
      {
         id: 'elekrightleg',
         type: 'image',
         rect: ['211px','211px','109px','80px','auto','auto'],
         fill: ['rgba(0,0,0,0)','animations/electron/images/elekrightleg.png','0px','0px']
      },
      {
         id: 'elekrightpupil',
         type: 'image',
         rect: ['201px','117px','11px','9px','auto','auto'],
         fill: ['rgba(0,0,0,0)','animations/electron/images/elekrightpupil.png','0px','0px']
      },
      {
         id: 'Nasenloch',
         type: 'image',
         rect: ['185px','152px','23px','21px','auto','auto'],
         fill: ['rgba(0,0,0,0)','animations/electron/images/Nasenloch.png','0px','0px']
      },
      {
         id: 'NasenlochCopy',
         type: 'image',
         rect: ['151px','152px','23px','21px','auto','auto'],
         fill: ['rgba(0,0,0,0)','animations/electron/images/Nasenloch.png','0px','0px']
      }]
   },
   {
      rect: ['181px','56px','87px','17px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      stroke: [0,'rgba(0,0,0,1)','none'],
      id: 'RoundRect',
      opacity: 1,
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      transform: [[],['12'],[],['0.89866']],
      rect: ['91px','61px','87px','17px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      stroke: [0,'rgba(0,0,0,1)','none'],
      id: 'RoundRectCopy',
      opacity: 1,
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_elektip}": [
            ["style", "top", '31px'],
            ["transform", "scaleX", '1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '53px'],
            ["style", "opacity", '0'],
            ["style", "left", '157px'],
            ["style", "width", '62px']
         ],
         "${_elekrightpupil}": [
            ["style", "top", '117px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '9px'],
            ["style", "left", '201px'],
            ["style", "width", '11px']
         ],
         "${_elekmouth}": [
            ["style", "top", '189px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '15px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '138px'],
            ["style", "width", '87px']
         ],
         "${_elekleftleg}": [
            ["style", "-webkit-transform-origin", [81.24,51.71], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [81.24,51.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [81.24,51.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [81.24,51.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [81.24,51.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '93px'],
            ["style", "top", '197px'],
            ["style", "left", '0px'],
            ["style", "width", '123px']
         ],
         "${_Nasenloch}": [
            ["style", "top", '152px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '21px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '185px'],
            ["style", "width", '23px']
         ],
         "${_elekrightleg}": [
            ["style", "-webkit-transform-origin", [10.31,6.25], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [10.31,6.25],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [10.31,6.25],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [10.31,6.25],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [10.31,6.25],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '80px'],
            ["style", "top", '211px'],
            ["style", "left", '211px'],
            ["style", "width", '109px']
         ],
         "${_elekleftiris}": [
            ["style", "top", '98px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '35px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '122px'],
            ["style", "width", '40px']
         ],
         "${_Body}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '249px'],
            ["style", "left", '28px'],
            ["style", "width", '303px']
         ],
         "${_RoundRect}": [
            ["style", "top", '56px'],
            ["transform", "rotateZ", '-13deg'],
            ["style", "height", '15px'],
            ["style", "opacity", '0'],
            ["style", "left", '181px'],
            ["color", "background-color", 'rgba(29,146,180,1.00)']
         ],
         "${_RoundRectCopy}": [
            ["style", "top", '61px'],
            ["color", "background-color", 'rgba(29,146,180,1.00)'],
            ["transform", "scaleY", '0.801'],
            ["transform", "rotateZ", '10deg'],
            ["style", "height", '15px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '91px'],
            ["transform", "scaleX", '0.89866']
         ],
         "${symbolSelector}": [
            ["style", "height", '291px'],
            ["style", "width", '331px']
         ],
         "${_elekleftpupil}": [
            ["style", "top", '116px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '10px'],
            ["style", "left", '143px'],
            ["style", "width", '11px']
         ],
         "${_Group}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [4.43,97.6], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [4.43,97.6],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [4.43,97.6],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [4.43,97.6],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [4.43,97.6],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_elekrightiris}": [
            ["style", "top", '99px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '34px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '194px'],
            ["style", "width", '40px']
         ],
         "${_NasenlochCopy}": [
            ["style", "top", '152px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "height", '21px'],
            ["style", "left", '151px'],
            ["style", "width", '23px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10500,
         autoPlay: true,
         timeline: [
            { id: "eid226", tween: [ "transform", "${_elekrightiris}", "scaleX", '1.2091', { fromValue: '1'}], position: 3937, duration: 774 },
            { id: "eid295", tween: [ "transform", "${_elekrightiris}", "scaleX", '1', { fromValue: '1.2091'}], position: 5610, duration: 461 },
            { id: "eid379", tween: [ "style", "${_RoundRectCopy}", "height", '37px', { fromValue: '15px'}], position: 8089, duration: 161, easing: "easeInOutBounce" },
            { id: "eid451", tween: [ "style", "${_RoundRectCopy}", "height", '15px', { fromValue: '37px'}], position: 10162, duration: 161, easing: "easeInOutBounce" },
            { id: "eid8", tween: [ "transform", "${_elekleftpupil}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid75", tween: [ "transform", "${_elekleftpupil}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 653, duration: 0 },
            { id: "eid158", tween: [ "transform", "${_elekleftpupil}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid192", tween: [ "transform", "${_NasenlochCopy}", "scaleY", '1', { fromValue: '1'}], position: 3937, duration: 0 },
            { id: "eid253", tween: [ "transform", "${_NasenlochCopy}", "scaleY", '1.26823', { fromValue: '1'}], position: 4894, duration: 205, easing: "easeInQuad" },
            { id: "eid263", tween: [ "transform", "${_NasenlochCopy}", "scaleY", '1', { fromValue: '1.26823'}], position: 5099, duration: 205, easing: "easeInQuad" },
            { id: "eid268", tween: [ "transform", "${_NasenlochCopy}", "scaleY", '1.26823', { fromValue: '1'}], position: 5405, duration: 205, easing: "easeInQuad" },
            { id: "eid269", tween: [ "transform", "${_NasenlochCopy}", "scaleY", '1', { fromValue: '1.26823'}], position: 5610, duration: 205, easing: "easeInQuad" },
            { id: "eid47", tween: [ "style", "${_Body}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid83", tween: [ "style", "${_Body}", "top", '0px', { fromValue: '0px'}], position: 653, duration: 0 },
            { id: "eid156", tween: [ "style", "${_Body}", "top", '0px', { fromValue: '0px'}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid223", tween: [ "transform", "${_elekleftiris}", "scaleY", '1.20982', { fromValue: '1'}], position: 3937, duration: 774 },
            { id: "eid285", tween: [ "transform", "${_elekleftiris}", "scaleY", '1', { fromValue: '1.20982'}], position: 5610, duration: 462 },
            { id: "eid386", tween: [ "transform", "${_RoundRectCopy}", "scaleY", '0.801', { fromValue: '0.801'}], position: 8250, duration: 0, easing: "easeInOutBounce" },
            { id: "eid381", tween: [ "color", "${_RoundRectCopy}", "background-color", 'rgba(29,146,180,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(29,146,180,1.00)'}], position: 8089, duration: 0, easing: "easeInOutBounce" },
            { id: "eid33", tween: [ "style", "${_elekrightpupil}", "top", '117px', { fromValue: '117px'}], position: 0, duration: 0 },
            { id: "eid60", tween: [ "style", "${_elekrightpupil}", "top", '117px', { fromValue: '117px'}], position: 653, duration: 0 },
            { id: "eid240", tween: [ "style", "${_elekrightpupil}", "top", '110px', { fromValue: '117px'}], position: 3937, duration: 774 },
            { id: "eid305", tween: [ "style", "${_elekrightpupil}", "top", '117px', { fromValue: '110px'}], position: 5610, duration: 461 },
            { id: "eid391", tween: [ "style", "${_elektip}", "left", '160px', { fromValue: '157px'}], position: 8089, duration: 411, easing: "easeInQuad" },
            { id: "eid411", tween: [ "style", "${_elektip}", "left", '155px', { fromValue: '160px'}], position: 8500, duration: 157, easing: "easeInQuad" },
            { id: "eid393", tween: [ "style", "${_elektip}", "left", '82px', { fromValue: '155px'}], position: 8657, duration: 93, easing: "easeInQuad" },
            { id: "eid396", tween: [ "style", "${_elektip}", "left", '76px', { fromValue: '82px'}], position: 8750, duration: 189, easing: "easeInQuad" },
            { id: "eid398", tween: [ "style", "${_elektip}", "left", '87px', { fromValue: '76px'}], position: 8939, duration: 209, easing: "easeInQuad" },
            { id: "eid400", tween: [ "style", "${_elektip}", "left", '44px', { fromValue: '87px'}], position: 9148, duration: 102, easing: "easeInQuad" },
            { id: "eid403", tween: [ "style", "${_elektip}", "left", '17px', { fromValue: '44px'}], position: 9250, duration: 175, easing: "easeInQuad" },
            { id: "eid405", tween: [ "style", "${_elektip}", "left", '216px', { fromValue: '17px'}], position: 9425, duration: 75, easing: "easeInQuad" },
            { id: "eid424", tween: [ "style", "${_elektip}", "left", '235px', { fromValue: '216px'}], position: 9500, duration: 157, easing: "easeInQuad" },
            { id: "eid427", tween: [ "style", "${_elektip}", "left", '185px', { fromValue: '235px'}], position: 9657, duration: 190, easing: "easeInQuad" },
            { id: "eid429", tween: [ "style", "${_elektip}", "left", '274px', { fromValue: '185px'}], position: 9847, duration: 106, easing: "easeInQuad" },
            { id: "eid433", tween: [ "style", "${_elektip}", "left", '236px', { fromValue: '274px'}], position: 9953, duration: 146, easing: "easeInQuad" },
            { id: "eid435", tween: [ "style", "${_elektip}", "left", '261px', { fromValue: '236px'}], position: 10099, duration: 17, easing: "easeInQuad" },
            { id: "eid438", tween: [ "style", "${_elektip}", "left", '284px', { fromValue: '261px'}], position: 10116, duration: 93, easing: "easeInQuad" },
            { id: "eid440", tween: [ "style", "${_elektip}", "left", '210px', { fromValue: '284px'}], position: 10209, duration: 114, easing: "easeInQuad" },
            { id: "eid207", tween: [ "color", "${_RoundRect}", "background-color", 'rgba(29,146,180,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(29,146,180,1.00)'}], position: 8089, duration: 0, easing: "easeInOutBounce" },
            { id: "eid378", tween: [ "transform", "${_RoundRect}", "rotateZ", '-13deg', { fromValue: '-13deg'}], position: 8190, duration: 0 },
            { id: "eid31", tween: [ "style", "${_Nasenloch}", "top", '152px', { fromValue: '152px'}], position: 0, duration: 0 },
            { id: "eid57", tween: [ "style", "${_Nasenloch}", "top", '152px', { fromValue: '152px'}], position: 653, duration: 0 },
            { id: "eid196", tween: [ "style", "${_Nasenloch}", "top", '146px', { fromValue: '152px'}], position: 3937, duration: 207, easing: "easeInOutBounce" },
            { id: "eid198", tween: [ "style", "${_Nasenloch}", "top", '152px', { fromValue: '146px'}], position: 4144, duration: 250, easing: "easeInOutBounce" },
            { id: "eid202", tween: [ "style", "${_Nasenloch}", "top", '146px', { fromValue: '152px'}], position: 4394, duration: 250, easing: "easeInOutBounce" },
            { id: "eid204", tween: [ "style", "${_Nasenloch}", "top", '152px', { fromValue: '146px'}], position: 4644, duration: 149, easing: "easeInOutBounce" },
            { id: "eid243", tween: [ "style", "${_Nasenloch}", "top", '146px', { fromValue: '152px'}], position: 4793, duration: 306, easing: "easeInOutBounce" },
            { id: "eid265", tween: [ "style", "${_Nasenloch}", "top", '152px', { fromValue: '146px'}], position: 5099, duration: 306, easing: "easeInOutBounce" },
            { id: "eid276", tween: [ "style", "${_Nasenloch}", "top", '146px', { fromValue: '152px'}], position: 5405, duration: 205, easing: "easeInOutBounce" },
            { id: "eid277", tween: [ "style", "${_Nasenloch}", "top", '152px', { fromValue: '146px'}], position: 5610, duration: 205, easing: "easeInOutBounce" },
            { id: "eid14", tween: [ "transform", "${_elekrightleg}", "rotateZ", '-21deg', { fromValue: '0deg'}], position: 0, duration: 417, easing: "easeOutQuad" },
            { id: "eid90", tween: [ "transform", "${_elekrightleg}", "rotateZ", '0deg', { fromValue: '-21deg'}], position: 653, duration: 417, easing: "easeInBack" },
            { id: "eid126", tween: [ "transform", "${_elekrightleg}", "rotateZ", '-12deg', { fromValue: '0deg'}], position: 1679, duration: 637 },
            { id: "eid131", tween: [ "transform", "${_elekrightleg}", "rotateZ", '0deg', { fromValue: '-12deg'}], position: 2316, duration: 617, easing: "easeOutBounce" },
            { id: "eid145", tween: [ "transform", "${_elekrightleg}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid43", tween: [ "style", "${_elekleftleg}", "top", '197px', { fromValue: '197px'}], position: 0, duration: 0 },
            { id: "eid76", tween: [ "style", "${_elekleftleg}", "top", '197px', { fromValue: '197px'}], position: 653, duration: 0 },
            { id: "eid149", tween: [ "style", "${_elekleftleg}", "top", '197px', { fromValue: '197px'}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid209", tween: [ "style", "${_RoundRect}", "height", '37px', { fromValue: '15px'}], position: 8089, duration: 161, easing: "easeInOutBounce" },
            { id: "eid446", tween: [ "style", "${_RoundRect}", "height", '15px', { fromValue: '37px'}], position: 10162, duration: 161, easing: "easeInOutBounce" },
            { id: "eid193", tween: [ "transform", "${_Nasenloch}", "scaleX", '1', { fromValue: '1'}], position: 3937, duration: 0 },
            { id: "eid254", tween: [ "transform", "${_Nasenloch}", "scaleX", '1.27', { fromValue: '1'}], position: 4894, duration: 205, easing: "easeInQuad" },
            { id: "eid258", tween: [ "transform", "${_Nasenloch}", "scaleX", '1', { fromValue: '1.27'}], position: 5099, duration: 205, easing: "easeInQuad" },
            { id: "eid272", tween: [ "transform", "${_Nasenloch}", "scaleX", '1.27', { fromValue: '1'}], position: 5405, duration: 205, easing: "easeInQuad" },
            { id: "eid273", tween: [ "transform", "${_Nasenloch}", "scaleX", '1', { fromValue: '1.27'}], position: 5610, duration: 205, easing: "easeInQuad" },
            { id: "eid3", tween: [ "transform", "${_Nasenloch}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid59", tween: [ "transform", "${_Nasenloch}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 653, duration: 0 },
            { id: "eid171", tween: [ "transform", "${_Nasenloch}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid7", tween: [ "transform", "${_elekmouth}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid72", tween: [ "transform", "${_elekmouth}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 653, duration: 0 },
            { id: "eid161", tween: [ "transform", "${_elekmouth}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid390", tween: [ "transform", "${_elektip}", "rotateZ", '7deg', { fromValue: '0deg'}], position: 8089, duration: 411, easing: "easeInQuad" },
            { id: "eid395", tween: [ "transform", "${_elektip}", "rotateZ", '-14deg', { fromValue: '7deg'}], position: 8500, duration: 250, easing: "easeInQuad" },
            { id: "eid402", tween: [ "transform", "${_elektip}", "rotateZ", '-11deg', { fromValue: '-14deg'}], position: 8750, duration: 189, easing: "easeInQuad" },
            { id: "eid414", tween: [ "transform", "${_elektip}", "rotateZ", '-74deg', { fromValue: '-11deg'}], position: 8939, duration: 311, easing: "easeInQuad" },
            { id: "eid409", tween: [ "transform", "${_elektip}", "rotateZ", '-75deg', { fromValue: '-74deg'}], position: 9250, duration: 175, easing: "easeInQuad" },
            { id: "eid420", tween: [ "transform", "${_elektip}", "rotateZ", '-225deg', { fromValue: '-75deg'}], position: 9425, duration: 75, easing: "easeInQuad" },
            { id: "eid431", tween: [ "transform", "${_elektip}", "rotateZ", '-247deg', { fromValue: '-225deg'}], position: 9500, duration: 453, easing: "easeInQuad" },
            { id: "eid437", tween: [ "transform", "${_elektip}", "rotateZ", '-280deg', { fromValue: '-247deg'}], position: 9953, duration: 209, easing: "easeInQuad" },
            { id: "eid18", tween: [ "transform", "${_Group}", "rotateZ", '-21deg', { fromValue: '0deg'}], position: 0, duration: 653, easing: "easeOutQuad" },
            { id: "eid88", tween: [ "transform", "${_Group}", "rotateZ", '0deg', { fromValue: '-21deg'}], position: 653, duration: 653, easing: "easeInBack" },
            { id: "eid124", tween: [ "transform", "${_Group}", "rotateZ", '24deg', { fromValue: '0deg'}], position: 1306, duration: 1010 },
            { id: "eid129", tween: [ "transform", "${_Group}", "rotateZ", '0deg', { fromValue: '24deg'}], position: 2316, duration: 617, easing: "easeOutBounce" },
            { id: "eid144", tween: [ "transform", "${_Group}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid11", tween: [ "transform", "${_Body}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid85", tween: [ "transform", "${_Body}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 653, duration: 0 },
            { id: "eid157", tween: [ "transform", "${_Body}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid2", tween: [ "transform", "${_NasenlochCopy}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid56", tween: [ "transform", "${_NasenlochCopy}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 653, duration: 0 },
            { id: "eid174", tween: [ "transform", "${_NasenlochCopy}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid388", tween: [ "style", "${_elektip}", "opacity", '1', { fromValue: '0.000000'}], position: 8089, duration: 161, easing: "easeInQuad" },
            { id: "eid418", tween: [ "style", "${_elektip}", "opacity", '0', { fromValue: '1'}], position: 9092, duration: 56, easing: "easeInQuad" },
            { id: "eid421", tween: [ "style", "${_elektip}", "opacity", '1', { fromValue: '0'}], position: 9204, duration: 46, easing: "easeInQuad" },
            { id: "eid443", tween: [ "style", "${_elektip}", "opacity", '0', { fromValue: '1'}], position: 10441, duration: 59, easing: "easeInQuad" },
            { id: "eid46", tween: [ "style", "${_Body}", "left", '28px', { fromValue: '28px'}], position: 0, duration: 0 },
            { id: "eid84", tween: [ "style", "${_Body}", "left", '28px', { fromValue: '28px'}], position: 653, duration: 0 },
            { id: "eid155", tween: [ "style", "${_Body}", "left", '28px', { fromValue: '28px'}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid44", tween: [ "style", "${_elekleftiris}", "left", '122px', { fromValue: '122px'}], position: 0, duration: 0 },
            { id: "eid81", tween: [ "style", "${_elekleftiris}", "left", '122px', { fromValue: '122px'}], position: 653, duration: 0 },
            { id: "eid232", tween: [ "style", "${_elekleftiris}", "left", '120px', { fromValue: '122px'}], position: 3937, duration: 774 },
            { id: "eid286", tween: [ "style", "${_elekleftiris}", "left", '122px', { fromValue: '120px'}], position: 5610, duration: 461 },
            { id: "eid20", tween: [ "transform", "${_elekleftleg}", "rotateZ", '11deg', { fromValue: '0deg'}], position: 0, duration: 500, easing: "easeOutQuad" },
            { id: "eid89", tween: [ "transform", "${_elekleftleg}", "rotateZ", '0deg', { fromValue: '11deg'}], position: 653, duration: 500, easing: "easeInBack" },
            { id: "eid110", tween: [ "transform", "${_elekleftleg}", "rotateZ", '22deg', { fromValue: '0deg'}], position: 1679, duration: 424 },
            { id: "eid130", tween: [ "transform", "${_elekleftleg}", "rotateZ", '0deg', { fromValue: '22deg'}], position: 2103, duration: 830, easing: "easeOutBounce" },
            { id: "eid150", tween: [ "transform", "${_elekleftleg}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid383", tween: [ "transform", "${_RoundRectCopy}", "rotateZ", '10deg', { fromValue: '10deg'}], position: 7940, duration: 0, easing: "easeInOutBounce" },
            { id: "eid12", tween: [ "style", "${_elekrightleg}", "-webkit-transform-origin", [10.31,6.25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10.31,6.25]}], position: 0, duration: 0 },
            { id: "eid715", tween: [ "style", "${_elekrightleg}", "-moz-transform-origin", [10.31,6.25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10.31,6.25]}], position: 0, duration: 0 },
            { id: "eid716", tween: [ "style", "${_elekrightleg}", "-ms-transform-origin", [10.31,6.25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10.31,6.25]}], position: 0, duration: 0 },
            { id: "eid717", tween: [ "style", "${_elekrightleg}", "msTransformOrigin", [10.31,6.25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10.31,6.25]}], position: 0, duration: 0 },
            { id: "eid718", tween: [ "style", "${_elekrightleg}", "-o-transform-origin", [10.31,6.25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10.31,6.25]}], position: 0, duration: 0 },
            { id: "eid64", tween: [ "style", "${_elekrightleg}", "-webkit-transform-origin", [10.31,6.25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10.31,6.25]}], position: 653, duration: 0 },
            { id: "eid719", tween: [ "style", "${_elekrightleg}", "-moz-transform-origin", [10.31,6.25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10.31,6.25]}], position: 653, duration: 0 },
            { id: "eid720", tween: [ "style", "${_elekrightleg}", "-ms-transform-origin", [10.31,6.25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10.31,6.25]}], position: 653, duration: 0 },
            { id: "eid721", tween: [ "style", "${_elekrightleg}", "msTransformOrigin", [10.31,6.25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10.31,6.25]}], position: 653, duration: 0 },
            { id: "eid722", tween: [ "style", "${_elekrightleg}", "-o-transform-origin", [10.31,6.25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10.31,6.25]}], position: 653, duration: 0 },
            { id: "eid167", tween: [ "style", "${_elekrightleg}", "-webkit-transform-origin", [10.31,6.25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10.31,6.25]}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid723", tween: [ "style", "${_elekrightleg}", "-moz-transform-origin", [10.31,6.25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10.31,6.25]}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid724", tween: [ "style", "${_elekrightleg}", "-ms-transform-origin", [10.31,6.25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10.31,6.25]}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid725", tween: [ "style", "${_elekrightleg}", "msTransformOrigin", [10.31,6.25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10.31,6.25]}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid726", tween: [ "style", "${_elekrightleg}", "-o-transform-origin", [10.31,6.25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10.31,6.25]}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid39", tween: [ "style", "${_elekmouth}", "top", '189px', { fromValue: '189px'}], position: 0, duration: 0 },
            { id: "eid70", tween: [ "style", "${_elekmouth}", "top", '189px', { fromValue: '189px'}], position: 653, duration: 0 },
            { id: "eid162", tween: [ "style", "${_elekmouth}", "top", '189px', { fromValue: '189px'}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid222", tween: [ "transform", "${_elekleftiris}", "scaleX", '1.20982', { fromValue: '1'}], position: 3937, duration: 774 },
            { id: "eid287", tween: [ "transform", "${_elekleftiris}", "scaleX", '1', { fromValue: '1.20982'}], position: 5610, duration: 462 },
            { id: "eid29", tween: [ "style", "${_NasenlochCopy}", "top", '152px', { fromValue: '152px'}], position: 0, duration: 0 },
            { id: "eid54", tween: [ "style", "${_NasenlochCopy}", "top", '152px', { fromValue: '152px'}], position: 653, duration: 0 },
            { id: "eid195", tween: [ "style", "${_NasenlochCopy}", "top", '146px', { fromValue: '152px'}], position: 3937, duration: 207, easing: "easeInOutBounce" },
            { id: "eid197", tween: [ "style", "${_NasenlochCopy}", "top", '152px', { fromValue: '146px'}], position: 4144, duration: 250, easing: "easeInOutBounce" },
            { id: "eid200", tween: [ "style", "${_NasenlochCopy}", "top", '146px', { fromValue: '152px'}], position: 4394, duration: 250, easing: "easeInOutBounce" },
            { id: "eid203", tween: [ "style", "${_NasenlochCopy}", "top", '152px', { fromValue: '146px'}], position: 4644, duration: 149, easing: "easeInOutBounce" },
            { id: "eid242", tween: [ "style", "${_NasenlochCopy}", "top", '146px', { fromValue: '152px'}], position: 4793, duration: 306, easing: "easeInOutBounce" },
            { id: "eid264", tween: [ "style", "${_NasenlochCopy}", "top", '152px', { fromValue: '146px'}], position: 5099, duration: 306, easing: "easeInOutBounce" },
            { id: "eid270", tween: [ "style", "${_NasenlochCopy}", "top", '146px', { fromValue: '152px'}], position: 5405, duration: 205, easing: "easeInOutBounce" },
            { id: "eid271", tween: [ "style", "${_NasenlochCopy}", "top", '152px', { fromValue: '146px'}], position: 5610, duration: 205, easing: "easeInOutBounce" },
            { id: "eid34", tween: [ "style", "${_elekrightleg}", "left", '211px', { fromValue: '211px'}], position: 0, duration: 0 },
            { id: "eid65", tween: [ "style", "${_elekrightleg}", "left", '211px', { fromValue: '211px'}], position: 653, duration: 0 },
            { id: "eid147", tween: [ "style", "${_elekrightleg}", "left", '211px', { fromValue: '211px'}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid10", tween: [ "transform", "${_elekleftiris}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid82", tween: [ "transform", "${_elekleftiris}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 653, duration: 0 },
            { id: "eid154", tween: [ "transform", "${_elekleftiris}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid35", tween: [ "style", "${_elekrightleg}", "top", '211px', { fromValue: '211px'}], position: 0, duration: 0 },
            { id: "eid63", tween: [ "style", "${_elekrightleg}", "top", '211px', { fromValue: '211px'}], position: 653, duration: 0 },
            { id: "eid146", tween: [ "style", "${_elekrightleg}", "top", '211px', { fromValue: '211px'}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid30", tween: [ "style", "${_Nasenloch}", "left", '185px', { fromValue: '185px'}], position: 0, duration: 0 },
            { id: "eid58", tween: [ "style", "${_Nasenloch}", "left", '185px', { fromValue: '185px'}], position: 653, duration: 0 },
            { id: "eid201", tween: [ "style", "${_Nasenloch}", "left", '186px', { fromValue: '185px'}], position: 3937, duration: 707, easing: "easeInOutBounce" },
            { id: "eid412", tween: [ "transform", "${_elektip}", "scaleX", '0.76811', { fromValue: '1'}], position: 8089, duration: 411, easing: "easeInQuad" },
            { id: "eid413", tween: [ "transform", "${_elektip}", "scaleX", '0.87651', { fromValue: '0.76811'}], position: 8500, duration: 157, easing: "easeInQuad" },
            { id: "eid415", tween: [ "transform", "${_elektip}", "scaleX", '0.84601', { fromValue: '0.87651'}], position: 8657, duration: 282, easing: "easeInQuad" },
            { id: "eid426", tween: [ "transform", "${_elektip}", "scaleX", '0.7161', { fromValue: '0.84601'}], position: 8939, duration: 718, easing: "easeInQuad" },
            { id: "eid432", tween: [ "transform", "${_elektip}", "scaleX", '0.87356', { fromValue: '0.7161'}], position: 9657, duration: 296, easing: "easeInQuad" },
            { id: "eid17", tween: [ "style", "${_Group}", "-webkit-transform-origin", [4.43,97.6], { valueTemplate: '@@0@@% @@1@@%', fromValue: [4.43,97.6]}], position: 653, duration: 0 },
            { id: "eid727", tween: [ "style", "${_Group}", "-moz-transform-origin", [4.43,97.6], { valueTemplate: '@@0@@% @@1@@%', fromValue: [4.43,97.6]}], position: 653, duration: 0 },
            { id: "eid728", tween: [ "style", "${_Group}", "-ms-transform-origin", [4.43,97.6], { valueTemplate: '@@0@@% @@1@@%', fromValue: [4.43,97.6]}], position: 653, duration: 0 },
            { id: "eid729", tween: [ "style", "${_Group}", "msTransformOrigin", [4.43,97.6], { valueTemplate: '@@0@@% @@1@@%', fromValue: [4.43,97.6]}], position: 653, duration: 0 },
            { id: "eid730", tween: [ "style", "${_Group}", "-o-transform-origin", [4.43,97.6], { valueTemplate: '@@0@@% @@1@@%', fromValue: [4.43,97.6]}], position: 653, duration: 0 },
            { id: "eid112", tween: [ "style", "${_Group}", "-webkit-transform-origin", [79.07,99.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [4.43,97.6]}], position: 1306, duration: 373 },
            { id: "eid731", tween: [ "style", "${_Group}", "-moz-transform-origin", [79.07,99.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [4.43,97.6]}], position: 1306, duration: 373 },
            { id: "eid732", tween: [ "style", "${_Group}", "-ms-transform-origin", [79.07,99.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [4.43,97.6]}], position: 1306, duration: 373 },
            { id: "eid733", tween: [ "style", "${_Group}", "msTransformOrigin", [79.07,99.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [4.43,97.6]}], position: 1306, duration: 373 },
            { id: "eid734", tween: [ "style", "${_Group}", "-o-transform-origin", [79.07,99.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [4.43,97.6]}], position: 1306, duration: 373 },
            { id: "eid177", tween: [ "style", "${_Group}", "-webkit-transform-origin", [79.07,99.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [79.07,99.51]}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid735", tween: [ "style", "${_Group}", "-moz-transform-origin", [79.07,99.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [79.07,99.51]}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid736", tween: [ "style", "${_Group}", "-ms-transform-origin", [79.07,99.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [79.07,99.51]}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid737", tween: [ "style", "${_Group}", "msTransformOrigin", [79.07,99.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [79.07,99.51]}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid738", tween: [ "style", "${_Group}", "-o-transform-origin", [79.07,99.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [79.07,99.51]}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid32", tween: [ "style", "${_elekrightpupil}", "left", '201px', { fromValue: '201px'}], position: 0, duration: 0 },
            { id: "eid61", tween: [ "style", "${_elekrightpupil}", "left", '201px', { fromValue: '201px'}], position: 653, duration: 0 },
            { id: "eid239", tween: [ "style", "${_elekrightpupil}", "left", '205px', { fromValue: '201px'}], position: 3937, duration: 774 },
            { id: "eid304", tween: [ "style", "${_elekrightpupil}", "left", '201px', { fromValue: '205px'}], position: 5610, duration: 461 },
            { id: "eid42", tween: [ "style", "${_elekleftleg}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid78", tween: [ "style", "${_elekleftleg}", "left", '0px', { fromValue: '0px'}], position: 653, duration: 0 },
            { id: "eid148", tween: [ "style", "${_elekleftleg}", "left", '0px', { fromValue: '0px'}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid4", tween: [ "transform", "${_elekrightpupil}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid62", tween: [ "transform", "${_elekrightpupil}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 653, duration: 0 },
            { id: "eid168", tween: [ "transform", "${_elekrightpupil}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid45", tween: [ "style", "${_elekleftiris}", "top", '98px', { fromValue: '98px'}], position: 0, duration: 0 },
            { id: "eid80", tween: [ "style", "${_elekleftiris}", "top", '98px', { fromValue: '98px'}], position: 653, duration: 0 },
            { id: "eid233", tween: [ "style", "${_elekleftiris}", "top", '94px', { fromValue: '98px'}], position: 3937, duration: 774 },
            { id: "eid284", tween: [ "style", "${_elekleftiris}", "top", '98px', { fromValue: '94px'}], position: 5610, duration: 461 },
            { id: "eid28", tween: [ "style", "${_NasenlochCopy}", "left", '151px', { fromValue: '151px'}], position: 0, duration: 0 },
            { id: "eid55", tween: [ "style", "${_NasenlochCopy}", "left", '151px', { fromValue: '151px'}], position: 653, duration: 0 },
            { id: "eid199", tween: [ "style", "${_NasenlochCopy}", "left", '152px', { fromValue: '151px'}], position: 3937, duration: 707, easing: "easeInOutBounce" },
            { id: "eid191", tween: [ "transform", "${_NasenlochCopy}", "scaleX", '1', { fromValue: '1'}], position: 3937, duration: 0 },
            { id: "eid252", tween: [ "transform", "${_NasenlochCopy}", "scaleX", '1.26823', { fromValue: '1'}], position: 4894, duration: 205, easing: "easeInQuad" },
            { id: "eid262", tween: [ "transform", "${_NasenlochCopy}", "scaleX", '1', { fromValue: '1.26823'}], position: 5099, duration: 205, easing: "easeInQuad" },
            { id: "eid266", tween: [ "transform", "${_NasenlochCopy}", "scaleX", '1.26823', { fromValue: '1'}], position: 5405, duration: 205, easing: "easeInQuad" },
            { id: "eid267", tween: [ "transform", "${_NasenlochCopy}", "scaleX", '1', { fromValue: '1.26823'}], position: 5610, duration: 205, easing: "easeInQuad" },
            { id: "eid227", tween: [ "transform", "${_elekrightiris}", "scaleY", '1.2091', { fromValue: '1'}], position: 3937, duration: 774 },
            { id: "eid296", tween: [ "transform", "${_elekrightiris}", "scaleY", '1', { fromValue: '1.2091'}], position: 5610, duration: 461 },
            { id: "eid48", tween: [ "style", "${_Group}", "left", '1px', { fromValue: '0px'}], position: 0, duration: 653, easing: "easeOutQuad" },
            { id: "eid87", tween: [ "style", "${_Group}", "left", '0px', { fromValue: '1px'}], position: 653, duration: 653, easing: "easeInBack" },
            { id: "eid91", tween: [ "style", "${_Group}", "left", '-1px', { fromValue: '0px'}], position: 1306, duration: 121, easing: "easeOutBounce" },
            { id: "eid93", tween: [ "style", "${_Group}", "left", '0px', { fromValue: '-1px'}], position: 1427, duration: 252, easing: "easeInBounce" },
            { id: "eid132", tween: [ "style", "${_Group}", "left", '-1px', { fromValue: '0px'}], position: 1679, duration: 861, easing: "easeOutBounce" },
            { id: "eid133", tween: [ "style", "${_Group}", "left", '1px', { fromValue: '-1px'}], position: 2540, duration: 157, easing: "easeOutBounce" },
            { id: "eid137", tween: [ "style", "${_Group}", "left", '-1px', { fromValue: '1px'}], position: 2697, duration: 135, easing: "easeOutBounce" },
            { id: "eid140", tween: [ "style", "${_Group}", "left", '0px', { fromValue: '-1px'}], position: 2832, duration: 101, easing: "easeOutBounce" },
            { id: "eid142", tween: [ "style", "${_Group}", "left", '0px', { fromValue: '0px'}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid389", tween: [ "style", "${_elektip}", "top", '-16px', { fromValue: '31px'}], position: 8089, duration: 411, easing: "easeInQuad" },
            { id: "eid392", tween: [ "style", "${_elektip}", "top", '28px', { fromValue: '-16px'}], position: 8500, duration: 157, easing: "easeInQuad" },
            { id: "eid394", tween: [ "style", "${_elektip}", "top", '32px', { fromValue: '28px'}], position: 8657, duration: 93, easing: "easeInQuad" },
            { id: "eid397", tween: [ "style", "${_elektip}", "top", '0px', { fromValue: '32px'}], position: 8750, duration: 189, easing: "easeInQuad" },
            { id: "eid399", tween: [ "style", "${_elektip}", "top", '33px', { fromValue: '0px'}], position: 8939, duration: 209, easing: "easeInQuad" },
            { id: "eid401", tween: [ "style", "${_elektip}", "top", '65px', { fromValue: '33px'}], position: 9148, duration: 102, easing: "easeInQuad" },
            { id: "eid404", tween: [ "style", "${_elektip}", "top", '60px', { fromValue: '65px'}], position: 9250, duration: 175, easing: "easeInQuad" },
            { id: "eid406", tween: [ "style", "${_elektip}", "top", '168px', { fromValue: '60px'}], position: 9425, duration: 75, easing: "easeInQuad" },
            { id: "eid425", tween: [ "style", "${_elektip}", "top", '188px', { fromValue: '168px'}], position: 9500, duration: 157, easing: "easeInQuad" },
            { id: "eid428", tween: [ "style", "${_elektip}", "top", '128px', { fromValue: '188px'}], position: 9657, duration: 190, easing: "easeInQuad" },
            { id: "eid430", tween: [ "style", "${_elektip}", "top", '138px', { fromValue: '128px'}], position: 9847, duration: 106, easing: "easeInQuad" },
            { id: "eid434", tween: [ "style", "${_elektip}", "top", '116px', { fromValue: '138px'}], position: 9953, duration: 146, easing: "easeInQuad" },
            { id: "eid436", tween: [ "style", "${_elektip}", "top", '62px', { fromValue: '116px'}], position: 10099, duration: 17, easing: "easeInQuad" },
            { id: "eid439", tween: [ "style", "${_elektip}", "top", '57px', { fromValue: '62px'}], position: 10116, duration: 93, easing: "easeInQuad" },
            { id: "eid441", tween: [ "style", "${_elektip}", "top", '70px', { fromValue: '57px'}], position: 10209, duration: 114, easing: "easeInQuad" },
            { id: "eid38", tween: [ "style", "${_elekmouth}", "left", '138px', { fromValue: '138px'}], position: 0, duration: 0 },
            { id: "eid179", tween: [ "style", "${_elekmouth}", "left", '138px', { fromValue: '138px'}], position: 340, duration: 0, easing: "easeOutBounce" },
            { id: "eid71", tween: [ "style", "${_elekmouth}", "left", '138px', { fromValue: '138px'}], position: 653, duration: 0 },
            { id: "eid163", tween: [ "style", "${_elekmouth}", "left", '138px', { fromValue: '138px'}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid380", tween: [ "style", "${_RoundRectCopy}", "opacity", '1', { fromValue: '0.000000'}], position: 7940, duration: 149, easing: "easeInOutBounce" },
            { id: "eid452", tween: [ "style", "${_RoundRectCopy}", "opacity", '0.000000', { fromValue: '1'}], position: 10323, duration: 149, easing: "easeInOutBounce" },
            { id: "eid37", tween: [ "style", "${_elekrightiris}", "top", '99px', { fromValue: '99px'}], position: 0, duration: 0 },
            { id: "eid67", tween: [ "style", "${_elekrightiris}", "top", '99px', { fromValue: '99px'}], position: 653, duration: 0 },
            { id: "eid229", tween: [ "style", "${_elekrightiris}", "top", '93px', { fromValue: '99px'}], position: 3937, duration: 774 },
            { id: "eid294", tween: [ "style", "${_elekrightiris}", "top", '99px', { fromValue: '93px'}], position: 5610, duration: 461 },
            { id: "eid41", tween: [ "style", "${_elekleftpupil}", "top", '116px', { fromValue: '116px'}], position: 0, duration: 0 },
            { id: "eid73", tween: [ "style", "${_elekleftpupil}", "top", '116px', { fromValue: '116px'}], position: 653, duration: 0 },
            { id: "eid236", tween: [ "style", "${_elekleftpupil}", "top", '109px', { fromValue: '116px'}], position: 3937, duration: 774 },
            { id: "eid301", tween: [ "style", "${_elekleftpupil}", "top", '116px', { fromValue: '109px'}], position: 5610, duration: 461 },
            { id: "eid49", tween: [ "style", "${_Group}", "top", '17px', { fromValue: '0px'}], position: 0, duration: 653, easing: "easeOutQuad" },
            { id: "eid86", tween: [ "style", "${_Group}", "top", '0px', { fromValue: '17px'}], position: 653, duration: 653, easing: "easeInBack" },
            { id: "eid92", tween: [ "style", "${_Group}", "top", '9px', { fromValue: '0px'}], position: 1306, duration: 121, easing: "easeOutBounce" },
            { id: "eid94", tween: [ "style", "${_Group}", "top", '0px', { fromValue: '9px'}], position: 1427, duration: 252, easing: "easeInBounce" },
            { id: "eid134", tween: [ "style", "${_Group}", "top", '5px', { fromValue: '0px'}], position: 1679, duration: 861, easing: "easeOutBounce" },
            { id: "eid135", tween: [ "style", "${_Group}", "top", '-1px', { fromValue: '5px'}], position: 2540, duration: 71, easing: "easeOutBounce" },
            { id: "eid136", tween: [ "style", "${_Group}", "top", '10px', { fromValue: '-1px'}], position: 2611, duration: 86, easing: "easeOutBounce" },
            { id: "eid138", tween: [ "style", "${_Group}", "top", '-1px', { fromValue: '10px'}], position: 2697, duration: 53, easing: "easeOutBounce" },
            { id: "eid139", tween: [ "style", "${_Group}", "top", '10px', { fromValue: '-1px'}], position: 2750, duration: 82, easing: "easeOutBounce" },
            { id: "eid141", tween: [ "style", "${_Group}", "top", '0px', { fromValue: '10px'}], position: 2832, duration: 101, easing: "easeOutBounce" },
            { id: "eid143", tween: [ "style", "${_Group}", "top", '0px', { fromValue: '0px'}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid206", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0.000000'}], position: 7940, duration: 149, easing: "easeInOutBounce" },
            { id: "eid447", tween: [ "style", "${_RoundRect}", "opacity", '0.000000', { fromValue: '1'}], position: 10323, duration: 149, easing: "easeInOutBounce" },
            { id: "eid183", tween: [ "transform", "${_elekmouth}", "scaleX", '0.5902', { fromValue: '1'}], position: 0, duration: 653, easing: "easeInExpo" },
            { id: "eid181", tween: [ "transform", "${_elekmouth}", "scaleX", '1.28388', { fromValue: '0.5902'}], position: 653, duration: 774, easing: "easeInExpo" },
            { id: "eid184", tween: [ "transform", "${_elekmouth}", "scaleX", '1.28', { fromValue: '1.28388'}], position: 1427, duration: 638, easing: "easeInExpo" },
            { id: "eid185", tween: [ "transform", "${_elekmouth}", "scaleX", '0.70495', { fromValue: '1.28'}], position: 2065, duration: 339, easing: "easeInExpo" },
            { id: "eid187", tween: [ "transform", "${_elekmouth}", "scaleX", '1', { fromValue: '0.70495'}], position: 2404, duration: 477 },
            { id: "eid194", tween: [ "transform", "${_Nasenloch}", "scaleY", '1', { fromValue: '1'}], position: 3937, duration: 0 },
            { id: "eid255", tween: [ "transform", "${_Nasenloch}", "scaleY", '1.27', { fromValue: '1'}], position: 4894, duration: 205, easing: "easeInQuad" },
            { id: "eid259", tween: [ "transform", "${_Nasenloch}", "scaleY", '1', { fromValue: '1.27'}], position: 5099, duration: 205, easing: "easeInQuad" },
            { id: "eid274", tween: [ "transform", "${_Nasenloch}", "scaleY", '1.27', { fromValue: '1'}], position: 5405, duration: 205, easing: "easeInQuad" },
            { id: "eid275", tween: [ "transform", "${_Nasenloch}", "scaleY", '1', { fromValue: '1.27'}], position: 5610, duration: 205, easing: "easeInQuad" },
            { id: "eid40", tween: [ "style", "${_elekleftpupil}", "left", '143px', { fromValue: '143px'}], position: 0, duration: 0 },
            { id: "eid74", tween: [ "style", "${_elekleftpupil}", "left", '143px', { fromValue: '143px'}], position: 653, duration: 0 },
            { id: "eid235", tween: [ "style", "${_elekleftpupil}", "left", '138px', { fromValue: '143px'}], position: 3937, duration: 774 },
            { id: "eid300", tween: [ "style", "${_elekleftpupil}", "left", '143px', { fromValue: '138px'}], position: 5610, duration: 461 },
            { id: "eid6", tween: [ "transform", "${_elekrightiris}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid69", tween: [ "transform", "${_elekrightiris}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 653, duration: 0 },
            { id: "eid164", tween: [ "transform", "${_elekrightiris}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid36", tween: [ "style", "${_elekrightiris}", "left", '194px', { fromValue: '194px'}], position: 0, duration: 0 },
            { id: "eid68", tween: [ "style", "${_elekrightiris}", "left", '194px', { fromValue: '194px'}], position: 653, duration: 0 },
            { id: "eid228", tween: [ "style", "${_elekrightiris}", "left", '196px', { fromValue: '194px'}], position: 3937, duration: 774 },
            { id: "eid297", tween: [ "style", "${_elekrightiris}", "left", '194px', { fromValue: '196px'}], position: 5610, duration: 461 },
            { id: "eid19", tween: [ "style", "${_elekleftleg}", "-webkit-transform-origin", [81.24,51.71], { valueTemplate: '@@0@@% @@1@@%', fromValue: [81.24,51.71]}], position: 0, duration: 0 },
            { id: "eid739", tween: [ "style", "${_elekleftleg}", "-moz-transform-origin", [81.24,51.71], { valueTemplate: '@@0@@% @@1@@%', fromValue: [81.24,51.71]}], position: 0, duration: 0 },
            { id: "eid740", tween: [ "style", "${_elekleftleg}", "-ms-transform-origin", [81.24,51.71], { valueTemplate: '@@0@@% @@1@@%', fromValue: [81.24,51.71]}], position: 0, duration: 0 },
            { id: "eid741", tween: [ "style", "${_elekleftleg}", "msTransformOrigin", [81.24,51.71], { valueTemplate: '@@0@@% @@1@@%', fromValue: [81.24,51.71]}], position: 0, duration: 0 },
            { id: "eid742", tween: [ "style", "${_elekleftleg}", "-o-transform-origin", [81.24,51.71], { valueTemplate: '@@0@@% @@1@@%', fromValue: [81.24,51.71]}], position: 0, duration: 0 },
            { id: "eid96", tween: [ "style", "${_elekleftleg}", "-webkit-transform-origin", [84.2,20.46], { valueTemplate: '@@0@@% @@1@@%', fromValue: [81.24,51.71]}], position: 653, duration: 1244, easing: "easeInBounce" },
            { id: "eid779", tween: [ "style", "${_elekleftleg}", "-moz-transform-origin", [84.2,20.46], { valueTemplate: '@@0@@% @@1@@%', fromValue: [81.24,51.71]}], position: 653, duration: 1244, easing: "easeInBounce" },
            { id: "eid780", tween: [ "style", "${_elekleftleg}", "-ms-transform-origin", [84.2,20.46], { valueTemplate: '@@0@@% @@1@@%', fromValue: [81.24,51.71]}], position: 653, duration: 1244, easing: "easeInBounce" },
            { id: "eid781", tween: [ "style", "${_elekleftleg}", "msTransformOrigin", [84.2,20.46], { valueTemplate: '@@0@@% @@1@@%', fromValue: [81.24,51.71]}], position: 653, duration: 1244, easing: "easeInBounce" },
            { id: "eid782", tween: [ "style", "${_elekleftleg}", "-o-transform-origin", [84.2,20.46], { valueTemplate: '@@0@@% @@1@@%', fromValue: [81.24,51.71]}], position: 653, duration: 1244, easing: "easeInBounce" },
            { id: "eid151", tween: [ "style", "${_elekleftleg}", "-webkit-transform-origin", [84.2,20.46], { valueTemplate: '@@0@@% @@1@@%', fromValue: [84.2,20.46]}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid783", tween: [ "style", "${_elekleftleg}", "-moz-transform-origin", [84.2,20.46], { valueTemplate: '@@0@@% @@1@@%', fromValue: [84.2,20.46]}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid784", tween: [ "style", "${_elekleftleg}", "-ms-transform-origin", [84.2,20.46], { valueTemplate: '@@0@@% @@1@@%', fromValue: [84.2,20.46]}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid785", tween: [ "style", "${_elekleftleg}", "msTransformOrigin", [84.2,20.46], { valueTemplate: '@@0@@% @@1@@%', fromValue: [84.2,20.46]}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "eid786", tween: [ "style", "${_elekleftleg}", "-o-transform-origin", [84.2,20.46], { valueTemplate: '@@0@@% @@1@@%', fromValue: [84.2,20.46]}], position: 3937, duration: 0, easing: "easeOutBounce" }         ]
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
})(jQuery, AdobeEdge, "EDGE-2207778");
