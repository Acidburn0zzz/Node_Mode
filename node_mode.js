const node_mode_EventEmitter = require('events');
class node_mode_Emitter extends node_mode_EventEmitter {}
const node_mode_async_listener = require('./async_listener.js')

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




module.exports = function(n_m = 'safe',codes,node_mode_needs = 'whole',node_mode_async = true,node_mode_args = null){

						const node_mode_emitter = new node_mode_Emitter();
						const node_mode_a_l = node_mode_async_listener()
						if(node_mode_needs == 'whole' && Array.isArray(codes) && node_mode_async && typeof(codes[0]) == 'function' ){


							node_mode_emitter.on('safe',       node_mode_a_l(codes[0],'safe emitted'))
							node_mode_emitter.on('unknown',    node_mode_a_l(codes[1],'unknown emitted'))
							node_mode_emitter.on('implement',  node_mode_a_l(codes[2],'implement emitted'))
							node_mode_emitter.on('danger',     node_mode_a_l(codes[3],'danger emitted'))
							node_mode_emitter.on('prevent',    node_mode_a_l(codes[4],'prevent emitted'))

							// node_mode_emitter.on('safe',       codes[0])
							// node_mode_emitter.on('unknown',    codes[1])
							// node_mode_emitter.on('implement',  codes[2])
							// node_mode_emitter.on('danger',     codes[3])
							// node_mode_emitter.on('prevent',    codes[4])							
							return node_mode_emitter


						}


						else if(node_mode_needs == 'whole' && Array.isArray(codes) && node_mode_async && typeof(codes[0][0]) == 'string' ){


							for(var node_mode_i in codes){

								node_mode_emitter.on(codes[node_mode_i][0]  ,node_mode_a_l(codes[node_mode_i][1],codes[node_mode_i][0] + ' emitted'))
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

