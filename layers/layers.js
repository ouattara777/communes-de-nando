var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_COM_NANDO_1 = new ol.format.GeoJSON();
var features_COM_NANDO_1 = format_COM_NANDO_1.readFeatures(json_COM_NANDO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COM_NANDO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COM_NANDO_1.addFeatures(features_COM_NANDO_1);
var lyr_COM_NANDO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COM_NANDO_1, 
                style: style_COM_NANDO_1,
                popuplayertitle: 'COM_NANDO',
                interactive: true,
    title: 'COM_NANDO<br />\
    <img src="styles/legend/COM_NANDO_1_0.png" /> 32 - 100<br />\
    <img src="styles/legend/COM_NANDO_1_1.png" /> 100 - 168<br />\
    <img src="styles/legend/COM_NANDO_1_2.png" /> 168 - 236<br />\
    <img src="styles/legend/COM_NANDO_1_3.png" /> 236 - 304<br />\
    <img src="styles/legend/COM_NANDO_1_4.png" /> 304 - 371<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_COM_NANDO_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_COM_NANDO_1];
lyr_COM_NANDO_1.set('fieldAliases', {'COUNTRY': 'COUNTRY', 'NAME_3': 'NAME_3', 'Classeur_1': 'Classeur_1', 'sup_km²': 'sup_km²', 'densite': 'densite', });
lyr_COM_NANDO_1.set('fieldImages', {'COUNTRY': 'TextEdit', 'NAME_3': 'TextEdit', 'Classeur_1': 'TextEdit', 'sup_km²': 'TextEdit', 'densite': 'TextEdit', });
lyr_COM_NANDO_1.set('fieldLabels', {'COUNTRY': 'no label', 'NAME_3': 'no label', 'Classeur_1': 'no label', 'sup_km²': 'no label', 'densite': 'inline label - always visible', });
lyr_COM_NANDO_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});