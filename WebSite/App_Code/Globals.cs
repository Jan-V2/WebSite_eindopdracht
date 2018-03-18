using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


public static class Globals
{
    public static int whishlist_id_len = 10;
    public static string alpha_nums = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    public static string website_root = HttpContext.Current.Request.Url.GetLeftPart(UriPartial.Authority) + "/";
}