function printerError(s) {
    let regex = /[a-m]/;
    let numErrors = 0;
  
    for (let i = 0; i < s.length; i++) {
      if (!regex.test(s[i])) {
        numErrors++;
      }
    }
  
    return numErrors + "/" + s.length;
  }
  
  console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'));
  