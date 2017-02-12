using NUnit.Framework;
using SimpleUserManagementApplication.Controllers;
using SimpleUserManagementApplication.Models;
using System;

namespace SimpleUserManagementApplication.Tests
{
    [TestFixture]
    public class UsersControllerTests
    {
        private UsersController _usersController;
        private ApplicationDbContext _context;

        [SetUp]
        public void SetUp()
        {
            _context = new ApplicationDbContext();
            _usersController = new UsersController(_context);
        }

        [Test]
        public void GetUser_ShouldReturnCorrectUser()
        {
            User testUser = new User
            {
                Username = "buster99",
                Password = "M2CSFxP31trrKlQL7Niocr3p8slnOpo+EtLGMPpzPPw=lbwhbCice6BZ0Tevuuwo7Q==",
                Firstname = "Buster",
                Lastname = "Nixon",
                DateOfBirth = new DateTime(1981, 5, 18),
                Email = "buster123@buster.com",
                Phone = "09-1876-1244",
                Mobile = "021-755-1231"
            };

            AddUser(_context, testUser);

            User user = (User) _usersController.GetUser(1);

            Assert.AreEqual(testUser, user);
        }

        private void AddUser(ApplicationDbContext context, User user)
        {
            context.User.AddRange(user);
            context.SaveChanges();
        }

        private void AddUsers(ApplicationDbContext context)
        {
            context.User.AddRange(
                     new User
                     {
                         Username = "buster99",
                         Password = "M2CSFxP31trrKlQL7Niocr3p8slnOpo+EtLGMPpzPPw=lbwhbCice6BZ0Tevuuwo7Q==", //Password123
                         Firstname = "Buster",
                         Lastname = "Nixon",
                         DateOfBirth = new DateTime(1981, 5, 18),
                         Email = "buster123@buster.com",
                         Phone = "09-1876-1244"
                     },

                     new User
                     {
                         Username = "lilo_lee",
                         Password = "M2CSFxP31trrKlQL7Niocr3p8slnOpo+EtLGMPpzPPw=lbwhbCice6BZ0Tevuuwo7Q==", //Password123
                         Firstname = "Lilo",
                         Lastname = "Lee",
                         DateOfBirth = new DateTime(1981, 8, 13),
                         Email = "lilolee@gmail.com",
                         Phone = "07-1233-1111",
                         Mobile = "021-837-37611"
                     },

                     new User
                     {
                         Username = "dragonslayer",
                         Password = "M2CSFxP31trrKlQL7Niocr3p8slnOpo+EtLGMPpzPPw=lbwhbCice6BZ0Tevuuwo7Q==", //Password123
                         Firstname = "Maximus",
                         Lastname = "The Great",
                         DateOfBirth = new DateTime(1985, 3, 20),
                         Email = "TheGreatestMaxOfAll@hotmail.com"
                     },

                    new User
                    {
                        Username = "richardSon",
                        Password = "M2CSFxP31trrKlQL7Niocr3p8slnOpo+EtLGMPpzPPw=lbwhbCice6BZ0Tevuuwo7Q==", //Password123
                        Firstname = "John",
                        Lastname = "Richardson",
                        DateOfBirth = new DateTime(1991, 9, 22),
                        Email = "john@gmail.com"
                    },

                    new User
                    {
                        Username = "capnmorg",
                        Password = "M2CSFxP31trrKlQL7Niocr3p8slnOpo+EtLGMPpzPPw=lbwhbCice6BZ0Tevuuwo7Q==", //Password123
                        Firstname = "Captain",
                        Lastname = "Morgan",
                        DateOfBirth = new DateTime(2000, 8, 5),
                        Email = "ayymehearty@gmail.com"
                    },

                    new User
                    {
                        Username = "flowerfairy",
                        Password = "M2CSFxP31trrKlQL7Niocr3p8slnOpo+EtLGMPpzPPw=lbwhbCice6BZ0Tevuuwo7Q==", //Password123
                        Firstname = "Fairy",
                        Lastname = "Jamie",
                        Email = "flowerfairy@gmail.com"
                    },

                    new User
                    {
                        Username = "countdragos",
                        Password = "M2CSFxP31trrKlQL7Niocr3p8slnOpo+EtLGMPpzPPw=lbwhbCice6BZ0Tevuuwo7Q==", //Password123
                        Firstname = "Dragos",
                        Lastname = "Couz",
                        Email = "countdragos@gmail.com"
                    },

                    new User
                    {
                        Username = "lgdavidson",
                        Password = "M2CSFxP31trrKlQL7Niocr3p8slnOpo+EtLGMPpzPPw=lbwhbCice6BZ0Tevuuwo7Q==", //Password123
                        Firstname = "Lenny",
                        Lastname = "Davidson",
                        Email = "lg@gmail.com"
                    }
                );

            context.SaveChanges();
        }
    }
}
