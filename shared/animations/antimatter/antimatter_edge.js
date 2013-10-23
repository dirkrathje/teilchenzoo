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
            id:'elektip2',
            type:'image',
            rect:['631px','-77px','64px','55px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"elektip2.png",'0px','0px']
         },
         {
            id:'antimatter',
            type:'rect',
            rect:['70','71','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'antimatter',
            symbolName:'antimatter'
         }
         ]
      },
   states: {
      "Base State": {
         "${_antimatter}": [
            ["transform", "scaleX", '0.74473'],
            ["style", "top", '38px'],
            ["transform", "scaleY", '0.74473'],
            ["style", "left", '28px']
         ],
         "${_elektip2}": [
            ["style", "top", '-77px'],
            ["style", "height", '55px'],
            ["style", "left", '631px'],
            ["style", "width", '64px']
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
         duration: 27403,
         autoPlay: true,
         timeline: [
            { id: "eid40", tween: [ "transform", "${_antimatter}", "scaleY", '0.74473', { fromValue: '0.74473'}], position: 6983, duration: 0 },
            { id: "eid39", tween: [ "transform", "${_antimatter}", "scaleX", '0.74473', { fromValue: '0.74473'}], position: 6983, duration: 0 },
            { id: "eid43", tween: [ "style", "${_antimatter}", "left", '28px', { fromValue: '28px'}], position: 6983, duration: 0 },
            { id: "eid47", tween: [ "style", "${_antimatter}", "top", '38px', { fromValue: '38px'}], position: 6983, duration: 0 },
            { id: "eid48", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${_antimatter}', [] ], ""], position: 6983 },
            { id: "eid49", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_antimatter}', [] ], ""], position: 13750 },
            { id: "eid50", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${_antimatter}', [] ], ""], position: 20628 }         ]
      }
   }
},
"antimatter": {
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
      rect: ['48px','0px','345','304','auto','auto'],
      id: 'Group2',
      type: 'group',
      transform: [[],[],[],['0']],
      c: [
      {
         rect: ['0px','0px','314px','258px','auto','auto'],
         id: 'Body',
         transform: [[],[],[],['-1']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Body.png','0px','0px']
      },
      {
         rect: ['176px','98px','41px','36px','auto','auto'],
         id: 'elekleftiris',
         transform: [[],[],[],['-1']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/elekleftiris.png','0px','0px']
      },
      {
         rect: ['217px','207px','128px','97px','auto','auto'],
         id: 'elekleftleg',
         transform: [[],[],[],['-1']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/elekleftleg.png','0px','0px']
      },
      {
         rect: ['186px','116px','11px','10px','auto','auto'],
         id: 'elekleftpupil',
         transform: [[],[],[],['-1']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/elekleftpupil.png','0px','0px']
      },
      {
         rect: ['119px','186px','90px','15px','auto','auto'],
         id: 'elekmouth',
         transform: [[],[],[],['-1']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/elekmouth.png','0px','0px']
      },
      {
         rect: ['98px','98px','42px','35px','auto','auto'],
         id: 'elekrightiris',
         transform: [[],[],[],['-1']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/elekrightiris.png','0px','0px']
      },
      {
         rect: ['6px','221px','113px','83px','auto','auto'],
         id: 'elekrightleg',
         transform: [[],[],[],['-1']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/elekrightleg.png','0px','0px']
      },
      {
         rect: ['119px','116px','11px','10px','auto','auto'],
         id: 'elekrightpupil',
         transform: [[],[],[],['-1']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/elekrightpupil.png','0px','0px']
      },
      {
         rect: ['164px','153px','24px','22px','auto','auto'],
         id: 'Nasenloch',
         transform: [[],[],[],['-1']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Nasenloch.png','0px','0px']
      },
      {
         rect: ['133px','153px','24px','22px','auto','auto'],
         id: 'NasenlochCopy2',
         transform: [[],[],[],['-1']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/Nasenloch.png','0px','0px']
      }]
   },
   {
      rect: ['0px','0px','350','304','auto','auto'],
      id: 'Group',
      type: 'group',
      transform: [],
      c: [
      {
         id: 'Body3',
         type: 'image',
         rect: ['36px','0px','314px','258px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Body3.png','0px','0px']
      },
      {
         id: 'elekleftiris3',
         type: 'image',
         rect: ['132px','103px','41px','36px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/elekleftiris3.png','0px','0px']
      },
      {
         id: 'elekleftleg3',
         type: 'image',
         rect: ['0px','207px','128px','97px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/elekleftleg3.png','0px','0px']
      },
      {
         id: 'elekleftpupil3',
         type: 'image',
         rect: ['153px','123px','11px','10px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/elekleftpupil3.png','0px','0px']
      },
      {
         id: 'elekmouth3',
         type: 'image',
         rect: ['143px','194px','90px','15px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/elekmouth3.png','0px','0px']
      },
      {
         id: 'elekrightiris3',
         type: 'image',
         rect: ['205px','103px','42px','35px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/elekrightiris3.png','0px','0px']
      },
      {
         id: 'elekrightleg3',
         type: 'image',
         rect: ['234px','221px','113px','83px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/elekrightleg3.png','0px','0px']
      },
      {
         id: 'elekrightpupil3',
         type: 'image',
         rect: ['217px','123px','11px','10px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/elekrightpupil3.png','0px','0px']
      },
      {
         id: 'Nasenloch3',
         type: 'image',
         rect: ['193px','153px','24px','22px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Nasenloch3.png','0px','0px']
      },
      {
         id: 'Nasenloch3Copy',
         type: 'image',
         rect: ['161px','153px','24px','22px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Nasenloch3.png','0px','0px']
      }]
   },
   {
      rect: ['73px','66px','88px','9px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      transform: [],
      id: 'RoundRect',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(155,155,155,1.00)']
   },
   {
      rect: ['166px','66px','85px','10px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      transform: [],
      id: 'RoundRectCopy',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(155,155,155,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "top", '66px'],
            ["color", "background-color", 'rgba(155,155,155,1.00)'],
            ["style", "height", '9px'],
            ["style", "opacity", '0'],
            ["style", "left", '73px'],
            ["style", "width", '88px']
         ],
         "${_elekmouth}": [
            ["style", "top", '186px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '-1'],
            ["style", "height", '15px'],
            ["style", "left", '119px'],
            ["style", "width", '90px']
         ],
         "${_NasenlochCopy2}": [
            ["style", "top", '153px'],
            ["style", "height", '22px'],
            ["transform", "scaleX", '-1'],
            ["style", "left", '133px'],
            ["style", "width", '24px']
         ],
         "${_Nasenloch}": [
            ["style", "top", '153px'],
            ["transform", "scaleX", '-1'],
            ["style", "height", '22px'],
            ["style", "left", '164px'],
            ["style", "width", '24px']
         ],
         "${_elekleftpupil3}": [
            ["style", "height", '10px'],
            ["style", "top", '123px'],
            ["style", "left", '153px'],
            ["style", "width", '11px']
         ],
         "${_elekleftiris}": [
            ["style", "top", '98px'],
            ["transform", "scaleX", '-1'],
            ["style", "height", '36px'],
            ["style", "left", '176px'],
            ["style", "width", '41px']
         ],
         "${_Body}": [
            ["style", "top", '0px'],
            ["transform", "scaleX", '-1'],
            ["style", "height", '258px'],
            ["style", "left", '0px'],
            ["style", "width", '314px']
         ],
         "${symbolSelector}": [
            ["style", "height", '304px'],
            ["style", "width", '350px']
         ],
         "${_elekleftpupil}": [
            ["style", "top", '116px'],
            ["transform", "scaleX", '-1'],
            ["style", "height", '10px'],
            ["style", "left", '186px'],
            ["style", "width", '11px']
         ],
         "${_elekleftleg3}": [
            ["style", "height", '97px'],
            ["style", "top", '207px'],
            ["style", "left", '0px'],
            ["style", "width", '128px']
         ],
         "${_Nasenloch3}": [
            ["style", "height", '22px'],
            ["style", "top", '153px'],
            ["style", "left", '193px'],
            ["style", "width", '24px']
         ],
         "${_elekrightpupil}": [
            ["style", "top", '116px'],
            ["transform", "scaleX", '-1'],
            ["style", "height", '10px'],
            ["style", "left", '119px'],
            ["style", "width", '11px']
         ],
         "${_Group2}": [
            ["transform", "scaleX", '0'],
            ["style", "left", '3px'],
            ["style", "top", '1px']
         ],
         "${_elekleftleg}": [
            ["style", "top", '207px'],
            ["transform", "scaleX", '-1'],
            ["style", "height", '97px'],
            ["style", "left", '217px'],
            ["style", "width", '128px']
         ],
         "${_RoundRectCopy}": [
            ["style", "top", '66px'],
            ["color", "background-color", 'rgba(155,155,155,1)'],
            ["style", "height", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '166px'],
            ["style", "width", '85px']
         ],
         "${_elekrightleg3}": [
            ["style", "height", '83px'],
            ["style", "top", '221px'],
            ["style", "left", '234px'],
            ["style", "width", '113px']
         ],
         "${_Group}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Nasenloch3Copy}": [
            ["style", "top", '153px'],
            ["style", "height", '22px'],
            ["style", "left", '161px'],
            ["style", "width", '24px']
         ],
         "${_Body3}": [
            ["style", "height", '258px'],
            ["style", "top", '0px'],
            ["style", "left", '36px'],
            ["style", "width", '314px']
         ],
         "${_elekleftiris3}": [
            ["style", "height", '36px'],
            ["style", "top", '103px'],
            ["style", "left", '132px'],
            ["style", "width", '41px']
         ],
         "${_elekmouth3}": [
            ["style", "height", '15px'],
            ["style", "top", '194px'],
            ["style", "left", '143px'],
            ["style", "width", '90px']
         ],
         "${_elekrightleg}": [
            ["style", "top", '221px'],
            ["transform", "scaleX", '-1'],
            ["style", "height", '83px'],
            ["style", "left", '6px'],
            ["style", "width", '113px']
         ],
         "${_elekrightpupil3}": [
            ["style", "height", '10px'],
            ["style", "top", '123px'],
            ["style", "left", '217px'],
            ["style", "width", '11px']
         ],
         "${_elekrightiris}": [
            ["style", "top", '98px'],
            ["transform", "scaleX", '-1'],
            ["style", "height", '35px'],
            ["style", "left", '98px'],
            ["style", "width", '42px']
         ],
         "${_elekrightiris3}": [
            ["style", "height", '35px'],
            ["style", "top", '103px'],
            ["style", "left", '205px'],
            ["style", "width", '42px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6765,
         autoPlay: true,
         timeline: [
            { id: "eid22", tween: [ "style", "${_RoundRectCopy}", "height", '83px', { fromValue: '10px'}], position: 2332, duration: 288, easing: "easeInOutExpo" },
            { id: "eid25", tween: [ "style", "${_RoundRectCopy}", "height", '10px', { fromValue: '83px'}], position: 2620, duration: 288, easing: "easeInOutExpo" },
            { id: "eid27", tween: [ "style", "${_RoundRectCopy}", "height", '83px', { fromValue: '10px'}], position: 3750, duration: 288, easing: "easeInOutExpo" },
            { id: "eid28", tween: [ "style", "${_RoundRectCopy}", "height", '10px', { fromValue: '83px'}], position: 4038, duration: 288, easing: "easeInOutExpo" },
            { id: "eid31", tween: [ "style", "${_RoundRectCopy}", "height", '83px', { fromValue: '10px'}], position: 4326, duration: 168, easing: "easeInOutExpo" },
            { id: "eid32", tween: [ "style", "${_RoundRectCopy}", "height", '10px', { fromValue: '83px'}], position: 4494, duration: 168, easing: "easeInOutExpo" },
            { id: "eid35", tween: [ "style", "${_RoundRectCopy}", "height", '83px', { fromValue: '10px'}], position: 6429, duration: 168, easing: "easeInOutExpo" },
            { id: "eid36", tween: [ "style", "${_RoundRectCopy}", "height", '10px', { fromValue: '83px'}], position: 6597, duration: 168, easing: "easeInOutExpo" },
            { id: "eid7", tween: [ "style", "${_Group2}", "top", '1px', { fromValue: '1px'}], position: 539, duration: 0 },
            { id: "eid17", tween: [ "style", "${_RoundRect}", "width", '88px', { fromValue: '88px'}], position: 2332, duration: 0, easing: "easeInOutExpo" },
            { id: "eid15", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 2071, duration: 72, easing: "easeInOutExpo" },
            { id: "eid5", tween: [ "transform", "${_Group2}", "scaleX", '1', { fromValue: '0'}], position: 539, duration: 461, easing: "easeOutCubic" },
            { id: "eid4", tween: [ "transform", "${_Group}", "scaleX", '0', { fromValue: '1'}], position: 0, duration: 539, easing: "easeInQuart" },
            { id: "eid14", tween: [ "style", "${_RoundRectCopy}", "opacity", '1', { fromValue: '0.000000'}], position: 2071, duration: 72, easing: "easeInOutExpo" },
            { id: "eid9", tween: [ "transform", "${_elekmouth}", "scaleY", '-1', { fromValue: '1'}], position: 1175, duration: 896, easing: "easeInOutExpo" },
            { id: "eid19", tween: [ "style", "${_RoundRect}", "height", '83px', { fromValue: '9px'}], position: 2332, duration: 288, easing: "easeInOutExpo" },
            { id: "eid26", tween: [ "style", "${_RoundRect}", "height", '9px', { fromValue: '83px'}], position: 2620, duration: 288, easing: "easeInOutExpo" },
            { id: "eid29", tween: [ "style", "${_RoundRect}", "height", '83px', { fromValue: '9px'}], position: 3750, duration: 288, easing: "easeInOutExpo" },
            { id: "eid30", tween: [ "style", "${_RoundRect}", "height", '9px', { fromValue: '83px'}], position: 4038, duration: 288, easing: "easeInOutExpo" },
            { id: "eid33", tween: [ "style", "${_RoundRect}", "height", '83px', { fromValue: '9px'}], position: 4326, duration: 168, easing: "easeInOutExpo" },
            { id: "eid34", tween: [ "style", "${_RoundRect}", "height", '9px', { fromValue: '83px'}], position: 4494, duration: 168, easing: "easeInOutExpo" },
            { id: "eid37", tween: [ "style", "${_RoundRect}", "height", '83px', { fromValue: '9px'}], position: 6429, duration: 168, easing: "easeInOutExpo" },
            { id: "eid38", tween: [ "style", "${_RoundRect}", "height", '9px', { fromValue: '83px'}], position: 6597, duration: 168, easing: "easeInOutExpo" },
            { id: "eid6", tween: [ "style", "${_Group2}", "left", '3px', { fromValue: '3px'}], position: 539, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-10582978");
