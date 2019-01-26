const path = require('path');
// const assert = require('assert')
const required_dir = path.join(   process.env.HOME, 'req_mod_node'   )
const circular_replacer = require(   required_dir +'/circular_replacer.js'   )

// p_uE
// push the opened object and the type to be proerly closed object
// how you use it is that the closing function is added as a method to the object and as it goes through open items its has a type, 
    // the type name is the name of the function to close the open object
// the client using this plugin should create the object for the end function to receive
// make a check if the dev tries to register a fuction open object type twice 
    // tell dev they cannot do this and this plugin will use the last extension if they want to be innovative so they can apply different rules 
    // to different objects
var process_uncaughtException = {}
process_uncaughtException.message = ''
process_uncaughtException.open_items = []

process_uncaughtException.handler = function(   open_items   ){                
    process.on('exit',(code) =>{
        console.log(   process_uncaughtException.message,code   )    
        Error.stack != undefined ? console.log(Error.stack) : console.log('trying to show you the error')
    })    
    for (var open_items_i = open_items.length - 1; open_items_i >= 0; open_items_i--) {
        // console.log(open_items[open_items_i][1])

        if(   process_uncaughtException[open_items[open_items_i][0]]!= undefined   ){


            process_uncaughtException[open_items[open_items_i][0]](   open_items[open_items_i][1]   )


        }    


        else{


            console.log(   'the open object assoicated with' + open_items[open_items_i][1]   + ' a ' + open_items[open_items_i][0] + 'was left open, \
                close this yourself, to \
                avoid this in the future register the open object type as the function name to this object and it must be exact ')


        }      


    }
    process.exit() 
}       

process.on('uncaughtException',(err)=>{
    console.error(   err   )
    process_uncaughtException.handler(   process_uncaughtException.open_items  )
})


module.exports = process_uncaughtException
