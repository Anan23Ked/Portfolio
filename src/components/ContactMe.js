import { CONTACT } from "../data/data";
import { motion } from "framer-motion";
import LocationPin from '../assets/icons/Vector_1_location.png'
import { AiOutlineMail } from "react-icons/ai";


const Contact = () => {
	return (
        <section id="contact">
		<div className="border-t border-primaryColor bg-qq pb-16">
			<motion.h2
				className="my-20 text-center text-4xl"
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: 50 }}
				transition={{ duration: 0.5 }}
			>
				<span className="text-center bg-gradient-to-r from-secondaryColor via-singleLineText to-primaryColorDark bg-clip-text text-4xl  text-transparent">
					Get in Touch
				</span>
			</motion.h2>
			<div className="justify-items-center space-y-4">
				<div className="flex flex-cols gap-2 text-black hover:text-secondaryHover"> 
                  <img
                                  src={LocationPin}
                                  alt="home pic"
                                  
                                />
					{CONTACT.address}
				</div>
				
				<div className="flex flex-cols gap-2 text-black hover:text-secondaryHover">  <AiOutlineMail style={{ fill: '#800020' }} size={24} />
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
					
				</div>
            </div>
		</div>
	</section>
    );
};

export default Contact;