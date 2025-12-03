import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>Operette</div>
        <nav className={styles.nav}>
          <a href="#solutions">الحلول</a>
          <a href="#cases">قصص العملاء</a>
          <a href="#contact">تواصل</a>
        </nav>
      </header>
      <main className={styles.hero}>
        <div className={styles.content}>
          <span className={styles.kicker}>OPERETTE</span>
          <h1>منصة للأتمتة الذكية… بدون تعقيد.</h1>
          <p className={styles.subheadline}>
            نساعد الشركات الصغيرة والمتوسطة على تبسيط العمل الداخلي، ورفع الإنتاجية،
            واتخاذ القرار بثقة.
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href="#contact">
              جرّب Operette الآن
            </a>
            <a className={styles.secondaryButton} href="#demo">
              طلب جلسة تعريفية
            </a>
          </div>
          <div className={styles.assurance}>
            <span className={styles.assuranceLabel}>متوافق مع فرق العمل العربية</span>
            <span className={styles.assuranceDivider} aria-hidden="true" />
            <span>تنفيذ سريع خلال أقل من 10 أيام</span>
          </div>
        </div>
        <div className={styles.visual} aria-hidden="true">
          <svg
            className={styles.illustration}
            viewBox="0 0 420 420"
            role="presentation"
          >
            <rect
              x="42"
              y="42"
              width="336"
              height="336"
              rx="36"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
            />
            <path
              d="M84 144h252M84 210h252M84 276h252"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
            <path
              d="M168 120c0 60 48 108 108 108"
              stroke="rgba(94,106,216,0.28)"
              strokeWidth="1.2"
              fill="none"
            />
            <path
              d="M144 276c40-14 68-54 76-108"
              stroke="rgba(94,106,216,0.18)"
              strokeWidth="1.2"
              fill="none"
            />
            <circle
              cx="276"
              cy="168"
              r="18"
              fill="rgba(94,106,216,0.26)"
            />
            <circle
              cx="222"
              cy="276"
              r="9"
              fill="none"
              stroke="rgba(255,255,255,0.12)"
            />
            <path
              d="M126 342h168"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="0.8"
            />
          </svg>
        </div>
      </main>
      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Operette</span>
        <div className={styles.footerLinks}>
          <a href="#legal">الشروط</a>
          <a href="#privacy">الخصوصية</a>
        </div>
      </footer>
    </div>
  );
}
