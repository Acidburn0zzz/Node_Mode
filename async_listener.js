const circular_replacer = require('./circular_replacer.js')

// l_f_d_args
// listener  function developer args
// l_f_g_args
// listener function generated args
// if dealing with circular objects just comment appropirates
/// l_f_a_args
// if you like to emit with args here you go 
	// listener function application args
module.exports = function(){
		return	function(listener_function){	
							   // l_f_d_args should be an array please if we equate it to 
								// use arguments object and its not defined here all these instances
							   // will lose their identity and start sharing data we dont want that

							   // the interesting thing is js does not throw an error it jsut the arguments object
							   // loses its idenitity amongst its owners with all these different software 
							   // manifestations, this can happen
							   // var l_f_d_args = JSON.stringify(arguments,circular_replacer())
							   var l_f_d_args = arguments
							   return function(){


							   			var l_f_a_args = arguments
										if(listener_function != undefined){


											setImmediate(()=>{
												// the first arg is the are l_f_g_args
												// the developers should handle circular objects or
												// ask for you module in l_f_d_args
												listener_function(Array.from(l_f_a_args),this,l_f_d_args)											
											})


										}


										else{


											console.error("first argument must be a listener function")


										}


								}
		}	
}