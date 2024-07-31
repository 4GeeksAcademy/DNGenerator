let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domain = ['.com','.net','.us','.io', '.etc']

for (let indexp = 0; indexp < pronoun.length; indexp++) {
    for (let indexa = 0; indexa < adj.length; indexa++) {
        for (let indexn = 0; indexn < noun.length; indexn++) {
            for (let indexd = 0; indexd < domain.length; indexd++) {              
                console.log(pronoun[indexp]+adj[indexa]+noun[indexn]+domain[indexd]);  
            }
        }
    }
}






