// Você receberá uma matriz 2D do labirinto e uma série de direções. Sua tarefa é seguir 
// as instruções fornecidas. Se você chegar ao ponto final antes de todos os seus movimentos
// terem terminado, você deve retornar Concluir. Se você acertar qualquer parede ou sair da 
// labirinto, você deve retornar Morto. Se você ainda estiver no labirinto depois de
// usar todos os movimentos, você deve devolver Lost.

function mazeRunner(maze, directions) {
  var x,y
  for (var j = 0; j < maze.length; j++) {
    var k = maze[j].findIndex(e=>e==2);
    if (k > -1) { x = k, y = j; break }
  }
  
  // moves
  for (var dir of directions) {
    switch (dir) {
      case 'N': y--; break;
      case 'S': y++; break;
      case 'E': x++; break;
      case 'W': x--; break;
    }
    if (x < 0 || y < 0 || y > maze.length-1 || x > maze[y].length-1) return "Dead" // out of bounds
    var here = maze[y][x]
    if (here == 1) return "Dead" // hit wall
    if (here == 3) return "Finish" // find end
  }
  
  return "Lost"
}
