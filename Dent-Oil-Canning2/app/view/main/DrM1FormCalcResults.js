Ext.define('DentResistanceOilCanning.view.main.DrM1FormCalcResults', {
    //extend: 'Ext.form.Panel',
    extend: 'Ext.panel.Panel',
    xtype: 'dr-model1-calc-results',

    //xtype: 'panel',
    //id: 'DrM1FormResultsPanel',
    //name: 'DrM1FormResultsPanel',
    layout: {
        type: 'hbox',
        align: 'stretch',
    },
    items:
        [
            {
                xtype: 'textfield',
                //id: '',
                //name: '',
                width: '11%',
                value: 'Grade Name',
                editable: false
            },
            {
                xtype: 'textfield',
                //id: '',
                //name: '',
                width: '11%',
                value: 'R1',
                editable: false
            },
            {
                xtype: 'textfield',
                //id: '',
                //name: '',
                width: '11%',
                value: 'R2',
                editable: false
            },
            {
                xtype: 'textfield',
                //id: '',
                //name: '',
                width: '11%',
                value: 'Major Strain',
                editable: false
            },
            {
                xtype: 'textfield',
                //id: '',
                //name: '',
                width: '11%',
                value: 'Minor Strain',
                editable: false
            },
            {
                xtype: 'textfield',
                ///id: '',
                //name: '',
                width: '11%',
                value: 'Thickness',
                editable: false
            },
            {
                xtype: 'textfield',
                //name: '',
                width: '11%',
                value: '.1',
                value: 'Dent Depth',
                editable: false
            },
            {
                xtype: 'textfield',
                //name: '',
                width: '11%',
                value: 'RunningTotal',
                editable: false
            },
            {
                xtype: 'textfield',
                //name: '',
                width: '11%',
                value: 'FootPounds',
                editable: false
            },
        ]

    //items:
    //    [          
    //        {
    //            xtype: 'textfield',
    //            //id: '',
    //            //name: '',
    //            width: '11%',
    //            value: 'Grade Name',
    //            editable: false
    //        },
    //        {
    //            xtype: 'textfield',
    //            //id: '',
    //            //name: '',
    //            width: '11%',
    //            value: 'R1',
    //            editable: false
    //        },
    //        {
    //            xtype: 'textfield',
    //            //id: '',
    //            //name: '',
    //            width: '11%',
    //            value: 'R2',
    //            editable: false
    //        },
    //        {
    //            xtype: 'textfield',
    //            //id: '',
    //            //name: '',
    //            width: '11%',
    //            value: 'Major Strain',
    //            editable: false
    //        },
    //        {
    //            xtype: 'textfield',
    //            //id: '',
    //            //name: '',
    //            width: '11%',
    //            value: 'Minor Strain',
    //            editable: false
    //        },
    //        {
    //            xtype: 'textfield',
    //            ///id: '',
    //            //name: '',
    //            width: '11%',
    //            value: 'Thickness',
    //            editable: false
    //        },
    //        {
    //            xtype: 'textfield',
    //            //name: '',
    //            width: '11%',
    //            value: '.1',
    //            value: 'Dent Depth',
    //            editable: false
    //        },
    //        {
    //            xtype: 'textfield',
    //            //name: '',
    //            width: '11%',
    //            value: 'RunningTotal',
    //            editable: false
    //        },
    //        {
    //            xtype: 'textfield',
    //            //name: '',
    //            width: '11%',
    //            value: 'FootPounds',
    //            editable: false
    //        },
    //    ],
});