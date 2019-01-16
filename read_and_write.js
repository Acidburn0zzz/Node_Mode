const fs = require('fs')
// const assert = require('assert')
const file = 'readable.txt'
const mode = 'r'
const w_file = "./w.txt"
const w_mode = 'w'
var ww_fd;
var rr_fd;
var r_response = '';
var r_monitor =null 

const reading_file =function(chunk){
			setImmediate(() => {
				r_response += chunk
				console.log(r_response,this.readableLength)
			})	
		}


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
						console.log(r_response)
						w_stream.end()
						close_file(rr_fd,'read_file',file)
					})
				})			
				r_stream.on('close',()=>{
					setImmediate(() =>{
						console.log("looks like the fd was closed by the stream ")
					})
				})					
				var r_counter  = 0
				r_monitor =setInterval(function(){


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



				},40000)
				console.log('readable stream intializaed')
				setImmediate(() =>{
					r_stream.pipe(w_stream,{end:false})					
				})



							
			}


		})


	}

})