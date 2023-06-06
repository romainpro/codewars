function enough(cap, on, wait) {
    if (cap >= on + wait){
      return 0
    }else{
      let surplu = ((on+wait)-cap)
      return surplu
    }
  }