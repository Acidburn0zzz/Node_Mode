//need drain meechanism
// need to import your code 

const fs = require('fs')
const read_monitor = require('./read_monitor.js')
// const assert = require('assert')
const file = 'r.txt'
const mode = 'r'
const w_file = "w.txt"
const w_mode = 'w'
var ww_fd;
var rr_fd;
var r_response = '';
var r_monitor = null 
var r_interval = 40000
var r_counter  = 0
// l_f_d_args
// listener developer function args
// l_f_g_args
// listener function generated args
const async_listener = function(listener_function,l_f_d_args){						
					   return function(){
								setImmediate(()=>{
									listener_function(Array.from(arguments),this)
								})
						}
}		



const reading_file = async_listener(function(){
				// r_response += chunk
				console.log(arguments.length)
				console.log(arguments[0])
				console.log(arguments[1].readableLength)				
})




async function close_file(c_fd,name =undefined,r_w = undefined){

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


			else if(name != undefined){


				console.log(r_w,name)
				console.log('if itclosed the '+ name +'is closed now')



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


fs.open(file,mode,(err,fd) =>{


	if(err){


		throw(err)


	}


	else{

		rr_fd = fd;
		console.log('read file opened')
		fs.open(w_file,w_mode,(w_err,w_fd) =>{


			if(w_err){


				close_file(rr_fd)				


			}


			else{


				ww_fd = w_fd
				console.log('write file opened')
		        const w_stream = fs.createWriteStream(w_file,{		              
		              start:55,
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
				const r_stream = fs.createReadStream(file,{
					start:126,
					end:2237,
					fd:fd,	
					autoClose:false	
				})
				r_stream.on('data',reading_file)
				r_stream.on('error', C);
				r_stream.on('end',()=>{
					setImmediate(() => {
						console.log('nothing more to read closing  readstream')
						// console.log(r_response)
						w_stream.end()
						close_file(rr_fd,'read_file',file)
					})
				})			
				r_stream.on('close',()=>{
					setImmediate(() =>{
						console.log("looks like the fd was closed by the stream ")
					})
				})									
				r_monitor = read_monitor(r_stream,r_counter,r_interval)
				console.log('readable stream intializaed')
				setImmediate(() =>{
					r_stream.pipe(w_stream,{end:false})					
				})



							
			}


		})


	}

})
