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
            id:'Symbol_1',
            type:'rect',
            rect:['144','30','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'Symbol_1',
            symbolName:'Symbol_1'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '550px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Symbol_1}": [
            ["style", "top", '45px'],
            ["style", "left", '145px'],
            ["transform", "scaleY", '1.34051'],
            ["transform", "scaleX", '1.34051']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: true,
         timeline: [
            { id: "eid394", tween: [ "transform", "${_Symbol_1}", "scaleX", '1.34051', { fromValue: '1.34051'}], position: 2301, duration: 0 },
            { id: "eid396", tween: [ "style", "${_Symbol_1}", "left", '145px', { fromValue: '145px'}], position: 2301, duration: 0 },
            { id: "eid401", tween: [ "style", "${_Symbol_1}", "top", '45px', { fromValue: '45px'}], position: 2301, duration: 0 },
            { id: "eid395", tween: [ "transform", "${_Symbol_1}", "scaleY", '1.34051', { fromValue: '1.34051'}], position: 2301, duration: 0 }         ]
      }
   }
},
"Symbol_1": {
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
      id: 'Myrightleg',
      type: 'image',
      rect: ['142px','204px','60px','58px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Myrightleg.png','0px','0px']
   },
   {
      id: 'Myleftleg',
      type: 'image',
      rect: ['70px','203px','62px','61px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Myleftleg.png','0px','0px']
   },
   {
      id: 'Myonface',
      type: 'image',
      rect: ['65px','61px','146px','146px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Myonface.png','0px','0px']
   },
   {
      id: 'Myonpiksi',
      type: 'image',
      rect: ['-3px','16px','268px','212px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Myonpiksi.png','0px','0px']
   },
   {
      rect: ['-3px','16px','268px','212px','auto','auto'],
      id: 'MyonpiksiCopy9',
      transform: [[],[],[],['0.83256']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Myonpiksi.png','0px','0px']
   },
   {
      id: 'MyonpiksiCopy10',
      type: 'image',
      rect: ['-3px','16px','268px','212px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Myonpiksi.png','0px','0px']
   },
   {
      id: 'myrightiris',
      type: 'image',
      rect: ['155px','114px','15px','16px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/myrightiris.png','0px','0px']
   },
   {
      id: 'myleftiris',
      type: 'image',
      rect: ['108px','115px','15px','15px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/myleftiris.png','0px','0px']
   },
   {
      id: 'myleftpupil',
      type: 'image',
      rect: ['160px','118px','6px','6px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/myleftpupil.png','0px','0px']
   },
   {
      id: 'myrightpupil',
      type: 'image',
      rect: ['112px','119px','6px','6px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/myrightpupil.png','0px','0px']
   },
   {
      rect: ['100px','92px','45px','21px','auto','auto'],
      borderRadius: ['10px','10px','55px 55px','57px 57px'],
      transform: [[],['28']],
      id: 'RoundRect',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(8,82,158,1.00)']
   },
   {
      rect: ['140px','84px','26px','31px','auto','auto'],
      borderRadius: ['10px','10px','57px 57px','55px 55px'],
      transform: [[],['28']],
      id: 'RoundRectCopy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(8,82,158,1.00)']
   },
   {
      rect: ['84px','132px','47px','26px','auto','auto'],
      borderRadius: ['48px 48px','17px 17px','10px','10px'],
      transform: [[],['65'],[],['0.56965']],
      id: 'RoundRectCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(8,82,158,1.00)']
   },
   {
      rect: ['147px','129px','47px','26px','auto','auto'],
      borderRadius: ['48px 48px','17px 17px','10px','10px'],
      transform: [[],['65'],[],['0.56965']],
      id: 'RoundRectCopy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(8,82,158,1.00)']
   },
   {
      id: 'mynose',
      type: 'image',
      rect: ['136px','151px','8px','7px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mynose.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "top", '76px'],
            ["style", "border-bottom-left-radius", [57,57], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "rotateZ", '28deg'],
            ["style", "border-bottom-right-radius", [55,55], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '21px'],
            ["color", "background-color", 'rgba(8,82,158,1.00)'],
            ["style", "left", '101px'],
            ["style", "width", '45px']
         ],
         "${_RoundRectCopy3}": [
            ["color", "background-color", 'rgba(8,82,158,1)'],
            ["style", "border-top-left-radius", [48,48], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "rotateZ", '65deg'],
            ["transform", "scaleX", '0.56965'],
            ["style", "left", '148px'],
            ["style", "width", '47px'],
            ["style", "top", '139px'],
            ["style", "height", '26px'],
            ["style", "border-top-right-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_MyonpiksiCopy9}": [
            ["style", "-webkit-transform-origin", [52.61,55.66], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [52.61,55.66],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [52.61,55.66],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [52.61,55.66],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [52.61,55.66],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.83'],
            ["style", "opacity", '0'],
            ["style", "left", '-3px'],
            ["style", "top", '16px'],
            ["transform", "skewY", '0deg'],
            ["transform", "skewX", '1deg'],
            ["transform", "scaleY", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '264px'],
            ["style", "width", '260px']
         ],
         "${_Myonface}": [
            ["style", "left", '65px'],
            ["style", "top", '61px']
         ],
         "${_myleftiris}": [
            ["style", "left", '108px'],
            ["style", "top", '115px']
         ],
         "${_myrightiris}": [
            ["style", "left", '155px'],
            ["style", "top", '114px']
         ],
         "${_Myleftleg}": [
            ["style", "left", '70px'],
            ["style", "top", '203px']
         ],
         "${_RoundRectCopy}": [
            ["color", "background-color", 'rgba(8,82,158,1.00)'],
            ["style", "border-top-left-radius", [48,48], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "rotateZ", '65deg'],
            ["transform", "scaleX", '0.56965'],
            ["style", "left", '85px'],
            ["style", "width", '47px'],
            ["style", "top", '142px'],
            ["style", "height", '26px'],
            ["style", "border-top-right-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_MyonpiksiCopy10}": [
            ["style", "-webkit-transform-origin", [52.61,55.66], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [52.61,55.66],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [52.61,55.66],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [52.61,55.66],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [52.61,55.66],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-10deg'],
            ["transform", "scaleX", '0.83256'],
            ["style", "opacity", '0'],
            ["style", "left", '-3px'],
            ["style", "top", '16px'],
            ["transform", "skewY", '0deg'],
            ["transform", "skewX", '1deg'],
            ["transform", "scaleY", '1']
         ],
         "${_RoundRectCopy2}": [
            ["style", "top", '68px'],
            ["style", "border-bottom-left-radius", [55,55], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [57,57], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "rotateZ", '28deg'],
            ["style", "height", '31px'],
            ["color", "background-color", 'rgba(8,82,158,1)'],
            ["style", "left", '141px'],
            ["style", "width", '26px']
         ],
         "${_mynose}": [
            ["style", "left", '136px'],
            ["style", "top", '151px']
         ],
         "${_myrightpupil}": [
            ["style", "left", '112px'],
            ["style", "top", '119px']
         ],
         "${_Myrightleg}": [
            ["style", "left", '142px'],
            ["style", "top", '204px']
         ],
         "${_Myonpiksi}": [
            ["style", "-webkit-transform-origin", [52.61,55.66], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [52.61,55.66],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [52.61,55.66],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [52.61,55.66],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [52.61,55.66],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "skewY", '0deg'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.93153'],
            ["transform", "skewX", '1deg'],
            ["style", "left", '-3px'],
            ["style", "top", '16px']
         ],
         "${_myleftpupil}": [
            ["style", "left", '160px'],
            ["style", "top", '118px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1880,
         autoPlay: true,
         timeline: [
            { id: "eid341", tween: [ "style", "${_RoundRectCopy3}", "top", '129px', { fromValue: '139px'}], position: 950, duration: 215, easing: "swing" },
            { id: "eid345", tween: [ "style", "${_RoundRectCopy3}", "top", '137px', { fromValue: '129px'}], position: 1665, duration: 215, easing: "swing" },
            { id: "eid251", tween: [ "transform", "${_MyonpiksiCopy9}", "scaleY", '0.94355', { fromValue: '1'}], position: 1000, duration: 182, easing: "swing" },
            { id: "eid253", tween: [ "style", "${_MyonpiksiCopy10}", "opacity", '1', { fromValue: '0'}], position: 950, duration: 50, easing: "swing" },
            { id: "eid296", tween: [ "style", "${_MyonpiksiCopy10}", "opacity", '0', { fromValue: '1'}], position: 1665, duration: 148, easing: "swing" },
            { id: "eid262", tween: [ "transform", "${_Myonpiksi}", "rotateZ", '7deg', { fromValue: '0deg'}], position: 950, duration: 50, easing: "easeInElastic" },
            { id: "eid264", tween: [ "transform", "${_Myonpiksi}", "rotateZ", '-3deg', { fromValue: '7deg'}], position: 1000, duration: 55 },
            { id: "eid265", tween: [ "transform", "${_Myonpiksi}", "rotateZ", '-3deg', { fromValue: '7deg'}], position: 1055, duration: 55 },
            { id: "eid266", tween: [ "transform", "${_Myonpiksi}", "rotateZ", '-3deg', { fromValue: '7deg'}], position: 1110, duration: 55 },
            { id: "eid267", tween: [ "transform", "${_Myonpiksi}", "rotateZ", '-3deg', { fromValue: '7deg'}], position: 1165, duration: 55 },
            { id: "eid268", tween: [ "transform", "${_Myonpiksi}", "rotateZ", '-3deg', { fromValue: '7deg'}], position: 1220, duration: 55 },
            { id: "eid269", tween: [ "transform", "${_Myonpiksi}", "rotateZ", '-3deg', { fromValue: '7deg'}], position: 1275, duration: 55 },
            { id: "eid270", tween: [ "transform", "${_Myonpiksi}", "rotateZ", '-3deg', { fromValue: '7deg'}], position: 1330, duration: 55 },
            { id: "eid271", tween: [ "transform", "${_Myonpiksi}", "rotateZ", '-3deg', { fromValue: '7deg'}], position: 1385, duration: 55 },
            { id: "eid272", tween: [ "transform", "${_Myonpiksi}", "rotateZ", '-3deg', { fromValue: '7deg'}], position: 1440, duration: 55 },
            { id: "eid273", tween: [ "transform", "${_Myonpiksi}", "rotateZ", '-3deg', { fromValue: '7deg'}], position: 1495, duration: 55 },
            { id: "eid274", tween: [ "transform", "${_Myonpiksi}", "rotateZ", '-3deg', { fromValue: '7deg'}], position: 1550, duration: 55 },
            { id: "eid276", tween: [ "transform", "${_Myonpiksi}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 1605, duration: 60, easing: "easeInElastic" },
            { id: "eid337", tween: [ "style", "${_RoundRectCopy2}", "top", '84px', { fromValue: '68px'}], position: 950, duration: 215, easing: "swing" },
            { id: "eid347", tween: [ "style", "${_RoundRectCopy2}", "top", '67px', { fromValue: '84px'}], position: 1665, duration: 215, easing: "swing" },
            { id: "eid248", tween: [ "transform", "${_MyonpiksiCopy9}", "rotateZ", '13deg', { fromValue: '0deg'}], position: 1000, duration: 182, easing: "swing" },
            { id: "eid256", tween: [ "transform", "${_MyonpiksiCopy9}", "rotateZ", '6deg', { fromValue: '13deg'}], position: 1182, duration: 197, easing: "swing" },
            { id: "eid259", tween: [ "transform", "${_MyonpiksiCopy9}", "rotateZ", '-32deg', { fromValue: '6deg'}], position: 1379, duration: 213, easing: "swing" },
            { id: "eid278", tween: [ "transform", "${_MyonpiksiCopy9}", "rotateZ", '0deg', { fromValue: '-32deg'}], position: 1592, duration: 73, easing: "swing" },
            { id: "eid287", tween: [ "transform", "${_MyonpiksiCopy9}", "rotateZ", '701deg', { fromValue: '0deg'}], position: 1665, duration: 85, easing: "swing" },
            { id: "eid241", tween: [ "transform", "${_MyonpiksiCopy10}", "scaleY", '0.8607', { fromValue: '1'}], position: 1000, duration: 182, easing: "swing" },
            { id: "eid257", tween: [ "transform", "${_MyonpiksiCopy10}", "rotateZ", '20deg', { fromValue: '-10deg'}], position: 1182, duration: 197, easing: "swing" },
            { id: "eid258", tween: [ "transform", "${_MyonpiksiCopy10}", "rotateZ", '-2deg', { fromValue: '20deg'}], position: 1379, duration: 213, easing: "swing" },
            { id: "eid280", tween: [ "transform", "${_MyonpiksiCopy10}", "rotateZ", '9deg', { fromValue: '-2deg'}], position: 1592, duration: 73, easing: "swing" },
            { id: "eid295", tween: [ "transform", "${_MyonpiksiCopy10}", "rotateZ", '14deg', { fromValue: '9deg'}], position: 1665, duration: 148, easing: "swing" },
            { id: "eid335", tween: [ "style", "${_RoundRectCopy}", "top", '132px', { fromValue: '142px'}], position: 950, duration: 215, easing: "swing" },
            { id: "eid343", tween: [ "style", "${_RoundRectCopy}", "top", '140px', { fromValue: '132px'}], position: 1665, duration: 215, easing: "swing" },
            { id: "eid243", tween: [ "style", "${_MyonpiksiCopy9}", "left", '-3px', { fromValue: '-3px'}], position: 1000, duration: 0, easing: "swing" },
            { id: "eid250", tween: [ "transform", "${_MyonpiksiCopy9}", "scaleX", '0.78955', { fromValue: '0.83'}], position: 1000, duration: 182, easing: "swing" },
            { id: "eid260", tween: [ "transform", "${_MyonpiksiCopy9}", "scaleX", '0.67548', { fromValue: '0.78955'}], position: 1182, duration: 318, easing: "swing" },
            { id: "eid339", tween: [ "style", "${_RoundRect}", "top", '92px', { fromValue: '76px'}], position: 950, duration: 215, easing: "swing" },
            { id: "eid348", tween: [ "style", "${_RoundRect}", "top", '73px', { fromValue: '92px'}], position: 1665, duration: 215, easing: "swing" },
            { id: "eid244", tween: [ "style", "${_MyonpiksiCopy9}", "top", '16px', { fromValue: '16px'}], position: 1000, duration: 0, easing: "swing" },
            { id: "eid7", tween: [ "transform", "${_Myonpiksi}", "scaleX", '0.83202', { fromValue: '0.93153'}], position: 0, duration: 574, easing: "easeInElastic" },
            { id: "eid285", tween: [ "transform", "${_Myonpiksi}", "scaleX", '0.94578', { fromValue: '0.83202'}], position: 1665, duration: 148, easing: "swing" },
            { id: "eid334", tween: [ "style", "${_RoundRectCopy}", "left", '84px', { fromValue: '85px'}], position: 950, duration: 215, easing: "swing" },
            { id: "eid342", tween: [ "style", "${_RoundRectCopy}", "left", '85px', { fromValue: '84px'}], position: 1665, duration: 215, easing: "swing" },
            { id: "eid240", tween: [ "transform", "${_MyonpiksiCopy10}", "scaleX", '0.70151', { fromValue: '0.83256'}], position: 1000, duration: 182, easing: "swing" },
            { id: "eid338", tween: [ "style", "${_RoundRect}", "left", '100px', { fromValue: '101px'}], position: 950, duration: 215, easing: "swing" },
            { id: "eid326", tween: [ "style", "${_RoundRect}", "left", '100px', { fromValue: '100px'}], position: 1665, duration: 0, easing: "swing" },
            { id: "eid3", tween: [ "style", "${_Myonpiksi}", "-webkit-transform-origin", [52.61,55.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.61,55.66]}], position: 574, duration: 0 },
            { id: "eid414", tween: [ "style", "${_Myonpiksi}", "-moz-transform-origin", [52.61,55.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.61,55.66]}], position: 574, duration: 0 },
            { id: "eid415", tween: [ "style", "${_Myonpiksi}", "-ms-transform-origin", [52.61,55.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.61,55.66]}], position: 574, duration: 0 },
            { id: "eid416", tween: [ "style", "${_Myonpiksi}", "msTransformOrigin", [52.61,55.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.61,55.66]}], position: 574, duration: 0 },
            { id: "eid417", tween: [ "style", "${_Myonpiksi}", "-o-transform-origin", [52.61,55.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.61,55.66]}], position: 574, duration: 0 },
            { id: "eid336", tween: [ "style", "${_RoundRectCopy2}", "left", '140px', { fromValue: '141px'}], position: 950, duration: 215, easing: "swing" },
            { id: "eid346", tween: [ "style", "${_RoundRectCopy2}", "left", '141px', { fromValue: '140px'}], position: 1665, duration: 215, easing: "swing" },
            { id: "eid340", tween: [ "style", "${_RoundRectCopy3}", "left", '147px', { fromValue: '148px'}], position: 950, duration: 215, easing: "swing" },
            { id: "eid344", tween: [ "style", "${_RoundRectCopy3}", "left", '148px', { fromValue: '147px'}], position: 1665, duration: 215, easing: "swing" },
            { id: "eid255", tween: [ "style", "${_MyonpiksiCopy9}", "opacity", '1', { fromValue: '0'}], position: 950, duration: 50, easing: "swing" },
            { id: "eid291", tween: [ "style", "${_MyonpiksiCopy9}", "opacity", '0', { fromValue: '1'}], position: 1665, duration: 148, easing: "swing" }         ]
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
})(jQuery, AdobeEdge, "EDGE-8981430");
