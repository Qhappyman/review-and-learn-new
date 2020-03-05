let a = function(value,callback){       //node是单线程，所以需要大量的回调函数来实现异步
    if(typeof value=="number"){
        callback(null,value);
    }
    else{
        callback(new Error('参数错误'))
    }
}
let callback = function(err,value){         //回调函数第一个参数为错误参数，第二个参数是真正要传入的值
    if(err==null){                          //若没有错误，则第一个参数为null
        console.log(value);
    }
    else{
        console.log(err);
    }
}
a(132,callback);
module.exports = a;
module.exports = callback;