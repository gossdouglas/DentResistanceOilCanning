using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using ClosedXML.Excel;
using Microsoft.VisualBasic;
using Microsoft.VisualBasic.CompilerServices;
using System.Configuration;
using System.Data;
using System.Data.OleDb;
using System.IO;
using System.Runtime.CompilerServices;
using System.Text;
using System.Text.RegularExpressions;
using System.Web.Profile;
using System.Web.SessionState;

namespace Dent_Oil_Canning2
{
    public partial class OilCanningBulkInput : System.Web.UI.Page
    //public class OilCanningBulkInput : Page, IRequiresSessionState
    {
        //protected void Page_Load(object sender, EventArgs e)
        //{

        //}

        [AccessedThroughProperty("lblErrorMSG")]
        private Label _lblErrorMSG;
        [AccessedThroughProperty("FileUpload1")]
        private FileUpload _FileUpload1;
        [AccessedThroughProperty("btnLoadExcel")]
        private Button _btnLoadExcel;
        [AccessedThroughProperty("btnExport")]
        private Button _btnExport;
        [AccessedThroughProperty("gvOilCanningData")]
        private GridView _gvOilCanningData;
        private DataSet c_dsOilCanning;
        private string sWeb_User_Key;
        private string sWeb_User_Type;
        private DataRow[] c_dsOilCanningRow;
        private string strReturn;
        private object oilcanningload;
        private object oilcanningbool;
        private object ddq;
        private object bh210;
        private string strCachePage;
        private string strPageName;
        private double fvr;
        private double FVC;
        private double svr;
        private double SVC;
        private double Thickness;
        private double span;
        private double emaj;
        private double emin;
        private double eps;
        private double eps1;
        private double eps2;
        private double eps3;
        private double gauge;
        private double rval;
        private double fact1;
        private double fact2;
        private double x1;
        private double x2;
        private double x3;
        private double x4;
        private double peakld;
        private double slinit;
        private double peakde;
        private double peakd2;
        private double dentDeptDDQ;
        private double dentDeptBH210;
        private double s1;
        private double s2;
        private double b;
        private double i;
        private double ocvar;
        private double deflactionMin;
        private double deflactionMax;
        private double loadMin;
        private double loadMax;

        public OilCanningBulkInput()
        {
            this.Load += new EventHandler(this.Page_Load);
            this.Unload += new EventHandler(this.Page_Unload);
        }

        protected virtual Label lblErrorMSG
        {
            get => this._lblErrorMSG;
            [MethodImpl(MethodImplOptions.Synchronized)]
            set => this._lblErrorMSG = value;
        }

        protected virtual FileUpload FileUpload1
        {
            get => this._FileUpload1;
            [MethodImpl(MethodImplOptions.Synchronized)]
            set => this._FileUpload1 = value;
        }

        protected virtual Button btnLoadExcel
        {
            get => this._btnLoadExcel;
            [MethodImpl(MethodImplOptions.Synchronized)]
            set
            {
                EventHandler eventHandler = new EventHandler(this.btnLoadExcel_Click);
                if (this._btnLoadExcel != null)
                    this._btnLoadExcel.Click -= eventHandler;
                this._btnLoadExcel = value;
                if (this._btnLoadExcel == null)
                    return;
                this._btnLoadExcel.Click += eventHandler;
            }
        }

        protected virtual Button btnExport
        {
            get => this._btnExport;
            [MethodImpl(MethodImplOptions.Synchronized)]
            set
            {
                EventHandler eventHandler = new EventHandler(this.btnExport_Click);
                if (this._btnExport != null)
                    this._btnExport.Click -= eventHandler;
                this._btnExport = value;
                if (this._btnExport == null)
                    return;
                this._btnExport.Click += eventHandler;
            }
        }

        protected virtual GridView gvOilCanningData
        {
            get => this._gvOilCanningData;
            [MethodImpl(MethodImplOptions.Synchronized)]
            set => this._gvOilCanningData = value;
        }

        protected DefaultProfile Profile => (DefaultProfile)this.Context.Profile;

        protected HttpApplication ApplicationInstance => this.Context.ApplicationInstance;

        public MasterPage Master => (MasterPage)base.Master;

        protected void Page_Load(object sender, EventArgs e)
        {
            this.strPageName = "Oil Canning Bulk Input";
            this.strCachePage = "OilCanning";
            this.lblErrorMSG.Text = "";
            this.sWeb_User_Key = "0";
            this.sWeb_User_Type = "1";
            if (!this.Page.IsPostBack & this.c_dsOilCanning != null)
            {
                this.c_dsOilCanning = new DataSet();
                this.gvOilCanningData.DataSource = (object)this.c_dsOilCanning;
                this.gvOilCanningData.DataBind();
                this.gvOilCanningData.Visible = true;
            }
            else
            {
                if (this.Session["c_dsOilCanning"] == null)
                    return;
                this.c_dsOilCanning = (DataSet)this.Session["c_dsOilCanning"];
            }
        }

        protected void Page_Unload(object sender, EventArgs e)
        {
            if (!this.Page.IsPostBack || this.c_dsOilCanning == null)
                return;
            this.Session["c_dsOilCanning"] = (object)this.c_dsOilCanning;
        }

        protected void btnLoadExcel_Click(object sender, EventArgs e)
        {
            Path.GetFileName(this.FileUpload1.PostedFile.FileName);
            string extension = Path.GetExtension(this.FileUpload1.PostedFile.FileName);
            string str1 = nameof(btnLoadExcel_Click);
            string str2 = string.Empty;
            bool flag = false;
            try
            {
                if (this.FileUpload1.HasFile)
                {
                    string str3 = "c:\\Temp\\" + this.sWeb_User_Key + "_" + DateTime.Now.ToString("yyyy-MM-dd-HHmmss") + extension;
                    if (File.Exists(str3))
                        File.Delete(str3);
                    this.lblErrorMSG.Visible = true;
                    this.lblErrorMSG.Text = str3;
                    this.FileUpload1.SaveAs(str3);
                    if (!this.Load_Excel_Data_To_Grid(str3, extension))
                        return;
                    flag = this.ValidationCheck();
                    this.BindData();
                    this.gvOilCanningData.Visible = true;
                    this.btnExport.Enabled = true;
                }
                else
                {
                    this.btnExport.Enabled = false;
                    this.lblErrorMSG.Text = " Please Browse And Select A Excel Spreadsheet";
                    this.lblErrorMSG.Visible = true;
                }
            }
            catch (IOException ex)
            {
                ProjectData.SetProjectError((Exception)ex);
                IOException ioException = ex;
                this.c_dsOilCanning = new DataSet();
                this.btnExport.Enabled = false;
                this.lblErrorMSG.Text = ioException.Message.ToString();
                this.lblErrorMSG.Visible = true;
                Information.Err();
                str2 = "Unable to perform " + str1 + "  STACKTRACE:" + Strings.Right(ioException.StackTrace.ToString(), 500);
                ProjectData.ClearProjectError();
            }
        }

        protected void btnExport_Click(object sender, EventArgs e)
        {
            string str1 = nameof(btnExport_Click);
            string str2 = string.Empty;
            DataTable dataTable1 = new DataTable();
            try
            {
                DataTable dataTable2 = this.c_dsOilCanning.Tables[0].Copy();
                dataTable2.TableName = "OilCanning";
                using (XLWorkbook xlWorkbook = new XLWorkbook())
                {
                    xlWorkbook.Worksheets.Add(dataTable2);
                    this.Response.Clear();
                    this.Response.Buffer = true;
                    this.Response.ContentEncoding = Encoding.Unicode;
                    this.Response.Charset = "";
                    this.Response.ContentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
                    this.Response.AddHeader("content-disposition", "attachment;filename=OilCanningOutput.xlsx");
                    using (MemoryStream memoryStream = new MemoryStream())
                    {
                        xlWorkbook.SaveAs((Stream)memoryStream);
                        memoryStream.WriteTo(this.Response.OutputStream);
                        this.Response.Flush();
                        this.Response.End();
                    }
                }
            }
            catch (Exception ex)
            {
                ProjectData.SetProjectError(ex);
                Exception exception = ex;
                this.lblErrorMSG.Text = exception.Message;
                this.lblErrorMSG.Visible = true;
                Information.Err();
                str2 = "Unable to perform " + str1 + "  STACKTRACE:" + Strings.Right(exception.StackTrace.ToString(), 500);
                ProjectData.ClearProjectError();
            }
        }

        [MethodImpl(MethodImplOptions.NoInlining | MethodImplOptions.NoOptimization)]
        private bool Load_Excel_Data_To_Grid(string FilePath, string Extension)
        {
            string format = "";
            OleDbCommand oleDbCommand = new OleDbCommand();
            OleDbDataAdapter oleDbDataAdapter = new OleDbDataAdapter();
            string Source = nameof(Load_Excel_Data_To_Grid);
            string empty = string.Empty;
            bool grid = false;
            try
            {
                string Left1 = Extension;
                if (Microsoft.VisualBasic.CompilerServices.Operators.CompareString(Left1, ".xls", false) == 0)
                    format = ConfigurationManager.ConnectionStrings["Excel03ConString"].ConnectionString;
                else if (Microsoft.VisualBasic.CompilerServices.Operators.CompareString(Left1, ".xlsx", false) == 0)
                    format = ConfigurationManager.ConnectionStrings["Excel07ConString"].ConnectionString;
                OleDbConnection oleDbConnection = new OleDbConnection(string.Format(format, (object)FilePath));
                oleDbCommand.Connection = oleDbConnection;
                oleDbConnection.Open();
                DataTable oleDbSchemaTable1 = oleDbConnection.GetOleDbSchemaTable(OleDbSchemaGuid.Tables, (object[])null);
                DataTable oleDbSchemaTable2 = oleDbConnection.GetOleDbSchemaTable(OleDbSchemaGuid.Columns, (object[])null);
                string Left2 = "";
                double num = (double)checked(oleDbSchemaTable1.Rows.Count - 1);
                for (this.i = 0.0; this.i <= num; ++this.i)
                {
                    if (Microsoft.VisualBasic.CompilerServices.Operators.CompareString(oleDbSchemaTable1.Rows[checked((int)Math.Round(this.i))]["TABLE_NAME"].ToString().ToUpper(), "OILCANNING$", false) == 0)
                    {
                        Left2 = oleDbSchemaTable1.Rows[checked((int)Math.Round(this.i))]["TABLE_NAME"].ToString();
                        break;
                    }
                }
                if (Microsoft.VisualBasic.CompilerServices.Operators.CompareString(Left2, "", false) == 0)
                {
                    this.btnExport.Enabled = false;
                    this.lblErrorMSG.Text = " Sheet Name 'OilCanning' not in Spreadsheet, Please Reload\"";
                    this.lblErrorMSG.Visible = true;
                    oleDbConnection.Close();
                }
                else
                {
                    oleDbConnection.Close();
                    oleDbConnection.Open();
                    oleDbCommand.CommandText = "SELECT " + this.ExcelColumnCheck(oleDbSchemaTable2) + " From [" + Left2 + "]  Where [FVR (mm)] <> NULL and [SVR (mm)] <> NULL and\t[Thickness (mm)] <> NULL and\t[Span (mm)] <> NULL and [MajorStretch (%)]<> NULL and [MinorStretch (%)] <> NULL ";
                    oleDbDataAdapter.SelectCommand = oleDbCommand;
                    this.c_dsOilCanning = new DataSet();
                    oleDbDataAdapter.Fill(this.c_dsOilCanning);
                    this.Session["c_dsOilCanning"] = (object)this.c_dsOilCanning;
                    oleDbConnection.Close();
                    grid = true;
                }
            }
            catch (Exception ex)
            {
                ProjectData.SetProjectError(ex);
                Exception exception = ex;
                Information.Err();
                string Description = "Unable to perform " + Source + "  STACKTRACE:" + Strings.Right(exception.StackTrace.ToString(), 500);
                Information.Err().Raise(-2147188171, (object)Source, (object)Description);
                throw new Exception(exception.Message);
            }
            return grid;
        }

        [MethodImpl(MethodImplOptions.NoInlining | MethodImplOptions.NoOptimization)]
        protected string ExcelColumnCheck(DataTable dtExcelSchemaCols)
        {
            string Source = nameof(ExcelColumnCheck);
            string empty = string.Empty;
            string str1;
            try
            {
                int num = checked(dtExcelSchemaCols.Rows.Count - 1);
                int index = 0;
                //string[] strArray;
                string[] strArray =  null;
                while (index <= num)
                {
                    strArray = (string[])Utils.CopyArray((Array)strArray, (Array)new string[checked(index + 1)]);
                    strArray[index] = dtExcelSchemaCols.Rows[index]["COLUMN_NAME"].ToString();
                    checked { ++index; }
                }
                if (strArray.Length <= 0)
                    throw new Exception("No Columns Specified in Spreadsheet, Please Reload");
                if (!((IEnumerable<string>)strArray).Contains<string>("FVR (mm)"))
                    throw new Exception("Front View Radius (mm) Column Not Specified in Spreadsheet, Please Reload");
                string str2 = "[FVR (mm)] ,";
                if (!((IEnumerable<string>)strArray).Contains<string>("SVR (mm)"))
                    throw new Exception("Side View Radius (mm) Column Not Specified in Spreadsheet, Please Reload");
                string str3 = str2 + "[SVR (mm)],";
                if (!((IEnumerable<string>)strArray).Contains<string>("Thickness (mm)"))
                    throw new Exception("Thickness (mm) Column Not Specified in Spreadsheet, Please Reload");
                string str4 = str3 + "[Thickness (mm)],";
                if (!((IEnumerable<string>)strArray).Contains<string>("Span (mm)"))
                    throw new Exception("Free Span Between Bows (mm) Column Not Specified in Spreadsheet, Please Reload");
                string str5 = str4 + "[Span (mm)],";
                if (!((IEnumerable<string>)strArray).Contains<string>("MajorStretch (%)"))
                    throw new Exception("Major Stretch (%) Column Not Specified in Spreadsheet, Please Reload");
                string str6 = str5 + "[MajorStretch (%)],";
                if (!((IEnumerable<string>)strArray).Contains<string>("MinorStretch (%)"))
                    throw new Exception("Minor Stretch (%) Column Not Specified in Spreadsheet, Please Reload");
                string str7 = str6 + "[MinorStretch (%)],";
                if (!((IEnumerable<string>)strArray).Contains<string>("Oil Canning Load (N)"))
                    throw new Exception("Oil Canning Load (N) Column Not Specified in Spreadsheet, Please Reload");
                string str8 = str7 + "[Oil Canning Load (N)],";
                if (!((IEnumerable<string>)strArray).Contains<string>("Dentload_DDQ (N)"))
                    throw new Exception("0.1mm dent load (DDQ+) Column Not Specified in Spreadsheet, Please Reload");
                string str9 = str8 + "[Dentload_DDQ (N)],";
                if (!((IEnumerable<string>)strArray).Contains<string>("Dentload_BH210 (N)"))
                    throw new Exception("0.1mm dent load (BH210) Column Not Specified in Spreadsheet, Please Reload");
                string str10 = str9 + "[Dentload_BH210 (N)],";
                if (!((IEnumerable<string>)strArray).Contains<string>("Deflection @ 90N (mm)"))
                    throw new Exception("Deflection Load (90N) Column Not Specified in Spreadsheet, Please Reload");
                string str11 = str10 + "[Deflection @ 90N (mm)],";
                if (!((IEnumerable<string>)strArray).Contains<string>("Deflection @ 100N (mm)"))
                    throw new Exception("Deflection Load (100N) Column Not Specified in Spreadsheet, Please Reload");
                str1 = str11 + "[Deflection @ 100N (mm)]";
            }
            catch (Exception ex)
            {
                ProjectData.SetProjectError(ex);
                Exception exception = ex;
                Information.Err();
                string Description = "Unable to perform " + Source + Strings.Right(exception.StackTrace.ToString(), 500);
                Information.Err().Raise(-2147188171, (object)Source, (object)Description);
                throw new Exception(exception.Message);
            }
            return str1;
        }

        private void CalculateOilCanning(
          ref double ocvar,
          ref double peakld,
          double fvr,
          double svr,
          double gaugeini,
          double span,
          double emaj,
          double emin,
          ref double DDQ,
          ref double BH210,
          ref double loadMin,
          ref double loadMax,
          ref double DeflactionMin,
          ref double DeflactionMax)
        {
            double[] numArray1 = new double[21];
            double[] numArray2 = new double[11];
            double[] numArray3 = new double[11];
            double[] numArray4 = new double[11];
            double[] numArray5 = new double[11];
            float[] numArray6 = new float[213];
            float[] numArray7 = new float[213];
            int num1 = 0;
            double x1 = Math.Log(1.0 + emaj / double.Parse("100.0"));
            double x2 = Math.Log(1.0 + emin / double.Parse("100.0"));
            double d = (x1 + x2) * -1.0;
            double x3 = gaugeini * Math.Exp(d);
            double x4 = double.Parse("1") / fvr * 10000.0;
            double x5 = double.Parse("1") / svr * 10000.0;
            double num2 = double.Parse("1.8");
            double num3 = (double.Parse("1") + num2) / Math.Sqrt(1.0 + 2.0 * num2);
            double num4 = double.Parse("2") * num2 / (1.0 + num2);
            double num5 = num3 * Math.Sqrt(Math.Pow(x1, 2.0) + Math.Pow(x2, 2.0) + num4 * x1 * x2);
            double num6 = double.Parse("-72.53232126") + x4 * double.Parse("15.59828914") + x5 * double.Parse("13.0651791") + x3 * double.Parse("213.1634827") + num5 * double.Parse("100") * double.Parse("-1.95848059") + Math.Pow(x4, 2.0) * double.Parse("-0.795970382") + Math.Pow(x5, 2.0) * double.Parse("-0.797708151") + Math.Pow(x3, 2.0) * double.Parse("-27.44855967") + Math.Pow(num5 * double.Parse("100"), 2.0) * double.Parse("0.098745276") + x4 * x5 * double.Parse("-0.364333318") + x4 * x3 * double.Parse("-21.50222199") + x5 * x3 * double.Parse("-18.23194649") + x4 * (num5 * double.Parse("100.0")) * double.Parse("0.137396826") + x5 * (num5 * double.Parse("100.0")) * double.Parse("-0.217857199") + x3 * (num5 * double.Parse("100.0")) * double.Parse("15.4962963");
            DDQ = num6;
            double num7 = double.Parse("1.36");
            double num8 = (double.Parse("1") + num7) / Math.Sqrt(1.0 + 2.0 * num7);
            double num9 = double.Parse("2") * num7 / (1.0 + num7);
            double num10 = num8 * Math.Sqrt(Math.Pow(x1, 2.0) + Math.Pow(x2, 2.0) + num9 * x1 * x2);
            double num11 = x4 * 4.236321106 - 28.68952216 + x5 * 9.637663376 + x3 * 149.0650957 + num10 * 100.0 * -2.694921243 + Math.Pow(x4, 2.0) * -0.927863682 + Math.Pow(x5, 2.0) * -1.783005598 + Math.Pow(x3, 2.0) * 130.2316872 + Math.Pow(num10 * 100.0, 2.0) * -2.233762661 + x4 * x5 * 0.071358337 + x4 * x3 * -0.229851852 + x5 * x3 * -5.062709231 + x4 * (num10 * 100.0) * -0.1787746 + x5 * (num10 * 100.0) * 0.103470248 + x3 * (num10 * 100.0) * 44.96068783;
            BH210 = num11;
            double num12 = x3 - double.Parse("0.7");
            double num13 = double.Parse("10000.0") / fvr - double.Parse("2.0");
            double num14 = double.Parse("10000.0") / svr - double.Parse("2.0");
            double num15 = double.Parse("1000.0") / span - double.Parse("4.0");
            numArray2[2] = Math.Exp(double.Parse("4.27941") + double.Parse("3.192017") * num12 + double.Parse("0.276748") * num13 + double.Parse("0.077946") * num14 + double.Parse("0.401123") * num15 - double.Parse("2.500264") * num12 * num12 + 0.0 * num13 * num13 + double.Parse("0.053851") * num14 * num14 + double.Parse("0.084306") * num15 * num15 + double.Parse("0.047732") * num12 * num13 + double.Parse("0.153347") * num12 * num14 - double.Parse("0.49623") * num12 * num15 + double.Parse("0.018811") * num13 * num14 + 0.0 * num13 * num15 - double.Parse("0.166958") * num14 * num15);
            numArray2[3] = Math.Exp(double.Parse("4.613227") + double.Parse("2.800366") * num12 + double.Parse("0.182534") * num13 - double.Parse("0.109508") * num14 + double.Parse("0.602971") * num15 - double.Parse("2.466414") * num12 * num12 - double.Parse("0.022599") * num13 * num13 + double.Parse("0.057154") * num14 * num14 + double.Parse("0.097518") * num15 * num15 + double.Parse("0.139263") * num12 * num13 + double.Parse("0.323791") * num12 * num14 - double.Parse("0.589021") * num12 * num15 + double.Parse("0.005832") * num13 * num14 - double.Parse("0.047279") * num13 * num15 - double.Parse("0.195309") * num14 * num15);
            numArray2[4] = Math.Exp(double.Parse("5.003404") + double.Parse("2.616944") * num12 + double.Parse("0.116201") * num13 - double.Parse("0.211101") * num14 + double.Parse("0.762237") * num15 - double.Parse("1.79095") * num12 * num12 - double.Parse("0.007297") * num13 * num13 + double.Parse("0.054589") * num14 * num14 + double.Parse("0.10057") * num15 * num15 + double.Parse("0.126543") * num12 * num13 + double.Parse("0.141616") * num12 * num14 - double.Parse("0.517168") * num12 * num15 - double.Parse("0.01239") * num13 * num14 - double.Parse("0.044924") * num13 * num15 - double.Parse("0.193162") * num14 * num15);
            numArray2[5] = Math.Exp(double.Parse("5.373838") + double.Parse("2.113913") * num12 + double.Parse("0.070318") * num13 - double.Parse("0.274353") * num14 + double.Parse("0.874416") * num15 - double.Parse("2.529494") * num12 * num12 - double.Parse("0.000384") * num13 * num13 + double.Parse("0.076426") * num14 * num14 + double.Parse("0.099986") * num15 * num15 + double.Parse("0.179211") * num12 * num13 + double.Parse("0.151922") * num12 * num14 - double.Parse("0.733827") * num12 * num15 - double.Parse("0.001944") * num13 * num14 - double.Parse("0.049825") * num13 * num15 - double.Parse("0.192579") * num14 * num15);
            numArray2[6] = Math.Exp(double.Parse("5.772223") + double.Parse("2.533498") * num12 + double.Parse("0.028164") * num13 - double.Parse("0.400536") * num14 + double.Parse("1.173905") * num15 - double.Parse("2.443019") * num12 * num12 + double.Parse("0.00487") * num13 * num13 + double.Parse("0.111013") * num14 * num14 + double.Parse("0.187753") * num15 * num15 + double.Parse("0.100495") * num12 * num13 + double.Parse("0.078791") * num12 * num14 - double.Parse("0.381425") * num12 * num15 + double.Parse("0.010735") * num13 * num14 - double.Parse("0.058385") * num13 * num15 - double.Parse("0.234094") * num14 * num15);
            numArray2[7] = Math.Exp(6.178011 + double.Parse("2.201") * num12 - double.Parse("0.023444") * num13 - double.Parse("0.513154") * num14 + double.Parse("1.392907") * num15 - double.Parse("2.184983") * num12 * num12 + double.Parse("0.012779") * num13 * num13 + double.Parse("0.131457") * num14 * num14 + double.Parse("0.225974") * num15 * num15 + double.Parse("0.050317") * num12 * num13 + double.Parse("0.124977") * num12 * num14 - double.Parse("0.575138") * num12 * num15 + double.Parse("0.019902") * num13 * num14 - double.Parse("0.077663") * num13 * num15 - double.Parse("0.270135") * num14 * num15);
            numArray2[8] = Math.Exp(6.471374 + double.Parse("2.025984") * num12 - double.Parse("0.074294") * num13 - double.Parse("0.552174") * num14 + double.Parse("1.420372") * num15 - double.Parse("3.159497") * num12 * num12 + double.Parse("0.017696") * num13 * num13 + double.Parse("0.143595") * num14 * num14 + double.Parse("0.19991") * num15 * num15 - double.Parse("0.000382") * num12 * num13 + double.Parse("0.120918") * num12 * num14 - double.Parse("0.658293") * num12 * num15 + double.Parse("0.032529") * num13 * num14 - double.Parse("0.097144") * num13 * num15 - double.Parse("0.262298") * num14 * num15);
            numArray2[9] = Math.Exp(double.Parse("6.955466") + double.Parse("1.987479") * num12 - double.Parse("0.161447") * num13 - double.Parse("0.665285") * num14 + double.Parse("1.758484") * num15 - double.Parse("2.392414") * num12 * num12 + double.Parse("0.016408") * num13 * num13 + double.Parse("0.149745") * num14 * num14 + double.Parse("0.276407") * num15 * num15 + double.Parse("0.061953") * num12 * num13 + double.Parse("0.229413") * num12 * num14 - double.Parse("0.640081") * num12 * num15 + double.Parse("0.055921") * num13 * num14 - double.Parse("0.134679") * num13 * num15 - double.Parse("0.296333") * num14 * num15);
            numArray2[10] = numArray2[9] * numArray2[9] / numArray2[8];
            numArray3[2] = numArray2[2] * (0.229131 - double.Parse("0.533769") * num12 - double.Parse("0.09538") * num13 - double.Parse("0.171593") * num14 + double.Parse("0.192254") * num15 + double.Parse("0.15805") * num12 * num12 + double.Parse("0.017829") * num14 * num14 - double.Parse("0.004949") * num15 * num15 - double.Parse("0.022224") * num12 * num13 - double.Parse("0.023265") * num12 * num14 - double.Parse("0.107278") * num12 * num15 - double.Parse("0.007157") * num13 * num14 + double.Parse("0.006589") * num14 * num15);
            numArray3[3] = numArray2[3] * (0.391165 - double.Parse("0.421133") * num12 - double.Parse("0.06414") * num13 - double.Parse("0.099538") * num14 + double.Parse("0.130754") * num15 + double.Parse("1.024189") * num12 * num12 - double.Parse("0.004901") * num13 * num13 + double.Parse("0.000543") * num14 * num14 - double.Parse("0.02751") * num15 * num15 + double.Parse("0.034047") * num12 * num13 + double.Parse("0.050731") * num12 * num14 - double.Parse("0.083898") * num12 * num15 - double.Parse("0.027176") * num13 * num14 + double.Parse("0.025477") * num13 * num15 + double.Parse("0.025167") * num14 * num15);
            numArray3[4] = numArray2[4] * (double.Parse("0.403497") - double.Parse("0.313428") * num12 - double.Parse("0.019231") * num13 - double.Parse("0.017605") * num14 + double.Parse("0.061348") * num15 - double.Parse("0.178529") * num12 * num12 + double.Parse("0.004678") * num13 * num13 + double.Parse("0.005024") * num14 * num14 - double.Parse("0.038606") * num15 * num15 - double.Parse("0.018657") * num12 * num13 - double.Parse("0.110628") * num12 * num14 - double.Parse("0.025661") * num12 * num15 - double.Parse("0.009588") * num13 * num14 + double.Parse("0.026129") * num13 * num15 + double.Parse("0.047928") * num14 * num15);
            numArray3[5] = numArray2[5] * (double.Parse("0.350108") - double.Parse("0.132292") * num12 - double.Parse("0.003085") * num13 + double.Parse("0.021036") * num14 + double.Parse("0.005417") * num15 - double.Parse("0.558879") * num12 * num12 + double.Parse("0.00585") * num13 * num13 + double.Parse("0.006212") * num14 * num14 - double.Parse("0.044316") * num15 * num15 - double.Parse("0.054108") * num12 * num13 - double.Parse("0.06248") * num12 * num14 + double.Parse("0.017229") * num12 * num15 + double.Parse("0.00384") * num13 * num14 + double.Parse("0.021152") * num13 * num15 + double.Parse("0.055015") * num14 * num15);
            numArray3[6] = numArray2[6] * (double.Parse("0.283007") - double.Parse("0.055599") * num12 - double.Parse("0.001509") * num13 + double.Parse("0.031342") * num14 - double.Parse("0.036797") * num15 - double.Parse("0.403868") * num12 * num12 + double.Parse("0.004872") * num13 * num13 + double.Parse("0.00918") * num14 * num14 - double.Parse("0.051491") * num15 * num15 - double.Parse("0.024149") * num12 * num13 - double.Parse("0.028595") * num12 * num14 + double.Parse("0.003327") * num12 * num15 + double.Parse("0.006365") * num13 * num14 + double.Parse("0.014414") * num13 * num15 + double.Parse("0.052277") * num14 * num15);
            numArray3[7] = numArray2[7] * (double.Parse("0.229139") - double.Parse("0.04943") * num12 - double.Parse("0.005106") * num13 + double.Parse("0.038833") * num14 - double.Parse("0.079926") * num15 + double.Parse("0.10034") * num12 * num12 - double.Parse("0.001251") * num13 * num13 + double.Parse("0.002882") * num14 * num14 - double.Parse("0.062055") * num15 * num15 - double.Parse("0.027398") * num12 * num13 + double.Parse("0.011251") * num12 * num14 - double.Parse("0.013299") * num12 * num15 + double.Parse("0.009892") * num13 * num14 + double.Parse("0.006774") * num13 * num15 + double.Parse("0.052234") * num14 * num15);
            numArray3[8] = numArray2[8] * (double.Parse("0.189993") - double.Parse("0.161041") * num12 - double.Parse("0.010419") * num13 + double.Parse("0.037259") * num14 - double.Parse("0.088346") * num15 - double.Parse("0.00172") * num12 * num12 + double.Parse("0.001801") * num13 * num13 + double.Parse("0.000522") * num14 * num14 - double.Parse("0.059061") * num15 * num15 - double.Parse("0.007702") * num12 * num13 + double.Parse("0.049029") * num12 * num14 - double.Parse("0.075455") * num12 * num15 + double.Parse("0.011599") * num13 * num14 + double.Parse("0.004558") * num13 * num15 + double.Parse("0.04975") * num14 * num15);
            numArray3[9] = numArray2[9] * (double.Parse("0.160086") - double.Parse("0.217281") * num12 - double.Parse("0.017121") * num13 + double.Parse("0.036687") * num14 - double.Parse("0.116599") * num15 + double.Parse("0.095436") * num12 * num12 - double.Parse("0.000802") * num13 * num13 - double.Parse("0.003654") * num14 * num14 - double.Parse("0.066166") * num15 * num15 + double.Parse("0.026926") * num12 * num13 + double.Parse("0.046008") * num12 * num14 - double.Parse("0.100392") * num12 * num15 + double.Parse("0.01371") * num13 * num14 + double.Parse("0.000813") * num13 * num15 + double.Parse("0.047239") * num14 * num15);
            numArray3[10] = numArray2[10] * (2.0 * numArray3[9] / numArray2[9] - numArray3[8] / numArray2[8]);
            peakld = Math.Exp(double.Parse("4.366247") + double.Parse("3.740587") * num12 + double.Parse("0.433377") * num13 + double.Parse("0.350224") * num14 + double.Parse("0.085641") * num15 - double.Parse("3.027345") * num12 * num12 - double.Parse("0.11474") * num13 * num13 - double.Parse("0.039947") * num14 * num14 + double.Parse("0.051843") * num15 * num15 - double.Parse("0.13102") * num12 * num13 + double.Parse("0.094794") * num12 * num14 + double.Parse("0.116543") * num12 * num15 - double.Parse("0.007454") * num13 * num14 - double.Parse("0.013298") * num13 * num15 - double.Parse("0.099503") * num14 * num15 + double.Parse("0.008318") * num15 * num15 * num15 + double.Parse("0.044045") * num14 * num14 * num15 - double.Parse("0.022015") * num14 * num15 * num15 - double.Parse("0.187397") * num12 * num13 * num15 + double.Parse("0.102058") * num12 * num14 * num15);
            double Expression = double.Parse("54.807929") + double.Parse("163.619243") * num12 + double.Parse("15.998347") * num13 + double.Parse("2.568738") * num14 + double.Parse("13.968088") * num15 + double.Parse("53.781422") * num12 * num12 - 1.993944 * num13 * num13 + double.Parse("1.058319") * num14 * num14 + double.Parse("5.637651") * num15 * num15 + double.Parse("37.888375") * num12 * num13 - double.Parse("0.422129") * num12 * num14 + double.Parse("12.143284") * num12 * num15 + double.Parse("0.319604") * num13 * num14 + double.Parse("0.75981") * num13 * num15 - double.Parse("11.219268") * num14 * num15;
            if (Strings.Len(Expression) == 0)
                Expression = double.Parse("0.0");
            double num16 = double.Parse("1.271147") + double.Parse("1.124717") * num12 + double.Parse("0.113626") * num13 + double.Parse("0.184286") * num14 - double.Parse("0.631231") * num12 * num12 + double.Parse("0.015319") * num13 * num13 + double.Parse("0.002371") * num14 * num14 + double.Parse("0.017226") * num15 * num15 + double.Parse("0.194801") * num12 * num13 + double.Parse("0.187503") * num12 * num14 - double.Parse("0.12826") * num12 * num15 - double.Parse("0.060003") * num13 * num14 + double.Parse("0.000307") * num13 * num15 + double.Parse("0.044967") * num14 * num15;
            double num17;
            if (numArray3[2] > Expression)
            {
                double num18 = Expression + numArray2[2] - numArray3[2];
                num17 = (num18 - Math.Sqrt(num18 * num18 - double.Parse("4.0") * peakld * (Expression - numArray3[2]))) / (Expression - numArray3[2]);
                if (double.Parse("1.9") < num17)
                    num17 = double.Parse("1.9");
            }
            else
                num17 = double.Parse("1.9");
            if (num17 < num16)
                num16 = num17;
            double num19 = Expression;
            double num20 = (peakld - Expression * num16) / (num16 * num16);
            numArray3[1] = (double.Parse("4.0") * (numArray2[2] - peakld) - (double.Parse("4.0") - num16 * num16) * numArray3[2]) / ((double.Parse("2.0") - num16) * (double.Parse("2.0") - num16));
            numArray4[1] = (numArray3[2] - (numArray2[2] - peakld) / (double.Parse("2.0") - num16)) / (double.Parse("2.0") - num16);
            numArray2[1] = numArray2[2] - 2.0 * numArray3[1] - double.Parse("4.0") * numArray4[1];
            int index1 = 2;
            do
            {
                numArray4[index1] = -numArray3[checked(index1 + 1)] - 2.0 * numArray3[index1] + 3.0 * (numArray2[checked(index1 + 1)] - numArray2[index1]);
                numArray5[index1] = numArray3[checked(index1 + 1)] + numArray3[index1] + 2.0 * (numArray2[index1] - numArray2[checked(index1 + 1)]);
                checked { ++index1; }
            }
            while (index1 <= 9);
            double a = -1.0;
            int num21 = 0;
            int index2 = 1;
            do
            {
                numArray6[index2] = 0.05f * (float)checked(index2 - 1);
                if (index2 % 20 == 1)
                    ++a;
                numArray7[index2] = (double)numArray6[index2] > num16 ? (a >= 2.0 ? (float)(numArray2[checked((int)Math.Round(a))] + ((double)numArray6[index2] - a) * (numArray3[checked((int)Math.Round(a))] + ((double)numArray6[index2] - a) * (numArray4[checked((int)Math.Round(a))] + ((double)numArray6[index2] - a) * numArray5[checked((int)Math.Round(a))]))) : (float)(numArray2[1] + (double)numArray6[index2] * (numArray3[1] + (double)numArray6[index2] * numArray4[1]))) : numArray6[index2] * (float)(num19 + num20 * (double)numArray6[index2]);
                checked { ++num21; }
                if ((double)numArray7[index2] < double.Parse("400.0"))
                    checked { ++index2; }
                else
                    break;
            }
            while (index2 <= 201);
            int index3 = 1;
            do
            {
                checked { ++num1; }
                string str1 = numArray6[index3].ToString();
                string str2 = Conversions.ToString(numArray7[index3]);
                if ((double)numArray7[index3] < 400.0)
                {
                    if (Conversions.ToDouble(str2) > 90.0 & loadMax == 0.0)
                    {
                        DeflactionMax = Conversions.ToDouble(str1);
                        loadMax = Conversions.ToDouble(str2);
                        DeflactionMin = (double)numArray6[checked(index3 - 1)];
                        loadMin = (double)numArray7[checked(index3 - 1)];
                    }
                    checked { ++index3; }
                }
                else
                    break;
            }
            while (index3 <= 201);
            ocvar = numArray3[1] + num16 * (2.0 * numArray4[1]);
            if (ocvar <= 0.0)
            {
                this.oilcanningload = (object)string.Format("{0:f1}", (object)peakld);
                this.oilcanningbool = (object)1;
            }
            else
                this.oilcanningbool = (object)0;
        }

        [MethodImpl(MethodImplOptions.NoInlining | MethodImplOptions.NoOptimization)]
        private bool ValidationCheck()
        {
            bool flag = true;
            string Source = nameof(ValidationCheck);
            string empty = string.Empty;
            try
            {
                double num1 = (double)checked(this.c_dsOilCanning.Tables[0].Rows.Count - 1);
                for (this.i = 0.0; this.i <= num1; ++this.i)
                {
                    this.lblErrorMSG.Text = "";
                    this.loadMin = 0.0;
                    this.loadMax = 0.0;
                    this.deflactionMin = 0.0;
                    this.deflactionMax = 0.0;
                    double num2;
                    if (Microsoft.VisualBasic.CompilerServices.Operators.CompareString(this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][0].ToString(), "", false) != 0)
                    {
                        if (Regex.IsMatch(Conversions.ToString(this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][0]), "^[1-9]\\d*(\\.\\d+)?$"))
                        {
                            if (Conversions.ToDouble(this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][0]) < 3000.0 | Conversions.ToDouble(this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][0]) > 12000.0)
                            {
                                flag = false;
                                this.lblErrorMSG.Text = this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][0].ToString() + " FVR Invalid Must Be Between 3000 - 12000<br>";
                            }
                            else
                                num2 = Conversions.ToDouble(this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][0]);
                        }
                        else
                        {
                            flag = false;
                            this.lblErrorMSG.Text = this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))]["FVR"].ToString() + " FVR Invalid Format Min 4 and Max 5 Digits (between 3000-12000).<br>";
                        }
                    }
                    else
                    {
                        flag = false;
                        this.lblErrorMSG.Text = "FVR Required<br>";
                    }
                    double num3;
                    if (Microsoft.VisualBasic.CompilerServices.Operators.CompareString(this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][1].ToString(), "", false) != 0)
                    {
                        if (Regex.IsMatch(Conversions.ToString(this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][1]), "^[1-9]\\d*(\\.\\d+)?$"))
                        {
                            if (Conversions.ToDouble(this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][1]) < 3000.0 | Conversions.ToDouble(this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][1]) > 15000.0)
                            {
                                flag = false;
                                this.lblErrorMSG.Text = this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][1].ToString() + " SVR Invalid Must Be Between 3000 - 15000<br>";
                            }
                            else
                                num3 = Conversions.ToDouble(this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][1]);
                        }
                        else
                        {
                            flag = false;
                            this.lblErrorMSG.Text = this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))]["SVR"].ToString() + " SVR Invalid Format Min 4 and Max 5 Digits (between 3000-15000).<br>";
                        }
                    }
                    else
                    {
                        flag = false;
                        this.lblErrorMSG.Text = "SVR Required<br>";
                    }
                    double num4;
                    if (Microsoft.VisualBasic.CompilerServices.Operators.CompareString(this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][2].ToString(), "", false) != 0)
                    {
                        if (Conversions.ToDouble(this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][2]) < 0.55 | Conversions.ToDouble(this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][2]) > 0.85)
                        {
                            flag = false;
                            this.lblErrorMSG.Text = this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][2].ToString() + " Thickness Invalid Must Be Between 0.55 - 0.85<br>";
                        }
                        else
                            num4 = Conversions.ToDouble(this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][2]);
                    }
                    else
                    {
                        flag = false;
                        this.lblErrorMSG.Text = "Thickness Required<br>";
                    }
                    double num5;
                    if (Microsoft.VisualBasic.CompilerServices.Operators.CompareString(this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][3].ToString(), "", false) != 0)
                    {
                        if (Conversions.ToDouble(this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][3]) < 150.0 | Conversions.ToDouble(this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][3]) > 525.0)
                        {
                            flag = false;
                            this.lblErrorMSG.Text = this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][3].ToString() + " Span Invalid Must Be Between 150 - 525<br>";
                        }
                        else
                            num5 = Conversions.ToDouble(this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][3]);
                    }
                    else
                    {
                        flag = false;
                        this.lblErrorMSG.Text = "Span Required<br>";
                    }
                    double num6;
                    if (Microsoft.VisualBasic.CompilerServices.Operators.CompareString(this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][4].ToString(), "", false) != 0)
                    {
                        if (Conversions.ToDouble(this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][4]) < 0.0 | Conversions.ToDouble(this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][4]) > 2.0)
                        {
                            flag = false;
                            this.lblErrorMSG.Text = this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][4].ToString() + " Major Stretch Invalid Must Be Between 0 - 2<br>";
                        }
                        else
                            num6 = Conversions.ToDouble(this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][4]);
                    }
                    else
                    {
                        flag = false;
                        this.lblErrorMSG.Text = "Major Stretch Required<br>";
                    }
                    double num7;
                    if (Microsoft.VisualBasic.CompilerServices.Operators.CompareString(this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][5].ToString(), "", false) != 0)
                    {
                        if (Conversions.ToDouble(this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][5]) < 0.0 | Conversions.ToDouble(this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][5]) > 2.0)
                        {
                            flag = false;
                            this.lblErrorMSG.Text = this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][5].ToString() + " Minor Stretch Invalid Must Be Between 0 - 2<br>";
                        }
                        else
                            num7 = Conversions.ToDouble(this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][5]);
                    }
                    else
                    {
                        flag = false;
                        this.lblErrorMSG.Text = "Minor Stretch Required<br>";
                    }
                    ref double local1 = ref this.ocvar;
                    ref double local2 = ref this.peakld;

                    //double fvr = num2;
                    //double svr = num3;
                    //double gaugeini = num4;
                    //double span = num5;
                    //double emaj = num6;
                    //double emin = num7;
                    double fvr = 3000;
                    double svr = 3000;
                    double gaugeini = .6;
                    double span = 320;
                    double emaj = 0;
                    double emin = 0;

                    double num8 = Conversions.ToDouble(this.ddq);
                    ref double local3 = ref num8;
                    double num9 = Conversions.ToDouble(this.bh210);
                    ref double local4 = ref num9;
                    ref double local5 = ref this.loadMin;
                    ref double local6 = ref this.loadMax;
                    ref double local7 = ref this.deflactionMin;
                    ref double local8 = ref this.deflactionMax;
                    this.CalculateOilCanning(ref local1, ref local2, fvr, svr, gaugeini, span, emaj, emin, ref local3, ref local4, ref local5, ref local6, ref local7, ref local8);
                    this.bh210 = (object)num9;
                    this.ddq = (object)num8;
                    string str = string.Empty;
                    if (Microsoft.VisualBasic.CompilerServices.Operators.ConditionalCompareObjectEqual(this.oilcanningbool, (object)0, false))
                        str = "No oil canning < 400 (N)";
                    else if (Microsoft.VisualBasic.CompilerServices.Operators.ConditionalCompareObjectEqual(this.oilcanningbool, (object)1, false))
                        str = Conversions.ToString(this.oilcanningload);
                    if (Microsoft.VisualBasic.CompilerServices.Operators.CompareString(this.lblErrorMSG.Text, "", false) == 0)
                    {
                        this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][6] = (object)str;
                        DataRow row1 = this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))];
                        Type Type1 = typeof(Math);
                        object[] objArray1 = new object[3]
                        {
            RuntimeHelpers.GetObjectValue(this.ddq),
            (object) 1,
            (object) MidpointRounding.AwayFromZero
                        };
                        object[] Arguments1 = objArray1;
                        bool[] flagArray1 = new bool[3]
                        {
            true,
            false,
            false
                        };
                        bool[] CopyBack1 = flagArray1;
                        object obj1 = NewLateBinding.LateGet((object)null, Type1, "Round", Arguments1, (string[])null, (Type[])null, CopyBack1);
                        if (flagArray1[0])
                            this.ddq = RuntimeHelpers.GetObjectValue(objArray1[0]);
                        object objectValue1 = RuntimeHelpers.GetObjectValue(obj1);
                        row1[7] = objectValue1;
                        DataRow row2 = this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))];
                        Type Type2 = typeof(Math);
                        object[] objArray2 = new object[3]
                        {
            RuntimeHelpers.GetObjectValue(this.bh210),
            (object) 1,
            (object) MidpointRounding.AwayFromZero
                        };
                        object[] Arguments2 = objArray2;
                        bool[] flagArray2 = new bool[3]
                        {
            true,
            false,
            false
                        };
                        bool[] CopyBack2 = flagArray2;
                        object obj2 = NewLateBinding.LateGet((object)null, Type2, "Round", Arguments2, (string[])null, (Type[])null, CopyBack2);
                        if (flagArray2[0])
                            this.bh210 = RuntimeHelpers.GetObjectValue(objArray2[0]);
                        object objectValue2 = RuntimeHelpers.GetObjectValue(obj2);
                        row2[8] = objectValue2;
                    }
                    else
                    {
                        this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][6] = (object)this.lblErrorMSG.Text;
                        this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][7] = (object)this.lblErrorMSG.Text;
                        this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][8] = (object)this.lblErrorMSG.Text;
                    }
                    double num10 = this.deflactionMin + (this.deflactionMax - this.deflactionMin) / (this.loadMax - this.loadMin) * (90.0 - this.loadMin);
                    this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][9] = (object)Math.Round(num10, 2, MidpointRounding.AwayFromZero);
                    double num11 = this.deflactionMin + (this.deflactionMax - this.deflactionMin) / (this.loadMax - this.loadMin) * (100.0 - this.loadMin);
                    this.c_dsOilCanning.Tables[0].Rows[checked((int)Math.Round(this.i))][10] = (object)Math.Round(num11, 2, MidpointRounding.AwayFromZero);
                }
            }
            catch (Exception ex)
            {
                ProjectData.SetProjectError(ex);
                Exception exception = ex;
                Information.Err();
                string Description = "Unable to perform " + Source + Strings.Right(exception.StackTrace.ToString(), 500);
                Information.Err().Raise(-2147188171, (object)Source, (object)Description);
                throw new Exception(exception.Message);
            }
            return flag;
        }

        private void BindData()
        {
            this.gvOilCanningData.DataSource = (object)this.c_dsOilCanning;
            this.gvOilCanningData.DataBind();
        }
    }
}