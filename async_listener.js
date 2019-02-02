const circular_replacer = require('./circular_replacer.js')

// l_f_d_args
// listener  function developer args
// l_f_g_args
// listener function generated args
// if dealing with circular objects just comment appropirates
/// l_f_a_args	
module.exports = function(){
		return	function(listener_function){	
							   // l_f_d_args should be an array please if we equate it to 
								// use arguments object and its not defined here all these instances
							   // will lose their identity and start sharing data we dont want that
							   // include a sync option here

							   // the interesting thing is js does not throw an error it jsut the arguments object
							   // loses its idenitity amongst its owners with all these different software 
							   // manifestations, this can happen
							   // var l_f_d_args = JSON.stringify(arguments,circular_replacer())
							   var l_f_d_args = arguments
							   return function(){


							   			var l_f_a_args = arguments							   			


							   			if(   l_f_d_args[3] !== undefined){


							   				if(   l_f_d_args[3].n_m_g_official !== undefined){


									   			if(   l_f_d_args[3].n_m_g_official  === l_f_d_args[2]   ){
									   				// the node_mode_group_official is authorized this is not a hack replace with assert

									   				if(   l_f_d_args[3].n_m_g_official_coding_map[l_f_a_args[0]] == "sync"   ){


									   					var listener_function_replace ={
									   											         listener_function:listener_function
							   											               }
										                listener_function = listener_function_replace

									   				}



									   				else if(   l_f_d_args[3].n_m_g_official_coding_map[l_f_a_args[0]] == "async"   ){

									   					
														


									   				}

									   			}	


								   			}


							   			}


										if(typeof(listener_function) == 'function'){


											setImmediate(()=>{
												// the first arg is the are l_f_g_args
												// the developers should handle circular objects or
												// ask for you module in l_f_d_args
												listener_function(Array.from(l_f_a_args),this,l_f_d_args)											
											})


										}


										else if(   !Array.isArray(listener_function) && typeof(listener_function)   ){


											listener_function.listener_function(Array.from(l_f_a_args),this,l_f_d_args)


										} 


										else{


											console.error("first argument must be a listener function")


										}


								}
		}	
}