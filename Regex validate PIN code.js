function validatePIN (pin) {
    //let valide = (pin[0-9]{4} ||pin[0-9]{6} )? true:false
      let valid = /^(\d{4}|\d{6})$/.test(pin);
     return valid;
   }
   
   validatePIN(1425)