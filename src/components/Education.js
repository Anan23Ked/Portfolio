import { Chrono } from "react-chrono";
import { EDUCATION } from "../data/data";
import { motion } from "framer-motion";

const Education = () =>{
    return(
      
        <div className='education content-center flex flex-col'>
        <motion.div 
          className="mt-10"
          initial={{ opacity: 0 }} // Fade in
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
        
          <motion.div 
          className="text-center w-full text-center text-headingText text-4xl"
          initial={{ opacity: 0 }} // Animates from opacity 0 to 1
          animate={{ opacity: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Education</h2>
        </motion.div>
          <div className="mt-10">
           
            <Chrono 
                items= {EDUCATION}  
                mode="VERTICAL_ALTERNATING" 
                // disableInteraction = "true"
                disableToolbar = "true"
                enableLayoutSwitch = "false"
                enableQuickJump = "false"
                flipLayout="false"
                theme={{
                    primary: '#ADD8E6',
                    secondary: '#daeef5',
                    cardBgColor: 'white',
                    titleColor: '#866372',
                    titleColorActive: '#800020',
                    cardTitleColor: '#2d4d77',
                    
                }}/></div>
            
              </motion.div>
              </div>
        
    )
}

export default Education