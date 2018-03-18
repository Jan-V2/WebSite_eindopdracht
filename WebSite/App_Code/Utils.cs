using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebMatrix.Data;

/// <summary>
/// Summary description for Class1
/// </summary>
public static class Utils
{
    public static string generate_wishlist_string(){
        int len = Globals.whishlist_id_len;
        string chars = Globals.alpha_nums;
        Random random = new Random();
        return new string(Enumerable.Repeat(chars, len).Select(s => s[random.Next(s.Length)]).ToArray());
    }

    public static Database get_db_con()
    {
        string connectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\Database.mdf;Integrated Security=True";
        string provider = "System.Data.SqlClient";
        return Database.OpenConnectionString(connectionString, provider); ;
    }
    
    public static void print(String str)
    {
        System.Diagnostics.Debug.WriteLine(str);
    }

    public static String get_usr_str(Database db, String username)
    {
        return db.QueryValue("SELECT wishlist_string FROM UserProfile WHERE LOWER(Email) = LOWER(@0)", username);
    }

    public static String get_usr_email(Database db, String wl_id)
    {
        return db.QueryValue("SELECT Email FROM UserProfile WHERE LOWER(wishlist_string) = LOWER(@0)", wl_id);
    }

    public static string add_query_str_to_url(string url, string q_name, string q_str)
    {
        return new System.UriBuilder(url)
        {
            Query = q_name + "=" + q_str
        }.ToString();
    }

    public static string get_unique_link(string wl_id)
    {
        return add_query_str_to_url(Globals.website_root + "User/", "wl_id", wl_id);
    }

}