var p_std_stream_m ={
                        std_info:{},    
						handler:function(   dev_obj   ){
									var p_std_stream
									var p_w_stream
								  

							  		if(   !Array.isArray(dev_obj) && typeof(dev_obj)=='object'   ){

										
										p_std_stream = dev_obj.p_std_stream
										p_w_stream   = dev_obj.p_w_stream 		


							  		}


							  		else{


	                          		  	p_std_stream = arguments[2][1]   
	                          		  	p_w_stream =  arguments[2][2]


                          		  	} 


                                  	p_std_stream.write = p_std_stream_m.std_info.p_stdout_write                                  	
                                  	if(   arguments[2][3]   ){


                                  		p_w_stream.off('finish',arguments[2][3]);
                                  		p_w_stream.on('finish',p_std_stream_m.std_info.w_stream_finish)


                                  	}
                                  	p_w_stream.end("adfasfsafsafsd")                                  	
                                  	debugger;
                              
                            }
                }
                 //reimplement using the processuncaughtException handler 

module.exports = p_std_stream_m                  