exports.name = 1;
//console.log(1);



/*
 * (function(exports,require,module,__filename,__dirname){ 因为每个模块是独立的不可能去更改__filename和__dirname
 *   exports = module.exports = {} 当前的this指向的就是eports对象
 *   exports.name = 1
 *
     return module.exports;
     });
* */




var buf1=new Buffer('珠峰');
var buf2=new Buffer('培训');
//var newBuffer=new Buffer(12);
//buf1.copy(newBuffer,0);
//buf2.copy(newBuffer,6);
//console.log(newBuffer.toString());

Buffer.concat1= function (list,len) {
     if(!len){
          len=0;
          for(var i=0;i<list.length;i++){
               var curl=list[i];
               len+=curl.length;
          }
     }
     var curLen= 0;
     var newBuffer=new Buffer(len);
      for( i=0;i<list.length;i++){
          var cur=list[i];
          cur.copy(newBuffer,curLen);
          curLen+=cur.length;
     }
     return newBuffer;
};

console.log(Buffer.concat1([buf1,buf2]).toString());

