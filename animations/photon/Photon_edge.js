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
            id:'footleft',
            type:'image',
            rect:['198px','319px','77px','67px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"footleft.png",'0px','0px']
         },
         {
            id:'footright',
            type:'image',
            rect:['294px','323px','65px','60px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"footright.png",'0px','0px']
         },
         {
            id:'fueleft',
            type:'image',
            rect:['71px','197px','152px','36px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"fueleft.png",'0px','0px']
         },
         {
            id:'fuelefttop',
            type:'image',
            rect:['168px','73px','90px','110px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"fuelefttop.png",'0px','0px']
         },
         {
            id:'fueright',
            type:'image',
            rect:['351px','207px','197px','38px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"fueright.png",'0px','0px']
         },
         {
            id:'fuerighttop',
            type:'image',
            rect:['329px','66px','64px','115px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"fuerighttop.png",'0px','0px']
         },
         {
            id:'mouth2',
            type:'image',
            rect:['198px','261px','175px','64px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"mouth2.png",'0px','0px']
         },
         {
            id:'mouth',
            type:'image',
            rect:['200px','262px','175px','64px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"mouth.png",'0px','0px']
         },
         {
            id:'head',
            type:'image',
            rect:['220px','169px','143px','95px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"head.png",'0px','0px']
         },
         {
            id:'tooth',
            type:'image',
            rect:['322px','271px','19px','20px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"tooth.png",'0px','0px']
         },
         {
            id:'tooth2',
            type:'image',
            rect:['285px','270px','23px','32px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"tooth2.png",'0px','0px']
         },
         {
            id:'tooth3',
            type:'image',
            rect:['258px','270px','13px','23px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"tooth3.png",'0px','0px']
         },
         {
            id:'irisright',
            type:'image',
            rect:['294px','211px','20px','26px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"irisright.png",'0px','0px']
         },
         {
            id:'irisleft',
            type:'image',
            rect:['237px','216px','20px','26px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"irisleft.png",'0px','0px']
         },
         {
            id:'pupilrightCopy',
            type:'image',
            rect:['297px','224px','10px','10px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"pupilright.png",'0px','0px']
         },
         {
            id:'pupilright',
            type:'image',
            rect:['242px','229px','10px','10px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"pupilright.png",'0px','0px'],
            transform:[[],['180']]
         },
         {
            id:'tooth4',
            type:'image',
            rect:['229px','273px','16px','18px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"tooth4.png",'0px','0px']
         },
         {
            id:'RoundRect',
            type:'rect',
            rect:['284px','110px','68px','69px','auto','auto'],
            borderRadius:["156px 156px","231px 231px","94px 94px","164px 164px"],
            fill:["rgba(99,94,71,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['183'],[],['1.0909','1.13299']]
         },
         {
            id:'RoundRectCopy',
            type:'rect',
            rect:['223px','185px','68px','69px','auto','auto'],
            borderRadius:["432px 432px","231px 231px","217px 217px","243px 243px"],
            fill:["rgba(99,94,71,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['361'],[],['0.98176','0.95306']]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "top", '110px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.00629'],
            ["transform", "rotateZ", '183deg'],
            ["transform", "scaleX", '0.51094'],
            ["style", "opacity", '0'],
            ["style", "left", '284px'],
            ["color", "background-color", 'rgba(252,205,3,1.00)']
         ],
         "${_footright}": [
            ["style", "left", '294px'],
            ["style", "top", '323px']
         ],
         "${_fueleft}": [
            ["style", "-webkit-transform-origin", [98.74,69.7], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [98.74,69.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [98.74,69.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [98.74,69.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [98.74,69.7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '71px'],
            ["style", "top", '197px']
         ],
         "${_head}": [
            ["transform", "scaleX", '1.03563'],
            ["style", "left", '220px'],
            ["style", "top", '169px']
         ],
         "${_fueright}": [
            ["style", "-webkit-transform-origin", [2.29,22.83], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [2.29,22.83],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [2.29,22.83],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [2.29,22.83],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [2.29,22.83],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '351px'],
            ["style", "top", '207px']
         ],
         "${_tooth4}": [
            ["style", "height", '20px'],
            ["style", "top", '273px'],
            ["style", "left", '229px'],
            ["style", "width", '17px']
         ],
         "${_tooth}": [
            ["style", "top", '271px'],
            ["style", "left", '322px']
         ],
         "${_footleft}": [
            ["style", "left", '198px'],
            ["style", "top", '319px']
         ],
         "${_fuerighttop}": [
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '329px'],
            ["style", "top", '66px']
         ],
         "${_tooth3}": [
            ["style", "height", '24px'],
            ["style", "top", '270px'],
            ["style", "left", '258px'],
            ["style", "width", '16px']
         ],
         "${_pupilrightCopy}": [
            ["style", "top", '224px'],
            ["style", "left", '297px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '400px'],
            ["style", "width", '550px']
         ],
         "${_pupilright}": [
            ["style", "top", '229px'],
            ["style", "left", '242px'],
            ["transform", "rotateZ", '180deg']
         ],
         "${_fuelefttop}": [
            ["style", "-webkit-transform-origin", [101,94.03], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [101,94.03],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [101,94.03],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [101,94.03],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [101,94.03],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '168px'],
            ["style", "top", '73px']
         ],
         "${_irisleft}": [
            ["style", "top", '216px'],
            ["style", "left", '237px']
         ],
         "${_mouth}": [
            ["style", "top", '262px'],
            ["transform", "scaleY", '1'],
            ["style", "clip", [0,175,64,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "scaleX", '1'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '200px'],
            ["style", "height", '64px']
         ],
         "${_tooth2}": [
            ["style", "top", '270px'],
            ["style", "left", '285px']
         ],
         "${_mouth2}": [
            ["style", "top", '261px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '64px'],
            ["style", "left", '198px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_irisright}": [
            ["style", "top", '211px'],
            ["style", "left", '294px']
         ],
         "${_RoundRectCopy}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "border-top-left-radius", [432,432], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [217,217], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleX", '0.15152'],
            ["style", "opacity", '0'],
            ["style", "left", '223px'],
            ["style", "top", '185px'],
            ["style", "border-bottom-left-radius", [243,243], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '-0.01208'],
            ["transform", "rotateZ", '361deg'],
            ["color", "background-color", 'rgba(252,205,3,1.00)']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 7908,
         autoPlay: true,
         timeline: [
            { id: "eid138", tween: [ "style", "${_pupilright}", "top", '214px', { fromValue: '229px'}], position: 573, duration: 302, easing: "easeOutElastic" },
            { id: "eid422", tween: [ "style", "${_pupilright}", "top", '170px', { fromValue: '214px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid446", tween: [ "style", "${_pupilright}", "top", '180px', { fromValue: '170px'}], position: 2784, duration: 264, easing: "easeOutElastic" },
            { id: "eid590", tween: [ "style", "${_pupilright}", "top", '156px', { fromValue: '180px'}], position: 5500, duration: 325, easing: "easeInOutElastic" },
            { id: "eid602", tween: [ "style", "${_pupilright}", "top", '154px', { fromValue: '156px'}], position: 5825, duration: 175, easing: "easeInOutElastic" },
            { id: "eid610", tween: [ "style", "${_pupilright}", "top", '172px', { fromValue: '154px'}], position: 6000, duration: 214, easing: "easeInOutElastic" },
            { id: "eid622", tween: [ "style", "${_pupilright}", "top", '180px', { fromValue: '172px'}], position: 7177, duration: 128, easing: "easeInOutElastic" },
            { id: "eid121", tween: [ "style", "${_fuerighttop}", "top", '24px', { fromValue: '66px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid5", tween: [ "style", "${_mouth2}", "left", '198px', { fromValue: '198px'}], position: 2034, duration: 0 },
            { id: "eid119", tween: [ "style", "${_fueleft}", "top", '155px', { fromValue: '197px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid25", tween: [ "style", "${_tooth2}", "top", '249px', { fromValue: '270px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid516", tween: [ "style", "${_fueleft}", "-webkit-transform-origin", [98.74,69.7], { valueTemplate: '@@0@@% @@1@@%', fromValue: [98.74,69.7]}], position: 3796, duration: 0, easing: "easeInQuint" },
            { id: "eid1013", tween: [ "style", "${_fueleft}", "-moz-transform-origin", [98.74,69.7], { valueTemplate: '@@0@@% @@1@@%', fromValue: [98.74,69.7]}], position: 3796, duration: 0, easing: "easeInQuint" },
            { id: "eid1014", tween: [ "style", "${_fueleft}", "-ms-transform-origin", [98.74,69.7], { valueTemplate: '@@0@@% @@1@@%', fromValue: [98.74,69.7]}], position: 3796, duration: 0, easing: "easeInQuint" },
            { id: "eid1015", tween: [ "style", "${_fueleft}", "msTransformOrigin", [98.74,69.7], { valueTemplate: '@@0@@% @@1@@%', fromValue: [98.74,69.7]}], position: 3796, duration: 0, easing: "easeInQuint" },
            { id: "eid1016", tween: [ "style", "${_fueleft}", "-o-transform-origin", [98.74,69.7], { valueTemplate: '@@0@@% @@1@@%', fromValue: [98.74,69.7]}], position: 3796, duration: 0, easing: "easeInQuint" },
            { id: "eid134", tween: [ "style", "${_pupilrightCopy}", "top", '211px', { fromValue: '224px'}], position: 573, duration: 302, easing: "easeOutElastic" },
            { id: "eid420", tween: [ "style", "${_pupilrightCopy}", "top", '167px', { fromValue: '211px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid444", tween: [ "style", "${_pupilrightCopy}", "top", '177px', { fromValue: '167px'}], position: 2784, duration: 264, easing: "easeOutElastic" },
            { id: "eid588", tween: [ "style", "${_pupilrightCopy}", "top", '149px', { fromValue: '177px'}], position: 5500, duration: 325, easing: "easeInOutElastic" },
            { id: "eid596", tween: [ "style", "${_pupilrightCopy}", "top", '151px', { fromValue: '149px'}], position: 5825, duration: 175, easing: "easeInOutElastic" },
            { id: "eid612", tween: [ "style", "${_pupilrightCopy}", "top", '168px', { fromValue: '151px'}], position: 6000, duration: 214, easing: "easeInOutElastic" },
            { id: "eid624", tween: [ "style", "${_pupilrightCopy}", "top", '177px', { fromValue: '168px'}], position: 7177, duration: 128, easing: "easeInOutElastic" },
            { id: "eid567", tween: [ "transform", "${_fuelefttop}", "scaleX", '0.37862', { fromValue: '1'}], position: 6000, duration: 688, easing: "easeInOutBounce" },
            { id: "eid573", tween: [ "transform", "${_fuelefttop}", "scaleX", '1', { fromValue: '0.37862'}], position: 6688, duration: 489, easing: "easeInOutElastic" },
            { id: "eid523", tween: [ "transform", "${_fuerighttop}", "rotateZ", '-44deg', { fromValue: '0deg'}], position: 3796, duration: 281, easing: "easeInOutQuad" },
            { id: "eid527", tween: [ "transform", "${_fuerighttop}", "rotateZ", '53deg', { fromValue: '-44deg'}], position: 4077, duration: 474 },
            { id: "eid544", tween: [ "transform", "${_fuerighttop}", "rotateZ", '0deg', { fromValue: '53deg'}], position: 4551, duration: 282, easing: "easeOutQuad" },
            { id: "eid22", tween: [ "style", "${_tooth}", "top", '250px', { fromValue: '271px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid23", tween: [ "style", "${_tooth4}", "top", '252px', { fromValue: '273px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid566", tween: [ "transform", "${_fuerighttop}", "scaleY", '0.37862', { fromValue: '1'}], position: 6000, duration: 688, easing: "easeInOutBounce" },
            { id: "eid576", tween: [ "transform", "${_fuerighttop}", "scaleY", '1', { fromValue: '0.37862'}], position: 6688, duration: 489, easing: "easeInOutElastic" },
            { id: "eid118", tween: [ "style", "${_fuelefttop}", "top", '31px', { fromValue: '73px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid114", tween: [ "style", "${_fuerighttop}", "left", '329px', { fromValue: '329px'}], position: 2034, duration: 0, easing: "easeOutElastic" },
            { id: "eid562", tween: [ "transform", "${_fueright}", "scaleY", '0.37862', { fromValue: '1'}], position: 6000, duration: 688, easing: "easeInOutBounce" },
            { id: "eid570", tween: [ "transform", "${_fueright}", "scaleY", '1', { fromValue: '0.37862'}], position: 6688, duration: 489, easing: "easeInOutElastic" },
            { id: "eid106", tween: [ "style", "${_tooth3}", "height", '24px', { fromValue: '24px'}], position: 2784, duration: 0, easing: "easeOutElastic" },
            { id: "eid136", tween: [ "style", "${_irisleft}", "top", '205px', { fromValue: '216px'}], position: 573, duration: 302, easing: "easeOutElastic" },
            { id: "eid418", tween: [ "style", "${_irisleft}", "top", '161px', { fromValue: '205px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid442", tween: [ "style", "${_irisleft}", "top", '171px', { fromValue: '161px'}], position: 2784, duration: 264, easing: "easeOutElastic" },
            { id: "eid586", tween: [ "style", "${_irisleft}", "top", '150px', { fromValue: '171px'}], position: 5500, duration: 325, easing: "easeInOutElastic" },
            { id: "eid604", tween: [ "style", "${_irisleft}", "top", '148px', { fromValue: '150px'}], position: 5825, duration: 175, easing: "easeInOutElastic" },
            { id: "eid606", tween: [ "style", "${_irisleft}", "top", '162px', { fromValue: '148px'}], position: 6000, duration: 214, easing: "easeInOutElastic" },
            { id: "eid626", tween: [ "style", "${_irisleft}", "top", '171px', { fromValue: '162px'}], position: 7177, duration: 128, easing: "easeInOutElastic" },
            { id: "eid521", tween: [ "transform", "${_fuelefttop}", "rotateZ", '-44deg', { fromValue: '0deg'}], position: 3796, duration: 281, easing: "easeInOutQuad" },
            { id: "eid525", tween: [ "transform", "${_fuelefttop}", "rotateZ", '53deg', { fromValue: '-44deg'}], position: 4077, duration: 474 },
            { id: "eid543", tween: [ "transform", "${_fuelefttop}", "rotateZ", '0deg', { fromValue: '53deg'}], position: 4551, duration: 282, easing: "easeOutQuad" },
            { id: "eid133", tween: [ "style", "${_pupilrightCopy}", "left", '308px', { fromValue: '297px'}], position: 573, duration: 302, easing: "easeOutElastic" },
            { id: "eid419", tween: [ "style", "${_pupilrightCopy}", "left", '311px', { fromValue: '308px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid443", tween: [ "style", "${_pupilrightCopy}", "left", '300px', { fromValue: '311px'}], position: 2784, duration: 264, easing: "easeOutElastic" },
            { id: "eid587", tween: [ "style", "${_pupilrightCopy}", "left", '318px', { fromValue: '300px'}], position: 5500, duration: 325, easing: "easeInOutElastic" },
            { id: "eid595", tween: [ "style", "${_pupilrightCopy}", "left", '301px', { fromValue: '318px'}], position: 5825, duration: 175, easing: "easeInOutElastic" },
            { id: "eid611", tween: [ "style", "${_pupilrightCopy}", "left", '306px', { fromValue: '301px'}], position: 6000, duration: 214, easing: "easeInOutElastic" },
            { id: "eid623", tween: [ "style", "${_pupilrightCopy}", "left", '300px', { fromValue: '306px'}], position: 7177, duration: 128, easing: "easeInOutElastic" },
            { id: "eid131", tween: [ "style", "${_irisright}", "left", '304px', { fromValue: '294px'}], position: 573, duration: 302, easing: "easeOutElastic" },
            { id: "eid423", tween: [ "style", "${_irisright}", "left", '307px', { fromValue: '304px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid447", tween: [ "style", "${_irisright}", "left", '296px', { fromValue: '307px'}], position: 2784, duration: 264, easing: "easeOutElastic" },
            { id: "eid591", tween: [ "style", "${_irisright}", "left", '314px', { fromValue: '296px'}], position: 5500, duration: 325, easing: "easeInOutElastic" },
            { id: "eid593", tween: [ "style", "${_irisright}", "left", '297px', { fromValue: '314px'}], position: 5825, duration: 175, easing: "easeInOutElastic" },
            { id: "eid607", tween: [ "style", "${_irisright}", "left", '302px', { fromValue: '297px'}], position: 6000, duration: 214, easing: "easeInOutElastic" },
            { id: "eid627", tween: [ "style", "${_irisright}", "left", '296px', { fromValue: '302px'}], position: 7177, duration: 128, easing: "easeInOutElastic" },
            { id: "eid31", tween: [ "transform", "${_mouth}", "scaleX", '0.74188', { fromValue: '1'}], position: 2034, duration: 407, easing: "easeOutElastic" },
            { id: "eid116", tween: [ "style", "${_fueright}", "left", '351px', { fromValue: '351px'}], position: 2034, duration: 0, easing: "easeOutElastic" },
            { id: "eid102", tween: [ "transform", "${_head}", "scaleX", '1.03563', { fromValue: '1.03563'}], position: 2034, duration: 0, easing: "easeOutElastic" },
            { id: "eid564", tween: [ "transform", "${_fueleft}", "scaleY", '0.37862', { fromValue: '1'}], position: 6000, duration: 688, easing: "easeInOutBounce" },
            { id: "eid572", tween: [ "transform", "${_fueleft}", "scaleY", '1', { fromValue: '0.37862'}], position: 6688, duration: 489, easing: "easeInOutElastic" },
            { id: "eid177", tween: [ "transform", "${_RoundRectCopy}", "scaleY", '0.95306', { fromValue: '-0.01208'}], position: 1311, duration: 84, easing: "easeOutQuad" },
            { id: "eid186", tween: [ "transform", "${_RoundRectCopy}", "scaleY", '-0.01208', { fromValue: '0.95306'}], position: 1395, duration: 105, easing: "easeInQuint" },
            { id: "eid17", tween: [ "style", "${_tooth}", "left", '322px', { fromValue: '322px'}], position: 2034, duration: 0 },
            { id: "eid112", tween: [ "style", "${_fuelefttop}", "left", '168px', { fromValue: '168px'}], position: 2034, duration: 0, easing: "easeOutElastic" },
            { id: "eid107", tween: [ "style", "${_tooth3}", "width", '16px', { fromValue: '16px'}], position: 2784, duration: 0, easing: "easeOutElastic" },
            { id: "eid565", tween: [ "transform", "${_fuerighttop}", "scaleX", '0.37862', { fromValue: '1'}], position: 6000, duration: 688, easing: "easeInOutBounce" },
            { id: "eid575", tween: [ "transform", "${_fuerighttop}", "scaleX", '1', { fromValue: '0.37862'}], position: 6688, duration: 489, easing: "easeInOutElastic" },
            { id: "eid109", tween: [ "style", "${_tooth4}", "width", '17px', { fromValue: '17px'}], position: 2784, duration: 0, easing: "easeOutElastic" },
            { id: "eid120", tween: [ "style", "${_fueright}", "top", '165px', { fromValue: '207px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid11", tween: [ "transform", "${_mouth2}", "scaleY", '1.7428', { fromValue: '1'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid191", tween: [ "style", "${_RoundRectCopy}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 61, easing: "easeOutQuad" },
            { id: "eid195", tween: [ "style", "${_RoundRectCopy}", "opacity", '0', { fromValue: '1'}], position: 1589, duration: 108, easing: "easeInQuint" },
            { id: "eid515", tween: [ "style", "${_fuelefttop}", "-webkit-transform-origin", [101,94.03], { valueTemplate: '@@0@@% @@1@@%', fromValue: [101,94.03]}], position: 3796, duration: 0, easing: "easeInQuint" },
            { id: "eid1017", tween: [ "style", "${_fuelefttop}", "-moz-transform-origin", [101,94.03], { valueTemplate: '@@0@@% @@1@@%', fromValue: [101,94.03]}], position: 3796, duration: 0, easing: "easeInQuint" },
            { id: "eid1018", tween: [ "style", "${_fuelefttop}", "-ms-transform-origin", [101,94.03], { valueTemplate: '@@0@@% @@1@@%', fromValue: [101,94.03]}], position: 3796, duration: 0, easing: "easeInQuint" },
            { id: "eid1019", tween: [ "style", "${_fuelefttop}", "msTransformOrigin", [101,94.03], { valueTemplate: '@@0@@% @@1@@%', fromValue: [101,94.03]}], position: 3796, duration: 0, easing: "easeInQuint" },
            { id: "eid1020", tween: [ "style", "${_fuelefttop}", "-o-transform-origin", [101,94.03], { valueTemplate: '@@0@@% @@1@@%', fromValue: [101,94.03]}], position: 3796, duration: 0, easing: "easeInQuint" },
            { id: "eid110", tween: [ "style", "${_fueleft}", "left", '71px', { fromValue: '71px'}], position: 2034, duration: 0, easing: "easeOutElastic" },
            { id: "eid29", tween: [ "transform", "${_mouth}", "scaleY", '1', { fromValue: '1'}], position: 2034, duration: 0 },
            { id: "eid14", tween: [ "style", "${_tooth2}", "left", '285px', { fromValue: '285px'}], position: 2034, duration: 0 },
            { id: "eid561", tween: [ "transform", "${_fueright}", "scaleX", '0.37862', { fromValue: '1'}], position: 6000, duration: 688, easing: "easeInOutBounce" },
            { id: "eid569", tween: [ "transform", "${_fueright}", "scaleX", '1', { fromValue: '0.37862'}], position: 6688, duration: 489, easing: "easeInOutElastic" },
            { id: "eid568", tween: [ "transform", "${_fuelefttop}", "scaleY", '0.37862', { fromValue: '1'}], position: 6000, duration: 688, easing: "easeInOutBounce" },
            { id: "eid574", tween: [ "transform", "${_fuelefttop}", "scaleY", '1', { fromValue: '0.37862'}], position: 6688, duration: 489, easing: "easeInOutElastic" },
            { id: "eid522", tween: [ "transform", "${_fueleft}", "rotateZ", '-44deg', { fromValue: '0deg'}], position: 3796, duration: 281, easing: "easeInOutQuad" },
            { id: "eid526", tween: [ "transform", "${_fueleft}", "rotateZ", '53deg', { fromValue: '-44deg'}], position: 4077, duration: 474 },
            { id: "eid542", tween: [ "transform", "${_fueleft}", "rotateZ", '0deg', { fromValue: '53deg'}], position: 4551, duration: 282, easing: "easeOutQuad" },
            { id: "eid513", tween: [ "style", "${_fueright}", "-webkit-transform-origin", [2.29,22.83], { valueTemplate: '@@0@@% @@1@@%', fromValue: [2.29,22.83]}], position: 3796, duration: 0, easing: "easeInQuint" },
            { id: "eid1021", tween: [ "style", "${_fueright}", "-moz-transform-origin", [2.29,22.83], { valueTemplate: '@@0@@% @@1@@%', fromValue: [2.29,22.83]}], position: 3796, duration: 0, easing: "easeInQuint" },
            { id: "eid1022", tween: [ "style", "${_fueright}", "-ms-transform-origin", [2.29,22.83], { valueTemplate: '@@0@@% @@1@@%', fromValue: [2.29,22.83]}], position: 3796, duration: 0, easing: "easeInQuint" },
            { id: "eid1023", tween: [ "style", "${_fueright}", "msTransformOrigin", [2.29,22.83], { valueTemplate: '@@0@@% @@1@@%', fromValue: [2.29,22.83]}], position: 3796, duration: 0, easing: "easeInQuint" },
            { id: "eid1024", tween: [ "style", "${_fueright}", "-o-transform-origin", [2.29,22.83], { valueTemplate: '@@0@@% @@1@@%', fromValue: [2.29,22.83]}], position: 3796, duration: 0, easing: "easeInQuint" },
            { id: "eid28", tween: [ "style", "${_mouth}", "-webkit-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 2034, duration: 0 },
            { id: "eid1025", tween: [ "style", "${_mouth}", "-moz-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 2034, duration: 0 },
            { id: "eid1026", tween: [ "style", "${_mouth}", "-ms-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 2034, duration: 0 },
            { id: "eid1027", tween: [ "style", "${_mouth}", "msTransformOrigin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 2034, duration: 0 },
            { id: "eid1028", tween: [ "style", "${_mouth}", "-o-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 2034, duration: 0 },
            { id: "eid108", tween: [ "style", "${_tooth4}", "height", '20px', { fromValue: '20px'}], position: 2784, duration: 0, easing: "easeOutElastic" },
            { id: "eid3", tween: [ "style", "${_head}", "left", '219px', { fromValue: '220px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid132", tween: [ "style", "${_irisright}", "top", '203px', { fromValue: '211px'}], position: 573, duration: 302, easing: "easeOutElastic" },
            { id: "eid424", tween: [ "style", "${_irisright}", "top", '159px', { fromValue: '203px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid448", tween: [ "style", "${_irisright}", "top", '169px', { fromValue: '159px'}], position: 2784, duration: 264, easing: "easeOutElastic" },
            { id: "eid592", tween: [ "style", "${_irisright}", "top", '144px', { fromValue: '169px'}], position: 5500, duration: 325, easing: "easeInOutElastic" },
            { id: "eid594", tween: [ "style", "${_irisright}", "top", '146px', { fromValue: '144px'}], position: 5825, duration: 175, easing: "easeInOutElastic" },
            { id: "eid608", tween: [ "style", "${_irisright}", "top", '160px', { fromValue: '146px'}], position: 6000, duration: 214, easing: "easeInOutElastic" },
            { id: "eid628", tween: [ "style", "${_irisright}", "top", '169px', { fromValue: '160px'}], position: 7177, duration: 128, easing: "easeInOutElastic" },
            { id: "eid180", tween: [ "transform", "${_RoundRect}", "scaleX", '1.0909', { fromValue: '0.51094'}], position: 1311, duration: 84, easing: "easeOutQuad" },
            { id: "eid187", tween: [ "transform", "${_RoundRect}", "scaleX", '0.51094', { fromValue: '1.0909'}], position: 1395, duration: 105, easing: "easeInQuint" },
            { id: "eid514", tween: [ "style", "${_fuerighttop}", "-webkit-transform-origin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 3796, duration: 0, easing: "easeInQuint" },
            { id: "eid1029", tween: [ "style", "${_fuerighttop}", "-moz-transform-origin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 3796, duration: 0, easing: "easeInQuint" },
            { id: "eid1030", tween: [ "style", "${_fuerighttop}", "-ms-transform-origin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 3796, duration: 0, easing: "easeInQuint" },
            { id: "eid1031", tween: [ "style", "${_fuerighttop}", "msTransformOrigin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 3796, duration: 0, easing: "easeInQuint" },
            { id: "eid1032", tween: [ "style", "${_fuerighttop}", "-o-transform-origin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 3796, duration: 0, easing: "easeInQuint" },
            { id: "eid27", tween: [ "style", "${_mouth}", "clip", [52.6796875,175,64,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,175,64,0]}], position: 2034, duration: 407, easing: "easeOutElastic" },
            { id: "eid179", tween: [ "transform", "${_RoundRect}", "scaleY", '1.05492', { fromValue: '0.00629'}], position: 1311, duration: 84, easing: "easeOutQuad" },
            { id: "eid188", tween: [ "transform", "${_RoundRect}", "scaleY", '0.00629', { fromValue: '1.05492'}], position: 1395, duration: 105, easing: "easeInQuint" },
            { id: "eid178", tween: [ "transform", "${_RoundRectCopy}", "scaleX", '0.98176', { fromValue: '0.15152'}], position: 1311, duration: 84, easing: "easeOutQuad" },
            { id: "eid185", tween: [ "transform", "${_RoundRectCopy}", "scaleX", '0.15152', { fromValue: '0.98176'}], position: 1395, duration: 105, easing: "easeInQuint" },
            { id: "eid135", tween: [ "style", "${_irisleft}", "left", '242px', { fromValue: '237px'}], position: 573, duration: 302, easing: "easeOutElastic" },
            { id: "eid417", tween: [ "style", "${_irisleft}", "left", '245px', { fromValue: '242px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid441", tween: [ "style", "${_irisleft}", "left", '234px', { fromValue: '245px'}], position: 2784, duration: 264, easing: "easeOutElastic" },
            { id: "eid585", tween: [ "style", "${_irisleft}", "left", '247px', { fromValue: '234px'}], position: 5500, duration: 325, easing: "easeInOutElastic" },
            { id: "eid603", tween: [ "style", "${_irisleft}", "left", '242px', { fromValue: '247px'}], position: 5825, duration: 175, easing: "easeInOutElastic" },
            { id: "eid605", tween: [ "style", "${_irisleft}", "left", '247px', { fromValue: '242px'}], position: 6000, duration: 214, easing: "easeInOutElastic" },
            { id: "eid625", tween: [ "style", "${_irisleft}", "left", '234px', { fromValue: '247px'}], position: 7177, duration: 128, easing: "easeInOutElastic" },
            { id: "eid24", tween: [ "style", "${_tooth3}", "top", '250px', { fromValue: '270px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid104", tween: [ "style", "${_tooth3}", "left", '254px', { fromValue: '258px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid192", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 61, easing: "easeOutQuad" },
            { id: "eid196", tween: [ "style", "${_RoundRect}", "opacity", '0', { fromValue: '1'}], position: 1589, duration: 108, easing: "easeInQuint" },
            { id: "eid103", tween: [ "style", "${_tooth4}", "left", '228px', { fromValue: '229px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid9", tween: [ "style", "${_mouth2}", "-webkit-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 2034, duration: 0 },
            { id: "eid1033", tween: [ "style", "${_mouth2}", "-moz-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 2034, duration: 0 },
            { id: "eid1034", tween: [ "style", "${_mouth2}", "-ms-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 2034, duration: 0 },
            { id: "eid1035", tween: [ "style", "${_mouth2}", "msTransformOrigin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 2034, duration: 0 },
            { id: "eid1036", tween: [ "style", "${_mouth2}", "-o-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 2034, duration: 0 },
            { id: "eid4", tween: [ "style", "${_head}", "top", '125px', { fromValue: '169px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid137", tween: [ "style", "${_pupilright}", "left", '248px', { fromValue: '242px'}], position: 573, duration: 302, easing: "easeOutElastic" },
            { id: "eid421", tween: [ "style", "${_pupilright}", "left", '251px', { fromValue: '248px'}], position: 2034, duration: 750, easing: "easeOutElastic" },
            { id: "eid445", tween: [ "style", "${_pupilright}", "left", '240px', { fromValue: '251px'}], position: 2784, duration: 264, easing: "easeOutElastic" },
            { id: "eid589", tween: [ "style", "${_pupilright}", "left", '255px', { fromValue: '240px'}], position: 5500, duration: 325, easing: "easeInOutElastic" },
            { id: "eid601", tween: [ "style", "${_pupilright}", "left", '249px', { fromValue: '255px'}], position: 5825, duration: 175, easing: "easeInOutElastic" },
            { id: "eid609", tween: [ "style", "${_pupilright}", "left", '253px', { fromValue: '249px'}], position: 6000, duration: 214, easing: "easeInOutElastic" },
            { id: "eid621", tween: [ "style", "${_pupilright}", "left", '240px', { fromValue: '253px'}], position: 7177, duration: 128, easing: "easeInOutElastic" },
            { id: "eid524", tween: [ "transform", "${_fueright}", "rotateZ", '-44deg', { fromValue: '0deg'}], position: 3796, duration: 281, easing: "easeInOutQuad" },
            { id: "eid528", tween: [ "transform", "${_fueright}", "rotateZ", '53deg', { fromValue: '-44deg'}], position: 4077, duration: 474 },
            { id: "eid541", tween: [ "transform", "${_fueright}", "rotateZ", '0deg', { fromValue: '53deg'}], position: 4551, duration: 282, easing: "easeOutQuad" },
            { id: "eid563", tween: [ "transform", "${_fueleft}", "scaleX", '0.37862', { fromValue: '1'}], position: 6000, duration: 688, easing: "easeInOutBounce" },
            { id: "eid571", tween: [ "transform", "${_fueleft}", "scaleX", '1', { fromValue: '0.37862'}], position: 6688, duration: 489, easing: "easeInOutElastic" }         ]
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
})(jQuery, AdobeEdge, "EDGE-651261");
