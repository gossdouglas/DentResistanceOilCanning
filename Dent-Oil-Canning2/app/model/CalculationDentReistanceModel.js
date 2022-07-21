Ext.define('DentResistanceOilCanning.model.CalculationDentReistanceModel', {
    extend: 'Ext.data.Model',
    idProperty: 'GradeKey',
    fields: [

        { name: 'GradeName', type: 'string' },
        { name: 'GradeKey', type: 'string' },
        { name: 'R1', type: 'string' },
        { name: 'R2', type: 'string' },
        { name: 'MajorStrain', type: 'string' },
        { name: 'MinorStrain', type: 'string' },
        { name: 'Thickness', type: 'string' },

        { name: 'ModelFormula', type: 'string' },
        { name: 'FootPounds', type: 'string' },
        { name: 'RunningTotal', type: 'string' },

        { name: 'PoundsForce', type: 'string' },
        { name: 'Result', type: 'string' }

    ]
})