function remainder(n, m){
    if (n>m){
      return n%m
    }else if(n<m){
      return m%n
    }else if(n===0 || m===0 )
      return NaN
    
  }