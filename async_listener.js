// l_f_d_args
// listener developer function args
// l_f_g_args
// listener function generated args
module.exports = function(){
		return	function(listener_function,l_f_d_args){	
							   // l_f_d_args should be an array						
							   return function(){
										setImmediate(()=>{
											listener_function(Array.from(arguments),this,l_f_d_args)
										})
								}
		}	
}