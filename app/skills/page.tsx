'use client';

import { expertise } from "@/app/constants";
import { useDialog } from "@/app/providers/Dialog";
import styles from './page.module.css';

const Skills = () => {
	const { open } = useDialog();

  return (
		<section className={styles.skillsSection}>
			{expertise.map((category, index) => {
				return <div 
					className={styles.card} 
					key={index}
					onClick={() => {
						open(
							<div className={styles.skillsDialog}>
								<h3 className={styles.expertise}>{category.name}</h3>
								<div className={styles.skills}>
									{category.skills.map((skill, index) => {
										return <div className={styles.skill} key={index}>
											<div className={styles.top}>
												<div className={styles.name}>{skill.name}</div>
												<div className={styles.percentage}>{skill.percentage}%</div>
											</div>
											<div className={styles.bar}>
												<div className={styles.inner} style={{width: skill.percentage.toString() + "%"}}></div>
											</div>
										</div>
									})}
								</div>
							</div>,
						);
					}}>
					<div className={styles.background}>
						<div className={styles.blobs}>
							<div className={`${styles.blob} ${styles.blob1}`}></div>
							<div className={`${styles.blob} ${styles.blob2}`}></div>
						</div>
					</div>
					<div className={styles.content}>
						<h2 className={styles.heading}>
							<category.icon size={20} className={styles.icon} />
							{category.name}
						</h2>
						<div className={styles.mute}>{category.skills.length} Skills</div>
						<div className={styles.skills}>
							{category.skills.slice(0, 3).map((skill, index) => {
								return <span className={styles.skill} key={index}>{skill.name}</span>
							})}
							<span className={styles.skill} key="more">+{category.skills.length - 3} more</span>
						</div>
					</div>
				</div>
			})}
		</section>
	);
}

export default Skills;