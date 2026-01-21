import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceCard = ({index, icon, title, description }) => {
	return (
		<Tilt className="service-card" options={{max: 45, scale: 1, speed: 450}}>
			<motion.div>
				<article
					className="card"
					key={index}
				>
					<div className="icon">
						<FontAwesomeIcon icon={icon} className="icon large" />
					</div>
					<h3 className="title">{title}</h3>
					<p className="description">{description}</p>
				</article>
			</motion.div>
		</Tilt>
	);
}

export default ServiceCard;