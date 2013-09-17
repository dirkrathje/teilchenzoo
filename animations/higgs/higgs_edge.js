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
            rect:['89','22','410','353','auto','auto'],
            c:[
            {
               id:'bubble',
               type:'rect',
               rect:['282px','54px','auto','auto','auto','auto']
            },
            {
               id:'higgs',
               type:'rect',
               rect:['0px','0px','auto','auto','auto','auto']
            }]
         }],
         symbolInstances: [
         {
            id:'higgs',
            symbolName:'higgs'
         },
         {
            id:'bubble',
            symbolName:'bubble'
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
         "${_bubble}": [
            ["style", "left", '282px'],
            ["style", "top", '54px']
         ],
         "${_higgs}": [
            ["style", "left", '0px'],
            ["style", "top", '-2px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3631,
         autoPlay: true,
         timeline: [
            { id: "eid178", tween: [ "style", "${_higgs}", "top", '-12px', { fromValue: '-2px'}], position: 0, duration: 500, easing: "easeInElastic" },
            { id: "eid179", tween: [ "style", "${_higgs}", "top", '0px', { fromValue: '-12px'}], position: 500, duration: 237 },
            { id: "eid181", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_bubble}', [] ], ""], position: 3631 },
            { id: "eid182", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_higgs}', [] ], ""], position: 3631 }         ]
      }
   }
},
"higgs": {
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
      rect: ['45px','197px','212px','72px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      id: 'higgshead',
      type: 'image',
      rect: ['0px','0px','309px','240px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/higgshead.png','0px','0px']
   },
   {
      id: 'higgsmouth',
      type: 'image',
      rect: ['6px','229px','258px','124px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/higgsmouth.png','0px','0px']
   },
   {
      id: 'higgsrightmouth',
      type: 'image',
      rect: ['248px','231px','16px','23px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/higgsrightmouth.png','0px','0px']
   },
   {
      id: 'higgsleftmouth',
      type: 'image',
      rect: ['33px','220px','22px','23px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/higgsleftmouth.png','0px','0px']
   },
   {
      id: 'higgslefteye',
      type: 'image',
      rect: ['112px','156px','41px','36px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/higgslefteye.png','0px','0px']
   },
   {
      id: 'higgsrighteye',
      type: 'image',
      rect: ['155px','161px','32px','24px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/higgsrighteye.png','0px','0px']
   },
   {
      id: 'higgsleftpupil',
      type: 'image',
      rect: ['123px','169px','16px','10px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/higgsleftpupil.png','0px','0px']
   },
   {
      id: 'higgsrightpupil',
      type: 'image',
      rect: ['164px','174px','13px','8px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/higgsrightpupil.png','0px','0px']
   },
   {
      rect: ['113px','124px','74px','27px','auto','auto'],
      borderRadius: ['50%','50%','18% 18%','18% 18%'],
      id: 'Ellipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(143,30,128,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "top", '197px'],
            ["style", "height", '72px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '45px'],
            ["style", "width", '212px']
         ],
         "${_higgsrightmouth}": [
            ["style", "top", '229px'],
            ["style", "border-bottom-left-radius", [6.1658935546875,6.1658935546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-left-radius", [6.1658935546875,6.1658935546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [6.1658935546875,6.1658935546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '23px'],
            ["style", "left", '248px'],
            ["style", "border-top-right-radius", [6.1658935546875,6.1658935546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '16px']
         ],
         "${_higgslefteye}": [
            ["style", "height", '36px'],
            ["style", "top", '156px'],
            ["style", "left", '112px'],
            ["style", "width", '41px']
         ],
         "${_higgsrighteye}": [
            ["style", "height", '24px'],
            ["style", "top", '161px'],
            ["style", "left", '155px'],
            ["style", "width", '32px']
         ],
         "${_higgsleftmouth}": [
            ["style", "top", '220px'],
            ["style", "border-bottom-left-radius", [8.2607421875,8.2607421875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-left-radius", [8.2607421875,8.2607421875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [8.2607421875,8.2607421875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '23px'],
            ["style", "border-top-right-radius", [8.2607421875,8.2607421875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '33px'],
            ["style", "width", '22px']
         ],
         "${_higgsrightpupil}": [
            ["style", "height", '8px'],
            ["style", "top", '174px'],
            ["style", "left", '164px'],
            ["style", "width", '13px']
         ],
         "${_higgsmouth}": [
            ["style", "height", '124px'],
            ["style", "top", '229px'],
            ["style", "left", '6px'],
            ["style", "width", '258px']
         ],
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(143,30,128,1.00)'],
            ["style", "border-bottom-left-radius", [18,18], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "top", '124px'],
            ["style", "border-bottom-right-radius", [18,18], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '27px'],
            ["style", "opacity", '0'],
            ["style", "left", '113px'],
            ["style", "width", '74px']
         ],
         "${_higgsleftpupil}": [
            ["style", "height", '10px'],
            ["style", "top", '169px'],
            ["style", "left", '123px'],
            ["style", "width", '16px']
         ],
         "${_higgshead}": [
            ["style", "height", '240px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '309px']
         ],
         "${symbolSelector}": [
            ["style", "height", '353px'],
            ["style", "width", '309px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3155,
         autoPlay: true,
         timeline: [
            { id: "eid138", tween: [ "style", "${_higgsrightpupil}", "left", '164px', { fromValue: '164px'}], position: 0, duration: 0, easing: "easeInElastic" },
            { id: "eid130", tween: [ "style", "${_higgsrightpupil}", "left", '168px', { fromValue: '164px'}], position: 1250, duration: 155, easing: "easeOutCirc" },
            { id: "eid172", tween: [ "style", "${_higgsrightpupil}", "left", '164px', { fromValue: '168px'}], position: 2250, duration: 155, easing: "easeOutCirc" },
            { id: "eid83", tween: [ "style", "${_higgsleftmouth}", "border-top-left-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [8.2607421875,8.2607421875]}], position: 0, duration: 500, easing: "easeInElastic" },
            { id: "eid113", tween: [ "style", "${_higgsleftmouth}", "border-top-left-radius", [15.754486083984,15.754486083984], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 500, duration: 250, easing: "easeOutCubic" },
            { id: "eid65", tween: [ "style", "${_higgsleftmouth}", "top", '221px', { fromValue: '220px'}], position: 0, duration: 500, easing: "easeInElastic" },
            { id: "eid101", tween: [ "style", "${_higgsleftmouth}", "top", '220px', { fromValue: '221px'}], position: 500, duration: 250, easing: "easeOutCubic" },
            { id: "eid136", tween: [ "style", "${_higgsleftpupil}", "left", '123px', { fromValue: '123px'}], position: 0, duration: 0, easing: "easeInElastic" },
            { id: "eid132", tween: [ "style", "${_higgsleftpupil}", "left", '131px', { fromValue: '123px'}], position: 1250, duration: 155, easing: "easeOutCirc" },
            { id: "eid174", tween: [ "style", "${_higgsleftpupil}", "left", '123px', { fromValue: '131px'}], position: 2250, duration: 155, easing: "easeOutCirc" },
            { id: "eid28", tween: [ "style", "${_higgsrightpupil}", "height", '8px', { fromValue: '8px'}], position: 1250, duration: 0 },
            { id: "eid86", tween: [ "style", "${_higgsrightmouth}", "border-bottom-left-radius", [9.8750915527344,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [6.1658935546875,6.1658935546875]}], position: 0, duration: 500, easing: "easeInElastic" },
            { id: "eid116", tween: [ "style", "${_higgsrightmouth}", "border-bottom-left-radius", [9.6778564453125,9.6778564453125], { valueTemplate: '@@0@@px @@1@@px', fromValue: [9.8750915527344,0]}], position: 500, duration: 250, easing: "easeOutCubic" },
            { id: "eid38", tween: [ "style", "${_higgsmouth}", "left", '5px', { fromValue: '6px'}], position: 0, duration: 500, easing: "easeInElastic" },
            { id: "eid107", tween: [ "style", "${_higgsmouth}", "left", '6px', { fromValue: '5px'}], position: 500, duration: 250, easing: "easeOutCubic" },
            { id: "eid27", tween: [ "style", "${_RoundRect}", "width", '212px', { fromValue: '212px'}], position: 0, duration: 0 },
            { id: "eid64", tween: [ "style", "${_higgsleftmouth}", "left", '33px', { fromValue: '33px'}], position: 0, duration: 500, easing: "easeInElastic" },
            { id: "eid102", tween: [ "style", "${_higgsleftmouth}", "left", '33px', { fromValue: '33px'}], position: 500, duration: 250, easing: "easeOutCubic" },
            { id: "eid70", tween: [ "style", "${_RoundRect}", "height", '97px', { fromValue: '72px'}], position: 0, duration: 500, easing: "easeInElastic" },
            { id: "eid111", tween: [ "style", "${_RoundRect}", "height", '72px', { fromValue: '97px'}], position: 500, duration: 250, easing: "easeOutCubic" },
            { id: "eid30", tween: [ "style", "${_higgsrighteye}", "height", '24px', { fromValue: '24px'}], position: 1250, duration: 0 },
            { id: "eid37", tween: [ "style", "${_higgshead}", "top", '-8px', { fromValue: '0px'}], position: 0, duration: 500, easing: "easeInElastic" },
            { id: "eid109", tween: [ "style", "${_higgshead}", "top", '0px', { fromValue: '-8px'}], position: 500, duration: 250, easing: "easeOutCubic" },
            { id: "eid19", tween: [ "style", "${_higgsrightpupil}", "width", '13px', { fromValue: '13px'}], position: 1250, duration: 0 },
            { id: "eid87", tween: [ "style", "${_higgsrightmouth}", "border-top-left-radius", [9.8750915527344,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [6.1658935546875,6.1658935546875]}], position: 0, duration: 500, easing: "easeInElastic" },
            { id: "eid117", tween: [ "style", "${_higgsrightmouth}", "border-top-left-radius", [9.6778564453125,9.6778564453125], { valueTemplate: '@@0@@px @@1@@px', fromValue: [9.8750915527344,0]}], position: 500, duration: 250, easing: "easeOutCubic" },
            { id: "eid82", tween: [ "style", "${_higgsleftmouth}", "border-bottom-left-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [8.2607421875,8.2607421875]}], position: 0, duration: 500, easing: "easeInElastic" },
            { id: "eid112", tween: [ "style", "${_higgsleftmouth}", "border-bottom-left-radius", [15.754486083984,15.754486083984], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 500, duration: 250, easing: "easeOutCubic" },
            { id: "eid69", tween: [ "style", "${_higgsleftmouth}", "width", '21px', { fromValue: '22px'}], position: 0, duration: 500, easing: "easeInElastic" },
            { id: "eid103", tween: [ "style", "${_higgsleftmouth}", "width", '22px', { fromValue: '21px'}], position: 500, duration: 250, easing: "easeOutCubic" },
            { id: "eid88", tween: [ "style", "${_higgsrightmouth}", "border-top-right-radius", [9.8750915527344,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [6.1658935546875,6.1658935546875]}], position: 0, duration: 500, easing: "easeInElastic" },
            { id: "eid118", tween: [ "style", "${_higgsrightmouth}", "border-top-right-radius", [9.6778564453125,9.6778564453125], { valueTemplate: '@@0@@px @@1@@px', fromValue: [9.8750915527344,0]}], position: 500, duration: 250, easing: "easeOutCubic" },
            { id: "eid150", tween: [ "style", "${_higgsrighteye}", "top", '154px', { fromValue: '161px'}], position: 0, duration: 500, easing: "easeInElastic" },
            { id: "eid151", tween: [ "style", "${_higgsrighteye}", "top", '161px', { fromValue: '154px'}], position: 500, duration: 250, easing: "easeOutCubic" },
            { id: "eid156", tween: [ "style", "${_higgsrighteye}", "top", '161px', { fromValue: '161px'}], position: 750, duration: 500, easing: "easeInElastic" },
            { id: "eid17", tween: [ "style", "${_RoundRect}", "left", '45px', { fromValue: '45px'}], position: 0, duration: 0 },
            { id: "eid159", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 155, easing: "easeOutCirc" },
            { id: "eid171", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 155, easing: "easeOutCirc" },
            { id: "eid34", tween: [ "style", "${_higgsmouth}", "height", '124px', { fromValue: '124px'}], position: 0, duration: 0 },
            { id: "eid22", tween: [ "style", "${_higgslefteye}", "width", '41px', { fromValue: '41px'}], position: 1250, duration: 0 },
            { id: "eid20", tween: [ "style", "${_higgsleftpupil}", "width", '16px', { fromValue: '16px'}], position: 1250, duration: 0 },
            { id: "eid129", tween: [ "color", "${_RoundRect}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 1081, duration: 0, easing: "easeOutCubic" },
            { id: "eid85", tween: [ "style", "${_higgsleftmouth}", "border-bottom-right-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [8.2607421875,8.2607421875]}], position: 0, duration: 500, easing: "easeInElastic" },
            { id: "eid115", tween: [ "style", "${_higgsleftmouth}", "border-bottom-right-radius", [15.754486083984,15.754486083984], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 500, duration: 250, easing: "easeOutCubic" },
            { id: "eid31", tween: [ "style", "${_higgslefteye}", "height", '36px', { fromValue: '36px'}], position: 1250, duration: 0 },
            { id: "eid39", tween: [ "style", "${_higgsmouth}", "top", '242px', { fromValue: '229px'}], position: 0, duration: 500, easing: "easeInElastic" },
            { id: "eid108", tween: [ "style", "${_higgsmouth}", "top", '229px', { fromValue: '242px'}], position: 500, duration: 250, easing: "easeOutCubic" },
            { id: "eid35", tween: [ "style", "${_higgshead}", "height", '240px', { fromValue: '240px'}], position: 0, duration: 0 },
            { id: "eid68", tween: [ "style", "${_higgsrightmouth}", "width", '15px', { fromValue: '16px'}], position: 0, duration: 500, easing: "easeInElastic" },
            { id: "eid106", tween: [ "style", "${_higgsrightmouth}", "width", '16px', { fromValue: '15px'}], position: 500, duration: 250, easing: "easeOutCubic" },
            { id: "eid15", tween: [ "style", "${_higgshead}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid66", tween: [ "style", "${_higgsrightmouth}", "height", '26px', { fromValue: '23px'}], position: 0, duration: 500, easing: "easeInElastic" },
            { id: "eid104", tween: [ "style", "${_higgsrightmouth}", "height", '23px', { fromValue: '26px'}], position: 500, duration: 250, easing: "easeOutCubic" },
            { id: "eid71", tween: [ "style", "${_RoundRect}", "top", '189px', { fromValue: '197px'}], position: 0, duration: 500, easing: "easeInElastic" },
            { id: "eid110", tween: [ "style", "${_RoundRect}", "top", '197px', { fromValue: '189px'}], position: 500, duration: 250, easing: "easeOutCubic" },
            { id: "eid161", tween: [ "style", "${_Ellipse}", "height", '70px', { fromValue: '27px'}], position: 1661, duration: 275, easing: "easeInQuad" },
            { id: "eid162", tween: [ "style", "${_Ellipse}", "height", '30px', { fromValue: '70px'}], position: 1936, duration: 234, easing: "easeOutCirc" },
            { id: "eid164", tween: [ "style", "${_Ellipse}", "height", '70px', { fromValue: '27px'}], position: 2426, duration: 275, easing: "easeInQuad" },
            { id: "eid165", tween: [ "style", "${_Ellipse}", "height", '30px', { fromValue: '70px'}], position: 2701, duration: 234, easing: "easeOutCirc" },
            { id: "eid152", tween: [ "style", "${_higgslefteye}", "top", '149px', { fromValue: '156px'}], position: 0, duration: 500, easing: "easeInElastic" },
            { id: "eid153", tween: [ "style", "${_higgslefteye}", "top", '156px', { fromValue: '149px'}], position: 500, duration: 250, easing: "easeOutCubic" },
            { id: "eid157", tween: [ "style", "${_higgslefteye}", "top", '156px', { fromValue: '156px'}], position: 750, duration: 500, easing: "easeInElastic" },
            { id: "eid29", tween: [ "style", "${_higgsleftpupil}", "height", '10px', { fromValue: '10px'}], position: 1250, duration: 0 },
            { id: "eid25", tween: [ "style", "${_higgsmouth}", "width", '258px', { fromValue: '258px'}], position: 0, duration: 0 },
            { id: "eid134", tween: [ "style", "${_higgslefteye}", "left", '112px', { fromValue: '112px'}], position: 0, duration: 0, easing: "easeInElastic" },
            { id: "eid7", tween: [ "style", "${_higgslefteye}", "left", '112px', { fromValue: '112px'}], position: 1250, duration: 0 },
            { id: "eid148", tween: [ "style", "${_higgsleftpupil}", "top", '162px', { fromValue: '169px'}], position: 0, duration: 500, easing: "easeInElastic" },
            { id: "eid149", tween: [ "style", "${_higgsleftpupil}", "top", '169px', { fromValue: '162px'}], position: 500, duration: 250, easing: "easeOutCubic" },
            { id: "eid133", tween: [ "style", "${_higgsleftpupil}", "top", '168px', { fromValue: '169px'}], position: 1250, duration: 155, easing: "easeOutCirc" },
            { id: "eid175", tween: [ "style", "${_higgsleftpupil}", "top", '169px', { fromValue: '168px'}], position: 2250, duration: 155, easing: "easeOutCirc" },
            { id: "eid84", tween: [ "style", "${_higgsleftmouth}", "border-top-right-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [8.2607421875,8.2607421875]}], position: 0, duration: 500, easing: "easeInElastic" },
            { id: "eid114", tween: [ "style", "${_higgsleftmouth}", "border-top-right-radius", [15.754486083984,15.754486083984], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 500, duration: 250, easing: "easeOutCubic" },
            { id: "eid140", tween: [ "style", "${_higgsrighteye}", "left", '155px', { fromValue: '155px'}], position: 0, duration: 0, easing: "easeInElastic" },
            { id: "eid5", tween: [ "style", "${_higgsrighteye}", "left", '155px', { fromValue: '155px'}], position: 1250, duration: 0 },
            { id: "eid26", tween: [ "style", "${_higgshead}", "width", '309px', { fromValue: '309px'}], position: 0, duration: 0 },
            { id: "eid32", tween: [ "style", "${_higgsleftmouth}", "height", '23px', { fromValue: '23px'}], position: 0, duration: 0 },
            { id: "eid21", tween: [ "style", "${_higgsrighteye}", "width", '32px', { fromValue: '32px'}], position: 1250, duration: 0 },
            { id: "eid89", tween: [ "style", "${_higgsrightmouth}", "border-bottom-right-radius", [9.8750915527344,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [6.1658935546875,6.1658935546875]}], position: 0, duration: 500, easing: "easeInElastic" },
            { id: "eid119", tween: [ "style", "${_higgsrightmouth}", "border-bottom-right-radius", [9.6778564453125,9.6778564453125], { valueTemplate: '@@0@@px @@1@@px', fromValue: [9.8750915527344,0]}], position: 500, duration: 250, easing: "easeOutCubic" },
            { id: "eid67", tween: [ "style", "${_higgsrightmouth}", "left", '249px', { fromValue: '248px'}], position: 0, duration: 500, easing: "easeInElastic" },
            { id: "eid105", tween: [ "style", "${_higgsrightmouth}", "left", '248px', { fromValue: '249px'}], position: 500, duration: 250, easing: "easeOutCubic" },
            { id: "eid146", tween: [ "style", "${_higgsrightpupil}", "top", '167px', { fromValue: '174px'}], position: 0, duration: 500, easing: "easeInElastic" },
            { id: "eid147", tween: [ "style", "${_higgsrightpupil}", "top", '174px', { fromValue: '167px'}], position: 500, duration: 250, easing: "easeOutCubic" },
            { id: "eid131", tween: [ "style", "${_higgsrightpupil}", "top", '173px', { fromValue: '174px'}], position: 1250, duration: 155, easing: "easeOutCirc" },
            { id: "eid173", tween: [ "style", "${_higgsrightpupil}", "top", '174px', { fromValue: '173px'}], position: 2250, duration: 155, easing: "easeOutCirc" },
            { id: "eid41", tween: [ "style", "${_higgsrightmouth}", "top", '229px', { fromValue: '229px'}], position: 0, duration: 0 }         ]
      }
   }
},
"bubble": {
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
      transform: [[0,0],[],[],['0.3283','0.3283']],
      id: 'higgsbubbleCopy',
      type: 'image',
      rect: ['-10px','-70px','208px','208px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/higgsbubble.png','0px','0px']
   },
   {
      transform: [[0,0],[],[],['0.31709','0.32171']],
      id: 'higgsbubbleCopy2',
      type: 'image',
      rect: ['-4px','39px','131px','131px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/higgsbubble.png','0px','0px']
   },
   {
      transform: [[0,0],[],[],['0.14426','0.14426']],
      id: 'higgsbubbleCopy3',
      type: 'image',
      rect: ['-89px','33px','208px','208px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/higgsbubble.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_higgsbubbleCopy}": [
            ["style", "top", '-70px'],
            ["transform", "scaleY", '0.3283'],
            ["style", "height", '208px'],
            ["transform", "scaleX", '0.3283'],
            ["style", "opacity", '0'],
            ["style", "left", '-10px'],
            ["style", "width", '208px']
         ],
         "${_higgsbubbleCopy2}": [
            ["style", "top", '39px'],
            ["transform", "scaleY", '0.32171'],
            ["style", "height", '131px'],
            ["transform", "scaleX", '0.31709'],
            ["style", "opacity", '0'],
            ["style", "left", '-4px'],
            ["style", "width", '131px']
         ],
         "${_higgsbubbleCopy3}": [
            ["style", "top", '33px'],
            ["transform", "scaleY", '0.14426'],
            ["style", "height", '208px'],
            ["transform", "scaleX", '0.14426'],
            ["style", "opacity", '0'],
            ["style", "left", '-89px'],
            ["style", "width", '208px']
         ],
         "${symbolSelector}": [
            ["style", "height", '152px'],
            ["style", "width", '128px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 764,
         autoPlay: true,
         timeline: [
            { id: "eid122", tween: [ "style", "${_higgsbubbleCopy3}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 29, easing: "easeOutCubic" },
            { id: "eid124", tween: [ "style", "${_higgsbubbleCopy3}", "opacity", '0', { fromValue: '1'}], position: 579, duration: 27, easing: "easeOutCubic" },
            { id: "eid125", tween: [ "style", "${_higgsbubbleCopy2}", "opacity", '1', { fromValue: '0'}], position: 579, duration: 29, easing: "easeOutCubic" },
            { id: "eid126", tween: [ "style", "${_higgsbubbleCopy2}", "opacity", '0', { fromValue: '1'}], position: 658, duration: 27, easing: "easeOutCubic" },
            { id: "eid127", tween: [ "style", "${_higgsbubbleCopy}", "opacity", '1', { fromValue: '0'}], position: 658, duration: 29, easing: "easeOutCubic" },
            { id: "eid128", tween: [ "style", "${_higgsbubbleCopy}", "opacity", '0', { fromValue: '1'}], position: 737, duration: 27, easing: "easeOutCubic" }         ]
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
})(jQuery, AdobeEdge, "EDGE-4827471");
