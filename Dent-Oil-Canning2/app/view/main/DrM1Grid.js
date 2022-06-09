/**
 * This view is an example list of people.
 */
Ext.define('DentResistanceOilCanning.view.main.DrM1Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'dr-model1-grid',

    requires: [
        'DentResistanceOilCanning.store.Personnel'
    ],

    //title: 'Personnel',

    store: {
        type: 'personnel'
    },

    //columns: [
    //    { text: 'Name',  dataIndex: 'name' },
    //    { text: 'Email', dataIndex: 'email', flex: 1 },
    //    { text: 'Phone', dataIndex: 'phone', flex: 1 }
    //],

    //listeners: {
    //    select: 'onItemSelected'
    //}

    //columns: [
    //    { text: 'Grade', dataIndex: 'name' },
    //    { text: 'Radius of Curvature', dataIndex: 'email', flex: 1 },
    //    { text: 'Phone', dataIndex: 'phone', flex: 1 }
    //],

    columns: [
        { dataIndex: 'name' },
        { dataIndex: 'email', flex: 1 },
        { dataIndex: 'phone', flex: 1 }
    ],
});
