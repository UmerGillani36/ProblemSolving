function libraryFine(d1, m1, y1, d2, m2, y2) {
    let late=0;
    let fine=0;
    
            if((d1<d2 ) && (y1==y2)){
                return fine;
            }else if(d1>d2 && m1<m2 ){
                return fine
            }else if(d1>d2 && y1<y2){
                return fine;
            }
            else if(d1>=d2 && m1==m2 && y1==y2){
                late=d1-d2;
                fine=late*15;
                return fine;
            }else if(m1>m2 && y1==y2){
                late=m1-m2;
                fine=late*500;
                return fine;
            }else if(y1>y2){
                return 10000;
            }
    }