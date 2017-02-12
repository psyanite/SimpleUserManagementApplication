using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.Data.Entity.Metadata.Internal;

namespace SimpleUserManagementApplication.Models
{
    public class Credentials
    {   
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
