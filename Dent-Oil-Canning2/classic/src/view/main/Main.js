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
        'DentResistanceOilCanning.view.main.DrM1FormController',
        'DentResistanceOilCanning.view.main.DrM2FormController',
        'DentResistanceOilCanning.view.main.OilCanningFormController',
        'DentResistanceOilCanning.view.main.MainModel',
        'DentResistanceOilCanning.view.main.List',
        'DentResistanceOilCanning.view.main.PageFooter',

        'DentResistanceOilCanning.view.main.DentResistanceOverview',
        'DentResistanceOilCanning.view.main.OilCanningOverview',
        'DentResistanceOilCanning.view.main.DrM1Form',
        'DentResistanceOilCanning.view.main.DrM1FormCalcResults',
        'DentResistanceOilCanning.view.main.DrM2Form',
        'DentResistanceOilCanning.view.main.DrM2FormCalcResults',
        'DentResistanceOilCanning.view.main.OilCanningForm',

        'DentResistanceOilCanning.store.GradeStoreModel1',
        'DentResistanceOilCanning.store.GradeStoreModel2',
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

$(document).ready(function () {

});
