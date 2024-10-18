import { Chrono } from "react-chrono";
import { EDUCATION } from "../constants/data";

const Education = () =>{
    return(
        <div >
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
        
    )
}

export default Education