		module.exports =function(r_stream,r_counter =0,r_interval = 40000){
			return  setInterval(function(){


						if(r_stream.readableFlowing != undefined){


							if(!r_stream.readableFlowing){


								console.log('flowing',r_stream.readableFlowing)
								r_stream.resume()


							}	


						}


						if(r_counter >= 3){


							console.log('this is taking too long I"ll attempt to close the stream')


							if(r_stream.isPaused()){


								r_stream.resume()
								r_counter = 1



							}


							else{

								r_stream.emit('error')
								r_stream.close();

							

							}


						}


						if(r_couter >= 5){

							r_stream.emit('error')
							r_stream.push(null);	
							r_stream.read(0);


						}
						


						if(r_counter >= 7){


							console.log('were forced to destroy the stream, they should make a method for ending streams')
							r_stream.destroy()


						}


						r_counter += 1



				},r_interval)

		}

