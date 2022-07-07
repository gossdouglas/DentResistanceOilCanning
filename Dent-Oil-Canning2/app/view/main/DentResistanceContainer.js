var str1 = '<a href="#" onclick="showDRModel1()"><b>Load for 0.1mm Dent Depth</b></a>' +
    '<br>A commonly accepted measure of quasi-static dent resistance is the load to produce a ' +
    'residual dent of depth 0.1mm, which is considered as a visible dent for most panel conditions.  ' +
    'The visible dent load is determined by linear regression between the pair of load-dent depth data ' +
    'that are closest to 0.1mm.'

var str2 = '<a href="#" onclick="showDRModel2()"><b>Dent Depth for a Given Applied Load</b></a>' +
    '<br>Often, it is useful to determine the dent depth at any applied load. ' +
    'Figure 1 shows a typical load vs. dent depth plot.  Using these characteristic plots, it is possible  ' +
    'to determine the resulting dent depth in a panel for any given applied load. ' +
    '<p><center><img src="images/dentresistance2.gif" border="1"><br><small>Figure 1: Load vs. dent depth characteristics.</small ></center >'

var str3 = 'In North America, dent resistance has been most commonly evaluated by testing panel assemblies using the Auto/Steel Partnership ' +
    ' procedure for quasi-static denting [1]. The dent test procedure consists of using a 25.4mm' +
    'spherical indenter to apply a series of incrementally increasing loads to the panel. Figure 2 shows a ' +
    'schematic of the data generated using the Auto/Steel Partnership procedure for evaluation of dent resistance. In the' +
    'development of the dent resistance model displayed on this website, FEA simulations of the denting ' +
    'process were used. The FEA simulations closely matched the Auto/Steel Partnership dent test procedure. ' +
    '<p><center><img src="images/dentresistance1.gif" border="1" ><br><small>Figure 3: Schematic of the load-deflection data generated for ' +
    'quasi-static dent testing [1].</small></center>'

var str4 = '<u>Procedures for evaluating dent resistance of automotive body panels</u>, Auto/Steel Partnership, Southfield, MI, January 2001. '

var str5 = '<p><center>&copy;Arcelor Mittal<br>' +
    'Problems or Concerns, please contact the <a href="#"> <b>Support Team</b></a><br>Last Modified: 3 December 2021</center>'

Ext.define('DentResistanceOilCanning.view.main.DentResistanceContainer', {
    extend: 'Ext.form.Panel',
    xtype: 'dent-resistance-container',
    items:
        [          
            {
                xtype: 'dent-resistance-overview',
                id: 'dr-overview',
                width: '100%',
                bodyPadding: '5',
                flex: 9,
                hidden: true,
            },

            {
                xtype: 'dent-resistance-model1',
                id: 'dr-model1',
                //width: '100%',
                //bodyPadding: '5',
                //flex: 9,
                hidden: true,
            },
            {
                xtype: 'dent-resistance-model2',
                id: 'dr-model2',
                //width: '100%',
                //bodyPadding: '5',
                //flex: 9,
                hidden: true,
            },
        ],
});