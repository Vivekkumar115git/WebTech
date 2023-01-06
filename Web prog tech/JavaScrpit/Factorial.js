function getFactorial(choice,num){

    function F1(num){
         let fact=1,i;
         for(i=1;i<=num;i++){
            fact=fact*i;
         }
         console.log("Factorial using For loop: ",fact);
    }

    function F2(num){
        
        if(num==1)
          return 1;
        else
          return num*F2(num-1)

    }
     
    if(choice=="FORLOOP"){
        F1(num)
    }
    else if(choice=="RECUR")
    {
        console.log("Factorial using Recursion: ",F2(num))
    }
    else{
        console.log("Invalid!")
    }

}

getFactorial("RECUR",3)

