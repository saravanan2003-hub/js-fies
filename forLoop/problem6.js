function sumEven(n){
    sum = 0;
    for(i=1;i<=n; i++){
        if(i%2==0){
            sum = sum + i;
            
        }
        
    }
    return sum;
}
let result = sumEven(100);
console.log(result);