function squareSum(numbers){
    let summ = 0;
      for (let i= 0; i < numbers.length;i++){
        summ += numbers[i]**2;
      }
      return summ
    }