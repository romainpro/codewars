function arrayPlusArray(arr1, arr2) {
  
    let somme1 = arr1.reduce((acc,value) => acc + value, 0 );
    let somme2 = arr2.reduce((acc,value) => acc + value, 0);
    
    const total = somme1 + somme2
    
    
    
    return total ;
  }