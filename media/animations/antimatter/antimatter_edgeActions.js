/***********************
* Adobe Edge Animate-Aktionen für Composition
*
* Bearbeiten Sie diese Datei mit Vorsicht. Achten Sie darauf, dass 
* Funktionssignaturen und Kommentare, die mit „Edge“ anfangen, beibehalten werden, 
* damit Sie mit diesen Aktionen weiterhin in Adobe Edge Animate interagieren können.
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // Aliase für häufig verwendete Edge-Klassen

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27403, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'antimatter'
   (function(symbolName) {   
   
   })("antimatter");
   //Edge symbol end:'antimatter'

})(jQuery, AdobeEdge, "EDGE-10582978");