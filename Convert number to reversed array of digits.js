function digitize(n) {
    let array = n.toString().split("");
     array = array.reverse().map(Number)
     console.log(array)
     return array
   }