Ext.define('DentResistanceOilCanning.view.main.DentResistanceOverview', {
    extend: 'Ext.form.Panel',
    xtype: 'dent-resistance-overview',
    items:
        [
            {
                xtype: 'panel',
                //id: 'dr-overview',
                width: '100%',
                bodyPadding: '5',
                flex: 9,
                //hidden: true,
                items:
                    [
                        //model 1 and model 2
                        {
                            xtype: 'panel',
                            title: 'Models',
                            titleAlign: 'center',
                            width: '100%',
                            bodyPadding: '5',
                            flex: 9,
                            items:
                                [
                                    //Load for 0.1mm Dent Depth
                                    {
                                        xtype: 'panel',
                                        layout: {
                                            type: 'hbox',
                                            align: 'stretch',
                                        },
                                        items:
                                            [
                                                {
                                                    xtype: 'panel',
                                                    width: '5%',
                                                    html: '1.'
                                                },
                                                {
                                                    xtype: 'panel',
                                                    width: '95%',
                                                    html: str1
                                                },
                                            ]
                                    },

                                    //Dent Depth for a Given Applied Load
                                    {
                                        xtype: 'panel',
                                        layout: {
                                            type: 'hbox',
                                            align: 'stretch',
                                        },
                                        items:
                                            [
                                                {
                                                    xtype: 'panel',
                                                    width: '5%',
                                                    html: '2.'
                                                },
                                                {
                                                    xtype: 'panel',
                                                    width: '95%',
                                                    html: str2
                                                },
                                            ]
                                    },
                                ]
                        },
                        //Brief Description of Dent Resistance models
                        {
                            xtype: 'panel',
                            title: 'Brief Description of Dent Resistance models',
                            titleAlign: 'center',
                            width: '100%',
                            bodyPadding: '5',
                            flex: 9,
                            items:
                                [
                                    {
                                        xtype: 'panel',
                                        layout: {
                                            type: 'hbox',
                                            align: 'stretch',
                                        },
                                        items:
                                            [
                                                {
                                                    xtype: 'panel',
                                                    width: '100%',
                                                    html: str3
                                                },
                                            ]
                                    },
                                ]
                        },
                        //References
                        {
                            xtype: 'panel',
                            title: 'References',
                            titleAlign: 'center',
                            width: '100%',
                            bodyPadding: '5',
                            flex: 9,
                            items:
                                [
                                    {
                                        xtype: 'panel',
                                        layout: {
                                            type: 'hbox',
                                            align: 'stretch',
                                        },
                                        items:
                                            [
                                                {
                                                    xtype: 'panel',
                                                    width: '5%',
                                                    html: '1.'
                                                },
                                                {
                                                    xtype: 'panel',
                                                    width: '95%',
                                                    html: str4
                                                },
                                            ]
                                    },
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
                    ]
            },
        ],
});