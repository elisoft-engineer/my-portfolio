import FalcoSendShowcase from "@/app/components/projects/falcosend/code";
import AlchemistShowcase from "@/app/components/projects/alchemist/code";
import HeartbeatShowcase from "@/app/components/projects/heartbeat/code";
import TaskFlowShowcase from "@/app/components/projects/todo/code";
import styles from "./page.module.css";

export default function ProjectsPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1>Projects</h1>
        <p>Things I've built, open-source packages, and developer tools.</p>
      </header>

      {/* Independent Showcase Components */}
      <FalcoSendShowcase />
      <AlchemistShowcase />
      <HeartbeatShowcase />
      <TaskFlowShowcase />
    </main>
  );
}
