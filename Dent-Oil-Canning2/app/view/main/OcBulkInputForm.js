Ext.QuickTips.init();
objExcelJson = new Object();

Ext.define('DentResistanceOilCanning.view.main.OcBulkInputForm', {
    extend: 'Ext.form.Panel',
    xtype: 'oil-canning-bulk-input-form',
    border: false,
    controller: 'oil-canning-bulk-input-form-controller',
    scrollable: true,

    items:
        [
            {
                xtype: 'panel',
                title: 'Bulk Oil Canning Calculation',
                titleAlign: 'center',
                width: '100%',
                bodyPadding: '5',
                flex: 1,
                items:
                    [
                        //entry fields
                        {
                            xtype: 'panel',
                            layout: {
                                type: 'hbox',
                                align: 'stretch',
                            },
                            //layout: {
                            //    type: 'hbox',
                            //    pack: 'center',
                            //    align: 'middle'
                            //},
                            items:
                                [
                                    {
                                        xtype: 'panel',
                                        html: '<input type="file" id="excelfile" onChange="ExportToTable()"/>',
                                    },                                  
                                    {
                                        xtype: 'button',
                                        text: "Load Excel",
                                        width: '10%',
                                        listeners: {
                                            click: function (input, val, opts) {

                                                ExportToTable();
                                            }
                                        }
                                    },
                                    {
                                        xtype: 'button',
                                        text: "Clear Results",
                                        width: '10%',
                                        listeners: {
                                            click: function (input, val, opts) {

                                                ExportToTable();
                                            }
                                        }
                                    },
                                ],
                        },                      
                    ]
            },
            //results panel
            {
                xtype: 'panel',
                id: 'DrM1FormResultsPanel',
                //title: 'Results',
                titleAlign: 'center',
                width: '100%',
                bodyPadding: '5',
                flex: 2,
                items:
                    [
                        {
                            xtype: 'OcBulkCalculationGrid',
                        },
                    ]
            },           
            //page footer
            {
                xtype: 'panel',
                width: '100%',
                bodyPadding: '5',
                flex: 9,
                items:
                    [
                        {
                            xtype: 'page-footer',
                            width: '100%',
                        },
                    ]
            },
        ],
});



