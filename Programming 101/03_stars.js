// TODO 7
// * * * *
// * * * *
// * * * *
// * * * *

let n= 9
for(let i=0; i<n;i++){
    let row =""
    for(let j=0;j<n;j++){
        row =row +"* ";
    }
    console.log(row)
}

// TODO 8
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

// TODO 9
// 1
// 1 2
// 1 2 3
// 1 2 3 4

for(let i=0;i<n;i++){
    let row="";
    for(let j=0;j<=i;j++){
        row=  row + (j+1)+" " 
    }
    console.log(row)
}

// TODO 10:
// 1
// 2 2
// 3 3 3
// 4 4 4 4
for(let i=0;i<n;i++){
    let row ="";
    for(let j=0;j<=i;j++){
        row =row +(i+1)+" "
    }
    console.log(row)
}

// TODO 11:
// 1 2 3 4 
// 1 2 3
// 1 2
// 1
// method-1
for(let i=n;i>0;i--){
    let row ="";
    for(let j=0;j<i;j++){
        row =row +(j+1)+" ";

    }
    console.log(row)

}
// method-2
for(let i=0;i<n;i++){
    let row= "";
    for(let j=0;j<n-i;j++){
        row =row +(j+1)+" "
    }
    console.log(row)
}



// TODO 12:
//         *
//       * *
//     * * *
//   * * * *
for(let i=0;i<n;i++){
    let row ="";
    for(j=0;j<n;j++){
        if(j<n-i-1){
            row=row+"  ";
        }
        else{
            row =row+"* "
        }
    }
    console.log(row)
}
// method -2 is use for loop for space and * separately

// TODO 13:
// 1
// 1 0
// 1 0 1
// 1 0 1 0

for(let i =0;i<n;i++){
    let row=""
    for(let j=0;j<=i;j++){
        
            row =row+ ((j+1)%2)+" "
            
        
    }
    console.log(row)
}
// TODO 14:
// 1
// 0 1
// 0 1 0
// 1 0 1 0
// 1 0 1 0 1 

let toggleValue = 1;
for(let i=0;i<n;i++){
    let row ="";
    for(let j=0;j<=i;j++){
        row =row+ toggleValue+" ";
        if(toggleValue==0){
            toggleValue=1;
        }
        else{
            toggleValue=0;
        }
    }
    console.log(row)
}