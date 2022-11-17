function bonAppetit(bill, k, b) {

    let billLength=bill.length;
    let actualBill=0;
    let chargedBill=0;
    let result=0;
              for(let i=0 ; i<billLength ; i++){
                   chargedBill+=bill[i]  
            }
            chargedBill=chargedBill/2;
            for(let i=0 ; i<billLength ; i++){
                    if(b==i){
                        console.log(i)
                        continue;

                    }else{
                        
                    actualBill+=bill[i]

                    }
                                        
            }
            actualBill=actualBill/2;
            console.log("chargedBill",chargedBill)
            console.log("actualBill",actualBill)
            result=(chargedBill-actualBill);
            console.log(result)
    }
    bonAppetit([3 ,10 ,2 ,9], 4, 1);