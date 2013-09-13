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
            id:'Myoneubody',
            type:'image',
            rect:['118px','23px','313px','363px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Myoneubody.png",'0px','0px']
         },
         {
            id:'myoleftiris',
            type:'image',
            rect:['169px','119px','27px','26px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"myoleftiris.png",'0px','0px']
         },
         {
            id:'myoleftpupil',
            type:'image',
            rect:['178px','129px','10px','10px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"myoleftpupil.png",'0px','0px']
         },
         {
            id:'myorightiris',
            type:'image',
            rect:['235px','71px','26px','27px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"myorightiris.png",'0px','0px']
         },
         {
            id:'myorightpupil',
            type:'image',
            rect:['244px','82px','10px','9px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"myorightpupil.png",'0px','0px']
         },
         {
            id:'RoundRectCopy',
            type:'rect',
            rect:['197px','43px','62px','7px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(124,141,158,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[[],['-28']]
         },
         {
            id:'RoundRectCopy2',
            type:'rect',
            rect:['130px','94px','62px','5px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(124,141,158,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[[],['-28']]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_RoundRectCopy}": [
            ["style", "top", '43px'],
            ["color", "background-color", 'rgba(124,141,158,1)'],
            ["transform", "rotateZ", '-28deg'],
            ["style", "height", '7px'],
            ["style", "opacity", '1'],
            ["style", "left", '197px'],
            ["style", "width", '62px']
         ],
         "${_myoleftpupil}": [
            ["style", "-webkit-transform-origin", [374.88,-191.76], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [374.88,-191.76],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [374.88,-191.76],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [374.88,-191.76],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [374.88,-191.76],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '129px'],
            ["style", "left", '178px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_RoundRectCopy2}": [
            ["style", "top", '94px'],
            ["color", "background-color", 'rgba(124,141,158,1)'],
            ["transform", "rotateZ", '-28deg'],
            ["style", "height", '5px'],
            ["style", "opacity", '1'],
            ["style", "left", '130px'],
            ["style", "width", '62px']
         ],
         "${_Myoneubody}": [
            ["style", "top", '23px'],
            ["style", "opacity", '1'],
            ["style", "left", '118px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '400px'],
            ["style", "width", '550px']
         ],
         "${_myoleftiris}": [
            ["style", "-webkit-transform-origin", [172.18,-35.29], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [172.18,-35.29],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [172.18,-35.29],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [172.18,-35.29],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [172.18,-35.29],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '119px'],
            ["style", "left", '169px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_myorightiris}": [
            ["style", "-webkit-transform-origin", [-75.05,143.79], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [-75.05,143.79],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-75.05,143.79],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-75.05,143.79],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-75.05,143.79],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '71px'],
            ["style", "left", '235px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_myorightpupil}": [
            ["style", "-webkit-transform-origin", [-285.12,309.16], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [-285.12,309.16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-285.12,309.16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-285.12,309.16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-285.12,309.16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '82px'],
            ["style", "left", '244px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 9377,
         autoPlay: true,
         timeline: [
            { id: "eid145", tween: [ "transform", "${_myoleftiris}", "rotateZ", '720deg', { fromValue: '0deg'}], position: 4621, duration: 795 },
            { id: "eid35", tween: [ "style", "${_RoundRectCopy}", "height", '75px', { fromValue: '7px'}], position: 387, duration: 227 },
            { id: "eid49", tween: [ "style", "${_RoundRectCopy}", "height", '7px', { fromValue: '75px'}], position: 614, duration: 227 },
            { id: "eid60", tween: [ "style", "${_RoundRectCopy}", "height", '75px', { fromValue: '7px'}], position: 933, duration: 118 },
            { id: "eid61", tween: [ "style", "${_RoundRectCopy}", "height", '7px', { fromValue: '75px'}], position: 1051, duration: 136 },
            { id: "eid72", tween: [ "style", "${_RoundRectCopy}", "height", '75px', { fromValue: '7px'}], position: 1250, duration: 99 },
            { id: "eid73", tween: [ "style", "${_RoundRectCopy}", "height", '7px', { fromValue: '75px'}], position: 1349, duration: 133 },
            { id: "eid225", tween: [ "style", "${_RoundRectCopy}", "height", '50px', { fromValue: '7px'}], position: 6299, duration: 368 },
            { id: "eid263", tween: [ "style", "${_RoundRectCopy}", "height", '27px', { fromValue: '50px'}], position: 6667, duration: 256 },
            { id: "eid269", tween: [ "style", "${_RoundRectCopy}", "height", '49px', { fromValue: '27px'}], position: 6923, duration: 368 },
            { id: "eid297", tween: [ "style", "${_RoundRectCopy}", "height", '39px', { fromValue: '49px'}], position: 7291, duration: 332 },
            { id: "eid294", tween: [ "style", "${_RoundRectCopy}", "height", '76px', { fromValue: '39px'}], position: 7623, duration: 583 },
            { id: "eid304", tween: [ "style", "${_RoundRectCopy}", "height", '7px', { fromValue: '76px'}], position: 8500, duration: 250, easing: "easeInOutBack" },
            { id: "eid33", tween: [ "style", "${_RoundRectCopy2}", "top", '90px', { fromValue: '94px'}], position: 387, duration: 227 },
            { id: "eid44", tween: [ "style", "${_RoundRectCopy2}", "top", '94px', { fromValue: '90px'}], position: 614, duration: 227 },
            { id: "eid50", tween: [ "style", "${_RoundRectCopy2}", "top", '90px', { fromValue: '94px'}], position: 933, duration: 118 },
            { id: "eid51", tween: [ "style", "${_RoundRectCopy2}", "top", '94px', { fromValue: '90px'}], position: 1051, duration: 136 },
            { id: "eid62", tween: [ "style", "${_RoundRectCopy2}", "top", '90px', { fromValue: '94px'}], position: 1250, duration: 99 },
            { id: "eid63", tween: [ "style", "${_RoundRectCopy2}", "top", '94px', { fromValue: '90px'}], position: 1349, duration: 133 },
            { id: "eid215", tween: [ "style", "${_RoundRectCopy2}", "top", '91px', { fromValue: '94px'}], position: 6299, duration: 368 },
            { id: "eid267", tween: [ "style", "${_RoundRectCopy2}", "top", '92px', { fromValue: '91px'}], position: 6667, duration: 256 },
            { id: "eid273", tween: [ "style", "${_RoundRectCopy2}", "top", '92px', { fromValue: '92px'}], position: 6923, duration: 368 },
            { id: "eid292", tween: [ "style", "${_RoundRectCopy2}", "top", '90px', { fromValue: '92px'}], position: 7623, duration: 583 },
            { id: "eid299", tween: [ "style", "${_RoundRectCopy2}", "top", '94px', { fromValue: '90px'}], position: 8500, duration: 250, easing: "easeInOutBack" },
            { id: "eid79", tween: [ "style", "${_myorightiris}", "top", '71px', { fromValue: '71px'}], position: 2750, duration: 0 },
            { id: "eid101", tween: [ "style", "${_myorightiris}", "top", '334px', { fromValue: '71px'}], position: 3641, duration: 609, easing: "easeOutBounce" },
            { id: "eid134", tween: [ "style", "${_myorightiris}", "top", '71px', { fromValue: '334px'}], position: 4621, duration: 795 },
            { id: "eid288", tween: [ "style", "${_myorightiris}", "top", '76px', { fromValue: '71px'}], position: 6299, duration: 624 },
            { id: "eid316", tween: [ "style", "${_myorightiris}", "top", '71px', { fromValue: '76px'}], position: 8500, duration: 250, easing: "easeInOutBack" },
            { id: "eid34", tween: [ "style", "${_RoundRectCopy2}", "left", '145px', { fromValue: '130px'}], position: 387, duration: 227 },
            { id: "eid45", tween: [ "style", "${_RoundRectCopy2}", "left", '130px', { fromValue: '145px'}], position: 614, duration: 227 },
            { id: "eid52", tween: [ "style", "${_RoundRectCopy2}", "left", '145px', { fromValue: '130px'}], position: 933, duration: 118 },
            { id: "eid53", tween: [ "style", "${_RoundRectCopy2}", "left", '130px', { fromValue: '145px'}], position: 1051, duration: 136 },
            { id: "eid64", tween: [ "style", "${_RoundRectCopy2}", "left", '145px', { fromValue: '130px'}], position: 1250, duration: 99 },
            { id: "eid65", tween: [ "style", "${_RoundRectCopy2}", "left", '130px', { fromValue: '145px'}], position: 1349, duration: 133 },
            { id: "eid217", tween: [ "style", "${_RoundRectCopy2}", "left", '139px', { fromValue: '130px'}], position: 6299, duration: 368 },
            { id: "eid268", tween: [ "style", "${_RoundRectCopy2}", "left", '134px', { fromValue: '139px'}], position: 6667, duration: 256 },
            { id: "eid274", tween: [ "style", "${_RoundRectCopy2}", "left", '137px', { fromValue: '134px'}], position: 6923, duration: 368 },
            { id: "eid293", tween: [ "style", "${_RoundRectCopy2}", "left", '145px', { fromValue: '137px'}], position: 7623, duration: 583 },
            { id: "eid300", tween: [ "style", "${_RoundRectCopy2}", "left", '130px', { fromValue: '145px'}], position: 8500, duration: 250, easing: "easeInOutBack" },
            { id: "eid3", tween: [ "style", "${_RoundRectCopy2}", "opacity", '0', { fromValue: '1'}], position: 2301, duration: 199 },
            { id: "eid229", tween: [ "style", "${_RoundRectCopy2}", "opacity", '1', { fromValue: '0'}], position: 6202, duration: 97 },
            { id: "eid36", tween: [ "style", "${_RoundRectCopy}", "top", '39px', { fromValue: '43px'}], position: 387, duration: 227 },
            { id: "eid47", tween: [ "style", "${_RoundRectCopy}", "top", '43px', { fromValue: '39px'}], position: 614, duration: 227 },
            { id: "eid56", tween: [ "style", "${_RoundRectCopy}", "top", '39px', { fromValue: '43px'}], position: 933, duration: 118 },
            { id: "eid57", tween: [ "style", "${_RoundRectCopy}", "top", '43px', { fromValue: '39px'}], position: 1051, duration: 136 },
            { id: "eid68", tween: [ "style", "${_RoundRectCopy}", "top", '39px', { fromValue: '43px'}], position: 1250, duration: 99 },
            { id: "eid69", tween: [ "style", "${_RoundRectCopy}", "top", '43px', { fromValue: '39px'}], position: 1349, duration: 133 },
            { id: "eid221", tween: [ "style", "${_RoundRectCopy}", "top", '40px', { fromValue: '43px'}], position: 6299, duration: 368 },
            { id: "eid264", tween: [ "style", "${_RoundRectCopy}", "top", '41px', { fromValue: '40px'}], position: 6667, duration: 256 },
            { id: "eid270", tween: [ "style", "${_RoundRectCopy}", "top", '41px', { fromValue: '41px'}], position: 6923, duration: 368 },
            { id: "eid295", tween: [ "style", "${_RoundRectCopy}", "top", '38px', { fromValue: '41px'}], position: 7623, duration: 583 },
            { id: "eid302", tween: [ "style", "${_RoundRectCopy}", "top", '43px', { fromValue: '38px'}], position: 8500, duration: 250, easing: "easeInOutBack" },
            { id: "eid83", tween: [ "style", "${_myoleftiris}", "top", '119px', { fromValue: '119px'}], position: 2750, duration: 0 },
            { id: "eid100", tween: [ "style", "${_myoleftiris}", "top", '334px', { fromValue: '119px'}], position: 3641, duration: 440, easing: "easeOutBounce" },
            { id: "eid137", tween: [ "style", "${_myoleftiris}", "top", '119px', { fromValue: '334px'}], position: 4621, duration: 795 },
            { id: "eid284", tween: [ "style", "${_myoleftiris}", "top", '125px', { fromValue: '119px'}], position: 6299, duration: 624 },
            { id: "eid320", tween: [ "style", "${_myoleftiris}", "top", '119px', { fromValue: '125px'}], position: 8500, duration: 250, easing: "easeInOutBack" },
            { id: "eid143", tween: [ "transform", "${_myorightiris}", "rotateZ", '720deg', { fromValue: '0deg'}], position: 4621, duration: 795 },
            { id: "eid82", tween: [ "style", "${_myoleftiris}", "left", '169px', { fromValue: '169px'}], position: 2750, duration: 0 },
            { id: "eid98", tween: [ "style", "${_myoleftiris}", "left", '169px', { fromValue: '169px'}], position: 3641, duration: 0, easing: "easeInOutElastic" },
            { id: "eid130", tween: [ "style", "${_myoleftiris}", "left", '169px', { fromValue: '169px'}], position: 4621, duration: 0, easing: "easeOutBounce" },
            { id: "eid283", tween: [ "style", "${_myoleftiris}", "left", '172px', { fromValue: '169px'}], position: 6299, duration: 624 },
            { id: "eid319", tween: [ "style", "${_myoleftiris}", "left", '169px', { fromValue: '172px'}], position: 8500, duration: 250, easing: "easeInOutBack" },
            { id: "eid32", tween: [ "style", "${_RoundRectCopy2}", "height", '68px', { fromValue: '5px'}], position: 387, duration: 227 },
            { id: "eid46", tween: [ "style", "${_RoundRectCopy2}", "height", '5px', { fromValue: '68px'}], position: 614, duration: 227 },
            { id: "eid54", tween: [ "style", "${_RoundRectCopy2}", "height", '68px', { fromValue: '5px'}], position: 933, duration: 118 },
            { id: "eid55", tween: [ "style", "${_RoundRectCopy2}", "height", '5px', { fromValue: '68px'}], position: 1051, duration: 136 },
            { id: "eid66", tween: [ "style", "${_RoundRectCopy2}", "height", '68px', { fromValue: '5px'}], position: 1250, duration: 99 },
            { id: "eid67", tween: [ "style", "${_RoundRectCopy2}", "height", '5px', { fromValue: '68px'}], position: 1349, duration: 133 },
            { id: "eid219", tween: [ "style", "${_RoundRectCopy2}", "height", '45px', { fromValue: '5px'}], position: 6299, duration: 368 },
            { id: "eid266", tween: [ "style", "${_RoundRectCopy2}", "height", '24px', { fromValue: '45px'}], position: 6667, duration: 256 },
            { id: "eid272", tween: [ "style", "${_RoundRectCopy2}", "height", '44px', { fromValue: '24px'}], position: 6923, duration: 368 },
            { id: "eid298", tween: [ "style", "${_RoundRectCopy2}", "height", '35px', { fromValue: '44px'}], position: 7291, duration: 332 },
            { id: "eid291", tween: [ "style", "${_RoundRectCopy2}", "height", '68px', { fromValue: '35px'}], position: 7623, duration: 583 },
            { id: "eid301", tween: [ "style", "${_RoundRectCopy2}", "height", '5px', { fromValue: '68px'}], position: 8500, duration: 250, easing: "easeInOutBack" },
            { id: "eid75", tween: [ "style", "${_Myoneubody}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 500 },
            { id: "eid147", tween: [ "style", "${_Myoneubody}", "opacity", '1', { fromValue: '0.000000'}], position: 5250, duration: 500 },
            { id: "eid142", tween: [ "transform", "${_myorightpupil}", "rotateZ", '720deg', { fromValue: '0deg'}], position: 4621, duration: 795 },
            { id: "eid213", tween: [ "style", "${_myorightpupil}", "left", '244px', { fromValue: '244px'}], position: 0, duration: 0 },
            { id: "eid76", tween: [ "style", "${_myorightpupil}", "left", '244px', { fromValue: '244px'}], position: 2750, duration: 0 },
            { id: "eid92", tween: [ "style", "${_myorightpupil}", "left", '244px', { fromValue: '244px'}], position: 3641, duration: 0, easing: "easeInOutElastic" },
            { id: "eid110", tween: [ "style", "${_myorightpupil}", "left", '244px', { fromValue: '244px'}], position: 4383, duration: 0, easing: "easeOutBounce" },
            { id: "eid128", tween: [ "style", "${_myorightpupil}", "left", '244px', { fromValue: '244px'}], position: 4621, duration: 0, easing: "easeOutBounce" },
            { id: "eid135", tween: [ "style", "${_myorightpupil}", "left", '244px', { fromValue: '244px'}], position: 5416, duration: 0 },
            { id: "eid289", tween: [ "style", "${_myorightpupil}", "left", '245px', { fromValue: '244px'}], position: 6299, duration: 624 },
            { id: "eid313", tween: [ "style", "${_myorightpupil}", "left", '244px', { fromValue: '245px'}], position: 8500, duration: 250, easing: "easeInOutBack" },
            { id: "eid4", tween: [ "style", "${_RoundRectCopy}", "opacity", '0', { fromValue: '1'}], position: 2301, duration: 199 },
            { id: "eid230", tween: [ "style", "${_RoundRectCopy}", "opacity", '1', { fromValue: '0'}], position: 6202, duration: 97 },
            { id: "eid140", tween: [ "style", "${_myorightpupil}", "-webkit-transform-origin", [-285.12,309.16], { valueTemplate: '@@0@@% @@1@@%', fromValue: [-285.12,309.16]}], position: 5416, duration: 0 },
            { id: "eid401", tween: [ "style", "${_myorightpupil}", "-moz-transform-origin", [-285.12,309.16], { valueTemplate: '@@0@@% @@1@@%', fromValue: [-285.12,309.16]}], position: 5416, duration: 0 },
            { id: "eid402", tween: [ "style", "${_myorightpupil}", "-ms-transform-origin", [-285.12,309.16], { valueTemplate: '@@0@@% @@1@@%', fromValue: [-285.12,309.16]}], position: 5416, duration: 0 },
            { id: "eid403", tween: [ "style", "${_myorightpupil}", "msTransformOrigin", [-285.12,309.16], { valueTemplate: '@@0@@% @@1@@%', fromValue: [-285.12,309.16]}], position: 5416, duration: 0 },
            { id: "eid404", tween: [ "style", "${_myorightpupil}", "-o-transform-origin", [-285.12,309.16], { valueTemplate: '@@0@@% @@1@@%', fromValue: [-285.12,309.16]}], position: 5416, duration: 0 },
            { id: "eid214", tween: [ "style", "${_myorightpupil}", "top", '82px', { fromValue: '82px'}], position: 0, duration: 0 },
            { id: "eid84", tween: [ "style", "${_myorightpupil}", "top", '86px', { fromValue: '82px'}], position: 2750, duration: 250 },
            { id: "eid87", tween: [ "style", "${_myorightpupil}", "top", '81px', { fromValue: '86px'}], position: 3250, duration: 250, easing: "easeInOutElastic" },
            { id: "eid103", tween: [ "style", "${_myorightpupil}", "top", '344px', { fromValue: '81px'}], position: 3641, duration: 609, easing: "easeOutBounce" },
            { id: "eid117", tween: [ "style", "${_myorightpupil}", "top", '337px', { fromValue: '344px'}], position: 4383, duration: 238, easing: "easeOutBounce" },
            { id: "eid132", tween: [ "style", "${_myorightpupil}", "top", '82px', { fromValue: '337px'}], position: 4621, duration: 795 },
            { id: "eid290", tween: [ "style", "${_myorightpupil}", "top", '91px', { fromValue: '82px'}], position: 6299, duration: 624 },
            { id: "eid314", tween: [ "style", "${_myorightpupil}", "top", '82px', { fromValue: '91px'}], position: 8500, duration: 250, easing: "easeInOutBack" },
            { id: "eid85", tween: [ "style", "${_myoleftpupil}", "left", '179px', { fromValue: '178px'}], position: 2750, duration: 250 },
            { id: "eid88", tween: [ "style", "${_myoleftpupil}", "left", '178px', { fromValue: '179px'}], position: 3250, duration: 250, easing: "easeInOutElastic" },
            { id: "eid96", tween: [ "style", "${_myoleftpupil}", "left", '178px', { fromValue: '178px'}], position: 3641, duration: 0, easing: "easeInOutElastic" },
            { id: "eid112", tween: [ "style", "${_myoleftpupil}", "left", '178px', { fromValue: '178px'}], position: 4383, duration: 0, easing: "easeOutBounce" },
            { id: "eid129", tween: [ "style", "${_myoleftpupil}", "left", '178px', { fromValue: '178px'}], position: 4621, duration: 0, easing: "easeOutBounce" },
            { id: "eid285", tween: [ "style", "${_myoleftpupil}", "left", '187px', { fromValue: '178px'}], position: 6299, duration: 624 },
            { id: "eid317", tween: [ "style", "${_myoleftpupil}", "left", '178px', { fromValue: '187px'}], position: 8500, duration: 250, easing: "easeInOutBack" },
            { id: "eid144", tween: [ "transform", "${_myoleftpupil}", "rotateZ", '720deg', { fromValue: '0deg'}], position: 4621, duration: 795 },
            { id: "eid78", tween: [ "style", "${_myorightiris}", "left", '235px', { fromValue: '235px'}], position: 2750, duration: 0 },
            { id: "eid94", tween: [ "style", "${_myorightiris}", "left", '235px', { fromValue: '235px'}], position: 3641, duration: 0, easing: "easeInOutElastic" },
            { id: "eid126", tween: [ "style", "${_myorightiris}", "left", '235px', { fromValue: '235px'}], position: 4621, duration: 0, easing: "easeOutBounce" },
            { id: "eid133", tween: [ "style", "${_myorightiris}", "left", '235px', { fromValue: '235px'}], position: 5416, duration: 0 },
            { id: "eid287", tween: [ "style", "${_myorightiris}", "left", '236px', { fromValue: '235px'}], position: 6299, duration: 624 },
            { id: "eid315", tween: [ "style", "${_myorightiris}", "left", '235px', { fromValue: '236px'}], position: 8500, duration: 250, easing: "easeInOutBack" },
            { id: "eid37", tween: [ "style", "${_RoundRectCopy}", "left", '213px', { fromValue: '197px'}], position: 387, duration: 227 },
            { id: "eid48", tween: [ "style", "${_RoundRectCopy}", "left", '197px', { fromValue: '213px'}], position: 614, duration: 227 },
            { id: "eid58", tween: [ "style", "${_RoundRectCopy}", "left", '213px', { fromValue: '197px'}], position: 933, duration: 118 },
            { id: "eid59", tween: [ "style", "${_RoundRectCopy}", "left", '197px', { fromValue: '213px'}], position: 1051, duration: 136 },
            { id: "eid70", tween: [ "style", "${_RoundRectCopy}", "left", '213px', { fromValue: '197px'}], position: 1250, duration: 99 },
            { id: "eid71", tween: [ "style", "${_RoundRectCopy}", "left", '197px', { fromValue: '213px'}], position: 1349, duration: 133 },
            { id: "eid223", tween: [ "style", "${_RoundRectCopy}", "left", '207px', { fromValue: '197px'}], position: 6299, duration: 368 },
            { id: "eid265", tween: [ "style", "${_RoundRectCopy}", "left", '202px', { fromValue: '207px'}], position: 6667, duration: 256 },
            { id: "eid271", tween: [ "style", "${_RoundRectCopy}", "left", '204px', { fromValue: '202px'}], position: 6923, duration: 368 },
            { id: "eid296", tween: [ "style", "${_RoundRectCopy}", "left", '213px', { fromValue: '204px'}], position: 7623, duration: 583 },
            { id: "eid303", tween: [ "style", "${_RoundRectCopy}", "left", '197px', { fromValue: '213px'}], position: 8500, duration: 250, easing: "easeInOutBack" },
            { id: "eid86", tween: [ "style", "${_myoleftpupil}", "top", '133px', { fromValue: '129px'}], position: 2750, duration: 250 },
            { id: "eid89", tween: [ "style", "${_myoleftpupil}", "top", '128px', { fromValue: '133px'}], position: 3250, duration: 250, easing: "easeInOutElastic" },
            { id: "eid102", tween: [ "style", "${_myoleftpupil}", "top", '343px', { fromValue: '128px'}], position: 3641, duration: 440, easing: "easeOutBounce" },
            { id: "eid116", tween: [ "style", "${_myoleftpupil}", "top", '336px', { fromValue: '343px'}], position: 4383, duration: 238, easing: "easeOutBounce" },
            { id: "eid136", tween: [ "style", "${_myoleftpupil}", "top", '129px', { fromValue: '336px'}], position: 4621, duration: 795 },
            { id: "eid286", tween: [ "style", "${_myoleftpupil}", "top", '135px', { fromValue: '129px'}], position: 6299, duration: 624 },
            { id: "eid318", tween: [ "style", "${_myoleftpupil}", "top", '129px', { fromValue: '135px'}], position: 8500, duration: 250, easing: "easeInOutBack" },
            { id: "eid138", tween: [ "style", "${_myoleftpupil}", "-webkit-transform-origin", [374.88,-191.76], { valueTemplate: '@@0@@% @@1@@%', fromValue: [374.88,-191.76]}], position: 5416, duration: 0 },
            { id: "eid405", tween: [ "style", "${_myoleftpupil}", "-moz-transform-origin", [374.88,-191.76], { valueTemplate: '@@0@@% @@1@@%', fromValue: [374.88,-191.76]}], position: 5416, duration: 0 },
            { id: "eid406", tween: [ "style", "${_myoleftpupil}", "-ms-transform-origin", [374.88,-191.76], { valueTemplate: '@@0@@% @@1@@%', fromValue: [374.88,-191.76]}], position: 5416, duration: 0 },
            { id: "eid407", tween: [ "style", "${_myoleftpupil}", "msTransformOrigin", [374.88,-191.76], { valueTemplate: '@@0@@% @@1@@%', fromValue: [374.88,-191.76]}], position: 5416, duration: 0 },
            { id: "eid408", tween: [ "style", "${_myoleftpupil}", "-o-transform-origin", [374.88,-191.76], { valueTemplate: '@@0@@% @@1@@%', fromValue: [374.88,-191.76]}], position: 5416, duration: 0 },
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
