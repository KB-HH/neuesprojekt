
let age : number = 5

for (let i = 1; i <= age; i++) {
    console.log(i);
}

if (age > 18) {
    console.log("Die Person ist volljährig.");
} else {
    console.log("Die Person ist nicht volljährig.");
}

let score : number = 0

if (score !== 0) {
    console.log("Score ist verfügbar.");
}

// Nutzt eine 'if-else'-Anweisung, um zu überprüfen, ob 'score' als 'truthy' Wert ausgewertet wird.
// Gebt 'Score wird als truthy ausgewertet.' aus, wenn 'score' als 'truthy' gilt.

if (score !== 0) {
    console.log("Score ist verfügbar.");
}else {
        console.log("Score ist nicht verfügbar")
}
//--------------------------------------------------------------------------------------------------
if (score) {
    console.log("Score wird als truthy ausgewertet.");
} else {
    console.log("Score wird nicht als truthy ausgewertet.");
}
//--------------------------------------------------------------------------------------------------

//let username : string = ""

//Nutzt eine 'if'-Anweisung, um zu überprüfen, ob 'username' einen Wert hat.
//Gebt 'Username ist verfügbar.' aus, wenn 'username' einen Wert hat.
let username: {name: string, lastName: string} = {
    name: "",
    lastName: "Busch"

}     //leeres Objekt
console.log(username.name)

//Schritt 9: Nutzt eine 'if-else'-Anweisung, um zu überprüfen, ob 'username' als 'falsy' Wert ausgewertet wird.
// Gebt 'Username wird als falsy ausgewertet.' aus, wenn 'username' als 'falsy' gilt.

if(username.name === "") {
    console.log("Username wird als falsy ausgewertet.")
} else {
    console.log("Nöpp");
}
//----------------------------------------------------------------------------------------------------------
//Schritt 11: Nutzt eine 'if-else'-Anweisung, um zu überprüfen, ob 'isAdmin' als 'truthy' Wert ausgewertet wird.
//Gebt 'isAdmin wird als truthy ausgewertet.' aus, wenn 'isAdmin' als 'truthy' gilt.

let isAdmin : boolean = false;
if (isAdmin) {
    console.log("isAdmin wird als truthy ausgewertet.");
} else {
    console.log("isAdmin wird nicht als truthy ausgewertet.");
}
//-----------------------------------------------------------------------------------------------------------
//Schritt 12: Nutzt eine 'if'-Anweisung, um zu überprüfen, ob 'isAdmin' 'false' ist.
//Gebt 'isAdmin ist false.' aus, wenn 'isAdmin' den Wert 'false' hat.
if(!isAdmin) {
    console.log("isAdmin ist auf false")
} else {
    console.log("isAdmin is true");
}
