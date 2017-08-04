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
console.log(arr);

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
    console.log('////////////////');
    if(map.columns[i]){
      console.log('column', i, 'is mapped');
      output[i].forEach(item => {
        console.log(item);
        item = 0;
        console.log(item);
      });
      // THIS WORKS
      // console.log('column', i, 'is mapped');
      // for(let z = 0; z < output[i].length; z++){
      //   output[i][z] = 0;
      // }
      console.log(output[i]);
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
  console.log('map:', map);
  console.log('output:', output);
}

mapZeros(arr);