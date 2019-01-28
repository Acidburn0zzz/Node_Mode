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
		 	['group','mechanism','attach_you','to','my','emitter']	
		 ],			 	 
		]

		as you can see all you threads that make your software are tied to this simple array, and with grouping concept here
		it helps erase confusion when you need to switch the mode of your code, i

		if you emit a n_m_group and an event that is is not part of the group array an error is thrown
		this is to prevent you from overlook and turing your code to a dangerous mode

		make sure that the real listener does not have the same name as the group name node mode is an emitter, you would have to handle that your self in
		your own custom listeners

		the node_mode_threads
		an organized way to control your threads, making it easy to change code version but placing the arguments in emiiter can work also

		const node_mode_threads = [
		                            ['cork_mechanism_group',      'stream_finished'         ],                            
		                            ['cork_mechanism_group',      'unknown'                 ],
		                            ['cork_mechanism_group',      'safe'                    ],
		                            ['cork_mechanism_group',      'stream_finished'         ],
		                            ['cork_mechanism_group',      'cork_mechanism'          ],
		                            ['cork_mechanism_group'                    ,      ''                        ],
		                            ['cork_mechanism_group'                    ,      ''                        ],
		                            ['cork_mechanism_group',      'prevent'                 ],
		                            [,''],
		                            [,''],
		                          ]

		access like so 
		node_mode_emitter.on(    node_mode_threads[group][0], node_mode_threads[event][1],)

		make sure any node_mode_emitters added to your code update in the list!!!!!!!!!!!!!!!

        n_m_t_registry

        its a localized place where all thread groups for everty node_mode emitter in an API, exists, this simple implementation is optional and can be 
            used to make your code much cleaner 

        module.exports.n_m_t_registry = {
                                            node_mode_emitter_name: n_m_group ( refer to above   )
                                        }            

replace const node_mode_threads to see actions
dont use setTimeout or setInterval with a node_mode emitter
current state unpipe_pause

(as your read the script)
'' - means an emit made those irrelevant leave as is 

to see the write drain functionality

const node_mode_threads = [
                            ['drain_group',      'stream_finished'         ],                            
                            ['drain_group',      'prevent'                 ],
                            ['drain_group',      'safe'                    ],
                            ['drain_group',      'stream_finished'         ],
                            ['drain_group',      'drain'                   ],
                            ['drain_group',      'prevent'                 ],
                            ['drain_group',                                ],
                            ['drain_group',                                ],
                            ['drain_group',      'prevent'                 ],
                            [,''],
                            [,''],
                          ]
a simple pipe 



const node_mode_threads = [
                            ['pipe_group',      'stream_finished'         ],                            
                            ['pipe_group',      'unknown'                 ],
                            ['pipe_group',      'prevent'                 ],
                            ['pipe_group',      'stream_finished'         ],
                            ['pipe_group',      'unpipe_pause'            ],
                            ['pipe_group',      'prevent'                 ],
                            ['pipe_group',      ''                        ],
                            ['pipe_group',      ''                        ],
                            ['pipe_group',      'prevent'                 ],
                            [,''],
                            [,''],
                          ] 
to see the pipe & pause functionlaity

const node_mode_threads = [
                            ['pipe_group',      'stream_finished'         ],                            
                            ['pipe_group',      'unknown'                 ],
                            ['pipe_group',      'prevent'                 ],
                            ['pipe_group',      'stream_finished'         ],
                            ['pipe_group',      'unpipe_pause'            ],
                            ['pipe_group',      'prevent'                 ],
                            ['pipe_group',      'unpipe_pause'            ],
                            ['pipe_group',      'unpipe_pause'            ],
                            ['pipe_group',      'safe'                    ],
                            [,''],
                            [,''],
                          ]    

to see the pipe & data event functionlaity         

const node_mode_threads = [
                            ['pipe_group',      'stream_finished'         ],                            
                            ['pipe_group',      'unknown'                 ],
                            ['pipe_group',      'prevent'                 ],
                            ['pipe_group',      'stream_finished'         ],
                            ['pipe_group',      'unpipe_pause'            ],
                            ['pipe_group',      'prevent'                 ],
                            ['pipe_group',      'unpipe_data'             ],
                            ['pipe_group',      'unpipe_data'             ],
                            ['pipe_group',      'safe'                    ],
                            [,''],
                            [,''],
                          ]

to see the readable.read readable functionality

const node_mode_threads = [
                            ['read_group',      'stream_finished'         ],                            
                            ['read_group',      'unknown'                 ],
                            ['read_group',      'implement'               ],
                            ['read_group',      'stream_finished'         ],
                            ['read_group',      'prevent'                 ],
                            ['read_group',      'prevent'                 ],
                            ['read_group',      ''                        ],
                            ['read_group',      ''                        ],
                            ['read_group',      'prevent'                 ],
                            [,''],
                            [,''],
                          ]

to see the  readable.pause functionaltty

const node_mode_threads = [
                            ['pause_group',      'stream_finished'         ],                            
                            ['pause_group',      'unknown'                 ],
                            ['pause_group',      'safe'                    ],
                            ['pause_group',      'stream_finished'         ],
                            ['pause_group',      'pause'                   ],
                            ['pause_group',      'prevent'                 ],
                            ['pause_group',      ''                        ],
                            ['pause_group',      ''                        ],
                            ['pause_group',      'prevent'                 ],
                            [,''],
                            [,''],
                          ]

to see the unshift readable functionality
//try to use unshift data, the readable doesn't check if the writeable needs to be drained

const node_mode_threads = [
                            ['unshift_group',      'stream_finished'         ],                            
                            ['unshift_group',      'unknown'                 ],
                            ['unshift_group',      'prevent'                 ],
                            ['unshift_group',      'prevent'                 ],
                            ['unshift_group',      'unshift_readable'        ],
                            ['unshift_group',      'prevent'                 ],
                            ['unshift_group',      ''                        ],
                            ['unshift_group',      ''                        ],
                            ['unshift_group',      'prevent'                 ],
                            [,''],
                            [,''],
                          ]                                                    

to see the unshift data functionality

module.exports   = [
                            ['unshift_group',      'stream_finished'         ],                            
                            ['unshift_group',      'unknown'                 ],
                            ['unshift_group',      'prevent'                 ],
                            ['unshift_group',      'prevent'                 ],
                            ['unshift_group',      'unshift_data'            ],
                            ['unshift_group',      'prevent'                 ],
                            ['unshift_group',      ''                        ],
                            ['unshift_group',      ''                        ],
                            ['unshift_group',      'prevent'                 ],
                            [,''],
                            [,''],
                          ]                            
to see the pipeline functionality 
<!-- turn unpipe_pause to prevent to see it work once -->
	

module.exports = [
                            ['pipe_group',      'stream_finished'         ],                            
                            ['pipe_group',      'unknown'                 ],
                            ['pipe_group',      'prevent'                 ],
                            ['pipe_group',      'stream_finished'         ],
                            ['pipe_group',      'pipeline'                ],
                            ['pipe_group',      'unpipe_pause'            ],
                            ['pipe_group',      ''                        ],
                            ['pipe_group',      ''                        ],
                            ['pipe_group',      'prevent'                 ],
                            [,''],
                            [,''],
                          ]
                          



to see the cork uncork mechanism

const node_mode_threads = [
                            ['cork_mechanism_group',      'stream_finished'         ],                            
                            ['cork_mechanism_group',      'unknown'                 ],
                            ['cork_mechanism_group',      'safe'                    ],
                            ['cork_mechanism_group',      'stream_finished'         ],
                            ['cork_mechanism_group',      'cork_mechanism'          ],
                            ['cork_mechanism_group',      'prevent'                 ],
                            [''                    ,      ''                        ],
                            [''                    ,      ''                        ],
                            ['cork_mechanism_group',      'prevent'                 ],
                            [,''],
                            [,''],
                          ]

to pipe stdout to  a file 

module.exports   =  [
                            ['pipe_group',      'stream_finished'              ],                            
                            ['pipe_group',      'unknown'                      ],
                            ['pipe_group',      'safe'                         ],
                            ['pipe_group',      'stream_finished'              ],
                            ['pipe_group',      'process_stdout_pipe_unknown'  ],
                            ['pipe_group',      'prevent'                      ],
                            ['pipe_group',      ''                             ],
                            ['pipe_group',      ''                             ],
                            ['pipe_group',      'prevent'                      ],
                            [,''],
                            [,''],
                          ] 