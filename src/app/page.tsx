import Link from 'next/link';
import { FolderTree, Zap, Gamepad2, ArrowRight, Terminal } from 'lucide-react';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.main}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        {/* Ambient orbs */}
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />

        <div className={styles.heroContent}>
          {/* Badge */}
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Interactive Developer Game
          </div>

          {/* Headline */}
          <h1 className={styles.title}>
            Navigate the
            <br />
            <span className={styles.titleGradient}>File System</span>
          </h1>

          {/* Sub-text */}
          <p className={styles.subtitle}>
            Learn absolute &amp; relative paths by navigating real folder trees
            with terminal commands. Fun, visual, and surprisingly addictive.
          </p>

          {/* CTA */}
          <Link href="/play" className={styles.cta} id="cta-play">
            <Gamepad2 size={20} />
            Start Playing
            <ArrowRight size={18} className={styles.ctaArrow} />
          </Link>


        </div>
      </section>

      {/* ── FEATURES STRIP ── */}
      <section className={styles.strip}>
        <div className={styles.card}>
          <div className={styles.cardIcon} style={{ '--glow': 'rgba(0,240,255,0.4)' } as React.CSSProperties}>
            <FolderTree size={26} color="var(--color-primary)" />
          </div>
          <h3 className={styles.cardTitle}>Visual Tree</h3>
          <p className={styles.cardText}>
            See the file system as an interactive node tree and navigate it in real time.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon} style={{ '--glow': 'rgba(255,0,85,0.4)' } as React.CSSProperties}>
            <Terminal size={26} color="var(--color-secondary)" />
          </div>
          <h3 className={styles.cardTitle}>Path Commands</h3>
          <p className={styles.cardText}>
            Type real commands like <code>../folder</code> or <code>/root/src</code> to move through the tree.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon} style={{ '--glow': 'rgba(255,235,59,0.4)' } as React.CSSProperties}>
            <Zap size={26} color="var(--color-accent)" />
          </div>
          <h3 className={styles.cardTitle}>Instant Feedback</h3>
          <p className={styles.cardText}>
            Your character moves on every command. Errors surface immediately so you learn fast.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <p>FolderRun · Made by <span className={styles.footerName}>Sunil Paudyal</span></p>
      </footer>
    </main>
  );
}
