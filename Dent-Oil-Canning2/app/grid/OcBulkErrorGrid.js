
var inputFieldStyle = 'background-color: gray';

//Ext.define('DentResistanceOilCanning.grid.OcBulkCalculationGrid', {
Ext.define('DentResistanceOilCanning.grid.OcBulkErrorGrid', {
    extend: 'Ext.grid.Panel',
    //xtype: 'mainlist',
    //xtype: 'OcBulkCalculationGrid',
    xtype: 'OcBulkErrorGrid',
    //controller: 'tislotform',
    //controller: 'OcBulkCalculationController',

    //controller is found by alias
    //controller: 'oc-bulk-calculation-controller',

    //id: 'oc-bulk-calculation-grid',
    id: 'oc-bulk-error-grid',
    //layout: {
    //    type: 'fit',
    //    align: 'stretch',
    //    pack: 'start'
    //},
    forceFit: true,
    requires: [
        //'DentResistanceOilCanning.store.OcBulkCalculationStore'
        'DentResistanceOilCanning.store.OcBulkErrorStore'
    ],
    
    title: 'Un-processed due to range errors in the source Excel file',
    titleAlign: 'center',
    columnLines: true,
    store: {
        //store is found by alias
        //type: 'oc-bulk-calculation-store',
        type: 'oc-bulk-error-store',
    },
    //plugins: 'gridfilters',

    
    columns: [
        //{ text: 'Excel <br> Row', dataIndex: 'excelRowId', autoSizeColumn: true, maxWidth: 100, align: 'center' },
        { text: 'Excel Row', dataIndex: 'excelRowId', align: 'left', flex: 1, autoSizeColumn: true, maxWidth: 100 },
        //{ text: 'Description of the problem', dataIndex: 'errorText', align: 'center', style: 'background-color: "gray"' },
        { text: 'Description of the problem', dataIndex: 'errorText', align: 'left', flex: 1, autoSizeColumn: true, minWidth: 100 },
        //{ text: 'SVR <br> 3000 to 15000 mm <br> Input Value', dataIndex: 'svr', autoSizeColumn: true, minWidth: 100, align: 'center' },

    ],
    //viewConfig: {
    //    listeners: {
    //        //refresh: function (dataview) {
    //        render: function (dataview) {
    //            Ext.each(dataview.panel.columns, function (column) {
    //                if (column.autoSizeColumn === true)
    //                    column.autoSize();
    //            })
    //        }
    //    }
    //},
    //listeners: {
    //    select: 'onItemSelected',
    //    itemdblclick: 'onDoubleClick',
    //    onItemSelected: 'onItemSelected',
    //},
    //un-comment to add paging
    //paging toolbar
    //bbar: {
    //    xtype: 'pagingtoolbar',
    //    displayInfo: true
    //},
});

//function filterGrid(value) {
//    var grid = Ext.getCmp('tislotgrid');

//    if (value === "") {
//        grid.store.clearFilter();
//    }
//    else if (value) {
//        var matcher = new RegExp(Ext.String.escapeRegex(value), "i");
//        grid.store.filter({
//            filterFn: function (record) {
//                return matcher.test(record.get('TiSlotNumber'));
//            }
//        });
//    }
//}
