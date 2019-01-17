// l_f_d_args
// listener developer function args
// l_f_g_args
// listener function generated args
module.exports = function(){
		return	function(listener_function){	
							   // l_f_d_args should be an array please
							   l_f_d_args = arguments						
							   return function(){


										if(listener_function != undefined){


											setImmediate(()=>{
												listener_function(Array.from(arguments),this,l_f_d_args)											
											})


										}


								}
		}	
}