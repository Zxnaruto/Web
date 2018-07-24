function cl(){
	var num_obj=document.getElementById("num");//获取对象
	var result_obj=document.getElementById("result");//获取对象，设置span中的值
	
	var num=num_obj.value;//获取值
	
	if(num==""||isNaN(num)||num<0||num>100){
		result_obj.innerHTML="必须输入1-100之间的数！！！";
	}else{
		var sum=1;
		var n=parseInt(num);
		/*非零代表真，0代表假*/
		for(var i=n;i>0;i--){
			sum*=i;
		}
		result_obj.innerHTML=sum;
	}
}
