/*防止每次都生成新数字所以放在函数外面*/
var init_num=parseInt(Math.random()*100)+1;//产生1-100之间的随机数，Math.random()产生0-1之间的数，不包含1，所以要加1
console.log(init_num);//调试
function guess(){

	var num_obj=document.getElementById("num");//获取对象
	var result_obj=document.getElementById("result");
	var num=num_obj.value;//获取文本对象值
	/*下面的if else就相当于多个if else嵌套，从大范围依次递减*/
	if(num==""||isNaN(num)||num<0||num>100){
		result_obj.innerHTML="输入不符合条件！！！请输入0--100之间的数字！！！";
	}else if(num>init_num){
		result_obj.innerHTML="猜大了！！！";
	}else if(num<init_num){
		result_obj.innerHTML="猜小了！！！";
	}else{
		result_obj.innerHTML="恭喜你，猜对了！！！"
	}
	
}
