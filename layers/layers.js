ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:7851").setExtent([481341.769038, 8046836.282909, 526777.466588, 8077852.268064]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Contours15m_1 = new ol.format.GeoJSON();
var features_Contours15m_1 = format_Contours15m_1.readFeatures(json_Contours15m_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_Contours15m_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contours15m_1.addFeatures(features_Contours15m_1);
var lyr_Contours15m_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contours15m_1, 
                style: style_Contours15m_1,
                popuplayertitle: "Contours (15m)",
                interactive: true,
                title: '<img src="styles/legend/Contours15m_1.png" /> Contours (15m)'
            });
var format_Roads_2 = new ol.format.GeoJSON();
var features_Roads_2 = format_Roads_2.readFeatures(json_Roads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_Roads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_2.addFeatures(features_Roads_2);
var lyr_Roads_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_2, 
                style: style_Roads_2,
                popuplayertitle: "Roads",
                interactive: false,
                title: '<img src="styles/legend/Roads_2.png" /> Roads'
            });
var format_DisturbanceOutline_3 = new ol.format.GeoJSON();
var features_DisturbanceOutline_3 = format_DisturbanceOutline_3.readFeatures(json_DisturbanceOutline_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_DisturbanceOutline_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DisturbanceOutline_3.addFeatures(features_DisturbanceOutline_3);
var lyr_DisturbanceOutline_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DisturbanceOutline_3, 
                style: style_DisturbanceOutline_3,
                popuplayertitle: "Disturbance Outline",
                interactive: false,
                title: '<img src="styles/legend/DisturbanceOutline_3.png" /> Disturbance Outline'
            });
var format_Localities_4 = new ol.format.GeoJSON();
var features_Localities_4 = format_Localities_4.readFeatures(json_Localities_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_Localities_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localities_4.addFeatures(features_Localities_4);
var lyr_Localities_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localities_4, 
                style: style_Localities_4,
                popuplayertitle: "Localities",
                interactive: true,
                title: '<img src="styles/legend/Localities_4.png" /> Localities'
            });
var format_HelicopterLandingLocations_5 = new ol.format.GeoJSON();
var features_HelicopterLandingLocations_5 = format_HelicopterLandingLocations_5.readFeatures(json_HelicopterLandingLocations_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_HelicopterLandingLocations_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HelicopterLandingLocations_5.addFeatures(features_HelicopterLandingLocations_5);
var lyr_HelicopterLandingLocations_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HelicopterLandingLocations_5, 
                style: style_HelicopterLandingLocations_5,
                popuplayertitle: "Helicopter Landing Locations",
                interactive: true,
                title: '<img src="styles/legend/HelicopterLandingLocations_5.png" /> Helicopter Landing Locations'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Contours15m_1.setVisible(true);lyr_Roads_2.setVisible(true);lyr_DisturbanceOutline_3.setVisible(true);lyr_Localities_4.setVisible(true);lyr_HelicopterLandingLocations_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Contours15m_1,lyr_Roads_2,lyr_DisturbanceOutline_3,lyr_Localities_4,lyr_HelicopterLandingLocations_5];
lyr_Contours15m_1.set('fieldAliases', {'fid': 'fid', 'zvalue': 'zvalue', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_Roads_2.set('fieldAliases', {'name': 'name', 'type': 'type', 'project': 'project', 'length': 'length', 'display': 'display', 'id': 'id', });
lyr_DisturbanceOutline_3.set('fieldAliases', {'id': 'id', 'name': 'name', 'permit number': 'permit number', 'land use': 'land use', 'description': 'description', 'tenement': 'tenement', 'date cleared': 'date cleared', 'mrf category': 'mrf category', 'area (ha)': 'area (ha)', 'layer': 'layer', 'path': 'path', });
lyr_Localities_4.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_HelicopterLandingLocations_5.set('fieldAliases', {'id_0': 'id_0', 'Name': 'Name', 'id': 'id', });
lyr_Contours15m_1.set('fieldImages', {'fid': 'TextEdit', 'zvalue': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_Roads_2.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', 'project': 'TextEdit', 'length': 'TextEdit', 'display': '', 'id': 'TextEdit', });
lyr_DisturbanceOutline_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'permit number': 'TextEdit', 'land use': 'TextEdit', 'description': 'TextEdit', 'tenement': 'TextEdit', 'date cleared': 'DateTime', 'mrf category': 'TextEdit', 'area (ha)': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Localities_4.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_HelicopterLandingLocations_5.set('fieldImages', {'id_0': 'TextEdit', 'Name': 'TextEdit', 'id': 'Range', });
lyr_Contours15m_1.set('fieldLabels', {'fid': 'no label', 'zvalue': 'no label', });
lyr_Roads_2.set('fieldLabels', {'name': 'no label', 'type': 'no label', 'project': 'no label', 'length': 'no label', 'display': 'no label', 'id': 'no label', });
lyr_DisturbanceOutline_3.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'permit number': 'no label', 'land use': 'no label', 'description': 'no label', 'tenement': 'no label', 'date cleared': 'no label', 'mrf category': 'no label', 'area (ha)': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Localities_4.set('fieldLabels', {'fid': 'hidden field', 'name': 'header label - always visible', });
lyr_HelicopterLandingLocations_5.set('fieldLabels', {'id_0': 'hidden field', 'Name': 'header label - always visible', 'id': 'hidden field', });
lyr_HelicopterLandingLocations_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});