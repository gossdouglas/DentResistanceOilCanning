using Dent_Oil_Canning2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Dent_Oil_Canning2.Api.Models
{
    public class VmBulkOilCanningReturn
    {
        //public OilCanning oilcanning { get; set; }

        public double ocvar { get; set; }
        public double peakld { get; set; }

        public double fvr { get; set; }
        public double svr { get; set; }
        public double gaugeini { get; set; }
        public double span { get; set; }
        public double emaj { get; set; }
        public double emin { get; set; }

        public double DDQ { get; set; }
        public double BH210 { get; set; }

        public double Deflection90 { get; set; }
        public double Deflection100 { get; set; }
    }
}