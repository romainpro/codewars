function rentalCarCost(d) {
    let priceDaysVacation= 40;
    let priceNoReduc=0;
    for(let i = 0; i < d; i++ ){
      priceNoReduc += priceDaysVacation
    }
   
    if(d >=7){
      let priceReduc1 = priceNoReduc -= 50
      return priceReduc1
    }else if(d>=3){
      let priceReduc2 =priceNoReduc -= 20
    return priceReduc2    
    }else{
      return priceNoReduc
    }
  }
  rentalCarCost(3)
  
  //jour de loca 40
  //si loca 7jour+ reduc 50
  //si loca 3jour + reduc 20