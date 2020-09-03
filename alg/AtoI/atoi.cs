//Rextester.Program.Main is the entry point for your code. Don't change it.
//Microsoft (R) Visual C# Compiler version 2.9.0.63208 (958f2354)

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace Rextester
{
    public class Program
    {
        public static string IToSu(long n) {
            StringBuilder sb = new StringBuilder();
            //char[] map = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".ToArray();
            char[] map = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".ToArray();
            //int n = 11157;
            //long n = 2009215674938;
            
            while (n > 0) {
                long i = n % 62;
                char c = map[i];
                //Console.WriteLine("{0} = {1}, {2}", n, i, c);
                sb.Append(c);
                n = n / 62;
            }
            
            string s = new string(sb.ToString().Reverse().ToArray());
            //Console.WriteLine(s);
            return s;
        }
        
        public static long SuToI(string shortUrl) {
            long n = 0;
            
            for (int i = 0; i < shortUrl.Length; i++) {
                Console.WriteLine("{0}, {1}, {2}", shortUrl[i], (int)shortUrl[i], );
            }
            
            return n;
        }
        
        public static void Main(string[] args)
        {
            Console.WriteLine("{0}, {1}", 11157, IToSu(11157));
            Console.WriteLine("{0}, {1}", 2009215674938, IToSu(2009215674938));
            SuToI(IToSu(11157));
            
            
        }
    }
}