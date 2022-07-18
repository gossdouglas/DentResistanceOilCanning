Ext.QuickTips.init();
objExcelJson = new Object();

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
                                    //    inputId: 'excelfile',
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
                                    //    //xtype: 'filefield',
                                    //    xtype: 'fileuploadfield',
                                    //    //id: 'excelfile',
                                    //    inputId: 'excelfile2',
                                    //    name: 'photo',
                                    //    fieldLabel: 'File:',
                                    //    labelWidth: 50,
                                    //    msgTarget: 'side',
                                    //    allowBlank: false,
                                    //    anchor: '100%',
                                    //    buttonText: 'Select an Excel File ...',
                                    //    grow: true,
                                    //    //listeners: {
                                    //    //    change: function (input, val, opts) {

                                    //    //        ExportToTable();

                                    //    //        //console.clear();
                                    //    //        //console.log(this);
                                    //    //        //console.log(input);
                                    //    //        //console.log(val);
                                    //    //        //console.log(opts);
                                    //    //    },
                                    //    //    //click: 'onLoadOcBulkInputClick'
                                    //    //    //change: function (input, val, opts) {

                                    //    //    //    console.clear();
                                    //    //    //    console.log(this);
                                    //    //    //    console.log(input);
                                    //    //    //    console.log(val);
                                    //    //    //    console.log(opts);
                                    //    //    //}
                                    //    //}
                                    //},

                                    {
                                        xtype: 'panel',
                                        html: '<input type="file" id="excelfile" onChange="ExportToTable()"/>',
                                        //html: '<input type="file" id="excelfile"/>',
                                    },
                                    {
                                        xtype: 'button',
                                        text: "Load Excel",
                                        width: '10%',
                                        listeners: {
                                            click: function (input, val, opts) {

                                                console.log("button click event.")
                                                objExcelJson = ExportToTable();
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



