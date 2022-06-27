
Ext.define('DentResistanceOilCanning.view.main.DrM1FormController', {
    extend: 'Ext.app.ViewController',

    //alias: 'controller.tislotform',
    alias: 'controller.dr-model1-form-controller',

    //control: {
    //    //tie button to an action
    //    'button[name=locationAdd]': {
    //        click: 'onAddClick'
    //    },

    //    //removed from scope by Sean
    //    //'button[name=locationDelete]': {
    //    //    click: 'onDeleteClick'
    //    //},

    //    //tie button to an action
    //    'button[name=locationRefresh]': {
    //        click: 'onGridRefreshClick'
    //    }
    //},

    ////refresh button click
    //onGridRefreshClick: function () {
    //    this.getView().store.reload();
    //},

    //save button for a new ti-slot
    onCalculateDrM1Click: function (sender, record) {
        var form = this.getView().getForm();

        //if (!form.isDirty()) {
        //    Ext.Msg.alert('Status', 'No new data to create.');
        //    return;
        //}
        //else if (!form.isValid()) {
        //    Ext.Msg.alert('Save not allowed', 'Some required fields are empty.');
        //    //Ext.Message.show({
        //    //    title: "Save not allowed",
        //    //    msg: "Some required fields are empty.",
        //    //    buttons: Ext.MessageBox.OK,
        //    //    icon: Ext.MessageBox.WARNING
        //    //});
        //    return;
        //}

        // Submit the Ajax request and handle the response
        form.submit({
            url: 'api/DentResistance/CalculateModelOne',
            waitMsg: 'Calculating..',
            clientValidation: true,
            submitEmptyText: true,
            success: function (frm, action) {

                //var model = Ext.create('TiSlots.model.TiSlot');
                //var model = Ext.create('DentResistanceOilCanning.model.CalculationDentReistanceModel');
                var resp = Ext.decode(action.response.responseText);
                console.clear();
                console.log("calculation response: ");
                console.log(resp);
                //console.log(resp.data.GradeName);

                var calculationResults = Ext.create('Ext.panel.Panel', {
                    //renderTo: Ext.getBody(),
                    //renderTo: 'DrM1FormResultsPanel-targetEl',
                    //renderTo: 'DrM1FormResultsPanel-innerCt',

                    //renderTo: Ext.getCmp('DrM1FormResultsPanel'),
                    //renderTo: Ext.ComponentQuery.query('#DrM1FormResultsPanel')[0],
                    //renderTo: Ext.ComponentQuery.query('DrM1FormResultsPanel'),

                    width: 400,
                    height: 300,
                    //title: 'Container Panel',
                    layout: {
                        type: 'hbox',
                        align: 'stretch',
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            //id: '',
                            //name: '',
                            width: '11%',
                            value: resp.data.GradeName,
                            editable: false
                        },
                        {
                            xtype: 'textfield',
                            //id: '',
                            //name: '',
                            width: '11%',
                            value: resp.data.R1,
                            editable: false
                        },
                        {
                            xtype: 'textfield',
                            //id: '',
                            //name: '',
                            width: '11%',
                            value: resp.data.R2,
                            editable: false
                        },
                        {
                            xtype: 'textfield',
                            //id: '',
                            //name: '',
                            width: '11%',
                            value: resp.data.MajorStrain,
                            editable: false
                        },
                        {
                            xtype: 'textfield',
                            //id: '',
                            //name: '',
                            width: '11%',
                            value: resp.data.MinorStrain,
                            editable: false
                        },
                        {
                            xtype: 'textfield',
                            ///id: '',
                            //name: '',
                            width: '11%',
                            value: resp.data.Thickness,
                            editable: false
                        },
                        {
                            xtype: 'textfield',
                            //name: '',
                            width: '11%',
                            value: '.1',
                            editable: false
                        },
                        {
                            xtype: 'textfield',
                            //name: '',
                            width: '11%',
                            value: resp.data.RunningTotal,
                            editable: false
                        },
                        {
                            xtype: 'textfield',
                            //name: '',
                            width: '11%',
                            value: resp.data.FootPounds,
                            editable: false
                        },
                    ]
                });

                console.log("calculation results object: ");
                console.log(calculationResults);
                console.log(calculationResults.config);

                //var calcResults = Ext.create('dr-model1-calc-results');
                var calcResults = Ext.create('dr-model1-calc-results',
                    //{ title: 'panel 1', height: 350 }
                    {
                        items: [
                            {
                                xtype: 'textfield',
                                //id: '',
                                //name: '',
                                width: '11%',
                                value: resp.data.GradeName,
                                editable: false
                            },
                            {
                                xtype: 'textfield',
                                //id: '',
                                //name: '',
                                width: '11%',
                                value: resp.data.R1,
                                editable: false
                            },
                            {
                                xtype: 'textfield',
                                //id: '',
                                //name: '',
                                width: '11%',
                                value: resp.data.R2,
                                editable: false
                            },
                            {
                                xtype: 'textfield',
                                //id: '',
                                //name: '',
                                width: '11%',
                                value: resp.data.MajorStrain,
                                editable: false
                            },
                            {
                                xtype: 'textfield',
                                //id: '',
                                //name: '',
                                width: '11%',
                                value: resp.data.MinorStrain,
                                editable: false
                            },
                            {
                                xtype: 'textfield',
                                ///id: '',
                                //name: '',
                                width: '11%',
                                value: resp.data.Thickness,
                                editable: false
                            },
                            {
                                xtype: 'textfield',
                                //name: '',
                                width: '11%',
                                value: '.1',
                                editable: false
                            },
                            {
                                xtype: 'textfield',
                                //name: '',
                                width: '11%',
                                value: resp.data.RunningTotal,
                                editable: false
                            },
                            {
                                xtype: 'textfield',
                                //name: '',
                                width: '11%',
                                value: resp.data.FootPounds,
                                editable: false
                            },
                        ]
                    }
                );

                console.log('dr-model1-calc-results');
                console.log(calcResults);
                //console.log(calcResults.items[0]);//doesn't work
                //console.log(calcResults.items.items);works

                //console.log('calcResults.items.items[0]');//works
                //console.log(calcResults.items.items[0]);//works
                //console.log('calcResults.items.items[0].config');//works
                //console.log(calcResults.items.items[0].config);//works
                //console.log('calcResults.items.items[0].config.value');//works
                //console.log(calcResults.items.items[0].config.value);//works
                //calcResults.items.items[0].config.value = 'bitches'

                //console.log('calcResults.items.items[0].value');//works
                //console.log(calcResults.items.items[0].value);//works
                //calcResults.items.items[0].value = 'yo'
                //console.log('calcResults.items.items[0].value');//works
                //console.log(calcResults.items.items[0].value);//

                //Ext.ComponentQuery.query('DrM1FormResultsPanel-targetEl')[0].createChildcreateChild({
                //    tag: 'div',
                //    id: 'btnChild'
                //});

                //Ext.get(document.getElementById('DrM1FormResultsPanel-targetEl')).createChild(calculationResults.config);

                //Ext.get(document.getElementById('DrM1FormResultsPanel')).add(calculationResults.config);//causes an error

                //Ext.getCmp('DrM1FormResultsPanel').add(calculationResults.config);//works
                Ext.getCmp('DrM1FormResultsPanel').add(calcResults);//works

                //Ext.getCmp('DrM1FormResultsPanel-targetEl').add(calculationResults.config);//causes an error

                //$("#DrM1FormResultsPanel-targetEl").append(calculationResults);
                //$("#DrM1FormResultsPanel-targetEl").append("<div>yo</div>");

                //if (resp.data[0]) {
                //    model.set(resp.data[0]);
                //    form.loadRecord(model);
                //}

                //Ext.Msg.alert('Status', 'Record created successfully.', function (btn) {
                //    var win = frm.owner.ownerCt;

                //    var grid = Ext.getCmp('tislotgrid');

                //    grid.store.reload();
                //    //win.grid.store.reload();
                //    win.close();
                //});
            },
            failure: function (frm, action) {
                if (action.failureType === Ext.form.action.Action.CLIENT_INVALID) {
                    Ext.Msg.alert('CLIENT_INVALID', 'Something has been missed. Please check and try again.');
                }
                if (action.failureType === Ext.form.action.Action.CONNECT_FAILURE) {
                    Ext.Msg.alert('CONNECT_FAILURE', 'Status: ' + action.response.status + ': ' + action.response.statusText);
                }
                if (action.failureType === Ext.form.action.Action.SERVER_INVALID) {
                    Ext.Msg.alert('SERVER_INVALID', action.result.message);
                }
            }
        });
    },

    ////save button for a new ti-slot
    //onCreateClick: function (sender, record) {
    //    var form = this.getView().getForm();

    //    if (!form.isDirty()) {
    //        Ext.Msg.alert('Status', 'No new data to create.');
    //        return;
    //    }
    //    else if (!form.isValid()) {
    //        Ext.Msg.alert('Save not allowed', 'Some required fields are empty.');
    //        //Ext.Message.show({
    //        //    title: "Save not allowed",
    //        //    msg: "Some required fields are empty.",
    //        //    buttons: Ext.MessageBox.OK,
    //        //    icon: Ext.MessageBox.WARNING
    //        //});
    //        return;
    //    }

    //    // Submit the Ajax request and handle the response
    //    form.submit({
    //        url: 'api/tislot',
    //        waitMsg: 'Saving..',
    //        clientValidation: true,
    //        submitEmptyText: true,
    //        success: function (frm, action) {

    //            var model = Ext.create('TiSlots.model.TiSlot');
    //            var resp = Ext.decode(action.response.responseText);

    //            if (resp.data[0]) {
    //                model.set(resp.data[0]);
    //                form.loadRecord(model);
    //            }

    //            Ext.Msg.alert('Status', 'Record created successfully.', function (btn) {
    //                var win = frm.owner.ownerCt;

    //                var grid = Ext.getCmp('tislotgrid');

    //                grid.store.reload();
    //                //win.grid.store.reload();
    //                win.close();
    //            });
    //        },
    //        failure: function (frm, action) {
    //            if (action.failureType === Ext.form.action.Action.CLIENT_INVALID) {
    //                Ext.Msg.alert('CLIENT_INVALID', 'Something has been missed. Please check and try again.');
    //            }
    //            if (action.failureType === Ext.form.action.Action.CONNECT_FAILURE) {
    //                Ext.Msg.alert('CONNECT_FAILURE', 'Status: ' + action.response.status + ': ' + action.response.statusText);
    //            }
    //            if (action.failureType === Ext.form.action.Action.SERVER_INVALID) {
    //                Ext.Msg.alert('SERVER_INVALID', action.result.message);
    //            }
    //        }
    //    });
    //},

    //onReadClick: function (win, record) {
    //    var form = win.down('form').form;//this.getView().getForm();

    //    //result should contain success=true and data property otherwise it will go to failure even if there is no failure
    //    form.load({
    //        waitMsg: 'Loading...',
    //        method: 'GET',
    //        //url: 'api/tislot/' + record.TiSlotId,
    //        url: 'api/tislot/GetTiSlotById/' + record.TiSlotId,
    //        success: function (frm, action) {
    //            try {
    //                var resp = Ext.decode(action.response.responseText);

    //                if (resp.data.length > 0) {
    //                    var model = Ext.create('TiSlots.model.TiSlot');
    //                    model.set(resp.data);
    //                }
    //            }
    //            catch (ex) {
    //                Ext.Msg.alert('Status', 'Exception: ' + ex.Message);

    //            }
    //        },
    //        failure: function (frm, action) {
    //            Ext.Msg.alert("Load failed", action.result.errorMessage);
    //        }
    //    });
    //},

    ////save button for an edited ti-slot
    //onUpdateClick: function (sender, record) {
    //    var form = this.getView().getForm();

    //    if (!form.isDirty()) {
    //        Ext.Msg.alert('Status', 'No pending changes to save.');
    //        return;
    //    }
    //    else if (!form.isValid()) {
    //        Ext.Msg.alert('Save not allowed', 'Some required fields are empty.');
    //        return;
    //    }

    //    form.submit({
    //        url: 'api/tislot/',
    //        waitMsg: 'Updating..',
    //        method: 'PUT',
    //        clientValidation: true,
    //        success: function (frm, action) {
    //            try {
    //                var model = Ext.create('TiSlots.model.TiSlot');
    //                var resp = Ext.decode(action.response.responseText);

    //                if (resp.data.length > 0) {
    //                    model.set(resp.data[0]);
    //                    form.loadRecord(model);
    //                }

    //                Ext.Msg.alert('Status', 'Record updated successfully.', function (btn) {
    //                    var win = form.owner.ownerCt;

    //                    var grid = Ext.getCmp('tislotgrid');

    //                    grid.store.reload();

    //                    win.close();
    //                });


    //            }
    //            catch (ex) {
    //                Ext.Msg.alert('Status', 'Exception: ' + ex.Message);

    //            }
    //        },
    //        failure: function (frm, action) {
    //            if (action.failureType === Ext.form.action.Action.CLIENT_INVALID) {
    //                Ext.Msg.alert('CLIENT_INVALID', 'Something has been missed. Please check and try again.');
    //            }
    //            if (action.failureType === Ext.form.action.Action.CONNECT_FAILURE) {
    //                Ext.Msg.alert('CONNECT_FAILURE', 'Status: ' + action.response.status + ': ' + action.response.statusText);
    //            }
    //            if (action.failureType === Ext.form.action.Action.SERVER_INVALID) {
    //                Ext.Msg.alert('SERVER_INVALID', action.result.message);
    //            }
    //        }
    //    });
    //},

    ////double click on a record
    //onDoubleClick: function (e, record) {
    //    this.selectedRecord = record.data;

    //    //console.log(record.data)

    //    var win = Ext.create('Ext.window.Window', {
    //        layout: 'fit',
    //        xtype: 'form',
    //        width: '75%',
    //        height: '75%',
    //        id: 'tislotFormWindow',
    //        items: {
    //            xtype: 'tislotform'
    //        },
    //        listeners: {
    //            beforeshow: function (form, options) {
    //                //set the ETA date and time controls
    //                estimatedTimeArrival = record.data.EstimatedTimeArrival;
    //                Ext.getCmp('EtaDate').setValue(dateTimePart(estimatedTimeArrival, 1));
    //                Ext.getCmp('EtaTime').setValue(dateTimePart(estimatedTimeArrival, 2));

    //                //display the badge times after being converted from UTC
    //                badgeEnterSite = record.data.BadgeEnterSite;
    //                if (badgeEnterSite != '0001-01-01T00:00:00') {
    //                    Ext.getCmp('BadgeEnterSiteDisplay').setValue(formatDate(record.data.BadgeEnterSite, 1))
    //                }

    //                //display the badge times after being converted from UTC
    //                badgeExitSite = record.data.BadgeExitSite;
    //                if (badgeExitSite != '0001-01-01T00:00:00') {
    //                    Ext.getCmp('BadgeExitSiteDisplay').setValue(formatDate(record.data.BadgeExitSite, 1))
    //                }

    //                //if there is a check in time in the database, display it and lock it for editing
    //                tiSlotCheckIn = record.data.TiSlotCheckIn;
    //                if (tiSlotCheckIn != '0001-01-01T00:00:00') {
    //                    //convert tiSlotCheckIn from UTC in the database to local for display
    //                    var tiSlotCheckInLocal = formatDate(tiSlotCheckIn, 1);
    //                    Ext.getCmp('TiSlotCheckInDate').setValue(dateTimePart(tiSlotCheckInLocal, 1));
    //                    Ext.getCmp('TiSlotCheckInTime').setValue(dateTimePart(tiSlotCheckInLocal, 2));
    //                    Ext.getCmp('TiSlotCheckInDate').setConfig('readOnly', true);
    //                    Ext.getCmp('TiSlotCheckInTime').setConfig('readOnly', true);
    //                }

    //                //set the displayed values in the remote combo boxes
    //                var amnsContactName = record.data.AmnsContactName;
    //                Ext.ComponentQuery.query('#AmnsContactNameCombo')[0].setValue(amnsContactName);
    //                var forCompanyRecord = record.data.ForCompany;
    //                Ext.ComponentQuery.query('#ForCompanyCombo')[0].setValue(forCompanyRecord);
    //                var vendorCarrierRecord = record.data.VendorCarrierName;
    //                Ext.ComponentQuery.query('#VendorCarrierCombo')[0].setValue(vendorCarrierRecord);
    //                var driverNameRecord = record.data.DriverName;
    //                Ext.ComponentQuery.query('#DriverNameCombo')[0].setValue(driverNameRecord);
    //                var departmentRecord = record.data.AmnsDepartment;
    //                Ext.ComponentQuery.query('#DepartmentCombo')[0].setValue(departmentRecord);
    //                //load the sub-department dropdown options based on the department identifier of the record
    //                Ext.getCmp('SubDepartmentCombo').getStore().load(
    //                    {
    //                        params:
    //                        {
    //                            command: 2,
    //                            departmentIdentifier: record.data.AmnsDepartmentIdentifier
    //                        }
    //                    });
    //                var subDepartmentRecord = record.data.AmnsSubDepartment;
    //                Ext.ComponentQuery.query('#SubDepartmentCombo')[0].setValue(subDepartmentRecord);
    //            }
    //        }
    //    }).show()

    //    win.isUpdate = true;
    //    win.record = record.data;
    //    win.grid = this.getView();

    //    this.onReadClick(win, record.data);
    //},

    ////click the add button
    //onAddClick: function (button, e, options) {
    //    var win = Ext.create('Ext.window.Window', {
    //        layout: 'fit',
    //        xtype: 'form',
    //        width: '75%',
    //        height: '75%',
    //        id: 'tislotFormWindow',
    //        items: {
    //            xtype: 'tislotform'
    //        },
    //        listeners: {
    //            beforeshow: function (form, options) {
    //                //set some default values for date and time
    //                Ext.getCmp('EtaDate').setValue(new Date());
    //                Ext.getCmp('EtaTime').setValue('7:00 AM');
    //                var dateData = Ext.getCmp('EtaDate').getSubmitValue();
    //                var timeData = Ext.getCmp('EtaTime').getSubmitValue();
    //                var dateTime = dateData + ' ' + timeData;
    //                //set the default date time to UTC
    //                dateTime = formatDate(dateTime, 2)

    //                Ext.getCmp('EstimatedTimeArrival').setValue(dateTime);

    //                //set the user key
    //                var userSessionKeyOnLoad = Ext.getCmp('UserSessionKeyOnLoad').getSubmitValue();
    //                Ext.getCmp('UserSessionKey').setValue(userSessionKeyOnLoad);
    //            }
    //        },
    //    }).show()

    //    Ext.Ajax.request({
    //        url: 'api/tislotnumber/',
    //        method: 'POST',
    //        success: function (response, opts) {
    //            var resp = Ext.decode(response.responseText);
    //            var data = resp.data;
    //            Ext.getCmp('tislotnumber').setValue(data.TiSlotNumberId);
    //        },
    //        failure: function (response, opts) {
    //        }
    //    });

    //    var store = Ext.getStore('tislot');
    //    win.isUpdate = false;
    //    //store.proxy.extraParams = { type: 'Base' };
    //},

    //onSaveClick: function (sender, record, e) {
    //    var view = Ext.getCmp('tislotFormWindow');
    //    if (view.isUpdate) {
    //        this.onUpdateClick(sender, view.record);
    //    } else {
    //        this.onCreateClick(sender, view.record);
    //    }
    //},

    ////cancel button for the new ti-slot and edit ti-slot pages
    //onCancelClick: function (sender, record, e) {
    //    this.getView().ownerCt.close();
    //},

    ////click an individual record
    //onItemSelected: function (e, record) {
    //    this.selectedRecord = record.data;
    //},
});
