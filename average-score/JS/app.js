// This function for getting score and storing it in an array
function getAScore() {
    let g = Number(prompt("nomreh goghrafi vared konid"));
    let f = Number(prompt("nomreh farsi vared konid"));
    let e = Number(prompt("nomreh elom vared konid"));
    let t = Number(prompt("nomreh tarikh vared konid"));
    tedadd = [g, f, e, t];
    checkValueScore(tedadd);
    console.log(`goghrafi =>${g} `, `farsi =>${f} `, `elom =>${e} `, `tarikh =>${t} `);
}
    
// this function for checking the value user
function checkValueScore(tedadd) {
    for (let i = 0; i < tedadd.length; i++) {
        if (isNaN(tedadd[i])) {
            alert("chera horof zadi")
            getAScore();
            return;
        }
    }
    total(tedadd)
    console.log(tedadd);
}
getAScore()