// Output this pattern using loops:
// *
// **
// ***
// ****
// *****


function pattern(n){
    for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j <= i ; j++){
            process.stdout.write("*");
        }
        console.log("");
    }

}

function pattern2(n) {
    for (let i = 1; i <= n; i++) {
        console.log("*".repeat(i));
    }
}



pattern(5);
pattern2(5);