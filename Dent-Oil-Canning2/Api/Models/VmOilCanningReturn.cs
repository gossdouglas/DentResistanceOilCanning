using Dent_Oil_Canning2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Dent_Oil_Canning2.Api.Models
{
    public class VmOilCanningReturn
    {
        public List<Chart> chartList { get; set; }
        public OilCanning oilcanning { get; set; }
}
}