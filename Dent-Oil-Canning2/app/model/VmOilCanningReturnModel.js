Ext.define('DentResistanceOilCanning.model.VmOilCanningReturnModel', {
    extend: 'Ext.data.Model',
    //idProperty: 'GradeKey',
    fields: [

        { name: 'ocvar', type: 'string' },
        { name: 'peakld', type: 'string' },
        { name: 'fvr', type: 'string' },
        { name: 'svr', type: 'string' },
        { name: 'gaugeini', type: 'string' },
        { name: 'span', type: 'string' },
        { name: 'emaj', type: 'string' },
        { name: 'emin', type: 'string' },
        { name: 'DDQ', type: 'string' },
        { name: 'BH210', type: 'string' },
        { name: 'Deflection90', type: 'string' },
        { name: 'Deflection100', type: 'string' },

        //{ name: 'chartList', type: 'auto' },
    ]
})