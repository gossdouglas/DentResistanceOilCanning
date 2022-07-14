Ext.QuickTips.init();

Ext.define('DentResistanceOilCanning.view.main.OcBulkInputForm', {
    extend: 'Ext.form.Panel',
    xtype: 'oil-canning-bulk-input-form',
    border: false,
    controller: 'oil-canning-bulk-input-form-controller',
    //controller: 'dr-model1-form-controller',
    scrollable: true,
    //url: 'api/OilCanning/LoadOilCanning',
    //url: 'api/DentResistance/CalculateModelOne',

    items:
        [
            {
                xtype: 'panel',
                title: 'Load for 0.1 mm Dent Depth, Model 1',
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
                                    //{
                                    //    xtype: 'textfield',
                                    //    //id: 'excelfile',
                                    //    itemId: 'excelfile',
                                    //    name: 'excelfile',
                                    //    fieldLabel: 'Directory Path',
                                    //    grow: true,
                                    //    growMin: '300',
                                    //    allowBlank: false,
                                    //},
                                    //{
                                    //    xtype: 'button',
                                    //    text: "Load Excel",
                                    //    //margin: '20 10 0 0',
                                    //    width: '10%',
                                    //    listeners: {
                                    //        click: function (input, val, opts) {

                                    //            //var excelPath = Ext.getCmp('excelfile').getSubmitValue();
                                    //            //console.clear();
                                    //            //console.log("excelPath: " + excelPath);
                                    //            //getExcelPath();
                                    //            ExportToTable();

                                    //            //console.clear();
                                    //            //console.log(this);
                                    //            //console.log(input);
                                    //            //console.log(val);
                                    //            //console.log(opts);
                                    //        }
                                    //    }
                                    //},

                                    //{
                                    //    xtype: 'panel',
                                    //    html: '<table id="exceltable"></table>',
                                    //},

                                    {
                                        xtype: 'panel',
                                        html: '<input type="file" id="excelfile"/><input type="button" id="viewfile" value="Export To Table" onclick="ExportToTable()"/><br/><br/><table id="exceltable"></table>',
                                        //html: '<input type="file" id="excelfile"/>',
                                        listeners: {
                                            //click: 'onLoadOcBulkInputClick'
                                            //change: function (input, val, opts) {

                                            //    console.clear();
                                            //    console.log(this);
                                            //    console.log(input);
                                            //    console.log(val);
                                            //    console.log(opts);
                                            //}
                                        }
                                    },

                                   //{
                                   //     //xtype: 'filefield',
                                   //     xtype: 'fileuploadfield',
                                   //     //id: 'excelfile',
                                   //     inputId: 'excelfile',
                                   //     name: 'photo',
                                   //     fieldLabel: 'File:',
                                   //     labelWidth: 50,
                                   //     msgTarget: 'side',
                                   //     allowBlank: false,
                                   //     anchor: '100%',
                                   //     buttonText: 'Select an Excel File ...',
                                   //     grow: true,
                                   //     listeners: {
                                   //         //click: 'onLoadOcBulkInputClick'
                                   //         change: function (input, val, opts) {

                                   //             console.clear();
                                   //             console.log(this);
                                   //             console.log(input);
                                   //             console.log(val);
                                   //             console.log(opts);
                                   //         }
                                   //     }
                                   // },
                                ],
                        },                      
                    ]
            },
            //results panel
            {
                xtype: 'panel',
                id: 'DrM1FormResultsPanel',
                title: 'Results',
                titleAlign: 'center',
                width: '100%',
                bodyPadding: '5',
                flex: 2,
                items:
                    [

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



