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
            id:'Rectangle',
            type:'rect',
            rect:['234px','109px','76px','93px','auto','auto'],
            fill:["rgba(232,93,126,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'RectangleCopy',
            type:'rect',
            rect:['233px','180px','76px','100px','auto','auto'],
            fill:["rgba(232,93,126,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[[],[],['-3']]
         },
         {
            id:'glufoot',
            type:'image',
            rect:['190px','238px','157px','117px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"glufoot.png",'0px','0px']
         },
         {
            id:'gluhead',
            type:'image',
            rect:['205px','35px','153px','142px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"gluhead.png",'0px','0px']
         },
         {
            id:'glulh1',
            type:'image',
            rect:['211px','41px','21px','27px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"glulh1.png",'0px','0px']
         },
         {
            id:'glulh2',
            type:'image',
            rect:['217px','48px','9px','12px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"glulh2.png",'0px','0px']
         },
         {
            id:'glulu1',
            type:'image',
            rect:['195px','318px','23px','33px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"glulu1.png",'0px','0px']
         },
         {
            id:'glulu2',
            type:'image',
            rect:['201px','327px','10px','13px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"glulu2.png",'0px','0px']
         },
         {
            id:'glurh1',
            type:'image',
            rect:['338px','39px','16px','19px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"glurh1.png",'0px','0px']
         },
         {
            id:'glurh2',
            type:'image',
            rect:['343px','42px','6px','8px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"glurh2.png",'0px','0px']
         },
         {
            id:'gluru1',
            type:'image',
            rect:['323px','324px','22px','23px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"gluru1.png",'0px','0px']
         },
         {
            id:'gluru2',
            type:'image',
            rect:['332px','334px','8px','8px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"gluru2.png",'0px','0px']
         },
         {
            id:'glumouth',
            type:'image',
            rect:['205px','174px','153px','69px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"glumouth.png",'0px','0px']
         },
         {
            id:'glurightpupil',
            type:'image',
            rect:['292px','143px','9px','13px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"glurightpupil.png",'0px','0px']
         },
         {
            id:'glurightpupilCopy',
            type:'image',
            rect:['254px','143px','9px','13px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"glurightpupil.png",'0px','0px']
         },
         {
            id:'RoundRect',
            type:'rect',
            rect:['249px','114px','64px','4px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(232,93,126,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "height", '4px'],
            ["style", "opacity", '0'],
            ["style", "width", '64px']
         ],
         "${_glulh1}": [
            ["style", "top", '41px'],
            ["style", "height", '27px'],
            ["style", "opacity", '1'],
            ["style", "left", '211px'],
            ["style", "width", '21px']
         ],
         "${_gluru2}": [
            ["style", "top", '334px'],
            ["style", "height", '8px'],
            ["style", "left", '332px'],
            ["style", "width", '8px']
         ],
         "${_glurh1}": [
            ["style", "top", '39px'],
            ["style", "height", '19px'],
            ["style", "opacity", '1'],
            ["style", "left", '338px'],
            ["style", "width", '16px']
         ],
         "${_glufoot}": [
            ["style", "top", '238px'],
            ["style", "height", '117px'],
            ["style", "left", '190px'],
            ["style", "width", '157px']
         ],
         "${_glulu1}": [
            ["style", "top", '318px'],
            ["style", "height", '33px'],
            ["style", "opacity", '1'],
            ["style", "left", '195px'],
            ["style", "width", '23px']
         ],
         "${_RectangleCopy}": [
            ["color", "background-color", 'rgba(232,93,126,1)'],
            ["transform", "skewX", '-3deg'],
            ["style", "height", '57px'],
            ["style", "top", '189px'],
            ["style", "left", '234px'],
            ["style", "width", '76px']
         ],
         "${_glurightpupilCopy}": [
            ["style", "height", '13px'],
            ["style", "top", '143px'],
            ["style", "left", '254px'],
            ["style", "width", '9px']
         ],
         "${_glulh2}": [
            ["style", "top", '48px'],
            ["style", "height", '12px'],
            ["style", "left", '217px'],
            ["style", "width", '9px']
         ],
         "${_Rectangle}": [
            ["style", "top", '109px'],
            ["style", "height", '93px'],
            ["color", "background-color", 'rgba(232,93,126,1.00)'],
            ["style", "left", '234px'],
            ["style", "width", '76px']
         ],
         "${_glulu2}": [
            ["style", "top", '327px'],
            ["style", "height", '13px'],
            ["style", "left", '201px'],
            ["style", "width", '10px']
         ],
         "${_gluhead}": [
            ["style", "top", '35px'],
            ["style", "height", '142px'],
            ["style", "left", '205px'],
            ["style", "width", '153px']
         ],
         "${_gluru1}": [
            ["style", "top", '324px'],
            ["style", "height", '23px'],
            ["style", "opacity", '1'],
            ["style", "left", '323px'],
            ["style", "width", '22px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '550px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ],
         "${_glumouth}": [
            ["style", "top", '174px'],
            ["style", "height", '69px'],
            ["style", "left", '205px'],
            ["style", "width", '153px']
         ],
         "${_glurightpupil}": [
            ["style", "top", '143px'],
            ["style", "height", '13px'],
            ["style", "left", '292px'],
            ["style", "width", '9px']
         ],
         "${_glurh2}": [
            ["style", "top", '42px'],
            ["style", "height", '8px'],
            ["style", "left", '343px'],
            ["style", "width", '6px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 7757,
         autoPlay: true,
         timeline: [
            { id: "eid11", tween: [ "style", "${_glurh1}", "left", '338px', { fromValue: '338px'}], position: 0, duration: 0 },
            { id: "eid47", tween: [ "style", "${_glulu2}", "height", '13px', { fromValue: '13px'}], position: 0, duration: 0 },
            { id: "eid57", tween: [ "style", "${_glulh1}", "top", '11px', { fromValue: '41px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid118", tween: [ "style", "${_glulh1}", "top", '41px', { fromValue: '11px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid55", tween: [ "style", "${_glurh2}", "top", '12px', { fromValue: '42px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid110", tween: [ "style", "${_glurh2}", "top", '42px', { fromValue: '12px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid43", tween: [ "style", "${_glurightpupil}", "height", '13px', { fromValue: '13px'}], position: 0, duration: 0 },
            { id: "eid23", tween: [ "style", "${_gluhead}", "left", '205px', { fromValue: '205px'}], position: 0, duration: 0 },
            { id: "eid67", tween: [ "style", "${_gluru2}", "top", '359px', { fromValue: '334px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid126", tween: [ "style", "${_gluru2}", "top", '334px', { fromValue: '359px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid68", tween: [ "style", "${_glulu1}", "left", '193px', { fromValue: '195px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid115", tween: [ "style", "${_glulu1}", "left", '195px', { fromValue: '193px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid76", tween: [ "style", "${_Rectangle}", "left", '234px', { fromValue: '234px'}], position: 432, duration: 0 },
            { id: "eid45", tween: [ "style", "${_glurh1}", "height", '19px', { fromValue: '19px'}], position: 0, duration: 0 },
            { id: "eid30", tween: [ "style", "${_glurightpupil}", "width", '9px', { fromValue: '9px'}], position: 0, duration: 0 },
            { id: "eid42", tween: [ "style", "${_glurightpupilCopy}", "height", '13px', { fromValue: '13px'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_glulh1}", "width", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
            { id: "eid66", tween: [ "style", "${_gluru2}", "left", '330px', { fromValue: '332px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid125", tween: [ "style", "${_gluru2}", "left", '332px', { fromValue: '330px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid59", tween: [ "style", "${_glulh2}", "top", '18px', { fromValue: '48px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid117", tween: [ "style", "${_glulh2}", "top", '48px', { fromValue: '18px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid34", tween: [ "style", "${_glulu2}", "width", '10px', { fromValue: '10px'}], position: 0, duration: 0 },
            { id: "eid44", tween: [ "style", "${_glurh2}", "height", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
            { id: "eid141", tween: [ "style", "${_glulu1}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 398 },
            { id: "eid145", tween: [ "style", "${_glulu1}", "opacity", '1', { fromValue: '0'}], position: 1898, duration: 434 },
            { id: "eid153", tween: [ "style", "${_glulu1}", "opacity", '0', { fromValue: '1'}], position: 2332, duration: 398 },
            { id: "eid154", tween: [ "style", "${_glulu1}", "opacity", '1', { fromValue: '0'}], position: 2730, duration: 434 },
            { id: "eid166", tween: [ "style", "${_glulu1}", "opacity", '0', { fromValue: '1'}], position: 3689, duration: 272 },
            { id: "eid167", tween: [ "style", "${_glulu1}", "opacity", '1', { fromValue: '0'}], position: 3961, duration: 289 },
            { id: "eid175", tween: [ "style", "${_glulu1}", "opacity", '0', { fromValue: '1'}], position: 5025, duration: 272 },
            { id: "eid176", tween: [ "style", "${_glulu1}", "opacity", '1', { fromValue: '0'}], position: 5297, duration: 289 },
            { id: "eid28", tween: [ "style", "${_gluru1}", "width", '22px', { fromValue: '22px'}], position: 0, duration: 0 },
            { id: "eid64", tween: [ "style", "${_gluru1}", "left", '321px', { fromValue: '323px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid127", tween: [ "style", "${_gluru1}", "left", '323px', { fromValue: '321px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid180", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 6301, duration: 112 },
            { id: "eid185", tween: [ "style", "${_RoundRect}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 112 },
            { id: "eid87", tween: [ "style", "${_RectangleCopy}", "top", '180px', { fromValue: '189px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid122", tween: [ "style", "${_RectangleCopy}", "top", '189px', { fromValue: '180px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid58", tween: [ "style", "${_glurh1}", "top", '9px', { fromValue: '39px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid111", tween: [ "style", "${_glurh1}", "top", '39px', { fromValue: '9px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid72", tween: [ "style", "${_glumouth}", "top", '164px', { fromValue: '174px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid112", tween: [ "style", "${_glumouth}", "top", '174px', { fromValue: '164px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid56", tween: [ "style", "${_glurightpupilCopy}", "top", '137px', { fromValue: '143px'}], position: 0, duration: 155 },
            { id: "eid134", tween: [ "style", "${_glurightpupilCopy}", "top", '113px', { fromValue: '137px'}], position: 155, duration: 277, easing: "easeOutBack" },
            { id: "eid129", tween: [ "style", "${_glurightpupilCopy}", "top", '143px', { fromValue: '113px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid51", tween: [ "style", "${_gluhead}", "height", '142px', { fromValue: '142px'}], position: 0, duration: 0 },
            { id: "eid65", tween: [ "style", "${_gluru1}", "top", '349px', { fromValue: '324px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid128", tween: [ "style", "${_gluru1}", "top", '324px', { fromValue: '349px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid27", tween: [ "style", "${_gluru2}", "width", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
            { id: "eid79", tween: [ "style", "${_Rectangle}", "width", '76px', { fromValue: '76px'}], position: 432, duration: 0 },
            { id: "eid46", tween: [ "style", "${_glumouth}", "height", '69px', { fromValue: '69px'}], position: 0, duration: 0 },
            { id: "eid19", tween: [ "style", "${_glulh2}", "left", '217px', { fromValue: '217px'}], position: 0, duration: 0 },
            { id: "eid70", tween: [ "style", "${_glulu2}", "left", '199px', { fromValue: '201px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid113", tween: [ "style", "${_glulu2}", "left", '201px', { fromValue: '199px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid35", tween: [ "style", "${_glulu1}", "width", '23px', { fromValue: '23px'}], position: 0, duration: 0 },
            { id: "eid131", tween: [ "style", "${_RectangleCopy}", "width", '76px', { fromValue: '76px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid144", tween: [ "style", "${_gluru1}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 398 },
            { id: "eid148", tween: [ "style", "${_gluru1}", "opacity", '1', { fromValue: '0'}], position: 1898, duration: 434 },
            { id: "eid151", tween: [ "style", "${_gluru1}", "opacity", '0', { fromValue: '1'}], position: 2332, duration: 398 },
            { id: "eid152", tween: [ "style", "${_gluru1}", "opacity", '1', { fromValue: '0'}], position: 2730, duration: 434 },
            { id: "eid160", tween: [ "style", "${_gluru1}", "opacity", '0', { fromValue: '1'}], position: 3164, duration: 246 },
            { id: "eid161", tween: [ "style", "${_gluru1}", "opacity", '1', { fromValue: '0'}], position: 3410, duration: 279 },
            { id: "eid171", tween: [ "style", "${_gluru1}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 246 },
            { id: "eid172", tween: [ "style", "${_gluru1}", "opacity", '1', { fromValue: '0'}], position: 4746, duration: 279 },
            { id: "eid39", tween: [ "style", "${_glufoot}", "width", '157px', { fromValue: '157px'}], position: 0, duration: 0 },
            { id: "eid135", tween: [ "style", "${_glurightpupil}", "left", '293px', { fromValue: '292px'}], position: 0, duration: 155 },
            { id: "eid62", tween: [ "style", "${_glufoot}", "left", '187px', { fromValue: '190px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid120", tween: [ "style", "${_glufoot}", "left", '190px', { fromValue: '187px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid85", tween: [ "style", "${_RectangleCopy}", "height", '100px', { fromValue: '57px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid124", tween: [ "style", "${_RectangleCopy}", "height", '57px', { fromValue: '100px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid133", tween: [ "style", "${_glurightpupilCopy}", "left", '256px', { fromValue: '254px'}], position: 0, duration: 155 },
            { id: "eid69", tween: [ "style", "${_glulu1}", "top", '343px', { fromValue: '318px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid116", tween: [ "style", "${_glulu1}", "top", '318px', { fromValue: '343px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid182", tween: [ "style", "${_RoundRect}", "height", '56px', { fromValue: '4px'}], position: 6413, duration: 271, easing: "easeInQuad" },
            { id: "eid183", tween: [ "style", "${_RoundRect}", "height", '3px', { fromValue: '56px'}], position: 6684, duration: 316, easing: "easeOutQuad" },
            { id: "eid142", tween: [ "style", "${_glurh1}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 398 },
            { id: "eid146", tween: [ "style", "${_glurh1}", "opacity", '1', { fromValue: '0'}], position: 1898, duration: 434 },
            { id: "eid157", tween: [ "style", "${_glurh1}", "opacity", '0', { fromValue: '1'}], position: 2332, duration: 398 },
            { id: "eid158", tween: [ "style", "${_glurh1}", "opacity", '1', { fromValue: '0'}], position: 2730, duration: 434 },
            { id: "eid163", tween: [ "style", "${_glurh1}", "opacity", '0', { fromValue: '1'}], position: 3410, duration: 279 },
            { id: "eid164", tween: [ "style", "${_glurh1}", "opacity", '1', { fromValue: '0'}], position: 3689, duration: 272 },
            { id: "eid173", tween: [ "style", "${_glurh1}", "opacity", '0', { fromValue: '1'}], position: 4746, duration: 279 },
            { id: "eid174", tween: [ "style", "${_glurh1}", "opacity", '1', { fromValue: '0'}], position: 5025, duration: 272 },
            { id: "eid143", tween: [ "style", "${_glulh1}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 398 },
            { id: "eid147", tween: [ "style", "${_glulh1}", "opacity", '1', { fromValue: '0'}], position: 1898, duration: 434 },
            { id: "eid155", tween: [ "style", "${_glulh1}", "opacity", '0', { fromValue: '1'}], position: 2332, duration: 398 },
            { id: "eid156", tween: [ "style", "${_glulh1}", "opacity", '1', { fromValue: '0'}], position: 2730, duration: 434 },
            { id: "eid169", tween: [ "style", "${_glulh1}", "opacity", '0', { fromValue: '1'}], position: 3961, duration: 289 },
            { id: "eid170", tween: [ "style", "${_glulh1}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 250 },
            { id: "eid177", tween: [ "style", "${_glulh1}", "opacity", '0', { fromValue: '1'}], position: 5297, duration: 289 },
            { id: "eid178", tween: [ "style", "${_glulh1}", "opacity", '1', { fromValue: '0'}], position: 5586, duration: 250 },
            { id: "eid54", tween: [ "style", "${_gluhead}", "top", '5px', { fromValue: '35px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid119", tween: [ "style", "${_gluhead}", "top", '35px', { fromValue: '5px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid9", tween: [ "style", "${_glurh2}", "left", '343px', { fromValue: '343px'}], position: 0, duration: 0 },
            { id: "eid29", tween: [ "style", "${_glurightpupilCopy}", "width", '9px', { fromValue: '9px'}], position: 0, duration: 0 },
            { id: "eid36", tween: [ "style", "${_glulh2}", "width", '9px', { fromValue: '9px'}], position: 0, duration: 0 },
            { id: "eid50", tween: [ "style", "${_glulh1}", "height", '27px', { fromValue: '27px'}], position: 0, duration: 0 },
            { id: "eid77", tween: [ "style", "${_Rectangle}", "top", '109px', { fromValue: '109px'}], position: 432, duration: 0 },
            { id: "eid40", tween: [ "style", "${_gluru2}", "height", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
            { id: "eid38", tween: [ "style", "${_gluhead}", "width", '153px', { fromValue: '153px'}], position: 0, duration: 0 },
            { id: "eid21", tween: [ "style", "${_glulh1}", "left", '211px', { fromValue: '211px'}], position: 0, duration: 0 },
            { id: "eid86", tween: [ "style", "${_RectangleCopy}", "left", '233px', { fromValue: '234px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid123", tween: [ "style", "${_RectangleCopy}", "left", '234px', { fromValue: '233px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid33", tween: [ "style", "${_glumouth}", "width", '153px', { fromValue: '153px'}], position: 0, duration: 0 },
            { id: "eid52", tween: [ "style", "${_glufoot}", "height", '117px', { fromValue: '117px'}], position: 0, duration: 0 },
            { id: "eid41", tween: [ "style", "${_gluru1}", "height", '23px', { fromValue: '23px'}], position: 0, duration: 0 },
            { id: "eid81", tween: [ "style", "${_Rectangle}", "height", '93px', { fromValue: '93px'}], position: 432, duration: 0 },
            { id: "eid32", tween: [ "style", "${_glurh1}", "width", '16px', { fromValue: '16px'}], position: 0, duration: 0 },
            { id: "eid49", tween: [ "style", "${_glulh2}", "height", '12px', { fromValue: '12px'}], position: 0, duration: 0 },
            { id: "eid63", tween: [ "style", "${_glufoot}", "top", '273px', { fromValue: '238px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid121", tween: [ "style", "${_glufoot}", "top", '238px', { fromValue: '273px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid71", tween: [ "style", "${_glulu2}", "top", '352px', { fromValue: '327px'}], position: 0, duration: 432, easing: "easeInOutBack" },
            { id: "eid114", tween: [ "style", "${_glulu2}", "top", '327px', { fromValue: '352px'}], position: 432, duration: 432, easing: "easeOutElastic" },
            { id: "eid13", tween: [ "style", "${_glumouth}", "left", '205px', { fromValue: '205px'}], position: 0, duration: 0 },
            { id: "eid48", tween: [ "style", "${_glulu1}", "height", '33px', { fromValue: '33px'}], position: 0, duration: 0 },
            { id: "eid31", tween: [ "style", "${_glurh2}", "width", '6px', { fromValue: '6px'}], position: 0, duration: 0 },
            { id: "eid53", tween: [ "style", "${_glurightpupil}", "top", '137px', { fromValue: '143px'}], position: 0, duration: 155 },
            { id: "eid136", tween: [ "style", "${_glurightpupil}", "top", '113px', { fromValue: '137px'}], position: 155, duration: 277, easing: "easeOutBack" },
            { id: "eid130", tween: [ "style", "${_glurightpupil}", "top", '143px', { fromValue: '113px'}], position: 432, duration: 432, easing: "easeOutElastic" }         ]
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
