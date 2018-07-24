function count(){
	var s_in=document.getElementById("s");
	var s_out=document.getElementById("s_result");
	var s_value=s_in.value;
	
	try{
	var result=eval("("+s_value+")");
	s_out.innerHTML=result;
	}catch(e){
		console.log(e);
		s_out.innerHTML="表达式有误！！！";
	}
}
