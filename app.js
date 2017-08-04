const arr = [];

function populate(arr, rows, columns){
  for(let i = 0; i < columns; i++){
    arr.push([]);
    for(let j = 0; j < rows; j++){
      arr[i].push(Math.floor(Math.random() * 10));
    }
  }
  arr[3][4] = 0;
}

populate(arr,5,5);
//console.log(arr);

function mapZeros(arr){
  let i = 0;
  let map = {
    rows:[],
    columns:[],
  };
  let output = arr;

  while(i < output.length){
    map.columns[i] = null;
    let j = 0;
    while(j < output[i].length){
      if(output[i][j] === 0){
        map.columns[i] = true;
        map.rows[j] = true;
      }else if(!map.rows[j]){
        map.rows[j] = null;
      }
      j++;
    }
    i++;
  }

  for(let i = 0; i < output.length; i++){
   // console.log('////////////////');
    if(map.columns[i]){
     // console.log('column', i, 'is mapped');
      output[i].forEach(item => {
       // console.log(item);
        item = 0;
        //console.log(item);
      });
      // THIS WORKS
      // console.log('column', i, 'is mapped');
      // for(let z = 0; z < output[i].length; z++){
      //   output[i][z] = 0;
      // }
     // console.log(output[i]);
    }
    else{
      for(let j = 0; j < output[i].length; j++){
        if(map.rows[j]){
          output[i][j] = 0;
        }
      }
    }
  }
  // output[0].forEach(item => {
  //   return item = 0;
  // });
  output[3][2] = 0;
  // console.log('map:', map);
  // console.log('output:', output);
}

// mapZeros(arr);


//Question 2
//You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

const sumArr = [-1, 2, 5, -5, 0, -4, 9, -1, -2, 11];

const findMaxSum = (arr) => {
  let maxTotal = 0;
  let experimentalTotal = 0;

  for(let i = 0; i < arr.length; i++){
    experimentalTotal = Math.max(experimentalTotal + arr[i], 0);
    maxTotal = Math.max(maxTotal, experimentalTotal);
  }

  return maxTotal;
};

// console.log(findMaxSum(sumArr));



class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }
   
  insert(value, index) {
    if (index > this.length || index < 0) {
      throw new RangeError('Index out of range');
    }
       
    const newNode = {
      value
    };
       
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      const prevNode = this._find(index - 1);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
    }

    this.length++;
  }
   
  getValue(index) {
    try{
      return this._find(index).value;
    }
    catch(e) {
      return;
    }
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
    }
    this._find(index - 1).next = this._find(index + 1);
    this.length--;
  }
   
  _find(index) {
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }
}

const fifteen = new LinkedList();
fifteen.insert(5,0);
fifteen.insert(1,1);
const thirtyfive = new LinkedList();
thirtyfive.insert(5,0);
thirtyfive.insert(3,1);
const sumList = new LinkedList();
//Question 3
// //Write an algorithm which will sum two numbers stored in linked lists, where each node contains a single digit of the number.
// function sumLinkedLists(LA, LB){
//   nA = LA.head;
//   nB = LB.head;
//   sumLL(nA,nB);
// }
// function sumLL(nA,nB,rem=0){
//   if(!nA && !nB){
//     return rem;
//   }
//   else if(!nA){

//   }
// }


// sumLL(fifteen, thirtyfive);
