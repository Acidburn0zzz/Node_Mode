const node_mode_EventEmitter = require('events');
class node_mode_Emitter extends node_mode_EventEmitter {}
const node_mode_emitter = new node_mode_Emitter();
const node_mode_async_listener = require('./async_listener.js')
const node_mode_a_l = node_mode_async_listener()
// n_m
	// safe basic way of doing things no problems
	//implement expermenting with sucessful code to make it work nicely with system, the desired mode
	//  unknown new methods but unknown results
	// ,danger code that works but there are setbacks
	// prevent, when you dont want that area in your api to run
		//reimplemeted
	// make this an emitter so it can run more smoothly and handle sync and async code

//codes
	// respective desired code to be executed

//needs
	//whole get whole event emitter containing your codes to make the node_mode dynamic
	// one get an emitter containing the given node_mode	
	// some you wont use all the node_modes but still want options


module.exports = function(n_m = 'safe',codes,needs = 'whole'){

						if(node_mode_needs == 'whole'){


							node_mode_emitter.on('safe',       node_mode_a_l(codes[0]))
							node_mode_emitter.on('unknown',    node_mode_a_l(codes[1]))
							node_mode_emitter.on('implement',  node_mode_a_l(codes[2]))
							node_mode_emitter.on('danger',     node_mode_a_l(codes[3]))
							node_mode_emitter.on('prevent',    node_mode_a_l(codes[4]))
							return node_mode_emitter


						}


						
						async function node_mode_handler(mode_number){

							if(!isNaN(mode_number)){


								if(typeof(codes[mode_number]) == "function"){


									return codes[mode_number]


								}


								else{

									return async function(){
											console.log("didnt get a function change the node name or put a function in the appropriate spot in the array?")
											console.log("for the first arg type 'safe' ")
										}

								}


							}

							
							else if(mode_number == 'prevent'){

									return async function(){
										}								

							}							


						}


						else if(node_mode_needs == 'spec'){


								node_mode_emitter.on(n_m,       node_mode_a_l(codes[0]))
								return node_mode_emitter								


						}
					
			}