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
            id:'electron_neutrino',
            type:'rect',
            rect:['146','68','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'electron_neutrino',
            symbolName:'electron_neutrino'
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
         "${_electron_neutrino}": [
            ["transform", "scaleX", '0.68677'],
            ["style", "left", '63px'],
            ["transform", "scaleY", '0.68677'],
            ["style", "top", '50px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 12350,
         autoPlay: true,
         timeline: [
            { id: "eid571", tween: [ "transform", "${_electron_neutrino}", "scaleY", '0.68677', { fromValue: '0.68677'}], position: 3541, duration: 0, easing: "easeInQuad" },
            { id: "eid570", tween: [ "transform", "${_electron_neutrino}", "scaleX", '0.68677', { fromValue: '0.68677'}], position: 3541, duration: 0, easing: "easeInQuad" },
            { id: "eid576", tween: [ "style", "${_electron_neutrino}", "top", '50px', { fromValue: '50px'}], position: 3541, duration: 0, easing: "easeInQuad" },
            { id: "eid574", tween: [ "style", "${_electron_neutrino}", "left", '63px', { fromValue: '63px'}], position: 3541, duration: 0, easing: "easeInQuad" },
            { id: "eid577", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_electron_neutrino}', [] ], ""], position: 6207 }         ]
      }
   }
},
"electron_neutrino": {
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
      id: 'Group',
      type: 'group',
      rect: ['0px','0px','295','300','auto','auto'],
      c: [
      {
         id: 'eneubody',
         type: 'image',
         rect: ['0px','107px','250px','193px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/eneubody.png','0px','0px']
      },
      {
         id: 'eneuhead',
         type: 'image',
         rect: ['114px','0px','135px','93px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/eneuhead.png','0px','0px']
      },
      {
         id: 'eneumask',
         type: 'image',
         rect: ['65px','37px','230px','133px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/eneumask.png','0px','0px']
      },
      {
         id: 'eneuleftiris',
         type: 'image',
         rect: ['111px','94px','37px','35px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/eneuleftiris.png','0px','0px']
      },
      {
         id: 'eneuleftpupil',
         type: 'image',
         rect: ['131px','113px','10px','10px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/eneuleftpupil.png','0px','0px']
      },
      {
         id: 'eneurightiris',
         type: 'image',
         rect: ['176px','113px','40px','33px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/eneurightiris.png','0px','0px']
      },
      {
         id: 'eneurightpupil',
         type: 'image',
         rect: ['182px','128px','11px','9px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/eneurightpupil.png','0px','0px']
      }]
   },
   {
      rect: ['163px','88px','83px','14px','auto','auto'],
      borderRadius: ['10px','10px','10px','0px'],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(151,173,180,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_eneuleftiris}": [
            ["style", "top", '96px'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '111px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_eneumask}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '37px'],
            ["style", "left", '65px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_RoundRect2}": [
            ["color", "background-color", 'rgba(151,173,180,1.00)'],
            ["transform", "rotateZ", '28deg'],
            ["style", "opacity", '0'],
            ["style", "left", '97px'],
            ["style", "width", '77px'],
            ["style", "top", '74px'],
            ["style", "border-bottom-left-radius", [126,126], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '0.40312'],
            ["style", "height", '1px'],
            ["style", "border-bottom-right-radius", [22,22], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Group}": [
            ["style", "top", '0px'],
            ["style", "height", '300px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "-webkit-transform-origin", [8.18,62.07], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [8.18,62.07],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [8.18,62.07],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [8.18,62.07],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [8.18,62.07],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "width", '295px']
         ],
         "${_eneurightpupil}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '128px'],
            ["style", "left", '182px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '300px'],
            ["style", "width", '295px']
         ],
         "${_eneuleftpupil}": [
            ["style", "top", '116px'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '131px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_eneubody}": [
            ["style", "top", '107px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_eneurightiris}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '113px'],
            ["style", "left", '176px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_eneuhead}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '114px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6066,
         autoPlay: true,
         timeline: [
            { id: "eid355", tween: [ "style", "${_RoundRect2}", "height", '153px', { fromValue: '1px'}], position: 5566, duration: 250, easing: "easeInQuad" },
            { id: "eid359", tween: [ "style", "${_RoundRect2}", "height", '2px', { fromValue: '153px'}], position: 5816, duration: 250, easing: "easeInQuad" },
            { id: "eid186", tween: [ "style", "${_eneurightiris}", "-webkit-transform-origin", [-28.12,22.03], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid578", tween: [ "style", "${_eneurightiris}", "-moz-transform-origin", [-28.12,22.03], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid579", tween: [ "style", "${_eneurightiris}", "-ms-transform-origin", [-28.12,22.03], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid580", tween: [ "style", "${_eneurightiris}", "msTransformOrigin", [-28.12,22.03], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid581", tween: [ "style", "${_eneurightiris}", "-o-transform-origin", [-28.12,22.03], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid356", tween: [ "style", "${_RoundRect2}", "top", '25px', { fromValue: '74px'}], position: 5566, duration: 250, easing: "easeInQuad" },
            { id: "eid360", tween: [ "style", "${_RoundRect2}", "top", '73px', { fromValue: '25px'}], position: 5816, duration: 250, easing: "easeInQuad" },
            { id: "eid188", tween: [ "style", "${_eneuleftpupil}", "-webkit-transform-origin", [337.52,42.7], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid582", tween: [ "style", "${_eneuleftpupil}", "-moz-transform-origin", [337.52,42.7], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid583", tween: [ "style", "${_eneuleftpupil}", "-ms-transform-origin", [337.52,42.7], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid584", tween: [ "style", "${_eneuleftpupil}", "msTransformOrigin", [337.52,42.7], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid585", tween: [ "style", "${_eneuleftpupil}", "-o-transform-origin", [337.52,42.7], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid357", tween: [ "style", "${_RoundRect2}", "left", '82px', { fromValue: '97px'}], position: 5566, duration: 250, easing: "easeInQuad" },
            { id: "eid361", tween: [ "style", "${_RoundRect2}", "left", '96px', { fromValue: '82px'}], position: 5816, duration: 250, easing: "easeInQuad" },
            { id: "eid198", tween: [ "transform", "${_eneuleftpupil}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1330, duration: 0 },
            { id: "eid202", tween: [ "transform", "${_eneuleftpupil}", "rotateZ", '720deg', { fromValue: '0deg'}], position: 1898, duration: 1330, easing: "easeInOutElastic" },
            { id: "eid307", tween: [ "style", "${_RoundRect2}", "opacity", '1', { fromValue: '0'}], position: 5500, duration: 66, easing: "easeInOutElastic" },
            { id: "eid185", tween: [ "style", "${_eneumask}", "-webkit-transform-origin", [43.37,62.61], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid586", tween: [ "style", "${_eneumask}", "-moz-transform-origin", [43.37,62.61], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid587", tween: [ "style", "${_eneumask}", "-ms-transform-origin", [43.37,62.61], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid588", tween: [ "style", "${_eneumask}", "msTransformOrigin", [43.37,62.61], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid589", tween: [ "style", "${_eneumask}", "-o-transform-origin", [43.37,62.61], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid166", tween: [ "style", "${_eneuhead}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid170", tween: [ "style", "${_eneuhead}", "opacity", '0', { fromValue: '1'}], position: 1330, duration: 568 },
            { id: "eid257", tween: [ "style", "${_eneuhead}", "opacity", '1', { fromValue: '0'}], position: 2806, duration: 632, easing: "easeInOutElastic" },
            { id: "eid187", tween: [ "style", "${_eneurightpupil}", "-webkit-transform-origin", [-156.8,-85.89], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid590", tween: [ "style", "${_eneurightpupil}", "-moz-transform-origin", [-156.8,-85.89], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid591", tween: [ "style", "${_eneurightpupil}", "-ms-transform-origin", [-156.8,-85.89], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid592", tween: [ "style", "${_eneurightpupil}", "msTransformOrigin", [-156.8,-85.89], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid593", tween: [ "style", "${_eneurightpupil}", "-o-transform-origin", [-156.8,-85.89], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid167", tween: [ "style", "${_eneubody}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid171", tween: [ "style", "${_eneubody}", "opacity", '0', { fromValue: '1'}], position: 1330, duration: 568 },
            { id: "eid256", tween: [ "style", "${_eneubody}", "opacity", '1', { fromValue: '0'}], position: 2806, duration: 632, easing: "easeInOutElastic" },
            { id: "eid197", tween: [ "transform", "${_eneurightpupil}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1330, duration: 0 },
            { id: "eid200", tween: [ "transform", "${_eneurightpupil}", "rotateZ", '720deg', { fromValue: '0deg'}], position: 1898, duration: 1330, easing: "easeInOutElastic" },
            { id: "eid199", tween: [ "transform", "${_eneumask}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1330, duration: 0 },
            { id: "eid203", tween: [ "transform", "${_eneumask}", "rotateZ", '720deg', { fromValue: '0deg'}], position: 1898, duration: 1330, easing: "easeInOutElastic" },
            { id: "eid189", tween: [ "style", "${_eneuleftiris}", "-webkit-transform-origin", [145.28,69.34], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid594", tween: [ "style", "${_eneuleftiris}", "-moz-transform-origin", [145.28,69.34], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid595", tween: [ "style", "${_eneuleftiris}", "-ms-transform-origin", [145.28,69.34], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid596", tween: [ "style", "${_eneuleftiris}", "msTransformOrigin", [145.28,69.34], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid597", tween: [ "style", "${_eneuleftiris}", "-o-transform-origin", [145.28,69.34], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1330, duration: 568 },
            { id: "eid195", tween: [ "transform", "${_eneurightiris}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1330, duration: 0 },
            { id: "eid201", tween: [ "transform", "${_eneurightiris}", "rotateZ", '720deg', { fromValue: '0deg'}], position: 1898, duration: 1330, easing: "easeInOutElastic" },
            { id: "eid196", tween: [ "transform", "${_eneuleftiris}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1330, duration: 0 },
            { id: "eid205", tween: [ "transform", "${_eneuleftiris}", "rotateZ", '720deg', { fromValue: '0deg'}], position: 1898, duration: 1330, easing: "easeInOutElastic" }         ]
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
})(jQuery, AdobeEdge, "EDGE-7171848");
