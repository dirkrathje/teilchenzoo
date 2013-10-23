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
            id:'z_null',
            type:'rect',
            rect:['87px','8px','auto','auto','auto','auto'],
            transform:[[],[],[],['0.68136','0.68136']]
         }],
         symbolInstances: [
         {
            id:'z_null',
            symbolName:'z_null'
         }
         ]
      },
   states: {
      "Base State": {
         "${_z_null}": [
            ["transform", "scaleX", '0.68136'],
            ["style", "left", '87px'],
            ["transform", "scaleY", '0.68136'],
            ["style", "top", '8px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '305px'],
            ["style", "width", '420px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 37423,
         autoPlay: true,
         timeline: [
            { id: "eid279", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_z_null}', [] ], ""], position: 9412 },
            { id: "eid280", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${_z_null}', [] ], ""], position: 18713 },
            { id: "eid281", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_z_null}', [] ], ""], position: 28049 }         ]
      }
   }
},
"z_null": {
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
      rect: ['6px','182px','237px','88px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(192,192,192,1)']
   },
   {
      id: 'zbosbody',
      type: 'image',
      rect: ['0px','224px','247px','75px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/zbosbody.png','0px','0px']
   },
   {
      id: 'zboshead',
      type: 'image',
      rect: ['0px','86px','247px','140px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/zboshead.png','0px','0px']
   },
   {
      id: 'zboslefteye',
      type: 'image',
      rect: ['67px','130px','35px','29px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/zboslefteye.png','0px','0px']
   },
   {
      id: 'zbosleftleg',
      type: 'image',
      rect: ['57px','293px','48px','57px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/zbosleftleg.png','0px','0px']
   },
   {
      id: 'zbosrighteye',
      type: 'image',
      rect: ['149px','126px','35px','29px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/zbosrighteye.png','0px','0px']
   },
   {
      id: 'zbosrightleg',
      type: 'image',
      rect: ['150px','291px','47px','62px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/zbosrightleg.png','0px','0px']
   },
   {
      id: 'zbossat',
      type: 'image',
      rect: ['118px','0px','19px','97px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/zbossat.png','0px','0px']
   },
   {
      rect: ['53px','112px','142px','2px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','0px 0px','0px 0px'],
      id: 'RoundRect',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "top", '112px'],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["color", "background-color", 'rgba(176,18,73,1.00)'],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '2px'],
            ["style", "opacity", '0'],
            ["style", "left", '49px'],
            ["style", "width", '146px']
         ],
         "${_zbosrightleg}": [
            ["style", "top", '291px'],
            ["style", "height", '62px'],
            ["style", "left", '150px'],
            ["style", "width", '47px']
         ],
         "${_zbosleftleg}": [
            ["style", "top", '293px'],
            ["style", "height", '57px'],
            ["style", "left", '57px'],
            ["style", "width", '48px']
         ],
         "${_zboslefteye}": [
            ["style", "top", '130px'],
            ["style", "height", '29px'],
            ["style", "left", '67px'],
            ["style", "width", '35px']
         ],
         "${_Ellipse}": [
            ["style", "top", '182px'],
            ["style", "height", '88px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '6px'],
            ["style", "width", '237px']
         ],
         "${symbolSelector}": [
            ["style", "height", '353px'],
            ["style", "width", '247px']
         ],
         "${_zbossat}": [
            ["style", "top", '0px'],
            ["style", "height", '97px'],
            ["style", "left", '118px'],
            ["style", "width", '19px']
         ],
         "${_zbosrighteye}": [
            ["style", "top", '126px'],
            ["style", "height", '29px'],
            ["style", "left", '149px'],
            ["style", "width", '35px']
         ],
         "${_zbosbody}": [
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "width", '247px'],
            ["style", "top", '224px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '1'],
            ["style", "height", '75px'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_zboshead}": [
            ["style", "top", '86px'],
            ["style", "height", '140px'],
            ["style", "left", '0px'],
            ["style", "width", '247px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 9168.4875895902,
         autoPlay: true,
         timeline: [
            { id: "eid25", tween: [ "style", "${_zbosleftleg}", "height", '57px', { fromValue: '57px'}], position: 0, duration: 0 },
            { id: "eid107", tween: [ "style", "${_zbosleftleg}", "height", '57px', { fromValue: '57px'}], position: 2000, duration: 0 },
            { id: "eid32", tween: [ "style", "${_zbossat}", "top", '75px', { fromValue: '0px'}], position: 0, duration: 322 },
            { id: "eid44", tween: [ "style", "${_zbossat}", "top", '0px', { fromValue: '75px'}], position: 322, duration: 322 },
            { id: "eid68", tween: [ "style", "${_zbossat}", "top", '75px', { fromValue: '0px'}], position: 644, duration: 322 },
            { id: "eid69", tween: [ "style", "${_zbossat}", "top", '0px', { fromValue: '75px'}], position: 966, duration: 322 },
            { id: "eid88", tween: [ "style", "${_zbossat}", "top", '75px', { fromValue: '0px'}], position: 2000, duration: 322 },
            { id: "eid89", tween: [ "style", "${_zbossat}", "top", '0px', { fromValue: '75px'}], position: 2322, duration: 322 },
            { id: "eid90", tween: [ "style", "${_zbossat}", "top", '75px', { fromValue: '0px'}], position: 2644, duration: 322 },
            { id: "eid91", tween: [ "style", "${_zbossat}", "top", '0px', { fromValue: '75px'}], position: 2966, duration: 322 },
            { id: "eid175", tween: [ "style", "${_zbossat}", "top", '75px', { fromValue: '0px'}], position: 5165, duration: 322 },
            { id: "eid176", tween: [ "style", "${_zbossat}", "top", '0px', { fromValue: '75px'}], position: 5487, duration: 322 },
            { id: "eid177", tween: [ "style", "${_zbossat}", "top", '75px', { fromValue: '0px'}], position: 5809, duration: 322 },
            { id: "eid178", tween: [ "style", "${_zbossat}", "top", '0px', { fromValue: '75px'}], position: 6131, duration: 322 },
            { id: "eid239", tween: [ "style", "${_zbossat}", "top", '17px', { fromValue: '0px'}], position: 8475, duration: 140 },
            { id: "eid240", tween: [ "style", "${_zbossat}", "top", '-1px', { fromValue: '17px'}], position: 8615, duration: 178 },
            { id: "eid241", tween: [ "style", "${_zbossat}", "top", '14px', { fromValue: '-1px'}], position: 8793, duration: 143 },
            { id: "eid242", tween: [ "style", "${_zbossat}", "top", '2px', { fromValue: '14px'}], position: 8936, duration: 142 },
            { id: "eid243", tween: [ "style", "${_zbossat}", "top", '0px', { fromValue: '2px'}], position: 9078, duration: 90 },
            { id: "eid28", tween: [ "style", "${_zbosbody}", "height", '75px', { fromValue: '75px'}], position: 0, duration: 0 },
            { id: "eid135", tween: [ "style", "${_zbosbody}", "height", '75px', { fromValue: '75px'}], position: 2000, duration: 0 },
            { id: "eid26", tween: [ "style", "${_zboslefteye}", "height", '29px', { fromValue: '29px'}], position: 0, duration: 0 },
            { id: "eid114", tween: [ "style", "${_zboslefteye}", "height", '29px', { fromValue: '29px'}], position: 2000, duration: 0 },
            { id: "eid23", tween: [ "style", "${_zbosrightleg}", "height", '62px', { fromValue: '62px'}], position: 0, duration: 0 },
            { id: "eid96", tween: [ "style", "${_zbosrightleg}", "height", '62px', { fromValue: '62px'}], position: 2000, duration: 0 },
            { id: "eid7", tween: [ "style", "${_zbosleftleg}", "left", '57px', { fromValue: '57px'}], position: 0, duration: 0 },
            { id: "eid108", tween: [ "style", "${_zbosleftleg}", "left", '57px', { fromValue: '57px'}], position: 2000, duration: 0 },
            { id: "eid21", tween: [ "style", "${_zbosbody}", "width", '247px', { fromValue: '247px'}], position: 0, duration: 0 },
            { id: "eid129", tween: [ "style", "${_zbosbody}", "width", '247px', { fromValue: '247px'}], position: 2000, duration: 0 },
            { id: "eid33", tween: [ "style", "${_zboshead}", "top", '119px', { fromValue: '86px'}], position: 0, duration: 322 },
            { id: "eid47", tween: [ "style", "${_zboshead}", "top", '86px', { fromValue: '119px'}], position: 322, duration: 322 },
            { id: "eid74", tween: [ "style", "${_zboshead}", "top", '119px', { fromValue: '86px'}], position: 644, duration: 322 },
            { id: "eid75", tween: [ "style", "${_zboshead}", "top", '86px', { fromValue: '119px'}], position: 966, duration: 322 },
            { id: "eid117", tween: [ "style", "${_zboshead}", "top", '119px', { fromValue: '86px'}], position: 2000, duration: 322 },
            { id: "eid118", tween: [ "style", "${_zboshead}", "top", '86px', { fromValue: '119px'}], position: 2322, duration: 322 },
            { id: "eid119", tween: [ "style", "${_zboshead}", "top", '119px', { fromValue: '86px'}], position: 2644, duration: 322 },
            { id: "eid120", tween: [ "style", "${_zboshead}", "top", '86px', { fromValue: '119px'}], position: 2966, duration: 322 },
            { id: "eid191", tween: [ "style", "${_zboshead}", "top", '119px', { fromValue: '86px'}], position: 5165, duration: 322 },
            { id: "eid192", tween: [ "style", "${_zboshead}", "top", '86px', { fromValue: '119px'}], position: 5487, duration: 322 },
            { id: "eid193", tween: [ "style", "${_zboshead}", "top", '119px', { fromValue: '86px'}], position: 5809, duration: 322 },
            { id: "eid194", tween: [ "style", "${_zboshead}", "top", '86px', { fromValue: '119px'}], position: 6131, duration: 322 },
            { id: "eid275", tween: [ "color", "${_Ellipse}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid20", tween: [ "style", "${_zboshead}", "width", '247px', { fromValue: '247px'}], position: 0, duration: 0 },
            { id: "eid123", tween: [ "style", "${_zboshead}", "width", '247px', { fromValue: '247px'}], position: 2000, duration: 0 },
            { id: "eid53", tween: [ "transform", "${_zbosbody}", "scaleX", '1.01774', { fromValue: '1'}], position: 0, duration: 322 },
            { id: "eid67", tween: [ "transform", "${_zbosbody}", "scaleX", '1', { fromValue: '1.01774'}], position: 322, duration: 322 },
            { id: "eid78", tween: [ "transform", "${_zbosbody}", "scaleX", '1.01774', { fromValue: '1'}], position: 644, duration: 322 },
            { id: "eid79", tween: [ "transform", "${_zbosbody}", "scaleX", '1', { fromValue: '1.01774'}], position: 966, duration: 322 },
            { id: "eid124", tween: [ "transform", "${_zbosbody}", "scaleX", '1.01774', { fromValue: '1'}], position: 2000, duration: 322 },
            { id: "eid125", tween: [ "transform", "${_zbosbody}", "scaleX", '1', { fromValue: '1.01774'}], position: 2322, duration: 322 },
            { id: "eid126", tween: [ "transform", "${_zbosbody}", "scaleX", '1.01774', { fromValue: '1'}], position: 2644, duration: 322 },
            { id: "eid127", tween: [ "transform", "${_zbosbody}", "scaleX", '1', { fromValue: '1.01774'}], position: 2966, duration: 322 },
            { id: "eid199", tween: [ "transform", "${_zbosbody}", "scaleX", '1.01774', { fromValue: '1'}], position: 5165, duration: 322 },
            { id: "eid200", tween: [ "transform", "${_zbosbody}", "scaleX", '1', { fromValue: '1.01774'}], position: 5487, duration: 322 },
            { id: "eid201", tween: [ "transform", "${_zbosbody}", "scaleX", '1.01774', { fromValue: '1'}], position: 5809, duration: 322 },
            { id: "eid202", tween: [ "transform", "${_zbosbody}", "scaleX", '1', { fromValue: '1.01774'}], position: 6131, duration: 322 },
            { id: "eid249", tween: [ "style", "${_Ellipse}", "left", '5px', { fromValue: '6px'}], position: 0, duration: 322 },
            { id: "eid253", tween: [ "style", "${_Ellipse}", "left", '6px', { fromValue: '5px'}], position: 322, duration: 322 },
            { id: "eid255", tween: [ "style", "${_Ellipse}", "left", '5px', { fromValue: '6px'}], position: 644, duration: 322 },
            { id: "eid256", tween: [ "style", "${_Ellipse}", "left", '6px', { fromValue: '5px'}], position: 966, duration: 322 },
            { id: "eid259", tween: [ "style", "${_Ellipse}", "left", '5px', { fromValue: '6px'}], position: 2000, duration: 322 },
            { id: "eid260", tween: [ "style", "${_Ellipse}", "left", '6px', { fromValue: '5px'}], position: 2322, duration: 322 },
            { id: "eid261", tween: [ "style", "${_Ellipse}", "left", '5px', { fromValue: '6px'}], position: 2644, duration: 322 },
            { id: "eid262", tween: [ "style", "${_Ellipse}", "left", '6px', { fromValue: '5px'}], position: 2966, duration: 322 },
            { id: "eid267", tween: [ "style", "${_Ellipse}", "left", '5px', { fromValue: '6px'}], position: 5165, duration: 322 },
            { id: "eid268", tween: [ "style", "${_Ellipse}", "left", '6px', { fromValue: '5px'}], position: 5487, duration: 322 },
            { id: "eid269", tween: [ "style", "${_Ellipse}", "left", '5px', { fromValue: '6px'}], position: 5809, duration: 322 },
            { id: "eid270", tween: [ "style", "${_Ellipse}", "left", '6px', { fromValue: '5px'}], position: 6131, duration: 322 },
            { id: "eid35", tween: [ "style", "${_zbossat}", "left", '118px', { fromValue: '118px'}], position: 0, duration: 0 },
            { id: "eid93", tween: [ "style", "${_zbossat}", "left", '118px', { fromValue: '118px'}], position: 2000, duration: 0 },
            { id: "eid237", tween: [ "style", "${_zbossat}", "left", '118px', { fromValue: '118px'}], position: 8475, duration: 0 },
            { id: "eid27", tween: [ "style", "${_zboshead}", "height", '140px', { fromValue: '140px'}], position: 0, duration: 0 },
            { id: "eid121", tween: [ "style", "${_zboshead}", "height", '140px', { fromValue: '140px'}], position: 2000, duration: 0 },
            { id: "eid51", tween: [ "transform", "${_zbosbody}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid134", tween: [ "transform", "${_zbosbody}", "scaleY", '1', { fromValue: '1'}], position: 2000, duration: 0 },
            { id: "eid16", tween: [ "style", "${_zbosrightleg}", "width", '47px', { fromValue: '47px'}], position: 0, duration: 0 },
            { id: "eid98", tween: [ "style", "${_zbosrightleg}", "width", '47px', { fromValue: '47px'}], position: 2000, duration: 0 },
            { id: "eid4", tween: [ "style", "${_zbosrightleg}", "top", '291px', { fromValue: '291px'}], position: 0, duration: 0 },
            { id: "eid95", tween: [ "style", "${_zbosrightleg}", "top", '291px', { fromValue: '291px'}], position: 2000, duration: 0 },
            { id: "eid250", tween: [ "style", "${_Ellipse}", "top", '215px', { fromValue: '182px'}], position: 0, duration: 322 },
            { id: "eid254", tween: [ "style", "${_Ellipse}", "top", '182px', { fromValue: '215px'}], position: 322, duration: 322 },
            { id: "eid257", tween: [ "style", "${_Ellipse}", "top", '215px', { fromValue: '182px'}], position: 644, duration: 322 },
            { id: "eid258", tween: [ "style", "${_Ellipse}", "top", '182px', { fromValue: '215px'}], position: 966, duration: 322 },
            { id: "eid263", tween: [ "style", "${_Ellipse}", "top", '215px', { fromValue: '182px'}], position: 2000, duration: 322 },
            { id: "eid264", tween: [ "style", "${_Ellipse}", "top", '182px', { fromValue: '215px'}], position: 2322, duration: 322 },
            { id: "eid265", tween: [ "style", "${_Ellipse}", "top", '215px', { fromValue: '182px'}], position: 2644, duration: 322 },
            { id: "eid266", tween: [ "style", "${_Ellipse}", "top", '182px', { fromValue: '215px'}], position: 2966, duration: 322 },
            { id: "eid271", tween: [ "style", "${_Ellipse}", "top", '215px', { fromValue: '182px'}], position: 5165, duration: 322 },
            { id: "eid272", tween: [ "style", "${_Ellipse}", "top", '182px', { fromValue: '215px'}], position: 5487, duration: 322 },
            { id: "eid273", tween: [ "style", "${_Ellipse}", "top", '215px', { fromValue: '182px'}], position: 5809, duration: 322 },
            { id: "eid274", tween: [ "style", "${_Ellipse}", "top", '182px', { fromValue: '215px'}], position: 6131, duration: 322 },
            { id: "eid31", tween: [ "style", "${_zbosrighteye}", "top", '159px', { fromValue: '126px'}], position: 0, duration: 322 },
            { id: "eid45", tween: [ "style", "${_zbosrighteye}", "top", '126px', { fromValue: '159px'}], position: 322, duration: 322 },
            { id: "eid70", tween: [ "style", "${_zbosrighteye}", "top", '159px', { fromValue: '126px'}], position: 644, duration: 322 },
            { id: "eid71", tween: [ "style", "${_zbosrighteye}", "top", '126px', { fromValue: '159px'}], position: 966, duration: 322 },
            { id: "eid158", tween: [ "style", "${_zbosrighteye}", "top", '131px', { fromValue: '126px'}], position: 1288, duration: 84 },
            { id: "eid159", tween: [ "style", "${_zbosrighteye}", "top", '129px', { fromValue: '131px'}], position: 1372, duration: 628 },
            { id: "eid99", tween: [ "style", "${_zbosrighteye}", "top", '159px', { fromValue: '129px'}], position: 2000, duration: 322 },
            { id: "eid100", tween: [ "style", "${_zbosrighteye}", "top", '131px', { fromValue: '159px'}], position: 2322, duration: 322 },
            { id: "eid101", tween: [ "style", "${_zbosrighteye}", "top", '159px', { fromValue: '131px'}], position: 2644, duration: 322 },
            { id: "eid102", tween: [ "style", "${_zbosrighteye}", "top", '134px', { fromValue: '159px'}], position: 2966, duration: 322 },
            { id: "eid181", tween: [ "style", "${_zbosrighteye}", "top", '159px', { fromValue: '129px'}], position: 5165, duration: 322 },
            { id: "eid182", tween: [ "style", "${_zbosrighteye}", "top", '131px', { fromValue: '159px'}], position: 5487, duration: 322 },
            { id: "eid183", tween: [ "style", "${_zbosrighteye}", "top", '159px', { fromValue: '131px'}], position: 5809, duration: 322 },
            { id: "eid184", tween: [ "style", "${_zbosrighteye}", "top", '126px', { fromValue: '159px'}], position: 6131, duration: 322 },
            { id: "eid17", tween: [ "style", "${_zbosrighteye}", "width", '35px', { fromValue: '35px'}], position: 0, duration: 0 },
            { id: "eid105", tween: [ "style", "${_zbosrighteye}", "width", '35px', { fromValue: '35px'}], position: 2000, duration: 0 },
            { id: "eid59", tween: [ "style", "${_zbosbody}", "border-top-left-radius", [21.6728515625,21.6728515625], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 322 },
            { id: "eid64", tween: [ "style", "${_zbosbody}", "border-top-left-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.6728515625,21.6728515625]}], position: 322, duration: 322 },
            { id: "eid81", tween: [ "style", "${_zbosbody}", "border-top-left-radius", [21.34791356627,21.34791356627], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 644, duration: 322 },
            { id: "eid85", tween: [ "style", "${_zbosbody}", "border-top-left-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.34791356627,21.34791356627]}], position: 966, duration: 322 },
            { id: "eid141", tween: [ "style", "${_zbosbody}", "border-top-left-radius", [22.093054563604,22.093054563604], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 2000, duration: 322 },
            { id: "eid145", tween: [ "style", "${_zbosbody}", "border-top-left-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [22.093054563604,22.093054563604]}], position: 2322, duration: 322 },
            { id: "eid149", tween: [ "style", "${_zbosbody}", "border-top-left-radius", [22.65625,22.65625], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 2644, duration: 322 },
            { id: "eid153", tween: [ "style", "${_zbosbody}", "border-top-left-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [22.65625,22.65625]}], position: 2966, duration: 322 },
            { id: "eid212", tween: [ "style", "${_zbosbody}", "border-top-left-radius", [23.362868824277,23.362868824277], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 5165, duration: 322 },
            { id: "eid216", tween: [ "style", "${_zbosbody}", "border-top-left-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [23.362868824277,23.362868824277]}], position: 5487, duration: 322 },
            { id: "eid220", tween: [ "style", "${_zbosbody}", "border-top-left-radius", [33.681769581389,19.645446777344], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 5809, duration: 322 },
            { id: "eid225", tween: [ "style", "${_zbosbody}", "border-top-left-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [33.681769581389,19.645446777344]}], position: 6131, duration: 322 },
            { id: "eid160", tween: [ "style", "${_zboslefteye}", "left", '77px', { fromValue: '67px'}], position: 0, duration: 1372 },
            { id: "eid161", tween: [ "style", "${_zboslefteye}", "left", '56px', { fromValue: '77px'}], position: 1372, duration: 628 },
            { id: "eid164", tween: [ "style", "${_zboslefteye}", "left", '66px', { fromValue: '56px'}], position: 2000, duration: 322 },
            { id: "eid167", tween: [ "style", "${_zboslefteye}", "left", '71px', { fromValue: '66px'}], position: 2322, duration: 966 },
            { id: "eid185", tween: [ "style", "${_zboslefteye}", "left", '66px', { fromValue: '56px'}], position: 5165, duration: 322 },
            { id: "eid186", tween: [ "style", "${_zboslefteye}", "left", '67px', { fromValue: '66px'}], position: 5487, duration: 966 },
            { id: "eid11", tween: [ "style", "${_zboshead}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid122", tween: [ "style", "${_zboshead}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid19", tween: [ "style", "${_zboslefteye}", "width", '35px', { fromValue: '35px'}], position: 0, duration: 0 },
            { id: "eid116", tween: [ "style", "${_zboslefteye}", "width", '35px', { fromValue: '35px'}], position: 2000, duration: 0 },
            { id: "eid30", tween: [ "style", "${_zbosbody}", "top", '247px', { fromValue: '224px'}], position: 0, duration: 322 },
            { id: "eid49", tween: [ "style", "${_zbosbody}", "top", '224px', { fromValue: '247px'}], position: 322, duration: 322 },
            { id: "eid76", tween: [ "style", "${_zbosbody}", "top", '247px', { fromValue: '224px'}], position: 644, duration: 322 },
            { id: "eid77", tween: [ "style", "${_zbosbody}", "top", '224px', { fromValue: '247px'}], position: 966, duration: 322 },
            { id: "eid130", tween: [ "style", "${_zbosbody}", "top", '247px', { fromValue: '224px'}], position: 2000, duration: 322 },
            { id: "eid131", tween: [ "style", "${_zbosbody}", "top", '224px', { fromValue: '247px'}], position: 2322, duration: 322 },
            { id: "eid132", tween: [ "style", "${_zbosbody}", "top", '247px', { fromValue: '224px'}], position: 2644, duration: 322 },
            { id: "eid133", tween: [ "style", "${_zbosbody}", "top", '224px', { fromValue: '247px'}], position: 2966, duration: 322 },
            { id: "eid195", tween: [ "style", "${_zbosbody}", "top", '247px', { fromValue: '224px'}], position: 5165, duration: 322 },
            { id: "eid196", tween: [ "style", "${_zbosbody}", "top", '224px', { fromValue: '247px'}], position: 5487, duration: 322 },
            { id: "eid197", tween: [ "style", "${_zbosbody}", "top", '247px', { fromValue: '224px'}], position: 5809, duration: 322 },
            { id: "eid198", tween: [ "style", "${_zbosbody}", "top", '224px', { fromValue: '247px'}], position: 6131, duration: 322 },
            { id: "eid22", tween: [ "style", "${_zbossat}", "height", '97px', { fromValue: '97px'}], position: 0, duration: 0 },
            { id: "eid92", tween: [ "style", "${_zbossat}", "height", '97px', { fromValue: '97px'}], position: 2000, duration: 0 },
            { id: "eid247", tween: [ "style", "${_Ellipse}", "height", '88px', { fromValue: '88px'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "style", "${_zbosrightleg}", "left", '150px', { fromValue: '150px'}], position: 0, duration: 0 },
            { id: "eid97", tween: [ "style", "${_zbosrightleg}", "left", '150px', { fromValue: '150px'}], position: 2000, duration: 0 },
            { id: "eid24", tween: [ "style", "${_zbosrighteye}", "height", '29px', { fromValue: '29px'}], position: 0, duration: 0 },
            { id: "eid103", tween: [ "style", "${_zbosrighteye}", "height", '29px', { fromValue: '29px'}], position: 2000, duration: 0 },
            { id: "eid156", tween: [ "style", "${_zbosrighteye}", "left", '157px', { fromValue: '149px'}], position: 0, duration: 1372 },
            { id: "eid157", tween: [ "style", "${_zbosrighteye}", "left", '142px', { fromValue: '157px'}], position: 1372, duration: 628 },
            { id: "eid165", tween: [ "style", "${_zbosrighteye}", "left", '153px', { fromValue: '142px'}], position: 2000, duration: 644 },
            { id: "eid166", tween: [ "style", "${_zbosrighteye}", "left", '145px', { fromValue: '153px'}], position: 2644, duration: 644 },
            { id: "eid179", tween: [ "style", "${_zbosrighteye}", "left", '153px', { fromValue: '142px'}], position: 5165, duration: 644 },
            { id: "eid180", tween: [ "style", "${_zbosrighteye}", "left", '149px', { fromValue: '153px'}], position: 5809, duration: 644 },
            { id: "eid170", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 4114, duration: 72 },
            { id: "eid204", tween: [ "style", "${_RoundRect}", "opacity", '0', { fromValue: '1'}], position: 5241, duration: 12 },
            { id: "eid230", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 7648, duration: 72 },
            { id: "eid231", tween: [ "style", "${_RoundRect}", "opacity", '0', { fromValue: '1'}], position: 8261, duration: 12 },
            { id: "eid234", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 8543, duration: 72 },
            { id: "eid235", tween: [ "style", "${_RoundRect}", "opacity", '0', { fromValue: '1'}], position: 9156, duration: 12 },
            { id: "eid58", tween: [ "style", "${_zbosbody}", "border-bottom-left-radius", [21.6728515625,21.6728515625], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 322 },
            { id: "eid63", tween: [ "style", "${_zbosbody}", "border-bottom-left-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.6728515625,21.6728515625]}], position: 322, duration: 322 },
            { id: "eid80", tween: [ "style", "${_zbosbody}", "border-bottom-left-radius", [21.34791356627,21.34791356627], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 644, duration: 322 },
            { id: "eid84", tween: [ "style", "${_zbosbody}", "border-bottom-left-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.34791356627,21.34791356627]}], position: 966, duration: 322 },
            { id: "eid140", tween: [ "style", "${_zbosbody}", "border-bottom-left-radius", [22.093054563604,22.093054563604], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 2000, duration: 322 },
            { id: "eid144", tween: [ "style", "${_zbosbody}", "border-bottom-left-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [22.093054563604,22.093054563604]}], position: 2322, duration: 322 },
            { id: "eid148", tween: [ "style", "${_zbosbody}", "border-bottom-left-radius", [22.65625,22.65625], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 2644, duration: 322 },
            { id: "eid152", tween: [ "style", "${_zbosbody}", "border-bottom-left-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [22.65625,22.65625]}], position: 2966, duration: 322 },
            { id: "eid211", tween: [ "style", "${_zbosbody}", "border-bottom-left-radius", [23.362868824277,23.362868824277], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 5165, duration: 322 },
            { id: "eid215", tween: [ "style", "${_zbosbody}", "border-bottom-left-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [23.362868824277,23.362868824277]}], position: 5487, duration: 322 },
            { id: "eid219", tween: [ "style", "${_zbosbody}", "border-bottom-left-radius", [33.681769581389,19.645446777344], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 5809, duration: 322 },
            { id: "eid224", tween: [ "style", "${_zbosbody}", "border-bottom-left-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [33.681769581389,19.645446777344]}], position: 6131, duration: 322 },
            { id: "eid18", tween: [ "style", "${_zbosleftleg}", "width", '48px', { fromValue: '48px'}], position: 0, duration: 0 },
            { id: "eid109", tween: [ "style", "${_zbosleftleg}", "width", '48px', { fromValue: '48px'}], position: 2000, duration: 0 },
            { id: "eid246", tween: [ "style", "${_Ellipse}", "width", '237px', { fromValue: '237px'}], position: 0, duration: 0 },
            { id: "eid60", tween: [ "style", "${_zbosbody}", "border-top-right-radius", [21.6728515625,21.6728515625], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 322 },
            { id: "eid65", tween: [ "style", "${_zbosbody}", "border-top-right-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.6728515625,21.6728515625]}], position: 322, duration: 322 },
            { id: "eid82", tween: [ "style", "${_zbosbody}", "border-top-right-radius", [21.34791356627,21.34791356627], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 644, duration: 322 },
            { id: "eid86", tween: [ "style", "${_zbosbody}", "border-top-right-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.34791356627,21.34791356627]}], position: 966, duration: 322 },
            { id: "eid142", tween: [ "style", "${_zbosbody}", "border-top-right-radius", [22.093054563604,22.093054563604], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 2000, duration: 322 },
            { id: "eid146", tween: [ "style", "${_zbosbody}", "border-top-right-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [22.093054563604,22.093054563604]}], position: 2322, duration: 322 },
            { id: "eid150", tween: [ "style", "${_zbosbody}", "border-top-right-radius", [22.65625,22.65625], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 2644, duration: 322 },
            { id: "eid154", tween: [ "style", "${_zbosbody}", "border-top-right-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [22.65625,22.65625]}], position: 2966, duration: 322 },
            { id: "eid213", tween: [ "style", "${_zbosbody}", "border-top-right-radius", [23.362868824277,23.362868824277], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 5165, duration: 322 },
            { id: "eid217", tween: [ "style", "${_zbosbody}", "border-top-right-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [23.362868824277,23.362868824277]}], position: 5487, duration: 322 },
            { id: "eid221", tween: [ "style", "${_zbosbody}", "border-top-right-radius", [33.681769581389,19.645446777344], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 5809, duration: 322 },
            { id: "eid226", tween: [ "style", "${_zbosbody}", "border-top-right-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [33.681769581389,19.645446777344]}], position: 6131, duration: 322 },
            { id: "eid61", tween: [ "style", "${_zbosbody}", "border-bottom-right-radius", [21.6728515625,21.6728515625], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 322 },
            { id: "eid66", tween: [ "style", "${_zbosbody}", "border-bottom-right-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.6728515625,21.6728515625]}], position: 322, duration: 322 },
            { id: "eid83", tween: [ "style", "${_zbosbody}", "border-bottom-right-radius", [21.34791356627,21.34791356627], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 644, duration: 322 },
            { id: "eid87", tween: [ "style", "${_zbosbody}", "border-bottom-right-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21.34791356627,21.34791356627]}], position: 966, duration: 322 },
            { id: "eid143", tween: [ "style", "${_zbosbody}", "border-bottom-right-radius", [22.093054563604,22.093054563604], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 2000, duration: 322 },
            { id: "eid147", tween: [ "style", "${_zbosbody}", "border-bottom-right-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [22.093054563604,22.093054563604]}], position: 2322, duration: 322 },
            { id: "eid151", tween: [ "style", "${_zbosbody}", "border-bottom-right-radius", [22.65625,22.65625], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 2644, duration: 322 },
            { id: "eid155", tween: [ "style", "${_zbosbody}", "border-bottom-right-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [22.65625,22.65625]}], position: 2966, duration: 322 },
            { id: "eid214", tween: [ "style", "${_zbosbody}", "border-bottom-right-radius", [23.362868824277,23.362868824277], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 5165, duration: 322 },
            { id: "eid218", tween: [ "style", "${_zbosbody}", "border-bottom-right-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [23.362868824277,23.362868824277]}], position: 5487, duration: 322 },
            { id: "eid222", tween: [ "style", "${_zbosbody}", "border-bottom-right-radius", [33.681769581389,19.645446777344], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 5809, duration: 322 },
            { id: "eid227", tween: [ "style", "${_zbosbody}", "border-bottom-right-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [33.681769581389,19.645446777344]}], position: 6131, duration: 322 },
            { id: "eid15", tween: [ "style", "${_zbossat}", "width", '19px', { fromValue: '19px'}], position: 0, duration: 0 },
            { id: "eid94", tween: [ "style", "${_zbossat}", "width", '19px', { fromValue: '19px'}], position: 2000, duration: 0 },
            { id: "eid8", tween: [ "style", "${_zbosleftleg}", "top", '293px', { fromValue: '293px'}], position: 0, duration: 0 },
            { id: "eid106", tween: [ "style", "${_zbosleftleg}", "top", '293px', { fromValue: '293px'}], position: 2000, duration: 0 },
            { id: "eid29", tween: [ "style", "${_zbosbody}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid128", tween: [ "style", "${_zbosbody}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid173", tween: [ "style", "${_RoundRect}", "height", '60px', { fromValue: '2px'}], position: 4788, duration: 318 },
            { id: "eid174", tween: [ "style", "${_RoundRect}", "height", '1px', { fromValue: '60px'}], position: 5106, duration: 135 },
            { id: "eid228", tween: [ "style", "${_RoundRect}", "height", '60px', { fromValue: '2px'}], position: 7808, duration: 318 },
            { id: "eid229", tween: [ "style", "${_RoundRect}", "height", '1px', { fromValue: '60px'}], position: 8126, duration: 135 },
            { id: "eid232", tween: [ "style", "${_RoundRect}", "height", '60px', { fromValue: '2px'}], position: 8703, duration: 318 },
            { id: "eid233", tween: [ "style", "${_RoundRect}", "height", '1px', { fromValue: '60px'}], position: 9021, duration: 135 },
            { id: "eid34", tween: [ "style", "${_zboslefteye}", "top", '163px', { fromValue: '130px'}], position: 0, duration: 322 },
            { id: "eid46", tween: [ "style", "${_zboslefteye}", "top", '130px', { fromValue: '163px'}], position: 322, duration: 322 },
            { id: "eid72", tween: [ "style", "${_zboslefteye}", "top", '163px', { fromValue: '130px'}], position: 644, duration: 322 },
            { id: "eid73", tween: [ "style", "${_zboslefteye}", "top", '130px', { fromValue: '163px'}], position: 966, duration: 322 },
            { id: "eid162", tween: [ "style", "${_zboslefteye}", "top", '128px', { fromValue: '130px'}], position: 1288, duration: 84 },
            { id: "eid163", tween: [ "style", "${_zboslefteye}", "top", '120px', { fromValue: '128px'}], position: 1372, duration: 628 },
            { id: "eid110", tween: [ "style", "${_zboslefteye}", "top", '152px', { fromValue: '120px'}], position: 2000, duration: 322 },
            { id: "eid111", tween: [ "style", "${_zboslefteye}", "top", '130px', { fromValue: '152px'}], position: 2322, duration: 322 },
            { id: "eid112", tween: [ "style", "${_zboslefteye}", "top", '163px', { fromValue: '130px'}], position: 2644, duration: 322 },
            { id: "eid113", tween: [ "style", "${_zboslefteye}", "top", '133px', { fromValue: '163px'}], position: 2966, duration: 322 },
            { id: "eid187", tween: [ "style", "${_zboslefteye}", "top", '152px', { fromValue: '120px'}], position: 5165, duration: 322 },
            { id: "eid188", tween: [ "style", "${_zboslefteye}", "top", '130px', { fromValue: '152px'}], position: 5487, duration: 322 },
            { id: "eid189", tween: [ "style", "${_zboslefteye}", "top", '163px', { fromValue: '130px'}], position: 5809, duration: 322 },
            { id: "eid190", tween: [ "style", "${_zboslefteye}", "top", '130px', { fromValue: '163px'}], position: 6131, duration: 322 }         ]
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
})(jQuery, AdobeEdge, "EDGE-24571082");
