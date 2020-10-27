const finalPosition = function(moves) {
  let pos = [0,0];
  for (let dir of moves) {
    switch(dir) {
      case 'north':
        pos[1] += 1;
        break;
      case 'south':
       pos[1] -=1
       break;
      case 'east':
        pos[1] +=1
        break;
      case 'west':
        pos[1] -=1
        break;

  return pos;
    
    }
  }
}