function Cal(){
	//doucment.文档对象,getEleById通过id获取对象
	//var 任意 ，可以指定任意数据类型
	var num_obj=document.getElementById("num");//与文本框建立链接，获取对象
	var result_obj=document.getElementById("result");
	var p_obj=document.getElementById("p")//测试p标签
   console.log(num_obj);//控制台调试对象，在页面中ctrl+shift+i中console中观察
    var num=num_obj.value;//获取对象值
   console.log(num);//调试值
   console.log(result_obj);//调试对象
   console.log(typeof(num));//测试数据据类型，为String
   if(num==""||isNaN(num)){
   	result_obj.innerHTML="输入不能为空且必须为数字";//在span中实时显示在页面，动态的在span标签中填充内容
   }else{
   	var n=parseInt(num);//字符串转换成int
   	result_obj.innerHTML=n*n;//动态显示
   		/*result_obj.innerHTML=num*num;//动态显示,字符串*字符串返回int，内部会自动转换*/
   	p_obj.innerHTML=n;
   }
}
