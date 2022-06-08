//var str1 = '<a href="#" onclick="showDRModel1()"><b>Oil Canning and Dent Resistance Calculator</b></a>' +
//    'Oil canning is a phenomenon that results in a sudden drop in load when a panel is loaded. Depending on the severity of oil canning, ' +
//    'this phenomenon can be accompanied by a loud noise. The oil canning load is the maximum load in the load displacement curve and is used ' +
//    'as a measure of the stability of the panel structure. The model predicts the oil canning load and the load deflection ' +
//    'behavior of the roof panel for when it is loaded using a 150mm flat indenter. <br>' +

//    'A commonly accepted measure of quasi-static dent resistance is the load to produce a defined permanent set. The model predicts ' +
//    '' +
//    '' +
//    '' 

////var str2 = '<a href="#" onclick="showDRModel2()"><b>Dent Depth for a Given Applied Load</b></a>' +
////    '<br>Often, it is useful to determine the dent depth at any applied load. ' +
////    'Figure 1 shows a typical load vs. dent depth plot.  Using these characteristic plots, it is possible  ' +
////    'to determine the resulting dent depth in a panel for any given applied load. ' +
////    '<p><center><img src="images/dentresistance2.gif" border="1"><br><small>Figure 1: Load vs. dent depth characteristics.</small ></center >'

////var str3 = 'In North America, dent resistance has been most commonly evaluated by testing panel assemblies using the Auto/Steel Partnership ' +
////    ' procedure for quasi-static denting [1]. The dent test procedure consists of using a 25.4mm' +
////    'spherical indenter to apply a series of incrementally increasing loads to the panel. Figure 2 shows a ' +
////    'schematic of the data generated using the Auto/Steel Partnership procedure for evaluation of dent resistance. In the' +
////    'development of the dent resistance model displayed on this website, FEA simulations of the denting ' +
////    'process were used. The FEA simulations closely matched the Auto/Steel Partnership dent test procedure. ' +
////    '<p><center><img src="images/dentresistance1.gif" border="1" ><br><small>Figure 3: Schematic of the load-deflection data generated for ' +
////    'quasi-static dent testing [1].</small></center>'

////var str4 = '<u>Procedures for evaluating dent resistance of automotive body panels</u>, Auto/Steel Partnership, Southfield, MI, January 2001. '

////var str5 = '<p><center>&copy;Arcelor Mittal<br>' +
////    'Problems or Concerns, please contact the <a href="#"> <b>Support Team</b></a><br>Last Modified: 3 December 2021</center>'

Ext.define('DentResistanceOilCanning.view.main.OilCanningContainer', {
    extend: 'Ext.form.Panel',
    xtype: 'oil-canning-container',
    items:
        [
            {
                xtype: 'oil-canning-overview',
                id: 'oc-overview',
                //width: '100%',
                //bodyPadding: '5',
                //flex: 9,
           //   //hidden: tr//,
            },
            //{
            ////  xtype: 'dent-resistance-model1',//            //    id: 'dr-model1',//            //    //width: '100%',
 //         //    //bodyPadding//'5',
            //    //flex://,
            ///   hidden: true//
            //},
            //{
            ////  xtype: 'dent-resistance-model2',//            //    id: 'dr-model2',//            //    //width: '100%',
 //         //    //bodyPadding//'5',
            //    //flex://,
            //    hidden: true,
            //},
        ],
});