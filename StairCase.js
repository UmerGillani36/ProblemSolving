
function staircase(n) {
    
    let output = ''
    
    for (let i = 1; i <= n; i++) {
    
        for (let s = n - 1; s >= i; s--) {
            output += ' '
        }
        
       
        for (let h = 1; h <= i; h++) {
            output += '#'
        }
        output += "\n"
       
    }
    console.log(output)
}


    staircase(6);