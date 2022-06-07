/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'DentResistanceOilCanning.Application',

    name: 'DentResistanceOilCanning',

    requires: [
        // This will automatically load all classes in the DentResistanceOilCanning namespace
        // so that application classes do not need to require each other.
        'DentResistanceOilCanning.*'
    ],

    // The name of the initial view to create.
    mainView: 'DentResistanceOilCanning.view.main.Main'
});
