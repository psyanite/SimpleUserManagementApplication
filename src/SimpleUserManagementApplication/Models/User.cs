using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.Data.Entity.Metadata.Internal;

namespace SimpleUserManagementApplication.Models
{
    public class User
    {   
        [Key]
        public int UserId { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        [Required(ErrorMessage = "Username is required")]
        public string Username { get; set; }

        [Column(TypeName = "nvarchar(128)")]
        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        [Required(ErrorMessage = "Firstname is required")]
        public string Firstname { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        [Required(ErrorMessage = "Lastname is required")]
        public string Lastname { get; set; }

        [Column(TypeName = "datetime")]
        public DateTime? DateOfBirth { get; set; }

        [Column(TypeName = "nvarchar(256)")]
        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid email address")]
        public string Email { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Phone { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Mobile { get; set; }
    }
}
