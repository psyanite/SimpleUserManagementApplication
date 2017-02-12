using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Data.Entity;

namespace SimpleUserManagementApplication.Models
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
        public DbSet<User> User { get; set; }
    }
}
