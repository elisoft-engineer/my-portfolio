import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { certifications } from "../constants";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare';

const CertificationsPage = () => {
	return (
		<section className="certifications-section">
			{certifications.map((cert, index) => {
				return <div className="card" key={index}>
					<h2 className="heading">
						<img src={cert.institution.logo} className='icon' alt={cert.institution.name + " Logo" } />
						<div className="text">{cert.title}</div>
					</h2>
					<div className="muted">{cert.institution.name + " - " + cert.obtainedOn}</div>
					<div className="skills">
						{cert.skills.map((skill, index) => {
							return <span className="skill" key={index}>{skill}</span>
						})}
					</div>
					<div className="links">
						<a href={cert.url} target="_blank" className="link">
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" />
							View Certification
						</a>
					</div>
				</div>
			})}
		</section>
	);
}

export default CertificationsPage;