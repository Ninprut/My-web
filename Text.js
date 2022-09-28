var slash = '#';
var space = '-';
var result = '';
var row = true;
for (var i = 0; i < 8; i++) {
  for (var j = 0; j < 8; j++) {
    if ((j+row) % 2 == 0) {
      result += space;
    } else {
      result += slash;
    }
  }
  console.log(result);
  result='';
  row = ! row;
}


var dg=1;      
while(dg<100)                                                                
{
                                                      
  if (dg % 3 == 0)
  {
    console.log("buzz");
  }
  else{
    console.log(dg);
    
  }
  dg+=1;
  
}
   

var jak= "" + 1 + 0;                                                         
console.log(jak);
var tyu= "" - 1 + 0;                                                           
console.log(tyu);
var rte=true + false;                                                           
console.log(rte);
var asd=6 / "3" ;                                                           
console.log(asd);
var zxc="2" * "3" ;                                                           
console.log(zxc);
var cvb=4 + 5 + "px";                                                           
console.log(cvb);
var bnm="$" + 4 + 5;                                                           
console.log(bnm);
var vcx="4" - 2;                                                           
console.log(vcx);
var mnb="4px" - 2;                                                           
console.log(mnb);
var qwe=7 / 0;                                                           
console.log(qwe);
var vbn="-9\n" + 5;                                                           
console.log(vbn);
var mnb="  -9\n" - 5;                                                           
console.log(mnb);
var kjh=5 && 2;                                                           
console.log(kjh);
var apo=2 && 5;                                                           
console.log(apo);
var poi=5 || 0;                                                           
console.log(poi);
var uiy=0 || 5;                                                           
console.log(uiy);
var rfv=null + 1;                                                           
console.log(rfv);
var plm=undefined + 1;                                                           
console.log(plm);
var cft=null == "\n0\n";                                                           
console.log(cft);
var bnm=+null == +"\n0\n";                                                           
console.log(bnm);

