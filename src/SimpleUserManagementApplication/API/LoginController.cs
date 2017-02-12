using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Mvc;
using Microsoft.Data.Entity;
using SimpleUserManagementApplication.Models;
using SimpleUserManagementApplication.Util;

namespace SimpleUserManagementApplication.Controllers
{
    [Produces("application/json")]
    [Route("api/Login")]
    public class LoginController : Controller
    {
        private ApplicationDbContext _context;

        public LoginController(ApplicationDbContext context)
        {
            _context = context;
        }


        // POST: api/Login
        [HttpPost]
        public IActionResult PostUser([FromBody] Credentials credentials)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            string username = credentials.Username;
            string password = credentials.Password;

            User user = _context.User.SingleOrDefault(m => m.Username == credentials.Username);

            if (user == null || !SecurityUtil.VerifyPasswordHashAndSalt(password, user))
            {
                return Ok(new { success = false, message = "Invalid username or password" });
            }

            return Ok(new { success = true });
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _context.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}