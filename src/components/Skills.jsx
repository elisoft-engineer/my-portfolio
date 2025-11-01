import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { expertise } from "../constants";

const SkillsPage = () => {
  return <section className="skills-section">
		{expertise.map((category, index) => {
			return <div className="card" key={index}>
				<h2 className="heading">
					<FontAwesomeIcon icon={category.icon} className="icon" />
					{category.name}
				</h2>
				<div className="mute">{category.skills.length} Skills</div>
				<div className="skills">
					{category.skills.slice(0, 3).map((skill, index) => {
						return <span className="skill" key={index}>{skill.name}</span>
					})}
					<span className="skill" key="more">+{category.skills.length - 3} more</span>
				</div>
			</div>
		})}
	</section>
}

export default SkillsPage;