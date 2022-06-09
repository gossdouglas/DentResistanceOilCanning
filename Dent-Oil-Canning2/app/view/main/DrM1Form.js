/**
 * This view is an example list of people.
 */
//Ext.define('DentResistanceOilCanning.view.main.DrM1Grid', {
//    extend: 'Ext.grid.Panel',
//    xtype: 'dr-model1-grid',

//    requires: [
//        'DentResistanceOilCanning.store.Personnel'
//    ],

//    title: 'Personnel',

//    store: {
//        type: 'personnel'
//    },

//    columns: [
//        { text: 'Name',  dataIndex: 'name' },
//        { text: 'Email', dataIndex: 'email', flex: 1 },
//        { text: 'Phone', dataIndex: 'phone', flex: 1 }
//    ],

//    listeners: {
//        select: 'onItemSelected'
//    }
//});

Ext.define('DentResistanceOilCanning.view.main.DrM1Form', {
    extend: 'Ext.form.Panel',
    //xtype: 'tislotform',
    xtype: 'dr-model1-form',
    border: false,
    //controller: 'dr-model1-form',
    scrollable: true,
    //url: 'api/TiSlot/UpdateTiSlot',

    items:
        [
            {
                xtype: 'panel',
                //title: 'Ti-slot Information',
                //titleAlign: 'center',
                width: '100%',
                bodyPadding: '5',
                flex: 1,
                items:
                    [
                        {
                            xtype: 'panel',
                            layout: {
                                type: 'hbox',
                                align: 'stretch',
                            },
                            items:
                                [
                                    //{
                                    //    xtype: 'label',
                                    //    width: '11%',
                                    //    text: 'Grade'
                                    //},
                                    
                                    //{
                                    //    xtype: 'panel',
                                    //    width: '11%',
                                    //    html: 'R1 (mm)'
                                    //},
                                    {
                                        xtype: 'combobox',
                                        id: 'GradeKeyDrM1',
                                        name: 'GradeKey',
                                        fieldLabel: 'Grade',
                                        labelAlign: 'top',
                                        width: '11%',
                                    },
                                    {
                                        xtype: 'textfield',
                                        id: 'R1DrM1',
                                        name: 'R1',
                                        fieldLabel: 'R1 (mm)',
                                        labelAlign: 'top',
                                        width: '11%',
                                    },
                                    {
                                        xtype: 'textfield',
                                        id: 'R2DrM1',
                                        name: 'R2',
                                        fieldLabel: 'R2 (mm)',
                                        labelAlign: 'top',
                                        width: '11%',
                                    },
                                    {
                                        xtype: 'textfield',
                                        id: 'MajorStrainDrM1',
                                        name: 'MajorStrain',
                                        fieldLabel: 'Major Strain (%)',
                                        labelAlign: 'top',
                                        width: '11%',
                                    },
                                    {
                                        xtype: 'textfield',
                                        id: 'MinorStrainDrM1',
                                        name: 'MinorStrain',
                                        fieldLabel: 'Minor Strain (%)',
                                        labelAlign: 'top',
                                        width: '11%',
                                    },
                                    {
                                        xtype: 'textfield',
                                        id: 'ThicknessDrM1',
                                        name: 'Thickness',
                                        fieldLabel: 'Thickness (mm)',
                                        labelAlign: 'top',
                                        width: '11%',
                                    },
                                    {
                                        xtype: 'textfield',
                                        name: '',
                                        fieldLabel: 'Dent Depth',
                                        labelAlign: 'top',
                                        width: '11%',
                                        value: '.1',
                                        editable: false
                                    },
                                    {
                                        xtype: 'textfield',
                                        name: '',
                                        fieldLabel: 'Newtons (N)',
                                        labelAlign: 'top',
                                        width: '11%',
                                        value: 'N/A',
                                        editable: false
                                    },
                                    {
                                        xtype: 'textfield',
                                        name: '',
                                        fieldLabel: 'Lb. Force (lbf)',
                                        labelAlign: 'top',
                                        width: '11%',
                                        value: 'N/A',
                                        editable: false
                                    },
                                ]
                        },

                        {
                            xtype: 'panel',
                            layout: {
                                type: 'hbox',
                                align: 'stretch',
                            },
                            items:
                                [
                                    {
                                        xtype: 'label',
                                        text: '',
                                        //margin: 'auto',
                                        width: '11%',
                                    },

                                    //{
                                    //    xtype: 'label',
                                    //    text: '150 to 2500',
                                    //    //margin: 'auto',
                                    //    width: '11%',
                                    //},
                                    {
                                        xtype: 'panel',
                                        width: '11%',
                                        html: '<center>150<br>to<br>2500</center>',
                                    },

                                    //{
                                    //    xtype: 'label',
                                    //    text: '15,000 to 150,000',
                                    //    //margin: 'auto',
                                    //    width: '11%',
                                    //},
                                    {
                                        xtype: 'panel',
                                        width: '11%',
                                        html: '<center>150<br>to<br>2500</center>',
                                    },

                                    //{
                                    //    xtype: 'label',
                                    //    text: '0.25% to 2%',
                                    //    //margin: 'auto',
                                    //    width: '11%',
                                    //},
                                    {
                                        xtype: 'panel',
                                        width: '11%',
                                        html: '<center>150<br>to<br>2500</center>',
                                    },

                                    //{
                                    //    xtype: 'label',
                                    //    name: '',
                                    //    text: '0.25% to 2%',
                                    //    //margin: 'auto',
                                    //    width: '11%',
                                    //},
                                    {
                                        xtype: 'panel',
                                        width: '11%',
                                        html: '<center>150<br>to<br>2500</center>',
                                    },

                                    //{
                                    //    xtype: 'label',
                                    //    text: '0.65 mm to 0.8 mm',
                                    //    //margin: 'auto',
                                    //    width: '11%',
                                    //},
                                    {
                                        xtype: 'panel',
                                        width: '11%',
                                        html: '<center>150<br>to<br>2500</center>',
                                    },

                                    //{
                                    //    xtype: 'label',
                                    //    text: '',
                                    //    //margin: 'auto',
                                    //    width: '11%',
                                    //},
                                    {
                                        xtype: 'panel',
                                        width: '11%',
                                        html: '<center>150<br>to<br>2500</center>',
                                    },

                                    //{
                                    //    xtype: 'label',
                                    //    text: '',
                                    //    //margin: 'auto',
                                    //    width: '11%',
                                    //},
                                    {
                                        xtype: 'panel',
                                        width: '11%',
                                        html: '<center>150<br>to<br>2500</center>',
                                    },

                                    //{
                                    //    xtype: 'label',
                                    //    text: '',
                                    //    //margin: 'auto',
                                    //    width: '11%',
                                    //},
                                    {
                                        xtype: 'panel',
                                        width: '11%',
                                        html: '<center>150<br>to<br>2500</center>',
                                    },
                                ]
                        },
                        //calculate button
                        {
                            xtype: 'panel',
                            layout: {
                                type: 'hbox',
                                align: 'stretch',
                            },
                            items:
                                [
                                    {
                                        xtype: 'button',
                                        text: "Calculate",
                                        margin: '20 10 0 0',
                                        width: '100%',
                                        listeners: {
                                            //click: 'onSaveClick'
                                        }
                                    },
                                ]
                        },
                    ]
            },        
        ],
});



