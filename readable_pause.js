


module.exports = function(pause_r_stream){
		console.log("is r stream paused",pause_r_stream.isPaused(),pause_r_stream.readableFlowing)		
		pause_r_stream.pause()
		console.log("is r stream paused",pause_r_stream.isPaused(),pause_r_stream.readableFlowing)
		setTimeout(function(){
			console.log('are we getting a buffer clog',pause_r_stream.readableLength,pause_r_stream.readableHighWaterMark)
			pause_r_stream.resume()
		},1.83585987445)
		// at around this value in ms the fs.ReadStream gets a chunk from the source
                           
}
