function dutyFree(normPrice, discount, hol) {
    let savings = normPrice * (discount / 100);
     let calc = Math.floor(hol / savings);
     return calc;
   }