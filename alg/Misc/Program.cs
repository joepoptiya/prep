/*
# register([
#    Function("funA", ["Boolean", "Integer"], isVariadic=False),
#    Function("funB", ["Integer"], isVariadic=False),
#    Function("funC", ["Integer"], isVariadic=True)
# ])
  
# find_matches(["Boolean", "Integer"])            -> [funA]
# find_matches(["Integer"])                       -> [funB, funC]
# find_matches(["Integer", "Integer", "Integer"]) -> [funC]
  
# More Examples:
#    Function("funD", ["String", "Integer", "Integer"], isVariadic=True),
#    Function("funE", ["String", "Integer", "Integer", "Integer"], isVariadic=False)
# find_matches(["String", "Integer"])             -> [funD]   # funD due to the supporting 0 variadics
# find_matches(["String", "Integer", "Integer", "Integer"])  -> [funD, funE]
  
class Function(object):
    def __init__(self, name, argumentTypes, isVariadic):
        self.name = name
        self.argumentTypes = argumentTypes
        self.isVariadic = isVariadic
     
    def __repr__(self):
        return "Function<{}>".format(self.name)
 
class FunctionLibrary(object):
    def __init__(self):
        raise NotImplementedError()
    def register(self, listOfFunctions):
        raise NotImplementedError()
    def find_matches(self, argumentTypes):
        raise NotImplementedError()
*/ 

using System;

// To execute C#, please define "static void Main" on a class
// named Solution.

class FunctionDef
{
    public FuctionDef(string funcName, string[] argTypes, bool isVariadic) {
        this.Name = functName;
        this.ArgTypes = argTypes;
        this.IsVariadic = isVariadic;
    }
    public string Name { get; set; }
    public string[] ArgTypes { get; set; }
    public bool IsVariadic { get; set; }
}

class FunctionLibrary
{
    private Dictionary<string, List<FunctionDef>> funcList = new Dictionary<string, List<FunctionDef>>();
    
    public FunctionLibrary() { }
    
    public void Register(string funcName, string[] argTypes, bool isVariadic) {
        
        var funcDef = new FunctionDef(funcName, argTyps, isVariadic);
        
        // Creat key and look up the key.
        var key = string.Join(argTypes);

        if (this.funcList.ContainsKey(key)) {
            // We add to it's list of funcDef
            var def = this.funcList.GetValue(key);
            
            def.Add(funcDef);
            
        } else {
            // We create a enw entry in coll.
            
            List<FuncionDef> newList = new List<FuncionDef>();
            newList.Add(funcDef);
            this.funcList.Add(key, newList);
        }
        
        return;
    }

    public string[] Find_Match(string[] argTypes) {
        var fl = new List<string>();
        
        var key = string.Join(argTypes);

        if (this.funcList.ContainsKey(key)) {
            foreach(var fd in this.funcList.GetValue(key)) fl.Add(fd.Name);
        }

        
        
        // check special case.
        var vList = this.funcList.Where(a => a.GetValue(
        
        
        return fl.ToArray();
    }
}

class Solution
{
    static void Main(string[] args)
    {
        
        var fl = new FunctionLibrary();
        fl.Register("funD", string[] { "String", "Integer", "Integer" }, true);
        var functionList1 = fl.Find_Match(string[] {"String", "Integer", "Integer", "Integer"});
        Console.WriteLine("funD found: {0}", functionList1.Length);
        fl.Register("funC", string[] { "Integer" }, false);
        var functionList2 = fl.Find_Match(string[] {"Integer"});
        Console.WriteLine("funC found: {0}", functionList2.Length);
        
        fl.Register("funZ", string[] { "Integer" }, true);
        var functionList1 = fl.Find_Match(string[] {"Integer", "Integer"});
        var functionList1 = fl.Find_Match(string[] {});
        
        
    }
}


/* 
Your previous Plain Text content is preserved below:

This is just a simple shared plaintext pad, with no execution capabilities.

When you know what language you'd like to use for your interview,
simply choose it from the dropdown in the top bar.

You can also change the default language your pads are created with
in your account settings: https://coderpad.io/settings

Enjoy your interview!
hello

# register([
#    Function("funA", ["Boolean", "Integer"], isVariadic=False),
#    Function("funB", ["Integer"], isVariadic=False),
#    Function("funC", ["Integer"], isVariadic=True)
# ])
  
# find_matches(["Boolean", "Integer"])            -> [funA]
# find_matches(["Integer"])                       -> [funB, funC]
# find_matches(["Integer", "Integer", "Integer"]) -> [funC]
  
# More Examples:
#    Function("funD", ["String", "Integer", "Integer"], isVariadic=True),
#    Function("funE", ["String", "Integer", "Integer", "Integer"], isVariadic=False)
# find_matches(["String", "Integer"])             -> [funD]   # funD due to the supporting 0 variadics
# find_matches(["String", "Integer", "Integer", "Integer"])  -> [funD, funE]
  
class Function(object):
    def __init__(self, name, argumentTypes, isVariadic):
        self.name = name
        self.argumentTypes = argumentTypes
        self.isVariadic = isVariadic
     
    def __repr__(self):
        return "Function<{}>".format(self.name)
 
class FunctionLibrary(object):
    def __init__(self):
        raise NotImplementedError()
    def register(self, listOfFunctions):
        raise NotImplementedError()
    def find_matches(self, argumentTypes):
        raise NotImplementedError()
 
 
 
 */