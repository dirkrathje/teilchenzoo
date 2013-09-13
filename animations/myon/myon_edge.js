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
            id:'Myleftleg',
            type:'image',
            rect:['214px','233px','62px','61px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Myleftleg.png",'0px','0px']
         },
         {
            id:'Myonface',
            type:'image',
            rect:['209px','91px','146px','146px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Myonface.png",'0px','0px']
         },
         {
            id:'Myonpiksi',
            type:'image',
            rect:['141px','46px','268px','212px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Myonpiksi.png",'0px','0px']
         },
         {
            id:'MyonpiksiCopy9',
            type:'image',
            rect:['141px','46px','268px','212px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Myonpiksi.png",'0px','0px'],
            transform:[[],[],[],['0.83256']]
         },
         {
            id:'MyonpiksiCopy10',
            type:'image',
            rect:['141px','46px','268px','212px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Myonpiksi.png",'0px','0px']
         },
         {
            id:'myrightiris',
            type:'image',
            rect:['299px','144px','15px','16px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"myrightiris.png",'0px','0px']
         },
         {
            id:'myleftiris',
            type:'image',
            rect:['252px','145px','15px','15px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"myleftiris.png",'0px','0px']
         },
         {
            id:'Myrightleg',
            type:'image',
            rect:['286px','234px','60px','58px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Myrightleg.png",'0px','0px']
         },
         {
            id:'myleftpupil',
            type:'image',
            rect:['304px','148px','6px','6px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"myleftpupil.png",'0px','0px']
         },
         {
            id:'myrightpupil',
            type:'image',
            rect:['256px','149px','6px','6px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"myrightpupil.png",'0px','0px']
         },
         {
            id:'RoundRect',
            type:'rect',
            rect:['244px','122px','45px','21px','auto','auto'],
            borderRadius:["10px","10px","55px 55px","57px 57px"],
            fill:["rgba(8,82,158,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['28']]
         },
         {
            id:'RoundRectCopy2',
            type:'rect',
            rect:['284px','114px','26px','31px','auto','auto'],
            borderRadius:["10px","10px","57px 57px","55px 55px"],
            fill:["rgba(8,82,158,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['28']]
         },
         {
            id:'RoundRectCopy',
            type:'rect',
            rect:['228px','162px','47px','26px','auto','auto'],
            borderRadius:["48px 48px","17px 17px","10px","10px"],
            fill:["rgba(8,82,158,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['65'],[],['0.56965']]
         },
         {
            id:'RoundRectCopy3',
            type:'rect',
            rect:['291px','159px','47px','26px','auto','auto'],
            borderRadius:["48px 48px","17px 17px","10px","10px"],
            fill:["rgba(8,82,158,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['65'],[],['0.56965']]
         },
         {
            id:'mynose',
            type:'image',
            rect:['280px','181px','8px','7px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"mynose.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_RoundRectCopy3}": [
            ["color", "background-color", 'rgba(8,82,158,1)'],
            ["style", "border-top-left-radius", [48,48], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "rotateZ", '65deg'],
            ["transform", "scaleX", '0.56965'],
            ["style", "left", '292px'],
            ["style", "width", '47px'],
            ["style", "top", '169px'],
            ["style", "height", '26px'],
            ["style", "border-top-right-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_myleftpupil}": [
            ["style", "left", '304px'],
            ["style", "top", '148px']
         ],
         "${_Myrightleg}": [
            ["style", "left", '286px'],
            ["style", "top", '234px']
         ],
         "${_myleftiris}": [
            ["style", "left", '252px'],
            ["style", "top", '145px']
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
            ["style", "left", '141px'],
            ["style", "top", '46px'],
            ["transform", "skewY", '0deg'],
            ["transform", "skewX", '1deg'],
            ["transform", "scaleY", '1']
         ],
         "${_Myleftleg}": [
            ["style", "left", '214px'],
            ["style", "top", '233px']
         ],
         "${_mynose}": [
            ["style", "left", '280px'],
            ["style", "top", '181px']
         ],
         "${_myrightiris}": [
            ["style", "left", '299px'],
            ["style", "top", '144px']
         ],
         "${_RoundRectCopy}": [
            ["color", "background-color", 'rgba(8,82,158,1.00)'],
            ["style", "border-top-left-radius", [48,48], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "rotateZ", '65deg'],
            ["transform", "scaleX", '0.56965'],
            ["style", "left", '229px'],
            ["style", "width", '47px'],
            ["style", "top", '172px'],
            ["style", "height", '26px'],
            ["style", "border-top-right-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_myrightpupil}": [
            ["style", "left", '256px'],
            ["style", "top", '149px']
         ],
         "${_RoundRectCopy2}": [
            ["style", "top", '98px'],
            ["style", "border-bottom-left-radius", [55,55], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "rotateZ", '28deg'],
            ["style", "border-bottom-right-radius", [57,57], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '31px'],
            ["color", "background-color", 'rgba(8,82,158,1)'],
            ["style", "left", '285px'],
            ["style", "width", '26px']
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
            ["style", "left", '141px'],
            ["style", "top", '46px'],
            ["transform", "skewY", '0deg'],
            ["transform", "skewX", '1deg'],
            ["transform", "scaleY", '1']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '550px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Myonface}": [
            ["style", "left", '209px'],
            ["style", "top", '91px']
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
            ["style", "top", '46px'],
            ["style", "left", '141px'],
            ["transform", "skewX", '1deg']
         ],
         "${_RoundRect}": [
            ["style", "top", '106px'],
            ["style", "border-bottom-left-radius", [57,57], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [55,55], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "rotateZ", '28deg'],
            ["style", "height", '21px'],
            ["color", "background-color", 'rgba(8,82,158,1.00)'],
            ["style", "left", '245px'],
            ["style", "width", '45px']
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
            { id: "eid341", tween: [ "style", "${_RoundRectCopy3}", "top", '159px', { fromValue: '169px'}], position: 950, duration: 215, easing: "swing" },
            { id: "eid345", tween: [ "style", "${_RoundRectCopy3}", "top", '167px', { fromValue: '159px'}], position: 1665, duration: 215, easing: "swing" },
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
            { id: "eid337", tween: [ "style", "${_RoundRectCopy2}", "top", '114px', { fromValue: '98px'}], position: 950, duration: 215, easing: "swing" },
            { id: "eid347", tween: [ "style", "${_RoundRectCopy2}", "top", '97px', { fromValue: '114px'}], position: 1665, duration: 215, easing: "swing" },
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
            { id: "eid335", tween: [ "style", "${_RoundRectCopy}", "top", '162px', { fromValue: '172px'}], position: 950, duration: 215, easing: "swing" },
            { id: "eid343", tween: [ "style", "${_RoundRectCopy}", "top", '170px', { fromValue: '162px'}], position: 1665, duration: 215, easing: "swing" },
            { id: "eid243", tween: [ "style", "${_MyonpiksiCopy9}", "left", '141px', { fromValue: '141px'}], position: 1000, duration: 0, easing: "swing" },
            { id: "eid250", tween: [ "transform", "${_MyonpiksiCopy9}", "scaleX", '0.78955', { fromValue: '0.83'}], position: 1000, duration: 182, easing: "swing" },
            { id: "eid260", tween: [ "transform", "${_MyonpiksiCopy9}", "scaleX", '0.67548', { fromValue: '0.78955'}], position: 1182, duration: 318, easing: "swing" },
            { id: "eid339", tween: [ "style", "${_RoundRect}", "top", '122px', { fromValue: '106px'}], position: 950, duration: 215, easing: "swing" },
            { id: "eid348", tween: [ "style", "${_RoundRect}", "top", '103px', { fromValue: '122px'}], position: 1665, duration: 215, easing: "swing" },
            { id: "eid244", tween: [ "style", "${_MyonpiksiCopy9}", "top", '46px', { fromValue: '46px'}], position: 1000, duration: 0, easing: "swing" },
            { id: "eid7", tween: [ "transform", "${_Myonpiksi}", "scaleX", '0.83202', { fromValue: '0.93153'}], position: 0, duration: 574, easing: "easeInElastic" },
            { id: "eid285", tween: [ "transform", "${_Myonpiksi}", "scaleX", '0.94578', { fromValue: '0.83202'}], position: 1665, duration: 148, easing: "swing" },
            { id: "eid334", tween: [ "style", "${_RoundRectCopy}", "left", '228px', { fromValue: '229px'}], position: 950, duration: 215, easing: "swing" },
            { id: "eid342", tween: [ "style", "${_RoundRectCopy}", "left", '229px', { fromValue: '228px'}], position: 1665, duration: 215, easing: "swing" },
            { id: "eid255", tween: [ "style", "${_MyonpiksiCopy9}", "opacity", '1', { fromValue: '0'}], position: 950, duration: 50, easing: "swing" },
            { id: "eid291", tween: [ "style", "${_MyonpiksiCopy9}", "opacity", '0', { fromValue: '1'}], position: 1665, duration: 148, easing: "swing" },
            { id: "eid336", tween: [ "style", "${_RoundRectCopy2}", "left", '284px', { fromValue: '285px'}], position: 950, duration: 215, easing: "swing" },
            { id: "eid346", tween: [ "style", "${_RoundRectCopy2}", "left", '285px', { fromValue: '284px'}], position: 1665, duration: 215, easing: "swing" },
            { id: "eid340", tween: [ "style", "${_RoundRectCopy3}", "left", '291px', { fromValue: '292px'}], position: 950, duration: 215, easing: "swing" },
            { id: "eid344", tween: [ "style", "${_RoundRectCopy3}", "left", '292px', { fromValue: '291px'}], position: 1665, duration: 215, easing: "swing" },
            { id: "eid338", tween: [ "style", "${_RoundRect}", "left", '244px', { fromValue: '245px'}], position: 950, duration: 215, easing: "swing" },
            { id: "eid326", tween: [ "style", "${_RoundRect}", "left", '244px', { fromValue: '244px'}], position: 1665, duration: 0, easing: "swing" },
            { id: "eid3", tween: [ "style", "${_Myonpiksi}", "-webkit-transform-origin", [52.61,55.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.61,55.66]}], position: 574, duration: 0 },
            { id: "eid397", tween: [ "style", "${_Myonpiksi}", "-moz-transform-origin", [52.61,55.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.61,55.66]}], position: 574, duration: 0 },
            { id: "eid398", tween: [ "style", "${_Myonpiksi}", "-ms-transform-origin", [52.61,55.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.61,55.66]}], position: 574, duration: 0 },
            { id: "eid399", tween: [ "style", "${_Myonpiksi}", "msTransformOrigin", [52.61,55.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.61,55.66]}], position: 574, duration: 0 },
            { id: "eid400", tween: [ "style", "${_Myonpiksi}", "-o-transform-origin", [52.61,55.66], { valueTemplate: '@@0@@% @@1@@%', fromValue: [52.61,55.66]}], position: 574, duration: 0 },
            { id: "eid240", tween: [ "transform", "${_MyonpiksiCopy10}", "scaleX", '0.70151', { fromValue: '0.83256'}], position: 1000, duration: 182, easing: "swing" }         ]
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
