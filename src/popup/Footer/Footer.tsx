import React from 'react'
import styles from './Footer.module.css'
import { Github, Linkedin } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socialLinks}>
          <a
            href='https://linkedin.com/in/lhmesajil'
            target='_blank'
            rel='noopener noreferrer'
            className={`${styles.socialLink} ${styles.linkedin}`}>
            <Linkedin size={24} />
            <span className={styles.srOnly}>LinkedIn</span>
          </a>
          <a
            href='https://github.com/mesajil'
            target='_blank'
            rel='noopener noreferrer'
            className={`${styles.socialLink} ${styles.github}`}>
            <Github size={24} />
            <span className={styles.srOnly}>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
