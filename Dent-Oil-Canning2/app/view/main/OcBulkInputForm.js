Ext.QuickTips.init();
objExcelJson = new Object();

Ext.define('DentResistanceOilCanning.view.main.OcBulkInputForm', {
    extend: 'Ext.form.Panel',
    xtype: 'oil-canning-bulk-input-form',
    border: false,
    controller: 'oil-canning-bulk-input-form-controller',
    scrollable: true,
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
    },
    items:
        [
            //{
            //    xtype: 'panel',
            //    title: 'Bulk Oil Canning Calculation',
            //    titleAlign: 'center',
            //    width: '100%',
            //    bodyPadding: '5',
            //    flex: 1,
            //    items:
            //        [
            //            //entry fields
            //            {
            //                xtype: 'panel',
            //                layout: {
            //                    type: 'hbox',
            //                    align: 'stretch',
            //                },
            //                //layout: {
            //                //    type: 'hbox',
            //                //    pack: 'center',
            //                //    align: 'middle'
            //                //},
            //                items:
            //                    [
            //                        {
            //                            xtype: 'panel',
            //                            html: '<input type="file" id="excelfile" onChange=""/>',
            //                        },                                  
            //                        {
            //                            xtype: 'button',
            //                            text: "Load Excel",
            //                            width: '10%',
            //                            //margin: top, right, bottom, left
            //                            margin: '0 1 0 1',
            //                            listeners: {
            //                                click: function (input, val, opts) {

            //                                    ExportToTable();
            //                                }
            //                            }
            //                        },
            //                        {
            //                            xtype: 'button',
            //                            text: "Clear Results",
            //                            width: '10%',
            //                            //margin: top, right, bottom, left
            //                            margin: '0 1 0 1',
            //                            listeners: {
            //                                click: function (input, val, opts) {

            //                                    var store = Ext.data.StoreManager.lookup('OcBulkCalculationStore');
            //                                    store.removeAll();
            //                                    var store = Ext.data.StoreManager.lookup('OcBulkErrorStore');
            //                                    store.removeAll();
            //                                }
            //                            }
            //                        },
            //                    ],
            //            },                      
            //        ]
            //},
            ////results panel
            //{
            //    xtype: 'panel',
            //    //id: 'DrM1FormResultsPanel',
            //    titleAlign: 'center',
            //    width: '100%',
            //    bodyPadding: '5',
            //    flex: 2,
            //    scrollable: true,
            //    items:
            //        [
            //            {
            //                xtype: 'OcBulkCalculationGrid',
            //            },
            //        ]
            //},
            ////validation error panel
            //{
            //    xtype: 'panel',
            //    //id: 'DrM1FormResultsPanel',
            //    titleAlign: 'center',
            //    width: '100%',
            //    bodyPadding: '5',
            //    flex: 2,
            //    scrollable: true,
            //    items:
            //        [
            //            {
            //                xtype: 'OcBulkErrorGrid',
            //            },
            //        ]
            //},
            ////page footer
            //{
            //    xtype: 'panel',
            //    width: '100%',
            //    bodyPadding: '5',
            //    //flex: 9,
            //    items:
            //        [
            //            {
            //                xtype: 'page-footer',
            //                width: '100%',
            //            },
            //        ]
            //},

            ////////////////////////////////////
            {
                flex: 1,
                //title: 'yo',
                //html: 'ho',
                //width: '100%',
                //xtype: 'panel',               
                xtype: 'panel',
                title: 'Bulk Oil Canning Calculation',
                titleAlign: 'center',
                height: '100%',
                width: '100%',
                bodyPadding: '5',
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
                                        html: '<input type="file" id="excelfile" onChange=""/>',
                                    },
                                    {
                                        xtype: 'button',
                                        text: "Load Excel",
                                        width: '10%',
                                        //margin: top, right, bottom, left
                                        margin: '0 1 0 1',
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
                                        //margin: top, right, bottom, left
                                        margin: '0 1 0 1',
                                        listeners: {
                                            click: function (input, val, opts) {
                                                var store = Ext.data.StoreManager.lookup('OcBulkCalculationStore');
                                                store.removeAll();
                                                var store = Ext.data.StoreManager.lookup('OcBulkErrorStore');
                                                store.removeAll();
                                            }
                                        }
                                    },
                                ],
                        },
                    ]
            },
            {
                flex: 8,
                //title: 'yo',
                //html: 'ho',
                //width: '100%',
                //xtype: 'panel',
                //height: '100%',
                xtype: 'panel',
                titleAlign: 'center',
                width: '100%',
                bodyPadding: '5',
                flex: 2,
                scrollable: true,
                items:
                    [
                        {
                            xtype: 'OcBulkCalculationGrid',
                        },
                    ]
            },
            {
                flex: 2,
                //title: 'yo',
                //html: 'ho',
                //width: '100%',
                //xtype: 'panel',
                //height: '100%',
                xtype: 'panel',
                titleAlign: 'center',
                width: '100%',
                bodyPadding: '5',
                flex: 2,
                scrollable: true,
                items:
                    [
                        {
                            xtype: 'OcBulkErrorGrid',
                        },
                    ]
            },
            {
                flex: 1,
                //title: 'yo',
                //html: 'ho',
                //width: '100%',
                //xtype: 'panel',
                //height: '100%',
                xtype: 'panel',
                width: '100%',
                bodyPadding: '5',
                //flex: 9,
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



