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
    title: 'Results',
    store: {
        //type: 'tislots',
        //store is found by alias
        //type: 'OcBulkCalculationStore',
        type: 'oc-bulk-calculation-store',
    },
    plugins: 'gridfilters',

    columns: [
        { text: 'Id', dataIndex: 'TiSlotId', hidden: false },
        { text: 'FVR (mm)', dataIndex: 'fvr' },
        { text: 'SVR (mm)', dataIndex: 'svr', autoSizeColumn: true, minWidth: 100 },
        { text: 'Thickness', dataIndex: 'gaugeini', autoSizeColumn: true, minWidth: 100 },
        { text: 'Span (mm)', dataIndex: 'span', autoSizeColumn: true, minWidth: 100 },
        { text: 'Major Stretch (%)', dataIndex: 'emaj', autoSizeColumn: true, minWidth: 100 },
        { text: 'Minor Stretch (%)', dataIndex: 'emin', autoSizeColumn: true, minWidth: 100 },
        { text: 'Oil Canning Load (N)', dataIndex: 'peakld', autoSizeColumn: true, minWidth: 100 },
        { text: 'Dentload DDQ (N)', dataIndex: 'DDQ', autoSizeColumn: true, minWidth: 100 },
        { text: 'Dentload BH210 (N)', dataIndex: 'BH210', autoSizeColumn: true, minWidth: 100 },
        { text: 'Deflection @ 90N (mm)', dataIndex: '', autoSizeColumn: true, minWidth: 100 },
        { text: 'Deflection @ 100N (mm)', dataIndex: '', autoSizeColumn: true, minWidth: 100 },
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
