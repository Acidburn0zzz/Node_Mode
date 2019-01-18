//will be written to be come an cork and uncork object mechanism


module.exports = function(){
            return function cork_and_uncork(cork_writer, cork_data) {
                            console.log(cork_writer.eventNames(),cork_writer.encoding)
                            cork_writer.cork();
                            cork_writer.write(cork_data)
                            cork_writer.cork();
                            cork_writer.write('lets see how we uncork')
                            process.nextTick(() => {
                                console.log(cork_writer.writableHighWaterMark, cork_writer.bytesWritten,cork_writer.writableBuffer)  
                                cork_writer.uncork();
                                console.log(cork_writer.writableHighWaterMark, cork_writer.bytesWritten,cork_writer.writableBuffer)  
                                // The data will not be flushed until uncork() is called a second time.
                                cork_writer.uncork();
                                console.log(cork_writer.writableHighWaterMark, cork_writer.bytesWritten)
                            });
                        }
                           
}              