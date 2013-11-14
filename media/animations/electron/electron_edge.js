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
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'electron',
            type:'rect',
            rect:['106','65','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'electron',
            symbolName:'electron'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '420px'],
            ["style", "height", '305px'],
            ["style", "overflow", 'hidden']
         ],
         "${_electron}": [
            ["transform", "scaleX", '0.74622'],
            ["style", "top", '34px'],
            ["transform", "scaleY", '0.74622'],
            ["style", "left", '45px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 21350,
         autoPlay: true,
         timeline: [
            { id: "eid861", tween: [ "style", "${_electron}", "top", '34px', { fromValue: '34px'}], position: 0, duration: 0 },
            { id: "eid860", tween: [ "style", "${_electron}", "left", '45px', { fromValue: '45px'}], position: 0, duration: 0 }         ]
      }
   }
},
"electron": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      r: ['157px','31px','62px','53px','auto','auto'],
      id: 'elektip',
      t: 'image',
      o: 1,
      f: ['rgba(0,0,0,0)','images/elektip.png','0px','0px']
   },
   {
      tf: [],
      r: ['0px','0px','331','291','auto','auto'],
      id: 'Group',
      t: 'group',
      c: [
      {
         id: 'Body',
         t: 'image',
         f: ['rgba(0,0,0,0)','images/Body.png','0px','0px'],
         r: ['28px','0px','303px','249px','auto','auto']
      },
      {
         id: 'elekleftiris',
         t: 'image',
         f: ['rgba(0,0,0,0)','images/elekleftiris.png','0px','0px'],
         r: ['122px','98px','40px','35px','auto','auto']
      },
      {
         id: 'elekleftleg',
         t: 'image',
         f: ['rgba(0,0,0,0)','images/elekleftleg.png','0px','0px'],
         r: ['0px','197px','123px','93px','auto','auto']
      },
      {
         id: 'elekleftpupil',
         t: 'image',
         f: ['rgba(0,0,0,0)','images/elekleftpupil.png','0px','0px'],
         r: ['143px','116px','11px','10px','auto','auto']
      },
      {
         id: 'elekmouth',
         t: 'image',
         f: ['rgba(0,0,0,0)','images/elekmouth.png','0px','0px'],
         r: ['138px','189px','87px','15px','auto','auto']
      },
      {
         id: 'elekrightiris',
         t: 'image',
         f: ['rgba(0,0,0,0)','images/elekrightiris.png','0px','0px'],
         r: ['194px','99px','40px','34px','auto','auto']
      },
      {
         id: 'elekrightleg',
         t: 'image',
         f: ['rgba(0,0,0,0)','images/elekrightleg.png','0px','0px'],
         r: ['211px','211px','109px','80px','auto','auto']
      },
      {
         id: 'elekrightpupil',
         t: 'image',
         f: ['rgba(0,0,0,0)','images/elekrightpupil.png','0px','0px'],
         r: ['201px','117px','11px','9px','auto','auto']
      },
      {
         id: 'Nasenloch',
         t: 'image',
         f: ['rgba(0,0,0,0)','images/Nasenloch.png','0px','0px'],
         r: ['185px','152px','23px','21px','auto','auto']
      },
      {
         id: 'NasenlochCopy',
         t: 'image',
         f: ['rgba(0,0,0,0)','images/Nasenloch.png','0px','0px'],
         r: ['151px','152px','23px','21px','auto','auto']
      }]
   },
   {
      o: 1,
      s: [0,'rgba(0,0,0,1)','none'],
      r: ['181px','56px','87px','17px','auto','auto'],
      id: 'RoundRect',
      t: 'rect',
      br: ['10px','10px','10px','10px'],
      f: ['rgba(192,192,192,1)']
   },
   {
      o: 1,
      tf: [[0,0],['12'],[],['0.89866']],
      s: [0,'rgba(0,0,0,1)','none'],
      r: ['91px','61px','87px','17px','auto','auto'],
      id: 'RoundRectCopy',
      t: 'rect',
      br: ['10px','10px','10px','10px'],
      f: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_elektip}": [
            ["style", "top", '31px'],
            ["transform", "scaleX", '1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '53px'],
            ["style", "opacity", '0'],
            ["style", "left", '157px'],
            ["style", "width", '62px']
         ],
         "${_elekrightpupil}": [
            ["style", "top", '117px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '9px'],
            ["style", "left", '201px'],
            ["style", "width", '11px']
         ],
         "${_elekmouth}": [
            ["style", "top", '189px'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "height", '15px'],
            ["style", "left", '138px'],
            ["style", "width", '87px']
         ],
         "${_elekleftleg}": [
            ["style", "top", '197px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '93px'],
            ["style", "-webkit-transform-origin", [81.24,51.71], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [81.24,51.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [81.24,51.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [81.24,51.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [81.24,51.71],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "width", '123px']
         ],
         "${_Nasenloch}": [
            ["style", "top", '152px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '21px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '185px'],
            ["style", "width", '23px']
         ],
         "${_elekrightleg}": [
            ["style", "top", '211px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '80px'],
            ["style", "-webkit-transform-origin", [10.31,6.25], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [10.31,6.25],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [10.31,6.25],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [10.31,6.25],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [10.31,6.25],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '211px'],
            ["style", "width", '109px']
         ],
         "${_elekleftiris}": [
            ["style", "top", '98px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '35px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '122px'],
            ["style", "width", '40px']
         ],
         "${_Body}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '249px'],
            ["style", "left", '28px'],
            ["style", "width", '303px']
         ],
         "${_Group}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [4.43,97.6], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [4.43,97.6],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [4.43,97.6],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [4.43,97.6],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [4.43,97.6],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(29,146,180,1.00)'],
            ["transform", "rotateZ", '-13deg'],
            ["style", "height", '15px'],
            ["style", "opacity", '0'],
            ["style", "left", '181px'],
            ["style", "top", '56px']
         ],
         "${symbolSelector}": [
            ["style", "height", '291px'],
            ["style", "width", '331px']
         ],
         "${_elekleftpupil}": [
            ["style", "top", '116px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '10px'],
            ["style", "left", '143px'],
            ["style", "width", '11px']
         ],
         "${_RoundRectCopy}": [
            ["style", "top", '61px'],
            ["transform", "scaleX", '0.89866'],
            ["transform", "scaleY", '0.801'],
            ["transform", "rotateZ", '10deg'],
            ["style", "height", '15px'],
            ["style", "opacity", '0'],
            ["style", "left", '91px'],
            ["color", "background-color", 'rgba(29,146,180,1.00)']
         ],
         "${_elekrightiris}": [
            ["style", "top", '99px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '34px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '194px'],
            ["style", "width", '40px']
         ],
         "${_NasenlochCopy}": [
            ["style", "top", '152px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '21px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '151px'],
            ["style", "width", '23px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10500,
         autoPlay: true,
         timeline: [
            { id: "dg253", tween: [ "transform", "${_elekrightiris}", "scaleX", '1.21', { fromValue: '1'}], position: 3937, duration: 774 },
            { id: "dg254", tween: [ "transform", "${_elekrightiris}", "scaleX", '1', { fromValue: '1.21'}], position: 5610, duration: 461 },
            { id: "dg240", tween: [ "style", "${_RoundRectCopy}", "height", '37px', { fromValue: '15px'}], position: 8089, duration: 161, easing: "easeInOutBounce" },
            { id: "dg241", tween: [ "style", "${_RoundRectCopy}", "height", '15px', { fromValue: '37px'}], position: 10162, duration: 161, easing: "easeInOutBounce" },
            { id: "dg151", tween: [ "transform", "${_elekrightleg}", "rotateZ", '-21deg', { fromValue: '0deg'}], position: 0, duration: 417, easing: "easeOutQuad" },
            { id: "dg152", tween: [ "transform", "${_elekrightleg}", "rotateZ", '0deg', { fromValue: '-21deg'}], position: 653, duration: 417, easing: "easeInBack" },
            { id: "dg153", tween: [ "transform", "${_elekrightleg}", "rotateZ", '-12deg', { fromValue: '0deg'}], position: 1679, duration: 637 },
            { id: "dg154", tween: [ "transform", "${_elekrightleg}", "rotateZ", '0deg', { fromValue: '-12deg'}], position: 2316, duration: 617, easing: "easeOutBounce" },
            { id: "dg155", tween: [ "transform", "${_elekrightleg}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "dg37", tween: [ "style", "${_elektip}", "left", '160px', { fromValue: '157px'}], position: 8089, duration: 411, easing: "easeInQuad" },
            { id: "dg38", tween: [ "style", "${_elektip}", "left", '155px', { fromValue: '160px'}], position: 8500, duration: 157, easing: "easeInQuad" },
            { id: "dg39", tween: [ "style", "${_elektip}", "left", '82px', { fromValue: '155px'}], position: 8657, duration: 93, easing: "easeInQuad" },
            { id: "dg40", tween: [ "style", "${_elektip}", "left", '76px', { fromValue: '82px'}], position: 8750, duration: 189, easing: "easeInQuad" },
            { id: "dg41", tween: [ "style", "${_elektip}", "left", '87px', { fromValue: '76px'}], position: 8939, duration: 209, easing: "easeInQuad" },
            { id: "dg42", tween: [ "style", "${_elektip}", "left", '44px', { fromValue: '87px'}], position: 9148, duration: 102, easing: "easeInQuad" },
            { id: "dg43", tween: [ "style", "${_elektip}", "left", '17px', { fromValue: '44px'}], position: 9250, duration: 175, easing: "easeInQuad" },
            { id: "dg44", tween: [ "style", "${_elektip}", "left", '216px', { fromValue: '17px'}], position: 9425, duration: 75, easing: "easeInQuad" },
            { id: "dg45", tween: [ "style", "${_elektip}", "left", '235px', { fromValue: '216px'}], position: 9500, duration: 157, easing: "easeInQuad" },
            { id: "dg46", tween: [ "style", "${_elektip}", "left", '185px', { fromValue: '235px'}], position: 9657, duration: 190, easing: "easeInQuad" },
            { id: "dg47", tween: [ "style", "${_elektip}", "left", '274px', { fromValue: '185px'}], position: 9847, duration: 106, easing: "easeInQuad" },
            { id: "dg48", tween: [ "style", "${_elektip}", "left", '236px', { fromValue: '274px'}], position: 9953, duration: 146, easing: "easeInQuad" },
            { id: "dg49", tween: [ "style", "${_elektip}", "left", '261px', { fromValue: '236px'}], position: 10099, duration: 17, easing: "easeInQuad" },
            { id: "dg50", tween: [ "style", "${_elektip}", "left", '284px', { fromValue: '261px'}], position: 10116, duration: 93, easing: "easeInQuad" },
            { id: "dg51", tween: [ "style", "${_elektip}", "left", '210px', { fromValue: '284px'}], position: 10209, duration: 114, easing: "easeInQuad" },
            { id: "dg171", tween: [ "style", "${_Body}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "dg172", tween: [ "style", "${_Body}", "top", '0px', { fromValue: '0px'}], position: 653, duration: 0 },
            { id: "dg173", tween: [ "style", "${_Body}", "top", '0px', { fromValue: '0px'}], position: 3937, duration: 0 },
            { id: "dg255", tween: [ "style", "${_elekrightiris}", "left", '194px', { fromValue: '194px'}], position: 0, duration: 0 },
            { id: "dg256", tween: [ "style", "${_elekrightiris}", "left", '194px', { fromValue: '194px'}], position: 653, duration: 0 },
            { id: "dg257", tween: [ "style", "${_elekrightiris}", "left", '196px', { fromValue: '194px'}], position: 3937, duration: 774 },
            { id: "dg258", tween: [ "style", "${_elekrightiris}", "left", '194px', { fromValue: '196px'}], position: 5610, duration: 461 },
            { id: "dg250", tween: [ "transform", "${_elekrightiris}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "dg251", tween: [ "transform", "${_elekrightiris}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 653, duration: 0 },
            { id: "dg252", tween: [ "transform", "${_elekrightiris}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3937, duration: 0 },
            { id: "dg122", tween: [ "transform", "${_Nasenloch}", "scaleX", '1', { fromValue: '1'}], position: 3937, duration: 0, easing: "easeInQuad" },
            { id: "dg123", tween: [ "transform", "${_Nasenloch}", "scaleX", '1.27', { fromValue: '1'}], position: 4894, duration: 205, easing: "easeInQuad" },
            { id: "dg124", tween: [ "transform", "${_Nasenloch}", "scaleX", '1', { fromValue: '1.27'}], position: 5099, duration: 205, easing: "easeInQuad" },
            { id: "dg125", tween: [ "transform", "${_Nasenloch}", "scaleX", '1.27', { fromValue: '1'}], position: 5405, duration: 205, easing: "easeInQuad" },
            { id: "dg126", tween: [ "transform", "${_Nasenloch}", "scaleX", '1', { fromValue: '1.27'}], position: 5610, duration: 205, easing: "easeInQuad" },
            { id: "dg282", tween: [ "style", "${_NasenlochCopy}", "left", '151px', { fromValue: '151px'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "dg283", tween: [ "style", "${_NasenlochCopy}", "left", '151px', { fromValue: '151px'}], position: 653, duration: 0, easing: "easeInQuad" },
            { id: "dg284", tween: [ "style", "${_NasenlochCopy}", "left", '152px', { fromValue: '151px'}], position: 3937, duration: 707, easing: "easeInOutBounce" },
            { id: "dg99", tween: [ "transform", "${_elekleftleg}", "rotateZ", '11deg', { fromValue: '0deg'}], position: 0, duration: 500, easing: "easeOutQuad" },
            { id: "dg100", tween: [ "transform", "${_elekleftleg}", "rotateZ", '0deg', { fromValue: '11deg'}], position: 653, duration: 500, easing: "easeInBack" },
            { id: "dg101", tween: [ "transform", "${_elekleftleg}", "rotateZ", '22deg', { fromValue: '0deg'}], position: 1679, duration: 424 },
            { id: "dg102", tween: [ "transform", "${_elekleftleg}", "rotateZ", '0deg', { fromValue: '22deg'}], position: 2103, duration: 830, easing: "easeOutBounce" },
            { id: "dg103", tween: [ "transform", "${_elekleftleg}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "dg234", tween: [ "transform", "${_elekleftpupil}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "dg235", tween: [ "transform", "${_elekleftpupil}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 653, duration: 0 },
            { id: "dg236", tween: [ "transform", "${_elekleftpupil}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3937, duration: 0 },
            { id: "dg238", tween: [ "transform", "${_RoundRectCopy}", "scaleY", '0.8', { fromValue: '0.8'}], position: 8250, duration: 0 },
            { id: "dg104", tween: [ "style", "${_Nasenloch}", "top", '152px', { fromValue: '152px'}], position: 0, duration: 0 },
            { id: "dg105", tween: [ "style", "${_Nasenloch}", "top", '152px', { fromValue: '152px'}], position: 653, duration: 0 },
            { id: "dg106", tween: [ "style", "${_Nasenloch}", "top", '146px', { fromValue: '152px'}], position: 3937, duration: 207, easing: "easeInOutBounce" },
            { id: "dg107", tween: [ "style", "${_Nasenloch}", "top", '152px', { fromValue: '146px'}], position: 4144, duration: 250, easing: "easeInOutBounce" },
            { id: "dg108", tween: [ "style", "${_Nasenloch}", "top", '146px', { fromValue: '152px'}], position: 4394, duration: 250, easing: "easeInOutBounce" },
            { id: "dg109", tween: [ "style", "${_Nasenloch}", "top", '152px', { fromValue: '146px'}], position: 4644, duration: 149, easing: "easeInOutBounce" },
            { id: "dg110", tween: [ "style", "${_Nasenloch}", "top", '146px', { fromValue: '152px'}], position: 4793, duration: 306, easing: "easeInOutBounce" },
            { id: "dg111", tween: [ "style", "${_Nasenloch}", "top", '152px', { fromValue: '146px'}], position: 5099, duration: 306, easing: "easeInOutBounce" },
            { id: "dg112", tween: [ "style", "${_Nasenloch}", "top", '146px', { fromValue: '152px'}], position: 5405, duration: 205, easing: "easeInOutBounce" },
            { id: "dg113", tween: [ "style", "${_Nasenloch}", "top", '152px', { fromValue: '146px'}], position: 5610, duration: 205, easing: "easeInOutBounce" },
            { id: "dg20", tween: [ "transform", "${_elektip}", "rotateZ", '7deg', { fromValue: '0deg'}], position: 8089, duration: 411, easing: "easeInQuad" },
            { id: "dg21", tween: [ "transform", "${_elektip}", "rotateZ", '-14deg', { fromValue: '7deg'}], position: 8500, duration: 250, easing: "easeInQuad" },
            { id: "dg22", tween: [ "transform", "${_elektip}", "rotateZ", '-11deg', { fromValue: '-14deg'}], position: 8750, duration: 189, easing: "easeInQuad" },
            { id: "dg23", tween: [ "transform", "${_elektip}", "rotateZ", '-74deg', { fromValue: '-11deg'}], position: 8939, duration: 311, easing: "easeInQuad" },
            { id: "dg24", tween: [ "transform", "${_elektip}", "rotateZ", '-75deg', { fromValue: '-74deg'}], position: 9250, duration: 175, easing: "easeInQuad" },
            { id: "dg25", tween: [ "transform", "${_elektip}", "rotateZ", '-225deg', { fromValue: '-75deg'}], position: 9425, duration: 75, easing: "easeInQuad" },
            { id: "dg26", tween: [ "transform", "${_elektip}", "rotateZ", '-247deg', { fromValue: '-225deg'}], position: 9500, duration: 453, easing: "easeInQuad" },
            { id: "dg27", tween: [ "transform", "${_elektip}", "rotateZ", '-280deg', { fromValue: '-247deg'}], position: 9953, duration: 209, easing: "easeInQuad" },
            { id: "dg78", tween: [ "style", "${_elekleftleg}", "top", '197px', { fromValue: '197px'}], position: 0, duration: 0 },
            { id: "dg79", tween: [ "style", "${_elekleftleg}", "top", '197px', { fromValue: '197px'}], position: 653, duration: 0 },
            { id: "dg80", tween: [ "style", "${_elekleftleg}", "top", '197px', { fromValue: '197px'}], position: 3937, duration: 0 },
            { id: "dg52", tween: [ "style", "${_elekrightpupil}", "top", '117px', { fromValue: '117px'}], position: 0, duration: 0 },
            { id: "dg53", tween: [ "style", "${_elekrightpupil}", "top", '117px', { fromValue: '117px'}], position: 653, duration: 0 },
            { id: "dg54", tween: [ "style", "${_elekrightpupil}", "top", '110px', { fromValue: '117px'}], position: 3937, duration: 774 },
            { id: "dg55", tween: [ "style", "${_elekrightpupil}", "top", '117px', { fromValue: '110px'}], position: 5610, duration: 461 },
            { id: "dg177", tween: [ "transform", "${_Body}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "dg178", tween: [ "transform", "${_Body}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 653, duration: 0 },
            { id: "dg179", tween: [ "transform", "${_Body}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3937, duration: 0 },
            { id: "dg269", tween: [ "transform", "${_NasenlochCopy}", "scaleY", '1', { fromValue: '1'}], position: 3937, duration: 0, easing: "easeInOutBounce" },
            { id: "dg270", tween: [ "transform", "${_NasenlochCopy}", "scaleY", '1.27', { fromValue: '1'}], position: 4894, duration: 205, easing: "easeInQuad" },
            { id: "dg271", tween: [ "transform", "${_NasenlochCopy}", "scaleY", '1', { fromValue: '1.27'}], position: 5099, duration: 205, easing: "easeInQuad" },
            { id: "dg272", tween: [ "transform", "${_NasenlochCopy}", "scaleY", '1.27', { fromValue: '1'}], position: 5405, duration: 205, easing: "easeInQuad" },
            { id: "dg273", tween: [ "transform", "${_NasenlochCopy}", "scaleY", '1', { fromValue: '1.27'}], position: 5610, duration: 205, easing: "easeInQuad" },
            { id: "dg244", tween: [ "style", "${_elekrightiris}", "top", '99px', { fromValue: '99px'}], position: 0, duration: 0 },
            { id: "dg245", tween: [ "style", "${_elekrightiris}", "top", '99px', { fromValue: '99px'}], position: 653, duration: 0 },
            { id: "dg246", tween: [ "style", "${_elekrightiris}", "top", '93px', { fromValue: '99px'}], position: 3937, duration: 774 },
            { id: "dg247", tween: [ "style", "${_elekrightiris}", "top", '99px', { fromValue: '93px'}], position: 5610, duration: 461 },
            { id: "dg165", tween: [ "transform", "${_elekleftiris}", "scaleX", '1.21', { fromValue: '1'}], position: 3937, duration: 774 },
            { id: "dg166", tween: [ "transform", "${_elekleftiris}", "scaleX", '1', { fromValue: '1.21'}], position: 5610, duration: 462 },
            { id: "dg119", tween: [ "transform", "${_Nasenloch}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "dg120", tween: [ "transform", "${_Nasenloch}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 653, duration: 0, easing: "easeInQuad" },
            { id: "dg121", tween: [ "transform", "${_Nasenloch}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3937, duration: 0, easing: "easeInQuad" },
            { id: "dg68", tween: [ "style", "${_elekmouth}", "top", '189px', { fromValue: '189px'}], position: 0, duration: 0 },
            { id: "dg69", tween: [ "style", "${_elekmouth}", "top", '189px', { fromValue: '189px'}], position: 653, duration: 0 },
            { id: "dg70", tween: [ "style", "${_elekmouth}", "top", '189px', { fromValue: '189px'}], position: 3937, duration: 0 },
            { id: "dg274", tween: [ "transform", "${_NasenlochCopy}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "dg275", tween: [ "transform", "${_NasenlochCopy}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 653, duration: 0, easing: "easeInQuad" },
            { id: "dg276", tween: [ "transform", "${_NasenlochCopy}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3937, duration: 0, easing: "easeInQuad" },
            { id: "dg33", tween: [ "style", "${_elektip}", "opacity", '1', { fromValue: '0'}], position: 8089, duration: 161, easing: "easeInQuad" },
            { id: "dg34", tween: [ "style", "${_elektip}", "opacity", '0', { fromValue: '1'}], position: 9092, duration: 56, easing: "easeInQuad" },
            { id: "dg35", tween: [ "style", "${_elektip}", "opacity", '1', { fromValue: '0'}], position: 9204, duration: 46, easing: "easeInQuad" },
            { id: "dg36", tween: [ "style", "${_elektip}", "opacity", '0', { fromValue: '1'}], position: 10441, duration: 59, easing: "easeInQuad" },
            { id: "dg174", tween: [ "style", "${_Body}", "left", '28px', { fromValue: '28px'}], position: 0, duration: 0 },
            { id: "dg175", tween: [ "style", "${_Body}", "left", '28px', { fromValue: '28px'}], position: 653, duration: 0 },
            { id: "dg176", tween: [ "style", "${_Body}", "left", '28px', { fromValue: '28px'}], position: 3937, duration: 0 },
            { id: "dg248", tween: [ "transform", "${_elekrightiris}", "scaleY", '1.21', { fromValue: '1'}], position: 3937, duration: 774 },
            { id: "dg249", tween: [ "transform", "${_elekrightiris}", "scaleY", '1', { fromValue: '1.21'}], position: 5610, duration: 461 },
            { id: "dg277", tween: [ "transform", "${_NasenlochCopy}", "scaleX", '1', { fromValue: '1'}], position: 3937, duration: 0, easing: "easeInQuad" },
            { id: "dg278", tween: [ "transform", "${_NasenlochCopy}", "scaleX", '1.27', { fromValue: '1'}], position: 4894, duration: 205, easing: "easeInQuad" },
            { id: "dg279", tween: [ "transform", "${_NasenlochCopy}", "scaleX", '1', { fromValue: '1.27'}], position: 5099, duration: 205, easing: "easeInQuad" },
            { id: "dg280", tween: [ "transform", "${_NasenlochCopy}", "scaleX", '1.27', { fromValue: '1'}], position: 5405, duration: 205, easing: "easeInQuad" },
            { id: "dg281", tween: [ "transform", "${_NasenlochCopy}", "scaleX", '1', { fromValue: '1.27'}], position: 5610, duration: 205, easing: "easeInQuad" },
            { id: "dg239", tween: [ "transform", "${_RoundRectCopy}", "rotateZ", '10deg', { fromValue: '10deg'}], position: 7940, duration: 0 },
            { id: "dg133", tween: [ "style", "${_elekrightleg}", "-webkit-transform-origin", [10.31,6.25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10.31,6.25]}], position: 0, duration: 0 },
            { id: "eid862", tween: [ "style", "${_elekrightleg}", "-moz-transform-origin", [10.31,6.25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10.31,6.25]}], position: 0, duration: 0 },
            { id: "eid863", tween: [ "style", "${_elekrightleg}", "-ms-transform-origin", [10.31,6.25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10.31,6.25]}], position: 0, duration: 0 },
            { id: "eid864", tween: [ "style", "${_elekrightleg}", "msTransformOrigin", [10.31,6.25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10.31,6.25]}], position: 0, duration: 0 },
            { id: "eid865", tween: [ "style", "${_elekrightleg}", "-o-transform-origin", [10.31,6.25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10.31,6.25]}], position: 0, duration: 0 },
            { id: "dg134", tween: [ "style", "${_elekrightleg}", "-webkit-transform-origin", [10.31,6.25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10.31,6.25]}], position: 653, duration: 0 },
            { id: "eid866", tween: [ "style", "${_elekrightleg}", "-moz-transform-origin", [10.31,6.25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10.31,6.25]}], position: 653, duration: 0 },
            { id: "eid867", tween: [ "style", "${_elekrightleg}", "-ms-transform-origin", [10.31,6.25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10.31,6.25]}], position: 653, duration: 0 },
            { id: "eid868", tween: [ "style", "${_elekrightleg}", "msTransformOrigin", [10.31,6.25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10.31,6.25]}], position: 653, duration: 0 },
            { id: "eid869", tween: [ "style", "${_elekrightleg}", "-o-transform-origin", [10.31,6.25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10.31,6.25]}], position: 653, duration: 0 },
            { id: "dg135", tween: [ "style", "${_elekrightleg}", "-webkit-transform-origin", [10.31,6.25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10.31,6.25]}], position: 3937, duration: 0 },
            { id: "eid870", tween: [ "style", "${_elekrightleg}", "-moz-transform-origin", [10.31,6.25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10.31,6.25]}], position: 3937, duration: 0 },
            { id: "eid871", tween: [ "style", "${_elekrightleg}", "-ms-transform-origin", [10.31,6.25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10.31,6.25]}], position: 3937, duration: 0 },
            { id: "eid872", tween: [ "style", "${_elekrightleg}", "msTransformOrigin", [10.31,6.25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10.31,6.25]}], position: 3937, duration: 0 },
            { id: "eid873", tween: [ "style", "${_elekrightleg}", "-o-transform-origin", [10.31,6.25], { valueTemplate: '@@0@@% @@1@@%', fromValue: [10.31,6.25]}], position: 3937, duration: 0 },
            { id: "dg75", tween: [ "transform", "${_elekmouth}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "dg76", tween: [ "transform", "${_elekmouth}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 653, duration: 0 },
            { id: "dg77", tween: [ "transform", "${_elekmouth}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3937, duration: 0 },
            { id: "dg96", tween: [ "style", "${_elekleftleg}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "dg97", tween: [ "style", "${_elekleftleg}", "left", '0px', { fromValue: '0px'}], position: 653, duration: 0, easing: "easeInBounce" },
            { id: "dg98", tween: [ "style", "${_elekleftleg}", "left", '0px', { fromValue: '0px'}], position: 3937, duration: 0, easing: "easeInBounce" },
            { id: "dg259", tween: [ "style", "${_NasenlochCopy}", "top", '152px', { fromValue: '152px'}], position: 0, duration: 0 },
            { id: "dg260", tween: [ "style", "${_NasenlochCopy}", "top", '152px', { fromValue: '152px'}], position: 653, duration: 0 },
            { id: "dg261", tween: [ "style", "${_NasenlochCopy}", "top", '146px', { fromValue: '152px'}], position: 3937, duration: 207, easing: "easeInOutBounce" },
            { id: "dg262", tween: [ "style", "${_NasenlochCopy}", "top", '152px', { fromValue: '146px'}], position: 4144, duration: 250, easing: "easeInOutBounce" },
            { id: "dg263", tween: [ "style", "${_NasenlochCopy}", "top", '146px', { fromValue: '152px'}], position: 4394, duration: 250, easing: "easeInOutBounce" },
            { id: "dg264", tween: [ "style", "${_NasenlochCopy}", "top", '152px', { fromValue: '146px'}], position: 4644, duration: 149, easing: "easeInOutBounce" },
            { id: "dg265", tween: [ "style", "${_NasenlochCopy}", "top", '146px', { fromValue: '152px'}], position: 4793, duration: 306, easing: "easeInOutBounce" },
            { id: "dg266", tween: [ "style", "${_NasenlochCopy}", "top", '152px', { fromValue: '146px'}], position: 5099, duration: 306, easing: "easeInOutBounce" },
            { id: "dg267", tween: [ "style", "${_NasenlochCopy}", "top", '146px', { fromValue: '152px'}], position: 5405, duration: 205, easing: "easeInOutBounce" },
            { id: "dg268", tween: [ "style", "${_NasenlochCopy}", "top", '152px', { fromValue: '146px'}], position: 5610, duration: 205, easing: "easeInOutBounce" },
            { id: "dg148", tween: [ "style", "${_elekrightleg}", "left", '211px', { fromValue: '211px'}], position: 0, duration: 0 },
            { id: "dg149", tween: [ "style", "${_elekrightleg}", "left", '211px', { fromValue: '211px'}], position: 653, duration: 0 },
            { id: "dg150", tween: [ "style", "${_elekrightleg}", "left", '211px', { fromValue: '211px'}], position: 3937, duration: 0 },
            { id: "dg56", tween: [ "style", "${_elekrightpupil}", "left", '201px', { fromValue: '201px'}], position: 0, duration: 0 },
            { id: "dg57", tween: [ "style", "${_elekrightpupil}", "left", '201px', { fromValue: '201px'}], position: 653, duration: 0 },
            { id: "dg58", tween: [ "style", "${_elekrightpupil}", "left", '205px', { fromValue: '201px'}], position: 3937, duration: 774 },
            { id: "dg59", tween: [ "style", "${_elekrightpupil}", "left", '201px', { fromValue: '205px'}], position: 5610, duration: 461 },
            { id: "dg130", tween: [ "style", "${_elekrightleg}", "top", '211px', { fromValue: '211px'}], position: 0, duration: 0 },
            { id: "dg131", tween: [ "style", "${_elekrightleg}", "top", '211px', { fromValue: '211px'}], position: 653, duration: 0 },
            { id: "dg132", tween: [ "style", "${_elekrightleg}", "top", '211px', { fromValue: '211px'}], position: 3937, duration: 0 },
            { id: "dg220", tween: [ "color", "${_RoundRect}", "background-color", 'rgba(29,146,180,1.00)', { fromValue: 'rgba(29,146,180,1.00)'}], position: 8089, duration: 0 },
            { id: "dg28", tween: [ "transform", "${_elektip}", "scaleX", '0.77', { fromValue: '1'}], position: 8089, duration: 411, easing: "easeInQuad" },
            { id: "dg29", tween: [ "transform", "${_elektip}", "scaleX", '0.88', { fromValue: '0.77'}], position: 8500, duration: 157, easing: "easeInQuad" },
            { id: "dg30", tween: [ "transform", "${_elektip}", "scaleX", '0.85', { fromValue: '0.88'}], position: 8657, duration: 282, easing: "easeInQuad" },
            { id: "dg31", tween: [ "transform", "${_elektip}", "scaleX", '0.72', { fromValue: '0.85'}], position: 8939, duration: 718, easing: "easeInQuad" },
            { id: "dg32", tween: [ "transform", "${_elektip}", "scaleX", '0.87', { fromValue: '0.72'}], position: 9657, duration: 296, easing: "easeInQuad" },
            { id: "dg180", tween: [ "style", "${_Group}", "-webkit-transform-origin", [4.43,97.6], { valueTemplate: '@@0@@% @@1@@%', fromValue: [4.43,97.6]}], position: 653, duration: 0 },
            { id: "eid874", tween: [ "style", "${_Group}", "-moz-transform-origin", [4.43,97.6], { valueTemplate: '@@0@@% @@1@@%', fromValue: [4.43,97.6]}], position: 653, duration: 0 },
            { id: "eid875", tween: [ "style", "${_Group}", "-ms-transform-origin", [4.43,97.6], { valueTemplate: '@@0@@% @@1@@%', fromValue: [4.43,97.6]}], position: 653, duration: 0 },
            { id: "eid876", tween: [ "style", "${_Group}", "msTransformOrigin", [4.43,97.6], { valueTemplate: '@@0@@% @@1@@%', fromValue: [4.43,97.6]}], position: 653, duration: 0 },
            { id: "eid877", tween: [ "style", "${_Group}", "-o-transform-origin", [4.43,97.6], { valueTemplate: '@@0@@% @@1@@%', fromValue: [4.43,97.6]}], position: 653, duration: 0 },
            { id: "dg181", tween: [ "style", "${_Group}", "-webkit-transform-origin", [79.07,99.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [4.43,97.6]}], position: 1306, duration: 373 },
            { id: "eid878", tween: [ "style", "${_Group}", "-moz-transform-origin", [79.07,99.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [4.43,97.6]}], position: 1306, duration: 373 },
            { id: "eid879", tween: [ "style", "${_Group}", "-ms-transform-origin", [79.07,99.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [4.43,97.6]}], position: 1306, duration: 373 },
            { id: "eid880", tween: [ "style", "${_Group}", "msTransformOrigin", [79.07,99.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [4.43,97.6]}], position: 1306, duration: 373 },
            { id: "eid881", tween: [ "style", "${_Group}", "-o-transform-origin", [79.07,99.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [4.43,97.6]}], position: 1306, duration: 373 },
            { id: "dg182", tween: [ "style", "${_Group}", "-webkit-transform-origin", [79.07,99.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [79.07,99.51]}], position: 3937, duration: 0 },
            { id: "eid882", tween: [ "style", "${_Group}", "-moz-transform-origin", [79.07,99.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [79.07,99.51]}], position: 3937, duration: 0 },
            { id: "eid883", tween: [ "style", "${_Group}", "-ms-transform-origin", [79.07,99.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [79.07,99.51]}], position: 3937, duration: 0 },
            { id: "eid884", tween: [ "style", "${_Group}", "msTransformOrigin", [79.07,99.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [79.07,99.51]}], position: 3937, duration: 0 },
            { id: "eid885", tween: [ "style", "${_Group}", "-o-transform-origin", [79.07,99.51], { valueTemplate: '@@0@@% @@1@@%', fromValue: [79.07,99.51]}], position: 3937, duration: 0 },
            { id: "dg160", tween: [ "transform", "${_elekleftiris}", "scaleY", '1.21', { fromValue: '1'}], position: 3937, duration: 774 },
            { id: "dg161", tween: [ "transform", "${_elekleftiris}", "scaleY", '1', { fromValue: '1.21'}], position: 5610, duration: 462 },
            { id: "dg215", tween: [ "transform", "${_Group}", "rotateZ", '-21deg', { fromValue: '0deg'}], position: 0, duration: 653, easing: "easeOutQuad" },
            { id: "dg216", tween: [ "transform", "${_Group}", "rotateZ", '0deg', { fromValue: '-21deg'}], position: 653, duration: 653, easing: "easeInBack" },
            { id: "dg217", tween: [ "transform", "${_Group}", "rotateZ", '24deg', { fromValue: '0deg'}], position: 1306, duration: 1010 },
            { id: "dg218", tween: [ "transform", "${_Group}", "rotateZ", '0deg', { fromValue: '24deg'}], position: 2316, duration: 617, easing: "easeOutBounce" },
            { id: "dg219", tween: [ "transform", "${_Group}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "dg60", tween: [ "transform", "${_elekrightpupil}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "dg61", tween: [ "transform", "${_elekrightpupil}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 653, duration: 0 },
            { id: "dg62", tween: [ "transform", "${_elekrightpupil}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3937, duration: 0 },
            { id: "dg156", tween: [ "style", "${_elekleftiris}", "top", '98px', { fromValue: '98px'}], position: 0, duration: 0 },
            { id: "dg157", tween: [ "style", "${_elekleftiris}", "top", '98px', { fromValue: '98px'}], position: 653, duration: 0 },
            { id: "dg158", tween: [ "style", "${_elekleftiris}", "top", '94px', { fromValue: '98px'}], position: 3937, duration: 774 },
            { id: "dg159", tween: [ "style", "${_elekleftiris}", "top", '98px', { fromValue: '94px'}], position: 5610, duration: 461 },
            { id: "dg127", tween: [ "style", "${_Nasenloch}", "left", '185px', { fromValue: '185px'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "dg128", tween: [ "style", "${_Nasenloch}", "left", '185px', { fromValue: '185px'}], position: 653, duration: 0, easing: "easeInQuad" },
            { id: "dg129", tween: [ "style", "${_Nasenloch}", "left", '186px', { fromValue: '185px'}], position: 3937, duration: 707, easing: "easeInOutBounce" },
            { id: "dg63", tween: [ "transform", "${_elekmouth}", "scaleX", '0.59', { fromValue: '1'}], position: 0, duration: 653, easing: "easeInExpo" },
            { id: "dg64", tween: [ "transform", "${_elekmouth}", "scaleX", '1.28', { fromValue: '0.59'}], position: 653, duration: 774, easing: "easeInExpo" },
            { id: "dg65", tween: [ "transform", "${_elekmouth}", "scaleX", '1.28', { fromValue: '1.28'}], position: 1427, duration: 638, easing: "easeInExpo" },
            { id: "dg66", tween: [ "transform", "${_elekmouth}", "scaleX", '0.7', { fromValue: '1.28'}], position: 2065, duration: 339, easing: "easeInExpo" },
            { id: "dg67", tween: [ "transform", "${_elekmouth}", "scaleX", '1', { fromValue: '0.7'}], position: 2404, duration: 477 },
            { id: "dg167", tween: [ "style", "${_elekleftiris}", "left", '122px', { fromValue: '122px'}], position: 0, duration: 0 },
            { id: "dg168", tween: [ "style", "${_elekleftiris}", "left", '122px', { fromValue: '122px'}], position: 653, duration: 0 },
            { id: "dg169", tween: [ "style", "${_elekleftiris}", "left", '120px', { fromValue: '122px'}], position: 3937, duration: 774 },
            { id: "dg170", tween: [ "style", "${_elekleftiris}", "left", '122px', { fromValue: '120px'}], position: 5610, duration: 461 },
            { id: "dg206", tween: [ "style", "${_Group}", "left", '1px', { fromValue: '0px'}], position: 0, duration: 653, easing: "easeOutQuad" },
            { id: "dg207", tween: [ "style", "${_Group}", "left", '0px', { fromValue: '1px'}], position: 653, duration: 653, easing: "easeInBack" },
            { id: "dg208", tween: [ "style", "${_Group}", "left", '-1px', { fromValue: '0px'}], position: 1306, duration: 121, easing: "easeOutBounce" },
            { id: "dg209", tween: [ "style", "${_Group}", "left", '0px', { fromValue: '-1px'}], position: 1427, duration: 252, easing: "easeInBounce" },
            { id: "dg210", tween: [ "style", "${_Group}", "left", '-1px', { fromValue: '0px'}], position: 1679, duration: 861, easing: "easeOutBounce" },
            { id: "dg211", tween: [ "style", "${_Group}", "left", '1px', { fromValue: '-1px'}], position: 2540, duration: 157, easing: "easeOutBounce" },
            { id: "dg212", tween: [ "style", "${_Group}", "left", '-1px', { fromValue: '1px'}], position: 2697, duration: 135, easing: "easeOutBounce" },
            { id: "dg213", tween: [ "style", "${_Group}", "left", '0px', { fromValue: '-1px'}], position: 2832, duration: 101, easing: "easeOutBounce" },
            { id: "dg214", tween: [ "style", "${_Group}", "left", '0px', { fromValue: '0px'}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "dg5", tween: [ "style", "${_elektip}", "top", '-16px', { fromValue: '31px'}], position: 8089, duration: 411, easing: "easeInQuad" },
            { id: "dg6", tween: [ "style", "${_elektip}", "top", '28px', { fromValue: '-16px'}], position: 8500, duration: 157, easing: "easeInQuad" },
            { id: "dg7", tween: [ "style", "${_elektip}", "top", '32px', { fromValue: '28px'}], position: 8657, duration: 93, easing: "easeInQuad" },
            { id: "dg8", tween: [ "style", "${_elektip}", "top", '0px', { fromValue: '32px'}], position: 8750, duration: 189, easing: "easeInQuad" },
            { id: "dg9", tween: [ "style", "${_elektip}", "top", '33px', { fromValue: '0px'}], position: 8939, duration: 209, easing: "easeInQuad" },
            { id: "dg10", tween: [ "style", "${_elektip}", "top", '65px', { fromValue: '33px'}], position: 9148, duration: 102, easing: "easeInQuad" },
            { id: "dg11", tween: [ "style", "${_elektip}", "top", '60px', { fromValue: '65px'}], position: 9250, duration: 175, easing: "easeInQuad" },
            { id: "dg12", tween: [ "style", "${_elektip}", "top", '168px', { fromValue: '60px'}], position: 9425, duration: 75, easing: "easeInQuad" },
            { id: "dg13", tween: [ "style", "${_elektip}", "top", '188px', { fromValue: '168px'}], position: 9500, duration: 157, easing: "easeInQuad" },
            { id: "dg14", tween: [ "style", "${_elektip}", "top", '128px', { fromValue: '188px'}], position: 9657, duration: 190, easing: "easeInQuad" },
            { id: "dg15", tween: [ "style", "${_elektip}", "top", '138px', { fromValue: '128px'}], position: 9847, duration: 106, easing: "easeInQuad" },
            { id: "dg16", tween: [ "style", "${_elektip}", "top", '116px', { fromValue: '138px'}], position: 9953, duration: 146, easing: "easeInQuad" },
            { id: "dg17", tween: [ "style", "${_elektip}", "top", '62px', { fromValue: '116px'}], position: 10099, duration: 17, easing: "easeInQuad" },
            { id: "dg18", tween: [ "style", "${_elektip}", "top", '57px', { fromValue: '62px'}], position: 10116, duration: 93, easing: "easeInQuad" },
            { id: "dg19", tween: [ "style", "${_elektip}", "top", '70px', { fromValue: '57px'}], position: 10209, duration: 114, easing: "easeInQuad" },
            { id: "dg71", tween: [ "style", "${_elekmouth}", "left", '138px', { fromValue: '138px'}], position: 0, duration: 0 },
            { id: "dg72", tween: [ "style", "${_elekmouth}", "left", '138px', { fromValue: '138px'}], position: 340, duration: 0 },
            { id: "dg73", tween: [ "style", "${_elekmouth}", "left", '138px', { fromValue: '138px'}], position: 653, duration: 0 },
            { id: "dg74", tween: [ "style", "${_elekmouth}", "left", '138px', { fromValue: '138px'}], position: 3937, duration: 0 },
            { id: "dg242", tween: [ "style", "${_RoundRectCopy}", "opacity", '1', { fromValue: '0'}], position: 7940, duration: 149, easing: "easeInOutBounce" },
            { id: "dg243", tween: [ "style", "${_RoundRectCopy}", "opacity", '0', { fromValue: '1'}], position: 10323, duration: 149, easing: "easeInOutBounce" },
            { id: "dg237", tween: [ "color", "${_RoundRectCopy}", "background-color", 'rgba(29,146,180,1.00)', { fromValue: 'rgba(29,146,180,1.00)'}], position: 8089, duration: 0 },
            { id: "dg226", tween: [ "style", "${_elekleftpupil}", "top", '116px', { fromValue: '116px'}], position: 0, duration: 0 },
            { id: "dg227", tween: [ "style", "${_elekleftpupil}", "top", '116px', { fromValue: '116px'}], position: 653, duration: 0 },
            { id: "dg228", tween: [ "style", "${_elekleftpupil}", "top", '109px', { fromValue: '116px'}], position: 3937, duration: 774 },
            { id: "dg229", tween: [ "style", "${_elekleftpupil}", "top", '116px', { fromValue: '109px'}], position: 5610, duration: 461 },
            { id: "dg195", tween: [ "style", "${_Group}", "top", '17px', { fromValue: '0px'}], position: 0, duration: 653, easing: "easeOutQuad" },
            { id: "dg196", tween: [ "style", "${_Group}", "top", '0px', { fromValue: '17px'}], position: 653, duration: 653, easing: "easeInBack" },
            { id: "dg197", tween: [ "style", "${_Group}", "top", '9px', { fromValue: '0px'}], position: 1306, duration: 121, easing: "easeOutBounce" },
            { id: "dg198", tween: [ "style", "${_Group}", "top", '0px', { fromValue: '9px'}], position: 1427, duration: 252, easing: "easeInBounce" },
            { id: "dg199", tween: [ "style", "${_Group}", "top", '5px', { fromValue: '0px'}], position: 1679, duration: 861, easing: "easeOutBounce" },
            { id: "dg200", tween: [ "style", "${_Group}", "top", '-1px', { fromValue: '5px'}], position: 2540, duration: 71, easing: "easeOutBounce" },
            { id: "dg201", tween: [ "style", "${_Group}", "top", '10px', { fromValue: '-1px'}], position: 2611, duration: 86, easing: "easeOutBounce" },
            { id: "dg202", tween: [ "style", "${_Group}", "top", '-1px', { fromValue: '10px'}], position: 2697, duration: 53, easing: "easeOutBounce" },
            { id: "dg203", tween: [ "style", "${_Group}", "top", '10px', { fromValue: '-1px'}], position: 2750, duration: 82, easing: "easeOutBounce" },
            { id: "dg204", tween: [ "style", "${_Group}", "top", '0px', { fromValue: '10px'}], position: 2832, duration: 101, easing: "easeOutBounce" },
            { id: "dg205", tween: [ "style", "${_Group}", "top", '0px', { fromValue: '0px'}], position: 3937, duration: 0, easing: "easeOutBounce" },
            { id: "dg221", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 7940, duration: 149, easing: "easeInOutBounce" },
            { id: "dg222", tween: [ "style", "${_RoundRect}", "opacity", '0', { fromValue: '1'}], position: 10323, duration: 149, easing: "easeInOutBounce" },
            { id: "dg225", tween: [ "transform", "${_RoundRect}", "rotateZ", '-13deg', { fromValue: '-13deg'}], position: 8189, duration: 0, easing: "easeInOutBounce" },
            { id: "dg114", tween: [ "transform", "${_Nasenloch}", "scaleY", '1', { fromValue: '1'}], position: 3937, duration: 0, easing: "easeInOutBounce" },
            { id: "dg115", tween: [ "transform", "${_Nasenloch}", "scaleY", '1.27', { fromValue: '1'}], position: 4894, duration: 205, easing: "easeInQuad" },
            { id: "dg116", tween: [ "transform", "${_Nasenloch}", "scaleY", '1', { fromValue: '1.27'}], position: 5099, duration: 205, easing: "easeInQuad" },
            { id: "dg117", tween: [ "transform", "${_Nasenloch}", "scaleY", '1.27', { fromValue: '1'}], position: 5405, duration: 205, easing: "easeInQuad" },
            { id: "dg118", tween: [ "transform", "${_Nasenloch}", "scaleY", '1', { fromValue: '1.27'}], position: 5610, duration: 205, easing: "easeInQuad" },
            { id: "dg230", tween: [ "style", "${_elekleftpupil}", "left", '143px', { fromValue: '143px'}], position: 0, duration: 0 },
            { id: "dg231", tween: [ "style", "${_elekleftpupil}", "left", '143px', { fromValue: '143px'}], position: 653, duration: 0 },
            { id: "dg232", tween: [ "style", "${_elekleftpupil}", "left", '138px', { fromValue: '143px'}], position: 3937, duration: 774 },
            { id: "dg233", tween: [ "style", "${_elekleftpupil}", "left", '143px', { fromValue: '138px'}], position: 5610, duration: 461 },
            { id: "dg162", tween: [ "transform", "${_elekleftiris}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "dg163", tween: [ "transform", "${_elekleftiris}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 653, duration: 0 },
            { id: "dg164", tween: [ "transform", "${_elekleftiris}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3937, duration: 0 },
            { id: "dg223", tween: [ "style", "${_RoundRect}", "height", '37px', { fromValue: '15px'}], position: 8089, duration: 161, easing: "easeInOutBounce" },
            { id: "dg224", tween: [ "style", "${_RoundRect}", "height", '15px', { fromValue: '37px'}], position: 10162, duration: 161, easing: "easeInOutBounce" },
            { id: "dg81", tween: [ "style", "${_elekleftleg}", "-webkit-transform-origin", [81.24,51.71], { valueTemplate: '@@0@@% @@1@@%', fromValue: [81.24,51.71]}], position: 0, duration: 0 },
            { id: "eid886", tween: [ "style", "${_elekleftleg}", "-moz-transform-origin", [81.24,51.71], { valueTemplate: '@@0@@% @@1@@%', fromValue: [81.24,51.71]}], position: 0, duration: 0 },
            { id: "eid887", tween: [ "style", "${_elekleftleg}", "-ms-transform-origin", [81.24,51.71], { valueTemplate: '@@0@@% @@1@@%', fromValue: [81.24,51.71]}], position: 0, duration: 0 },
            { id: "eid888", tween: [ "style", "${_elekleftleg}", "msTransformOrigin", [81.24,51.71], { valueTemplate: '@@0@@% @@1@@%', fromValue: [81.24,51.71]}], position: 0, duration: 0 },
            { id: "eid889", tween: [ "style", "${_elekleftleg}", "-o-transform-origin", [81.24,51.71], { valueTemplate: '@@0@@% @@1@@%', fromValue: [81.24,51.71]}], position: 0, duration: 0 },
            { id: "dg82", tween: [ "style", "${_elekleftleg}", "-webkit-transform-origin", [84.2,20.46], { valueTemplate: '@@0@@% @@1@@%', fromValue: [81.24,51.71]}], position: 653, duration: 1244, easing: "easeInBounce" },
            { id: "eid890", tween: [ "style", "${_elekleftleg}", "-moz-transform-origin", [84.2,20.46], { valueTemplate: '@@0@@% @@1@@%', fromValue: [81.24,51.71]}], position: 653, duration: 1244, easing: "easeInBounce" },
            { id: "eid891", tween: [ "style", "${_elekleftleg}", "-ms-transform-origin", [84.2,20.46], { valueTemplate: '@@0@@% @@1@@%', fromValue: [81.24,51.71]}], position: 653, duration: 1244, easing: "easeInBounce" },
            { id: "eid892", tween: [ "style", "${_elekleftleg}", "msTransformOrigin", [84.2,20.46], { valueTemplate: '@@0@@% @@1@@%', fromValue: [81.24,51.71]}], position: 653, duration: 1244, easing: "easeInBounce" },
            { id: "eid893", tween: [ "style", "${_elekleftleg}", "-o-transform-origin", [84.2,20.46], { valueTemplate: '@@0@@% @@1@@%', fromValue: [81.24,51.71]}], position: 653, duration: 1244, easing: "easeInBounce" },
            { id: "dg83", tween: [ "style", "${_elekleftleg}", "-webkit-transform-origin", [84.2,20.46], { valueTemplate: '@@0@@% @@1@@%', fromValue: [84.2,20.46]}], position: 3937, duration: 0, easing: "easeInBounce" },
            { id: "eid894", tween: [ "style", "${_elekleftleg}", "-moz-transform-origin", [84.2,20.46], { valueTemplate: '@@0@@% @@1@@%', fromValue: [84.2,20.46]}], position: 3937, duration: 0, easing: "easeInBounce" },
            { id: "eid895", tween: [ "style", "${_elekleftleg}", "-ms-transform-origin", [84.2,20.46], { valueTemplate: '@@0@@% @@1@@%', fromValue: [84.2,20.46]}], position: 3937, duration: 0, easing: "easeInBounce" },
            { id: "eid896", tween: [ "style", "${_elekleftleg}", "msTransformOrigin", [84.2,20.46], { valueTemplate: '@@0@@% @@1@@%', fromValue: [84.2,20.46]}], position: 3937, duration: 0, easing: "easeInBounce" },
            { id: "eid897", tween: [ "style", "${_elekleftleg}", "-o-transform-origin", [84.2,20.46], { valueTemplate: '@@0@@% @@1@@%', fromValue: [84.2,20.46]}], position: 3937, duration: 0, easing: "easeInBounce" }         ]
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
})(jQuery, AdobeEdge, "edgeComposition-electron");
