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
            id:'qupbody',
            type:'image',
            rect:['202px','287px','146px','88px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"qupbody.png",'0px','0px']
         },
         {
            id:'qupleftarm',
            type:'image',
            rect:['69px','131px','99px','104px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"qupleftarm.png",'0px','0px']
         },
         {
            id:'quprightarm',
            type:'image',
            rect:['401px','152px','93px','97px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"quprightarm.png",'0px','0px']
         },
         {
            id:'Quphead',
            type:'image',
            rect:['158px','119px','260px','175px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Quphead.png",'0px','0px']
         },
         {
            id:'Qupeye',
            type:'image',
            rect:['231px','232px','101px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Qupeye.png",'0px','0px']
         },
         {
            id:'qupleftiris',
            type:'image',
            rect:['237px','244px','21px','20px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"qupleftiris.png",'0px','0px']
         },
         {
            id:'quprightiris',
            type:'image',
            rect:['303px','246px','21px','20px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"quprightiris.png",'0px','0px']
         },
         {
            id:'qupleftpupil',
            type:'image',
            rect:['246px','255px','4px','4px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"qupleftpupil.png",'0px','0px']
         },
         {
            id:'quprightpupil',
            type:'image',
            rect:['310px','256px','4px','4px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"quprightpupil.png",'0px','0px']
         },
         {
            id:'RoundRect',
            type:'rect',
            rect:['227px','223px','38px','7px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(14,133,78,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'RoundRectCopy',
            type:'rect',
            rect:['296px','222px','38px','7px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(14,133,78,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "top", '223px'],
            ["color", "background-color", 'rgba(14,133,78,1.00)'],
            ["style", "height", '8px'],
            ["style", "opacity", '0'],
            ["style", "left", '227px'],
            ["style", "width", '38px']
         ],
         "${_quprightiris}": [
            ["style", "top", '236px'],
            ["style", "height", '20px'],
            ["style", "left", '306px'],
            ["style", "width", '21px']
         ],
         "${_qupleftpupil}": [
            ["style", "top", '240px'],
            ["style", "height", '4px'],
            ["style", "left", '243px'],
            ["style", "width", '4px']
         ],
         "${_Quphead}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.98232'],
            ["style", "height", '175px'],
            ["style", "top", '203px'],
            ["style", "left", '151px'],
            ["style", "width", '260px']
         ],
         "${_RoundRectCopy}": [
            ["style", "top", '222px'],
            ["color", "background-color", 'rgba(14,133,78,1.00)'],
            ["style", "height", '8px'],
            ["style", "opacity", '0'],
            ["style", "left", '296px'],
            ["style", "width", '38px']
         ],
         "${_quprightpupil}": [
            ["style", "top", '240px'],
            ["style", "height", '4px'],
            ["style", "left", '315px'],
            ["style", "width", '4px']
         ],
         "${_qupbody}": [
            ["style", "top", '287px'],
            ["style", "height", '88px'],
            ["style", "left", '202px'],
            ["style", "width", '146px']
         ],
         "${_qupleftiris}": [
            ["style", "top", '237px'],
            ["style", "height", '20px'],
            ["style", "left", '235px'],
            ["style", "width", '21px']
         ],
         "${_Qupeye}": [
            ["style", "top", '232px'],
            ["style", "height", '36px'],
            ["style", "left", '231px'],
            ["style", "width", '101px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '550px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ],
         "${_qupleftarm}": [
            ["style", "top", '249px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '104px'],
            ["style", "-webkit-transform-origin", [102.03,90.87], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [102.03,90.87],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [102.03,90.87],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [102.03,90.87],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [102.03,90.87],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '169px'],
            ["style", "width", '99px']
         ],
         "${_quprightarm}": [
            ["style", "top", '246px'],
            ["style", "height", '97px'],
            ["style", "left", '303px'],
            ["style", "width", '93px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 12648,
         autoPlay: true,
         timeline: [
            { id: "eid40", tween: [ "style", "${_quprightarm}", "top", '152px', { fromValue: '246px'}], position: 828, duration: 626, easing: "easeInOutBounce" },
            { id: "eid42", tween: [ "style", "${_qupleftarm}", "top", '131px', { fromValue: '249px'}], position: 828, duration: 626, easing: "easeInOutBounce" },
            { id: "eid103", tween: [ "style", "${_Qupeye}", "top", '255px', { fromValue: '232px'}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid104", tween: [ "style", "${_Qupeye}", "top", '232px', { fromValue: '255px'}], position: 250, duration: 1887, easing: "easeInOutElastic" },
            { id: "eid172", tween: [ "style", "${_RoundRectCopy}", "height", '50px', { fromValue: '8px'}], position: 1879, duration: 224, easing: "easeInOutBounce" },
            { id: "eid174", tween: [ "style", "${_RoundRectCopy}", "height", '5px', { fromValue: '50px'}], position: 2103, duration: 181, easing: "easeInOutBounce" },
            { id: "eid441", tween: [ "style", "${_RoundRectCopy}", "height", '48px', { fromValue: '5px'}], position: 11250, duration: 250, easing: "easeInQuad" },
            { id: "eid442", tween: [ "style", "${_RoundRectCopy}", "height", '4px', { fromValue: '48px'}], position: 11500, duration: 500, easing: "easeOutQuad" },
            { id: "eid74", tween: [ "style", "${_Quphead}", "-webkit-transform-origin", [49.07,104.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid725", tween: [ "style", "${_Quphead}", "-moz-transform-origin", [49.07,104.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid726", tween: [ "style", "${_Quphead}", "-ms-transform-origin", [49.07,104.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid727", tween: [ "style", "${_Quphead}", "msTransformOrigin", [49.07,104.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid728", tween: [ "style", "${_Quphead}", "-o-transform-origin", [49.07,104.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid47", tween: [ "style", "${_quprightpupil}", "left", '314px', { fromValue: '315px'}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid143", tween: [ "style", "${_quprightpupil}", "left", '313px', { fromValue: '314px'}], position: 250, duration: 536 },
            { id: "eid117", tween: [ "style", "${_quprightpupil}", "left", '305px', { fromValue: '313px'}], position: 786, duration: 214 },
            { id: "eid125", tween: [ "style", "${_quprightpupil}", "left", '306px', { fromValue: '305px'}], position: 1000, duration: 250 },
            { id: "eid133", tween: [ "style", "${_quprightpupil}", "left", '310px', { fromValue: '306px'}], position: 1250, duration: 578 },
            { id: "eid406", tween: [ "style", "${_quprightpupil}", "left", '313px', { fromValue: '310px'}], position: 6750, duration: 500, easing: "easeOutQuad" },
            { id: "eid429", tween: [ "style", "${_quprightpupil}", "left", '310px', { fromValue: '313px'}], position: 8671, duration: 500, easing: "easeOutQuad" },
            { id: "eid352", tween: [ "style", "${_qupleftarm}", "height", '81px', { fromValue: '104px'}], position: 0, duration: 1166, easing: "easeInOutBounce" },
            { id: "eid353", tween: [ "style", "${_qupleftarm}", "height", '104px', { fromValue: '81px'}], position: 1166, duration: 169, easing: "easeInBounce" },
            { id: "eid50", tween: [ "style", "${_qupleftpupil}", "top", '277px', { fromValue: '240px'}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid105", tween: [ "style", "${_qupleftpupil}", "top", '271px', { fromValue: '277px'}], position: 250, duration: 536 },
            { id: "eid112", tween: [ "style", "${_qupleftpupil}", "top", '259px', { fromValue: '271px'}], position: 786, duration: 214 },
            { id: "eid120", tween: [ "style", "${_qupleftpupil}", "top", '258px', { fromValue: '259px'}], position: 1000, duration: 250 },
            { id: "eid128", tween: [ "style", "${_qupleftpupil}", "top", '255px', { fromValue: '258px'}], position: 1250, duration: 0 },
            { id: "eid411", tween: [ "style", "${_qupleftpupil}", "top", '249px', { fromValue: '255px'}], position: 6750, duration: 500, easing: "easeOutQuad" },
            { id: "eid431", tween: [ "style", "${_qupleftpupil}", "top", '255px', { fromValue: '249px'}], position: 8671, duration: 500, easing: "easeOutQuad" },
            { id: "eid44", tween: [ "style", "${_qupleftiris}", "top", '265px', { fromValue: '237px'}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid97", tween: [ "style", "${_qupleftiris}", "top", '259px', { fromValue: '265px'}], position: 250, duration: 536 },
            { id: "eid114", tween: [ "style", "${_qupleftiris}", "top", '253px', { fromValue: '259px'}], position: 786, duration: 214 },
            { id: "eid124", tween: [ "style", "${_qupleftiris}", "top", '252px', { fromValue: '253px'}], position: 1000, duration: 250 },
            { id: "eid130", tween: [ "style", "${_qupleftiris}", "top", '244px', { fromValue: '252px'}], position: 1250, duration: 0 },
            { id: "eid410", tween: [ "style", "${_qupleftiris}", "top", '244px', { fromValue: '244px'}], position: 3349, duration: 0, easing: "easeOutQuad" },
            { id: "eid409", tween: [ "style", "${_qupleftiris}", "top", '241px', { fromValue: '244px'}], position: 6750, duration: 500, easing: "easeOutQuad" },
            { id: "eid435", tween: [ "style", "${_qupleftiris}", "top", '244px', { fromValue: '241px'}], position: 8671, duration: 500, easing: "easeOutQuad" },
            { id: "eid84", tween: [ "style", "${_Quphead}", "top", '205px', { fromValue: '203px'}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid38", tween: [ "style", "${_Quphead}", "top", '119px', { fromValue: '205px'}], position: 250, duration: 1204, easing: "easeInOutBounce" },
            { id: "eid46", tween: [ "style", "${_quprightiris}", "top", '267px', { fromValue: '236px'}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid100", tween: [ "style", "${_quprightiris}", "top", '261px', { fromValue: '267px'}], position: 250, duration: 536 },
            { id: "eid116", tween: [ "style", "${_quprightiris}", "top", '255px', { fromValue: '261px'}], position: 786, duration: 214 },
            { id: "eid122", tween: [ "style", "${_quprightiris}", "top", '254px', { fromValue: '255px'}], position: 1000, duration: 250 },
            { id: "eid132", tween: [ "style", "${_quprightiris}", "top", '246px', { fromValue: '254px'}], position: 1250, duration: 0 },
            { id: "eid404", tween: [ "style", "${_quprightiris}", "top", '246px', { fromValue: '246px'}], position: 3349, duration: 0, easing: "easeOutQuad" },
            { id: "eid403", tween: [ "style", "${_quprightiris}", "top", '244px', { fromValue: '246px'}], position: 6750, duration: 500, easing: "easeOutQuad" },
            { id: "eid433", tween: [ "style", "${_quprightiris}", "top", '246px', { fromValue: '244px'}], position: 8671, duration: 500, easing: "easeOutQuad" },
            { id: "eid37", tween: [ "style", "${_Quphead}", "left", '158px', { fromValue: '151px'}], position: 250, duration: 1204, easing: "easeInOutBounce" },
            { id: "eid41", tween: [ "style", "${_qupleftarm}", "left", '69px', { fromValue: '169px'}], position: 828, duration: 626, easing: "easeInOutBounce" },
            { id: "eid43", tween: [ "style", "${_qupleftiris}", "left", '234px', { fromValue: '235px'}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid96", tween: [ "style", "${_qupleftiris}", "left", '235px', { fromValue: '234px'}], position: 250, duration: 536 },
            { id: "eid113", tween: [ "style", "${_qupleftiris}", "left", '233px', { fromValue: '235px'}], position: 786, duration: 214 },
            { id: "eid123", tween: [ "style", "${_qupleftiris}", "left", '234px', { fromValue: '233px'}], position: 1000, duration: 250 },
            { id: "eid129", tween: [ "style", "${_qupleftiris}", "left", '238px', { fromValue: '234px'}], position: 1250, duration: 265 },
            { id: "eid139", tween: [ "style", "${_qupleftiris}", "left", '237px', { fromValue: '238px'}], position: 1515, duration: 313 },
            { id: "eid408", tween: [ "style", "${_qupleftiris}", "left", '236px', { fromValue: '237px'}], position: 6750, duration: 500, easing: "easeOutQuad" },
            { id: "eid434", tween: [ "style", "${_qupleftiris}", "left", '237px', { fromValue: '236px'}], position: 8671, duration: 500, easing: "easeOutQuad" },
            { id: "eid166", tween: [ "style", "${_RoundRectCopy}", "opacity", '1', { fromValue: '0.000000'}], position: 1789, duration: 90, easing: "easeInOutBounce" },
            { id: "eid437", tween: [ "style", "${_RoundRectCopy}", "opacity", '1', { fromValue: '1'}], position: 11250, duration: 0, easing: "easeInOutBounce" },
            { id: "eid380", tween: [ "transform", "${_qupleftarm}", "rotateZ", '-17deg', { fromValue: '0deg'}], position: 4439, duration: 311, easing: "easeInQuad" },
            { id: "eid381", tween: [ "transform", "${_qupleftarm}", "rotateZ", '9deg', { fromValue: '-17deg'}], position: 4750, duration: 250, easing: "easeInOutQuad" },
            { id: "eid382", tween: [ "transform", "${_qupleftarm}", "rotateZ", '-18deg', { fromValue: '9deg'}], position: 5000, duration: 250, easing: "easeOutQuad" },
            { id: "eid383", tween: [ "transform", "${_qupleftarm}", "rotateZ", '0deg', { fromValue: '-18deg'}], position: 5250, duration: 445 },
            { id: "eid48", tween: [ "style", "${_quprightpupil}", "top", '279px', { fromValue: '240px'}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid98", tween: [ "style", "${_quprightpupil}", "top", '273px', { fromValue: '279px'}], position: 250, duration: 536 },
            { id: "eid118", tween: [ "style", "${_quprightpupil}", "top", '262px', { fromValue: '273px'}], position: 786, duration: 214 },
            { id: "eid126", tween: [ "style", "${_quprightpupil}", "top", '261px', { fromValue: '262px'}], position: 1000, duration: 250 },
            { id: "eid134", tween: [ "style", "${_quprightpupil}", "top", '256px', { fromValue: '261px'}], position: 1250, duration: 0 },
            { id: "eid407", tween: [ "style", "${_quprightpupil}", "top", '252px', { fromValue: '256px'}], position: 6750, duration: 500, easing: "easeOutQuad" },
            { id: "eid430", tween: [ "style", "${_quprightpupil}", "top", '256px', { fromValue: '252px'}], position: 8671, duration: 500, easing: "easeOutQuad" },
            { id: "eid101", tween: [ "style", "${_Qupeye}", "left", '230px', { fromValue: '231px'}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid102", tween: [ "style", "${_Qupeye}", "left", '231px', { fromValue: '230px'}], position: 250, duration: 1887, easing: "easeInOutElastic" },
            { id: "eid167", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0.000000'}], position: 1789, duration: 90, easing: "easeInOutBounce" },
            { id: "eid439", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '1'}], position: 11250, duration: 0, easing: "easeInOutBounce" },
            { id: "eid49", tween: [ "style", "${_qupleftpupil}", "left", '242px', { fromValue: '243px'}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid110", tween: [ "style", "${_qupleftpupil}", "left", '243px', { fromValue: '242px'}], position: 250, duration: 536 },
            { id: "eid111", tween: [ "style", "${_qupleftpupil}", "left", '236px', { fromValue: '243px'}], position: 786, duration: 214 },
            { id: "eid119", tween: [ "style", "${_qupleftpupil}", "left", '237px', { fromValue: '236px'}], position: 1000, duration: 250 },
            { id: "eid127", tween: [ "style", "${_qupleftpupil}", "left", '246px', { fromValue: '237px'}], position: 1250, duration: 578 },
            { id: "eid394", tween: [ "style", "${_qupleftpupil}", "left", '246px', { fromValue: '246px'}], position: 6750, duration: 0, easing: "easeOutQuad" },
            { id: "eid85", tween: [ "transform", "${_Quphead}", "scaleY", '0.82415', { fromValue: '0.98232'}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid93", tween: [ "transform", "${_Quphead}", "scaleY", '0.98232', { fromValue: '0.82415'}], position: 250, duration: 1204, easing: "easeInOutBounce" },
            { id: "eid377", tween: [ "style", "${_qupleftarm}", "-webkit-transform-origin", [102.03,90.87], { valueTemplate: '@@0@@% @@1@@%', fromValue: [102.03,90.87]}], position: 4439, duration: 0 },
            { id: "eid729", tween: [ "style", "${_qupleftarm}", "-moz-transform-origin", [102.03,90.87], { valueTemplate: '@@0@@% @@1@@%', fromValue: [102.03,90.87]}], position: 4439, duration: 0 },
            { id: "eid730", tween: [ "style", "${_qupleftarm}", "-ms-transform-origin", [102.03,90.87], { valueTemplate: '@@0@@% @@1@@%', fromValue: [102.03,90.87]}], position: 4439, duration: 0 },
            { id: "eid731", tween: [ "style", "${_qupleftarm}", "msTransformOrigin", [102.03,90.87], { valueTemplate: '@@0@@% @@1@@%', fromValue: [102.03,90.87]}], position: 4439, duration: 0 },
            { id: "eid732", tween: [ "style", "${_qupleftarm}", "-o-transform-origin", [102.03,90.87], { valueTemplate: '@@0@@% @@1@@%', fromValue: [102.03,90.87]}], position: 4439, duration: 0 },
            { id: "eid45", tween: [ "style", "${_quprightiris}", "left", '305px', { fromValue: '306px'}], position: 0, duration: 250, easing: "easeInOutSine" },
            { id: "eid99", tween: [ "style", "${_quprightiris}", "left", '304px', { fromValue: '305px'}], position: 250, duration: 536 },
            { id: "eid115", tween: [ "style", "${_quprightiris}", "left", '302px', { fromValue: '304px'}], position: 786, duration: 214 },
            { id: "eid131", tween: [ "style", "${_quprightiris}", "left", '306px', { fromValue: '302px'}], position: 1000, duration: 515 },
            { id: "eid137", tween: [ "style", "${_quprightiris}", "left", '303px', { fromValue: '306px'}], position: 1515, duration: 313 },
            { id: "eid402", tween: [ "style", "${_quprightiris}", "left", '305px', { fromValue: '303px'}], position: 6750, duration: 500, easing: "easeOutQuad" },
            { id: "eid432", tween: [ "style", "${_quprightiris}", "left", '303px', { fromValue: '305px'}], position: 8671, duration: 500, easing: "easeOutQuad" },
            { id: "eid173", tween: [ "style", "${_RoundRect}", "height", '50px', { fromValue: '8px'}], position: 1879, duration: 224, easing: "easeInOutBounce" },
            { id: "eid175", tween: [ "style", "${_RoundRect}", "height", '5px', { fromValue: '50px'}], position: 2103, duration: 181, easing: "easeInOutBounce" },
            { id: "eid443", tween: [ "style", "${_RoundRect}", "height", '47px', { fromValue: '5px'}], position: 11250, duration: 250, easing: "easeInQuad" },
            { id: "eid444", tween: [ "style", "${_RoundRect}", "height", '5px', { fromValue: '47px'}], position: 11500, duration: 500, easing: "easeOutQuad" },
            { id: "eid39", tween: [ "style", "${_quprightarm}", "left", '401px', { fromValue: '303px'}], position: 828, duration: 626, easing: "easeInOutBounce" }         ]
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
})(jQuery, AdobeEdge, "EDGE-217813");
