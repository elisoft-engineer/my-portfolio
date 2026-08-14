import FalcoSendShowcase from "@/app/components/projects/falcosend/code";
import AlchemistShowcase from "@/app/components/projects/alchemist/code";
import HeartbeatShowcase from "@/app/components/projects/heartbeat/code";
import TaskFlowShowcase from "@/app/components/projects/todo/code";
import styles from "./page.module.css";

export default function ProjectsPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.heading}>My Projects</h1>
      </header>

      {/* Independent Showcase Components */}
      <FalcoSendShowcase />
      <AlchemistShowcase />
      <HeartbeatShowcase />
      <TaskFlowShowcase />
    </main>
  );
}
