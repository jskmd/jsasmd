//加法运算
exports.sum=function (){
  var res=0;
  for(var i=0;i<arguments.length;i++){
    res+=arguments[i];
  }
  return res;
};
//减法运算
exports.sub=function(a, b){
  return a-b;
}
//乘法运算
exports.mul=function(){
  var res=0;
  for(var i=0;i<arguments.length;i++){
    res=res*arguments[i];
  }
  return res;
}
//除法运算
exports.div=function (a, b){
  return a/b;
};


