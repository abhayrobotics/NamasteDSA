// TODO 21: Best Time to sell stock for max profit

let prices =[7,1,5,3,6,4]
// method 1: brute force
var maxProfit = function(prices) {
    let maxProfit =0;

    for(let i=0;i<prices.length;i++){
        for (let j=i+1;j<prices.length;j++){
            if(prices[j]-prices[i]>maxProfit && maxProfit<prices[j]){
                maxProfit= prices[j]-prices[i]

            }
            // console.log(prices[i],prices[j],maxProfit)

        }
    }
        return maxProfit;
    
};
console.log(maxProfit(prices))

// time Complexity - O(n^2)


// method-2

const maxProfit2 =(prices)=>{
    let minPrice = prices[0] 
    let maxProf =0;
    for(let i=0;i<prices.length;i++){
        if(minPrice>prices[i]){
            minPrice =prices[i]
        }
        if(maxProf< (prices[i]-minPrice)){
            maxProf =prices[i]-minPrice
        }


    }
    
    return maxProf;
}
console.log(maxProfit2(prices))