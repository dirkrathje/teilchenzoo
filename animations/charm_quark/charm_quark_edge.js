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
            id:'charm_quark',
            type:'rect',
            rect:['84','13','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'charm_quark',
            symbolName:'charm_quark'
         }
         ]
      },
   states: {
      "Base State": {
         "${_charm_quark}": [
            ["transform", "scaleX", '0.64632'],
            ["style", "top", '14px'],
            ["transform", "scaleY", '0.64632'],
            ["style", "left", '21px']
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
         duration: 16715,
         autoPlay: true,
         timeline: [
            { id: "eid287", tween: [ "style", "${_charm_quark}", "top", '14px', { fromValue: '14px'}], position: 8375, duration: 0, easing: "easeInQuad" },
            { id: "eid283", tween: [ "transform", "${_charm_quark}", "scaleY", '0.64632', { fromValue: '0.64632'}], position: 8375, duration: 0, easing: "easeInQuad" },
            { id: "eid282", tween: [ "transform", "${_charm_quark}", "scaleX", '0.64632', { fromValue: '0.64632'}], position: 8375, duration: 0, easing: "easeInQuad" },
            { id: "eid286", tween: [ "style", "${_charm_quark}", "left", '21px', { fromValue: '21px'}], position: 8375, duration: 0, easing: "easeInQuad" },
            { id: "eid288", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_charm_quark}', [] ], ""], position: 8368 }         ]
      }
   }
},
"charm_quark": {
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
      id: 'chafoot',
      type: 'image',
      rect: ['208px','283px','75px','67px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/chafoot.png','0px','0px']
   },
   {
      id: 'chaleftleg',
      type: 'image',
      rect: ['106px','251px','98px','102px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/chaleftleg.png','0px','0px']
   },
   {
      rect: ['0px','0px','379','270','auto','auto'],
      id: 'Group',
      type: 'group',
      transform: [],
      c: [
      {
         rect: ['250px','50px','129px','55px','auto','auto'],
         id: 'chaarm',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/chaarm.png','0px','0px']
      },
      {
         id: 'chabody',
         type: 'image',
         rect: ['0px','0px','335px','270px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/chabody.png','0px','0px']
      },
      {
         id: 'chakissmouth',
         type: 'image',
         rect: ['151px','176px','61px','25px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/chakissmouth.png','0px','0px']
      },
      {
         id: 'chaleftiris',
         type: 'image',
         rect: ['134px','112px','28px','27px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/chaleftiris.png','0px','0px']
      },
      {
         id: 'chaleftpupil',
         type: 'image',
         rect: ['140px','124px','14px','11px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/chaleftpupil.png','0px','0px']
      },
      {
         id: 'chamouth',
         type: 'image',
         rect: ['127px','163px','104px','35px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/chamouth.png','0px','0px']
      },
      {
         id: 'charightiris',
         type: 'image',
         rect: ['202px','119px','28px','23px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/charightiris.png','0px','0px']
      },
      {
         id: 'charightpupil',
         type: 'image',
         rect: ['208px','129px','14px','11px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/charightpupil.png','0px','0px']
      },
      {
         transform: [[],['11'],[],['1.04185','1.04185']],
         rect: ['184px','116px','63px','32px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         type: 'ellipse',
         id: 'Ellipse2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         clip: ['rect(0px 63px 0.4525374472141266px 0px)'],
         fill: ['rgba(24,153,135,1)']
      },
      {
         transform: [],
         rect: ['115px','108px','65px','34px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         type: 'ellipse',
         id: 'Ellipse',
         stroke: [0,'rgba(0,0,0,1)','none'],
         clip: ['rect(0px 65.11227416992188px -0.298431396484375px 0px)'],
         fill: ['rgba(24,153,135,1.00)']
      },
      {
         rect: ['117px','88px','61px','28px','auto','auto'],
         id: 'chaleftlashes',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/chaleftlashes.png','0px','0px']
      },
      {
         rect: ['191px','97px','66px','31px','auto','auto'],
         id: 'charightlashes',
         transform: [],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/charightlashes.png','0px','0px']
      }]
   },
   {
      id: 'charightleg',
      type: 'image',
      rect: ['238px','247px','22px','45px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/charightleg.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_charightpupil}": [
            ["style", "top", '129px'],
            ["style", "height", '11px'],
            ["style", "left", '208px'],
            ["style", "width", '14px']
         ],
         "${_charightlashes}": [
            ["style", "top", '97px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '31px'],
            ["style", "-webkit-transform-origin", [37.94,113.08], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [37.94,113.08],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [37.94,113.08],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [37.94,113.08],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [37.94,113.08],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '191px'],
            ["style", "width", '66px']
         ],
         "${_chaleftpupil}": [
            ["style", "top", '124px'],
            ["style", "height", '11px'],
            ["style", "left", '140px'],
            ["style", "width", '14px']
         ],
         "${symbolSelector}": [
            ["style", "height", '353px'],
            ["style", "width", '379px']
         ],
         "${_charightleg}": [
            ["style", "top", '247px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '45px'],
            ["style", "left", '238px'],
            ["style", "width", '22px']
         ],
         "${_chaleftiris}": [
            ["style", "top", '112px'],
            ["style", "height", '27px'],
            ["style", "left", '134px'],
            ["style", "width", '28px']
         ],
         "${_chafoot}": [
            ["style", "top", '284px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.95534'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '67px'],
            ["transform", "scaleX", '0.95534'],
            ["style", "left", '208px'],
            ["style", "width", '75px']
         ],
         "${_Ellipse2}": [
            ["style", "top", '116px'],
            ["style", "height", '32px'],
            ["transform", "scaleY", '1.04185'],
            ["transform", "rotateZ", '11deg'],
            ["transform", "scaleX", '1.04185'],
            ["style", "left", '184px'],
            ["style", "clip", [0,63,0.4525374472141266,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '63px']
         ],
         "${_chaarm}": [
            ["style", "-webkit-transform-origin", [7.75,72.56], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [7.75,72.56],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [7.75,72.56],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [7.75,72.56],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [7.75,72.56],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '55px'],
            ["style", "top", '50px'],
            ["style", "left", '250px'],
            ["style", "width", '129px']
         ],
         "${_Group}": [
            ["style", "-webkit-transform-origin", [40.62,96.6], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [40.62,96.6],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [40.62,96.6],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [40.62,96.6],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [40.62,96.6],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '270px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '379px']
         ],
         "${_chakissmouth}": [
            ["style", "top", '174px'],
            ["style", "height", '25px'],
            ["transform", "scaleY", '0.53088'],
            ["transform", "rotateZ", '4deg'],
            ["transform", "scaleX", '0.53088'],
            ["style", "opacity", '0'],
            ["style", "left", '152px'],
            ["style", "width", '61px']
         ],
         "${_Ellipse}": [
            ["style", "top", '108px'],
            ["style", "left", '115px'],
            ["style", "clip", [0,65.11227416992188,-0.298431396484375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["color", "background-color", 'rgba(24,153,135,1.00)']
         ],
         "${_chabody}": [
            ["style", "height", '270px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '335px']
         ],
         "${_chamouth}": [
            ["style", "height", '35px'],
            ["style", "top", '163px'],
            ["style", "left", '127px'],
            ["style", "width", '104px']
         ],
         "${_chaleftleg}": [
            ["style", "top", '251px'],
            ["style", "height", '102px'],
            ["style", "left", '106px'],
            ["style", "width", '98px']
         ],
         "${_charightiris}": [
            ["style", "top", '119px'],
            ["style", "height", '23px'],
            ["style", "left", '202px'],
            ["style", "width", '28px']
         ],
         "${_chaleftlashes}": [
            ["style", "top", '88px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '28px'],
            ["style", "-webkit-transform-origin", [49.96,133.99], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [49.96,133.99],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [49.96,133.99],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [49.96,133.99],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [49.96,133.99],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '117px'],
            ["style", "width", '61px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 8145.59375,
         autoPlay: true,
         timeline: [
            { id: "eid73", tween: [ "style", "${_chafoot}", "-webkit-transform-origin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 3311, duration: 0, easing: "easeInOutQuad" },
            { id: "eid289", tween: [ "style", "${_chafoot}", "-moz-transform-origin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 3311, duration: 0, easing: "easeInOutQuad" },
            { id: "eid290", tween: [ "style", "${_chafoot}", "-ms-transform-origin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 3311, duration: 0, easing: "easeInOutQuad" },
            { id: "eid291", tween: [ "style", "${_chafoot}", "msTransformOrigin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 3311, duration: 0, easing: "easeInOutQuad" },
            { id: "eid292", tween: [ "style", "${_chafoot}", "-o-transform-origin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 3311, duration: 0, easing: "easeInOutQuad" },
            { id: "eid7", tween: [ "transform", "${_charightlashes}", "rotateZ", '26deg', { fromValue: '0deg'}], position: 250, duration: 250, easing: "easeInQuad" },
            { id: "eid21", tween: [ "transform", "${_charightlashes}", "rotateZ", '0deg', { fromValue: '26deg'}], position: 500, duration: 250, easing: "easeOutQuad" },
            { id: "eid28", tween: [ "transform", "${_charightlashes}", "rotateZ", '26deg', { fromValue: '0deg'}], position: 750, duration: 250, easing: "easeInOutQuad" },
            { id: "eid29", tween: [ "transform", "${_charightlashes}", "rotateZ", '0deg', { fromValue: '26deg'}], position: 1000, duration: 250, easing: "easeOutQuad" },
            { id: "eid170", tween: [ "transform", "${_charightlashes}", "rotateZ", '26deg', { fromValue: '0deg'}], position: 6938, duration: 250, easing: "easeInQuad" },
            { id: "eid171", tween: [ "transform", "${_charightlashes}", "rotateZ", '0deg', { fromValue: '26deg'}], position: 7779, duration: 250, easing: "easeOutQuad" },
            { id: "eid88", tween: [ "transform", "${_chafoot}", "scaleX", '0.88011', { fromValue: '0.95534'}], position: 3811, duration: 114, easing: "easeInOutQuad" },
            { id: "eid116", tween: [ "transform", "${_chafoot}", "scaleX", '0.95534', { fromValue: '0.88011'}], position: 4341, duration: 114, easing: "easeInOutQuad" },
            { id: "eid76", tween: [ "style", "${_chafoot}", "top", '273px', { fromValue: '284px'}], position: 3311, duration: 386, easing: "easeInOutQuad" },
            { id: "eid87", tween: [ "style", "${_chafoot}", "top", '274px', { fromValue: '273px'}], position: 3811, duration: 114, easing: "easeInOutQuad" },
            { id: "eid111", tween: [ "style", "${_chafoot}", "top", '273px', { fromValue: '274px'}], position: 4341, duration: 114, easing: "easeInOutQuad" },
            { id: "eid110", tween: [ "style", "${_chafoot}", "top", '284px', { fromValue: '273px'}], position: 4569, duration: 386, easing: "easeInOutQuad" },
            { id: "eid77", tween: [ "transform", "${_chafoot}", "rotateZ", '-35deg', { fromValue: '0deg'}], position: 3311, duration: 386, easing: "easeInOutQuad" },
            { id: "eid78", tween: [ "transform", "${_chafoot}", "rotateZ", '-48deg', { fromValue: '-35deg'}], position: 3697, duration: 114, easing: "easeInOutQuad" },
            { id: "eid85", tween: [ "transform", "${_chafoot}", "rotateZ", '-60deg', { fromValue: '-48deg'}], position: 3811, duration: 114, easing: "easeInOutQuad" },
            { id: "eid115", tween: [ "transform", "${_chafoot}", "rotateZ", '-48deg', { fromValue: '-60deg'}], position: 4341, duration: 114, easing: "easeInOutQuad" },
            { id: "eid114", tween: [ "transform", "${_chafoot}", "rotateZ", '-35deg', { fromValue: '-48deg'}], position: 4455, duration: 114, easing: "easeInOutQuad" },
            { id: "eid113", tween: [ "transform", "${_chafoot}", "rotateZ", '0deg', { fromValue: '-35deg'}], position: 4569, duration: 386, easing: "easeInOutQuad" },
            { id: "eid3", tween: [ "transform", "${_chaleftlashes}", "scaleY", '-0.91058', { fromValue: '1'}], position: 250, duration: 250, easing: "easeInQuad" },
            { id: "eid22", tween: [ "transform", "${_chaleftlashes}", "scaleY", '1', { fromValue: '-0.91058'}], position: 500, duration: 250, easing: "easeOutQuad" },
            { id: "eid30", tween: [ "transform", "${_chaleftlashes}", "scaleY", '-0.91058', { fromValue: '1'}], position: 750, duration: 250, easing: "easeInOutQuad" },
            { id: "eid31", tween: [ "transform", "${_chaleftlashes}", "scaleY", '1', { fromValue: '-0.91058'}], position: 1000, duration: 250, easing: "easeOutQuad" },
            { id: "eid172", tween: [ "transform", "${_chaleftlashes}", "scaleY", '-0.91058', { fromValue: '1'}], position: 6938, duration: 250, easing: "easeInQuad" },
            { id: "eid173", tween: [ "transform", "${_chaleftlashes}", "scaleY", '1', { fromValue: '-0.91058'}], position: 7779, duration: 250, easing: "easeOutQuad" },
            { id: "eid45", tween: [ "transform", "${_Group}", "rotateZ", '-13deg', { fromValue: '0deg'}], position: 3311, duration: 386, easing: "easeInOutQuad" },
            { id: "eid133", tween: [ "transform", "${_Group}", "rotateZ", '0deg', { fromValue: '-13deg'}], position: 4569, duration: 386, easing: "easeInOutQuad" },
            { id: "eid12", tween: [ "style", "${_Ellipse}", "clip", [0,65.11227416992188,37.041534423828125,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,65.11227416992188,-0.29843100905418396,0]}], position: 250, duration: 250, easing: "easeInQuad" },
            { id: "eid24", tween: [ "style", "${_Ellipse}", "clip", [0,65.11227416992188,-0.29843100905418396,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,65.11227416992188,37.041534423828125,0]}], position: 500, duration: 250, easing: "easeOutQuad" },
            { id: "eid34", tween: [ "style", "${_Ellipse}", "clip", [0,65.11227416992188,37.041534423828125,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,65.11227416992188,-0.29843100905418396,0]}], position: 750, duration: 250, easing: "easeInOutQuad" },
            { id: "eid35", tween: [ "style", "${_Ellipse}", "clip", [0,65.11227416992188,-0.29843100905418396,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,65.11227416992188,37.041534423828125,0]}], position: 1000, duration: 250, easing: "easeOutQuad" },
            { id: "eid176", tween: [ "style", "${_Ellipse}", "clip", [0,65.11227416992188,37.041534423828125,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,65.11227416992188,-0.29843100905418396,0]}], position: 6938, duration: 250, easing: "easeInQuad" },
            { id: "eid177", tween: [ "style", "${_Ellipse}", "clip", [0,65.11227416992188,-0.29843100905418396,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,65.11227416992188,37.041534423828125,0]}], position: 7779, duration: 250, easing: "easeOutQuad" },
            { id: "eid47", tween: [ "style", "${_Group}", "-webkit-transform-origin", [36.1,97.28], { valueTemplate: '@@0@@% @@1@@%', fromValue: [40.62,96.6]}], position: 3311, duration: 386, easing: "easeInOutQuad" },
            { id: "eid293", tween: [ "style", "${_Group}", "-moz-transform-origin", [36.1,97.28], { valueTemplate: '@@0@@% @@1@@%', fromValue: [40.62,96.6]}], position: 3311, duration: 386, easing: "easeInOutQuad" },
            { id: "eid306", tween: [ "style", "${_Group}", "-ms-transform-origin", [36.1,97.28], { valueTemplate: '@@0@@% @@1@@%', fromValue: [40.62,96.6]}], position: 3311, duration: 386, easing: "easeInOutQuad" },
            { id: "eid307", tween: [ "style", "${_Group}", "msTransformOrigin", [36.1,97.28], { valueTemplate: '@@0@@% @@1@@%', fromValue: [40.62,96.6]}], position: 3311, duration: 386, easing: "easeInOutQuad" },
            { id: "eid308", tween: [ "style", "${_Group}", "-o-transform-origin", [36.1,97.28], { valueTemplate: '@@0@@% @@1@@%', fromValue: [40.62,96.6]}], position: 3311, duration: 386, easing: "easeInOutQuad" },
            { id: "eid130", tween: [ "style", "${_Group}", "-webkit-transform-origin", [40.62,96.6], { valueTemplate: '@@0@@% @@1@@%', fromValue: [36.1,97.28]}], position: 4569, duration: 386, easing: "easeInOutQuad" },
            { id: "eid309", tween: [ "style", "${_Group}", "-moz-transform-origin", [40.62,96.6], { valueTemplate: '@@0@@% @@1@@%', fromValue: [36.1,97.28]}], position: 4569, duration: 386, easing: "easeInOutQuad" },
            { id: "eid310", tween: [ "style", "${_Group}", "-ms-transform-origin", [40.62,96.6], { valueTemplate: '@@0@@% @@1@@%', fromValue: [36.1,97.28]}], position: 4569, duration: 386, easing: "easeInOutQuad" },
            { id: "eid311", tween: [ "style", "${_Group}", "msTransformOrigin", [40.62,96.6], { valueTemplate: '@@0@@% @@1@@%', fromValue: [36.1,97.28]}], position: 4569, duration: 386, easing: "easeInOutQuad" },
            { id: "eid312", tween: [ "style", "${_Group}", "-o-transform-origin", [40.62,96.6], { valueTemplate: '@@0@@% @@1@@%', fromValue: [36.1,97.28]}], position: 4569, duration: 386, easing: "easeInOutQuad" },
            { id: "eid8", tween: [ "transform", "${_chaleftlashes}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 250, duration: 250, easing: "easeInQuad" },
            { id: "eid23", tween: [ "transform", "${_chaleftlashes}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 500, duration: 250, easing: "easeOutQuad" },
            { id: "eid32", tween: [ "transform", "${_chaleftlashes}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 750, duration: 250, easing: "easeInOutQuad" },
            { id: "eid33", tween: [ "transform", "${_chaleftlashes}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 1000, duration: 250, easing: "easeOutQuad" },
            { id: "eid174", tween: [ "transform", "${_chaleftlashes}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 6938, duration: 250, easing: "easeInQuad" },
            { id: "eid175", tween: [ "transform", "${_chaleftlashes}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 7779, duration: 250, easing: "easeOutQuad" },
            { id: "eid143", tween: [ "style", "${_chamouth}", "height", '17px', { fromValue: '35px'}], position: 6779, duration: 250, easing: "easeInOutQuad" },
            { id: "eid189", tween: [ "style", "${_chamouth}", "height", '35px', { fromValue: '17px'}], position: 7841, duration: 230, easing: "easeInOutQuad" },
            { id: "eid91", tween: [ "transform", "${_chaarm}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 3526, duration: 242, easing: "easeInOutQuad" },
            { id: "eid92", tween: [ "transform", "${_chaarm}", "rotateZ", '7deg', { fromValue: '-10deg'}], position: 3768, duration: 157, easing: "easeInOutQuad" },
            { id: "eid93", tween: [ "transform", "${_chaarm}", "rotateZ", '-10deg', { fromValue: '7deg'}], position: 3925, duration: 208, easing: "easeInOutQuad" },
            { id: "eid109", tween: [ "transform", "${_chaarm}", "rotateZ", '7deg', { fromValue: '-10deg'}], position: 4133, duration: 208, easing: "easeInOutQuad" },
            { id: "eid108", tween: [ "transform", "${_chaarm}", "rotateZ", '-10deg', { fromValue: '7deg'}], position: 4341, duration: 157, easing: "easeInOutQuad" },
            { id: "eid107", tween: [ "transform", "${_chaarm}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 4498, duration: 242, easing: "easeInOutQuad" },
            { id: "eid59", tween: [ "transform", "${_charightleg}", "rotateZ", '-18deg', { fromValue: '0deg'}], position: 3311, duration: 386, easing: "easeInOutQuad" },
            { id: "eid129", tween: [ "transform", "${_charightleg}", "rotateZ", '0deg', { fromValue: '-18deg'}], position: 4569, duration: 386, easing: "easeInOutQuad" },
            { id: "eid55", tween: [ "style", "${_charightleg}", "left", '241px', { fromValue: '238px'}], position: 3311, duration: 386, easing: "easeInOutQuad" },
            { id: "eid128", tween: [ "style", "${_charightleg}", "left", '238px', { fromValue: '241px'}], position: 4569, duration: 386, easing: "easeInOutQuad" },
            { id: "eid48", tween: [ "style", "${_Group}", "left", '3px', { fromValue: '0px'}], position: 3311, duration: 386, easing: "easeInOutQuad" },
            { id: "eid132", tween: [ "style", "${_Group}", "left", '0px', { fromValue: '3px'}], position: 4569, duration: 386, easing: "easeInOutQuad" },
            { id: "eid144", tween: [ "style", "${_chamouth}", "top", '181px', { fromValue: '163px'}], position: 6779, duration: 250, easing: "easeInOutQuad" },
            { id: "eid190", tween: [ "style", "${_chamouth}", "top", '163px', { fromValue: '181px'}], position: 7841, duration: 230, easing: "easeInOutQuad" },
            { id: "eid136", tween: [ "style", "${_chakissmouth}", "opacity", '1', { fromValue: '0'}], position: 6704, duration: 75, easing: "easeInOutQuad" },
            { id: "eid195", tween: [ "style", "${_chakissmouth}", "opacity", '0', { fromValue: '1'}], position: 8071, duration: 75, easing: "easeInOutQuad" },
            { id: "eid11", tween: [ "style", "${_Ellipse2}", "clip", [0,63,31.46516990661621,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,63,0.45253700017929077,0]}], position: 250, duration: 250, easing: "easeInQuad" },
            { id: "eid25", tween: [ "style", "${_Ellipse2}", "clip", [0,63,0.45253700017929077,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,63,31.46516990661621,0]}], position: 500, duration: 250, easing: "easeOutQuad" },
            { id: "eid36", tween: [ "style", "${_Ellipse2}", "clip", [0,63,31.46516990661621,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,63,0.45253700017929077,0]}], position: 750, duration: 250, easing: "easeInOutQuad" },
            { id: "eid37", tween: [ "style", "${_Ellipse2}", "clip", [0,63,0.45253700017929077,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,63,31.46516990661621,0]}], position: 1000, duration: 250, easing: "easeOutQuad" },
            { id: "eid178", tween: [ "style", "${_Ellipse2}", "clip", [0,63,31.46516990661621,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,63,0.45253700017929077,0]}], position: 6938, duration: 250, easing: "easeInQuad" },
            { id: "eid179", tween: [ "style", "${_Ellipse2}", "clip", [0,63,0.45253700017929077,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,63,31.46516990661621,0]}], position: 7779, duration: 250, easing: "easeOutQuad" },
            { id: "eid146", tween: [ "style", "${_chamouth}", "left", '157px', { fromValue: '127px'}], position: 6779, duration: 250, easing: "easeInOutQuad" },
            { id: "eid191", tween: [ "style", "${_chamouth}", "left", '127px', { fromValue: '157px'}], position: 7841, duration: 230, easing: "easeInOutQuad" },
            { id: "eid75", tween: [ "style", "${_chafoot}", "left", '214px', { fromValue: '208px'}], position: 3311, duration: 386, easing: "easeInOutQuad" },
            { id: "eid79", tween: [ "style", "${_chafoot}", "left", '212px', { fromValue: '214px'}], position: 3697, duration: 114, easing: "easeInOutQuad" },
            { id: "eid86", tween: [ "style", "${_chafoot}", "left", '210px', { fromValue: '212px'}], position: 3811, duration: 114, easing: "easeInOutQuad" },
            { id: "eid119", tween: [ "style", "${_chafoot}", "left", '212px', { fromValue: '210px'}], position: 4341, duration: 114, easing: "easeInOutQuad" },
            { id: "eid118", tween: [ "style", "${_chafoot}", "left", '214px', { fromValue: '212px'}], position: 4455, duration: 114, easing: "easeInOutQuad" },
            { id: "eid117", tween: [ "style", "${_chafoot}", "left", '208px', { fromValue: '214px'}], position: 4569, duration: 386, easing: "easeInOutQuad" },
            { id: "eid46", tween: [ "style", "${_Group}", "top", '9px', { fromValue: '0px'}], position: 3311, duration: 386, easing: "easeInOutQuad" },
            { id: "eid131", tween: [ "style", "${_Group}", "top", '0px', { fromValue: '9px'}], position: 4569, duration: 386, easing: "easeInOutQuad" },
            { id: "eid161", tween: [ "transform", "${_chakissmouth}", "scaleX", '1.20442', { fromValue: '0.53088'}], position: 6779, duration: 343, easing: "easeInOutQuad" },
            { id: "eid166", tween: [ "transform", "${_chakissmouth}", "scaleX", '1.32176', { fromValue: '1.20442'}], position: 7122, duration: 157, easing: "easeInOutQuad" },
            { id: "eid194", tween: [ "transform", "${_chakissmouth}", "scaleX", '1.20442', { fromValue: '1.32176'}], position: 7571, duration: 157, easing: "easeInOutQuad" },
            { id: "eid193", tween: [ "transform", "${_chakissmouth}", "scaleX", '0.53088', { fromValue: '1.20442'}], position: 7728, duration: 343, easing: "easeInOutQuad" },
            { id: "eid4", tween: [ "transform", "${_charightlashes}", "scaleY", '-0.91058', { fromValue: '1'}], position: 250, duration: 250, easing: "easeInQuad" },
            { id: "eid20", tween: [ "transform", "${_charightlashes}", "scaleY", '1', { fromValue: '-0.91058'}], position: 500, duration: 250, easing: "easeOutQuad" },
            { id: "eid26", tween: [ "transform", "${_charightlashes}", "scaleY", '-0.91058', { fromValue: '1'}], position: 750, duration: 250, easing: "easeInOutQuad" },
            { id: "eid27", tween: [ "transform", "${_charightlashes}", "scaleY", '1', { fromValue: '-0.91058'}], position: 1000, duration: 250, easing: "easeOutQuad" },
            { id: "eid168", tween: [ "transform", "${_charightlashes}", "scaleY", '-0.91058', { fromValue: '1'}], position: 6938, duration: 250, easing: "easeInQuad" },
            { id: "eid169", tween: [ "transform", "${_charightlashes}", "scaleY", '1', { fromValue: '-0.91058'}], position: 7779, duration: 250, easing: "easeOutQuad" },
            { id: "eid163", tween: [ "transform", "${_chakissmouth}", "rotateZ", '4deg', { fromValue: '4deg'}], position: 7122, duration: 0, easing: "easeInOutQuad" },
            { id: "eid56", tween: [ "style", "${_charightleg}", "top", '236px', { fromValue: '247px'}], position: 3311, duration: 386, easing: "easeInOutQuad" },
            { id: "eid127", tween: [ "style", "${_charightleg}", "top", '247px', { fromValue: '236px'}], position: 4569, duration: 386, easing: "easeInOutQuad" },
            { id: "eid145", tween: [ "style", "${_chamouth}", "width", '47px', { fromValue: '104px'}], position: 6779, duration: 250, easing: "easeInOutQuad" },
            { id: "eid192", tween: [ "style", "${_chamouth}", "width", '104px', { fromValue: '47px'}], position: 7841, duration: 230, easing: "easeInOutQuad" },
            { id: "eid89", tween: [ "transform", "${_chafoot}", "scaleY", '0.88011', { fromValue: '0.95534'}], position: 3811, duration: 114, easing: "easeInOutQuad" },
            { id: "eid112", tween: [ "transform", "${_chafoot}", "scaleY", '0.95534', { fromValue: '0.88011'}], position: 4341, duration: 114, easing: "easeInOutQuad" },
            { id: "eid162", tween: [ "transform", "${_chakissmouth}", "scaleY", '1.20442', { fromValue: '0.53088'}], position: 6779, duration: 343, easing: "easeInOutQuad" },
            { id: "eid167", tween: [ "transform", "${_chakissmouth}", "scaleY", '1.32176', { fromValue: '1.20442'}], position: 7122, duration: 157, easing: "easeInOutQuad" },
            { id: "eid197", tween: [ "transform", "${_chakissmouth}", "scaleY", '1.20442', { fromValue: '1.32176'}], position: 7571, duration: 157, easing: "easeInOutQuad" },
            { id: "eid196", tween: [ "transform", "${_chakissmouth}", "scaleY", '0.53088', { fromValue: '1.20442'}], position: 7728, duration: 343, easing: "easeInOutQuad" }         ]
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
})(jQuery, AdobeEdge, "EDGE-28464288");
