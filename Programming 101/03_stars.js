// TODO 4x4
let n= 4
for(let i=0; i<n;i++){
    let row =""
    for(let j=0;j<n;j++){
        row =row +"* ";
    }
    console.log(row)
}

// TODO 
// *
// * *
// * * *
// * * * *

// let n=4
for(let i=0; i<n;i++){
    let row =""
    for(let j=0;j<=i;j++){
        row =row +"* ";
    }
    console.log(row)
}

// TODO
// 1
// 1 2
// 1 2 3
// 1 2 3 4

for(let i=0;i<n;i++){
    let row="";
    for(let j=1;j<=i+1;j++){
        row=  row + j+" " 
    }
    console.log(row)
}
