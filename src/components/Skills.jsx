import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { expertise } from "../constants";
import { useDialog } from "../context/DialogContext";

const SkillsPage = () => {
	const { open } = useDialog();

  return <section className="skills-section">
		{expertise.map((category, index) => {
			return <div 
				className="card" 
				key={index}
				onClick={() => {
					open(
					<div className="skills-dialog">
						<h3 className="expertise">{category.name}</h3>
						<div className="skills">
							{category.skills.map((skill, index) => {
								return <div className="skill" key={index}>
									<div className="top">
										<div className="name">{skill.name}</div>
										<div className="percentage">{skill.percentage}%</div>
									</div>
									<div className="bar">
										<div className="inner" style={{width: skill.percentage.toString() + "%"}}></div>
									</div>
								</div>
							})}
						</div>
					</div>,
				);
				}}>
				<div className="background">
					<div className="blobs">
						<div className="blob blob-1"></div>
						<div className="blob blob-2"></div>
					</div>
				</div>
				<div className="content">
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
			</div>
		})}
	</section>
}

export default SkillsPage;