var str1 = '<a href="#" onclick="showOcCalculator()"><b>Oil Canning and Dent Resistance Calculator</b></a><br>' +
    'Oil canning is a phenomenon that results in a sudden drop in load when a panel is loaded. Depending on the severity of oil canning, ' +
    'this phenomenon can be accompanied by a loud noise. The oil canning load is the maximum load in the load displacement curve and is used ' +
    'as a measure of the stability of the panel structure. The model predicts the oil canning load and the load deflection ' +
    'behavior of the roof panel for when it is loaded using a 150mm flat indenter.' +

    '<p>A commonly accepted measure of quasi-static dent resistance is the load to produce a defined permanent set. The model predicts ' +
    'The model predicts the load for a permanent set of 0.1mm when loaded using a 25.4mm hemispherical indenter which is consistent with the ' +
    'measure recommended by the Auto/Steel Partnership.' +
    '<p>Note: The oil canning resistance and initial stiffness of panels can depend significantly on the type of indenter, the indenter size and the support conditions for the panel. </p>'

var str2 = '<a href="#" onclick="showOcBulkInput()"><b>Bulk Input</b></a><br>' +
    'This bulk input will allow Ford to run many inquires at one time reducing the time it takes them to analyze various thicknesses. ' +
    '<p><center><img src="images/oilcanningroof.jpg" border="1"><br>'

//var str3 = 'In North America, dent resistance has been most commonly evaluated by testing panel assemblies using the Auto/Steel Partnership ' +
//    ' procedure for quasi-static denting [1]. The dent test procedure consists of using a 25.4mm' +
//    'spherical indenter to apply a series of incrementally increasing loads to the panel. Figure 2 shows a ' +
//    'schematic of the data generated using the Auto/Steel Partnership procedure for evaluation of dent resistance. In the' +
//    'development of the dent resistance model displayed on this website, FEA simulations of the denting ' +
//    'process were used. The FEA simulations closely matched the Auto/Steel Partnership dent test procedure. ' +
//    '<p><center><img src="images/dentresistance1.gif" border="1" ><br><small>Figure 3: Schematic of the load-deflection data generated for ' +
//    'quasi-static dent testing [1].</small></center>'

//var str4 = '<u>Procedures for evaluating dent resistance of automotive body panels</u>, Auto/Steel Partnership, Southfield, MI, January 2001. '

//var str5 = '<p><center>&copy;Arcelor Mittal<br>' +
//    'Problems or Concerns, please contact the <a href="#"> <b>Support Team</b></a><br>Last Modified: 3 December 2021</center>'

//var str5 = '<p>&copy;Arcelor Mittal<br>' +
//    'Problems or Concerns, please contact the <a href="#"> <b>Support Team</b></a><br>Last Modified: 3 December 2021'

/**
 * This view is an example list of people.
 */
//Ext.define('DentResistanceOilCanning.view.main.List', {
Ext.define('DentResistanceOilCanning.view.main.OilCanningOverview', {
    extend: 'Ext.form.Panel',
    xtype: 'oil-canning-overview',
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
                        {
                            xtype: 'panel',
                            title: 'Models',
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
                                                    html: str1
                                                },
                                            ]
                                    },
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
                        //{
                        //    xtype: 'panel',
                        //    title: 'Brief Description of Dent Resistance models',
                        //    titleAlign: 'center',
                        //    width: '100%',
                        //    bodyPadding: '5',
                        //    flex: 9,
                        //    items:
                        //        [
                        //            {
                        //                xtype: 'panel',
                        //                layout: {
                        //                    type: 'hbox',
                        //                    align: 'stretch',
                        //                },
                        //                items:
                        //                    [
                        //                        {
                        //                            xtype: 'panel',
                        //                            width: '100%',
                        //                            html: str3
                        //                        },
                        //                    ]
                        //            },
                        //        ]
                        //},
                        //{
                        //    xtype: 'panel',
                        //    title: 'References',
                        //    titleAlign: 'center',
                        //    width: '100%',
                        //    bodyPadding: '5',
                        //    flex: 9,
                        //    items:
                        //        [
                        //            {
                        //                xtype: 'panel',
                        //                layout: {
                        //                    type: 'hbox',
                        //                    align: 'stretch',
                        //                },
                        //                items:
                        //                    [
                        //                        {
                        //                            xtype: 'panel',
                        //                            width: '5%',
                        //                            html: '1.'
                        //                        },
                        //                        {
                        //                            xtype: 'panel',
                        //                            width: '95%',
                        //                            html: str4
                        //                        },
                        //                    ]
                        //            },
                        //        ]
                        //},
                        {
                            xtype: 'panel',
                            //title: 'References',
                            //titleAlign: 'center',
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
                                                //{
                                                //    xtype: 'panel',
                                                //    width: '5%',
                                                //    html: '1.'
                                                //},
                                                {
                                                    xtype: 'panel',
                                                    width: '95%',
                                                    html: str5
                                                },
                                            ]
                                    },
                                ]
                        },
                    ]
            },

            //{
            //    xtype: 'panel',
            //    title: 'Models',
            //    titleAlign: 'center',
            //    width: '100%',
            //    bodyPadding: '5',
            //    flex: 9,
            //    items:
            //        [
            //            {
            //                xtype: 'panel',
            //                layout: {
            //                    type: 'hbox',
            //                    align: 'stretch',
            //                },
            //                items:
            //                    [
            //                        {
            //                            xtype: 'panel',
            //                            width: '5%',
            //                            html: '1.'
            //                        },                                  
            //                        {
            //                            xtype: 'panel',
            //                            width: '95%',
            //                            html: str1
            //                        },
            //                    ]
            //            },
            //            {
            //                xtype: 'panel',
            //                layout: {
            //                    type: 'hbox',
            //                    align: 'stretch',
            //                },
            //                items:
            //                    [
            //                        {
            //                            xtype: 'panel',
            //                            width: '5%',
            //                            html: '2.'
            //                        },
            //                        {
            //                            xtype: 'panel',
            //                            width: '95%',
            //                            html: str2
            //                        },
            //                    ]
            //            },
            //        ]
            //},
            //{
            //    xtype: 'panel',
            //    title: 'Brief Description of Dent Resistance models',
            //    titleAlign: 'center',
            //    width: '100%',
            //    bodyPadding: '5',
            //    flex: 9,
            //    items:
            //        [
            //            {
            //                xtype: 'panel',
            //                layout: {
            //                    type: 'hbox',
            //                    align: 'stretch',
            //                },
            //                items:
            //                    [
            //                        {
            //                            xtype: 'panel',
            //                            width: '100%',
            //                            html: str3
            //                        },
            //                    ]
            //            },
            //        ]
            //},
            //{
            //    xtype: 'panel',
            //    title: 'References',
            //    titleAlign: 'center',
            //    width: '100%',
            //    bodyPadding: '5',
            //    flex: 9,
            //    items:
            //        [
            //            {
            //                xtype: 'panel',
            //                layout: {
            //                    type: 'hbox',
            //                    align: 'stretch',
            //                },
            //                items:
            //                    [
            //                        {
            //                            xtype: 'panel',
            //                            width: '5%',
            //                            html: '1.'
            //                        },
            //                        {
            //                            xtype: 'panel',
            //                            width: '95%',
            //                            html: str4
            //                        },
            //                    ]
            //            },
            //        ]
            //},
            //{
            //    xtype: 'panel',
            //    //title: 'References',
            //    //titleAlign: 'center',
            //    width: '100%',
            //    bodyPadding: '5',
            //    flex: 9,
            //    items:
            //        [
            //            {
            //                xtype: 'panel',
            //                layout: {
            //                    type: 'hbox',
            //                    align: 'stretch',
            //                },
            //                items:
            //                    [
            //                        //{
            //                        //    xtype: 'panel',
            //                        //    width: '5%',
            //                        //    html: '1.'
            //                        //},
            //                        {
            //                            xtype: 'panel',
            //                            width: '95%',
            //                            html: str5
            //                        },
            //                    ]
            //            },
            //        ]
            //},
        ],
});