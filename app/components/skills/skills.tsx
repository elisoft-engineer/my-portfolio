"use client";

import { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  AnimatePresence,
} from "framer-motion";
import { expertise } from "@/app/constants";
import {
  ArrowRight,
  Check,
  LucideIcon,
  Layers,
  Network,
  Server,
  Database,
  Cpu,
  Layout,
  Terminal,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import styles from "./skills.module.css";

interface SkillItem {
  name: string;
  percentage: number;
}

interface ExpertiseCategory {
  name: string;
  icon: LucideIcon;
  skills: SkillItem[];
}

function AnimatedNumber({ value }: { value: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, { duration: 1.2, ease: "easeOut" });
    const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [value, count, rounded]);

  return <span>{displayValue}%</span>;
}

// 1. Programming Languages
function LanguagesSection({ data }: { data: ExpertiseCategory }) {
  const Icon = data.icon;
  return (
    <div className={styles.sectionBlock}>
      <div className={styles.sectionHeader}>
        <div className={styles.badge}>
          <Icon size={14} /> {data.name}
        </div>
        <h2>Languages I write</h2>
      </div>

      <div className={styles.langGrid}>
        {data.skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className={styles.langCard}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.04 }}
          >
            <div className={styles.langTop}>
              <span className={styles.langName}>{skill.name}</span>
              <span className={styles.langPercent}>
                <AnimatedNumber value={skill.percentage} />
              </span>
            </div>
            <div className={styles.compactTrack}>
              <motion.div
                className={styles.compactFill}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// 2. Frontend: 3D Spatial Deck with Theme & Mobile Adaptability
// components/skills/FrontendTree.tsx
function FrontendSection({ data }: { data: any }) {
  const Icon = data.icon || Layers;
  const [activeSkill, setActiveSkill] = useState(data.skills[0]);

  return (
    <div className={styles.sectionBlock}>
      <div className={styles.sectionHeader}>
        <div className={styles.badge}>
          <Icon size={14} /> {data.name}
        </div>
        <h2>Frontend Spatial HUD Canvas</h2>
      </div>

      <div className={styles.hudContainer}>
        {/* Spatial Node Grid */}
        <div className={styles.nodeCanvas}>
          <div className={styles.gridOverlay} />
          <div className={styles.nodeList}>
            {data.skills.map((skill: any, idx: number) => {
              const isActive = activeSkill.name === skill.name;

              return (
                <motion.button
                  key={skill.name}
                  type="button"
                  className={`${styles.spatialNode} ${isActive ? styles.spatialNodeActive : ""}`}
                  onClick={() => setActiveSkill(skill)}
                  onMouseEnter={() => setActiveSkill(skill)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={styles.nodeIndicator}>
                    <span className={styles.nodeDot} />
                    <span className={styles.nodeIndex}>0{idx + 1}</span>
                  </div>
                  <span className={styles.nodeName}>{skill.name}</span>
                  <span className={styles.nodePercent}>
                    {skill.percentage}%
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* HUD Telemetry Display */}
        <div className={styles.hudDisplay}>
          <div className={styles.hudHeader}>
            <span className={styles.hudTag}>// TARGET TELEMETRY</span>
            <span className={styles.hudStatus}>● LIVE</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSkill.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={styles.hudBody}
            >
              <div className={styles.hudTitleRow}>
                <h3>{activeSkill.name}</h3>
                <span className={styles.hudScore}>
                  {activeSkill.percentage}%
                </span>
              </div>

              <div className={styles.hudMeter}>
                <div className={styles.hudMeterLabel}>
                  <span>Proficiency Rating</span>
                  <span>Mastery Level</span>
                </div>
                <div className={styles.hudTrack}>
                  <motion.div
                    className={styles.hudFill}
                    initial={{ width: 0 }}
                    animate={{ width: `${activeSkill.percentage}%` }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// 3. Backend: Tiered Topological Dependency Network
function BackendSection({ data }: { data: ExpertiseCategory }) {
  const Icon = data.icon;
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Group backend tools by ecosystem column/cluster
  const pythonStack = data.skills.filter((s) =>
    ["Django", "FastAPI", "SQLAlchemy", "PostgresSQL"].includes(s.name),
  );
  const nodeStack = data.skills.filter((s) =>
    ["Node.js", "Express.js", "MongoDB"].includes(s.name),
  );

  // Determine active highlights for connected tools
  const isConnected = (nodeName: string) => {
    if (!hoveredNode) return false;
    if (hoveredNode === nodeName) return true;

    const pythonGroup = ["Django", "FastAPI", "SQLAlchemy", "PostgresSQL"];
    const nodeGroup = ["Node.js", "Express.js", "MongoDB"];

    if (pythonGroup.includes(hoveredNode) && pythonGroup.includes(nodeName))
      return true;
    if (nodeGroup.includes(hoveredNode) && nodeGroup.includes(nodeName))
      return true;

    return false;
  };

  return (
    <div className={styles.sectionBlock}>
      <div className={styles.sectionHeader}>
        <div className={styles.badge}>
          <Icon size={14} /> {data.name}
        </div>
        <h2>Backend System Dependency Topology</h2>
      </div>

      <div className={styles.networkCanvas}>
        <div className={styles.networkGrid}>
          {/* Python / Relational Ecosystem */}
          <div className={styles.ecosystemCluster}>
            <div className={styles.nodeRow}>
              {pythonStack
                .filter((s) => ["Django", "FastAPI"].includes(s.name))
                .map((skill) => (
                  <div
                    key={skill.name}
                    className={`${styles.networkNode} ${isConnected(skill.name) ? styles.networkNodeActive : ""}`}
                    onMouseEnter={() => setHoveredNode(skill.name)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <Network size={14} className={styles.nodeIcon} />
                    <span className={styles.nodeName}>{skill.name}</span>
                    <span className={styles.nodeBadge}>
                      {skill.percentage}%
                    </span>
                  </div>
                ))}
            </div>

            <div className={styles.connectionConnector}>│</div>

            <div className={styles.nodeRow}>
              {pythonStack
                .filter((s) => s.name === "SQLAlchemy")
                .map((skill) => (
                  <div
                    key={skill.name}
                    className={`${styles.networkNode} ${isConnected(skill.name) ? styles.networkNodeActive : ""}`}
                    onMouseEnter={() => setHoveredNode(skill.name)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <Network size={14} className={styles.nodeIcon} />
                    <span className={styles.nodeName}>{skill.name}</span>
                    <span className={styles.nodeBadge}>
                      {skill.percentage}%
                    </span>
                  </div>
                ))}
            </div>

            <div className={styles.connectionConnector}>│</div>

            <div className={styles.nodeRow}>
              {pythonStack
                .filter((s) => s.name === "PostgresSQL")
                .map((skill) => (
                  <div
                    key={skill.name}
                    className={`${styles.networkNode} ${isConnected(skill.name) ? styles.networkNodeActive : ""}`}
                    onMouseEnter={() => setHoveredNode(skill.name)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <Database size={14} className={styles.nodeIcon} />
                    <span className={styles.nodeName}>{skill.name}</span>
                    <span className={styles.nodeBadge}>
                      {skill.percentage}%
                    </span>
                  </div>
                ))}
            </div>
          </div>

          <div className={styles.ecosystemDivider} />

          {/* Node.js / Document Ecosystem */}
          <div className={styles.ecosystemCluster}>
            <div className={styles.nodeRow}>
              {nodeStack
                .filter((s) => ["Node.js", "Express.js"].includes(s.name))
                .map((skill) => (
                  <div
                    key={skill.name}
                    className={`${styles.networkNode} ${isConnected(skill.name) ? styles.networkNodeActive : ""}`}
                    onMouseEnter={() => setHoveredNode(skill.name)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <Network size={14} className={styles.nodeIcon} />
                    <span className={styles.nodeName}>{skill.name}</span>
                    <span className={styles.nodeBadge}>
                      {skill.percentage}%
                    </span>
                  </div>
                ))}
            </div>

            <div className={styles.connectionConnector}>│</div>

            <div className={styles.nodeRow}>
              {nodeStack
                .filter((s) => s.name === "MongoDB")
                .map((skill) => (
                  <div
                    key={skill.name}
                    className={`${styles.networkNode} ${isConnected(skill.name) ? styles.networkNodeActive : ""}`}
                    onMouseEnter={() => setHoveredNode(skill.name)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <Database size={14} className={styles.nodeIcon} />
                    <span className={styles.nodeName}>{skill.name}</span>
                    <span className={styles.nodeBadge}>
                      {skill.percentage}%
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 4. AI & Machine Learning Section
function AiSection({ data }: { data: ExpertiseCategory }) {
  const Icon = data.icon;
  return (
    <div className={styles.sectionBlock}>
      <div className={styles.sectionHeader}>
        <div className={styles.badge}>
          <Icon size={14} /> {data.name}
        </div>
        <h2>AI and Data Tools</h2>
      </div>

      <div className={styles.featureList}>
        {data.skills.map((skill, idx) => (
          <div key={idx} className={styles.featureRow}>
            <div className={styles.featureLeft}>
              <Check size={16} className={styles.checkIcon} />
              <span className={styles.featureName}>{skill.name}</span>
            </div>
            <div className={styles.featureRight}>
              <div className={styles.featureBar}>
                <motion.div
                  className={styles.featureFill}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
              <span className={styles.featureValue}>
                <AnimatedNumber value={skill.percentage} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 5. DevOps Section
function DevopsSection({ data }: { data: ExpertiseCategory }) {
  const Icon = data.icon;
  return (
    <div className={styles.sectionBlock}>
      <div className={styles.sectionHeader}>
        <div className={styles.badge}>
          <Icon size={14} /> {data.name}
        </div>
        <h2>DevOps Pipeline</h2>
      </div>

      <div className={styles.pipelineTrack}>
        {data.skills.map((skill, idx) => (
          <div key={idx} className={styles.pipelineStep}>
            <div className={styles.stepContent}>
              <span className={styles.stepNum}>0{idx + 1}</span>
              <span className={styles.stepName}>{skill.name}</span>
              <span className={styles.stepScore}>
                <AnimatedNumber value={skill.percentage} />
              </span>
            </div>
            {idx < data.skills.length - 1 && (
              <div className={styles.stepArrow}>
                <ArrowRight size={14} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsClient() {
  return (
    <section className={styles.skillsWrapper}>
      {expertise.map((category, index) => {
        const lowerName = category.name.toLowerCase();

        if (
          lowerName.includes("programming") ||
          lowerName.includes("language")
        ) {
          return <LanguagesSection key={index} data={category} />;
        }
        if (lowerName.includes("frontend")) {
          return <FrontendSection key={index} data={category} />;
        }
        if (lowerName.includes("backend")) {
          return <BackendSection key={index} data={category} />;
        }
        if (
          lowerName.includes("ai") ||
          lowerName.includes("machine learning")
        ) {
          return <AiSection key={index} data={category} />;
        }
        if (lowerName.includes("devops")) {
          return <DevopsSection key={index} data={category} />;
        }

        return <LanguagesSection key={index} data={category} />;
      })}
    </section>
  );
}
