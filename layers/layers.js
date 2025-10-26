var wms_layers = [];

var format_Aruvikkara_0 = new ol.format.GeoJSON();
var features_Aruvikkara_0 = format_Aruvikkara_0.readFeatures(json_Aruvikkara_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aruvikkara_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aruvikkara_0.addFeatures(features_Aruvikkara_0);
var lyr_Aruvikkara_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aruvikkara_0, 
                style: style_Aruvikkara_0,
                popuplayertitle: 'Aruvikkara',
                interactive: true,
                title: '<img src="styles/legend/Aruvikkara_0.png" /> Aruvikkara'
            });
var format_Aruvikkaralines_1 = new ol.format.GeoJSON();
var features_Aruvikkaralines_1 = format_Aruvikkaralines_1.readFeatures(json_Aruvikkaralines_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aruvikkaralines_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aruvikkaralines_1.addFeatures(features_Aruvikkaralines_1);
var lyr_Aruvikkaralines_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aruvikkaralines_1, 
                style: style_Aruvikkaralines_1,
                popuplayertitle: 'Aruvikkara lines',
                interactive: true,
                title: '<img src="styles/legend/Aruvikkaralines_1.png" /> Aruvikkara lines'
            });
var format_aruvikkarapoints_2 = new ol.format.GeoJSON();
var features_aruvikkarapoints_2 = format_aruvikkarapoints_2.readFeatures(json_aruvikkarapoints_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aruvikkarapoints_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aruvikkarapoints_2.addFeatures(features_aruvikkarapoints_2);
var lyr_aruvikkarapoints_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aruvikkarapoints_2, 
                style: style_aruvikkarapoints_2,
                popuplayertitle: 'aruvikkara points',
                interactive: true,
    title: 'aruvikkara points<br />\
    <img src="styles/legend/aruvikkarapoints_2_0.png" /> Akshaya Centre<br />\
    <img src="styles/legend/aruvikkarapoints_2_1.png" />  Dam<br />\
    <img src="styles/legend/aruvikkarapoints_2_2.png" /> Police Station<br />\
    <img src="styles/legend/aruvikkarapoints_2_3.png" /> Grama Panchayat<br />\
    <img src="styles/legend/aruvikkarapoints_2_4.png" /> Water Authority<br />' });
var format_MainRoad_3 = new ol.format.GeoJSON();
var features_MainRoad_3 = format_MainRoad_3.readFeatures(json_MainRoad_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MainRoad_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MainRoad_3.addFeatures(features_MainRoad_3);
var lyr_MainRoad_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MainRoad_3, 
                style: style_MainRoad_3,
                popuplayertitle: 'MainRoad',
                interactive: true,
                title: '<img src="styles/legend/MainRoad_3.png" /> MainRoad'
            });

lyr_Aruvikkara_0.setVisible(true);lyr_Aruvikkaralines_1.setVisible(true);lyr_aruvikkarapoints_2.setVisible(true);lyr_MainRoad_3.setVisible(true);
var layersList = [lyr_Aruvikkara_0,lyr_Aruvikkaralines_1,lyr_aruvikkarapoints_2,lyr_MainRoad_3];
lyr_Aruvikkara_0.set('fieldAliases', {'admin_level': 'admin_level', 'boundary': 'boundary', 'local_authority:IN': 'local_authority:IN', 'name': 'name', 'name:ml': 'name:ml', 'type': 'type', 'wikidata': 'wikidata', });
lyr_Aruvikkaralines_1.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_aruvikkarapoints_2.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', 'code': 'code', });
lyr_MainRoad_3.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'other_tags': 'other_tags', });
lyr_Aruvikkara_0.set('fieldImages', {'admin_level': 'TextEdit', 'boundary': 'TextEdit', 'local_authority:IN': 'TextEdit', 'name': 'TextEdit', 'name:ml': 'TextEdit', 'type': 'TextEdit', 'wikidata': 'TextEdit', });
lyr_Aruvikkaralines_1.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'railway': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_aruvikkarapoints_2.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'barrier': 'TextEdit', 'highway': 'TextEdit', 'ref': 'TextEdit', 'address': 'TextEdit', 'is_in': 'TextEdit', 'place': 'TextEdit', 'man_made': 'TextEdit', 'other_tags': 'TextEdit', 'code': 'Range', });
lyr_MainRoad_3.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_Aruvikkara_0.set('fieldLabels', {'admin_level': 'no label', 'boundary': 'no label', 'local_authority:IN': 'no label', 'name': 'no label', 'name:ml': 'no label', 'type': 'no label', 'wikidata': 'no label', });
lyr_Aruvikkaralines_1.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'highway': 'inline label - always visible', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_aruvikkarapoints_2.set('fieldLabels', {'osm_id': 'no label', 'name': 'inline label - always visible', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', 'code': 'no label', });
lyr_MainRoad_3.set('fieldLabels', {'osm_id': 'no label', 'name': 'inline label - always visible', 'type': 'no label', 'other_tags': 'no label', });
lyr_MainRoad_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});