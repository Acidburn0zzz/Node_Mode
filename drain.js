// drain_writer a writable stream
// drain_data data to be written
// drain_callback what to do after the function has completed







module.exports = function(){
            return function drain_writeOneMillionTimes(drain_writer, drain_data) {
                          //place one million to see the effect
                          let drain_i = 100;
                          drain_writing();
                          function drain_writing() {
                            let drain_ok = true;
                            do {
                              drain_i--;
                              if (drain_i === 0) {
                                // last time!
                                drain_writer.end(drain_data);
                              } else {
                                // see if we should continue, or wait
                                // don't pass the callback, because we're not done yet.
                                // console.log(writer.bytesWritten)
                                drain_ok = drain_writer.write(drain_ok.toString());                                
                              }
                            } while (drain_i > 0 && drain_ok);


                            if (drain_i > 0) {
                              // had to stop early!
                              // write some more once it drains
                              // console.log(i)
                              drain_writer.once('drain', drain_writing);
                            }
                          }
                        }
                           
}
