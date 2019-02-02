// n_m_t_registry is a thread register for all node_modes in your API, this 
// should be optional helping the developer focus on groups in a different way
// you can add to the n_m_t_registry in the API  for more dynamics

 node_mode_threads_files = {
                        "template.js":[
                            ['test',      'add_listener'         ],                            
                          ],
                        "process_Event_Control.js":[
                            ['test',      'const_fn'                   ],
                            ['test',      ''                           ]                            
                          ]                           
                    }



module.exports.n_m_t_registry = {
                                    break_p_Ev_C_n_m:[['test',
                                                        ['use_raw','use_props','just_require','add_no_obj_listener','add_listener']
                                                      ]],                                                                                                                                                          
                                    p_Ev_C_1_i_n_m  : [['test',
                                                        ['newlist_broken','']
                                                      ]],                                                                                                      
                          p_Ev_C_listen_handle_n_m :  [['test',
                                                        ['const_fn_unsafe','no_const_fn','const_fn_new_help']
                                                      ],                                                                                                     
                                                      ['listen_init',
                                                        ['const_fn','no_const_fn']
                                                      ]],                                                                      

                                }




module.exports.node_mode_threads = function(   dev_obj   ){                                                                              
                                       return node_mode_threads_files[dev_obj.calling_file] 
                                   }

