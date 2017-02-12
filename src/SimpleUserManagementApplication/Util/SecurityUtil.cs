using System;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using SimpleUserManagementApplication.Models;

namespace SimpleUserManagementApplication.Util
{
    public class SecurityUtil
    {
        private const int SaltByteSize = 32;
        private const int HashByteSize = 32;
        private const int Iterations = 1000;

        public static string DerivePasswordHashAndSalt(string password, byte[] saltAsByteArray)
        {
            if (saltAsByteArray == null || saltAsByteArray.Length < 0) {
                saltAsByteArray = GenerateSalt();
            }

            // Derive password hash using HMACSHA1
            string passwordHash = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password,
                salt: saltAsByteArray,
                prf: KeyDerivationPrf.HMACSHA1,
                iterationCount: Iterations,
                numBytesRequested: HashByteSize));

            string salt = Convert.ToBase64String(saltAsByteArray);
            string hashAndSalt = passwordHash + salt;
            return hashAndSalt;
        }



        public static string DerivePasswordHashAndSalt(string password)
        {
            return DerivePasswordHashAndSalt(password, null);
        }



        public static bool VerifyPasswordHashAndSalt(string password, User user)
        {
            string hashAndSalt = user.Password;
            string salt = hashAndSalt.Substring(hashAndSalt.IndexOf('=') + 1);
            byte[] saltAsByteArray = Convert.FromBase64String(salt);
            string calculatedHashAndSalt = DerivePasswordHashAndSalt(password, saltAsByteArray);
            return hashAndSalt == calculatedHashAndSalt;
        }

        
        private static byte[] GenerateSalt()
        {
            // Generate salt using a CSPRNG
            RNGCryptoServiceProvider cryptoServiceProvider = new RNGCryptoServiceProvider();
            byte[] salt = new byte[SaltByteSize];
            cryptoServiceProvider.GetNonZeroBytes(salt);
            return salt;
        }

    }
}
