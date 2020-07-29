function processChecks() {
    let updates = document.getElementById("updates-filter").checked;
    let projects = document.getElementById("projects-filter").checked;
    let recs = document.getElementById("recs-filter").checked;
    let thoughts = document.getElementById("thoughts-filter").checked;
    
    function changeChecks(entryType, check) {
        let checks = document.getElementsByClassName(entryType);
        console.log(checks);
        console.log("\n" + check);
        for (let i = 0; i < checks.length; ++i) {
            if (checked) {
                checks[i].style.display = "inline-block"; 
                checks[i].style.listStyleType = "none";
            } else {
                checks[i].style.display = "none";   
            }
        }
    }
    
    if (updates) {
        changeChecks('.updates', true);
    } else {
        this.changeChecks('.updates', false);
    }
    
    if (projects) {
        changeChecks('.projects', true);
    } else {
        this.changeChecks('.projects', false);
    }
    
    if (recs) {
        changeChecks('.recs', true);
    } else {
        changeChecks('.recs', false);
    }
    
    if (thoughts) {
        changeChecks('.thoughts', true);
    } else {
        changeChecks('.thoughts', false);
    }
}