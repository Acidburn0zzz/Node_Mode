const path = require('path');
const required_dir = path.join(process.env.HOME, 'My_Computer/NVM/NODE/MINI_PROJECTS/PIPE_STREAM')
const async_listener = require(required_dir +'/async_listener.js')
const a_l = async_listener()


module.exports = function(r_e_r_unpiped_stream){

                          const r_e_r_unshift = a_l(function(){                                            
                              let r_e_r_chunk;
                              while (null !== (r_e_r_chunk = arguments[1].read())) {

                                
                                  if (r_e_r_chunk.indexOf('David Tallon') != -1) {
                                    // console.log(r_e_r_chunk.toString())
                                    var r_e_r_toss_talon = r_e_r_chunk.toString().split('David Tallon').join('Adam Lampls')          
                                    const r_e_r_buf = Buffer.from(r_e_r_toss_talon, 'utf8');
                                    // arguments[1].off('error', C);
                                    // might throw an error on unshift?
                                    // remove the 'readable' because your in a while loop calling the read operation 
                                        // and I want to see if it actually unshifted by piping it to a writestream to a file
                                    arguments[1].off('readable', r_e_r_unshift);
                                    if (r_e_r_buf.length){
                                      console.log(r_e_r_buf.length)
                                      arguments[1].unshift(r_e_r_buf);          
                                    // now the body of the message can be read from the stream.          
                                    }
                                    arguments[1].pipe(r_e_r_unpiped_stream)


                                  }


                                  else {

                                    // still reading the header.
                                    console.log('looking for that string to unshift')


                                  }        


                              }
                            

                          })
                          return  r_e_r_unshift
}