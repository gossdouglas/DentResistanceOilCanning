Ext.define('DentResistanceOilCanning.view.main.DrM1Form', {
    extend: 'Ext.form.Panel',
    //xtype: 'tislotform',
    xtype: 'dr-model1-form',
    border: false,
    controller: 'dr-model1-form-controller',
    scrollable: true,
    url: 'api/DentResistanc/CalculateModelOne',

    items:
        [
            {
                xtype: 'panel',
                //title: 'Ti-slot Information',
                //titleAlign: 'center',
                width: '100%',
                bodyPadding: '5',
                flex: 1,
                items:
                    [
                        //entry fields
                        {
                            xtype: 'panel',
                            layout: {
                                type: 'hbox',
                                align: 'stretch',
                            },
                            items:
                                [
                                    {
                                        xtype: 'textfield',
                                        //width: '3%',
                                        id: 'GradeKey',
                                        name: 'GradeKey',
                                        bind: '{gradeKeyDrM1Combo.value}',
                                        hidden: true,
                                        readOnly: true,
                                    },
                                    {
                                        xtype: 'textfield',
                                        //width: '3%',
                                        id: 'GradeName',
                                        name: 'GradeName',
                                        hidden: true,
                                        readOnly: false,
                                    },
                                    {
                                        xtype: 'combobox',
                                        width: '11%',
                                        id: 'GradeKeyDrM1Combo',
                                        reference: 'gradeKeyDrM1Combo',
                                        publishes: 'value',
                                        fieldLabel: 'Grade',
                                        labelAlign: 'top',
                                        displayField: 'grade_name',
                                        valueField: 'grade_key',
                                        store: {
                                            type: 'GradeStoreModel1',
                                            autoLoad: true
                                        },
                                        queryMode: 'local',
                                        //queryMode: 'remote',
                                        allowBlank: false,
                                        listeners: {
                                            select: function (combo, record) {

                                                console.log(this.selection);
                                                console.log(this.selection.data.grade_name);
                                                Ext.getCmp('GradeName').setValue(record.get('grade_name'));

                                                //Ext.getCmp('AmnsDepartmentIdentifier').setValue(record.get('DepartmentIdentifier'));
                                                //Ext.getCmp('SubDepartmentCombo').setValue('');
                                                //Ext.getCmp('SubDepartmentCombo').getStore().load(
                                                //    {
                                                //        params:
                                                //        {
                                                //            command: 2,
                                                //            departmentIdentifier: record.get('DepartmentIdentifier'),
                                                //        }
                                                //    });
                                            }
                                        }
                                    },
                                    {
                                        xtype: 'textfield',
                                        id: 'R1DrM1',
                                        name: 'R1',
                                        fieldLabel: 'R1 (mm)',
                                        labelAlign: 'top',
                                        width: '11%',
                                    },
                                    {
                                        xtype: 'textfield',
                                        id: 'R2DrM1',
                                        name: 'R2',
                                        fieldLabel: 'R2 (mm)',
                                        labelAlign: 'top',
                                        width: '11%',
                                    },
                                    {
                                        xtype: 'textfield',
                                        id: 'MajorStrainDrM1',
                                        name: 'MajorStrain',
                                        fieldLabel: 'Major Strain (%)',
                                        labelAlign: 'top',
                                        width: '11%',
                                    },
                                    {
                                        xtype: 'textfield',
                                        id: 'MinorStrainDrM1',
                                        name: 'MinorStrain',
                                        fieldLabel: 'Minor Strain (%)',
                                        labelAlign: 'top',
                                        width: '11%',
                                    },
                                    {
                                        xtype: 'textfield',
                                        id: 'ThicknessDrM1',
                                        name: 'Thickness',
                                        fieldLabel: 'Thickness (mm)',
                                        labelAlign: 'top',
                                        width: '11%',
                                    },
                                    {
                                        xtype: 'textfield',
                                        name: '',
                                        fieldLabel: 'Dent Depth',
                                        labelAlign: 'top',
                                        width: '11%',
                                        value: '.1',
                                        editable: false
                                    },
                                    {
                                        xtype: 'textfield',
                                        name: '',
                                        fieldLabel: 'Newtons (N)',
                                        labelAlign: 'top',
                                        width: '11%',
                                        value: 'N/A',
                                        editable: false
                                    },
                                    {
                                        xtype: 'textfield',
                                        name: '',
                                        fieldLabel: 'Lb. Force (lbf)',
                                        labelAlign: 'top',
                                        width: '11%',
                                        value: 'N/A',
                                        editable: false
                                    },
                                ]
                        },
                        //range notes
                        {
                            xtype: 'panel',
                            layout: {
                                type: 'hbox',
                                align: 'stretch',
                            },
                            items:
                                [
                                    {
                                        xtype: 'label',
                                        text: '',
                                        width: '11%',
                                    },
                                    {
                                        xtype: 'panel',
                                        width: '11%',
                                        html: '<center>150<br>to<br>2500</center>',
                                    },
                                    {
                                        xtype: 'panel',
                                        width: '11%',
                                        html: '<center>15000<br>to<br>150000</center>',
                                    },
                                    {
                                        xtype: 'panel',
                                        width: '11%',
                                        html: '<center>.25%<br>to<br>2%</center>',
                                    },
                                    {
                                        xtype: 'panel',
                                        width: '11%',
                                        html: '<center>.25%<br>to<br>2%</center>',
                                    },
                                    {
                                        xtype: 'panel',
                                        width: '11%',
                                        html: '<center>.65 mm<br>to<br>.8 mm</center>',
                                    },
                                    {
                                        xtype: 'panel',
                                        width: '11%',
                                    },
                                    {
                                        xtype: 'panel',
                                        width: '11%',
                                    },
                                    {
                                        xtype: 'panel',
                                        width: '11%',
                                    },
                                ]
                        },
                        //calculate button
                        {
                            xtype: 'panel',
                            layout: {
                                type: 'hbox',
                                align: 'stretch',
                            },
                            items:
                                [
                                    {
                                        xtype: 'button',
                                        text: "Calculate",
                                        margin: '20 10 0 0',
                                        width: '100%',
                                        listeners: {
                                            click: 'onCalculateDrM1Click'
                                        }
                                    },
                                ]
                        },
                    ]
            },
            //results panel
            {
                xtype: 'panel',
                //id: 'DrM1FormResultsPanel',
                //itemId: 'DrM1FormResultsPanel',
                //name: 'DrM1FormResultsPanel',
                title: 'Results',
                titleAlign: 'center',
                width: '100%',
                bodyPadding: '5',
                //html: '<div id="DrM1FormResultsPanel">yo</div>',
                items:
                    [

                        //{
                        //    xtype: 'dr-model1-calc-results',
                        //    //xtype: 'dr-model1-calc-results',
                        //    //id: '',
                        //    //name: '',
                        //    //width: '11%',
                        //    //value: 'Grade Name',
                        //    //editable: false
                        //},

                        //
                        {
                            xtype: 'panel',
                            id: 'DrM1FormResultsPanel',
                            //name: 'DrM1FormResultsPanel',
                            layout: {
                                type: 'hbox',
                                align: 'stretch',
                            },
                            items:
                                [
                                    //{
                                    //    xtype: 'dr-model1-calc-results',
                                    //    //xtype: 'dr-model1-calc-results',
                                    //    //id: '',
                                    //    //name: '',
                                    //    //width: '11%',
                                    //    //value: 'Grade Name',
                                    //    //editable: false
                                    //},

                                    //{
                                    //    xtype: 'textfield',
                                    //    //id: '',
                                    //    //name: '',
                                    //    width: '11%',
                                    //    value: 'Grade Name',
                                    //    editable: false
                                    //},
                                    //{
                                    //    xtype: 'textfield',
                                    //    //id: '',
                                    //    //name: '',
                                    //    width: '11%',
                                    //    value: 'R1',
                                    //    editable: false
                                    //},
                                    //{
                                    //    xtype: 'textfield',
                                    //    //id: '',
                                    //    //name: '',
                                    //    width: '11%',
                                    //    value: 'R2',
                                    //    editable: false
                                    //},
                                    //{
                                    //    xtype: 'textfield',
                                    //    //id: '',
                                    //    //name: '',
                                    //    width: '11%',
                                    //    value: 'Major Strain',
                                    //    editable: false
                                    //},
                                    //{
                                    //    xtype: 'textfield',
                                    //    //id: '',
                                    //    //name: '',
                                    //    width: '11%',
                                    //    value: 'Minor Strain',
                                    //    editable: false
                                    //},
                                    //{
                                    //    xtype: 'textfield',
                                    //    ///id: '',
                                    //    //name: '',
                                    //    width: '11%',
                                    //    value: 'Thickness',
                                    //    editable: false
                                    //},
                                    //{
                                    //    xtype: 'textfield',
                                    //    //name: '',
                                    //    width: '11%',
                                    //    value: '.1',
                                    //    value: 'Dent Depth',
                                    //    editable: false
                                    //},
                                    //{
                                    //    xtype: 'textfield',
                                    //    //name: '',
                                    //    width: '11%',
                                    //    value: 'RunningTotal',
                                    //    editable: false
                                    //},
                                    //{
                                    //    xtype: 'textfield',
                                    //    //name: '',
                                    //    width: '11%',
                                    //    value: 'FootPounds',
                                    //    editable: false
                                    //},
                                ]
                        },
                    ]
            },
        ],
});



