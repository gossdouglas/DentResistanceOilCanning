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
        'DentResistanceOilCanning.view.main.List',
        'DentResistanceOilCanning.view.main.PageFooter',

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

//function getExcelPath() {

//    console.log($('#excelfile').val())
//}


function ExportToTable() {
//function ExportToTable(filePath) {
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xlsx|.xls)$/;
    /*Checks whether the file is a valid excel file*/

    console.clear();
    console.log("ExportToTable Entry.")
    //console.log(filePath.toLowerCase());
    console.log($("#excelfile").val().toLowerCase());

    if (regex.test($("#excelfile").val().toLowerCase())) {
    //if (regex.test(filePath.toLowerCase())) {
        var xlsxflag = false; /*Flag for checking whether excel is .xls format or .xlsx format*/
        if ($("#excelfile").val().toLowerCase().indexOf(".xlsx") > 0) {
        //if (filePath.toLowerCase().indexOf(".xlsx") > 0) {
            xlsxflag = true;
        }
        /*Checks whether the browser supports HTML5*/
        if (typeof (FileReader) != "undefined") {
            var reader = new FileReader();
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
                console.log("sheet_name_list: " + sheet_name_list);
                console.log("sheet_name_list length: " + sheet_name_list.length);

                var cnt = 0; /*This is used for restricting the script to consider only first sheet of excel*/
                sheet_name_list.forEach(function (y) { /*Iterate through all sheets*/
                    /*Convert the cell value to Json*/
                    if (xlsxflag) {
                        var exceljson = XLSX.utils.sheet_to_json(workbook.Sheets[y]);
                        console.log("exceljson xlsxflag true: ");
                        console.log(exceljson);
                        console.log("exceljson[0]");
                        console.log(exceljson[0]);//returns all values for 0
                        //console.log(exceljson[0].values);//doesnpt work
                        //console.log(exceljson[0].'FVR (mm)');//doesnpt work
                        //console.log(Object.values(exceljson[0])[0]);//doesn't work
                        //console.log(JSON.parse(exceljson[0]));
                        console.log(JSON.stringify(exceljson[0]));
                        console.log(JSON.stringify(exceljson));
                    }
                    else {
                        var exceljson = XLS.utils.sheet_to_row_object_array(workbook.Sheets[y]);
                        console.log("exceljson xlsxflag false: ");
                        console.log(exceljson);
                    }

                    console.log("exceljson.length");
                    console.log(exceljson.length);
                    console.log("exceljson.length > 0 && cnt == 0:");
                    console.log(exceljson.length > 0 && cnt == 0);
                    if (exceljson.length > 0 && cnt == 0) {
                        BindTable(exceljson, '#exceltable');
                        cnt++;
                    }
                });
                $('#exceltable').show();
            }
            if (xlsxflag) {/*If excel file is .xlsx extension than creates a Array Buffer from excel*/
                reader.readAsArrayBuffer($("#excelfile")[0].files[0]);
                //reader.readAsArrayBuffer(filePath[0].files[0]);
            }
            else {
                reader.readAsBinaryString($("#excelfile")[0].files[0]);
                //reader.readAsBinaryString(filePath[0].files[0]);
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

function BindTable(jsondata, tableid) {/*Function used to convert the JSON array to Html Table*/
    var columns = BindTableHeader(jsondata, tableid); /*Gets all the column headings of Excel*/
    for (var i = 0; i < jsondata.length; i++) {
        var row$ = $('<tr/>');
        for (var colIndex = 0; colIndex < columns.length; colIndex++) {
            var cellValue = jsondata[i][columns[colIndex]];
            if (cellValue == null)
                cellValue = "";
            row$.append($('<td/>').html(cellValue));
        }
        $(tableid).append(row$);
    }
}
function BindTableHeader(jsondata, tableid) {/*Function used to get all column names from JSON and bind the html table header*/
    var columnSet = [];
    var headerTr$ = $('<tr/>');
    for (var i = 0; i < jsondata.length; i++) {
        var rowHash = jsondata[i];
        for (var key in rowHash) {
            if (rowHash.hasOwnProperty(key)) {
                if ($.inArray(key, columnSet) == -1) {/*Adding each unique column names to a variable array*/
                    columnSet.push(key);
                    headerTr$.append($('<th/>').html(key));
                }
            }
        }
    }
    $(tableid).append(headerTr$);
    return columnSet;
}

$(document).ready(function () {

});
