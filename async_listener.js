const circular_replacer = require('./circular_replacer.js')

// l_f_d_args
// listener  function developer args
	// code relating to l_f_d_args[3] and [4] are for the n_m_E module to help it better perform async operations
	// you can also try to manipulate this functionality
		//how it works is that if there is a mapping set in l_f_a_args[4] and the returned function knows what to map through use of l_f_a args
		// instead of the function waiting past event loops it executes on logic call 0 
// l_f_g_args
// listener function generated args
// if dealing with circular objects just comment appropirates
/// l_f_a_args	
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


							   			if(   l_f_d_args[3] !== undefined){
							   				// write an undefined property method


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


											if(   l_f_d_args[4]!= undefined   ){


												listener_function = l_f_d_args[4][l_f_a_args[0]]


											}


											setImmediate(()=>{
												// the first arg is the are l_f_g_args
												// the developers should handle circular objects or
												// ask for you module in l_f_d_args												
												listener_function(Array.from(l_f_a_args),this,l_f_d_args)											
											})


										}


										if(   Array.isArray(listener_function) && typeof(listener_function) == 'object'   ){


											if(   l_f_d_args[4]!= undefined   ){


												listener_function[0] = l_f_d_args[4][l_f_a_args[0]]


											}

											
											process.nextTick(()=>{
												// the first arg is the are l_f_g_args
												// the developers should handle circular objects or
												// ask for you module in l_f_d_args												
												listener_function[0](Array.from(l_f_a_args),this,l_f_d_args)											
											})


										}										


										else if(   !Array.isArray(listener_function) && typeof(listener_function) == 'object'   ){


											if(   l_f_d_args[4]!= undefined   ){


												listener_function.listener_function = l_f_d_args[4][   l_f_a_args[0]   ]


											}


											listener_function.listener_function(Array.from(l_f_a_args),this,l_f_d_args)


										} 


										else{


											console.error("first argument must be a listener function")


										}


								}
		}	
}