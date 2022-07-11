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

        //'DentResistanceOilCanning.view.main.DentResistanceContainer',
        'DentResistanceOilCanning.view.main.DentResistanceOverview',
        'DentResistanceOilCanning.view.main.OilCanningOverview',
        //'DentResistanceOilCanning.view.main.DentResistancemM1',
        'DentResistanceOilCanning.view.main.DrM1Form',
        'DentResistanceOilCanning.view.main.DrM1FormCalcResults',
        'DentResistanceOilCanning.view.main.DrM2Form',
        'DentResistanceOilCanning.view.main.DrM2FormCalcResults',
        'DentResistanceOilCanning.view.main.OilCanningForm',

        //'DentResistanceOilCanning.view.main.DentResistancemM2',
        //'DentResistanceOilCanning.view.main.DrM1Grid',
        

        //'DentResistanceOilCanning.view.main.OilCanningContainer',
        //'DentResistanceOilCanning.view.main.DentResistanceOverview',
        //'DentResistanceOilCanning.view.main.DentResistancemM1',
        //'DentResistanceOilCanning.view.main.DentResistancemM2',

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
            //bind: {
            //    text: '{name}'
            //},
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
        //id: 'nav-dent-resistance',
        //itemId: 'nav-dent-resistance',
        iconCls: 'fa-home',
        scrollable: true,
            listeners: {
                show: function () {
                    //Ext.MessageBox.alert('Tab one', 'Tab One was clicked.');
                    //resetTab1();
                }
            },

        //
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
                //xtype: 'mainlist'
                //xtype: 'dent-resistance-overview'
                //xtype: 'oil-canning-container'
                xtype: 'oil-canning-overview'
            }],
        },
        //{
        //title: 'Groups',
        //iconCls: 'fa-users',
        //bind: {
        //    html: '{loremIpsum}'
        //}
        //},
        //{
        //title: 'Settings',
        //iconCls: 'fa-cog',
        //bind: {
        //    html: '{loremIpsum}'
        //}
        //}
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
           xtype: 'oil-canning-form'
        },
        listeners: {

        }
    }).show()

    //var OpenWindow = window.open('OilCanning/OilCanningCalculator.html');
}

$(document).ready(function () {

    //$(function ($) {

    //    //alert("yo")

    //    $(".knob").knob({
    //        change: function (value) {
    //            console.log("change : " + value);
    //        },
    //        release: function (value) {
    //            //console.log(this.$.attr('value'));
    //            console.log("release : " + value);
    //        },
    //        cancel: function () {
    //            console.log("cancel : ", this);
    //        },
    //        /*format : function (value) {
    //            return value + '%';
    //        },*/
    //        draw: function () {

    //            // "tron" case
    //            if (this.$.data('skin') == 'tron') {

    //                this.cursorExt = 0.3;

    //                var a = this.arc(this.cv)  // Arc
    //                    , pa                   // Previous arc
    //                    , r = 1;

    //                this.g.lineWidth = this.lineWidth;

    //                if (this.o.displayPrevious) {
    //                    pa = this.arc(this.v);
    //                    this.g.beginPath();
    //                    this.g.strokeStyle = this.pColor;
    //                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
    //                    this.g.stroke();
    //                }

    //                this.g.beginPath();
    //                this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
    //                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
    //                this.g.stroke();

    //                this.g.lineWidth = 2;
    //                this.g.beginPath();
    //                this.g.strokeStyle = this.o.fgColor;
    //                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
    //                this.g.stroke();

    //                return false;
    //            }
    //        }
    //    });

    //    // Example of infinite knob, iPod click wheel
    //    var v, up = 0, down = 0, i = 0
    //        , $idir = $("div.idir")
    //        , $ival = $("div.ival")
    //        , incr = function () { i++; $idir.show().html("+").fadeOut(); $ival.html(i); }
    //        , decr = function () { i--; $idir.show().html("-").fadeOut(); $ival.html(i); };
    //    $("input.infinite").knob(
    //        {
    //            min: 0
    //            , max: 20
    //            , stopper: false
    //            , change: function () {
    //                if (v > this.cv) {
    //                    if (up) {
    //                        decr();
    //                        up = 0;
    //                    } else { up = 1; down = 0; }
    //                } else {
    //                    if (v < this.cv) {
    //                        if (down) {
    //                            incr();
    //                            down = 0;
    //                        } else { down = 1; up = 0; }
    //                    }
    //                }
    //                v = this.cv;
    //            }
    //        });
    //});

});
