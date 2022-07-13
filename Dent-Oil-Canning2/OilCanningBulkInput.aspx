<%--<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="OilCanningBulkInput.aspx.cs" Inherits="Dent_Oil_Canning2.OilCanningBulkInput" %>--%>
<%--<%@ Page Language="C#" AutoEventWireup="true" CodeFile="OilCanningBulkInput.aspx.cs" CodeFileBaseClass="Dent_Oil_Canning2.OilCanningBulkInput" Inherits="Dent_Oil_Canning2.OilCanningBulkInput" %>--%>
<%@ Page Language="C#" AutoEventWireup="true" CodeFile="OilCanningBulkInput.aspx.cs" CodeFileBaseClass="Dent_Oil_Canning2.OilCanningBulkInput" Inherits="Dent_Oil_Canning2" %>
<%--<%@ MasterType TypeName="MasterPage" %>--%>

<%--<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
        </div>
    </form>
</body>
</html>--%>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <!-- Mimic Internet Explorer 7 - This should be the first meta tag -->
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7">
    <div>
        <table width="100%">
            <tr>
                <td align="center" style="height: 18px" colspan="2">
                    <asp:Label ID="lblErrorMSG" runat="server" ForeColor="Red" Text="Error MSG" Visible="False"></asp:Label></td>
            </tr>
            <tr>
                <td align="center" style="height: 18px" colspan="2"></td>
            </tr>
            <tr>
                <td align="center" class="h1" colspan="2">Browse to Load an Excel Spreadsheet</td>
            </tr>
            <tr>
                <td align="center" colspan="2">

                    <table style="width: 90%">
                        <tr>
                            <td align="center" valign="middle" style="height: 18px" width="471px">
                                <asp:FileUpload ID="FileUpload1" runat="server" Height="30px" Width="471px" TabIndex="1" />
                            </td>
                            <td align="center" valign="middle" style="height: 18px" width="150px">
                                <asp:Button ID="btnLoadExcel" runat="server" Height="30px" Text="Load Excel" Width="90px" CausesValidation="False" TabIndex="2" />
                            </td>

                            <td align="center" valign="middle" style="height: 18px" width="150px">
                                <asp:Button ID="btnExport" runat="server" Height="30px" Text="Export"
                                    Width="90px" Enabled="False" TabIndex="5" CausesValidation="False" />

                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td align="center" style="height: 342px" valign="top" colspan="2">
                    <asp:GridView ID="gvOilCanningData" runat="server" AutoGenerateColumns="False"
                        Width="90%" CssClass="table1">
                       <Columns>
                            <asp:TemplateField HeaderText="FVR (mm)x">
                                <ItemTemplate>
                                      <%# DataBinder.GetPropertyValue(Container.DataItem, "FVR (mm)")%>
                                </ItemTemplate>
                                <HeaderStyle HorizontalAlign="Left" />
                                <ItemStyle VerticalAlign="Top" />
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="SVR (mm)">
                                <ItemTemplate>
                                     <%# DataBinder.GetPropertyValue(Container.DataItem, "SVR (mm)")%>
                                </ItemTemplate>
                                <HeaderStyle HorizontalAlign="Left" />
                                <ItemStyle VerticalAlign="Top" />
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="Thickness (mm)">
                                <ItemTemplate>
                                   <%# DataBinder.GetPropertyValue(Container.DataItem, "Thickness (mm)")%>
                                </ItemTemplate>
                                <HeaderStyle HorizontalAlign="Left" />
                                <ItemStyle VerticalAlign="Top" />
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="Span (mm)">
                                <ItemTemplate>
                                    <%# DataBinder.GetPropertyValue(Container.DataItem, "Span (mm)")%>
                                </ItemTemplate>
                                <HeaderStyle HorizontalAlign="Left" />
                                <ItemStyle VerticalAlign="Top" />
                            </asp:TemplateField>

                            <asp:TemplateField HeaderText="Major Stretch (%)">
                                <ItemTemplate>
                                    <%# DataBinder.GetPropertyValue(Container.DataItem, "MajorStretch (%)")%>
                                </ItemTemplate>
                                <HeaderStyle HorizontalAlign="Left" />
                                <ItemStyle VerticalAlign="Top" />
                            </asp:TemplateField>

                            <asp:TemplateField HeaderText="Minor Stretch (%)">
                                <ItemTemplate>
                                      <%# DataBinder.GetPropertyValue(Container.DataItem, "MinorStretch (%)")%>
                                </ItemTemplate>
                                <HeaderStyle HorizontalAlign="Left" />
                                <ItemStyle VerticalAlign="Top" />
                            </asp:TemplateField>
                            

                            <asp:TemplateField HeaderText="Oil Canning Load (N)">
                                <ItemTemplate>
                                    <%# DataBinder.GetPropertyValue(Container.DataItem, "Oil Canning Load (N)")%>
                                </ItemTemplate>
                                <HeaderStyle HorizontalAlign="Left" />
                                <ItemStyle VerticalAlign="Top" />
                            </asp:TemplateField>


                            <asp:TemplateField HeaderText="Dentload DDQ (N)">
                                <ItemTemplate>
                                     <%# DataBinder.GetPropertyValue(Container.DataItem, "Dentload_DDQ (N)")%>
                                </ItemTemplate>
                                <HeaderStyle HorizontalAlign="Left" />
                                <ItemStyle VerticalAlign="Top" />
                            </asp:TemplateField>

                            <asp:TemplateField HeaderText="Dentload_BH210(N)">
                                <ItemTemplate>
                                    <%# DataBinder.GetPropertyValue(Container.DataItem, "Dentload_BH210 (N)")%>
                                </ItemTemplate>
                                <HeaderStyle HorizontalAlign="Left" />
                                <ItemStyle VerticalAlign="Top" />
                            </asp:TemplateField>
       
                                 <asp:TemplateField HeaderText="Deflection @ 90N (mm)" >
                                    <ItemTemplate>
                                         <%# DataBinder.GetPropertyValue(Container.DataItem, "Deflection @ 90N (mm)")%>
                                    </ItemTemplate>
                                    <HeaderStyle HorizontalAlign="Left" />
                                    <ItemStyle VerticalAlign="Top" />
                                </asp:TemplateField>

                                 <asp:TemplateField HeaderText="Deflection @ 100N (mm) " >
                                    <ItemTemplate>
                                         <%# DataBinder.GetPropertyValue(Container.DataItem, "Deflection @ 100N (mm)")%>
                                    </ItemTemplate>
                                    <HeaderStyle HorizontalAlign="Left" />
                                    <ItemStyle VerticalAlign="Top" />
                                </asp:TemplateField>

                        </Columns>
                    </asp:GridView>
                </td>
            </tr>
        </table>
    </div>
</asp:Content>
