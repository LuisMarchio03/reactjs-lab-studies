import styles from './experiencebar.module.scss';

export function ExperienceBar() {
  return (
    <header id={styles.experienceBar}>
      <span>0px</span>
      <div>
        <div></div>
        <span className={styles.currentExperience}> 100 xp</span>
      </div>
      <span>200px</span>
    </header>
  )
}
