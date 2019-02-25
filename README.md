using node_mode and async_listener bring a new way of coding that makes it powerful smaller and developer-ergonomic


# Node Mode

Node mode is an implenation that I made think of it as an upgrade to the function, where it takes threads as arguments (technically the threads are in a function), but in concept it takes threads

Node mode is an event emitter, which holds a series of developer created events when emitted execute the thread at that points

very useful if you need to have code run in a different version or different compatibility but just want one copy

* if you see n_m_E in this README.md it refers to Node Mode Emitter

## So instead of 
 
code.js for js 
code.py for python
code.cpp for C++
and so on ...

or
code.dev for development
code.prod for production
code.exp for experimental
...


you have 
code.js for [all programming lanaguges] [all OS] 

in essence the API uses a list to completely change the project purpose of the code 
	
## Sounds like Docker?

This is in sense the final form of kubernetes advancement
Of my understanding of Docker this is allows the service not only to be in the process itself but lay dormant in the process saving massive overhead docker was even built to save


## Choice-Threaded
this seamless innovation that considers the low level operation of the compiler is donned the name CHOICE-THREADED programming with each threads called a choice threads 

with each threads called choice threads, the 1st party developer chooses which threads to run which completlely changes how the API performs it project purpose. Implement Env queries and now the API has a choice on how to do things

* but this is javascript only the name node mode, work will be implemented for all languages but for now let see how you can boost javascript


## The Node Mode Object

a set of parameters that the node_mode module uses to provide a node_mode_Emitter
use the object parameter because there are many values and the module preferrs this

### Paramaters
```
n_m 
* also know as n_m_obj will be discuess lated in the README.md meant to prevent confusion
codes
node_mode_needs 
node_mode_async 
node_mode_args 
custom_dev
node_mode_metadata
```

### codes
#### template
```
codes:{
	'no_const_fn':
	function(){        
	},
	'const_fn_new_help':
	function(){
	},  
	'use_class_stable':
	function(){
	},
	'use_setInterval_unstable':
	function(){
	}
      }

codes:[      
	['use_raw',
	function(){        
	}],
	['use_props',
	function(){
	}],  
	['just_require',
	function(){                                                           
	}], 
	['add_listener',
	function(){                                                                                                                                                                                       
	}],  
	['no_metadata',
	function(){                                         

	}]
      ]   
```      
the fundamental functionality of node mode these are the actual choice threads
developerers use the following parameters to modify how node mode executes the selected choice thread   

IT IS HIGHLY RECOMMEDED to use the codes as an object becuase on async execution it does not call a wrap function to async execute the desired function

* this was due to a mapping problem however both functionalites are supported  

### node_mode_async
#### template
```
node_mode_async: 'async' // pos. values 'async' or 'sync',
        {
                          node_mode_async:{
                                  'no_const_fn'      :'sync',
                                  'const_fn_new_help':'sync',
                                  'const_fn_unsafe'  :'sync',
                                  'const_fn_safe'    :'sync',
                                  'C'                :'async',
                                  'D'                :'async'
                              }
        }
```	
helps the module determine if the choice thread should be called asynchrounously or synchrounously

asynchrounously performace is done by wrapping the thread in in a setImmediate(() =>{})
evidently since there is process.nextTick and possibly low level runtime options there is current work to provide more options here for setInterval, setTimeout ...

its best to use this as an object, it the 4th parameter in the call to make an n_m_E

###  node_mode_metadata
#### template
```
a customized n_m_E refer to parameter template
```



allows for a custom node_mode_Emitter
useful when defaults perform things one way or when a 3rd party API the uses Node Mode that has defaults
            async or sync
            use file x or file y
            connect to MongoDB or PostgresSQL (but this should be propsed to the team who made the node_mode_Emitter however I can )
	    
* SECURITY: there are implemetations to further understand how to properly protect explotation of the n_m_E 
which will be powerful however if this is not to be given any opportunity use the node_mode.js.secure file

if a parameter argument is missing then the node_mode_Emiiter will keep its default value for the parameter name 

it becomes a very powerful customization  tool if you understand the internals of the specific n_m_E

refer to the team who made the API that uses node_mode_Emitter on how to properly name the items inside the metadata so if there
         are several n_m_E (node_mode_Emiitters) in the API they can be routed properly




### node_mode_args 
#### template
```
var n_m_E = {

node_mode_args: {
	appender:'emitter',
	pg_string:'postgres://postgres ...",
	pg_connect: require(   'pg-promise'   )
},
...
}
* then in codes
codes:{
	'sample':
	function(){
		if(   n_m_E.node_mode_args.appender == 'emitter'   ){
			var db = pg_connect(   pg_string   )
			...
		}
		...
	},
      }
```

this is when choice threads receieve arguments such as connecting to a certain database or choosing files
a template will be given along as full support at a future time


### custom_dev  
#### template
```
{gen_ans:'no'} /default no  values: total ,no, negotiate, token,
            {
                gen_ans:'negotiate',
                spec_ans:{
                            codes:           '4'
                            node_mode_needs: '6'
                            node_mode_async: '2'
                            node_mode_args : '1'
                            custom_dev     : '3'
                            n_m            : '0'
                         },
                 token: undefined
            },
* do not use below there will 90% likely be no support for this	    
            {
                gen_ans:'negotiate',
                spec_ans:{
                            codes:           'prevent_remove'
                            node_mode_needs: 'prevent_append'
                            node_mode_async: 'allow_append'
                            node_mode_args : 'allow_remove'
                            custom_dev     : 'totalbles'
                            n_m            : 'not_allowable'
                         },
                 token: undefined
            }   
```
perform object negotiation with the parameters of the n_m E
implememt custom_dev of there is a permsssion set from node_mode emitter        
	
#### gen_ans
this a general response of what the third party developer user is allowed to change in the object parameters  
    no means the values cannot be chaged at all
    total means an unconditional full replacement of the specifc paramenters if there are not undefined in node_mode_metadata
    negoitate, performs negotiation  
    token, an 0auth of a custom implement token is needed to access, but spec_ans must be even set to make the n_m_E industry 	grade secure

#### spec_ans * (non-implemented as of yet)
when gen_ans is negotiate or token negotiation is performed
a octal system similar to Linux file permissions which allows for a combination of addition, removal  modification 
```
1 add only
2 remove only
4 modify only
```
for experimental
```
    values are 
	prevent_remove: cannot remove specifc indexes from the parameter
	prevent_append: cannot add specifc indexes from the parameter
	allow_append  : only remove specifc indexes from the parameter
	allow_remove  : only add specifc indexes from the parameter
	totalbles     : written  for attackers  
	not_allowable : rejects any propsed changes    
```	

#### token 
refer to gen answer


	
### Parameter 
* it is recommeded to use the object parameter version, for the future support of seamless additional arguments
#### template 
```
    sample object parameter version 
    const _n_m =      node_mode({
                node_mode_args:{
			       	   the:'paramters',
				   for:'choice',
				   threads:'go',
				   here: 'OK'	
			       },    
                          n_m:p_Ev_C_n_m_t_r['p_Ev_C_listen_handle_n_m'],
                        codes:{
                                'no_const_fn':
                                function(){        
                                },
                                'const_fn_new_help':
                                function(){
                                },  
                                'use_class_stable':
                                function(){
                                },
                                'use_setInterval_unstable':
                                function(){

                              },
              node_mode_async:{
                                  'no_const_fn'      :'sync',
                                  'const_fn_new_help':'sync',
                                  'const_fn_unsafe'  :'sync',
                                  'const_fn_safe'    :'sync',
                                  'C'                :'async',
                                  'D'                :'async'
                              },
          node_mode_metadata: this // the developer gets to modify the obj according to custom_dev	
	  	  custom_dev:{
		  		gen_ans:'no'
			     }
                        }) 

    non object solution
    * not here there are only two parameters, calling for a n_m_E was quickly deprecated and this is left for backwards compatablity
    const _n_m = node_mode(n_m_t_r['_n_m'],[[      
                                  'A',
                                  function(){        
                                        //version or different action A                       
                                  }],
                                  ['B',
                                  function(){
                                        //version or different action B
                                  }],  
                                  ['C',
                                  function(){
                                      //version or different action C                                              
                                  }],                                                                                                          
                            ]) 
                     _n_m.emit(A)
                     //CODE
                     _n_m.emit(B)
                     //CODE
                    () => fn(); _n_m.emit(C) 
```
how the developer creates a n_m_E, the before are the parameters passed to the API

    
### n_m
this represents the organizational structure of the n_m_E it is responsible for creating a gubneratorial infrastucture for the choice-threads so the developer can understand the code previously written as the API gets very extensive 
In production it wants an n_m_group array

### n_m_group
#### template
```
	n_m_group:[
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
```
an extension of n_m_obj and n_m this puts a name to a mode your code is in so when you emit
node_mode.emit('n_m_group','real_listener')
its just like emitting
node_mode.emit('real_listener')

it is an array and belongs in the first arg of the node_mode parameter

choice threads that make your software are tied to this simple array, and with grouping concept here
it helps erase confusion when the API mode needs to be changed

if you emit a n_m_group and an event that is is not part of the group array and the API is run in strict mode an error is thrown
this is to prevent you from overlook and turing your code to a dangerous mode. If strict mode is disabled this will come up in the process.env.OUTPUT_PATH

make sure that the real listener does not have the same name as the group name node mode is an emitter, you would have to handle that your self in the  custom listeners



## node_mode_threads
#### template
```

		const node_mode_threads = [
		                            ['cork_mechanism_group',      'stream_finished'         ],                            
		                            ['cork_mechanism_group',      'unknown'                 ],
		                            ['cork_mechanism_group',      'safe'                    ],
		                            ['cork_mechanism_group',      'stream_finished'         ],
		                            ['cork_mechanism_group',      'cork_mechanism'          ],
		                            ['cork_mechanism_group'                    ,      ''                        ],
		                            ['cork_mechanism_group'                    ,      ''                        ],
		                            ['cork_mechanism_group',      'prevent'                 ],
		                            ['',''],
		                            ['',''],
		                          ]

		access like so 
		node_mode_emitter.on(    node_mode_threads[group][0], node_mode_threads[event][1],...)
```

an organized way to control your threads, making it easy to change code version but placing the arguments in emiiter can work also

'' - means an emit made those irrelevant leave as is 

# IF THERE IS A MAJOR API PROBLEM THIS IS THE MOST LIKELY REASON
make sure any node_mode_emitters added to your code update in the list!!!!!!!!!!!!!!!	
work will be provided in the future for the API the seriously warn the developer when the list is not updated

also make sure that every real listnerer is actually a function or the internal API will start to break your software
it sees an async execution it has to handle but there is no function, so this might be an error that it has to handle 


useful when you want the n_m_E at that point in the API to do nothing

### node_mode_threads_files
#### template
```
        const node_mode_threads_files = {
                                "template.js":[
                                    ['test',      'use_raw'         ],                            
                                  ] 
                            }         

        module.exports.node_mode_threads = function(   dev_obj   ){
                                       return node_mode_threads_files[dev_obj.calling_file] 
                                   }        
```		
if you have an API you can turn it to a function that is aware there are several files using it and it can return the respective threads

### n_m_t_registry
#### template
```
        module.exports.n_m_t_registry = {
                                            node_mode_emitter_name_0: n_m_group_0 ( refer to above   ),
                                            node_mode_emitter_name_1: n_m_group_1 ( refer to above   ),
                                            node_mode_emitter_name_2: n_m_group_2 ( refer to above   )
                                        } 
```					
its a localized place where all thread groups for every node_mode emitter in an API, exists, this simple implementation is optional and can be used to make your code much cleaner 

           
files: node_mode.js,    node_mode.js.secure,       node_mode_threads_README_sample.js                                       

replace const node_mode_threads to see actions
dont use setTimeout or setInterval with a node_mode emitter
current state unpipe_pause






			  
.. any name options
Nobulus
