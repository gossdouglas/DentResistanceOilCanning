
var inputFieldStyle = 'background-color: gray';

//Ext.define('TiSlots.view.main.List', {
Ext.define('DentResistanceOilCanning.grid.OcBulkCalculationGrid', {
    extend: 'Ext.grid.Panel',
    //xtype: 'mainlist',
    xtype: 'OcBulkCalculationGrid',
    //controller: 'tislotform',
    //controller: 'OcBulkCalculationController',

    //controller is found by alias
    controller: 'oc-bulk-calculation-controller',

    //id: 'tislotgrid',
    id: 'oc-bulk-calculation-grid',
    //layout: {
    //    type: 'fit',
    //    align: 'stretch',
    //    pack: 'start'
    //},
    forceFit: true,
    requires: [
        //'TiSlots.store.TiSlots'
        'DentResistanceOilCanning.store.OcBulkCalculationStore'
    ],
    //tbar: [
    //    { xtype: 'button', text: 'Add', name: 'locationAdd', iconCls: 'x-fa fa-plus' },
    //    { xtype: 'button', text: 'Refresh', name: 'locationRefresh', iconCls: 'x-fa fa-refresh' },
    //    {
    //        xtype: 'textfield',
    //        labelAlign: 'right',
    //        labelSeparator: '',
    //        labelPad: 10,
    //        defaults: {
    //            labelStyle: 'padding-right: 0px;padding-left: 0px;font-weight: bold; color: black;'
    //        },
    //        labelStyle: 'font-weight: bold; color: black;',
    //        listeners: {
    //            change: function (field, value) {
    //                filterGrid(value);
    //            }
    //        }
    //    },
    //    {
    //        xtype: 'textfield',
    //        id: 'UserSessionKeyOnLoad',
    //        name: 'UserSessionKeyOnLoad',
    //        value: getUserSessionKey(),
    //        hidden: true,
    //    },
    //],
    title: 'The columns of the source Excel sheet must be of the form shown below',
    titleAlign: 'center',
    store: {
        //type: 'tislots',
        //store is found by alias
        //type: 'OcBulkCalculationStore',
        type: 'oc-bulk-calculation-store',
    },
    plugins: 'gridfilters',

    
    columns: [
        { text: 'Excel <br> Row', dataIndex: 'excelRowId', autoSizeColumn: true, maxWidth: 100, align: 'center' },
        { text: 'FVR <br> 3000 to 12000 mm <br> Input Value', dataIndex: 'fvr', align: 'center', style: 'background-color: "gray"'},
        { text: 'SVR <br> 3000 to 15000 mm <br> Input Value', dataIndex: 'svr', autoSizeColumn: true, minWidth: 100, align: 'center' },
        { text: 'Thickness <br> 0.55 to 0.85 mm <br> Input Value', dataIndex: 'gaugeini', autoSizeColumn: true, minWidth: 100, align: 'center' },
        { text: 'Span <br> 150 to 525 mm <br> Input Value', dataIndex: 'span', autoSizeColumn: true, minWidth: 100, align: 'center' },
        { text: 'Major Stretch <br> 0 to 2% <br> Input Value', dataIndex: 'emaj', autoSizeColumn: true, minWidth: 100, align: 'center' },
        { text: 'Minor Stretch <br> 0 to 2% <br> Input Value', dataIndex: 'emin', autoSizeColumn: true, minWidth: 100, align: 'center' },
        { text: 'Oil Canning Load (N) <br>-<br> Output Value', dataIndex: 'peakld', autoSizeColumn: true, minWidth: 100, align: 'center' },
        { text: 'Dentload DDQ (N) <br>-<br> Output Value', dataIndex: 'DDQ', autoSizeColumn: true, minWidth: 100, align: 'center' },
        { text: 'Dentload BH210 (N) <br>-<br> Output Value', dataIndex: 'BH210', autoSizeColumn: true, minWidth: 100, align: 'center' },
        { text: 'Deflection @ 90N (mm) <br>-<br> Output Value', dataIndex: 'Deflection90', autoSizeColumn: true, minWidth: 100, align: 'center' },
        { text: 'Deflection @ 100N (mm) <br>-<br> Output Value', dataIndex: 'Deflection100', autoSizeColumn: true, minWidth: 100, align: 'center' },
        //{ text: 'Chart List', dataIndex: 'chartList', autoSizeColumn: true, minWidth: 100 },

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

function filterGrid(value) {
    var grid = Ext.getCmp('tislotgrid');

    if (value === "") {
        grid.store.clearFilter();
    }
    else if (value) {
        var matcher = new RegExp(Ext.String.escapeRegex(value), "i");
        grid.store.filter({
            filterFn: function (record) {
                return matcher.test(record.get('TiSlotNumber'));
            }
        });
    }
}
