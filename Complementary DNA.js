function DNAStrand(dna){
    let change = "";
    for (let i =0; i < dna.length; i++){
      if (dna[i] === "A"){
        change +="T";
      }else if(dna[i]==="T"){
        change += "A";
      }else if(dna[i]==="C"){
        change +="G";
      }else if(dna[i]==="G"){
        change +="C";
      }
  }
    return change;
  }
  
  console.log(DNAStrand('AAAAA'));