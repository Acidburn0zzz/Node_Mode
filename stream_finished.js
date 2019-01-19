// s_f_stream
	// the stream in question that is not emiiting 'error' or it closing events

const { finished } = require('stream');

module.exports = function(){
				  	return function(s_f_stream){	
								 finished(s_f_stream, (s_f_err) => {


												  if (s_f_err) {


												    console.error('Stream failed', s_f_err);
												    s_f_stream.emit('error')


												  } 


												  else {


												    console.log('the stream for ' + s_f_stream.path + ' is finished no errors');


												  }


										});
							 }
													 
}
