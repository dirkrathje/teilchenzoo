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
            id:'strange_quark',
            type:'rect',
            rect:['228','63','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'strange_quark',
            symbolName:'strange_quark'
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
         "${_strange_quark}": [
            ["style", "top", '42px'],
            ["transform", "scaleX", '0.64886'],
            ["style", "left", '149px'],
            ["transform", "scaleY", '0.64886']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 26034,
         autoPlay: true,
         timeline: [
            { id: "eid344", tween: [ "transform", "${_strange_quark}", "scaleX", '0.64886', { fromValue: '0.64886'}], position: 6370, duration: 0 },
            { id: "eid345", tween: [ "transform", "${_strange_quark}", "scaleY", '0.64886', { fromValue: '0.64886'}], position: 6370, duration: 0 },
            { id: "eid350", tween: [ "style", "${_strange_quark}", "top", '42px', { fromValue: '42px'}], position: 6370, duration: 0 },
            { id: "eid348", tween: [ "style", "${_strange_quark}", "left", '149px', { fromValue: '149px'}], position: 6370, duration: 0 },
            { id: "eid351", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_strange_quark}', [] ], ""], position: 6500 },
            { id: "eid360", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_strange_quark}', [] ], ""], position: 13018 },
            { id: "eid361", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${_strange_quark}', [] ], ""], position: 19503 }         ]
      }
   }
},
"strange_quark": {
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
      rect: ['-1px','7px','308','318','auto','auto'],
      c: [
      {
         id: 'strqbody',
         type: 'image',
         rect: ['0px','2px','267px','241px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/strqbody.png','0px','0px']
      },
      {
         id: 'strqleftarm',
         type: 'image',
         rect: ['54px','0px','55px','106px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/strqleftarm.png','0px','0px']
      },
      {
         id: 'strqleftleg',
         type: 'image',
         rect: ['31px','198px','69px','109px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/strqleftleg.png','0px','0px']
      },
      {
         id: 'strqleftpupil',
         type: 'image',
         rect: ['69px','115px','7px','8px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/strqleftpupil.png','0px','0px']
      },
      {
         id: 'strqrightarm',
         type: 'image',
         rect: ['214px','139px','94px','43px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/strqrightarm.png','0px','0px']
      },
      {
         id: 'strqrightleg',
         type: 'image',
         rect: ['128px','193px','70px','125px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/strqrightleg.png','0px','0px']
      },
      {
         id: 'strqrightpupil',
         type: 'image',
         rect: ['122px','103px','7px','8px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/strqrightpupil.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_strqrightpupil}": [
            ["style", "top", '103px'],
            ["style", "left", '122px']
         ],
         "${_strqleftpupil}": [
            ["style", "top", '116px'],
            ["style", "left", '72px']
         ],
         "${_Group}": [
            ["style", "-webkit-transform-origin", [62.99,49.66], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [62.99,49.66],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [62.99,49.66],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [62.99,49.66],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [62.99,49.66],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_strqleftleg}": [
            ["style", "top", '198px'],
            ["style", "left", '31px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '318px'],
            ["style", "width", '308px']
         ],
         "${_strqleftarm}": [
            ["style", "-webkit-transform-origin", [62.75,70.82], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [62.75,70.82],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [62.75,70.82],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [62.75,70.82],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [62.75,70.82],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '54px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_strqrightleg}": [
            ["style", "top", '193px'],
            ["style", "left", '128px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_strqbody}": [
            ["style", "left", '0px'],
            ["style", "top", '2px']
         ],
         "${_strqrightarm}": [
            ["style", "top", '139px'],
            ["style", "left", '214px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6370,
         autoPlay: true,
         timeline: [
            { id: "eid21", tween: [ "style", "${_strqleftarm}", "-webkit-transform-origin", [62.75,70.82], { valueTemplate: '@@0@@% @@1@@%', fromValue: [62.75,70.82]}], position: 250, duration: 0 },
            { id: "eid352", tween: [ "style", "${_strqleftarm}", "-moz-transform-origin", [62.75,70.82], { valueTemplate: '@@0@@% @@1@@%', fromValue: [62.75,70.82]}], position: 250, duration: 0 },
            { id: "eid353", tween: [ "style", "${_strqleftarm}", "-ms-transform-origin", [62.75,70.82], { valueTemplate: '@@0@@% @@1@@%', fromValue: [62.75,70.82]}], position: 250, duration: 0 },
            { id: "eid354", tween: [ "style", "${_strqleftarm}", "msTransformOrigin", [62.75,70.82], { valueTemplate: '@@0@@% @@1@@%', fromValue: [62.75,70.82]}], position: 250, duration: 0 },
            { id: "eid355", tween: [ "style", "${_strqleftarm}", "-o-transform-origin", [62.75,70.82], { valueTemplate: '@@0@@% @@1@@%', fromValue: [62.75,70.82]}], position: 250, duration: 0 },
            { id: "eid4", tween: [ "transform", "${_strqrightleg}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid43", tween: [ "style", "${_strqleftpupil}", "top", '122px', { fromValue: '116px'}], position: 1183, duration: 243 },
            { id: "eid113", tween: [ "style", "${_strqleftpupil}", "top", '116px', { fromValue: '122px'}], position: 1991, duration: 243 },
            { id: "eid223", tween: [ "style", "${_strqleftpupil}", "top", '122px', { fromValue: '116px'}], position: 3933, duration: 243 },
            { id: "eid224", tween: [ "style", "${_strqleftpupil}", "top", '116px', { fromValue: '122px'}], position: 4741, duration: 243 },
            { id: "eid15", tween: [ "style", "${_strqrightarm}", "left", '246px', { fromValue: '214px'}], position: 1000, duration: 250 },
            { id: "eid25", tween: [ "style", "${_strqrightarm}", "left", '214px', { fromValue: '246px'}], position: 1250, duration: 250 },
            { id: "eid29", tween: [ "style", "${_strqrightarm}", "left", '246px', { fromValue: '214px'}], position: 1500, duration: 250 },
            { id: "eid30", tween: [ "style", "${_strqrightarm}", "left", '214px', { fromValue: '246px'}], position: 1750, duration: 241 },
            { id: "eid114", tween: [ "style", "${_strqrightarm}", "left", '246px', { fromValue: '214px'}], position: 1991, duration: 250 },
            { id: "eid115", tween: [ "style", "${_strqrightarm}", "left", '214px', { fromValue: '246px'}], position: 2241, duration: 250 },
            { id: "eid116", tween: [ "style", "${_strqrightarm}", "left", '246px', { fromValue: '214px'}], position: 2491, duration: 250 },
            { id: "eid117", tween: [ "style", "${_strqrightarm}", "left", '214px', { fromValue: '246px'}], position: 2741, duration: 250 },
            { id: "eid207", tween: [ "style", "${_strqrightarm}", "left", '246px', { fromValue: '214px'}], position: 3750, duration: 250 },
            { id: "eid208", tween: [ "style", "${_strqrightarm}", "left", '214px', { fromValue: '246px'}], position: 4000, duration: 250 },
            { id: "eid209", tween: [ "style", "${_strqrightarm}", "left", '246px', { fromValue: '214px'}], position: 4250, duration: 250 },
            { id: "eid210", tween: [ "style", "${_strqrightarm}", "left", '214px', { fromValue: '246px'}], position: 4500, duration: 241 },
            { id: "eid211", tween: [ "style", "${_strqrightarm}", "left", '246px', { fromValue: '214px'}], position: 4741, duration: 250 },
            { id: "eid212", tween: [ "style", "${_strqrightarm}", "left", '214px', { fromValue: '246px'}], position: 4991, duration: 250 },
            { id: "eid213", tween: [ "style", "${_strqrightarm}", "left", '246px', { fromValue: '214px'}], position: 5241, duration: 250 },
            { id: "eid214", tween: [ "style", "${_strqrightarm}", "left", '214px', { fromValue: '246px'}], position: 5491, duration: 250 },
            { id: "eid5", tween: [ "style", "${_strqleftarm}", "left", '54px', { fromValue: '54px'}], position: 0, duration: 0 },
            { id: "eid6", tween: [ "style", "${_strqleftarm}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid162", tween: [ "transform", "${_Group}", "rotateZ", '27deg', { fromValue: '0deg'}], position: 3114, duration: 136 },
            { id: "eid170", tween: [ "transform", "${_Group}", "rotateZ", '180deg', { fromValue: '27deg'}], position: 3250, duration: 148 },
            { id: "eid277", tween: [ "transform", "${_Group}", "rotateZ", '360deg', { fromValue: '180deg'}], position: 6082, duration: 288 },
            { id: "eid41", tween: [ "style", "${_strqleftpupil}", "left", '72px', { fromValue: '72px'}], position: 0, duration: 0 },
            { id: "eid16", tween: [ "style", "${_strqrightarm}", "top", '140px', { fromValue: '139px'}], position: 1000, duration: 250 },
            { id: "eid26", tween: [ "style", "${_strqrightarm}", "top", '139px', { fromValue: '140px'}], position: 1250, duration: 250 },
            { id: "eid31", tween: [ "style", "${_strqrightarm}", "top", '140px', { fromValue: '139px'}], position: 1500, duration: 250 },
            { id: "eid32", tween: [ "style", "${_strqrightarm}", "top", '139px', { fromValue: '140px'}], position: 1750, duration: 241 },
            { id: "eid118", tween: [ "style", "${_strqrightarm}", "top", '140px', { fromValue: '139px'}], position: 1991, duration: 250 },
            { id: "eid119", tween: [ "style", "${_strqrightarm}", "top", '139px', { fromValue: '140px'}], position: 2241, duration: 250 },
            { id: "eid120", tween: [ "style", "${_strqrightarm}", "top", '140px', { fromValue: '139px'}], position: 2491, duration: 250 },
            { id: "eid121", tween: [ "style", "${_strqrightarm}", "top", '139px', { fromValue: '140px'}], position: 2741, duration: 250 },
            { id: "eid215", tween: [ "style", "${_strqrightarm}", "top", '140px', { fromValue: '139px'}], position: 3750, duration: 250 },
            { id: "eid216", tween: [ "style", "${_strqrightarm}", "top", '139px', { fromValue: '140px'}], position: 4000, duration: 250 },
            { id: "eid217", tween: [ "style", "${_strqrightarm}", "top", '140px', { fromValue: '139px'}], position: 4250, duration: 250 },
            { id: "eid218", tween: [ "style", "${_strqrightarm}", "top", '139px', { fromValue: '140px'}], position: 4500, duration: 241 },
            { id: "eid219", tween: [ "style", "${_strqrightarm}", "top", '140px', { fromValue: '139px'}], position: 4741, duration: 250 },
            { id: "eid220", tween: [ "style", "${_strqrightarm}", "top", '139px', { fromValue: '140px'}], position: 4991, duration: 250 },
            { id: "eid221", tween: [ "style", "${_strqrightarm}", "top", '140px', { fromValue: '139px'}], position: 5241, duration: 250 },
            { id: "eid222", tween: [ "style", "${_strqrightarm}", "top", '139px', { fromValue: '140px'}], position: 5491, duration: 250 },
            { id: "eid3", tween: [ "transform", "${_strqleftleg}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid45", tween: [ "style", "${_strqrightpupil}", "top", '107px', { fromValue: '103px'}], position: 1433, duration: 243 },
            { id: "eid111", tween: [ "style", "${_strqrightpupil}", "top", '103px', { fromValue: '107px'}], position: 2365, duration: 243 },
            { id: "eid173", tween: [ "style", "${_strqrightpupil}", "top", '107px', { fromValue: '103px'}], position: 4183, duration: 243 },
            { id: "eid174", tween: [ "style", "${_strqrightpupil}", "top", '103px', { fromValue: '107px'}], position: 5115, duration: 243 },
            { id: "eid22", tween: [ "transform", "${_strqleftarm}", "rotateZ", '21deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
            { id: "eid28", tween: [ "transform", "${_strqleftarm}", "rotateZ", '0deg', { fromValue: '21deg'}], position: 1500, duration: 500 },
            { id: "eid122", tween: [ "transform", "${_strqleftarm}", "rotateZ", '21deg', { fromValue: '0deg'}], position: 2000, duration: 500 },
            { id: "eid123", tween: [ "transform", "${_strqleftarm}", "rotateZ", '0deg', { fromValue: '21deg'}], position: 2500, duration: 500 },
            { id: "eid261", tween: [ "transform", "${_strqleftarm}", "rotateZ", '21deg', { fromValue: '0deg'}], position: 3750, duration: 500 },
            { id: "eid262", tween: [ "transform", "${_strqleftarm}", "rotateZ", '0deg', { fromValue: '21deg'}], position: 4250, duration: 500 },
            { id: "eid263", tween: [ "transform", "${_strqleftarm}", "rotateZ", '21deg', { fromValue: '0deg'}], position: 4750, duration: 500 },
            { id: "eid264", tween: [ "transform", "${_strqleftarm}", "rotateZ", '0deg', { fromValue: '21deg'}], position: 5250, duration: 500 },
            { id: "eid76", tween: [ "style", "${_strqleftleg}", "left", '27px', { fromValue: '31px'}], position: 750, duration: 128 },
            { id: "eid80", tween: [ "style", "${_strqleftleg}", "left", '31px', { fromValue: '27px'}], position: 878, duration: 122 },
            { id: "eid84", tween: [ "style", "${_strqleftleg}", "left", '27px', { fromValue: '31px'}], position: 1000, duration: 128 },
            { id: "eid85", tween: [ "style", "${_strqleftleg}", "left", '31px', { fromValue: '27px'}], position: 1128, duration: 128 },
            { id: "eid88", tween: [ "style", "${_strqleftleg}", "left", '27px', { fromValue: '31px'}], position: 1256, duration: 128 },
            { id: "eid89", tween: [ "style", "${_strqleftleg}", "left", '31px', { fromValue: '27px'}], position: 1384, duration: 128 },
            { id: "eid92", tween: [ "style", "${_strqleftleg}", "left", '27px', { fromValue: '31px'}], position: 1512, duration: 128 },
            { id: "eid93", tween: [ "style", "${_strqleftleg}", "left", '31px', { fromValue: '27px'}], position: 1640, duration: 128 },
            { id: "eid96", tween: [ "style", "${_strqleftleg}", "left", '27px', { fromValue: '31px'}], position: 1768, duration: 128 },
            { id: "eid97", tween: [ "style", "${_strqleftleg}", "left", '31px', { fromValue: '27px'}], position: 1896, duration: 128 },
            { id: "eid100", tween: [ "style", "${_strqleftleg}", "left", '27px', { fromValue: '31px'}], position: 2024, duration: 128 },
            { id: "eid101", tween: [ "style", "${_strqleftleg}", "left", '31px', { fromValue: '27px'}], position: 2152, duration: 128 },
            { id: "eid104", tween: [ "style", "${_strqleftleg}", "left", '27px', { fromValue: '31px'}], position: 2280, duration: 128 },
            { id: "eid105", tween: [ "style", "${_strqleftleg}", "left", '31px', { fromValue: '27px'}], position: 2408, duration: 128 },
            { id: "eid148", tween: [ "style", "${_strqleftleg}", "left", '27px', { fromValue: '31px'}], position: 2536, duration: 122 },
            { id: "eid149", tween: [ "style", "${_strqleftleg}", "left", '31px', { fromValue: '27px'}], position: 2658, duration: 125 },
            { id: "eid152", tween: [ "style", "${_strqleftleg}", "left", '27px', { fromValue: '31px'}], position: 2784, duration: 122 },
            { id: "eid153", tween: [ "style", "${_strqleftleg}", "left", '31px', { fromValue: '27px'}], position: 2906, duration: 125 },
            { id: "eid225", tween: [ "style", "${_strqleftleg}", "left", '27px', { fromValue: '31px'}], position: 3500, duration: 128 },
            { id: "eid226", tween: [ "style", "${_strqleftleg}", "left", '31px', { fromValue: '27px'}], position: 3628, duration: 122 },
            { id: "eid227", tween: [ "style", "${_strqleftleg}", "left", '27px', { fromValue: '31px'}], position: 3750, duration: 128 },
            { id: "eid228", tween: [ "style", "${_strqleftleg}", "left", '31px', { fromValue: '27px'}], position: 3878, duration: 128 },
            { id: "eid229", tween: [ "style", "${_strqleftleg}", "left", '27px', { fromValue: '31px'}], position: 4006, duration: 128 },
            { id: "eid230", tween: [ "style", "${_strqleftleg}", "left", '31px', { fromValue: '27px'}], position: 4134, duration: 128 },
            { id: "eid231", tween: [ "style", "${_strqleftleg}", "left", '27px', { fromValue: '31px'}], position: 4262, duration: 128 },
            { id: "eid232", tween: [ "style", "${_strqleftleg}", "left", '31px', { fromValue: '27px'}], position: 4390, duration: 128 },
            { id: "eid233", tween: [ "style", "${_strqleftleg}", "left", '27px', { fromValue: '31px'}], position: 4518, duration: 128 },
            { id: "eid234", tween: [ "style", "${_strqleftleg}", "left", '31px', { fromValue: '27px'}], position: 4646, duration: 128 },
            { id: "eid235", tween: [ "style", "${_strqleftleg}", "left", '27px', { fromValue: '31px'}], position: 4774, duration: 128 },
            { id: "eid236", tween: [ "style", "${_strqleftleg}", "left", '31px', { fromValue: '27px'}], position: 4902, duration: 128 },
            { id: "eid237", tween: [ "style", "${_strqleftleg}", "left", '27px', { fromValue: '31px'}], position: 5030, duration: 128 },
            { id: "eid238", tween: [ "style", "${_strqleftleg}", "left", '31px', { fromValue: '27px'}], position: 5158, duration: 128 },
            { id: "eid239", tween: [ "style", "${_strqleftleg}", "left", '27px', { fromValue: '31px'}], position: 5286, duration: 122 },
            { id: "eid240", tween: [ "style", "${_strqleftleg}", "left", '31px', { fromValue: '27px'}], position: 5408, duration: 125 },
            { id: "eid241", tween: [ "style", "${_strqleftleg}", "left", '27px', { fromValue: '31px'}], position: 5534, duration: 122 },
            { id: "eid242", tween: [ "style", "${_strqleftleg}", "left", '31px', { fromValue: '27px'}], position: 5656, duration: 125 },
            { id: "eid142", tween: [ "style", "${_Group}", "top", '0px', { fromValue: '0px'}], position: 750, duration: 0 },
            { id: "eid143", tween: [ "style", "${_Group}", "top", '0px', { fromValue: '0px'}], position: 2991, duration: 0 },
            { id: "eid165", tween: [ "style", "${_Group}", "top", '-43px', { fromValue: '0px'}], position: 3114, duration: 136 },
            { id: "eid169", tween: [ "style", "${_Group}", "top", '0px', { fromValue: '-43px'}], position: 3250, duration: 148 },
            { id: "eid269", tween: [ "style", "${_Group}", "top", '0px', { fromValue: '0px'}], position: 3628, duration: 0 },
            { id: "eid270", tween: [ "style", "${_Group}", "top", '0px', { fromValue: '0px'}], position: 5782, duration: 0 },
            { id: "eid272", tween: [ "style", "${_Group}", "top", '0px', { fromValue: '0px'}], position: 6082, duration: 0 },
            { id: "eid2", tween: [ "transform", "${_strqrightarm}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid140", tween: [ "style", "${_Group}", "left", '-218px', { fromValue: '0px'}], position: 878, duration: 2113 },
            { id: "eid164", tween: [ "style", "${_Group}", "left", '-215px', { fromValue: '-218px'}], position: 3114, duration: 136 },
            { id: "eid168", tween: [ "style", "${_Group}", "left", '-164px', { fromValue: '-215px'}], position: 3250, duration: 148 },
            { id: "eid267", tween: [ "style", "${_Group}", "left", '63px', { fromValue: '-164px'}], position: 3628, duration: 2154 },
            { id: "eid276", tween: [ "style", "${_Group}", "left", '-18px', { fromValue: '63px'}], position: 6082, duration: 168 },
            { id: "eid278", tween: [ "style", "${_Group}", "left", '0px', { fromValue: '-18px'}], position: 6250, duration: 120 },
            { id: "eid163", tween: [ "style", "${_Group}", "-webkit-transform-origin", [42.98,57.03], { valueTemplate: '@@0@@% @@1@@%', fromValue: [62.99,49.66]}], position: 3114, duration: 136 },
            { id: "eid356", tween: [ "style", "${_Group}", "-moz-transform-origin", [42.98,57.03], { valueTemplate: '@@0@@% @@1@@%', fromValue: [62.99,49.66]}], position: 3114, duration: 136 },
            { id: "eid357", tween: [ "style", "${_Group}", "-ms-transform-origin", [42.98,57.03], { valueTemplate: '@@0@@% @@1@@%', fromValue: [62.99,49.66]}], position: 3114, duration: 136 },
            { id: "eid358", tween: [ "style", "${_Group}", "msTransformOrigin", [42.98,57.03], { valueTemplate: '@@0@@% @@1@@%', fromValue: [62.99,49.66]}], position: 3114, duration: 136 },
            { id: "eid359", tween: [ "style", "${_Group}", "-o-transform-origin", [42.98,57.03], { valueTemplate: '@@0@@% @@1@@%', fromValue: [62.99,49.66]}], position: 3114, duration: 136 },
            { id: "eid167", tween: [ "style", "${_Group}", "-webkit-transform-origin", [40.63,43.28], { valueTemplate: '@@0@@% @@1@@%', fromValue: [42.98,57.03]}], position: 3250, duration: 148 },
            { id: "eid376", tween: [ "style", "${_Group}", "-moz-transform-origin", [40.63,43.28], { valueTemplate: '@@0@@% @@1@@%', fromValue: [42.98,57.03]}], position: 3250, duration: 148 },
            { id: "eid377", tween: [ "style", "${_Group}", "-ms-transform-origin", [40.63,43.28], { valueTemplate: '@@0@@% @@1@@%', fromValue: [42.98,57.03]}], position: 3250, duration: 148 },
            { id: "eid378", tween: [ "style", "${_Group}", "msTransformOrigin", [40.63,43.28], { valueTemplate: '@@0@@% @@1@@%', fromValue: [42.98,57.03]}], position: 3250, duration: 148 },
            { id: "eid379", tween: [ "style", "${_Group}", "-o-transform-origin", [40.63,43.28], { valueTemplate: '@@0@@% @@1@@%', fromValue: [42.98,57.03]}], position: 3250, duration: 148 },
            { id: "eid274", tween: [ "style", "${_Group}", "-webkit-transform-origin", [40.63,43.28], { valueTemplate: '@@0@@% @@1@@%', fromValue: [40.63,43.28]}], position: 6082, duration: 0 },
            { id: "eid380", tween: [ "style", "${_Group}", "-moz-transform-origin", [40.63,43.28], { valueTemplate: '@@0@@% @@1@@%', fromValue: [40.63,43.28]}], position: 6082, duration: 0 },
            { id: "eid381", tween: [ "style", "${_Group}", "-ms-transform-origin", [40.63,43.28], { valueTemplate: '@@0@@% @@1@@%', fromValue: [40.63,43.28]}], position: 6082, duration: 0 },
            { id: "eid382", tween: [ "style", "${_Group}", "msTransformOrigin", [40.63,43.28], { valueTemplate: '@@0@@% @@1@@%', fromValue: [40.63,43.28]}], position: 6082, duration: 0 },
            { id: "eid383", tween: [ "style", "${_Group}", "-o-transform-origin", [40.63,43.28], { valueTemplate: '@@0@@% @@1@@%', fromValue: [40.63,43.28]}], position: 6082, duration: 0 },
            { id: "eid77", tween: [ "style", "${_strqleftleg}", "top", '216px', { fromValue: '198px'}], position: 750, duration: 128 },
            { id: "eid81", tween: [ "style", "${_strqleftleg}", "top", '198px', { fromValue: '216px'}], position: 878, duration: 122 },
            { id: "eid86", tween: [ "style", "${_strqleftleg}", "top", '216px', { fromValue: '198px'}], position: 1000, duration: 128 },
            { id: "eid87", tween: [ "style", "${_strqleftleg}", "top", '198px', { fromValue: '216px'}], position: 1128, duration: 128 },
            { id: "eid90", tween: [ "style", "${_strqleftleg}", "top", '216px', { fromValue: '198px'}], position: 1256, duration: 128 },
            { id: "eid91", tween: [ "style", "${_strqleftleg}", "top", '198px', { fromValue: '216px'}], position: 1384, duration: 128 },
            { id: "eid94", tween: [ "style", "${_strqleftleg}", "top", '216px', { fromValue: '198px'}], position: 1512, duration: 128 },
            { id: "eid95", tween: [ "style", "${_strqleftleg}", "top", '198px', { fromValue: '216px'}], position: 1640, duration: 128 },
            { id: "eid98", tween: [ "style", "${_strqleftleg}", "top", '216px', { fromValue: '198px'}], position: 1768, duration: 128 },
            { id: "eid99", tween: [ "style", "${_strqleftleg}", "top", '198px', { fromValue: '216px'}], position: 1896, duration: 128 },
            { id: "eid102", tween: [ "style", "${_strqleftleg}", "top", '216px', { fromValue: '198px'}], position: 2024, duration: 128 },
            { id: "eid103", tween: [ "style", "${_strqleftleg}", "top", '198px', { fromValue: '216px'}], position: 2152, duration: 128 },
            { id: "eid106", tween: [ "style", "${_strqleftleg}", "top", '216px', { fromValue: '198px'}], position: 2280, duration: 128 },
            { id: "eid107", tween: [ "style", "${_strqleftleg}", "top", '198px', { fromValue: '216px'}], position: 2408, duration: 128 },
            { id: "eid150", tween: [ "style", "${_strqleftleg}", "top", '215px', { fromValue: '198px'}], position: 2536, duration: 122 },
            { id: "eid151", tween: [ "style", "${_strqleftleg}", "top", '198px', { fromValue: '215px'}], position: 2658, duration: 125 },
            { id: "eid154", tween: [ "style", "${_strqleftleg}", "top", '215px', { fromValue: '198px'}], position: 2784, duration: 122 },
            { id: "eid155", tween: [ "style", "${_strqleftleg}", "top", '198px', { fromValue: '215px'}], position: 2906, duration: 125 },
            { id: "eid243", tween: [ "style", "${_strqleftleg}", "top", '216px', { fromValue: '198px'}], position: 3500, duration: 128 },
            { id: "eid244", tween: [ "style", "${_strqleftleg}", "top", '198px', { fromValue: '216px'}], position: 3628, duration: 122 },
            { id: "eid245", tween: [ "style", "${_strqleftleg}", "top", '216px', { fromValue: '198px'}], position: 3750, duration: 128 },
            { id: "eid246", tween: [ "style", "${_strqleftleg}", "top", '198px', { fromValue: '216px'}], position: 3878, duration: 128 },
            { id: "eid247", tween: [ "style", "${_strqleftleg}", "top", '216px', { fromValue: '198px'}], position: 4006, duration: 128 },
            { id: "eid248", tween: [ "style", "${_strqleftleg}", "top", '198px', { fromValue: '216px'}], position: 4134, duration: 128 },
            { id: "eid249", tween: [ "style", "${_strqleftleg}", "top", '216px', { fromValue: '198px'}], position: 4262, duration: 128 },
            { id: "eid250", tween: [ "style", "${_strqleftleg}", "top", '198px', { fromValue: '216px'}], position: 4390, duration: 128 },
            { id: "eid251", tween: [ "style", "${_strqleftleg}", "top", '216px', { fromValue: '198px'}], position: 4518, duration: 128 },
            { id: "eid252", tween: [ "style", "${_strqleftleg}", "top", '198px', { fromValue: '216px'}], position: 4646, duration: 128 },
            { id: "eid253", tween: [ "style", "${_strqleftleg}", "top", '216px', { fromValue: '198px'}], position: 4774, duration: 128 },
            { id: "eid254", tween: [ "style", "${_strqleftleg}", "top", '198px', { fromValue: '216px'}], position: 4902, duration: 128 },
            { id: "eid255", tween: [ "style", "${_strqleftleg}", "top", '216px', { fromValue: '198px'}], position: 5030, duration: 128 },
            { id: "eid256", tween: [ "style", "${_strqleftleg}", "top", '198px', { fromValue: '216px'}], position: 5158, duration: 128 },
            { id: "eid257", tween: [ "style", "${_strqleftleg}", "top", '215px', { fromValue: '198px'}], position: 5286, duration: 122 },
            { id: "eid258", tween: [ "style", "${_strqleftleg}", "top", '198px', { fromValue: '215px'}], position: 5408, duration: 125 },
            { id: "eid259", tween: [ "style", "${_strqleftleg}", "top", '215px', { fromValue: '198px'}], position: 5534, duration: 122 },
            { id: "eid260", tween: [ "style", "${_strqleftleg}", "top", '198px', { fromValue: '215px'}], position: 5656, duration: 125 },
            { id: "eid47", tween: [ "style", "${_strqrightleg}", "top", '210px', { fromValue: '193px'}], position: 878, duration: 122 },
            { id: "eid51", tween: [ "style", "${_strqrightleg}", "top", '193px', { fromValue: '210px'}], position: 1000, duration: 125 },
            { id: "eid54", tween: [ "style", "${_strqrightleg}", "top", '210px', { fromValue: '193px'}], position: 1125, duration: 122 },
            { id: "eid55", tween: [ "style", "${_strqrightleg}", "top", '193px', { fromValue: '210px'}], position: 1247, duration: 125 },
            { id: "eid58", tween: [ "style", "${_strqrightleg}", "top", '210px', { fromValue: '193px'}], position: 1373, duration: 122 },
            { id: "eid59", tween: [ "style", "${_strqrightleg}", "top", '193px', { fromValue: '210px'}], position: 1495, duration: 125 },
            { id: "eid62", tween: [ "style", "${_strqrightleg}", "top", '210px', { fromValue: '193px'}], position: 1621, duration: 122 },
            { id: "eid63", tween: [ "style", "${_strqrightleg}", "top", '193px', { fromValue: '210px'}], position: 1743, duration: 125 },
            { id: "eid66", tween: [ "style", "${_strqrightleg}", "top", '210px', { fromValue: '193px'}], position: 1869, duration: 122 },
            { id: "eid67", tween: [ "style", "${_strqrightleg}", "top", '193px', { fromValue: '210px'}], position: 1991, duration: 125 },
            { id: "eid70", tween: [ "style", "${_strqrightleg}", "top", '210px', { fromValue: '193px'}], position: 2117, duration: 122 },
            { id: "eid71", tween: [ "style", "${_strqrightleg}", "top", '193px', { fromValue: '210px'}], position: 2239, duration: 125 },
            { id: "eid74", tween: [ "style", "${_strqrightleg}", "top", '210px', { fromValue: '193px'}], position: 2365, duration: 122 },
            { id: "eid75", tween: [ "style", "${_strqrightleg}", "top", '193px', { fromValue: '210px'}], position: 2487, duration: 121 },
            { id: "eid146", tween: [ "style", "${_strqrightleg}", "top", '210px', { fromValue: '193px'}], position: 2608, duration: 122 },
            { id: "eid147", tween: [ "style", "${_strqrightleg}", "top", '193px', { fromValue: '210px'}], position: 2730, duration: 125 },
            { id: "eid191", tween: [ "style", "${_strqrightleg}", "top", '210px', { fromValue: '193px'}], position: 3628, duration: 122 },
            { id: "eid192", tween: [ "style", "${_strqrightleg}", "top", '193px', { fromValue: '210px'}], position: 3750, duration: 125 },
            { id: "eid193", tween: [ "style", "${_strqrightleg}", "top", '210px', { fromValue: '193px'}], position: 3875, duration: 122 },
            { id: "eid194", tween: [ "style", "${_strqrightleg}", "top", '193px', { fromValue: '210px'}], position: 3997, duration: 125 },
            { id: "eid195", tween: [ "style", "${_strqrightleg}", "top", '210px', { fromValue: '193px'}], position: 4123, duration: 122 },
            { id: "eid196", tween: [ "style", "${_strqrightleg}", "top", '193px', { fromValue: '210px'}], position: 4245, duration: 125 },
            { id: "eid197", tween: [ "style", "${_strqrightleg}", "top", '210px', { fromValue: '193px'}], position: 4371, duration: 122 },
            { id: "eid198", tween: [ "style", "${_strqrightleg}", "top", '193px', { fromValue: '210px'}], position: 4493, duration: 125 },
            { id: "eid199", tween: [ "style", "${_strqrightleg}", "top", '210px', { fromValue: '193px'}], position: 4619, duration: 122 },
            { id: "eid200", tween: [ "style", "${_strqrightleg}", "top", '193px', { fromValue: '210px'}], position: 4741, duration: 125 },
            { id: "eid201", tween: [ "style", "${_strqrightleg}", "top", '210px', { fromValue: '193px'}], position: 4867, duration: 122 },
            { id: "eid202", tween: [ "style", "${_strqrightleg}", "top", '193px', { fromValue: '210px'}], position: 4989, duration: 125 },
            { id: "eid203", tween: [ "style", "${_strqrightleg}", "top", '210px', { fromValue: '193px'}], position: 5115, duration: 122 },
            { id: "eid204", tween: [ "style", "${_strqrightleg}", "top", '193px', { fromValue: '210px'}], position: 5237, duration: 121 },
            { id: "eid205", tween: [ "style", "${_strqrightleg}", "top", '210px', { fromValue: '193px'}], position: 5358, duration: 122 },
            { id: "eid206", tween: [ "style", "${_strqrightleg}", "top", '193px', { fromValue: '210px'}], position: 5480, duration: 125 },
            { id: "eid46", tween: [ "style", "${_strqrightleg}", "left", '124px', { fromValue: '128px'}], position: 878, duration: 122 },
            { id: "eid50", tween: [ "style", "${_strqrightleg}", "left", '128px', { fromValue: '124px'}], position: 1000, duration: 125 },
            { id: "eid52", tween: [ "style", "${_strqrightleg}", "left", '124px', { fromValue: '128px'}], position: 1125, duration: 122 },
            { id: "eid53", tween: [ "style", "${_strqrightleg}", "left", '128px', { fromValue: '124px'}], position: 1247, duration: 125 },
            { id: "eid56", tween: [ "style", "${_strqrightleg}", "left", '124px', { fromValue: '128px'}], position: 1373, duration: 122 },
            { id: "eid57", tween: [ "style", "${_strqrightleg}", "left", '128px', { fromValue: '124px'}], position: 1495, duration: 125 },
            { id: "eid60", tween: [ "style", "${_strqrightleg}", "left", '124px', { fromValue: '128px'}], position: 1621, duration: 122 },
            { id: "eid61", tween: [ "style", "${_strqrightleg}", "left", '128px', { fromValue: '124px'}], position: 1743, duration: 125 },
            { id: "eid64", tween: [ "style", "${_strqrightleg}", "left", '124px', { fromValue: '128px'}], position: 1869, duration: 122 },
            { id: "eid65", tween: [ "style", "${_strqrightleg}", "left", '128px', { fromValue: '124px'}], position: 1991, duration: 125 },
            { id: "eid68", tween: [ "style", "${_strqrightleg}", "left", '124px', { fromValue: '128px'}], position: 2117, duration: 122 },
            { id: "eid69", tween: [ "style", "${_strqrightleg}", "left", '128px', { fromValue: '124px'}], position: 2239, duration: 125 },
            { id: "eid72", tween: [ "style", "${_strqrightleg}", "left", '124px', { fromValue: '128px'}], position: 2365, duration: 122 },
            { id: "eid73", tween: [ "style", "${_strqrightleg}", "left", '128px', { fromValue: '124px'}], position: 2487, duration: 121 },
            { id: "eid144", tween: [ "style", "${_strqrightleg}", "left", '124px', { fromValue: '128px'}], position: 2608, duration: 122 },
            { id: "eid145", tween: [ "style", "${_strqrightleg}", "left", '128px', { fromValue: '124px'}], position: 2730, duration: 125 },
            { id: "eid175", tween: [ "style", "${_strqrightleg}", "left", '124px', { fromValue: '128px'}], position: 3628, duration: 122 },
            { id: "eid176", tween: [ "style", "${_strqrightleg}", "left", '128px', { fromValue: '124px'}], position: 3750, duration: 125 },
            { id: "eid177", tween: [ "style", "${_strqrightleg}", "left", '124px', { fromValue: '128px'}], position: 3875, duration: 122 },
            { id: "eid178", tween: [ "style", "${_strqrightleg}", "left", '128px', { fromValue: '124px'}], position: 3997, duration: 125 },
            { id: "eid179", tween: [ "style", "${_strqrightleg}", "left", '124px', { fromValue: '128px'}], position: 4123, duration: 122 },
            { id: "eid180", tween: [ "style", "${_strqrightleg}", "left", '128px', { fromValue: '124px'}], position: 4245, duration: 125 },
            { id: "eid181", tween: [ "style", "${_strqrightleg}", "left", '124px', { fromValue: '128px'}], position: 4371, duration: 122 },
            { id: "eid182", tween: [ "style", "${_strqrightleg}", "left", '128px', { fromValue: '124px'}], position: 4493, duration: 125 },
            { id: "eid183", tween: [ "style", "${_strqrightleg}", "left", '124px', { fromValue: '128px'}], position: 4619, duration: 122 },
            { id: "eid184", tween: [ "style", "${_strqrightleg}", "left", '128px', { fromValue: '124px'}], position: 4741, duration: 125 },
            { id: "eid185", tween: [ "style", "${_strqrightleg}", "left", '124px', { fromValue: '128px'}], position: 4867, duration: 122 },
            { id: "eid186", tween: [ "style", "${_strqrightleg}", "left", '128px', { fromValue: '124px'}], position: 4989, duration: 125 },
            { id: "eid187", tween: [ "style", "${_strqrightleg}", "left", '124px', { fromValue: '128px'}], position: 5115, duration: 122 },
            { id: "eid188", tween: [ "style", "${_strqrightleg}", "left", '128px', { fromValue: '124px'}], position: 5237, duration: 121 },
            { id: "eid189", tween: [ "style", "${_strqrightleg}", "left", '124px', { fromValue: '128px'}], position: 5358, duration: 122 },
            { id: "eid190", tween: [ "style", "${_strqrightleg}", "left", '128px', { fromValue: '124px'}], position: 5480, duration: 125 },
            { id: "eid44", tween: [ "style", "${_strqrightpupil}", "left", '125px', { fromValue: '122px'}], position: 1433, duration: 243 },
            { id: "eid110", tween: [ "style", "${_strqrightpupil}", "left", '122px', { fromValue: '125px'}], position: 2365, duration: 243 },
            { id: "eid171", tween: [ "style", "${_strqrightpupil}", "left", '125px', { fromValue: '122px'}], position: 4183, duration: 243 },
            { id: "eid172", tween: [ "style", "${_strqrightpupil}", "left", '122px', { fromValue: '125px'}], position: 5115, duration: 243 }         ]
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
})(jQuery, AdobeEdge, "EDGE-22654658");
