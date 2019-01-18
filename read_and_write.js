const fs = require('fs')
const events = require('events')
const path = require('path');
// const assert = require('assert')
const required_dir = path.join(process.env.HOME, 'My_Computer/NVM/NODE/MINI_PROJECTS/PIPE_STREAM')
const read_monitor = require(required_dir + '/read_monitor.js')
const async_listener = require(required_dir +'/async_listener.js')
const node_mode = require(required_dir +'/node_mode.js')
const circular_replacer = require(required_dir +'/circular_replacer.js')
const readable_e_r_unshift = require(required_dir +'/r_e_r_unshift.js')
const stream_finished = require(required_dir + '/stream_finished.js')
const s_f = stream_finished()
const a_l = async_listener()
const r_file = 'r.txt'
const r_mode = 'r'
const w_file = "w.txt"
const w_mode = 'w'
var ww_fd;
var rr_fd;
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
// experimental, provides new object when needed items come into existence

//implement use of sync and datasync to recover files
//test the ready event for yourr listernrs
// your modules are functions not async but i guess this is okay for now


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


    }

    
})


async function close_file(c_fd,c_name =undefined,r_w = undefined){

    console.log(r_w)


    if(   r_monitor != null   ){


      clearInterval(r_monitor)
      r_monitor = null
      console.log('interval cleared')


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


const B = function(err){
            setImmediate(() => {               
                console.log('error thrown in writeStream close everything ',err) 
                this.emit('error')
                this.end()
                console.log(this)
                close_file(rr_fd,'read_file',this)
                close_file(ww_fd,'write_file',this)              
            });  
}

const C = function(err){
            setImmediate(() => {               
                console.log('error thrown in readStream close everything ',err) 
                this.resume() //check to see if there are bytes in the buffer
                this.emit('error')
                this.close()
                this.push(null);
                this.read(0);                
                console.log(this)
                close_file(rr_fd,'read_file',this)
                close_file(ww_fd,'write_file',this)              
            });  
}


fs.open(r_file,r_mode,(r_err,r_fd) =>{


  if(r_err){


    throw(r_err)


  }


  else{

    rr_fd = r_fd;
    console.log('read file opened')
    fs.open(w_file,w_mode,(w_err,w_fd) =>{


      if(w_err){


        close_file(rr_fd)       


      }


      else{


        ww_fd = w_fd
        console.log('write file opened')
            const w_stream = fs.createWriteStream(w_file,{                  
                  start:0,
                  fd:ww_fd,
                  autoClose:false                 
            })    
            w_stream.setDefaultEncoding('utf8')
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
        const r_stream = fs.createReadStream(r_file,{
          start:0,
          // end:2237,
          fd:rr_fd, 
          autoClose:false 
        })
        const r_stream_data_event =node_mode('safe',[[
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
        const w_stream_last =node_mode('safe',[[
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
        w_stream_last.emit('stream_finished')              
        r_stream.on('error', C);
        r_stream.on('end',()=>{
          setImmediate(() => {
            console.log('nothing more to read closing  readstream')                         
            w_stream_last.emit('unknown')
            r_stream.resume(); //this helps clear the buffer                                            
            close_file(rr_fd,'read_file',r_file)
          })
        })      
        r_stream.on('close',()=>{
          setImmediate(() =>{
            console.log("looks like the fd was closed by the stream ")
          })
        })
        r_stream_data_event.emit('prevent')   
        r_stream_data_event.emit('stream_finished')                       
        console.log('readable stream intializaed')
        const pipe_emitter =node_mode('prevent',[[
                        'safe',
                        function(){                     
                            unpiped_stream = r_stream.pipe(w_stream,{end:false})                                
                        }],
                        ['unshift_data',
                        function(){
                            r_stream.on('data',r_f_unshift)
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
                        }]                   
                  ])                      
        pipe_emitter.emit('unshift_readable')   
        const piping_action = node_mode('prevent',[[
                        'safe',
                        function(){
                          if(r_stream.bytesRead > 100  && piping){
                            console.log(r_stream.bytesRead > 100  && piping,r_stream.bytesRead)
                            const r_stream_dest_next = node_mode('safe',[
                                                function(){
                                                  r_stream.unpipe(unpiped_stream)
                                                  r_stream.pause()
                                                },
                                                function(){
                                                  r_stream.on('data',toss_data)                                 
                                                  r_stream.unpipe(unpiped_stream)
                                                }
                                                ,function(){
                                                  console.log(r_stream._events.data.toString())
                                                  r_stream_data_event.emit('safe')  
                                                  console.log("r_stream.on('data',toss_data)")
                                                  r_stream.unpipe(unpiped_stream)                                 
                                                }
                                          ]) 
                            r_stream_dest_next.emit('prevent')            
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
                              const r_stream_dest_orig = node_mode('safe',[
                                                  function(){
                                                    r_stream.pipe(unpiped_stream,{end:false})
                                                    r_stream.resume()
                                                  },
                                                  function(){
                                                    r_stream.off('data',toss_data)
                                                    r_stream.pipe(unpiped_stream,{end:false})
                                                  }
                                            ])              
                              r_stream_dest_orig.emit('prevent')  
                            },2000) 
                            piping = false
                          } 
                        }          
                  ]])
        setTimeout(() =>{
            piping_action.emit('prevent')
        },3)
      }


    })


  }

})

console.log('mem usage',process.memoryUsage())