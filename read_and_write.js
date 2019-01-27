const n_API = require(process.env.HOME+ "/Required/node_API_header.js").n_API_init({
  "fs":true,
  // "p_uE":true,
  "node_mode":true,
  "n_m_t":true,
  "n_m_t_r":true,
  "node_mode_threads":true,
  "circular_replacer":true,
  "required_dir":true,  
  "required_local_dir":true,
  "read_monitor":true,
  "async_listener":true,
  "readable_e_r_unshift":true,
  "stream_finished":true,
  "pipeline":true,
  "drain":true,
  "cork_and_uncork":true,
  "r_p":true,
  "c_u":true,
  "d_rn":true,
  "s_f":true,
  "a_l":true,
  "p_l":true  
},
{
  location_dir:__dirname
});

const fs                       = n_API.API_n_b_p.fs                      
const async_listener           = n_API.API_n_c.async_listener                    
const a_l                      = n_API.API_n_c.a_l                    
const circular_replacer        = n_API.API_n_c.circular_replacer                    
const node_mode                = n_API.API_n_c.API_node_mode.node_mode                    
const node_mode_threads        = n_API.API_n_c.API_node_mode.n_m_t                    
const read_monitor             = n_API.API_n_c.API_stream.read_monitor                    
const readable_e_r_unshift     = n_API.API_n_c.API_stream.readable_e_r_unshift                                                         
const r_p                      = n_API.API_n_c.API_stream.r_p                    
const c_u                      = n_API.API_n_c.API_stream.c_u                    
const d_rn                     = n_API.API_n_c.API_stream.d_rn                    
const s_f                      = n_API.API_n_c.API_stream.s_f                    
const p_l                      = n_API.API_n_c.API_stream.p_l                    
// const fs = require('fs')
// const events = require('events')
// const path = require('path');
// const assert = require('assert')
// const read_monitor = require(required_dir + '/read_monitor.js')
// const async_listener = require(required_dir +'/async_listener.js')
// const node_mode = require(required_dir +'/node_mode.js')
// const node_mode_threads = require(required_dir +'/node_mode_threads.js')
// const circular_replacer = require(required_dir +'/circular_replacer.js')
// const readable_e_r_unshift = require(required_dir +'/r_e_r_unshift.js')
// const stream_finished = require(required_dir + '/stream_finished.js')
// const pipeline = require(required_dir + '/pipeline.js')
// const drain = require(required_dir + '/drain.js')
// const cork_and_uncork = require(required_dir + '/cork_and_uncork.js')
// const r_p = require(required_dir + '/readable_pause.js')
// const c_u = cork_and_uncork()
// const d_rn = drain()
// const s_f = stream_finished()
// const a_l = async_listener()
// const p_l = pipeline()
const r_file = 'r.txt'
const r_mode = 'r'
const w_file = "w.txt"
const w_mode = 'w'
var ww_fd;
var rr_fd;
var open_items = []
var write_stream_0
var r_response = ''; // for the writable if it needs to be held here
var w_script_info =[];     //important information developer needs in a file and is using a writeStream to do it 
var piping = true
var unpiped_stream; // helps the ReadStream pipe and unpipe the Writestream, this eventually sets the writeStream
var r_monitor = null 
var r_interval = 40000
var r_counter  = 0
var dynamic_declare_i = function(){
  setInterval(()=>{


      if(unpiped_stream != undefined){


          const r_e_r_unshift =  readable_e_r_unshift(w_stream)
          clearInterval(dynamic_declare_i)


      }


  },1)
}
process.on('uncaughtException',(err)=>{    
    console.log(err)
    process.on('exit',(code) =>{
        console.log(' an error occured but I  closed all files and streams',code)    
        Error.stack != undefined ? console.log(Error.stack) : console.log('trying to show you the error')
    })    
    for (var open_items_i = open_items.length - 1; open_items_i >= 0; open_items_i--) {
        // console.log(open_items[open_items_i][1])


        if(   open_items[open_items_i][0] == 'fd'   ){

        
            close_file(    open_items[open_items_i][1],'file',undefined,true   )              


        }


        else if(   open_items[open_items_i][0] == 'write_stream'   ){


            open_items[open_items_i][1].emit('process_uncaught')           
                  

        }


        else if(   open_items[open_items_i][0] == 'read_stream'   ){


            open_items[open_items_i][1].emit('process_uncaught')            
          

        }      

 
    }
    process.exit() 
})


// experimental, provides new object when needed items come into existence

//implement use of sync and datasync to recover files
// your modules are functions not async but i guess this is okay for now
// make sure the error event triggers the all stream error events do this through pipe line?


const toss_data = a_l(function(){
  // console.log(arguments)
  console.log('tossing data') 
})

const reading_file = a_l(function(){
        w_script_info[0] =   JSON.stringify(arguments,circular_replacer())
        // JSON.stringify(arguments,circular_replacer())
        console.log('arg amount below')
        // console.log(arguments)
        console.log(arguments.length)
        console.log(arguments[0])
        console.log(arguments[1].readableLength)    
        console.log(arguments[1].readableBuffer)    
},[1,2,3,4,5])

const r_e_r = a_l(function(){
          let r_e_r_chunk;
          var r_e_r_size = 1000
          var readable = arguments[1]  
          while (null !== (chunk = readable.read(r_e_r_size))) {
              console.log(`Received ${chunk.length} bytes of data.\n this is from the 'readable' event - read() implementation`);
          }
})

const r_f_unshift = a_l(function(){
    console.log(arguments[1].bytesRead)


    if(arguments[0][0].toString().indexOf("David Tallon") != -1){


        console.log(arguments[0][0].toString())
        var r_f_toss_talon = arguments[0][0].toString().split('David Tallon').join('Adam Lampls')
        const r_f_buf = Buffer.from(   r_f_toss_talon, 'utf8'   );
        arguments[1].off(   'data', r_f_unshift   );
        arguments[1].pause()
        if (   r_f_buf.length   ){
          console.log(   r_f_buf.length   )
          arguments[1].unshift(   r_f_buf   );          
        // now the body of the message can be read from the stream.          
        }
        arguments[1].pipe(unpiped_stream)        


    }


    else if (arguments[0][0].toString().indexOf('David Tallon') == -1 && arguments[0][0].toString().indexOf('Adam Lampls') == -1){

        
        if(   unpiped_stream.write(arguments[0][0].toString())   ){

            console.log(unpiped_stream.write(arguments[0][0].toString()))
            var r_f_break = false
            arguments[1].off(   'data', r_f_unshift   );
            arguments[1].pause()
            console.log(   arguments[1].isPaused(),arguments[1].readableFlowing   )
            unpiped_stream.once('drain',a_l(   function(){  console.log('drained'); r_f_break = true}  )   )
            while(   true   ){
                console.log(   'draining not cpu hog'   )


                if(   r_f_break   ){
                    

                    console.log(   'break'   )
                    arguments[1].on(   'data', r_f_unshift   );
                    arguments[1].resume()
                    break;


                }


            }
            


        }
        // needs to listen for false
        // if you want to keep the first part of the code
        // place in an if staement so you want find david tall
        // inthe write file and keep the change out because before the call 
        // this executes one more time

    }    


    else {

      // still reading the header.
      console.log('looking for that string to unshift')


    }     

    
})


async function close_file(c_fd,c_name =undefined,r_w = undefined,uncaught = false){

    // console.log(r_w)    


    if(   r_monitor != null   ){


      clearInterval(r_monitor)
      r_monitor = null
      console.log('interval cleared')


    }


    if(   uncaught   ){


        try{
            fs.closeSync(   c_fd   )
            console.log('file closed on error ',c_fd)
        }
        catch(   c_err   ){
          console.log( c_fd,c_err)
          console.log('close me or someone else closed me check the errors, you might see a lot of me ')            
        }


    }


    fs.close(c_fd,(c_err) =>{


        if(c_err){


          console.log(r_w ,c_fd,c_err)
          console.log('close me or someone else closed me check the errors, you should see a lot of me ')

        }


        else if(c_name != undefined){


          console.log(r_w,c_name)
          console.log('if itclosed the file '+ c_name +' is closed now')



        }


        else{


          console.log(r_w ,c_fd,c_err)
          console.log('item closed')

        }


    })  


}

const stream_ready = a_l(function(){
    console.log(arguments[1])
    console.log('writable stream intializaed')
})

const B = function(err){
            setImmediate(() => {               
                console.log('error thrown in writeStream close everything ',err)                 
                this.end()
                // console.log(this)
                close_file(rr_fd,'read_file',this)
                close_file(ww_fd,'write_file',this)              
            });  
}



const C = function(err){
            setImmediate(() => {               
                console.log('error thrown in readStream close everything ',err) 
                this.resume() //check to see if there are bytes in the buffer                
                this.close()
                this.push(null);
                this.read(0);                
                // console.log(this)      
                close_file(rr_fd,'read_file',this)          
                close_file(ww_fd,'write_file',this)              
            });  
}

const write_stream_uncaught_handler = function(err){     
                console.log('error thrown in writeStream close everything ',err) 
                this.end()
                // console.log(this)              
                close_file(ww_fd,'write_file',this,true)                            
}



const read_stream_uncaught_handler = function(err){                           
                console.log('error thrown in readStream close everything ',err) 
                this.resume() //check to see if there are bytes in the buffer
                this.close()
                this.push(null);
                this.read(0);                
                // console.log(this)            
                close_file(rr_fd,'read_file',this)    
                close_file(ww_fd,'write_file',this,true)                            
}




fs.open(r_file,r_mode,(r_err,r_fd) =>{


  if(r_err){


    throw(r_err)


  }


  else{

    rr_fd = r_fd;
    open_items.push(['fd',r_fd])
    console.log('read file opened',r_fd)
    fs.open(w_file,w_mode,(w_err,w_fd) =>{


      if(w_err){


          close_file(rr_fd)       


      }


      else{


        ww_fd = w_fd
        open_items.push(['fd',w_fd])
        console.log('write file opened',w_fd)
        const w_stream = fs.createWriteStream(w_file,{                  
              start:0,
              fd:ww_fd,
              autoClose:false,                               
        })
        w_stream.on('process_uncaught',write_stream_uncaught_handler)    
        w_stream.on('error', B);        
        w_stream.on('finish',()=>{
          setImmediate(() => {
              console.log('All writes are now complete. writestream closed');
              close_file(ww_fd,'write_file',w_file)

          });
        })     
        w_stream.on('pipe', (src) => {
          console.error('something is piping into the writer');
          // assert.equal(src, r_stream);
        });
        w_stream.on('unpipe', (src) => {
          console.error('Something has stopped piping into the writer.');
          // assert.equal(src, r_stream);
        });                          
        console.log('writable stream intializaed')    
        open_items.push(['write_stream',w_stream])      
        const r_stream = fs.createReadStream(r_file,{
          start:0,
          // end:2237,
          fd:rr_fd, 
          autoClose:false,           
        })
        r_stream.on('process_uncaught',read_stream_uncaught_handler)
        const r_stream_data_event_n_m = [['cork_mechanism_group',
                                          ['stream_finished','safe',]
                                        ],
                                        ['drain_group',
                                          ['stream_finished','safe','attach_you','to','my','emitter']
                                        ],
                                        ['read_group',
                                          ['stream_finished','safe','implement','to','my','emitter']
                                        ],    
                                        ['pause_group',
                                          ['stream_finished','safe']
                                        ],
                                        ['unshift_group',
                                          ['stream_finished','safe','prevent']
                                        ],                                                                                                                       
                                        ['pipe_group',
                                          ['stream_finished','prevent','attach_you','to','my','emitter']
                                        ]]         
        const r_stream_data_event =node_mode(r_stream_data_event_n_m,[[
                            'safe',
                            function(){
                             r_stream.on('data',toss_data)
                            }],
                            ['unknown',
                            function(){
                             r_stream.on('data',reading_file)
                            }],
                            ['implement',
                            function(){
                             r_stream.on('readable',r_e_r)
                            }],
                            ['monitor',
                            function(){
                             r_monitor = read_monitor(r_stream,r_counter,r_interval)
                            }],
                            ['stream_finished',
                            function(){
                              s_f(r_stream)
                            }]                                                                                                          
                        ])
        const w_stream_last_n_m = [['cork_mechanism_group',
                                    ['stream_finished','unknown',]
                                  ],
                                  ['drain_group',
                                    ['stream_finished','prevent']
                                  ], 
                                  ['read_group',
                                    ['stream_finished','prevent']
                                  ],
                                  ['pause_group',
                                    ['stream_finished','prevent','unknown']
                                  ], 
                                  ['unshift_group',
                                    ['stream_finished','prevent','unknown']
                                  ],                                                                                                      
                                  ['pipe_group',
                                    ['stream_finished','unknown','prevent','to','my','emitter']
                                  ]]          
        const w_stream_last =node_mode(w_stream_last_n_m,[[
                            'safe',
                            function(){
                              // console.log('do i exist here',w_script_info[0])
                              w_stream.write('gunna write some info')
                              console.log(w_stream_last._events.safe.toString())
                              console.log(w_script_info[0]) 
                              w_stream.end(w_script_info[0])
                            }],
                            ['unknown',
                            function(){
                              w_stream.end()
                            }],
                            ['stream_finished',
                            function(){
                              s_f(w_stream)
                            }]               
                        ])    
        w_stream_last.emit(   node_mode_threads[0][0],node_mode_threads[0][1]   )              
        r_stream.on('error', C);
        r_stream.on('end',()=>{
          setImmediate(() => {
            console.log('nothing more to read closing  readstream')     
            console.log(typeof(r_stream),typeof(w_stream))                    
            w_stream_last.emit(   node_mode_threads[1][0],node_mode_threads[1][1]   )
            r_stream.resume(); //this helps clear the buffer                                            
            close_file(rr_fd,'read_file',r_file)
          })
        })      
        r_stream.on('close',()=>{
          setImmediate(() =>{
            console.log("looks like the fd was closed by the stream ")
          })
        })
        r_stream_data_event.emit(   node_mode_threads[2][0],node_mode_threads[2][1]   )   
        r_stream_data_event.emit(   node_mode_threads[3][0],node_mode_threads[3][1]   )                       
        console.log('readable stream intializaed')
        open_items.push(['read_stream',r_stream])
        const pipe_emitter_n_m =  [['cork_mechanism_group',
                                    ['cork_mechanism','prevent','attach_you','to','my','emitter']
                                  ],
                                  ['drain_group',
                                    ['drain','prevent','attach_you','to','my','emitter']
                                  ], 
                                  ['read_group',
                                    ['prevent','attach_you','to','my','emitter']
                                  ],   
                                  ['pause_group',
                                    ['prevent','pause','to','my','emitter']
                                  ], 
                                  ['unshift_group',
                                    ['prevent','unshift_readable','unshift_data','my','emitter']
                                  ],                                                                                                    
                                  ['pipe_group',
                                    ['unpipe_pause','prevent','pipeline','to','my','emitter']
                                  ]]                                
        const pipe_emitter =node_mode(pipe_emitter_n_m,[[      
                        'unpipe_pause',
                        function(){                     
                            unpiped_stream = r_stream.pipe(w_stream,{end:false})                                
                        }],
                        ['pause',
                        function(){
                            r_p(r_stream)
                        }],                        
                        ['unshift_data',
                        function(){
                            unpiped_stream = w_stream
                            r_stream.on('data',r_f_unshift)
                            // dont use not compleleted
                        }],                            
                        ['unshift_readable',
                        function(){
                            unpiped_stream = w_stream
                            const r_e_r_unshift =  readable_e_r_unshift(w_stream)                            
                            r_stream.on('readable',r_e_r_unshift)
                        }],
                        ['unshift_readable_danger',
                        function(){
                            unpiped_stream = w_stream
                            dynamic_declare_i()
                            r_stream.on('readable',r_e_r_unshift)
                        }],
                        ['pipeline',
                        function(){
                            p_l(r_stream,w_stream)
                        }],
                        ['drain',
                        function(){
                            d_rn(w_stream,"copied a bunch of times")
                        }],      
                        ['cork_mechanism',
                        function(){
                            c_u(w_stream,"getting corked")
                        }],                                          
                  ])                                     
        pipe_emitter.emit(   node_mode_threads[4][0],node_mode_threads[4][1]   ) 
        pipe_emitter.emit(   node_mode_threads[5][0],node_mode_threads[5][1]   )      
        const piping_action_n_m = [['cork_mechanism_group',
                                    ['prevent']
                                  ],
                                  ['drain_group',
                                    ['prevent','more_mechanism','attach_you','to','my','emitter']
                                  ], 
                                  ['read_group',
                                    ['prevent','more_mechanism','attach_you','to','my','emitter']
                                  ],
                                  ['pause_group',
                                    ['prevent','more_mechanism','attach_you','to','my','emitter']
                                  ], 
                                  ['unshift_group',
                                    ['prevent','more_mechanism','attach_you','to','my','emitter']
                                  ],                                                                                                       
                                  ['pipe_group',
                                    ['safe','more_mechanism','prevent','to','my','emitter']
                                  ]]             
        const piping_action = node_mode(piping_action_n_m,[[
                        'safe',
                        function(){
                          if(r_stream.bytesRead > 100  && piping){
                            console.log(r_stream.bytesRead > 100  && piping,r_stream.bytesRead)
                            const r_stream_dest_next_n_m =  [['cork_mechanism_group',
                                                              ['']
                                                            ],
                                                            ['drain_group',
                                                              ['cork_mechanism','more_mechanism','attach_you','to','my','emitter']
                                                            ],
                                                            ['read_group',
                                                              ['','more_mechanism','attach_you','to','my','emitter']
                                                            ], 
                                                            ['pause_group',
                                                              ['','more_mechanism','attach_you','to','my','emitter']
                                                            ],
                                                            ['unshift_group',
                                                              ['','more_mechanism','attach_you','to','my','emitter']
                                                            ],                                                                                                                                                                                     
                                                            ['pipe_group',
                                                              ['unpipe_pause','unpipe_data','unpipe_data_danger','to','my','emitter']
                                                            ]]                             
                            const r_stream_dest_next = node_mode(r_stream_dest_next_n_m,[[
                                                'unpipe_pause',
                                                function(){
                                                  r_stream.unpipe(unpiped_stream)
                                                  r_stream.pause()
                                                }],
                                                ['unpipe_data',
                                                function(){
                                                  r_stream.on('data',toss_data)                                 
                                                  r_stream.unpipe(unpiped_stream)
                                                }],
                                                ['unpipe_data_danger',
                                                function(){
                                                  console.log(r_stream._events.data.toString())
                                                  r_stream_data_event.emit('safe')  
                                                  console.log("r_stream.on('data',toss_data)")
                                                  r_stream.unpipe(unpiped_stream)                                 
                                                }]
                                          ]) 
                            r_stream_dest_next.emit(   node_mode_threads[6][0],node_mode_threads[6][1]   )            
                            // console.log(r_stream._events.data)
                               // what happens that node_mode  is specific where, when node mode puts the functions made by 
                               // async_listener and attaches it to the ee, the technicality of ee says that it takes a function 
                               // it does not call it that is why you can emit an event of an node_mode from another node_mode,
                               // async_listener executes on the .emit not the .on in mode mode so the argument it 
                               // needed from the other emitter is lostt 
                            console.log("is the stream flowing",r_stream.readableFlowing)
                            console.log('I unpiped and paused the stream hopefully on resume I get my data back')
                            setTimeout(function(){
                              console.log('did the readstream stop with me',r_stream.bytesRead)
                              console.log('are we getting a buffer clog',r_stream.readableLength,r_stream.readableHighWaterMark)    
                              const r_stream_dest_orig_n_m =  [['cork_mechanism_group',
                                                                ['']
                                                              ],
                                                              ['drain_group',
                                                                ['cork_mechanism','more_mechanism','attach_you','to','my','emitter']
                                                              ],
                                                              ['read_group',
                                                                ['','more_mechanism','attach_you','to','my','emitter']
                                                              ], 
                                                              ['pause_group',
                                                                ['','more_mechanism','attach_you','to','my','emitter']
                                                              ],  
                                                              ['unshift_group',
                                                                ['','more_mechanism','attach_you','to','my','emitter']
                                                              ],                                                                                                                                                                                          
                                                              ['pipe_group',
                                                                ['unpipe_pause','unpipe_data','attach_you','to','my','emitter']
                                                              ]]                                          
                              const r_stream_dest_orig = node_mode(r_stream_dest_orig_n_m,[[
                                                  'unpipe_pause',
                                                  function(){
                                                    r_stream.pipe(unpiped_stream,{end:false})
                                                    r_stream.resume()
                                                  }],
                                                  ['unpipe_data',
                                                  function(){
                                                    r_stream.off('data',toss_data)
                                                    r_stream.pipe(unpiped_stream,{end:false})
                                                  }]
                                            ])              
                              r_stream_dest_orig.emit(   node_mode_threads[7][0],node_mode_threads[7][1]   )  
                            },2000) 
                            piping = false
                          } 
                        }          
                  ]])
        setTimeout(() =>{
            piping_action.emit(   node_mode_threads[8][0],node_mode_threads[8][1]    )
        },3)
      }


    })


  }

})

console.log('mem usage',process.memoryUsage())