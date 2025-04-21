function Ship(length){
    let hits = 0;
  
    const getLength = () => length;
  
    const addHit = () =>{
      hits++;
    }
  
    const isShipSunk = () =>{
      return hits >= length;
    }
  
    return{
      getLength,
      addHit,
      isShipSunk
    }
  }