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
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'DentResistanceOilCanning.view.main.MainController',
        'DentResistanceOilCanning.view.main.MainModel',
        'DentResistanceOilCanning.view.main.List',

        'DentResistanceOilCanning.view.main.DentResistanceContainer',
        'DentResistanceOilCanning.view.main.DentResistanceOverview',
        'DentResistanceOilCanning.view.main.DentResistancemM1',
        'DentResistanceOilCanning.view.main.DentResistancemM2',

        'DentResistanceOilCanning.view.main.OilCanningContainer',
        //'DentResistanceOilCanning.view.main.DentResistanceOverview',
        //'DentResistanceOilCanning.view.main.DentResistancemM1',
        //'DentResistanceOilCanning.view.main.DentResistancemM2',
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
        title: 'Dent Resistance Overview',
        //id: 'nav-dent-resistance',
        //itemId: 'nav-dent-resistance',
        iconCls: 'fa-home',
        scrollable: true,
        //listeners: {
        //    click: {
        //        element: 'el', //bind to the underlying el property on the panel
        //        fn: function () { console.log('click el'); }
        //    },
        //    dblclick: {
        //        element: 'body', //bind to the underlying body property on the panel
        //        fn: function () { console.log('dblclick body'); }
        //    }
        //},
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            //xtype: 'mainlist'
            //xtype: 'dent-resistance-overview'
            xtype: 'dent-resistance-container'
        }],
        },
        {
        title: 'Oil Canning Overview',
        iconCls: 'fa-user',
        scrollable: true,
        //bind: {
        //    html: '{loremIpsum}'
        //}
            items: [{
                //xtype: 'mainlist'
                //xtype: 'dent-resistance-overview'
                xtype: 'oil-canning-container'
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

function showDRModel1() {
    //alert("showDRModel1()")

    Ext.getCmp('dr-overview').setConfig('hidden', true);
    Ext.getCmp('dr-model1').setConfig('hidden', false);
    Ext.getCmp('dr-model2').setConfig('hidden', true);

    //var win = Ext.create('Ext.window.Window', {
    //    layout: 'fit',
    //    xtype: 'form',
    //    width: '75%',
    //    height: '75%',
    //    id: 'tislotFormWindow',
    //    items: {
    //        xtype: 'dent-resistance-model1'
    //    },
    //    listeners: {
    //        //beforeshow: function (form, options) {
    //        //    //set the ETA date and time controls
    //        //    estimatedTimeArrival = record.data.EstimatedTimeArrival;
    //        //    Ext.getCmp('EtaDate').setValue(dateTimePart(estimatedTimeArrival, 1));
    //        //    Ext.getCmp('EtaTime').setValue(dateTimePart(estimatedTimeArrival, 2));

    //        //    //display the badge times after being converted from UTC
    //        //    badgeEnterSite = record.data.BadgeEnterSite;
    //        //    if (badgeEnterSite != '0001-01-01T00:00:00') {
    //        //        Ext.getCmp('BadgeEnterSiteDisplay').setValue(formatDate(record.data.BadgeEnterSite, 1))
    //        //    }

    //        //    //display the badge times after being converted from UTC
    //        //    badgeExitSite = record.data.BadgeExitSite;
    //        //    if (badgeExitSite != '0001-01-01T00:00:00') {
    //        //        Ext.getCmp('BadgeExitSiteDisplay').setValue(formatDate(record.data.BadgeExitSite, 1))
    //        //    }

    //        //    //if there is a check in time in the database, display it and lock it for editing
    //        //    tiSlotCheckIn = record.data.TiSlotCheckIn;
    //        //    if (tiSlotCheckIn != '0001-01-01T00:00:00') {
    //        //        //convert tiSlotCheckIn from UTC in the database to local for display
    //        //        var tiSlotCheckInLocal = formatDate(tiSlotCheckIn, 1);
    //        //        Ext.getCmp('TiSlotCheckInDate').setValue(dateTimePart(tiSlotCheckInLocal, 1));
    //        //        Ext.getCmp('TiSlotCheckInTime').setValue(dateTimePart(tiSlotCheckInLocal, 2));
    //        //        Ext.getCmp('TiSlotCheckInDate').setConfig('readOnly', true);
    //        //        Ext.getCmp('TiSlotCheckInTime').setConfig('readOnly', true);
    //        //    }

    //        //    //set the displayed values in the remote combo boxes
    //        //    var amnsContactName = record.data.AmnsContactName;
    //        //    Ext.ComponentQuery.query('#AmnsContactNameCombo')[0].setValue(amnsContactName);
    //        //    var forCompanyRecord = record.data.ForCompany;
    //        //    Ext.ComponentQuery.query('#ForCompanyCombo')[0].setValue(forCompanyRecord);
    //        //    var vendorCarrierRecord = record.data.VendorCarrierName;
    //        //    Ext.ComponentQuery.query('#VendorCarrierCombo')[0].setValue(vendorCarrierRecord);
    //        //    var driverNameRecord = record.data.DriverName;
    //        //    Ext.ComponentQuery.query('#DriverNameCombo')[0].setValue(driverNameRecord);
    //        //    var departmentRecord = record.data.AmnsDepartment;
    //        //    Ext.ComponentQuery.query('#DepartmentCombo')[0].setValue(departmentRecord);
    //        //    //load the sub-department dropdown options based on the department identifier of the record
    //        //    Ext.getCmp('SubDepartmentCombo').getStore().load(
    //        //        {
    //        //            params:
    //        //            {
    //        //                command: 2,
    //        //                departmentIdentifier: record.data.AmnsDepartmentIdentifier
    //        //            }
    //        //        });
    //        //    var subDepartmentRecord = record.data.AmnsSubDepartment;
    //        //    Ext.ComponentQuery.query('#SubDepartmentCombo')[0].setValue(subDepartmentRecord);
    //        //}
    //    }
    //}).show()
}

function showDRModel2() {
    //alert("yo")

    Ext.getCmp('dr-overview').setConfig('hidden', true);
    Ext.getCmp('dr-model1').setConfig('hidden', true);
    Ext.getCmp('dr-model2').setConfig('hidden', false);

    //var win = Ext.create('Ext.window.Window', {
    //    layout: 'fit',
    //    xtype: 'form',
    //    width: '75%',
    //    height: '75%',
    //    id: 'tislotFormWindow',
    //    items: {
    //        xtype: 'dent-resistance-model1'
    //    },
    //    listeners: {
    //        //beforeshow: function (form, options) {
    //        //    //set the ETA date and time controls
    //        //    estimatedTimeArrival = record.data.EstimatedTimeArrival;
    //        //    Ext.getCmp('EtaDate').setValue(dateTimePart(estimatedTimeArrival, 1));
    //        //    Ext.getCmp('EtaTime').setValue(dateTimePart(estimatedTimeArrival, 2));

    //        //    //display the badge times after being converted from UTC
    //        //    badgeEnterSite = record.data.BadgeEnterSite;
    //        //    if (badgeEnterSite != '0001-01-01T00:00:00') {
    //        //        Ext.getCmp('BadgeEnterSiteDisplay').setValue(formatDate(record.data.BadgeEnterSite, 1))
    //        //    }

    //        //    //display the badge times after being converted from UTC
    //        //    badgeExitSite = record.data.BadgeExitSite;
    //        //    if (badgeExitSite != '0001-01-01T00:00:00') {
    //        //        Ext.getCmp('BadgeExitSiteDisplay').setValue(formatDate(record.data.BadgeExitSite, 1))
    //        //    }

    //        //    //if there is a check in time in the database, display it and lock it for editing
    //        //    tiSlotCheckIn = record.data.TiSlotCheckIn;
    //        //    if (tiSlotCheckIn != '0001-01-01T00:00:00') {
    //        //        //convert tiSlotCheckIn from UTC in the database to local for display
    //        //        var tiSlotCheckInLocal = formatDate(tiSlotCheckIn, 1);
    //        //        Ext.getCmp('TiSlotCheckInDate').setValue(dateTimePart(tiSlotCheckInLocal, 1));
    //        //        Ext.getCmp('TiSlotCheckInTime').setValue(dateTimePart(tiSlotCheckInLocal, 2));
    //        //        Ext.getCmp('TiSlotCheckInDate').setConfig('readOnly', true);
    //        //        Ext.getCmp('TiSlotCheckInTime').setConfig('readOnly', true);
    //        //    }

    //        //    //set the displayed values in the remote combo boxes
    //        //    var amnsContactName = record.data.AmnsContactName;
    //        //    Ext.ComponentQuery.query('#AmnsContactNameCombo')[0].setValue(amnsContactName);
    //        //    var forCompanyRecord = record.data.ForCompany;
    //        //    Ext.ComponentQuery.query('#ForCompanyCombo')[0].setValue(forCompanyRecord);
    //        //    var vendorCarrierRecord = record.data.VendorCarrierName;
    //        //    Ext.ComponentQuery.query('#VendorCarrierCombo')[0].setValue(vendorCarrierRecord);
    //        //    var driverNameRecord = record.data.DriverName;
    //        //    Ext.ComponentQuery.query('#DriverNameCombo')[0].setValue(driverNameRecord);
    //        //    var departmentRecord = record.data.AmnsDepartment;
    //        //    Ext.ComponentQuery.query('#DepartmentCombo')[0].setValue(departmentRecord);
    //        //    //load the sub-department dropdown options based on the department identifier of the record
    //        //    Ext.getCmp('SubDepartmentCombo').getStore().load(
    //        //        {
    //        //            params:
    //        //            {
    //        //                command: 2,
    //        //                departmentIdentifier: record.data.AmnsDepartmentIdentifier
    //        //            }
    //        //        });
    //        //    var subDepartmentRecord = record.data.AmnsSubDepartment;
    //        //    Ext.ComponentQuery.query('#SubDepartmentCombo')[0].setValue(subDepartmentRecord);
    //        //}
    //    }
    //}).show()
}

function loadDRModel1() {
    //alert("yo")
    var win = Ext.create('Ext.window.Window', {
        layout: 'fit',
        xtype: 'form',
        width: '75%',
        height: '75%',
        id: 'tislotFormWindow',
        items: {
            xtype: 'dent-resistance-model1'
        },
        listeners: {
            //beforeshow: function (form, options) {
            //    //set the ETA date and time controls
            //    estimatedTimeArrival = record.data.EstimatedTimeArrival;
            //    Ext.getCmp('EtaDate').setValue(dateTimePart(estimatedTimeArrival, 1));
            //    Ext.getCmp('EtaTime').setValue(dateTimePart(estimatedTimeArrival, 2));

            //    //display the badge times after being converted from UTC
            //    badgeEnterSite = record.data.BadgeEnterSite;
            //    if (badgeEnterSite != '0001-01-01T00:00:00') {
            //        Ext.getCmp('BadgeEnterSiteDisplay').setValue(formatDate(record.data.BadgeEnterSite, 1))
            //    }

            //    //display the badge times after being converted from UTC
            //    badgeExitSite = record.data.BadgeExitSite;
            //    if (badgeExitSite != '0001-01-01T00:00:00') {
            //        Ext.getCmp('BadgeExitSiteDisplay').setValue(formatDate(record.data.BadgeExitSite, 1))
            //    }

            //    //if there is a check in time in the database, display it and lock it for editing
            //    tiSlotCheckIn = record.data.TiSlotCheckIn;
            //    if (tiSlotCheckIn != '0001-01-01T00:00:00') {
            //        //convert tiSlotCheckIn from UTC in the database to local for display
            //        var tiSlotCheckInLocal = formatDate(tiSlotCheckIn, 1);
            //        Ext.getCmp('TiSlotCheckInDate').setValue(dateTimePart(tiSlotCheckInLocal, 1));
            //        Ext.getCmp('TiSlotCheckInTime').setValue(dateTimePart(tiSlotCheckInLocal, 2));
            //        Ext.getCmp('TiSlotCheckInDate').setConfig('readOnly', true);
            //        Ext.getCmp('TiSlotCheckInTime').setConfig('readOnly', true);
            //    }

            //    //set the displayed values in the remote combo boxes
            //    var amnsContactName = record.data.AmnsContactName;
            //    Ext.ComponentQuery.query('#AmnsContactNameCombo')[0].setValue(amnsContactName);
            //    var forCompanyRecord = record.data.ForCompany;
            //    Ext.ComponentQuery.query('#ForCompanyCombo')[0].setValue(forCompanyRecord);
            //    var vendorCarrierRecord = record.data.VendorCarrierName;
            //    Ext.ComponentQuery.query('#VendorCarrierCombo')[0].setValue(vendorCarrierRecord);
            //    var driverNameRecord = record.data.DriverName;
            //    Ext.ComponentQuery.query('#DriverNameCombo')[0].setValue(driverNameRecord);
            //    var departmentRecord = record.data.AmnsDepartment;
            //    Ext.ComponentQuery.query('#DepartmentCombo')[0].setValue(departmentRecord);
            //    //load the sub-department dropdown options based on the department identifier of the record
            //    Ext.getCmp('SubDepartmentCombo').getStore().load(
            //        {
            //            params:
            //            {
            //                command: 2,
            //                departmentIdentifier: record.data.AmnsDepartmentIdentifier
            //            }
            //        });
            //    var subDepartmentRecord = record.data.AmnsSubDepartment;
            //    Ext.ComponentQuery.query('#SubDepartmentCombo')[0].setValue(subDepartmentRecord);
            //}
        }
    }).show()
}

$(document).ready(function () {

    $(function () {
        $("#tab-1066").click(function () {
            //alert("dent resistance tab.")
            Ext.getCmp('dr-overview').setConfig('hidden', false);
            Ext.getCmp('dr-model1').setConfig('hidden', true);
            Ext.getCmp('dr-model2').setConfig('hidden', true);
        });
    });

    $(function () {
        $("#tab-1067").click(function () {
            alert("oil canning tab.")
        });
    });

});
