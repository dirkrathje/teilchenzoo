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
            id:'myon_neutrino',
            type:'rect',
            rect:['118','23','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'myon_neutrino',
            symbolName:'myon_neutrino'
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
         "${_myon_neutrino}": [
            ["style", "top", '11px'],
            ["transform", "scaleX", '0.6189'],
            ["transform", "scaleY", '0.6189'],
            ["style", "left", '53px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 11087,
         autoPlay: true,
         timeline: [
            { id: "eid391", tween: [ "transform", "${_myon_neutrino}", "scaleX", '0.6189', { fromValue: '0.6189'}], position: 4204, duration: 0, easing: "easeInOutBack" },
            { id: "eid392", tween: [ "transform", "${_myon_neutrino}", "scaleY", '0.6189', { fromValue: '0.6189'}], position: 4204, duration: 0, easing: "easeInOutBack" },
            { id: "eid395", tween: [ "style", "${_myon_neutrino}", "left", '53px', { fromValue: '53px'}], position: 4204, duration: 0, easing: "easeInOutBack" },
            { id: "eid396", tween: [ "style", "${_myon_neutrino}", "top", '11px', { fromValue: '11px'}], position: 4204, duration: 0, easing: "easeInOutBack" },
            { id: "eid397", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_myon_neutrino}', [] ], ""], position: 11087 }         ]
      }
   }
},
"myon_neutrino": {
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
      id: 'Myoneubody',
      type: 'image',
      rect: ['0px','0px','313px','363px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Myoneubody.png','0px','0px']
   },
   {
      id: 'myoleftiris',
      type: 'image',
      rect: ['51px','96px','27px','26px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/myoleftiris.png','0px','0px']
   },
   {
      id: 'myoleftpupil',
      type: 'image',
      rect: ['60px','106px','10px','10px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/myoleftpupil.png','0px','0px']
   },
   {
      id: 'myorightiris',
      type: 'image',
      rect: ['117px','48px','26px','27px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/myorightiris.png','0px','0px']
   },
   {
      id: 'myorightpupil',
      type: 'image',
      rect: ['126px','59px','10px','9px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/myorightpupil.png','0px','0px']
   },
   {
      transform: [[0,0],['-28']],
      borderRadius: ['10px','10px','10px','10px'],
      rect: ['79px','20px','62px','7px','auto','auto'],
      id: 'RoundRectCopy',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(124,141,158,1.00)']
   },
   {
      transform: [[0,0],['-28']],
      borderRadius: ['10px','10px','10px','10px'],
      rect: ['12px','71px','62px','5px','auto','auto'],
      id: 'RoundRectCopy2',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(124,141,158,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRectCopy}": [
            ["style", "top", '20px'],
            ["color", "background-color", 'rgba(124,141,158,1)'],
            ["transform", "rotateZ", '-28deg'],
            ["style", "height", '7px'],
            ["style", "opacity", '1'],
            ["style", "left", '79px'],
            ["style", "width", '62px']
         ],
         "${_myoleftpupil}": [
            ["style", "top", '106px'],
            ["style", "-webkit-transform-origin", [374.88,-191.76], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [374.88,-191.76],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [374.88,-191.76],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [374.88,-191.76],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [374.88,-191.76],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '60px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_RoundRectCopy2}": [
            ["style", "top", '71px'],
            ["color", "background-color", 'rgba(124,141,158,1)'],
            ["transform", "rotateZ", '-28deg'],
            ["style", "height", '5px'],
            ["style", "opacity", '1'],
            ["style", "left", '12px'],
            ["style", "width", '62px']
         ],
         "${symbolSelector}": [
            ["style", "height", '363px'],
            ["style", "width", '313px']
         ],
         "${_myorightiris}": [
            ["style", "top", '48px'],
            ["style", "-webkit-transform-origin", [-75.05,143.79], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [-75.05,143.79],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-75.05,143.79],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-75.05,143.79],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-75.05,143.79],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '117px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_myoleftiris}": [
            ["style", "top", '96px'],
            ["style", "-webkit-transform-origin", [172.18,-35.29], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [172.18,-35.29],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [172.18,-35.29],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [172.18,-35.29],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [172.18,-35.29],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '51px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Myoneubody}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_myorightpupil}": [
            ["style", "top", '59px'],
            ["style", "-webkit-transform-origin", [-285.12,309.16], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [-285.12,309.16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-285.12,309.16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-285.12,309.16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-285.12,309.16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '126px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10830.4296875,
         autoPlay: true,
         timeline: [
            { id: "eid145", tween: [ "transform", "${_myoleftiris}", "rotateZ", '720deg', { fromValue: '0deg'}], position: 4621, duration: 795 },
            { id: "eid35", tween: [ "style", "${_RoundRectCopy}", "height", '75px', { fromValue: '7px'}], position: 387, duration: 227 },
            { id: "eid49", tween: [ "style", "${_RoundRectCopy}", "height", '7px', { fromValue: '75px'}], position: 614, duration: 227 },
            { id: "eid60", tween: [ "style", "${_RoundRectCopy}", "height", '75px', { fromValue: '7px'}], position: 933, duration: 118 },
            { id: "eid61", tween: [ "style", "${_RoundRectCopy}", "height", '7px', { fromValue: '75px'}], position: 1051, duration: 136 },
            { id: "eid72", tween: [ "style", "${_RoundRectCopy}", "height", '75px', { fromValue: '7px'}], position: 1250, duration: 99 },
            { id: "eid73", tween: [ "style", "${_RoundRectCopy}", "height", '7px', { fromValue: '75px'}], position: 1349, duration: 133 },
            { id: "eid225", tween: [ "style", "${_RoundRectCopy}", "height", '50px', { fromValue: '7px'}], position: 7751, duration: 368 },
            { id: "eid263", tween: [ "style", "${_RoundRectCopy}", "height", '27px', { fromValue: '50px'}], position: 8119, duration: 256 },
            { id: "eid269", tween: [ "style", "${_RoundRectCopy}", "height", '49px', { fromValue: '27px'}], position: 8375, duration: 368 },
            { id: "eid297", tween: [ "style", "${_RoundRectCopy}", "height", '39px', { fromValue: '49px'}], position: 8743, duration: 332 },
            { id: "eid294", tween: [ "style", "${_RoundRectCopy}", "height", '76px', { fromValue: '39px'}], position: 9075, duration: 583 },
            { id: "eid304", tween: [ "style", "${_RoundRectCopy}", "height", '7px', { fromValue: '76px'}], position: 10580, duration: 250, easing: "easeInOutBack" },
            { id: "eid33", tween: [ "style", "${_RoundRectCopy2}", "top", '67px', { fromValue: '71px'}], position: 387, duration: 227 },
            { id: "eid44", tween: [ "style", "${_RoundRectCopy2}", "top", '71px', { fromValue: '67px'}], position: 614, duration: 227 },
            { id: "eid50", tween: [ "style", "${_RoundRectCopy2}", "top", '67px', { fromValue: '71px'}], position: 933, duration: 118 },
            { id: "eid51", tween: [ "style", "${_RoundRectCopy2}", "top", '71px', { fromValue: '67px'}], position: 1051, duration: 136 },
            { id: "eid62", tween: [ "style", "${_RoundRectCopy2}", "top", '67px', { fromValue: '71px'}], position: 1250, duration: 99 },
            { id: "eid63", tween: [ "style", "${_RoundRectCopy2}", "top", '71px', { fromValue: '67px'}], position: 1349, duration: 133 },
            { id: "eid215", tween: [ "style", "${_RoundRectCopy2}", "top", '68px', { fromValue: '71px'}], position: 7751, duration: 368 },
            { id: "eid267", tween: [ "style", "${_RoundRectCopy2}", "top", '69px', { fromValue: '68px'}], position: 8119, duration: 256 },
            { id: "eid273", tween: [ "style", "${_RoundRectCopy2}", "top", '69px', { fromValue: '69px'}], position: 8375, duration: 368 },
            { id: "eid292", tween: [ "style", "${_RoundRectCopy2}", "top", '67px', { fromValue: '69px'}], position: 9075, duration: 583 },
            { id: "eid299", tween: [ "style", "${_RoundRectCopy2}", "top", '71px', { fromValue: '67px'}], position: 10580, duration: 250, easing: "easeInOutBack" },
            { id: "eid79", tween: [ "style", "${_myorightiris}", "top", '48px', { fromValue: '48px'}], position: 2750, duration: 0 },
            { id: "eid101", tween: [ "style", "${_myorightiris}", "top", '311px', { fromValue: '48px'}], position: 3641, duration: 609, easing: "easeOutBounce" },
            { id: "eid134", tween: [ "style", "${_myorightiris}", "top", '48px', { fromValue: '311px'}], position: 4621, duration: 795 },
            { id: "eid288", tween: [ "style", "${_myorightiris}", "top", '53px', { fromValue: '48px'}], position: 7751, duration: 624 },
            { id: "eid316", tween: [ "style", "${_myorightiris}", "top", '48px', { fromValue: '53px'}], position: 10580, duration: 250, easing: "easeInOutBack" },
            { id: "eid34", tween: [ "style", "${_RoundRectCopy2}", "left", '27px', { fromValue: '12px'}], position: 387, duration: 227 },
            { id: "eid45", tween: [ "style", "${_RoundRectCopy2}", "left", '12px', { fromValue: '27px'}], position: 614, duration: 227 },
            { id: "eid52", tween: [ "style", "${_RoundRectCopy2}", "left", '27px', { fromValue: '12px'}], position: 933, duration: 118 },
            { id: "eid53", tween: [ "style", "${_RoundRectCopy2}", "left", '12px', { fromValue: '27px'}], position: 1051, duration: 136 },
            { id: "eid64", tween: [ "style", "${_RoundRectCopy2}", "left", '27px', { fromValue: '12px'}], position: 1250, duration: 99 },
            { id: "eid65", tween: [ "style", "${_RoundRectCopy2}", "left", '12px', { fromValue: '27px'}], position: 1349, duration: 133 },
            { id: "eid217", tween: [ "style", "${_RoundRectCopy2}", "left", '21px', { fromValue: '12px'}], position: 7751, duration: 368 },
            { id: "eid268", tween: [ "style", "${_RoundRectCopy2}", "left", '16px', { fromValue: '21px'}], position: 8119, duration: 256 },
            { id: "eid274", tween: [ "style", "${_RoundRectCopy2}", "left", '19px', { fromValue: '16px'}], position: 8375, duration: 368 },
            { id: "eid293", tween: [ "style", "${_RoundRectCopy2}", "left", '27px', { fromValue: '19px'}], position: 9075, duration: 583 },
            { id: "eid300", tween: [ "style", "${_RoundRectCopy2}", "left", '12px', { fromValue: '27px'}], position: 10580, duration: 250, easing: "easeInOutBack" },
            { id: "eid3", tween: [ "style", "${_RoundRectCopy2}", "opacity", '0', { fromValue: '1'}], position: 2301, duration: 199 },
            { id: "eid229", tween: [ "style", "${_RoundRectCopy2}", "opacity", '1', { fromValue: '0'}], position: 7654, duration: 97 },
            { id: "eid36", tween: [ "style", "${_RoundRectCopy}", "top", '16px', { fromValue: '20px'}], position: 387, duration: 227 },
            { id: "eid47", tween: [ "style", "${_RoundRectCopy}", "top", '20px', { fromValue: '16px'}], position: 614, duration: 227 },
            { id: "eid56", tween: [ "style", "${_RoundRectCopy}", "top", '16px', { fromValue: '20px'}], position: 933, duration: 118 },
            { id: "eid57", tween: [ "style", "${_RoundRectCopy}", "top", '20px', { fromValue: '16px'}], position: 1051, duration: 136 },
            { id: "eid68", tween: [ "style", "${_RoundRectCopy}", "top", '16px', { fromValue: '20px'}], position: 1250, duration: 99 },
            { id: "eid69", tween: [ "style", "${_RoundRectCopy}", "top", '20px', { fromValue: '16px'}], position: 1349, duration: 133 },
            { id: "eid221", tween: [ "style", "${_RoundRectCopy}", "top", '17px', { fromValue: '20px'}], position: 7751, duration: 368 },
            { id: "eid264", tween: [ "style", "${_RoundRectCopy}", "top", '18px', { fromValue: '17px'}], position: 8119, duration: 256 },
            { id: "eid270", tween: [ "style", "${_RoundRectCopy}", "top", '18px', { fromValue: '18px'}], position: 8375, duration: 368 },
            { id: "eid295", tween: [ "style", "${_RoundRectCopy}", "top", '15px', { fromValue: '18px'}], position: 9075, duration: 583 },
            { id: "eid302", tween: [ "style", "${_RoundRectCopy}", "top", '20px', { fromValue: '15px'}], position: 10580, duration: 250, easing: "easeInOutBack" },
            { id: "eid83", tween: [ "style", "${_myoleftiris}", "top", '96px', { fromValue: '96px'}], position: 2750, duration: 0 },
            { id: "eid100", tween: [ "style", "${_myoleftiris}", "top", '311px', { fromValue: '96px'}], position: 3641, duration: 440, easing: "easeOutBounce" },
            { id: "eid137", tween: [ "style", "${_myoleftiris}", "top", '96px', { fromValue: '311px'}], position: 4621, duration: 795 },
            { id: "eid284", tween: [ "style", "${_myoleftiris}", "top", '102px', { fromValue: '96px'}], position: 7751, duration: 624 },
            { id: "eid320", tween: [ "style", "${_myoleftiris}", "top", '96px', { fromValue: '102px'}], position: 10580, duration: 250, easing: "easeInOutBack" },
            { id: "eid214", tween: [ "style", "${_myorightpupil}", "top", '59px', { fromValue: '59px'}], position: 0, duration: 0 },
            { id: "eid84", tween: [ "style", "${_myorightpupil}", "top", '63px', { fromValue: '59px'}], position: 2750, duration: 250 },
            { id: "eid87", tween: [ "style", "${_myorightpupil}", "top", '58px', { fromValue: '63px'}], position: 3250, duration: 250, easing: "easeInOutElastic" },
            { id: "eid103", tween: [ "style", "${_myorightpupil}", "top", '321px', { fromValue: '58px'}], position: 3641, duration: 609, easing: "easeOutBounce" },
            { id: "eid117", tween: [ "style", "${_myorightpupil}", "top", '314px', { fromValue: '321px'}], position: 4383, duration: 238, easing: "easeOutBounce" },
            { id: "eid132", tween: [ "style", "${_myorightpupil}", "top", '59px', { fromValue: '314px'}], position: 4621, duration: 795 },
            { id: "eid290", tween: [ "style", "${_myorightpupil}", "top", '68px', { fromValue: '59px'}], position: 7751, duration: 624 },
            { id: "eid314", tween: [ "style", "${_myorightpupil}", "top", '59px', { fromValue: '68px'}], position: 10580, duration: 250, easing: "easeInOutBack" },
            { id: "eid82", tween: [ "style", "${_myoleftiris}", "left", '51px', { fromValue: '51px'}], position: 2750, duration: 0 },
            { id: "eid98", tween: [ "style", "${_myoleftiris}", "left", '51px', { fromValue: '51px'}], position: 3641, duration: 0, easing: "easeInOutElastic" },
            { id: "eid130", tween: [ "style", "${_myoleftiris}", "left", '51px', { fromValue: '51px'}], position: 4621, duration: 0, easing: "easeOutBounce" },
            { id: "eid283", tween: [ "style", "${_myoleftiris}", "left", '54px', { fromValue: '51px'}], position: 7751, duration: 624 },
            { id: "eid319", tween: [ "style", "${_myoleftiris}", "left", '51px', { fromValue: '54px'}], position: 10580, duration: 250, easing: "easeInOutBack" },
            { id: "eid32", tween: [ "style", "${_RoundRectCopy2}", "height", '68px', { fromValue: '5px'}], position: 387, duration: 227 },
            { id: "eid46", tween: [ "style", "${_RoundRectCopy2}", "height", '5px', { fromValue: '68px'}], position: 614, duration: 227 },
            { id: "eid54", tween: [ "style", "${_RoundRectCopy2}", "height", '68px', { fromValue: '5px'}], position: 933, duration: 118 },
            { id: "eid55", tween: [ "style", "${_RoundRectCopy2}", "height", '5px', { fromValue: '68px'}], position: 1051, duration: 136 },
            { id: "eid66", tween: [ "style", "${_RoundRectCopy2}", "height", '68px', { fromValue: '5px'}], position: 1250, duration: 99 },
            { id: "eid67", tween: [ "style", "${_RoundRectCopy2}", "height", '5px', { fromValue: '68px'}], position: 1349, duration: 133 },
            { id: "eid219", tween: [ "style", "${_RoundRectCopy2}", "height", '45px', { fromValue: '5px'}], position: 7751, duration: 368 },
            { id: "eid266", tween: [ "style", "${_RoundRectCopy2}", "height", '24px', { fromValue: '45px'}], position: 8119, duration: 256 },
            { id: "eid272", tween: [ "style", "${_RoundRectCopy2}", "height", '44px', { fromValue: '24px'}], position: 8375, duration: 368 },
            { id: "eid298", tween: [ "style", "${_RoundRectCopy2}", "height", '35px', { fromValue: '44px'}], position: 8743, duration: 332 },
            { id: "eid291", tween: [ "style", "${_RoundRectCopy2}", "height", '68px', { fromValue: '35px'}], position: 9075, duration: 583 },
            { id: "eid301", tween: [ "style", "${_RoundRectCopy2}", "height", '5px', { fromValue: '68px'}], position: 10580, duration: 250, easing: "easeInOutBack" },
            { id: "eid143", tween: [ "transform", "${_myorightiris}", "rotateZ", '720deg', { fromValue: '0deg'}], position: 4621, duration: 795 },
            { id: "eid142", tween: [ "transform", "${_myorightpupil}", "rotateZ", '720deg', { fromValue: '0deg'}], position: 4621, duration: 795 },
            { id: "eid213", tween: [ "style", "${_myorightpupil}", "left", '126px', { fromValue: '126px'}], position: 0, duration: 0 },
            { id: "eid76", tween: [ "style", "${_myorightpupil}", "left", '126px', { fromValue: '126px'}], position: 2750, duration: 0 },
            { id: "eid92", tween: [ "style", "${_myorightpupil}", "left", '126px', { fromValue: '126px'}], position: 3641, duration: 0, easing: "easeInOutElastic" },
            { id: "eid110", tween: [ "style", "${_myorightpupil}", "left", '126px', { fromValue: '126px'}], position: 4383, duration: 0, easing: "easeOutBounce" },
            { id: "eid128", tween: [ "style", "${_myorightpupil}", "left", '126px', { fromValue: '126px'}], position: 4621, duration: 0, easing: "easeOutBounce" },
            { id: "eid135", tween: [ "style", "${_myorightpupil}", "left", '126px', { fromValue: '126px'}], position: 5416, duration: 0 },
            { id: "eid289", tween: [ "style", "${_myorightpupil}", "left", '127px', { fromValue: '126px'}], position: 7751, duration: 624 },
            { id: "eid313", tween: [ "style", "${_myorightpupil}", "left", '126px', { fromValue: '127px'}], position: 10580, duration: 250, easing: "easeInOutBack" },
            { id: "eid4", tween: [ "style", "${_RoundRectCopy}", "opacity", '0', { fromValue: '1'}], position: 2301, duration: 199 },
            { id: "eid230", tween: [ "style", "${_RoundRectCopy}", "opacity", '1', { fromValue: '0'}], position: 7654, duration: 97 },
            { id: "eid140", tween: [ "style", "${_myorightpupil}", "-webkit-transform-origin", [-285.12,309.16], { valueTemplate: '@@0@@% @@1@@%', fromValue: [-285.12,309.16]}], position: 5416, duration: 0 },
            { id: "eid401", tween: [ "style", "${_myorightpupil}", "-moz-transform-origin", [-285.12,309.16], { valueTemplate: '@@0@@% @@1@@%', fromValue: [-285.12,309.16]}], position: 5416, duration: 0 },
            { id: "eid402", tween: [ "style", "${_myorightpupil}", "-ms-transform-origin", [-285.12,309.16], { valueTemplate: '@@0@@% @@1@@%', fromValue: [-285.12,309.16]}], position: 5416, duration: 0 },
            { id: "eid403", tween: [ "style", "${_myorightpupil}", "msTransformOrigin", [-285.12,309.16], { valueTemplate: '@@0@@% @@1@@%', fromValue: [-285.12,309.16]}], position: 5416, duration: 0 },
            { id: "eid404", tween: [ "style", "${_myorightpupil}", "-o-transform-origin", [-285.12,309.16], { valueTemplate: '@@0@@% @@1@@%', fromValue: [-285.12,309.16]}], position: 5416, duration: 0 },
            { id: "eid75", tween: [ "style", "${_Myoneubody}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 500 },
            { id: "eid147", tween: [ "style", "${_Myoneubody}", "opacity", '1', { fromValue: '0.000000'}], position: 5250, duration: 500 },
            { id: "eid85", tween: [ "style", "${_myoleftpupil}", "left", '61px', { fromValue: '60px'}], position: 2750, duration: 250 },
            { id: "eid88", tween: [ "style", "${_myoleftpupil}", "left", '60px', { fromValue: '61px'}], position: 3250, duration: 250, easing: "easeInOutElastic" },
            { id: "eid96", tween: [ "style", "${_myoleftpupil}", "left", '60px', { fromValue: '60px'}], position: 3641, duration: 0, easing: "easeInOutElastic" },
            { id: "eid112", tween: [ "style", "${_myoleftpupil}", "left", '60px', { fromValue: '60px'}], position: 4383, duration: 0, easing: "easeOutBounce" },
            { id: "eid129", tween: [ "style", "${_myoleftpupil}", "left", '60px', { fromValue: '60px'}], position: 4621, duration: 0, easing: "easeOutBounce" },
            { id: "eid285", tween: [ "style", "${_myoleftpupil}", "left", '69px', { fromValue: '60px'}], position: 7751, duration: 624 },
            { id: "eid317", tween: [ "style", "${_myoleftpupil}", "left", '60px', { fromValue: '69px'}], position: 10580, duration: 250, easing: "easeInOutBack" },
            { id: "eid37", tween: [ "style", "${_RoundRectCopy}", "left", '95px', { fromValue: '79px'}], position: 387, duration: 227 },
            { id: "eid48", tween: [ "style", "${_RoundRectCopy}", "left", '79px', { fromValue: '95px'}], position: 614, duration: 227 },
            { id: "eid58", tween: [ "style", "${_RoundRectCopy}", "left", '95px', { fromValue: '79px'}], position: 933, duration: 118 },
            { id: "eid59", tween: [ "style", "${_RoundRectCopy}", "left", '79px', { fromValue: '95px'}], position: 1051, duration: 136 },
            { id: "eid70", tween: [ "style", "${_RoundRectCopy}", "left", '95px', { fromValue: '79px'}], position: 1250, duration: 99 },
            { id: "eid71", tween: [ "style", "${_RoundRectCopy}", "left", '79px', { fromValue: '95px'}], position: 1349, duration: 133 },
            { id: "eid223", tween: [ "style", "${_RoundRectCopy}", "left", '89px', { fromValue: '79px'}], position: 7751, duration: 368 },
            { id: "eid265", tween: [ "style", "${_RoundRectCopy}", "left", '84px', { fromValue: '89px'}], position: 8119, duration: 256 },
            { id: "eid271", tween: [ "style", "${_RoundRectCopy}", "left", '86px', { fromValue: '84px'}], position: 8375, duration: 368 },
            { id: "eid296", tween: [ "style", "${_RoundRectCopy}", "left", '95px', { fromValue: '86px'}], position: 9075, duration: 583 },
            { id: "eid303", tween: [ "style", "${_RoundRectCopy}", "left", '79px', { fromValue: '95px'}], position: 10580, duration: 250, easing: "easeInOutBack" },
            { id: "eid78", tween: [ "style", "${_myorightiris}", "left", '117px', { fromValue: '117px'}], position: 2750, duration: 0 },
            { id: "eid94", tween: [ "style", "${_myorightiris}", "left", '117px', { fromValue: '117px'}], position: 3641, duration: 0, easing: "easeInOutElastic" },
            { id: "eid126", tween: [ "style", "${_myorightiris}", "left", '117px', { fromValue: '117px'}], position: 4621, duration: 0, easing: "easeOutBounce" },
            { id: "eid133", tween: [ "style", "${_myorightiris}", "left", '117px', { fromValue: '117px'}], position: 5416, duration: 0 },
            { id: "eid287", tween: [ "style", "${_myorightiris}", "left", '118px', { fromValue: '117px'}], position: 7751, duration: 624 },
            { id: "eid315", tween: [ "style", "${_myorightiris}", "left", '117px', { fromValue: '118px'}], position: 10580, duration: 250, easing: "easeInOutBack" },
            { id: "eid138", tween: [ "style", "${_myoleftpupil}", "-webkit-transform-origin", [374.88,-191.76], { valueTemplate: '@@0@@% @@1@@%', fromValue: [374.88,-191.76]}], position: 5416, duration: 0 },
            { id: "eid405", tween: [ "style", "${_myoleftpupil}", "-moz-transform-origin", [374.88,-191.76], { valueTemplate: '@@0@@% @@1@@%', fromValue: [374.88,-191.76]}], position: 5416, duration: 0 },
            { id: "eid406", tween: [ "style", "${_myoleftpupil}", "-ms-transform-origin", [374.88,-191.76], { valueTemplate: '@@0@@% @@1@@%', fromValue: [374.88,-191.76]}], position: 5416, duration: 0 },
            { id: "eid407", tween: [ "style", "${_myoleftpupil}", "msTransformOrigin", [374.88,-191.76], { valueTemplate: '@@0@@% @@1@@%', fromValue: [374.88,-191.76]}], position: 5416, duration: 0 },
            { id: "eid408", tween: [ "style", "${_myoleftpupil}", "-o-transform-origin", [374.88,-191.76], { valueTemplate: '@@0@@% @@1@@%', fromValue: [374.88,-191.76]}], position: 5416, duration: 0 },
            { id: "eid86", tween: [ "style", "${_myoleftpupil}", "top", '110px', { fromValue: '106px'}], position: 2750, duration: 250 },
            { id: "eid89", tween: [ "style", "${_myoleftpupil}", "top", '105px', { fromValue: '110px'}], position: 3250, duration: 250, easing: "easeInOutElastic" },
            { id: "eid102", tween: [ "style", "${_myoleftpupil}", "top", '320px', { fromValue: '105px'}], position: 3641, duration: 440, easing: "easeOutBounce" },
            { id: "eid116", tween: [ "style", "${_myoleftpupil}", "top", '313px', { fromValue: '320px'}], position: 4383, duration: 238, easing: "easeOutBounce" },
            { id: "eid136", tween: [ "style", "${_myoleftpupil}", "top", '106px', { fromValue: '313px'}], position: 4621, duration: 795 },
            { id: "eid286", tween: [ "style", "${_myoleftpupil}", "top", '112px', { fromValue: '106px'}], position: 7751, duration: 624 },
            { id: "eid318", tween: [ "style", "${_myoleftpupil}", "top", '106px', { fromValue: '112px'}], position: 10580, duration: 250, easing: "easeInOutBack" },
            { id: "eid144", tween: [ "transform", "${_myoleftpupil}", "rotateZ", '720deg', { fromValue: '0deg'}], position: 4621, duration: 795 },
            { id: "eid141", tween: [ "style", "${_myorightiris}", "-webkit-transform-origin", [-75.05,143.79], { valueTemplate: '@@0@@% @@1@@%', fromValue: [-75.05,143.79]}], position: 5416, duration: 0 },
            { id: "eid409", tween: [ "style", "${_myorightiris}", "-moz-transform-origin", [-75.05,143.79], { valueTemplate: '@@0@@% @@1@@%', fromValue: [-75.05,143.79]}], position: 5416, duration: 0 },
            { id: "eid410", tween: [ "style", "${_myorightiris}", "-ms-transform-origin", [-75.05,143.79], { valueTemplate: '@@0@@% @@1@@%', fromValue: [-75.05,143.79]}], position: 5416, duration: 0 },
            { id: "eid411", tween: [ "style", "${_myorightiris}", "msTransformOrigin", [-75.05,143.79], { valueTemplate: '@@0@@% @@1@@%', fromValue: [-75.05,143.79]}], position: 5416, duration: 0 },
            { id: "eid412", tween: [ "style", "${_myorightiris}", "-o-transform-origin", [-75.05,143.79], { valueTemplate: '@@0@@% @@1@@%', fromValue: [-75.05,143.79]}], position: 5416, duration: 0 },
            { id: "eid139", tween: [ "style", "${_myoleftiris}", "-webkit-transform-origin", [172.18,-35.29], { valueTemplate: '@@0@@% @@1@@%', fromValue: [172.18,-35.29]}], position: 5416, duration: 0 },
            { id: "eid413", tween: [ "style", "${_myoleftiris}", "-moz-transform-origin", [172.18,-35.29], { valueTemplate: '@@0@@% @@1@@%', fromValue: [172.18,-35.29]}], position: 5416, duration: 0 },
            { id: "eid414", tween: [ "style", "${_myoleftiris}", "-ms-transform-origin", [172.18,-35.29], { valueTemplate: '@@0@@% @@1@@%', fromValue: [172.18,-35.29]}], position: 5416, duration: 0 },
            { id: "eid415", tween: [ "style", "${_myoleftiris}", "msTransformOrigin", [172.18,-35.29], { valueTemplate: '@@0@@% @@1@@%', fromValue: [172.18,-35.29]}], position: 5416, duration: 0 },
            { id: "eid416", tween: [ "style", "${_myoleftiris}", "-o-transform-origin", [172.18,-35.29], { valueTemplate: '@@0@@% @@1@@%', fromValue: [172.18,-35.29]}], position: 5416, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-11395908");
