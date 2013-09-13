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
            rect:['137','62','294','216','auto','auto'],
            c:[
            {
               id:'doqrightarm',
               type:'image',
               rect:['212px','84px','107px','47px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"doqrightarm.png",'0px','0px']
            },
            {
               id:'doqleftarm',
               type:'image',
               rect:['-33px','69px','117px','41px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"doqleftarm.png",'0px','0px']
            },
            {
               id:'doqleftleg',
               type:'image',
               rect:['8px','164px','98px','84px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"doqleftleg.png",'0px','0px']
            },
            {
               id:'doqrightleg',
               type:'image',
               rect:['170px','167px','123px','78px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"doqrightleg.png",'0px','0px']
            },
            {
               id:'downquabody',
               type:'image',
               rect:['48px','0px','194px','193px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"downquabody.png",'0px','0px']
            },
            {
               id:'Ellipse2',
               type:'ellipse',
               rect:['177px','176px','23px','11px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               opacity:1,
               fill:["rgba(57,165,57,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Ellipse2Copy',
               type:'ellipse',
               rect:['89px','166px','23px','13px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               opacity:1,
               fill:["rgba(57,165,57,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'doqmouth',
               type:'image',
               rect:['105px','156px','69px','17px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"doqmouth.png",'0px','0px']
            },
            {
               id:'doqrightiris',
               type:'image',
               rect:['196px','127px','26px','28px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"doqrightiris.png",'0px','0px']
            },
            {
               id:'doqleftiris',
               type:'image',
               rect:['62px','114px','26px','36px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"doqleftiris.png",'0px','0px']
            },
            {
               id:'doqleftpupil',
               type:'image',
               rect:['69px','118px','11px','12px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"doqleftpupil.png",'0px','0px']
            },
            {
               id:'doqrightpupil',
               type:'image',
               rect:['206px','130px','10px','12px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"doqrightpupil.png",'0px','0px']
            },
            {
               id:'Ellipse',
               type:'ellipse',
               rect:['186px','79px','44px','37px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(57,165,57,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'EllipseCopy',
               type:'ellipse',
               rect:['64px','71px','47px','33px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(57,165,57,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            }]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_doqleftleg}": [
            ["style", "top", '164px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '84px'],
            ["style", "opacity", '1'],
            ["style", "left", '8px'],
            ["style", "width", '98px']
         ],
         "${_Ellipse2}": [
            ["style", "top", '176px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '11px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '177px'],
            ["style", "width", '23px']
         ],
         "${_doqrightarm}": [
            ["style", "top", '84px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '47px'],
            ["style", "opacity", '1'],
            ["style", "left", '212px'],
            ["style", "width", '107px']
         ],
         "${_downquabody}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '193px'],
            ["style", "opacity", '1'],
            ["style", "left", '48px'],
            ["style", "width", '194px']
         ],
         "${_Ellipse2Copy}": [
            ["style", "top", '166px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '13px'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '89px'],
            ["style", "width", '23px']
         ],
         "${_doqleftpupil}": [
            ["style", "top", '118px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '12px'],
            ["style", "opacity", '1'],
            ["style", "left", '69px'],
            ["style", "width", '11px']
         ],
         "${_doqrightpupil}": [
            ["style", "top", '130px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '12px'],
            ["style", "opacity", '1'],
            ["style", "left", '206px'],
            ["style", "width", '10px']
         ],
         "${_doqleftarm}": [
            ["style", "top", '69px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '41px'],
            ["style", "opacity", '1'],
            ["style", "left", '-33px'],
            ["style", "width", '117px']
         ],
         "${_Group}": [
            ["style", "top", '62px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '216px'],
            ["style", "opacity", '1'],
            ["style", "left", '137px'],
            ["style", "width", '294px']
         ],
         "${_doqrightleg}": [
            ["style", "top", '167px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '78px'],
            ["style", "opacity", '1'],
            ["style", "left", '170px'],
            ["style", "width", '123px']
         ],
         "${_Ellipse}": [
            ["style", "top", '79px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '20px'],
            ["style", "opacity", '1'],
            ["style", "left", '183px'],
            ["style", "width", '44px']
         ],
         "${_doqmouth}": [
            ["style", "top", '156px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '17px'],
            ["style", "opacity", '1'],
            ["style", "left", '105px'],
            ["style", "width", '69px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '400px'],
            ["style", "width", '550px']
         ],
         "${_EllipseCopy}": [
            ["style", "top", '71px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '18px'],
            ["style", "opacity", '1'],
            ["style", "left", '62px'],
            ["style", "width", '47px']
         ],
         "${_doqleftiris}": [
            ["style", "top", '114px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '36px'],
            ["style", "opacity", '1'],
            ["style", "left", '62px'],
            ["style", "width", '26px']
         ],
         "${_doqrightiris}": [
            ["style", "top", '127px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '28px'],
            ["style", "opacity", '1'],
            ["style", "left", '196px'],
            ["style", "width", '26px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 8250,
         autoPlay: true,
         timeline: [
            { id: "eid23", tween: [ "style", "${_doqrightiris}", "left", '200px', { fromValue: '196px'}], position: 0, duration: 592 },
            { id: "eid41", tween: [ "style", "${_doqrightiris}", "left", '203px', { fromValue: '200px'}], position: 750, duration: 625, easing: "easeInElastic" },
            { id: "eid97", tween: [ "style", "${_doqrightiris}", "left", '200px', { fromValue: '203px'}], position: 2393, duration: 419 },
            { id: "eid113", tween: [ "style", "${_doqrightiris}", "left", '196px', { fromValue: '200px'}], position: 2812, duration: 310 },
            { id: "eid193", tween: [ "style", "${_doqrightiris}", "left", '197px', { fromValue: '196px'}], position: 4390, duration: 287 },
            { id: "eid265", tween: [ "style", "${_doqrightiris}", "left", '196px', { fromValue: '197px'}], position: 4990, duration: 194 },
            { id: "eid169", tween: [ "transform", "${_doqleftarm}", "rotateZ", '-11deg', { fromValue: '0deg'}], position: 3702, duration: 869, easing: "easeInOutElastic" },
            { id: "eid523", tween: [ "transform", "${_doqleftarm}", "rotateZ", '0deg', { fromValue: '-11deg'}], position: 5750, duration: 216, easing: "easeInBack" },
            { id: "eid283", tween: [ "style", "${_downquabody}", "top", '17px', { fromValue: '0px'}], position: 4390, duration: 860 },
            { id: "eid507", tween: [ "style", "${_downquabody}", "top", '0px', { fromValue: '17px'}], position: 5750, duration: 216, easing: "easeInBack" },
            { id: "eid282", tween: [ "style", "${_downquabody}", "left", '47px', { fromValue: '48px'}], position: 4390, duration: 860 },
            { id: "eid510", tween: [ "style", "${_downquabody}", "left", '48px', { fromValue: '47px'}], position: 5750, duration: 216, easing: "easeInBack" },
            { id: "eid242", tween: [ "transform", "${_Group}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 4740, duration: 200 },
            { id: "eid243", tween: [ "transform", "${_Group}", "rotateZ", '-2deg', { fromValue: '4deg'}], position: 4940, duration: 93 },
            { id: "eid246", tween: [ "transform", "${_Group}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 5033, duration: 121 },
            { id: "eid42", tween: [ "style", "${_doqrightiris}", "width", '18px', { fromValue: '26px'}], position: 750, duration: 625, easing: "easeInElastic" },
            { id: "eid98", tween: [ "style", "${_doqrightiris}", "width", '26px', { fromValue: '18px'}], position: 2393, duration: 419 },
            { id: "eid156", tween: [ "style", "${_doqrightarm}", "top", '76px', { fromValue: '84px'}], position: 3702, duration: 869, easing: "easeInOutElastic" },
            { id: "eid527", tween: [ "style", "${_doqrightarm}", "top", '84px', { fromValue: '76px'}], position: 5750, duration: 216, easing: "easeInBack" },
            { id: "eid172", tween: [ "style", "${_doqleftleg}", "top", '132px', { fromValue: '164px'}], position: 3702, duration: 688, easing: "easeInOutElastic" },
            { id: "eid517", tween: [ "style", "${_doqleftleg}", "top", '164px', { fromValue: '132px'}], position: 5750, duration: 216, easing: "easeInBack" },
            { id: "eid55", tween: [ "style", "${_EllipseCopy}", "opacity", '0', { fromValue: '1'}], position: 3049, duration: 73, easing: "easeInElastic" },
            { id: "eid556", tween: [ "style", "${_EllipseCopy}", "opacity", '1', { fromValue: '0'}], position: 5966, duration: 534, easing: "easeInBack" },
            { id: "eid25", tween: [ "style", "${_doqrightpupil}", "left", '207px', { fromValue: '206px'}], position: 0, duration: 592 },
            { id: "eid107", tween: [ "style", "${_doqrightpupil}", "left", '206px', { fromValue: '207px'}], position: 2812, duration: 310 },
            { id: "eid191", tween: [ "style", "${_doqrightpupil}", "left", '207px', { fromValue: '206px'}], position: 4390, duration: 287 },
            { id: "eid259", tween: [ "style", "${_doqrightpupil}", "left", '206px', { fromValue: '207px'}], position: 4990, duration: 194 },
            { id: "eid170", tween: [ "style", "${_doqleftarm}", "top", '66px', { fromValue: '69px'}], position: 3702, duration: 869, easing: "easeInOutElastic" },
            { id: "eid522", tween: [ "style", "${_doqleftarm}", "top", '69px', { fromValue: '66px'}], position: 5750, duration: 216, easing: "easeInBack" },
            { id: "eid602", tween: [ "style", "${_EllipseCopy}", "left", '57px', { fromValue: '62px'}], position: 1622, duration: 5878, easing: "easeInSine" },
            { id: "eid588", tween: [ "style", "${_EllipseCopy}", "left", '55px', { fromValue: '57px'}], position: 7500, duration: 375, easing: "easeInSine" },
            { id: "eid598", tween: [ "style", "${_EllipseCopy}", "left", '57px', { fromValue: '55px'}], position: 7875, duration: 375, easing: "easeInSine" },
            { id: "eid306", tween: [ "style", "${_Ellipse2Copy}", "height", '32px', { fromValue: '13px'}], position: 5397, duration: 211 },
            { id: "eid539", tween: [ "style", "${_Ellipse2Copy}", "height", '17px', { fromValue: '32px'}], position: 5750, duration: 216, easing: "easeInBack" },
            { id: "eid542", tween: [ "style", "${_Ellipse2Copy}", "height", '11px', { fromValue: '17px'}], position: 5966, duration: 136 },
            { id: "eid171", tween: [ "style", "${_doqleftleg}", "left", '36px', { fromValue: '8px'}], position: 3702, duration: 688, easing: "easeInOutElastic" },
            { id: "eid520", tween: [ "style", "${_doqleftleg}", "left", '8px', { fromValue: '36px'}], position: 5750, duration: 216, easing: "easeInBack" },
            { id: "eid28", tween: [ "style", "${_doqleftpupil}", "top", '119px', { fromValue: '118px'}], position: 0, duration: 592 },
            { id: "eid110", tween: [ "style", "${_doqleftpupil}", "top", '118px', { fromValue: '119px'}], position: 2812, duration: 310 },
            { id: "eid196", tween: [ "style", "${_doqleftpupil}", "top", '122px', { fromValue: '118px'}], position: 4390, duration: 287 },
            { id: "eid262", tween: [ "style", "${_doqleftpupil}", "top", '118px', { fromValue: '122px'}], position: 4990, duration: 194 },
            { id: "eid309", tween: [ "style", "${_Ellipse2Copy}", "width", '51px', { fromValue: '23px'}], position: 5397, duration: 211 },
            { id: "eid540", tween: [ "style", "${_Ellipse2Copy}", "width", '45px', { fromValue: '51px'}], position: 5750, duration: 216, easing: "easeInBack" },
            { id: "eid545", tween: [ "style", "${_Ellipse2Copy}", "width", '11px', { fromValue: '45px'}], position: 5966, duration: 136 },
            { id: "eid308", tween: [ "style", "${_Ellipse2Copy}", "left", '61px', { fromValue: '89px'}], position: 5397, duration: 211 },
            { id: "eid537", tween: [ "style", "${_Ellipse2Copy}", "left", '62px', { fromValue: '61px'}], position: 5750, duration: 216, easing: "easeInBack" },
            { id: "eid544", tween: [ "style", "${_Ellipse2Copy}", "left", '96px', { fromValue: '62px'}], position: 5966, duration: 136 },
            { id: "eid288", tween: [ "style", "${_Ellipse2Copy}", "opacity", '1', { fromValue: '0.000000'}], position: 5346, duration: 51 },
            { id: "eid553", tween: [ "style", "${_Ellipse2Copy}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 102 },
            { id: "eid584", tween: [ "style", "${_EllipseCopy}", "width", '51px', { fromValue: '47px'}], position: 7500, duration: 375, easing: "easeInSine" },
            { id: "eid599", tween: [ "style", "${_EllipseCopy}", "width", '47px', { fromValue: '51px'}], position: 7875, duration: 375, easing: "easeInSine" },
            { id: "eid54", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 3049, duration: 73, easing: "easeInElastic" },
            { id: "eid557", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0'}], position: 5966, duration: 534, easing: "easeInBack" },
            { id: "eid307", tween: [ "style", "${_Ellipse2Copy}", "top", '147px', { fromValue: '166px'}], position: 5397, duration: 211 },
            { id: "eid534", tween: [ "style", "${_Ellipse2Copy}", "top", '142px', { fromValue: '147px'}], position: 5750, duration: 216, easing: "easeInBack" },
            { id: "eid543", tween: [ "style", "${_Ellipse2Copy}", "top", '148px', { fromValue: '142px'}], position: 5966, duration: 136 },
            { id: "eid24", tween: [ "style", "${_doqrightiris}", "top", '119px', { fromValue: '127px'}], position: 0, duration: 592 },
            { id: "eid43", tween: [ "style", "${_doqrightiris}", "top", '122px', { fromValue: '119px'}], position: 750, duration: 625, easing: "easeInElastic" },
            { id: "eid96", tween: [ "style", "${_doqrightiris}", "top", '119px', { fromValue: '122px'}], position: 2393, duration: 419 },
            { id: "eid114", tween: [ "style", "${_doqrightiris}", "top", '127px', { fromValue: '119px'}], position: 2812, duration: 310 },
            { id: "eid194", tween: [ "style", "${_doqrightiris}", "top", '131px', { fromValue: '127px'}], position: 4390, duration: 287 },
            { id: "eid266", tween: [ "style", "${_doqrightiris}", "top", '127px', { fromValue: '131px'}], position: 4990, duration: 194 },
            { id: "eid77", tween: [ "style", "${_EllipseCopy}", "height", '33px', { fromValue: '18px'}], position: 1622, duration: 167 },
            { id: "eid81", tween: [ "style", "${_EllipseCopy}", "height", '18px', { fromValue: '33px'}], position: 2565, duration: 167 },
            { id: "eid583", tween: [ "style", "${_EllipseCopy}", "height", '77px', { fromValue: '18px'}], position: 7500, duration: 375, easing: "easeInSine" },
            { id: "eid596", tween: [ "style", "${_EllipseCopy}", "height", '18px', { fromValue: '77px'}], position: 7875, duration: 375, easing: "easeInSine" },
            { id: "eid27", tween: [ "style", "${_doqleftpupil}", "left", '75px', { fromValue: '69px'}], position: 0, duration: 592 },
            { id: "eid109", tween: [ "style", "${_doqleftpupil}", "left", '69px', { fromValue: '75px'}], position: 2812, duration: 310 },
            { id: "eid195", tween: [ "style", "${_doqleftpupil}", "left", '70px', { fromValue: '69px'}], position: 4390, duration: 287 },
            { id: "eid261", tween: [ "style", "${_doqleftpupil}", "left", '69px', { fromValue: '70px'}], position: 4990, duration: 194 },
            { id: "eid155", tween: [ "style", "${_doqrightarm}", "left", '183px', { fromValue: '212px'}], position: 3702, duration: 869, easing: "easeInOutElastic" },
            { id: "eid530", tween: [ "style", "${_doqrightarm}", "left", '212px', { fromValue: '183px'}], position: 5750, duration: 216, easing: "easeInBack" },
            { id: "eid12", tween: [ "style", "${_doqleftiris}", "height", '36px', { fromValue: '36px'}], position: 0, duration: 0 },
            { id: "eid44", tween: [ "style", "${_doqleftiris}", "height", '24px', { fromValue: '36px'}], position: 750, duration: 625, easing: "easeInElastic" },
            { id: "eid91", tween: [ "style", "${_doqleftiris}", "height", '36px', { fromValue: '24px'}], position: 2393, duration: 419 },
            { id: "eid21", tween: [ "style", "${_doqleftiris}", "left", '66px', { fromValue: '62px'}], position: 0, duration: 592 },
            { id: "eid47", tween: [ "style", "${_doqleftiris}", "left", '72px', { fromValue: '66px'}], position: 750, duration: 625, easing: "easeInElastic" },
            { id: "eid93", tween: [ "style", "${_doqleftiris}", "left", '66px', { fromValue: '72px'}], position: 2393, duration: 419 },
            { id: "eid111", tween: [ "style", "${_doqleftiris}", "left", '62px', { fromValue: '66px'}], position: 2812, duration: 310 },
            { id: "eid197", tween: [ "style", "${_doqleftiris}", "left", '63px', { fromValue: '62px'}], position: 4390, duration: 287 },
            { id: "eid263", tween: [ "style", "${_doqleftiris}", "left", '62px', { fromValue: '63px'}], position: 4990, duration: 194 },
            { id: "eid289", tween: [ "style", "${_Ellipse2}", "opacity", '1', { fromValue: '0.000000'}], position: 5346, duration: 51 },
            { id: "eid552", tween: [ "style", "${_Ellipse2}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 102 },
            { id: "eid40", tween: [ "style", "${_doqrightiris}", "height", '20px', { fromValue: '28px'}], position: 750, duration: 625, easing: "easeInElastic" },
            { id: "eid95", tween: [ "style", "${_doqrightiris}", "height", '28px', { fromValue: '20px'}], position: 2393, duration: 419 },
            { id: "eid204", tween: [ "style", "${_doqmouth}", "left", '116px', { fromValue: '105px'}], position: 4390, duration: 183 },
            { id: "eid249", tween: [ "style", "${_doqmouth}", "left", '105px', { fromValue: '116px'}], position: 4990, duration: 183 },
            { id: "eid495", tween: [ "style", "${_doqmouth}", "left", '105px', { fromValue: '105px'}], position: 5750, duration: 216, easing: "easeInBack" },
            { id: "eid168", tween: [ "style", "${_doqleftarm}", "left", '3px', { fromValue: '-33px'}], position: 3702, duration: 869, easing: "easeInOutElastic" },
            { id: "eid525", tween: [ "style", "${_doqleftarm}", "left", '-33px', { fromValue: '3px'}], position: 5750, duration: 216, easing: "easeInBack" },
            { id: "eid582", tween: [ "style", "${_Ellipse}", "width", '51px', { fromValue: '44px'}], position: 7500, duration: 375, easing: "easeInSine" },
            { id: "eid601", tween: [ "style", "${_Ellipse}", "width", '44px', { fromValue: '51px'}], position: 7875, duration: 375, easing: "easeInSine" },
            { id: "eid78", tween: [ "style", "${_Ellipse}", "height", '37px', { fromValue: '20px'}], position: 1789, duration: 185 },
            { id: "eid82", tween: [ "style", "${_Ellipse}", "height", '20px', { fromValue: '37px'}], position: 2815, duration: 185 },
            { id: "eid581", tween: [ "style", "${_Ellipse}", "height", '86px', { fromValue: '20px'}], position: 7500, duration: 375, easing: "easeInSine" },
            { id: "eid600", tween: [ "style", "${_Ellipse}", "height", '20px', { fromValue: '86px'}], position: 7875, duration: 375, easing: "easeInSine" },
            { id: "eid244", tween: [ "style", "${_Group}", "left", '131px', { fromValue: '137px'}], position: 4740, duration: 414, easing: "easeOutBounce" },
            { id: "eid466", tween: [ "style", "${_Group}", "left", '137px', { fromValue: '131px'}], position: 5750, duration: 216, easing: "easeInBack" },
            { id: "eid603", tween: [ "style", "${_EllipseCopy}", "top", '70px', { fromValue: '71px'}], position: 1622, duration: 5878, easing: "easeInSine" },
            { id: "eid589", tween: [ "style", "${_EllipseCopy}", "top", '81px', { fromValue: '70px'}], position: 7500, duration: 375, easing: "easeInSine" },
            { id: "eid597", tween: [ "style", "${_EllipseCopy}", "top", '70px', { fromValue: '81px'}], position: 7875, duration: 375, easing: "easeInSine" },
            { id: "eid167", tween: [ "transform", "${_doqrightarm}", "rotateZ", '14deg', { fromValue: '0deg'}], position: 3702, duration: 869, easing: "easeInOutElastic" },
            { id: "eid528", tween: [ "transform", "${_doqrightarm}", "rotateZ", '0deg', { fromValue: '14deg'}], position: 5750, duration: 216, easing: "easeInBack" },
            { id: "eid10", tween: [ "style", "${_doqleftiris}", "width", '26px', { fromValue: '26px'}], position: 0, duration: 0 },
            { id: "eid46", tween: [ "style", "${_doqleftiris}", "width", '17px', { fromValue: '26px'}], position: 750, duration: 625, easing: "easeInElastic" },
            { id: "eid94", tween: [ "style", "${_doqleftiris}", "width", '26px', { fromValue: '17px'}], position: 2393, duration: 419 },
            { id: "eid173", tween: [ "style", "${_doqrightleg}", "left", '125px', { fromValue: '170px'}], position: 3702, duration: 688, easing: "easeInOutElastic" },
            { id: "eid515", tween: [ "style", "${_doqrightleg}", "left", '170px', { fromValue: '125px'}], position: 5750, duration: 216, easing: "easeInBack" },
            { id: "eid536", tween: [ "style", "${_Ellipse2}", "left", '186px', { fromValue: '177px'}], position: 5750, duration: 216, easing: "easeInBack" },
            { id: "eid549", tween: [ "style", "${_Ellipse2}", "left", '180px', { fromValue: '186px'}], position: 5966, duration: 136 },
            { id: "eid245", tween: [ "style", "${_Group}", "top", '98px', { fromValue: '62px'}], position: 4740, duration: 414, easing: "easeOutBounce" },
            { id: "eid464", tween: [ "style", "${_Group}", "top", '62px', { fromValue: '98px'}], position: 5750, duration: 216, easing: "easeInBack" },
            { id: "eid22", tween: [ "style", "${_doqleftiris}", "top", '106px', { fromValue: '114px'}], position: 0, duration: 592 },
            { id: "eid45", tween: [ "style", "${_doqleftiris}", "top", '114px', { fromValue: '106px'}], position: 750, duration: 625, easing: "easeInElastic" },
            { id: "eid92", tween: [ "style", "${_doqleftiris}", "top", '106px', { fromValue: '114px'}], position: 2393, duration: 419 },
            { id: "eid112", tween: [ "style", "${_doqleftiris}", "top", '114px', { fromValue: '106px'}], position: 2812, duration: 310 },
            { id: "eid198", tween: [ "style", "${_doqleftiris}", "top", '118px', { fromValue: '114px'}], position: 4390, duration: 287 },
            { id: "eid264", tween: [ "style", "${_doqleftiris}", "top", '114px', { fromValue: '118px'}], position: 4990, duration: 194 },
            { id: "eid203", tween: [ "style", "${_doqmouth}", "width", '48px', { fromValue: '69px'}], position: 4390, duration: 183 },
            { id: "eid250", tween: [ "style", "${_doqmouth}", "width", '69px', { fromValue: '48px'}], position: 4990, duration: 183 },
            { id: "eid26", tween: [ "style", "${_doqrightpupil}", "top", '127px', { fromValue: '130px'}], position: 0, duration: 592 },
            { id: "eid108", tween: [ "style", "${_doqrightpupil}", "top", '130px', { fromValue: '127px'}], position: 2812, duration: 310 },
            { id: "eid192", tween: [ "style", "${_doqrightpupil}", "top", '134px', { fromValue: '130px'}], position: 4390, duration: 287 },
            { id: "eid260", tween: [ "style", "${_doqrightpupil}", "top", '130px', { fromValue: '134px'}], position: 4990, duration: 194 },
            { id: "eid311", tween: [ "style", "${_Ellipse2}", "top", '155px', { fromValue: '176px'}], position: 5397, duration: 211 },
            { id: "eid535", tween: [ "style", "${_Ellipse2}", "top", '151px', { fromValue: '155px'}], position: 5750, duration: 216, easing: "easeInBack" },
            { id: "eid547", tween: [ "style", "${_Ellipse2}", "top", '153px', { fromValue: '151px'}], position: 5966, duration: 136 },
            { id: "eid312", tween: [ "style", "${_Ellipse2}", "width", '42px', { fromValue: '23px'}], position: 5397, duration: 211 },
            { id: "eid541", tween: [ "style", "${_Ellipse2}", "width", '38px', { fromValue: '42px'}], position: 5750, duration: 216, easing: "easeInBack" },
            { id: "eid548", tween: [ "style", "${_Ellipse2}", "width", '11px', { fromValue: '38px'}], position: 5966, duration: 136 },
            { id: "eid310", tween: [ "style", "${_Ellipse2}", "height", '32px', { fromValue: '11px'}], position: 5397, duration: 211 },
            { id: "eid538", tween: [ "style", "${_Ellipse2}", "height", '16px', { fromValue: '32px'}], position: 5750, duration: 216, easing: "easeInBack" },
            { id: "eid546", tween: [ "style", "${_Ellipse2}", "height", '6px', { fromValue: '16px'}], position: 5966, duration: 136 },
            { id: "eid174", tween: [ "style", "${_doqrightleg}", "top", '133px', { fromValue: '167px'}], position: 3702, duration: 688, easing: "easeInOutElastic" },
            { id: "eid512", tween: [ "style", "${_doqrightleg}", "top", '167px', { fromValue: '133px'}], position: 5750, duration: 216, easing: "easeInBack" }         ]
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
})(jQuery, AdobeEdge, "EDGE-16397743");
