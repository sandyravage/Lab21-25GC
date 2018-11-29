using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MySecondWebsite.Models;

namespace MySecondWebsite.Controllers
{
    public class HomeController : Controller
    {

        public ActionResult Index()
        {
            ViewBag.Title = "Home";
            
  
            return View();
        }

        public ActionResult Register()
        {
            ViewBag.Title = "Register";
            return View();
        }

        [HttpPost]
        public ActionResult Welcome(Person person)
        {
            ViewBag.Title = "Welcome";
            return View(person);
        }

        public ActionResult Main()
        {
            ViewBag.Title = "Main";
            return View();
        }
    }
}