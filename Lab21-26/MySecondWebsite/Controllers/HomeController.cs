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

        public ActionResult Churches()
        {
            ViewBag.Title = "Churches";
            return View();
        }

        public ActionResult LRon()
        {
            ViewBag.Title = "L Ron Cupboard";
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Title = "About";
            return View();
        }

        public ActionResult FAQ()
        {
            ViewBag.Title = "FAQ";
            return View();
        }

        public ActionResult Today()
        {
            ViewBag.Title = "Today";
            return View();
        }
    }
}