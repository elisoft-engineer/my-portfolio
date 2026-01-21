import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare';

import { projects } from '../constants'


const ProjectsPage = () => {
	return (
		<section className="projects-section">
			{projects.map((project, index) => {
				return <div className="card" key={index}>
					<div className="image">
						<img src={project.image} alt={project.title + " image"} />
					</div>
					<div className="meta">
						<h2 className="title">{project.title}</h2>
						<p className="description">{project.description}</p>
						<div className="skills">
							{project.technologies.map((skill, index) => {
								return <span className="skill" key={index}>{skill}</span>
							})}
							
						</div>
						<div className="links">
							<a href="#" target="_blank" className="link">
								<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" />
								Visit Website
							</a>
						</div>
					</div>
				</div>
			})}
		</section>
	);
}

export default ProjectsPage;