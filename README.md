Optimizing the initalization and use of the fs.Stream objects for production, effciency and understandable code
This is a template building project as I understand more of the Node.js API and the Stream API, I will implement into this project template so I can easily use come production time

I try to make one string work for all the node_mode emitters in the future


dont use setTimeout or setInterval with a node_mode emitter
current state unpipe_pause

(as your read the script)
'' - means an emit made those irrelevant leave as is 

to see the unpipe_pause function 
	w_stream_last.emit('stream_finished')
	w_stream_last.emit('unknown')
	r_stream_data_event.emit('prevent')
	r_stream_data_event.emit('stream_finished')
	pipe_emitter.emit('unpipe_pause')
	pipe_emitter.emit('prevent')
	r_stream_dest_next.emit('unpipe_pause')
	r_stream_dest_orig.emit('unpipe_pause')
	piping_action.emit('safe')      

to sethe unpipe_data functionality 

	w_stream_last.emit('stream_finished')
	w_stream_last.emit('unknown')
	r_stream_data_event.emit('prevent')
	r_stream_data_event.emit('stream_finished')
	pipe_emitter.emit('prevent')
	pipe_emitter.emit('prevent')
	r_stream_dest_next.emit('unpipe_data')
	r_stream_dest_orig.emit('unpipe_data')
	piping_action.emit('safe')      

to see the pipeline functionality
	

	w_stream_last.emit('stream_finished')
	w_stream_last.emit('unknown')
	r_stream_data_event.emit('prevent')
	r_stream_data_event.emit('stream_finished')
	pipe_emitter.emit('prevent')
	pipe_emitter.emit('prevent')
	r_stream_dest_next.emit('')
	r_stream_dest_orig.emit('')
	piping_action.emit('prevent') 

to see the writable drain funnctionality

	w_stream_last.emit('stream_finished') 
	w_stream_last.emit('prevent')
	r_stream_data_event.emit('safe')
	r_stream_data_event.emit('stream_finished')
	pipe_emitter.emit('drain') 
	r_stream_dest_next.emit('')
	r_stream_dest_orig.emit('')	
	piping_action.emit('prevent')	

to see the cork uncork mechanism

	w_stream_last.emit('stream_finished') 
	w_stream_last.emit('unknown')
    r_stream_data_event.emit('safe')   
    r_stream_data_event.emit('stream_finished')  	
    pipe_emitter.emit('cork_mechanism') 
	r_stream_dest_next.emit('')
	r_stream_dest_orig.emit('')	    
    pipe_emitter.emit('prevent')      	