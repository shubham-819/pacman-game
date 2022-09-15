import { DIRECTIONS, OBJECT_TYPE, LEVEL } from "./setup";
//import Pacman from "./Pacman";
import GameBoard from "./GameBoard";
import Pacman from "./Pacman";

import { pacpos } from "../index";

class queue {
  constructor() {//Initializing array
    this.q = [];
    this.front = 0;//Front of the queue
    this.back = -1;//Back of the queue
  }
  push(a) {
    this.q.push(a);//Pushing the element from the back
    this.back++;
  }
  pop() {
    let temp = this.q[this.front];
    this.front++;//Popping an element from the front
    return temp;
  }
  isEmpty() {
    if (this.front > this.back) return true;
    else return false;//Checking if the queue is empty or not
  }
}

class graph {
  constructor() {
    this.AdjList = new Map();
    this.parent = new Map();
    this.visited = new Map();
  }
  addVertex(v) {
    this.AdjList.set(v, []);
  }
  addEdge(v, w) {
    this.AdjList.get(v).push(w);
    
  }
  BFS(src, dst) {
    const source = src;
    var qt = new queue();

    var keys = this.AdjList.keys();
    for (var i of keys) {
      this.visited.set(i, false);
      this.parent.set(i, "null");
    }

    this.visited.set(src, true);
    this.parent.set(src, "root");

    qt.push(src);
    while (qt.front <= qt.back) {
      src = qt.pop();
      var arr = this.AdjList.get(src);
      for (let x of arr) {
        if (this.visited.get(x) === false) {
          qt.push(x);
          this.visited.set(x, true);
          this.parent.set(x, src);
        }
      }
    }
    var keys = this.AdjList.keys();
    let temp = dst;
    while (this.parent.get(temp) != source) {
      temp = this.parent.get(temp);
    }
    return temp;
  }
}

//Primitive random movement

export function randomMovement(position, direction, objectExist) {
  let dir = direction;
  let nextMovePos = position + dir.movement;
  //Create an array from the directions object keys
  const keys = Object.keys(DIRECTIONS);

  while (
    objectExist(nextMovePos, OBJECT_TYPE.WALL) ||
    objectExist(nextMovePos, OBJECT_TYPE.GHOST)
  ) {
    //Get a random key from the key array
    const key = keys[Math.floor(Math.random() * keys.length)];

    //set the next move
    dir = DIRECTIONS[key];
    //set the next move
    nextMovePos = position + dir.movement;
  }
  return { nextMovePos, direction: dir };
}

export function BFSMovement(position, direction, objectExist, pacmanPos) {
  //Function declaration
  var g = new graph();
  let dir = direction;
  let nextMovePos;
  
  //Create an array from the directions object keys
  const keys = Object.keys(DIRECTIONS);

  for (let i = 0; i < 460; i++) {
    if (LEVEL[i] === 0 || LEVEL[i] === 2 || LEVEL[i] === 11) {
      g.addVertex(i);
    }
  }

  for (let i = 0; i < 460; i++) {//Converting the gameBoard matrix to adjacency List
    if (LEVEL[i] === 0 || LEVEL[i] === 2 || LEVEL[i] === 11) {
      if (i + 1 < 460 && (LEVEL[i + 1] === 0 || LEVEL[i + 1] === 2))
        g.addEdge(i, i + 1);
      if (i - 1 >= 0 && (LEVEL[i - 1] === 0 || LEVEL[i - 1] === 2))
        g.addEdge(i, i - 1);
      if (i + 20 < 460 && (LEVEL[i + 20] === 0 || LEVEL[i + 20] === 2))
        g.addEdge(i, i + 20);
      if (i - 20 >= 0 && (LEVEL[i - 20] === 0 || LEVEL[i - 20] === 2))
        g.addEdge(i, i - 20);
    }
  }
  
  nextMovePos = g.BFS(this.pos, pacmanPos);
  var key;
  if (nextMovePos === this.pos + 1) key = 2;
  else if (nextMovePos === this.pos - 1) key = 0;
  else if (nextMovePos === this.pos + 20) key = 3;
  else key = 1;//Assigning the direction which the ghost need to take

  //set the next move
  dir = DIRECTIONS[key];

  return { nextMovePos, direction: dir };
}
