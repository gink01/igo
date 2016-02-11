define(['outil'], function(Outil) {
    function OutilZoomRectangle_cptaq(options){
        this.options = options || {};
    };

    OutilZoomRectangle_cptaq.prototype = new Outil();
    OutilZoomRectangle_cptaq.prototype.constructor = OutilZoomRectangle;
    
    OutilZoomRectangle_cptaq.prototype._init = function() {
        if (this.options.type == 'avant') {
            var oZoomBoxCtrl = new OpenLayers.Control.ZoomBox();
            this.defautOptions = $.extend({},this.defautOptions, {
                controle: oZoomBoxCtrl,
                icone: 'zoomin',
                id: 'idZoomBoxIn',
                groupe: 'carte',
                infobulle: 'Zoom avant: cliquer sur la carte ou utiliser le bouton ' +
                         'gauche de la souris et déplacer pour former un rectangle de zoom'
            });
        } else {
            var oZoomBoxOutCtrl = new OpenLayers.Control.ZoomBox({out: true});
            this.defautOptions = $.extend({},this.defautOptions, {
                controle: oZoomBoxOutCtrl,
                icone: 'zoomout',
                id: 'idZoomBoxOut',
                groupe: 'carte',
                infobulle: 'Zoom arrière: cliquer sur la carte ou utiliser le bouton ' +
                         'gauche de la souris et déplacer pour former un rectangle de zoom'
            });
        }
        this.defautOptions._allowDepress = true;
        Outil.prototype._init.call(this);
    };

    return OutilZoomRectangle_cptaq;
    
});

