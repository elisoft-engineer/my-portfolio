import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { certifications } from "../constants";
import styles from './page.module.css';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const Certifications = () => {
	return (
		<section className={styles.certificationsSection}>
			{certifications.map((cert, index) => {
				return <div className={styles.card} key={index}>
					<h2 className={styles.heading}>
						<Image src={cert.institution.logo} width={48} className={styles.icon} alt={cert.institution.name + " Logo" } />
						<div className={styles.text}>{cert.title}</div>
					</h2>
					<div className={styles.muted}>{cert.institution.name + " - " + cert.obtainedOn}</div>
					<div className={styles.skills}>
						{cert.skills.map((skill, index) => {
							return <span className={styles.skill} key={index}>{skill}</span>
						})}
					</div>
					<div className={styles.links}>
						<a href={cert.url} target="_blank" className={styles.link}>
							<ExternalLink size={20} />
							View Certification
						</a>
					</div>
				</div>
			})}
		</section>
	);
}

export default Certifications;