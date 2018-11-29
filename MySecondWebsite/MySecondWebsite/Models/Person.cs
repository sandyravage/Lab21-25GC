using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MySecondWebsite.Models
{
    public class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string SSN { get; set; }
        public string FUSQA { get; set; }
        public string Xenu { get; set; }
        public string Devotion { get; set; }
        public string Percentage { get; set; }
        public string Color { get; set; }
        public string Password1 { get; set; }
        public string Password2 { get; set; }

        public bool GetXenu()
        {
            if(Xenu == "0")
            {
                return false;
            }
            else
            {
                return true;
            }
        }
    }
}