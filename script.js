var rotateAngle = 90;
var rotateAngle1=  -90;

function rotate(){
    var d=document.getElementsByTagName("input");
    var item=document.getElementsByClassName("grid_item");
    var arr=[];
    var narr=[];
    var arr1=[];
    //rotate the div container clockwise
    document.getElementById("contain").setAttribute("style", "transform: rotate(" + rotateAngle + "deg)");
    rotateAngle = rotateAngle + 90;
    //rotate the elements anticlockwise to display
    for(let m=0;m<item.length;m++){
    item[m].setAttribute("style", "transform: rotate(" + rotateAngle1 + "deg)");
    }
    rotateAngle1=rotateAngle1-90;
    for(let i=0;i<d.length;i++){
    arr.push(d[i].value);
   }
   //converting 1d arr to 2d arr
   while(arr.length>0){
    narr.push(arr.splice(0,4));
   }
   //converting 2d array to 1d array
   for (let  k = 0; k < 4; k++)
   {
       for (let l = 4- 1; l >= 0; l--){
          arr1.push(narr[l][k]);
          }
   }
   //displaying the rotated array and rotate matrix values  clockwise
   for(let p=0;p<d.length;p++){
   d[p].value=arr1[p];
   }
   //color change alternately with onclick
    $(".grid_item").toggleClass("blue");
    $(".grid_item1").toggleClass("blue");
}

