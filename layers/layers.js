var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_municipio_1 = new ol.format.GeoJSON();
var features_municipio_1 = format_municipio_1.readFeatures(json_municipio_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_municipio_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_municipio_1.addFeatures(features_municipio_1);
var lyr_municipio_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_municipio_1, 
                style: style_municipio_1,
                popuplayertitle: 'municipio',
                interactive: true,
                title: '<img src="styles/legend/municipio_1.png" /> municipio'
            });
var format_resguardos_2 = new ol.format.GeoJSON();
var features_resguardos_2 = format_resguardos_2.readFeatures(json_resguardos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_resguardos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_resguardos_2.addFeatures(features_resguardos_2);
var lyr_resguardos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_resguardos_2, 
                style: style_resguardos_2,
                popuplayertitle: 'resguardos',
                interactive: true,
    title: 'resguardos<br />\
    <img src="styles/legend/resguardos_2_0.png" /> Chiles<br />\
    <img src="styles/legend/resguardos_2_1.png" /> Cumbal<br />\
    <img src="styles/legend/resguardos_2_2.png" /> Mayasquer<br />\
    <img src="styles/legend/resguardos_2_3.png" /> Miraflores<br />\
    <img src="styles/legend/resguardos_2_4.png" /> Panan<br />\
    <img src="styles/legend/resguardos_2_5.png" /> San Juan<br />\
    <img src="styles/legend/resguardos_2_6.png" /> <br />'
        });
var format_cabecera_municipal_3 = new ol.format.GeoJSON();
var features_cabecera_municipal_3 = format_cabecera_municipal_3.readFeatures(json_cabecera_municipal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cabecera_municipal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cabecera_municipal_3.addFeatures(features_cabecera_municipal_3);
var lyr_cabecera_municipal_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cabecera_municipal_3, 
                style: style_cabecera_municipal_3,
                popuplayertitle: 'cabecera_municipal',
                interactive: true,
                title: '<img src="styles/legend/cabecera_municipal_3.png" /> cabecera_municipal'
            });
var format_vias_4 = new ol.format.GeoJSON();
var features_vias_4 = format_vias_4.readFeatures(json_vias_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vias_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vias_4.addFeatures(features_vias_4);
var lyr_vias_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vias_4, 
                style: style_vias_4,
                popuplayertitle: 'vias',
                interactive: true,
                title: '<img src="styles/legend/vias_4.png" /> vias'
            });
var format_sitios_religiosos_espirituales_5 = new ol.format.GeoJSON();
var features_sitios_religiosos_espirituales_5 = format_sitios_religiosos_espirituales_5.readFeatures(json_sitios_religiosos_espirituales_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sitios_religiosos_espirituales_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sitios_religiosos_espirituales_5.addFeatures(features_sitios_religiosos_espirituales_5);
var lyr_sitios_religiosos_espirituales_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sitios_religiosos_espirituales_5, 
                style: style_sitios_religiosos_espirituales_5,
                popuplayertitle: 'sitios_religiosos_espirituales',
                interactive: true,
                title: '<img src="styles/legend/sitios_religiosos_espirituales_5.png" /> sitios_religiosos_espirituales'
            });
var format_sitios_gastronomicos_6 = new ol.format.GeoJSON();
var features_sitios_gastronomicos_6 = format_sitios_gastronomicos_6.readFeatures(json_sitios_gastronomicos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sitios_gastronomicos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sitios_gastronomicos_6.addFeatures(features_sitios_gastronomicos_6);
var lyr_sitios_gastronomicos_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sitios_gastronomicos_6, 
                style: style_sitios_gastronomicos_6,
                popuplayertitle: 'sitios_gastronomicos',
                interactive: true,
                title: '<img src="styles/legend/sitios_gastronomicos_6.png" /> sitios_gastronomicos'
            });
var format_sitios_culturales_7 = new ol.format.GeoJSON();
var features_sitios_culturales_7 = format_sitios_culturales_7.readFeatures(json_sitios_culturales_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sitios_culturales_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sitios_culturales_7.addFeatures(features_sitios_culturales_7);
var lyr_sitios_culturales_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sitios_culturales_7, 
                style: style_sitios_culturales_7,
                popuplayertitle: 'sitios_culturales',
                interactive: true,
                title: '<img src="styles/legend/sitios_culturales_7.png" /> sitios_culturales'
            });
var format_atractivos_turisticos_8 = new ol.format.GeoJSON();
var features_atractivos_turisticos_8 = format_atractivos_turisticos_8.readFeatures(json_atractivos_turisticos_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_atractivos_turisticos_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_atractivos_turisticos_8.addFeatures(features_atractivos_turisticos_8);
var lyr_atractivos_turisticos_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_atractivos_turisticos_8, 
                style: style_atractivos_turisticos_8,
                popuplayertitle: 'atractivos_turisticos',
                interactive: true,
                title: '<img src="styles/legend/atractivos_turisticos_8.png" /> atractivos_turisticos'
            });
var format_alojamientos_9 = new ol.format.GeoJSON();
var features_alojamientos_9 = format_alojamientos_9.readFeatures(json_alojamientos_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alojamientos_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_alojamientos_9.addFeatures(features_alojamientos_9);
var lyr_alojamientos_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_alojamientos_9, 
                style: style_alojamientos_9,
                popuplayertitle: 'alojamientos',
                interactive: true,
                title: '<img src="styles/legend/alojamientos_9.png" /> alojamientos'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_municipio_1.setVisible(true);lyr_resguardos_2.setVisible(true);lyr_cabecera_municipal_3.setVisible(true);lyr_vias_4.setVisible(true);lyr_sitios_religiosos_espirituales_5.setVisible(true);lyr_sitios_gastronomicos_6.setVisible(true);lyr_sitios_culturales_7.setVisible(true);lyr_atractivos_turisticos_8.setVisible(true);lyr_alojamientos_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_municipio_1,lyr_resguardos_2,lyr_cabecera_municipal_3,lyr_vias_4,lyr_sitios_religiosos_espirituales_5,lyr_sitios_gastronomicos_6,lyr_sitios_culturales_7,lyr_atractivos_turisticos_8,lyr_alojamientos_9];
lyr_municipio_1.set('fieldAliases', {'gid': 'gid', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'nombre': 'nombre', 'area': 'area', 'poblacion': 'poblacion', 'departamen': 'departamen', 'codigo_mun': 'codigo_mun', });
lyr_resguardos_2.set('fieldAliases', {'gid': 'gid', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'nombre': 'nombre', 'area': 'area', 'perimetro': 'perimetro', 'codigo': 'codigo', 'cod_mun': 'cod_mun', });
lyr_cabecera_municipal_3.set('fieldAliases', {'gid': 'gid', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'nombre': 'nombre', 'area': 'area', 'codigo': 'codigo', 'cod_mun': 'cod_mun', });
lyr_vias_4.set('fieldAliases', {'gid': 'gid', 'shape_leng': 'shape_leng', 'nombre': 'nombre', 'longitud': 'longitud', 'municipio': 'municipio', 'estado': 'estado', 'codigo': 'codigo', 'jerarquia': 'jerarquia', });
lyr_sitios_religiosos_espirituales_5.set('fieldAliases', {'gid': 'gid', 'nombre': 'nombre', 'patrimonio': 'patrimonio', 'estado': 'estado', 'capacidad': 'capacidad', 'resguardo': 'resguardo', 'codigo': 'codigo', 'cod_resg': 'cod_resg', 'tipo': 'tipo', });
lyr_sitios_gastronomicos_6.set('fieldAliases', {'gid': 'gid', 'nombre': 'nombre', 'especialid': 'especialid', 'costo': 'costo', 'direccion': 'direccion', 'telefono': 'telefono', 'capacidad': 'capacidad', 'resguardo': 'resguardo', 'codigo': 'codigo', 'tipo': 'tipo', 'cod_resg': 'cod_resg', });
lyr_sitios_culturales_7.set('fieldAliases', {'gid': 'gid', 'nombre': 'nombre', 'capacidad': 'capacidad', 'estado': 'estado', 'patrimonio': 'patrimonio', 'resguardo': 'resguardo', 'codigo': 'codigo', 'tipo': 'tipo', 'cod_resg': 'cod_resg', });
lyr_atractivos_turisticos_8.set('fieldAliases', {'gid': 'gid', 'nombre': 'nombre', 'resguardo': 'resguardo', 'accecibili': 'accecibili', 'codigo': 'codigo', 'tipo': 'tipo', 'cod_resg': 'cod_resg', });
lyr_alojamientos_9.set('fieldAliases', {'gid': 'gid', 'nombre': 'nombre', 'celular': 'celular', 'capacidad': 'capacidad', 'codigo': 'codigo', 'tipo': 'tipo', 'resguardo': 'resguardo', 'cod_resg': 'cod_resg', });
lyr_municipio_1.set('fieldImages', {'gid': '', 'shape_leng': '', 'shape_area': '', 'nombre': '', 'area': '', 'poblacion': '', 'departamen': '', 'codigo_mun': '', });
lyr_resguardos_2.set('fieldImages', {'gid': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'nombre': 'TextEdit', 'area': 'TextEdit', 'perimetro': 'TextEdit', 'codigo': 'TextEdit', 'cod_mun': 'TextEdit', });
lyr_cabecera_municipal_3.set('fieldImages', {'gid': '', 'shape_leng': '', 'shape_area': '', 'nombre': '', 'area': '', 'codigo': '', 'cod_mun': '', });
lyr_vias_4.set('fieldImages', {'gid': 'TextEdit', 'shape_leng': 'TextEdit', 'nombre': 'TextEdit', 'longitud': 'TextEdit', 'municipio': 'TextEdit', 'estado': 'TextEdit', 'codigo': 'TextEdit', 'jerarquia': 'TextEdit', });
lyr_sitios_religiosos_espirituales_5.set('fieldImages', {'gid': 'TextEdit', 'nombre': 'TextEdit', 'patrimonio': 'TextEdit', 'estado': 'TextEdit', 'capacidad': 'TextEdit', 'resguardo': 'TextEdit', 'codigo': 'Range', 'cod_resg': 'TextEdit', 'tipo': 'TextEdit', });
lyr_sitios_gastronomicos_6.set('fieldImages', {'gid': 'TextEdit', 'nombre': 'TextEdit', 'especialid': 'TextEdit', 'costo': 'TextEdit', 'direccion': 'TextEdit', 'telefono': 'TextEdit', 'capacidad': 'TextEdit', 'resguardo': 'TextEdit', 'codigo': 'Range', 'tipo': 'TextEdit', 'cod_resg': 'TextEdit', });
lyr_sitios_culturales_7.set('fieldImages', {'gid': 'TextEdit', 'nombre': 'TextEdit', 'capacidad': 'TextEdit', 'estado': 'TextEdit', 'patrimonio': 'TextEdit', 'resguardo': 'TextEdit', 'codigo': 'Range', 'tipo': 'TextEdit', 'cod_resg': 'TextEdit', });
lyr_atractivos_turisticos_8.set('fieldImages', {'gid': 'TextEdit', 'nombre': 'TextEdit', 'resguardo': 'TextEdit', 'accecibili': 'TextEdit', 'codigo': 'Range', 'tipo': 'TextEdit', 'cod_resg': 'TextEdit', });
lyr_alojamientos_9.set('fieldImages', {'gid': 'TextEdit', 'nombre': 'TextEdit', 'celular': 'TextEdit', 'capacidad': 'TextEdit', 'codigo': 'Range', 'tipo': 'TextEdit', 'resguardo': 'TextEdit', 'cod_resg': 'TextEdit', });
lyr_municipio_1.set('fieldLabels', {'gid': 'hidden field', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', 'nombre': 'inline label - always visible', 'area': 'hidden field', 'poblacion': 'inline label - always visible', 'departamen': 'inline label - always visible', 'codigo_mun': 'inline label - always visible', });
lyr_resguardos_2.set('fieldLabels', {'gid': 'hidden field', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', 'nombre': 'inline label - always visible', 'area': 'hidden field', 'perimetro': 'hidden field', 'codigo': 'inline label - always visible', 'cod_mun': 'hidden field', });
lyr_cabecera_municipal_3.set('fieldLabels', {'gid': 'hidden field', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', 'nombre': 'inline label - always visible', 'area': 'hidden field', 'codigo': 'inline label - always visible', 'cod_mun': 'hidden field', });
lyr_vias_4.set('fieldLabels', {'gid': 'hidden field', 'shape_leng': 'hidden field', 'nombre': 'inline label - always visible', 'longitud': 'hidden field', 'municipio': 'inline label - always visible', 'estado': 'hidden field', 'codigo': 'hidden field', 'jerarquia': 'inline label - always visible', });
lyr_sitios_religiosos_espirituales_5.set('fieldLabels', {'gid': 'hidden field', 'nombre': 'inline label - always visible', 'patrimonio': 'hidden field', 'estado': 'inline label - always visible', 'capacidad': 'hidden field', 'resguardo': 'inline label - always visible', 'codigo': 'hidden field', 'cod_resg': 'hidden field', 'tipo': 'inline label - always visible', });
lyr_sitios_gastronomicos_6.set('fieldLabels', {'gid': 'no label', 'nombre': 'inline label - always visible', 'especialid': 'inline label - always visible', 'costo': 'hidden field', 'direccion': 'inline label - always visible', 'telefono': 'inline label - always visible', 'capacidad': 'hidden field', 'resguardo': 'inline label - always visible', 'codigo': 'hidden field', 'tipo': 'inline label - always visible', 'cod_resg': 'hidden field', });
lyr_sitios_culturales_7.set('fieldLabels', {'gid': 'hidden field', 'nombre': 'inline label - always visible', 'capacidad': 'hidden field', 'estado': 'inline label - always visible', 'patrimonio': 'hidden field', 'resguardo': 'inline label - always visible', 'codigo': 'hidden field', 'tipo': 'inline label - always visible', 'cod_resg': 'hidden field', });
lyr_atractivos_turisticos_8.set('fieldLabels', {'gid': 'hidden field', 'nombre': 'inline label - always visible', 'resguardo': 'inline label - always visible', 'accecibili': 'hidden field', 'codigo': 'hidden field', 'tipo': 'inline label - always visible', 'cod_resg': 'hidden field', });
lyr_alojamientos_9.set('fieldLabels', {'gid': 'hidden field', 'nombre': 'inline label - always visible', 'celular': 'inline label - always visible', 'capacidad': 'hidden field', 'codigo': 'hidden field', 'tipo': 'inline label - always visible', 'resguardo': 'inline label - always visible', 'cod_resg': 'hidden field', });
lyr_alojamientos_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});