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
            rect:['58px','61px','466','334','auto','auto'],
            transform:[[],[],[],['0.77447','0.77447']],
            c:[
            {
               id:'upbody',
               type:'image',
               rect:['78px','0px','252px','290px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"upbody.png",'0px','0px']
            },
            {
               id:'upleftarm',
               type:'image',
               rect:['0px','46px','172px','133px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"upleftarm.png",'0px','0px']
            },
            {
               id:'uprightarm',
               type:'image',
               rect:['270px','83px','196px','79px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"uprightarm.png",'0px','0px']
            },
            {
               id:'upleftleg',
               type:'image',
               rect:['41px','198px','137px','136px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"upleftleg.png",'0px','0px']
            },
            {
               id:'uprightleg',
               type:'image',
               rect:['209px','201px','166px','133px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"uprightleg.png",'0px','0px']
            },
            {
               id:'upmouth',
               type:'image',
               rect:['182px','100px','89px','28px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"upmouth.png",'0px','0px']
            },
            {
               id:'upleftiris',
               type:'image',
               rect:['113px','23px','34px','42px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"upleftiris.png",'0px','0px']
            },
            {
               id:'uprightiris',
               type:'image',
               rect:['266px','25px','31px','35px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"uprightiris.png",'0px','0px']
            },
            {
               id:'upleftpupil',
               type:'image',
               rect:['123px','45px','14px','14px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"upleftpupil.png",'0px','0px']
            },
            {
               id:'uprightpupil',
               type:'image',
               rect:['274px','40px','14px','14px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"uprightpupil.png",'0px','0px']
            }]
         },
         {
            id:'Ellipse',
            type:'ellipse',
            rect:['304px','109px','47px','64px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(149,188,48,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_upleftiris}": [
            ["style", "top", '23px'],
            ["style", "left", '113px']
         ],
         "${_upbody}": [
            ["style", "height", '290px'],
            ["style", "top", '0px'],
            ["style", "left", '78px'],
            ["style", "width", '252px']
         ],
         "${_upmouth}": [
            ["style", "height", '28px'],
            ["style", "top", '101px'],
            ["style", "left", '181px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_uprightpupil}": [
            ["style", "top", '40px'],
            ["style", "left", '274px']
         ],
         "${_uprightiris}": [
            ["style", "top", '25px'],
            ["style", "left", '266px']
         ],
         "${_Group}": [
            ["style", "top", '61px'],
            ["style", "left", '58px'],
            ["transform", "scaleY", '0.77447'],
            ["transform", "scaleX", '0.77447']
         ],
         "${_upleftleg}": [
            ["style", "top", '198px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '136px'],
            ["style", "left", '41px'],
            ["style", "width", '137px']
         ],
         "${_Ellipse}": [
            ["style", "top", '109px'],
            ["color", "background-color", 'rgba(149,188,48,1.00)'],
            ["style", "height", '2px'],
            ["style", "opacity", '0'],
            ["style", "left", '312px'],
            ["style", "width", '39px']
         ],
         "${_uprightleg}": [
            ["style", "top", '201px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '133px'],
            ["style", "left", '209px'],
            ["style", "width", '166px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '400px'],
            ["style", "width", '550px']
         ],
         "${_upleftarm}": [
            ["style", "-webkit-transform-origin", [70.18,58.26], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [70.18,58.26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [70.18,58.26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [70.18,58.26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [70.18,58.26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '50px'],
            ["style", "left", '3px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_uprightarm}": [
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '84px'],
            ["style", "left", '267px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_upleftpupil}": [
            ["style", "top", '45px'],
            ["style", "left", '123px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6000,
         autoPlay: true,
         timeline: [
            { id: "eid223", tween: [ "transform", "${_upmouth}", "rotateZ", '-12deg', { fromValue: '0deg'}], position: 2376, duration: 156 },
            { id: "eid269", tween: [ "transform", "${_upmouth}", "rotateZ", '0deg', { fromValue: '-12deg'}], position: 3217, duration: 156 },
            { id: "eid3", tween: [ "style", "${_upbody}", "width", '252px', { fromValue: '252px'}], position: 250, duration: 0 },
            { id: "eid59", tween: [ "style", "${_upmouth}", "left", '181px', { fromValue: '181px'}], position: 137, duration: 0 },
            { id: "eid219", tween: [ "style", "${_upmouth}", "left", '171px', { fromValue: '181px'}], position: 2376, duration: 156 },
            { id: "eid268", tween: [ "style", "${_upmouth}", "left", '181px', { fromValue: '171px'}], position: 3217, duration: 156 },
            { id: "eid47", tween: [ "style", "${_uprightleg}", "left", '221px', { fromValue: '209px'}], position: 137, duration: 558 },
            { id: "eid72", tween: [ "style", "${_uprightleg}", "left", '192px', { fromValue: '221px'}], position: 695, duration: 105, easing: "easeInSine" },
            { id: "eid154", tween: [ "style", "${_uprightleg}", "left", '209px', { fromValue: '192px'}], position: 1379, duration: 47, easing: "easeInQuad" },
            { id: "eid30", tween: [ "style", "${_upbody}", "top", '29px', { fromValue: '0px'}], position: 250, duration: 445 },
            { id: "eid66", tween: [ "style", "${_upbody}", "top", '0px', { fromValue: '29px'}], position: 695, duration: 164, easing: "easeInSine" },
            { id: "eid135", tween: [ "style", "${_upbody}", "top", '29px', { fromValue: '0px'}], position: 1164, duration: 164 },
            { id: "eid134", tween: [ "style", "${_upbody}", "top", '0px', { fromValue: '29px'}], position: 1328, duration: 445 },
            { id: "eid45", tween: [ "style", "${_upleftleg}", "left", '32px', { fromValue: '41px'}], position: 137, duration: 558 },
            { id: "eid77", tween: [ "style", "${_upleftleg}", "left", '54px', { fromValue: '32px'}], position: 695, duration: 105, easing: "easeInSine" },
            { id: "eid150", tween: [ "style", "${_upleftleg}", "left", '41px', { fromValue: '54px'}], position: 1379, duration: 47, easing: "easeInQuad" },
            { id: "eid60", tween: [ "style", "${_upmouth}", "top", '129px', { fromValue: '101px'}], position: 137, duration: 558 },
            { id: "eid180", tween: [ "style", "${_upmouth}", "top", '101px', { fromValue: '129px'}], position: 1269, duration: 558, easing: "easeInQuad" },
            { id: "eid220", tween: [ "style", "${_upmouth}", "top", '98px', { fromValue: '101px'}], position: 2376, duration: 156 },
            { id: "eid267", tween: [ "style", "${_upmouth}", "top", '101px', { fromValue: '98px'}], position: 3217, duration: 156 },
            { id: "eid31", tween: [ "style", "${_upbody}", "height", '262px', { fromValue: '290px'}], position: 250, duration: 445 },
            { id: "eid65", tween: [ "style", "${_upbody}", "height", '290px', { fromValue: '262px'}], position: 695, duration: 164, easing: "easeInSine" },
            { id: "eid137", tween: [ "style", "${_upbody}", "height", '262px', { fromValue: '290px'}], position: 1164, duration: 164 },
            { id: "eid136", tween: [ "style", "${_upbody}", "height", '290px', { fromValue: '262px'}], position: 1328, duration: 445 },
            { id: "eid20", tween: [ "style", "${_uprightpupil}", "top", '53px', { fromValue: '40px'}], position: 137, duration: 181 },
            { id: "eid25", tween: [ "style", "${_uprightpupil}", "top", '82px', { fromValue: '53px'}], position: 318, duration: 377 },
            { id: "eid83", tween: [ "style", "${_uprightpupil}", "top", '63px', { fromValue: '82px'}], position: 695, duration: 305, easing: "easeInSine" },
            { id: "eid165", tween: [ "style", "${_uprightpupil}", "top", '82px', { fromValue: '63px'}], position: 1051, duration: 305 },
            { id: "eid164", tween: [ "style", "${_uprightpupil}", "top", '53px', { fromValue: '82px'}], position: 1356, duration: 377 },
            { id: "eid163", tween: [ "style", "${_uprightpupil}", "top", '40px', { fromValue: '53px'}], position: 1733, duration: 181 },
            { id: "eid212", tween: [ "style", "${_uprightpupil}", "top", '50px', { fromValue: '40px'}], position: 2190, duration: 261 },
            { id: "eid287", tween: [ "style", "${_uprightpupil}", "top", '40px', { fromValue: '50px'}], position: 3109, duration: 261 },
            { id: "eid372", tween: [ "style", "${_uprightpupil}", "top", '58px', { fromValue: '40px'}], position: 3500, duration: 311, easing: "easeInOutQuad" },
            { id: "eid380", tween: [ "style", "${_uprightpupil}", "top", '48px', { fromValue: '58px'}], position: 3811, duration: 273, easing: "swing" },
            { id: "eid390", tween: [ "style", "${_uprightpupil}", "top", '58px', { fromValue: '48px'}], position: 4398, duration: 299, easing: "swing" },
            { id: "eid404", tween: [ "style", "${_uprightpupil}", "top", '46px', { fromValue: '58px'}], position: 4799, duration: 201 },
            { id: "eid489", tween: [ "style", "${_uprightpupil}", "top", '40px', { fromValue: '46px'}], position: 5188, duration: 202 },
            { id: "eid410", tween: [ "style", "${_Ellipse}", "left", '304px', { fromValue: '312px'}], position: 4945, duration: 156 },
            { id: "eid417", tween: [ "style", "${_Ellipse}", "left", '312px', { fromValue: '304px'}], position: 5101, duration: 149 },
            { id: "eid46", tween: [ "style", "${_upleftleg}", "top", '195px', { fromValue: '198px'}], position: 137, duration: 558 },
            { id: "eid78", tween: [ "style", "${_upleftleg}", "top", '215px', { fromValue: '195px'}], position: 695, duration: 105, easing: "easeInSine" },
            { id: "eid148", tween: [ "style", "${_upleftleg}", "top", '198px', { fromValue: '215px'}], position: 1379, duration: 108, easing: "easeInQuad" },
            { id: "eid14", tween: [ "style", "${_uprightiris}", "top", '38px', { fromValue: '25px'}], position: 137, duration: 181 },
            { id: "eid27", tween: [ "style", "${_uprightiris}", "top", '67px', { fromValue: '38px'}], position: 318, duration: 377 },
            { id: "eid80", tween: [ "style", "${_uprightiris}", "top", '48px', { fromValue: '67px'}], position: 695, duration: 305, easing: "easeInSine" },
            { id: "eid173", tween: [ "style", "${_uprightiris}", "top", '67px', { fromValue: '48px'}], position: 1051, duration: 305 },
            { id: "eid172", tween: [ "style", "${_uprightiris}", "top", '38px', { fromValue: '67px'}], position: 1356, duration: 377 },
            { id: "eid171", tween: [ "style", "${_uprightiris}", "top", '25px', { fromValue: '38px'}], position: 1733, duration: 181 },
            { id: "eid206", tween: [ "style", "${_uprightiris}", "top", '41px', { fromValue: '25px'}], position: 2190, duration: 261 },
            { id: "eid291", tween: [ "style", "${_uprightiris}", "top", '25px', { fromValue: '41px'}], position: 3109, duration: 261 },
            { id: "eid366", tween: [ "style", "${_uprightiris}", "top", '44px', { fromValue: '25px'}], position: 3500, duration: 311, easing: "easeInOutQuad" },
            { id: "eid374", tween: [ "style", "${_uprightiris}", "top", '37px', { fromValue: '44px'}], position: 3811, duration: 273, easing: "swing" },
            { id: "eid394", tween: [ "style", "${_uprightiris}", "top", '44px', { fromValue: '37px'}], position: 4398, duration: 299, easing: "swing" },
            { id: "eid398", tween: [ "style", "${_uprightiris}", "top", '35px', { fromValue: '44px'}], position: 4799, duration: 201 },
            { id: "eid488", tween: [ "style", "${_uprightiris}", "top", '25px', { fromValue: '35px'}], position: 5188, duration: 202 },
            { id: "eid15", tween: [ "style", "${_upleftiris}", "left", '115px', { fromValue: '113px'}], position: 137, duration: 181 },
            { id: "eid174", tween: [ "style", "${_upleftiris}", "left", '113px', { fromValue: '115px'}], position: 1733, duration: 181 },
            { id: "eid207", tween: [ "style", "${_upleftiris}", "left", '114px', { fromValue: '113px'}], position: 2190, duration: 261 },
            { id: "eid292", tween: [ "style", "${_upleftiris}", "left", '113px', { fromValue: '114px'}], position: 3109, duration: 261 },
            { id: "eid367", tween: [ "style", "${_upleftiris}", "left", '107px', { fromValue: '113px'}], position: 3500, duration: 311, easing: "easeInOutQuad" },
            { id: "eid375", tween: [ "style", "${_upleftiris}", "left", '122px', { fromValue: '107px'}], position: 3811, duration: 273, easing: "swing" },
            { id: "eid395", tween: [ "style", "${_upleftiris}", "left", '107px', { fromValue: '122px'}], position: 4398, duration: 299, easing: "swing" },
            { id: "eid399", tween: [ "style", "${_upleftiris}", "left", '115px', { fromValue: '107px'}], position: 4799, duration: 201 },
            { id: "eid490", tween: [ "style", "${_upleftiris}", "left", '113px', { fromValue: '115px'}], position: 5188, duration: 202 },
            { id: "eid75", tween: [ "transform", "${_uprightleg}", "rotateZ", '19deg', { fromValue: '0deg'}], position: 695, duration: 105, easing: "easeInSine" },
            { id: "eid160", tween: [ "transform", "${_uprightleg}", "rotateZ", '0deg', { fromValue: '19deg'}], position: 1328, duration: 51 },
            { id: "eid1", tween: [ "style", "${_upbody}", "left", '78px', { fromValue: '78px'}], position: 250, duration: 0 },
            { id: "eid520", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0'}], position: 4848, duration: 60 },
            { id: "eid522", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 5297, duration: 93 },
            { id: "eid38", tween: [ "style", "${_uprightleg}", "height", '133px', { fromValue: '133px'}], position: 137, duration: 0 },
            { id: "eid242", tween: [ "transform", "${_upleftarm}", "rotateZ", '6deg', { fromValue: '0deg'}], position: 2451, duration: 158 },
            { id: "eid243", tween: [ "transform", "${_upleftarm}", "rotateZ", '0deg', { fromValue: '6deg'}], position: 2609, duration: 141 },
            { id: "eid244", tween: [ "transform", "${_upleftarm}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 2750, duration: 163 },
            { id: "eid250", tween: [ "transform", "${_upleftarm}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 2913, duration: 141 },
            { id: "eid251", tween: [ "transform", "${_upleftarm}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 3054, duration: 163 },
            { id: "eid249", tween: [ "transform", "${_upleftarm}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 3217, duration: 158 },
            { id: "eid260", tween: [ "transform", "${_uprightarm}", "rotateZ", '-14deg', { fromValue: '0deg'}], position: 2451, duration: 158, easing: "easeInQuad" },
            { id: "eid261", tween: [ "transform", "${_uprightarm}", "rotateZ", '0deg', { fromValue: '-14deg'}], position: 2609, duration: 141, easing: "easeOutQuad" },
            { id: "eid295", tween: [ "transform", "${_uprightarm}", "rotateZ", '14deg', { fromValue: '0deg'}], position: 2750, duration: 163, easing: "easeOutQuad" },
            { id: "eid296", tween: [ "transform", "${_uprightarm}", "rotateZ", '0deg', { fromValue: '14deg'}], position: 2913, duration: 141, easing: "easeOutQuad" },
            { id: "eid298", tween: [ "transform", "${_uprightarm}", "rotateZ", '14deg', { fromValue: '0deg'}], position: 3054, duration: 163, easing: "easeOutQuad" },
            { id: "eid299", tween: [ "transform", "${_uprightarm}", "rotateZ", '0deg', { fromValue: '14deg'}], position: 3217, duration: 158, easing: "easeOutQuad" },
            { id: "eid36", tween: [ "style", "${_uprightleg}", "width", '166px', { fromValue: '166px'}], position: 137, duration: 0 },
            { id: "eid48", tween: [ "style", "${_uprightleg}", "top", '200px', { fromValue: '201px'}], position: 137, duration: 558 },
            { id: "eid73", tween: [ "style", "${_uprightleg}", "top", '220px', { fromValue: '200px'}], position: 695, duration: 105, easing: "easeInSine" },
            { id: "eid156", tween: [ "style", "${_uprightleg}", "top", '201px', { fromValue: '220px'}], position: 1379, duration: 108, easing: "easeInQuad" },
            { id: "eid13", tween: [ "style", "${_uprightiris}", "left", '268px', { fromValue: '266px'}], position: 137, duration: 181 },
            { id: "eid170", tween: [ "style", "${_uprightiris}", "left", '266px', { fromValue: '268px'}], position: 1733, duration: 181 },
            { id: "eid205", tween: [ "style", "${_uprightiris}", "left", '267px', { fromValue: '266px'}], position: 2190, duration: 261 },
            { id: "eid290", tween: [ "style", "${_uprightiris}", "left", '266px', { fromValue: '267px'}], position: 3109, duration: 261 },
            { id: "eid365", tween: [ "style", "${_uprightiris}", "left", '260px', { fromValue: '266px'}], position: 3500, duration: 311, easing: "easeInOutQuad" },
            { id: "eid373", tween: [ "style", "${_uprightiris}", "left", '275px', { fromValue: '260px'}], position: 3811, duration: 273, easing: "swing" },
            { id: "eid393", tween: [ "style", "${_uprightiris}", "left", '260px', { fromValue: '275px'}], position: 4398, duration: 299, easing: "swing" },
            { id: "eid397", tween: [ "style", "${_uprightiris}", "left", '268px', { fromValue: '260px'}], position: 4799, duration: 201 },
            { id: "eid487", tween: [ "style", "${_uprightiris}", "left", '266px', { fromValue: '268px'}], position: 5188, duration: 202 },
            { id: "eid16", tween: [ "style", "${_upleftiris}", "top", '36px', { fromValue: '23px'}], position: 137, duration: 181 },
            { id: "eid28", tween: [ "style", "${_upleftiris}", "top", '65px', { fromValue: '36px'}], position: 318, duration: 377 },
            { id: "eid81", tween: [ "style", "${_upleftiris}", "top", '46px', { fromValue: '65px'}], position: 695, duration: 305, easing: "easeInSine" },
            { id: "eid177", tween: [ "style", "${_upleftiris}", "top", '65px', { fromValue: '46px'}], position: 1051, duration: 305 },
            { id: "eid176", tween: [ "style", "${_upleftiris}", "top", '36px', { fromValue: '65px'}], position: 1356, duration: 377 },
            { id: "eid175", tween: [ "style", "${_upleftiris}", "top", '23px', { fromValue: '36px'}], position: 1733, duration: 181 },
            { id: "eid208", tween: [ "style", "${_upleftiris}", "top", '39px', { fromValue: '23px'}], position: 2190, duration: 261 },
            { id: "eid293", tween: [ "style", "${_upleftiris}", "top", '23px', { fromValue: '39px'}], position: 3109, duration: 261 },
            { id: "eid368", tween: [ "style", "${_upleftiris}", "top", '42px', { fromValue: '23px'}], position: 3500, duration: 311, easing: "easeInOutQuad" },
            { id: "eid376", tween: [ "style", "${_upleftiris}", "top", '35px', { fromValue: '42px'}], position: 3811, duration: 273, easing: "swing" },
            { id: "eid396", tween: [ "style", "${_upleftiris}", "top", '42px', { fromValue: '35px'}], position: 4398, duration: 299, easing: "swing" },
            { id: "eid400", tween: [ "style", "${_upleftiris}", "top", '33px', { fromValue: '42px'}], position: 4799, duration: 201 },
            { id: "eid491", tween: [ "style", "${_upleftiris}", "top", '23px', { fromValue: '33px'}], position: 5188, duration: 202 },
            { id: "eid409", tween: [ "style", "${_Ellipse}", "height", '64px', { fromValue: '2px'}], position: 4945, duration: 156 },
            { id: "eid416", tween: [ "style", "${_Ellipse}", "height", '2px', { fromValue: '64px'}], position: 5101, duration: 149 },
            { id: "eid61", tween: [ "style", "${_Group}", "left", '58px', { fromValue: '58px'}], position: 695, duration: 0 },
            { id: "eid18", tween: [ "style", "${_upleftpupil}", "top", '58px', { fromValue: '45px'}], position: 137, duration: 181 },
            { id: "eid23", tween: [ "style", "${_upleftpupil}", "top", '87px', { fromValue: '58px'}], position: 318, duration: 377 },
            { id: "eid82", tween: [ "style", "${_upleftpupil}", "top", '68px', { fromValue: '87px'}], position: 695, duration: 305, easing: "easeInSine" },
            { id: "eid169", tween: [ "style", "${_upleftpupil}", "top", '87px', { fromValue: '68px'}], position: 1051, duration: 305 },
            { id: "eid168", tween: [ "style", "${_upleftpupil}", "top", '58px', { fromValue: '87px'}], position: 1356, duration: 377 },
            { id: "eid167", tween: [ "style", "${_upleftpupil}", "top", '45px', { fromValue: '58px'}], position: 1733, duration: 181 },
            { id: "eid210", tween: [ "style", "${_upleftpupil}", "top", '55px', { fromValue: '45px'}], position: 2190, duration: 261 },
            { id: "eid289", tween: [ "style", "${_upleftpupil}", "top", '45px', { fromValue: '55px'}], position: 3109, duration: 261 },
            { id: "eid370", tween: [ "style", "${_upleftpupil}", "top", '61px', { fromValue: '45px'}], position: 3500, duration: 311, easing: "easeInOutQuad" },
            { id: "eid378", tween: [ "style", "${_upleftpupil}", "top", '53px', { fromValue: '61px'}], position: 3811, duration: 273, easing: "swing" },
            { id: "eid392", tween: [ "style", "${_upleftpupil}", "top", '61px', { fromValue: '53px'}], position: 4398, duration: 299, easing: "swing" },
            { id: "eid402", tween: [ "style", "${_upleftpupil}", "top", '46px', { fromValue: '61px'}], position: 4799, duration: 201 },
            { id: "eid485", tween: [ "style", "${_upleftpupil}", "top", '45px', { fromValue: '46px'}], position: 5188, duration: 202 },
            { id: "eid54", tween: [ "style", "${_upleftarm}", "left", '5px', { fromValue: '3px'}], position: 137, duration: 558 },
            { id: "eid68", tween: [ "style", "${_upleftarm}", "left", '-28px', { fromValue: '5px'}], position: 695, duration: 387, easing: "easeOutQuad" },
            { id: "eid139", tween: [ "style", "${_upleftarm}", "left", '5px', { fromValue: '-28px'}], position: 1164, duration: 164 },
            { id: "eid138", tween: [ "style", "${_upleftarm}", "left", '3px', { fromValue: '5px'}], position: 1328, duration: 558 },
            { id: "eid53", tween: [ "style", "${_uprightarm}", "left", '264px', { fromValue: '267px'}], position: 137, duration: 558 },
            { id: "eid70", tween: [ "style", "${_uprightarm}", "left", '265px', { fromValue: '264px'}], position: 695, duration: 164, easing: "easeInSine" },
            { id: "eid143", tween: [ "style", "${_uprightarm}", "left", '264px', { fromValue: '265px'}], position: 1164, duration: 164 },
            { id: "eid142", tween: [ "style", "${_uprightarm}", "left", '267px', { fromValue: '264px'}], position: 1328, duration: 558 },
            { id: "eid241", tween: [ "style", "${_upleftarm}", "-webkit-transform-origin", [70.18,58.26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [70.18,58.26]}], position: 2451, duration: 0 },
            { id: "eid547", tween: [ "style", "${_upleftarm}", "-moz-transform-origin", [70.18,58.26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [70.18,58.26]}], position: 2451, duration: 0 },
            { id: "eid548", tween: [ "style", "${_upleftarm}", "-ms-transform-origin", [70.18,58.26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [70.18,58.26]}], position: 2451, duration: 0 },
            { id: "eid549", tween: [ "style", "${_upleftarm}", "msTransformOrigin", [70.18,58.26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [70.18,58.26]}], position: 2451, duration: 0 },
            { id: "eid550", tween: [ "style", "${_upleftarm}", "-o-transform-origin", [70.18,58.26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [70.18,58.26]}], position: 2451, duration: 0 },
            { id: "eid52", tween: [ "style", "${_uprightarm}", "top", '104px', { fromValue: '84px'}], position: 250, duration: 445 },
            { id: "eid71", tween: [ "style", "${_uprightarm}", "top", '85px', { fromValue: '104px'}], position: 695, duration: 164, easing: "easeInSine" },
            { id: "eid145", tween: [ "style", "${_uprightarm}", "top", '104px', { fromValue: '85px'}], position: 1164, duration: 164 },
            { id: "eid144", tween: [ "style", "${_uprightarm}", "top", '84px', { fromValue: '104px'}], position: 1328, duration: 445 },
            { id: "eid411", tween: [ "style", "${_Ellipse}", "width", '47px', { fromValue: '39px'}], position: 4945, duration: 156 },
            { id: "eid418", tween: [ "style", "${_Ellipse}", "width", '39px', { fromValue: '47px'}], position: 5101, duration: 149 },
            { id: "eid50", tween: [ "style", "${_upleftarm}", "top", '69px', { fromValue: '50px'}], position: 250, duration: 445 },
            { id: "eid69", tween: [ "style", "${_upleftarm}", "top", '24px', { fromValue: '69px'}], position: 695, duration: 387, easing: "easeOutQuad" },
            { id: "eid141", tween: [ "style", "${_upleftarm}", "top", '69px', { fromValue: '24px'}], position: 1164, duration: 164 },
            { id: "eid140", tween: [ "style", "${_upleftarm}", "top", '50px', { fromValue: '69px'}], position: 1328, duration: 445 },
            { id: "eid79", tween: [ "transform", "${_upleftleg}", "rotateZ", '-18deg', { fromValue: '0deg'}], position: 695, duration: 105, easing: "easeInSine" },
            { id: "eid151", tween: [ "transform", "${_upleftleg}", "rotateZ", '0deg', { fromValue: '-18deg'}], position: 1328, duration: 51 },
            { id: "eid64", tween: [ "style", "${_Group}", "top", '-25px', { fromValue: '61px'}], position: 695, duration: 305, easing: "easeInSine" },
            { id: "eid179", tween: [ "style", "${_Group}", "top", '23px', { fromValue: '-25px'}], position: 1000, duration: 328, easing: "easeInQuad" },
            { id: "eid178", tween: [ "style", "${_Group}", "top", '61px', { fromValue: '23px'}], position: 1328, duration: 223, easing: "easeOutQuad" },
            { id: "eid259", tween: [ "style", "${_uprightarm}", "-webkit-transform-origin", [19.56,47.47], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 2451, duration: 158 },
            { id: "eid551", tween: [ "style", "${_uprightarm}", "-moz-transform-origin", [19.56,47.47], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 2451, duration: 158 },
            { id: "eid552", tween: [ "style", "${_uprightarm}", "-ms-transform-origin", [19.56,47.47], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 2451, duration: 158 },
            { id: "eid553", tween: [ "style", "${_uprightarm}", "msTransformOrigin", [19.56,47.47], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 2451, duration: 158 },
            { id: "eid554", tween: [ "style", "${_uprightarm}", "-o-transform-origin", [19.56,47.47], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 2451, duration: 158 },
            { id: "eid19", tween: [ "style", "${_uprightpupil}", "left", '276px', { fromValue: '274px'}], position: 137, duration: 181 },
            { id: "eid162", tween: [ "style", "${_uprightpupil}", "left", '274px', { fromValue: '276px'}], position: 1733, duration: 181 },
            { id: "eid211", tween: [ "style", "${_uprightpupil}", "left", '276px', { fromValue: '274px'}], position: 2190, duration: 261 },
            { id: "eid286", tween: [ "style", "${_uprightpupil}", "left", '274px', { fromValue: '276px'}], position: 3109, duration: 261 },
            { id: "eid371", tween: [ "style", "${_uprightpupil}", "left", '263px', { fromValue: '274px'}], position: 3500, duration: 311, easing: "easeInOutQuad" },
            { id: "eid379", tween: [ "style", "${_uprightpupil}", "left", '289px', { fromValue: '263px'}], position: 3811, duration: 273, easing: "swing" },
            { id: "eid389", tween: [ "style", "${_uprightpupil}", "left", '263px', { fromValue: '289px'}], position: 4398, duration: 299, easing: "swing" },
            { id: "eid403", tween: [ "style", "${_uprightpupil}", "left", '277px', { fromValue: '263px'}], position: 4799, duration: 201 },
            { id: "eid483", tween: [ "style", "${_uprightpupil}", "left", '274px', { fromValue: '277px'}], position: 5188, duration: 202 },
            { id: "eid17", tween: [ "style", "${_upleftpupil}", "left", '125px', { fromValue: '123px'}], position: 137, duration: 181 },
            { id: "eid166", tween: [ "style", "${_upleftpupil}", "left", '123px', { fromValue: '125px'}], position: 1733, duration: 181 },
            { id: "eid209", tween: [ "style", "${_upleftpupil}", "left", '125px', { fromValue: '123px'}], position: 2190, duration: 261 },
            { id: "eid288", tween: [ "style", "${_upleftpupil}", "left", '123px', { fromValue: '125px'}], position: 3109, duration: 261 },
            { id: "eid369", tween: [ "style", "${_upleftpupil}", "left", '112px', { fromValue: '123px'}], position: 3500, duration: 311, easing: "easeInOutQuad" },
            { id: "eid377", tween: [ "style", "${_upleftpupil}", "left", '138px', { fromValue: '112px'}], position: 3811, duration: 273, easing: "swing" },
            { id: "eid391", tween: [ "style", "${_upleftpupil}", "left", '112px', { fromValue: '138px'}], position: 4398, duration: 299, easing: "swing" },
            { id: "eid401", tween: [ "style", "${_upleftpupil}", "left", '125px', { fromValue: '112px'}], position: 4799, duration: 201 },
            { id: "eid484", tween: [ "style", "${_upleftpupil}", "left", '123px', { fromValue: '125px'}], position: 5188, duration: 202 },
            { id: "eid214", tween: [ "style", "${_upmouth}", "height", '62px', { fromValue: '28px'}], position: 2376, duration: 156 },
            { id: "eid266", tween: [ "style", "${_upmouth}", "height", '28px', { fromValue: '62px'}], position: 3217, duration: 156 }         ]
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
})(jQuery, AdobeEdge, "EDGE-19792875");
