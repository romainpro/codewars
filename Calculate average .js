function findAverage(array) {
    if(array.length===0){
      return 0;
    }else{
    let length = array.length
    let somme = array.reduce((a,b) => a+b);
    let result = somme/length
    return result;
  }
    }