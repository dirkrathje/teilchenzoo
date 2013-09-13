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
            id:'Group',
            type:'group',
            rect:['154','23','255','327','auto','auto'],
            c:[
            {
               id:'RoundRect2',
               type:'rect',
               rect:['2px','183px','250px','74px','auto','auto'],
               borderRadius:["60px 60px","47px 47px","46px 46px","24px 24px"],
               fill:["rgba(255,255,255,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'wminbody',
               type:'image',
               rect:['0px','203px','255px','73px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"wminbody.png",'0px','0px']
            },
            {
               id:'wminhead',
               type:'image',
               rect:['0px','87px','255px','139px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"wminhead.png",'0px','0px']
            },
            {
               id:'wminleftleg',
               type:'image',
               rect:['66px','268px','41px','59px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"wminleftleg.png",'0px','0px']
            },
            {
               id:'wminrightleg',
               type:'image',
               rect:['152px','268px','46px','59px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"wminrightleg.png",'0px','0px']
            },
            {
               id:'wminsat',
               type:'image',
               rect:['107px','0px','58px','90px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"wminsat.png",'0px','0px'],
               transform:[]
            }]
         },
         {
            id:'RoundRect',
            type:'rect',
            rect:['154px','246px','4px','18px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(218,0,27,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'RoundRectCopy',
            type:'rect',
            rect:['403px','235px','6px','18px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(218,0,27,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "top", '246px'],
            ["style", "height", '4px'],
            ["color", "background-color", 'rgba(218,0,27,1.00)'],
            ["style", "left", '154px'],
            ["style", "width", '4px']
         ],
         "${_RoundRect2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [60,60], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [46,46], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '2px'],
            ["style", "width", '250px'],
            ["style", "top", '183px'],
            ["style", "border-bottom-left-radius", [24,24], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '63px'],
            ["style", "border-top-right-radius", [47,47], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_wminhead}": [
            ["style", "height", '139px'],
            ["style", "top", '87px'],
            ["style", "left", '0px'],
            ["style", "width", '255px']
         ],
         "${_wminleftleg}": [
            ["style", "height", '59px'],
            ["style", "top", '268px'],
            ["style", "left", '66px'],
            ["style", "width", '41px']
         ],
         "${_RoundRectCopy}": [
            ["color", "background-color", 'rgba(218,0,27,1)'],
            ["style", "height", '4px'],
            ["style", "top", '235px'],
            ["style", "left", '403px'],
            ["style", "width", '6px']
         ],
         "${_wminbody}": [
            ["style", "height", '73px'],
            ["style", "top", '203px'],
            ["style", "left", '0px'],
            ["style", "width", '255px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '400px'],
            ["style", "width", '550px']
         ],
         "${_wminsat}": [
            ["style", "height", '90px'],
            ["style", "top", '0px'],
            ["style", "left", '107px'],
            ["style", "width", '58px']
         ],
         "${_wminrightleg}": [
            ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '59px'],
            ["style", "top", '268px'],
            ["style", "left", '152px'],
            ["style", "width", '46px']
         ],
         "${_Group}": [
            ["style", "height", '327px'],
            ["style", "top", '23px'],
            ["style", "left", '154px'],
            ["style", "width", '255px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4950,
         autoPlay: true,
         timeline: [
            { id: "eid43", tween: [ "style", "${_RoundRect2}", "height", '74px', { fromValue: '63px'}], position: 1850, duration: 729, easing: "easeInOutBack" },
            { id: "eid54", tween: [ "style", "${_RoundRect2}", "height", '63px', { fromValue: '74px'}], position: 2579, duration: 671, easing: "easeInOutBack" },
            { id: "eid76", tween: [ "style", "${_RoundRect2}", "top", '174px', { fromValue: '183px'}], position: 1850, duration: 729, easing: "easeInOutBack" },
            { id: "eid81", tween: [ "style", "${_RoundRect2}", "top", '183px', { fromValue: '174px'}], position: 2579, duration: 671, easing: "easeInOutBack" },
            { id: "eid79", tween: [ "style", "${_RoundRect}", "top", '237px', { fromValue: '246px'}], position: 1850, duration: 729, easing: "easeInOutBack" },
            { id: "eid84", tween: [ "style", "${_RoundRect}", "top", '246px', { fromValue: '237px'}], position: 2579, duration: 671, easing: "easeInOutBack" },
            { id: "eid37", tween: [ "style", "${_RoundRectCopy}", "height", '18px', { fromValue: '4px'}], position: 1850, duration: 729, easing: "easeInOutBack" },
            { id: "eid51", tween: [ "style", "${_RoundRectCopy}", "height", '4px', { fromValue: '18px'}], position: 2579, duration: 671, easing: "easeInOutBack" },
            { id: "eid89", tween: [ "transform", "${_wminrightleg}", "rotateZ", '-24deg', { fromValue: '0deg'}], position: 500, duration: 203, easing: "easeInOutBack" },
            { id: "eid91", tween: [ "transform", "${_wminrightleg}", "rotateZ", '0deg', { fromValue: '-24deg'}], position: 703, duration: 98, easing: "easeInOutBack" },
            { id: "eid120", tween: [ "transform", "${_wminrightleg}", "rotateZ", '-24deg', { fromValue: '0deg'}], position: 801, duration: 203, easing: "easeInOutBack" },
            { id: "eid121", tween: [ "transform", "${_wminrightleg}", "rotateZ", '0deg', { fromValue: '-24deg'}], position: 1004, duration: 98, easing: "easeInOutBack" },
            { id: "eid122", tween: [ "transform", "${_wminrightleg}", "rotateZ", '-24deg', { fromValue: '0deg'}], position: 1102, duration: 203, easing: "easeInOutBack" },
            { id: "eid123", tween: [ "transform", "${_wminrightleg}", "rotateZ", '0deg', { fromValue: '-24deg'}], position: 1305, duration: 98, easing: "easeInOutBack" },
            { id: "eid77", tween: [ "style", "${_wminhead}", "top", '78px', { fromValue: '87px'}], position: 1850, duration: 729, easing: "easeInOutBack" },
            { id: "eid82", tween: [ "style", "${_wminhead}", "top", '87px', { fromValue: '78px'}], position: 2579, duration: 671, easing: "easeInOutBack" },
            { id: "eid27", tween: [ "style", "${_wminbody}", "top", '207px', { fromValue: '203px'}], position: 1850, duration: 729, easing: "easeInOutBack" },
            { id: "eid53", tween: [ "style", "${_wminbody}", "top", '203px', { fromValue: '207px'}], position: 2579, duration: 671, easing: "easeInOutBack" },
            { id: "eid36", tween: [ "style", "${_RoundRect}", "height", '18px', { fromValue: '4px'}], position: 1850, duration: 729, easing: "easeInOutBack" },
            { id: "eid52", tween: [ "style", "${_RoundRect}", "height", '4px', { fromValue: '18px'}], position: 2579, duration: 671, easing: "easeInOutBack" },
            { id: "eid78", tween: [ "style", "${_RoundRectCopy}", "top", '226px', { fromValue: '235px'}], position: 1850, duration: 729, easing: "easeInOutBack" },
            { id: "eid83", tween: [ "style", "${_RoundRectCopy}", "top", '235px', { fromValue: '226px'}], position: 2579, duration: 671, easing: "easeInOutBack" },
            { id: "eid75", tween: [ "style", "${_wminsat}", "top", '-9px', { fromValue: '0px'}], position: 1850, duration: 729, easing: "easeInOutBack" },
            { id: "eid80", tween: [ "style", "${_wminsat}", "top", '0px', { fromValue: '-9px'}], position: 2579, duration: 671, easing: "easeInOutBack" }         ]
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
})(jQuery, AdobeEdge, "EDGE-18741332");
