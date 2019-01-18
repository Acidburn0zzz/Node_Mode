Optimizing the initalization and use of the fs.Stream objects for production, effciency and understandable code
This is a template building project as I understand more of the Node.js API and the Stream API, I will implement into this project template so I can easily use come production time

I try to make one string work for all the node_mode emitters in the future

using node_mode and async_listener bring a new way of coding that makes it powerful smaller and developer-ergonomic


node_mode
	Node mode is an implenation that I made think of it as an upgrade to the function, where it takes threads as arguments (technically the threads are in a function), but in concept it takes threads

	Node mode is an event emitter, which holds a series of developer created events when emitted execute the thread at that points
		very useful if you need to have code run in a different version or different compatibility but just want one copy

	So instead of 

	code.js for js 
	code.py for python
	code.cpp for C++
	and so on ...

	you have 
	code.js for [all programming lanaguges] [all OS] ...

	but this is javascript only the name node mode, work will be implemented for all languages but for now let see how you can boost javascript

	THE NODE MODE OBJECT

	
	the n_m_group
		an extension of n_m this puts a name to a mode your code is in so when you emit
		node_mode.emit('n_m','real_listener')
		its just like emitting
        node_mode.emit('real_listener')
		it is an array and belongs in the first arg of the node_mode parameter
		[
		 ['n_m_group_1',
		 	['real_listener_1','real_listener_2','real_listener_3','real_listener_4','real_listener_5'],	
		 ],
		 ['n_m_group_2',
		 	['real_listener_1','real_listener_2','real_listener_3','real_listener_4','real_listener_5'],	
		 ],	
		 ['n_m_group_3',
		 	['real_listener_1','real_listener_2','real_listener_3','real_listener_4','real_listener_5'],	
		 ],			 	 
		]

		as you can see all you threads that make your software are tied to this simple array, and with grouping concept here
		it helps erase confusion when you need to switch the mode of your code, i

		if you emit a n_m_group and an event that is is not part of the group array an error is thrown
		this is to prevent you from overlook and turing your code to a dangerous mode

		make sure that the real listener does not have the same name as the group name node mode is an emitter, you would have to handle that your self in
		your own custom listeners


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
    pipe_emitter.emit('cork_mechanism_group','cork_mechanism') 
	r_stream_dest_next.emit('')
	r_stream_dest_orig.emit('')	    
    pipe_emitter.emit('prevent')      	