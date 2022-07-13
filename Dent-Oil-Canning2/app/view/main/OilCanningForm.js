Ext.QuickTips.init();

Ext.define('DentResistanceOilCanning.view.main.OilCanningForm', {
    extend: 'Ext.form.Panel',
    xtype: 'oil-canning-form',
    border: false,
    controller: 'oil-canning-form-controller',
    scrollable: true,
    url: 'api/OilCanning/CalculateOilCanning',

    items:
        [
            {
                xtype: 'panel',
                title: 'Prediction of Oil Canning and Dent Resistance of Roof Panels',
                titleAlign: 'center',
                width: '100%',
                bodyPadding: '5',
                flex: 1,
                items:
                    [
                        {
                            xtype: 'panel',
                            layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'middle'
                            },
                            items:
                                [
                                    //Ext.create({
                                    //    xtype: 'polar',
                                    //    renderTo: document.body,
                                    //    width: 600,
                                    //    height: 400,
                                    //    store: {
                                    //        fields: ['mph', 'fuel', 'temp', 'rpm'],
                                    //        data: [{
                                    //            mph: 65,
                                    //            fuel: 50,
                                    //            temp: 150,
                                    //            rpm: 6000
                                    //        }]
                                    //    },
                                    //    series: {
                                    //        type: 'gauge',
                                    //        colors: ['#1F6D91', '#90BCC9'],
                                    //        angleField: 'mph',
                                    //        needle: true,
                                    //        donut: 30
                                    //    }
                                    //})
                                    //{
                                    //    xtype: 'panel',
                                    //    //width: '3%',
                                    //    //id: 'GradeKey',
                                    //    //name: 'GradeKey',
                                    //    //bind: '{gradeKeyDrM1Combo.value}',
                                    //    html: str3
                                    //},
                                    //{
                                    //    xtype: 'polar',
                                    //    renderTo: document.body,
                                    //    width: 600,
                                    //    height: 400,
                                    //    store: {
                                    //        fields: ['mph', 'fuel', 'temp', 'rpm'],
                                    //        data: [{
                                    //            mph: 65,
                                    //            fuel: 50,
                                    //            temp: 150,
                                    //            rpm: 6000
                                    //        }]
                                    //    },
                                    //    series: {
                                    //        type: 'gauge',
                                    //        colors: ['#1F6D91', '#90BCC9'],
                                    //        angleField: 'mph',
                                    //        needle: true,
                                    //        donut: 30
                                    //    }
                                    //},
                                ]
                        },                      
                    ]
            },            
        ],
});



