const n_API = require(process.env.HOME+ "/Required/node_API_header.js").n_API_init({
  "events":true,        
  "circular_replacer":true,    
  "required_local_dir":true,  
  "async_listener":true,      
},
{
  location_dir:__dirname
});
const node_mode_EventEmitter = n_API.API_n_b_p.events;
class node_mode_Emitter extends node_mode_EventEmitter {}
const node_mode_async_listener = n_API.API_n_c.async_listener

function node_mode_syncify(){

	var dev_obj = arguments[0] 


	if(   dev_obj.sync == true   ){


		return {
			     listener_function: dev_obj.listener_function
		       }


	}


	else if(   dev_obj.sync == false   ){


		return dev_obj.listener_function


	}
}

// n_m
	// safe basic way of doing things no problems
	//implement expermenting with sucessful code to make it work nicely with system, the desired mode
	//  unknown new methods but unknown results
	// ,danger code that works but there are setbacks
	// prevent, when you dont want that area in your api to run
		//reimplemeted so you can use it how you like
	// make this an emitter so it can run more smoothly and handle sync and async code

//codes
	// respective desired code to be executed

//node_mode_needs
	//whole get whole event emitter containing your codes to make the node_mode dynamic
	// one get an emitter containing the given node_mode	
	// some you wont use all the node_modes but still want options

//node_mode_async
	//false, the emitter provides sync functionality
	// true, the function are wrapped so they can be made async, tell developers to give the function as a regular one

// node_mode_args
	 //must be an array try to implement with arguments
	 // args dev wants to provide the  node_mode_emitter

//updates
	//make so that you can add arguments needed for this to work properly so the dev
	// can declare the emitter and make their code much neater, without just seeing the one times
	// where all the required args came into existence
	// also make so you can pop out and put back in at will
	// should be attached to a const so you can move the listeners around
	//make a debug mode	
	// if there is an error, undo the last event and emit the next event
	// make n_m a node_mode emitter object manager, so when it sees a string associated with the event you can
		// use event raw listeners to emit that event also might not work 
	// implent locally and globally and node_mode_threads object handler



module.exports = function(n_m = 'safe',codes,node_mode_needs = 'whole',node_mode_async = true,node_mode_args = null){
						// if this doesnt work change
						const n_m_isStrict = (function() { 	
							return !this; 
						});


						if(   typeof(    n_m   ) == "object" && !Array.isArray(   n_m   )   ){


							var n_m             = n_m.n_m
							var codes           = n_m.codes
							var node_mode_needs = n_m.node_mode_needs
							var node_mode_async = n_m.node_mode_async  //if a boolean make an array and mutliply by length of n_m
							var node_mode_args  = n_m.node_mode_args
							  
							
						}						


						const node_mode_emitter = new node_mode_Emitter();
						const node_mode_a_l = node_mode_async_listener()
						function node_mode_d_g_c(){
						    // node_mode_d_g_c	 = node_mode_dynamic_group_constructor
							// console.log(arguments)
							// console.log(arguments[3][0].toString())
							// arguments[0][0].toString() is the real listneer
							var existing_listener = false
							for( var node_mode_3_i in arguments[2][1]){


								if(arguments[0][0].toString() == arguments[2][1][node_mode_3_i]){		        																		


									existing_listener = true
									break;

								} 


							}


							if(!existing_listener){

								if(!n_m_isStrict()){


									console.log('Node Mode Emitter Error, you did not assign the '+arguments[0][0].toString()+' listener to the group ' + arguments[2][2])
								

								}
								// console.log(arguments)

								else{


									throw new Error('Node Mode Emitter Error, you did not assign the '+arguments[0][0].toString()+' listener to the group ' + arguments[2][2])


								}	

							}




							node_mode_emitter.emit(arguments[0][0].toString())		        																
						}
						

						if(node_mode_needs == 'whole' && Array.isArray(codes) && node_mode_async && typeof(codes[0]) == 'function' ){


							node_mode_emitter.on('safe',       node_mode_a_l(   node_mode_syncify({
																									listener_function:codes[0],   sync:node_mode_async
																								  }),'safe emitted'))
							node_mode_emitter.on('unknown',    node_mode_a_l(   node_mode_syncify({
																									listener_function:codes[1],   sync:node_mode_async
																								  }),'unknown emitted'))
							node_mode_emitter.on('implement',  node_mode_a_l(   node_mode_syncify({
																									listener_function:codes[2],   sync:node_mode_async
																								  }),'implement emitted'))
							node_mode_emitter.on('danger',     node_mode_a_l(   node_mode_syncify({
																									listener_function:codes[3],   sync:node_mode_async
																								  }),'danger emitted'))
							node_mode_emitter.on('prevent',    node_mode_a_l(   node_mode_syncify({
																									listener_function:codes[4],   sync:node_mode_async
																								}),'prevent emitted'))

							// node_mode_emitter.on('safe',       codes[0])
							// node_mode_emitter.on('unknown',    codes[1])
							// node_mode_emitter.on('implement',  codes[2])
							// node_mode_emitter.on('danger',     codes[3])
							// node_mode_emitter.on('prevent',    codes[4])							
							return node_mode_emitter


						}


						else if(Array.isArray(n_m) && node_mode_needs == 'whole' && Array.isArray(codes) && typeof(codes[0][0]) == 'string' ){


							for(var node_mode_1_i in codes){
								node_mode_emitter.on(codes[node_mode_1_i][0]  ,node_mode_a_l(   node_mode_syncify({
														                                                             listener_function:codes[node_mode_1_i][1],
														                                                             sync:node_mode_async
									                                                                              }),codes[node_mode_1_i][0] + ' emitted'))
							}			        				        		
		        			for(var node_mode_2_i in n_m){
		        				node_mode_emitter.on(n_m[node_mode_2_i][0], node_mode_a_l(   node_mode_syncify({
		        																								 listener_function:node_mode_d_g_c,
        																										 sync:node_mode_async
        																                                       }),n_m[node_mode_2_i][1],n_m[node_mode_2_i][0]))
		        			}	
							return node_mode_emitter


						}							


						else if(node_mode_needs == 'whole' && Array.isArray(codes) && node_mode_async && typeof(codes[0][0]) == 'string' ){


							for(var node_mode_1_i in codes){
								node_mode_emitter.on(codes[node_mode_1_i][0]  ,node_mode_a_l(codes[node_mode_1_i][1],codes[node_mode_1_i][0] + ' emitted'))
							}						
							return node_mode_emitter


						}						

						
						else if(node_mode_needs == 'whole' && typeof(codes) == 'object'){

							//make this so that it can make events based on object property names
							node_mode_emitter.on('safe',       codes.safe   )            
							node_mode_emitter.on('unknown',    codes.unknown   )
							node_mode_emitter.on('implement',  codes.implement   )
							node_mode_emitter.on('danger',     codes.danger   )
							node_mode_emitter.on('prevent',    codes.prevent   )
							return node_mode_emitter

						}						


						else if(node_mode_needs == 'spec'){


								node_mode_emitter.on(n_m,       node_mode_a_l(codes[0]))
								return node_mode_emitter								


						}


						else if(node_mode_needs == 'some'){
							//make this so that it can make events based on object property names
						}
					
			}




