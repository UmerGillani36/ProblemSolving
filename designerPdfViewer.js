function designerPdfViewer(h, word) {

    let alpha="abcdefghijklmnopqrstuvwxyz";
    let ascii=[];
    let match;
    let heightIndex=[];
    let height=[];
    let highlightedArea=0;
    for(let i=0 ; i<26 ; i++){
        ascii.push(alpha.charCodeAt(i))
    }
    for(let i=0 ; i<word.length ; i++){
       match= word.charCodeAt(i)
        for(let j=0; j<26; j++){
            if(match==ascii[j]){
                heightIndex.push(j)
            }
        }
    }
    for(let i=0 ; i<heightIndex.length ; i++){
        let value=h[heightIndex[i]];
        height.push(value)
    }
    
    highlightedArea= Math.max(...height) * word.length;

    return highlightedArea;

    
    }

   const highlightedArea= designerPdfViewer([1 ,3 ,1 ,3 ,1 ,4 ,1 ,3 ,2 ,5 ,5 ,5 ,5 ,5 ,5 ,5, 5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5],"abc")
   console.log(highlightedArea)