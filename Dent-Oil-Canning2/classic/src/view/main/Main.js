/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('DentResistanceOilCanning.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        //'Ext.plugin.Viewport',//left over from ti-slot web?
        //'Ext.window.MessageBox',//left over from ti-slot web?

        //'Ext.chart.series.Series',
        //'Ext.widget.polar',
        //'Ext.chart.series.Polar',
        //'Ext.chart.PolarChart',

        'DentResistanceOilCanning.view.main.MainController',         
        'DentResistanceOilCanning.view.main.MainModel',
        
        'DentResistanceOilCanning.view.main.PageFooter',

        'DentResistanceOilCanning.grid.OcBulkCalculationGrid',
        'DentResistanceOilCanning.view.main.OcBulkCalculationController',
        'DentResistanceOilCanning.store.OcBulkCalculationStore',

        'DentResistanceOilCanning.view.main.DentResistanceOverview',
        'DentResistanceOilCanning.store.GradeStoreModel1',
        'DentResistanceOilCanning.view.main.DrM1Form',
        'DentResistanceOilCanning.view.main.DrM1FormCalcResults',
        'DentResistanceOilCanning.view.main.DrM1FormController',

        'DentResistanceOilCanning.view.main.DrM2Form',
        'DentResistanceOilCanning.store.GradeStoreModel2',
        'DentResistanceOilCanning.view.main.DrM2FormCalcResults',       
        'DentResistanceOilCanning.view.main.DrM2FormController',

        'DentResistanceOilCanning.view.main.OilCanningOverview',
        'DentResistanceOilCanning.view.main.OilCanningForm',
        'DentResistanceOilCanning.view.main.OcBulkInputForm',
        'DentResistanceOilCanning.view.main.OilCanningFormController',
        'DentResistanceOilCanning.view.main.OcBulkInputFormController', 
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            text: 'Dent Resistance/Oil Canning',
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [
        {
        xtype: 'panel',
        title: 'Dent Resistance Overview',
        iconCls: 'fa-home',
        scrollable: true,
            listeners: {
                show: function () {
                    //Ext.MessageBox.alert('Tab one', 'Tab One was clicked.');
                    //resetTab1();
                }
            },
        items: [{
            xtype: 'dent-resistance-overview'
        }],
        },
        {
        title: 'Oil Canning Overview',
        iconCls: 'fa-user',
            scrollable: true,

            listeners: {
                show: function () {
                    //Ext.MessageBox.alert('Tab two', 'Tab two was clicked.');
                    //resetTab2();
                }
            },
            items: [{
                xtype: 'oil-canning-overview'
            }],
        },
    ]
});

//show the dent resistance model 1 pop up
function showDRModel1() {

    var win = Ext.create('Ext.window.Window', {
        layout: 'fit',
        xtype: 'form',
        width: '100%',
        height: '100%',
        id: 'model1FormWindow',
        items: {
            xtype: 'dr-model1-form'
        },
        listeners: {
            
        }
    }).show()
}

//show the dent resistance model 2 pop up
function showDRModel2() {
    var win = Ext.create('Ext.window.Window', {
        layout: 'fit',
        xtype: 'form',
        width: '100%',
        height: '100%',
        id: 'model1FormWindow',
        items: {
            xtype: 'dr-model2-form'
        },
        listeners: {

        }
    }).show()
}

//show the dent resistance model 2 pop up
function showOcCalculator() {

    var win = Ext.create('Ext.window.Window', {
        layout: 'fit',
        xtype: 'form',
        width: '100%',
        height: '100%',
        id: 'oilCanningFormWindow',
        items: {
           //xtype: 'oil-canning-form'
        },
        listeners: {

        }
    }).show()

    //var OpenWindow = window.open('OilCanning/OilCanningCalculator.html');
}

function showOcBulkInput() {

    var win = Ext.create('Ext.window.Window', {
        layout: 'fit',
        xtype: 'form',
        width: '100%',
        height: '100%',
        id: 'oilCanningBulkInputFormWindow',
        items: {
            xtype: 'oil-canning-bulk-input-form'
        },
        listeners: {

        }
    }).show()
}

function ExportToTable() {
    /*Checks whether the file is a valid excel file*/
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xlsx|.xls)$/;
    
    console.clear();
    //console.log("ExportToTable Entry.")
    //console.log($("#excelfile"));
    //console.log($("#excelfile").val().toLowerCase());

    if (regex.test($("#excelfile").val().toLowerCase())) {
        var xlsxflag = false; /*Flag for checking whether excel is .xls format or .xlsx format*/
        if ($("#excelfile").val().toLowerCase().indexOf(".xlsx") > 0) {
            xlsxflag = true;
        }
        /*Checks whether the browser supports HTML5*/
        if (typeof (FileReader) != "undefined") {
            var reader = new FileReader();
            //array which will hold json objects
            var objExcelJson = [];

            reader.onload = function (e) {
                var data = e.target.result;
                /*Converts the excel data in to object*/
                if (xlsxflag) {
                    var workbook = XLSX.read(data, { type: 'binary' });
                }
                else {
                    var workbook = XLS.read(data, { type: 'binary' });
                }
                /*Gets all the sheetnames of excel in to a variable*/
                var sheet_name_list = workbook.SheetNames;

                //console.log("sheet_name_list: " + sheet_name_list);
                //console.log("sheet_name_list length: " + sheet_name_list.length);

                var sheetNumber = 0; /*This is used for restricting the script to consider only first sheet of excel*/
                sheet_name_list.forEach(function (y) { /*Iterate through all sheets*/

                    //break out of the forEach loop if not on the first sheet of the workbook
                    //console.log("sheetNumber: " + sheetNumber);
                    if (sheetNumber != 0) {
                        return false;
                    }

                    /*Convert the cell value to Json*/
                    if (xlsxflag) {
                        //convert the contents of an excel sheet into an object
                        var exceljson = XLSX.utils.sheet_to_json(workbook.Sheets[y]);
                        //object which will hold a single line of excel data in json format
                        var tmpObject;

                        $(exceljson).each(function (index) {

                            tmpObject = {

                                ocvar: "",
                                peakld: "",
                                fvr: Object.values(exceljson[index])[0],
                                svr: Object.values(exceljson[index])[1],
                                gaugeini: Object.values(exceljson[index])[2],
                                span: Object.values(exceljson[index])[3],
                                emaj: Object.values(exceljson[index])[4],
                                emin: Object.values(exceljson[index])[5],
                                DDQ: "",
                                BH210: ""
                            };

                            objExcelJson.push(tmpObject);                           
                        });

                        sheetNumber++;
                        //console.log("objExcelJson xlsxflag");
                        //console.log(objExcelJson);
                    }
                    else {
                        //convert the contents of an excel sheet into an object
                        var exceljson = XLS.utils.sheet_to_row_object_array(workbook.Sheets[y]);
                        //object which will hold a single line of excel data in json format
                        var tmpObject;

                        $(exceljson).each(function (index) {

                            tmpObject = {

                                ocvar: "",
                                peakld: "",
                                fvr: Object.values(exceljson[index])[0],
                                svr: Object.values(exceljson[index])[1],
                                gaugeini: Object.values(exceljson[index])[2],
                                span: Object.values(exceljson[index])[3],
                                emaj: Object.values(exceljson[index])[4],
                                emin: Object.values(exceljson[index])[5],
                                DDQ: "",
                                BH210: ""
                            };

                            objExcelJson.push(tmpObject);
                        });

                        sheetNumber++;
                        //console.log("objExcelJson non xlsxflag");
                        //console.log(objExcelJson);
                    }
                });

                console.log("post to the back end.");
                console.log(objExcelJson);

                var store = Ext.data.StoreManager.lookup('OcBulkCalculationStore');
                //console.log("store:");
                //console.log(store);

                //var jSource = { "success": true, "result": { "count": 2, "records": [{ "name": "User1", "cuid": "U1" }, { "name": "User2", "cuid": "U2" }] } };
                //var jSource = {
                //    "chartList": [
                //        {
                //            "Deflection": 0.05,
                //            "Load": 5.858886
                //        },
                //        {
                //            "Deflection": 0.1,
                //            "Load": 11.69829
                //        },
                //        {
                //            "Deflection": 0.15,
                //            "Load": 17.51823
                //        },
                //        {
                //            "Deflection": 0.2,
                //            "Load": 23.31868
                //        },
                //        {
                //            "Deflection": 0.25,
                //            "Load": 29.09966
                //        },
                //        {
                //            "Deflection": 0.3,
                //            "Load": 34.86115
                //        },
                //        {
                //            "Deflection": 0.35,
                //            "Load": 40.60317
                //        },
                //        {
                //            "Deflection": 0.4,
                //            "Load": 46.32571
                //        },
                //        {
                //            "Deflection": 0.45,
                //            "Load": 52.02878
                //        },
                //        {
                //            "Deflection": 0.5,
                //            "Load": 57.71236
                //        },
                //        {
                //            "Deflection": 0.55,
                //            "Load": 63.37648
                //        },
                //        {
                //            "Deflection": 0.6,
                //            "Load": 69.02111
                //        },
                //        {
                //            "Deflection": 0.65,
                //            "Load": 74.64626
                //        },
                //        {
                //            "Deflection": 0.7,
                //            "Load": 80.25194
                //        },
                //        {
                //            "Deflection": 0.75,
                //            "Load": 85.83813
                //        },
                //        {
                //            "Deflection": 0.8,
                //            "Load": 91.40485
                //        },
                //        {
                //            "Deflection": 0.85,
                //            "Load": 96.95942
                //        },
                //        {
                //            "Deflection": 0.9,
                //            "Load": 102.7582
                //        },
                //        {
                //            "Deflection": 0.95,
                //            "Load": 108.9285
                //        },
                //        {
                //            "Deflection": 1,
                //            "Load": 115.4701
                //        },
                //        {
                //            "Deflection": 1.05,
                //            "Load": 122.3831
                //        },
                //        {
                //            "Deflection": 1.1,
                //            "Load": 129.6675
                //        },
                //        {
                //            "Deflection": 1.15,
                //            "Load": 137.3233
                //        },
                //        {
                //            "Deflection": 1.2,
                //            "Load": 145.3506
                //        },
                //        {
                //            "Deflection": 1.25,
                //            "Load": 153.7492
                //        },
                //        {
                //            "Deflection": 1.3,
                //            "Load": 162.5192
                //        },
                //        {
                //            "Deflection": 1.35,
                //            "Load": 171.6606
                //        },
                //        {
                //            "Deflection": 1.4,
                //            "Load": 181.1734
                //        },
                //        {
                //            "Deflection": 1.45,
                //            "Load": 191.0576
                //        },
                //        {
                //            "Deflection": 1.5,
                //            "Load": 201.3132
                //        },
                //        {
                //            "Deflection": 1.55,
                //            "Load": 211.9402
                //        },
                //        {
                //            "Deflection": 1.6,
                //            "Load": 222.9385
                //        },
                //        {
                //            "Deflection": 1.65,
                //            "Load": 234.3083
                //        },
                //        {
                //            "Deflection": 1.7,
                //            "Load": 246.0495
                //        },
                //        {
                //            "Deflection": 1.75,
                //            "Load": 258.162
                //        },
                //        {
                //            "Deflection": 1.8,
                //            "Load": 270.6461
                //        },
                //        {
                //            "Deflection": 1.85,
                //            "Load": 283.5014
                //        },
                //        {
                //            "Deflection": 1.9,
                //            "Load": 296.7281
                //        },
                //        {
                //            "Deflection": 1.95,
                //            "Load": 310.3263
                //        },
                //        {
                //            "Deflection": 2,
                //            "Load": 324.2959
                //        },
                //        {
                //            "Deflection": 2.05,
                //            "Load": 340.8991
                //        },
                //        {
                //            "Deflection": 2.1,
                //            "Load": 362.128
                //        },
                //        {
                //            "Deflection": 2.15,
                //            "Load": 387.577
                //        },
                //        {
                //            "Deflection": 2.2,
                //            "Load": 416.8406
                //        }
                //    ],
                //    "oilcanning": {
                //        "ocvar": 110.82545441083748,
                //        "peakld": 95.8802851252182,
                //        "fvr": 6000,
                //        "svr": 6000,
                //        "gaugeini": 0.6,
                //        "span": 150,
                //        "emaj": 0,
                //        "emin": 0,
                //        "DDQ": 48.08364365713332,
                //        "BH210": 118.13171419733334
                //    },
                //    "ocvar": "",
                //    "peakld": "",
                //    "fvr": "",
                //    "svr": "",
                //    "gaugeini": "",
                //    "span": "",
                //    "emaj": "",
                //    "emin": "",
                //    "DDQ": "",
                //    "BH210": "",
                //    "id": "VmOilCanningReturnModel-1"
                //}

                //var jSource = {
                //    "ocvar": "",
                //    "peakld": "",
                //    "fvr": "6000",
                //    "svr": "6000",
                //    "gaugeini": "0.6",
                //    "span": "150",
                //    "emaj": "0",
                //    "emin": "0",
                //    "DDQ": "",
                //    "BH210": ""
                //}

                //store.add(jSource);
                //store.add(jSource.oilcanning);

                //store.loadData(resp.data);
                //store.reload(resp.data);
                //store.load(function (records, operation, success) {
                //    console.log('loaded records');
                //});

                //post to the back end
                Ext.Ajax.request({
                    url: 'api/OilCanning/CalculateBulkOilCanning',
                    method: 'POST',
                    jsonData: JSON.stringify(objExcelJson),
                    async: false,
                    success: function (response, opts) {
                        var resp = Ext.decode(response.responseText);

                        //print the response from the server
                        if (resp.success) {
                            //console.log("resp");
                            //console.log(resp);
                            //console.log("resp.data");
                            //console.log(resp.data);

                            //store.add(resp.data);                           
                        }
                        //print the response from the server
                        else {
                            console.log(resp);
                        }
                    },
                    //print the response from the server
                    failure: function (response, opts) {
                        var resp = response;
                        console.log(resp);
                    }
                });
            }
            if (xlsxflag) {/*If excel file is .xlsx extension than creates a Array Buffer from excel*/
                reader.readAsArrayBuffer($("#excelfile")[0].files[0]);
            }
            else {
                reader.readAsBinaryString($("#excelfile")[0].files[0]);
            }
        }
        else {
            alert("Sorry! Your browser does not support HTML5!");
        }
    }
    else {
        alert("Please upload a valid Excel file!");
    }
}

$(document).ready(function () {

});
