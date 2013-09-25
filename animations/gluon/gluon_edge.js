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
            id:'gluon',
            type:'rect',
            rect:['190','35','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'gluon',
            symbolName:'gluon'
         }
         ]
      },
   states: {
      "Base State": {
         "${_gluon}": [
            ["style", "top", '-4px'],
            ["transform", "scaleY", '0.73317'],
            ["style", "left", '113px'],
            ["transform", "scaleX", '0.73317']
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
         duration: 17593,
         autoPlay: true,
         timeline: [
            { id: "eid211", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_gluon}', [] ], ""], position: 8799 }         ]
      }
   }
},
"gluon": {
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
      rect: ['44px','74px','76px','93px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(232,93,126,1.00)']
   },
   {
      rect: ['43px','145px','76px','100px','auto','auto'],
      transform: [[],[],['-3']],
      id: 'RectangleCopy',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(232,93,126,1.00)']
   },
   {
      id: 'glufoot',
      type: 'image',
      rect: ['0px','203px','157px','117px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/glufoot.png','0px','0px']
   },
   {
      id: 'gluhead',
      type: 'image',
      rect: ['15px','0px','153px','142px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gluhead.png','0px','0px']
   },
   {
      id: 'glulh1',
      type: 'image',
      rect: ['21px','6px','21px','27px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/glulh1.png','0px','0px']
   },
   {
      id: 'glulh2',
      type: 'image',
      rect: ['27px','13px','9px','12px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/glulh2.png','0px','0px']
   },
   {
      id: 'glulu1',
      type: 'image',
      rect: ['5px','283px','23px','33px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/glulu1.png','0px','0px']
   },
   {
      id: 'glulu2',
      type: 'image',
      rect: ['11px','292px','10px','13px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/glulu2.png','0px','0px']
   },
   {
      id: 'glurh1',
      type: 'image',
      rect: ['148px','4px','16px','19px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/glurh1.png','0px','0px']
   },
   {
      id: 'glurh2',
      type: 'image',
      rect: ['153px','7px','6px','8px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/glurh2.png','0px','0px']
   },
   {
      id: 'gluru1',
      type: 'image',
      rect: ['133px','289px','22px','23px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gluru1.png','0px','0px']
   },
   {
      id: 'gluru2',
      type: 'image',
      rect: ['142px','299px','8px','8px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gluru2.png','0px','0px']
   },
   {
      id: 'glumouth',
      type: 'image',
      rect: ['15px','139px','153px','69px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/glumouth.png','0px','0px']
   },
   {
      id: 'glurightpupil',
      type: 'image',
      rect: ['102px','108px','9px','13px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/glurightpupil.png','0px','0px']
   },
   {
      id: 'glurightpupilCopy',
      type: 'image',
      rect: ['64px','108px','9px','13px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/glurightpupil.png','0px','0px']
   },
   {
      rect: ['59px','79px','64px','4px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(232,93,126,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "top", '79px'],
            ["style", "height", '4px'],
            ["style", "opacity", '0'],
            ["style", "left", '59px'],
            ["style", "width", '64px']
         ],
         "${_glulh1}": [
            ["style", "top", '6px'],
            ["style", "height", '27px'],
            ["style", "opacity", '1'],
            ["style", "left", '21px'],
            ["style", "width", '21px']
         ],
         "${_gluru2}": [
            ["style", "top", '299px'],
            ["style", "height", '8px'],
            ["style", "left", '142px'],
            ["style", "width", '8px']
         ],
         "${_glurh1}": [
            ["style", "top", '4px'],
            ["style", "height", '19px'],
            ["style", "opacity", '1'],
            ["style", "left", '148px'],
            ["style", "width", '16px']
         ],
         "${_glufoot}": [
            ["style", "top", '203px'],
            ["style", "height", '117px'],
            ["style", "left", '0px'],
            ["style", "width", '157px']
         ],
         "${_glulu1}": [
            ["style", "top", '283px'],
            ["style", "height", '33px'],
            ["style", "opacity", '1'],
            ["style", "left", '5px'],
            ["style", "width", '23px']
         ],
         "${_RectangleCopy}": [
            ["color", "background-color", 'rgba(232,93,126,1)'],
            ["transform", "skewX", '-3deg'],
            ["style", "height", '57px'],
            ["style", "top", '154px'],
            ["style", "left", '44px'],
            ["style", "width", '76px']
         ],
         "${_glurightpupilCopy}": [
            ["style", "height", '13px'],
            ["style", "top", '108px'],
            ["style", "left", '64px'],
            ["style", "width", '9px']
         ],
         "${_glulh2}": [
            ["style", "top", '13px'],
            ["style", "height", '12px'],
            ["style", "left", '27px'],
            ["style", "width", '9px']
         ],
         "${_Rectangle}": [
            ["style", "top", '74px'],
            ["style", "height", '93px'],
            ["color", "background-color", 'rgba(232,93,126,1.00)'],
            ["style", "left", '44px'],
            ["style", "width", '76px']
         ],
         "${_glulu2}": [
            ["style", "top", '292px'],
            ["style", "height", '13px'],
            ["style", "left", '11px'],
            ["style", "width", '10px']
         ],
         "${_gluhead}": [
            ["style", "top", '0px'],
            ["style", "height", '142px'],
            ["style", "left", '15px'],
            ["style", "width", '153px']
         ],
         "${_gluru1}": [
            ["style", "top", '289px'],
            ["style", "height", '23px'],
            ["style", "opacity", '1'],
            ["style", "left", '133px'],
            ["style", "width", '22px']
         ],
         "${_glurh2}": [
            ["style", "top", '7px'],
            ["style", "height", '8px'],
            ["style", "left", '153px'],
            ["style", "width", '6px']
         ],
         "${_glumouth}": [
            ["style", "top", '139px'],
            ["style", "height", '69px'],
            ["style", "left", '15px'],
            ["style", "width", '153px']
         ],
         "${_glurightpupil}": [
            ["style", "top", '108px'],
            ["style", "height", '13px'],
            ["style", "left", '102px'],
            ["style", "width", '9px']
         ],
         "${symbolSelector}": [
            ["style", "height", '320px'],
            ["style", "width", '168px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 8685.84765625,
         autoPlay: true,
         timeline: [
            { id: "eid11", tween: [ "style", "${_glurh1}", "left", '148px', { fromValue: '148px'}], position: 0, duration: 0 },
            { id: "eid47", tween: [ "style", "${_glulu2}", "height", '13px', { fromValue: '13px'}], position: 0, duration: 0 },
            { id: "eid57", tween: [ "style", "${_glulh1}", "top", '-24px', { fromValue: '6px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid118", tween: [ "style", "${_glulh1}", "top", '6px', { fromValue: '-24px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid55", tween: [ "style", "${_glurh2}", "top", '-23px', { fromValue: '7px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid110", tween: [ "style", "${_glurh2}", "top", '7px', { fromValue: '-23px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid86", tween: [ "style", "${_RectangleCopy}", "left", '43px', { fromValue: '44px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid123", tween: [ "style", "${_RectangleCopy}", "left", '44px', { fromValue: '43px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid23", tween: [ "style", "${_gluhead}", "left", '15px', { fromValue: '15px'}], position: 0, duration: 0 },
            { id: "eid67", tween: [ "style", "${_gluru2}", "top", '324px', { fromValue: '299px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid126", tween: [ "style", "${_gluru2}", "top", '299px', { fromValue: '324px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid68", tween: [ "style", "${_glulu1}", "left", '3px', { fromValue: '5px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid115", tween: [ "style", "${_glulu1}", "left", '5px', { fromValue: '3px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid40", tween: [ "style", "${_gluru2}", "height", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
            { id: "eid45", tween: [ "style", "${_glurh1}", "height", '19px', { fromValue: '19px'}], position: 0, duration: 0 },
            { id: "eid30", tween: [ "style", "${_glurightpupil}", "width", '9px', { fromValue: '9px'}], position: 0, duration: 0 },
            { id: "eid42", tween: [ "style", "${_glurightpupilCopy}", "height", '13px', { fromValue: '13px'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_glulh1}", "width", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
            { id: "eid66", tween: [ "style", "${_gluru2}", "left", '140px', { fromValue: '142px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid125", tween: [ "style", "${_gluru2}", "left", '142px', { fromValue: '140px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid59", tween: [ "style", "${_glulh2}", "top", '-17px', { fromValue: '13px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid117", tween: [ "style", "${_glulh2}", "top", '13px', { fromValue: '-17px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid63", tween: [ "style", "${_glufoot}", "top", '238px', { fromValue: '203px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid121", tween: [ "style", "${_glufoot}", "top", '203px', { fromValue: '238px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid44", tween: [ "style", "${_glurh2}", "height", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
            { id: "eid141", tween: [ "style", "${_glulu1}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 398 },
            { id: "eid145", tween: [ "style", "${_glulu1}", "opacity", '1', { fromValue: '0'}], position: 3148, duration: 434 },
            { id: "eid153", tween: [ "style", "${_glulu1}", "opacity", '0', { fromValue: '1'}], position: 3582, duration: 398 },
            { id: "eid154", tween: [ "style", "${_glulu1}", "opacity", '1', { fromValue: '0'}], position: 3980, duration: 434 },
            { id: "eid166", tween: [ "style", "${_glulu1}", "opacity", '0', { fromValue: '1'}], position: 4939, duration: 272 },
            { id: "eid167", tween: [ "style", "${_glulu1}", "opacity", '1', { fromValue: '0'}], position: 5211, duration: 289 },
            { id: "eid175", tween: [ "style", "${_glulu1}", "opacity", '0', { fromValue: '1'}], position: 6275, duration: 272 },
            { id: "eid176", tween: [ "style", "${_glulu1}", "opacity", '1', { fromValue: '0'}], position: 6547, duration: 289 },
            { id: "eid28", tween: [ "style", "${_gluru1}", "width", '22px', { fromValue: '22px'}], position: 0, duration: 0 },
            { id: "eid64", tween: [ "style", "${_gluru1}", "left", '131px', { fromValue: '133px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid127", tween: [ "style", "${_gluru1}", "left", '133px', { fromValue: '131px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid180", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 7875, duration: 112 },
            { id: "eid185", tween: [ "style", "${_RoundRect}", "opacity", '0', { fromValue: '1'}], position: 8574, duration: 112 },
            { id: "eid87", tween: [ "style", "${_RectangleCopy}", "top", '145px', { fromValue: '154px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid122", tween: [ "style", "${_RectangleCopy}", "top", '154px', { fromValue: '145px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid52", tween: [ "style", "${_glufoot}", "height", '117px', { fromValue: '117px'}], position: 0, duration: 0 },
            { id: "eid72", tween: [ "style", "${_glumouth}", "top", '129px', { fromValue: '139px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid112", tween: [ "style", "${_glumouth}", "top", '139px', { fromValue: '129px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid56", tween: [ "style", "${_glurightpupilCopy}", "top", '102px', { fromValue: '108px'}], position: 0, duration: 155 },
            { id: "eid134", tween: [ "style", "${_glurightpupilCopy}", "top", '78px', { fromValue: '102px'}], position: 155, duration: 277, easing: "easeOutBack" },
            { id: "eid129", tween: [ "style", "${_glurightpupilCopy}", "top", '108px', { fromValue: '78px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid51", tween: [ "style", "${_gluhead}", "height", '142px', { fromValue: '142px'}], position: 0, duration: 0 },
            { id: "eid65", tween: [ "style", "${_gluru1}", "top", '314px', { fromValue: '289px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid128", tween: [ "style", "${_gluru1}", "top", '289px', { fromValue: '314px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid27", tween: [ "style", "${_gluru2}", "width", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
            { id: "eid79", tween: [ "style", "${_Rectangle}", "width", '76px', { fromValue: '76px'}], position: 432, duration: 0 },
            { id: "eid46", tween: [ "style", "${_glumouth}", "height", '69px', { fromValue: '69px'}], position: 0, duration: 0 },
            { id: "eid19", tween: [ "style", "${_glulh2}", "left", '27px', { fromValue: '27px'}], position: 0, duration: 0 },
            { id: "eid70", tween: [ "style", "${_glulu2}", "left", '9px', { fromValue: '11px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid113", tween: [ "style", "${_glulu2}", "left", '11px', { fromValue: '9px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid9", tween: [ "style", "${_glurh2}", "left", '153px', { fromValue: '153px'}], position: 0, duration: 0 },
            { id: "eid131", tween: [ "style", "${_RectangleCopy}", "width", '76px', { fromValue: '76px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid144", tween: [ "style", "${_gluru1}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 398 },
            { id: "eid148", tween: [ "style", "${_gluru1}", "opacity", '1', { fromValue: '0'}], position: 3148, duration: 434 },
            { id: "eid151", tween: [ "style", "${_gluru1}", "opacity", '0', { fromValue: '1'}], position: 3582, duration: 398 },
            { id: "eid152", tween: [ "style", "${_gluru1}", "opacity", '1', { fromValue: '0'}], position: 3980, duration: 434 },
            { id: "eid160", tween: [ "style", "${_gluru1}", "opacity", '0', { fromValue: '1'}], position: 4414, duration: 246 },
            { id: "eid161", tween: [ "style", "${_gluru1}", "opacity", '1', { fromValue: '0'}], position: 4660, duration: 279 },
            { id: "eid171", tween: [ "style", "${_gluru1}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 246 },
            { id: "eid172", tween: [ "style", "${_gluru1}", "opacity", '1', { fromValue: '0'}], position: 5996, duration: 279 },
            { id: "eid39", tween: [ "style", "${_glufoot}", "width", '157px', { fromValue: '157px'}], position: 0, duration: 0 },
            { id: "eid135", tween: [ "style", "${_glurightpupil}", "left", '103px', { fromValue: '102px'}], position: 0, duration: 155 },
            { id: "eid62", tween: [ "style", "${_glufoot}", "left", '-3px', { fromValue: '0px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid120", tween: [ "style", "${_glufoot}", "left", '0px', { fromValue: '-3px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid85", tween: [ "style", "${_RectangleCopy}", "height", '100px', { fromValue: '57px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid124", tween: [ "style", "${_RectangleCopy}", "height", '57px', { fromValue: '100px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid133", tween: [ "style", "${_glurightpupilCopy}", "left", '66px', { fromValue: '64px'}], position: 0, duration: 155 },
            { id: "eid69", tween: [ "style", "${_glulu1}", "top", '308px', { fromValue: '283px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid116", tween: [ "style", "${_glulu1}", "top", '283px', { fromValue: '308px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid182", tween: [ "style", "${_RoundRect}", "height", '56px', { fromValue: '4px'}], position: 7987, duration: 271, easing: "easeInQuad" },
            { id: "eid183", tween: [ "style", "${_RoundRect}", "height", '3px', { fromValue: '56px'}], position: 8258, duration: 316, easing: "easeOutQuad" },
            { id: "eid34", tween: [ "style", "${_glulu2}", "width", '10px', { fromValue: '10px'}], position: 0, duration: 0 },
            { id: "eid21", tween: [ "style", "${_glulh1}", "left", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
            { id: "eid54", tween: [ "style", "${_gluhead}", "top", '-30px', { fromValue: '0px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid119", tween: [ "style", "${_gluhead}", "top", '0px', { fromValue: '-30px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid35", tween: [ "style", "${_glulu1}", "width", '23px', { fromValue: '23px'}], position: 0, duration: 0 },
            { id: "eid76", tween: [ "style", "${_Rectangle}", "left", '44px', { fromValue: '44px'}], position: 432, duration: 0 },
            { id: "eid36", tween: [ "style", "${_glulh2}", "width", '9px', { fromValue: '9px'}], position: 0, duration: 0 },
            { id: "eid50", tween: [ "style", "${_glulh1}", "height", '27px', { fromValue: '27px'}], position: 0, duration: 0 },
            { id: "eid77", tween: [ "style", "${_Rectangle}", "top", '74px', { fromValue: '74px'}], position: 432, duration: 0 },
            { id: "eid29", tween: [ "style", "${_glurightpupilCopy}", "width", '9px', { fromValue: '9px'}], position: 0, duration: 0 },
            { id: "eid38", tween: [ "style", "${_gluhead}", "width", '153px', { fromValue: '153px'}], position: 0, duration: 0 },
            { id: "eid43", tween: [ "style", "${_glurightpupil}", "height", '13px', { fromValue: '13px'}], position: 0, duration: 0 },
            { id: "eid53", tween: [ "style", "${_glurightpupil}", "top", '102px', { fromValue: '108px'}], position: 0, duration: 155 },
            { id: "eid136", tween: [ "style", "${_glurightpupil}", "top", '78px', { fromValue: '102px'}], position: 155, duration: 277, easing: "easeOutBack" },
            { id: "eid130", tween: [ "style", "${_glurightpupil}", "top", '108px', { fromValue: '78px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid33", tween: [ "style", "${_glumouth}", "width", '153px', { fromValue: '153px'}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "style", "${_glumouth}", "left", '15px', { fromValue: '15px'}], position: 0, duration: 0 },
            { id: "eid48", tween: [ "style", "${_glulu1}", "height", '33px', { fromValue: '33px'}], position: 0, duration: 0 },
            { id: "eid81", tween: [ "style", "${_Rectangle}", "height", '93px', { fromValue: '93px'}], position: 432, duration: 0 },
            { id: "eid32", tween: [ "style", "${_glurh1}", "width", '16px', { fromValue: '16px'}], position: 0, duration: 0 },
            { id: "eid41", tween: [ "style", "${_gluru1}", "height", '23px', { fromValue: '23px'}], position: 0, duration: 0 },
            { id: "eid143", tween: [ "style", "${_glulh1}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 398 },
            { id: "eid147", tween: [ "style", "${_glulh1}", "opacity", '1', { fromValue: '0'}], position: 3148, duration: 434 },
            { id: "eid155", tween: [ "style", "${_glulh1}", "opacity", '0', { fromValue: '1'}], position: 3582, duration: 398 },
            { id: "eid156", tween: [ "style", "${_glulh1}", "opacity", '1', { fromValue: '0'}], position: 3980, duration: 434 },
            { id: "eid169", tween: [ "style", "${_glulh1}", "opacity", '0', { fromValue: '1'}], position: 5211, duration: 289 },
            { id: "eid170", tween: [ "style", "${_glulh1}", "opacity", '1', { fromValue: '0'}], position: 5500, duration: 250 },
            { id: "eid177", tween: [ "style", "${_glulh1}", "opacity", '0', { fromValue: '1'}], position: 6547, duration: 289 },
            { id: "eid178", tween: [ "style", "${_glulh1}", "opacity", '1', { fromValue: '0'}], position: 6836, duration: 250 },
            { id: "eid71", tween: [ "style", "${_glulu2}", "top", '317px', { fromValue: '292px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid114", tween: [ "style", "${_glulu2}", "top", '292px', { fromValue: '317px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid31", tween: [ "style", "${_glurh2}", "width", '6px', { fromValue: '6px'}], position: 0, duration: 0 },
            { id: "eid142", tween: [ "style", "${_glurh1}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 398 },
            { id: "eid146", tween: [ "style", "${_glurh1}", "opacity", '1', { fromValue: '0'}], position: 3148, duration: 434 },
            { id: "eid157", tween: [ "style", "${_glurh1}", "opacity", '0', { fromValue: '1'}], position: 3582, duration: 398 },
            { id: "eid158", tween: [ "style", "${_glurh1}", "opacity", '1', { fromValue: '0'}], position: 3980, duration: 434 },
            { id: "eid163", tween: [ "style", "${_glurh1}", "opacity", '0', { fromValue: '1'}], position: 4660, duration: 279 },
            { id: "eid164", tween: [ "style", "${_glurh1}", "opacity", '1', { fromValue: '0'}], position: 4939, duration: 272 },
            { id: "eid173", tween: [ "style", "${_glurh1}", "opacity", '0', { fromValue: '1'}], position: 5996, duration: 279 },
            { id: "eid174", tween: [ "style", "${_glurh1}", "opacity", '1', { fromValue: '0'}], position: 6275, duration: 272 },
            { id: "eid58", tween: [ "style", "${_glurh1}", "top", '-26px', { fromValue: '4px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid111", tween: [ "style", "${_glurh1}", "top", '4px', { fromValue: '-26px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid49", tween: [ "style", "${_glulh2}", "height", '12px', { fromValue: '12px'}], position: 0, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-9579015");
