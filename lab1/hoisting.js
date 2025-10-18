function demonstrateHoisting() {
    console.log(localVar);
    
    var localVar = "I'm hoisted!";
    
    console.log(localVar);
}

demonstrateHoisting();