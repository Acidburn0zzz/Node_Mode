const fs = require('fs')
const events = require('events')
const read_monitor = require('./read_monitor.js')
const async_listener = require('./async_listener.js')
const node_mode = require('./node_mode.js')
const circular_replacer = require('./circular_replacer.js')
const a_l = async_listener()
// const assert = require('assert')
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

//implement use of sync and datasync to recover files
//test the ready event for yourr listernrs
// your modules are functions not async but i guess this is okay for now


const toss_data = a_l(function(){
	
	console.log(arguments)
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
					start:126,
					// end:2237,
					fd:rr_fd,	
					autoClose:false	
				})
				const r_stream_data_event =node_mode('safe',[
													 function(){
													 	r_stream.on('data',toss_data)
													 },
													 function(){
													 	r_stream.on('data',reading_file)
													 },
													 function(){
													 	r_stream.on('readable',r_e_r)
													 }
												])
				const w_stream_last =node_mode('safe',[
										function(){
											// console.log('do i exist here',w_script_info[0])
											w_stream.write('gunna write some info')
											console.log(w_stream_last._events.safe.toString())
											console.log(w_script_info[0])	
											w_stream.end(w_script_info[0])
										}
										,function(){
											w_stream.end()
										}								
									])				
				r_stream.on('error', C);
				r_stream.on('end',()=>{
					setImmediate(() => {
						console.log('nothing more to read closing  readstream')													
						w_stream_last.emit('unknown')																						
						close_file(rr_fd,'read_file',r_file)
					})
				})			
				r_stream.on('close',()=>{
					setImmediate(() =>{
						console.log("looks like the fd was closed by the stream ")
					})
				})									
				r_monitor = read_monitor(r_stream,r_counter,r_interval)
				console.log('readable stream intializaed')
				const pipe_emitter =node_mode('prevent',[
										function(){											
												unpiped_stream = r_stream.pipe(w_stream,{end:false})																
										}
									])											
				pipe_emitter.emit('safe')		
				setTimeout(() => {
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
						r_stream_dest_next.emit('unknown')						
						// console.log(r_stream._events.data)
							// its unwise to place a .emit() in node_mode becuase you are absorbing the whole emitter into another emitter which
							// has to find the right function, not confuse it with its own, because remember its async so you need
							// const or let, to preseve to which emiiter and its event the listener assigned above belongs to
							// just copy the code and execute
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
							r_stream_dest_orig.emit('unknown')	
						},2000)	
						piping = false
					}	
				},3)					
			}


		})


	}

})

console.log('mem usage',process.memoryUsage())