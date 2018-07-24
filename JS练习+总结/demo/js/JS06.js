
function sum(){
	var sum=0;
	for(var i=0;i<arguments.length;i++){
		sum+=arguments[i];
	}
	return sum;
}

function fun(){
	var s=sum(1,2,3);
	alert('1~3的和为： '+s);
}

function fun1(){
	var s=sum(1,2,3,4,5,6);
	alert('1~6的和为： '+s);
}

function fun2(){
	var s="";
	for(var i=0;i<arguments.length;i++){
		alert(arguments[i]);
		s+=arguments[i]+",";
	}
	
}
/*function test(){
	var result=fun2("xiaohuzi","zx");
	alert(result);
}*/

/*递归*/
function fun3(){
	var sum=function(n){
	if(1==n){
		return 1;
	}else{
		return n+arguments.callee(n-1);
	}
}
alert(sum(6));
}

