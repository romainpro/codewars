function getGrade (s1, s2, s3) {
    let note = (s1 + s2 +s3)/3;
    if(note>=90 && note <=100){
      return "A"
    }else if(note >= 80 && note <=90){
      return "B"
    }else if(note >= 70 && note <=80){
      return "C"
    }else if(note >= 60 && note <=70){
      return "D"
    }else{
      return "F"
    }
  }