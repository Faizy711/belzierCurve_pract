function setup() {
  // put setup code here
  createCanvas(1000, 1050); 
  noFill();
}

function draw() {
  // put drawing code here
  //1 bezier curve
  bezier(850,200,100,100,900,900,150,800);

  // //looping belzier
  // //1
  // for(var i =0; i<900; i=i+100){
  //   bezier(850,200,100,100,i,900,150,800);
  // }

  // //2
  // for(var i =0; i<900; i=i+40){
  //   bezier(i,200,100,100,900,i,150,800);
  // }

  // //3
  // for(var i =0; i<900; i=i+40){
  //   bezier(i,200,i,100,900,900,150,800);
  // }

  // //4
  // for(var i =0; i<900; i=i+50){
  //   bezier(850,200,100,100,900,900,i,800);
  // }

  // //5
  // for(let i =0; i<900; i=i+100){
  //   bezier(900,200,100,100,900,i,50,800);
  // }


}