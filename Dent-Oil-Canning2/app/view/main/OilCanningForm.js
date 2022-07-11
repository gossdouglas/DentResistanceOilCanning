$(function ($) {

    $(".knob").knob({
        change: function (value) {
            //console.log("change : " + value);
        },
        release: function (value) {
            //console.log(this.$.attr('value'));
            console.log("release : " + value);
        },
        cancel: function () {
            console.log("cancel : ", this);
        },
        /*format : function (value) {
            return value + '%';
        },*/
        draw: function () {

            // "tron" case
            if (this.$.data('skin') == 'tron') {

                this.cursorExt = 0.3;

                var a = this.arc(this.cv)  // Arc
                    , pa                   // Previous arc
                    , r = 1;

                this.g.lineWidth = this.lineWidth;

                if (this.o.displayPrevious) {
                    pa = this.arc(this.v);
                    this.g.beginPath();
                    this.g.strokeStyle = this.pColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
                    this.g.stroke();
                }

                this.g.beginPath();
                this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
                this.g.stroke();

                this.g.lineWidth = 2;
                this.g.beginPath();
                this.g.strokeStyle = this.o.fgColor;
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                this.g.stroke();

                return false;
            }
        }
    });

    // Example of infinite knob, iPod click wheel
    var v, up = 0, down = 0, i = 0
        , $idir = $("div.idir")
        , $ival = $("div.ival")
        , incr = function () { i++; $idir.show().html("+").fadeOut(); $ival.html(i); }
        , decr = function () { i--; $idir.show().html("-").fadeOut(); $ival.html(i); };
    $("input.infinite").knob(
        {
            min: 0
            , max: 20
            , stopper: false
            , change: function () {
                if (v > this.cv) {
                    if (up) {
                        decr();
                        up = 0;
                    } else { up = 1; down = 0; }
                } else {
                    if (v < this.cv) {
                        if (down) {
                            incr();
                            down = 0;
                        } else { down = 1; up = 0; }
                    }
                }
                v = this.cv;
            }
        });
});

//var str3 = '<canvas width="500" height="500" style="width: 200px; height: 200px;"></canvas><div class="demo">' +
//    //'<p>&#215; Angle offset and arc</p><pre>' +
//    //'data-fgColor="#66CC66" data-angleOffset=-125 data-angleArc=250 data-rotation=anticlockwise</pre>' +
//    '<input class="knob" data-angleOffset=-125 data-angleArc=250 data-fgColor="#66EE66" data-rotation="anticlockwise" value="35">' +
//    '</div>'

//var str3 = '<div class="demo">' +
//    //'<p>&#215; Angle offset and arc</p><pre>' +
//    //'data-fgColor="#66CC66" data-angleOffset=-125 data-angleArc=250 data-rotation=anticlockwise</pre>' +
//    '<input class="knob" data-angleOffset=-125 data-angleArc=250 data-fgColor="#66EE66" data-rotation="anticlockwise" value="35">' +
//    '</div>'

Ext.QuickTips.init();

Ext.define('DentResistanceOilCanning.view.main.OilCanningForm', {
    extend: 'Ext.form.Panel',
    xtype: 'oil-canning-form',
    border: false,
    controller: 'oil-canning-form-controller',
    scrollable: true,
    url: 'api/OilCanning/CalculateOilCanning',

    items:
        [
            {
                xtype: 'panel',
                title: 'Prediction of Oil Canning and Dent Resistance of Roof Panels',
                titleAlign: 'center',
                width: '100%',
                bodyPadding: '5',
                flex: 1,
                items:
                    [
                        //entry fields
                        {
                            xtype: 'panel',
                            //layout: {
                            //    type: 'hbox',
                            //    align: 'stretch',
                            //},
                            layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'middle'
                            },
                            items:
                                [
                                    //{
                                    //    xtype: 'panel',
                                    //    //width: '3%',
                                    //    //id: 'GradeKey',
                                    //    //name: 'GradeKey',
                                    //    //bind: '{gradeKeyDrM1Combo.value}',
                                    //    html: str3
                                    //},
                                    //{
                                    //    xtype: 'polar',
                                    //    renderTo: document.body,
                                    //    width: 600,
                                    //    height: 400,
                                    //    store: {
                                    //        fields: ['mph', 'fuel', 'temp', 'rpm'],
                                    //        data: [{
                                    //            mph: 65,
                                    //            fuel: 50,
                                    //            temp: 150,
                                    //            rpm: 6000
                                    //        }]
                                    //    },
                                    //    series: {
                                    //        type: 'gauge',
                                    //        colors: ['#1F6D91', '#90BCC9'],
                                    //        angleField: 'mph',
                                    //        needle: true,
                                    //        donut: 30
                                    //    }
                                    //},
                                ]
                        },
                        ////range notes
                        //{
                        //    xtype: 'panel',
                        //    //layout: {
                        //    //    type: 'hbox',
                        //    //    align: 'stretch',
                        //    //},
                        //    layout: {
                        //        type: 'hbox',
                        //        pack: 'center',
                        //        align: 'middle'
                        //    },
                        //    items:
                        //        [
                        //            {
                        //                xtype: 'label',
                        //                text: '',
                        //                width: '11%',
                        //            },
                        //            {
                        //                xtype: 'panel',
                        //                width: '11%',
                        //                html: '<center>150 to 2500</center>',
                        //            },
                        //            {
                        //                xtype: 'panel',
                        //                width: '11%',
                        //                html: '<center>15000 to 150000</center>',
                        //            },
                        //            {
                        //                xtype: 'panel',
                        //                width: '11%',
                        //                html: '<center>.25% to 2%</center>',
                        //            },
                        //            {
                        //                xtype: 'panel',
                        //                width: '11%',
                        //                html: '<center>.25% to 2%</center>',
                        //            },
                        //            {
                        //                xtype: 'panel',
                        //                width: '11%',
                        //                html: '<center>.65 mm to .8 mm</center>',
                        //            },
                        //            {
                        //                xtype: 'panel',
                        //                width: '11%',
                        //            },
                        //            {
                        //                xtype: 'panel',
                        //                width: '11%',
                        //            },
                        //            {
                        //                xtype: 'panel',
                        //                width: '11%',
                        //            },
                        //        ]
                        //},
                        ////calculate button
                        //{
                        //    xtype: 'panel',
                        //    //layout: {
                        //    //    type: 'hbox',
                        //    //    align: 'stretch',
                        //    //},
                        //    layout: {
                        //        type: 'hbox',
                        //        pack: 'center',
                        //        align: 'middle'
                        //    },
                        //    items:
                        //        [
                        //            {
                        //                xtype: 'button',
                        //                text: "Calculate",
                        //                margin: '20 10 0 0',
                        //                width: '10%',
                        //                listeners: {
                        //                    click: 'onCalculateDrM1Click'
                        //                }
                        //            },
                        //            {
                        //                xtype: 'button',
                        //                text: "Clear Results",
                        //                margin: '20 10 0 0',
                        //                width: '10%',
                        //                listeners: {
                        //                    click: 'onClearResultsClick'
                        //                }
                        //            },
                        //            {
                        //                xtype: 'button',
                        //                id: 'DDEChartUlsac',
                        //                text: "ULSAC",
                        //                margin: '20 10 0 0',
                        //                width: '10%',
                        //                listeners: {
                        //                    click: 'onTestResultsClick'
                        //                }
                        //            },
                        //            {
                        //                xtype: 'button',
                        //                id: 'DDEChartBH210Door1',
                        //                text: "BH210-Door 1",
                        //                margin: '20 10 0 0',
                        //                width: '10%',
                        //                listeners: {
                        //                    click: 'onTestResultsClick'
                        //                }
                        //            },
                        //            {
                        //                xtype: 'button',
                        //                id: 'DDEChartBH250Door1',
                        //                text: "BH250-Door 1",
                        //                margin: '20 10 0 0',
                        //                width: '10%',
                        //                listeners: {
                        //                    click: 'onTestResultsClick'
                        //                }
                        //            },
                        //            {
                        //                xtype: 'button',
                        //                id: 'DDEChartBH210Door2',
                        //                text: "BH210-Door 2",
                        //                margin: '20 10 0 0',
                        //                width: '10%',
                        //                listeners: {
                        //                    click: 'onTestResultsClick'
                        //                }
                        //            },
                        //            {
                        //                xtype: 'button',
                        //                id: 'DDEChartBH250Door2',
                        //                text: "BH250-Door 2",
                        //                margin: '20 10 0 0',
                        //                width: '10%',
                        //                listeners: {
                        //                    click: 'onTestResultsClick'
                        //                }
                        //            },
                        //            {
                        //                xtype: 'button',
                        //                id: 'DDEChartDP500Door2',
                        //                text: "DP500-Door 2",
                        //                margin: '20 10 0 0',
                        //                width: '10%',
                        //                listeners: {
                        //                    click: 'onTestResultsClick'
                        //                }
                        //            },
                        //            {
                        //                xtype: 'button',
                        //                id: 'DDEChartBH210Door3',
                        //                text: "BH210-Door 3",
                        //                margin: '20 10 0 0',
                        //                width: '10%',
                        //                listeners: {
                        //                    click: 'onTestResultsClick'
                        //                }
                        //            },
                        //            {
                        //                xtype: 'button',
                        //                id: 'DDEChartDP500Door3',
                        //                text: "DP500- Door 3",
                        //                margin: '20 10 0 0',
                        //                width: '10%',
                        //                listeners: {
                        //                    click: 'onTestResultsClick'
                        //                }
                        //            },
                        //        ]
                        //},
                    ]
            },
            ////results panel
            //{
            //    xtype: 'panel',
            //    id: 'DrM1FormResultsPanel',
            //    title: 'Results',
            //    titleAlign: 'center',
            //    width: '100%',
            //    bodyPadding: '5',
            //    flex: 2,
            //    items:
            //        [
                        
            //        ]
            //},
            ////test results panel
            //{
            //    xtype: 'panel',
            //    id: 'DrM1FormTestResultsPanel',
            //    //title: 'Correlation with Test Data',
            //    //titleAlign: 'center',
            //    width: '100%',
            //    bodyPadding: '5',
            //    flex: 5,
            //    items:
            //        [
            //            //
            //            {
            //                xtype: 'panel',
            //                id: 'DDEChartUlsacGif',
            //                cls: 'test-results-image',
            //                hidden: true,
            //                html: '<p><center><strong>Chart for ULSAC</strong><br><img src="images/DDEChartULSAC.gif" border="1"></center >'
            //            },
            //            {
            //                xtype: 'panel',
            //                id: 'DDEChartBH210Door1Gif',
            //                cls: 'test-results-image',
            //                hidden: true,
            //                html: '<p><center><strong>Chart for BH210-Door 1</strong><br><img src="images/DDEChartBH210Door1.gif" border="1"></center >'
            //            },
            //            {
            //                xtype: 'panel',
            //                id: 'DDEChartBH250Door1Gif',
            //                cls: 'test-results-image',
            //                hidden: true,
            //                html: '<p><center><strong>Chart for BH250-Door 1</strong><br><img src="images/DDEChartBH250Door1.gif" border="1"></center >'
            //            },
            //            {
            //                xtype: 'panel',
            //                id: 'DDEChartBH210Door2Gif',
            //                cls: 'test-results-image',
            //                hidden: true,
            //                html: '<p><center><strong>Chart for BH210-Door 2</strong><br><img src="images/DDEChartBH210Door2.gif" border="1"></center >'
            //            },
            //            {
            //                xtype: 'panel',
            //                id: 'DDEChartBH250Door2Gif',
            //                cls: 'test-results-image',
            //                hidden: true,
            //                html: '<p><center><strong>Chart for BH250-Door 2</strong><br><img src="images/DDEChartBH250Door2.gif" border="1"></center >'
            //            },
            //            {
            //                xtype: 'panel',
            //                id: 'DDEChartDP500Door2Gif',
            //                cls: 'test-results-image',
            //                hidden: true,
            //                html: '<p><center><strong>Chart for DP500-Door 2</strong><br><img src="images/DDEChartDP500Door2.gif" border="1"></center >'
            //            },
            //            {
            //                xtype: 'panel',
            //                id: 'DDEChartBH210Door3Gif',
            //                cls: 'test-results-image',
            //                hidden: true,
            //                html: '<p><center><strong>Chart for BH210-Door 3</strong><br><img src="images/DDEChartBH210Door3.gif" border="1"></center >'
            //            },
            //            {
            //                xtype: 'panel',
            //                id: 'DDEChartDP500Door3Gif',
            //                cls: 'test-results-image',
            //                hidden: true,
            //                html: '<p><center><strong>Chart for DP500-Door 3</strong><br><img src="images/DDEChartDP500Door3.gif" border="1"></center >'
            //            },
            //        ]
            //},
            ////page footer
            //{
            //    xtype: 'panel',
            //    width: '100%',
            //    bodyPadding: '5',
            //    flex: 9,
            //    items:
            //        [
            //            {
            //                xtype: 'page-footer',
            //                width: '100%',
            //            },
            //        ]
            //},
        ],
});



