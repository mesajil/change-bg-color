import React from 'react'
import styles from './Footer.module.css'
import { Github, Linkedin, Globe } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socialLinks}>
          {/* LinkedIn Link */}
          <a
            href='https://linkedin.com/in/lhmesajil'
            target='_blank'
            rel='noopener noreferrer'
            className={`${styles.socialLink} ${styles.linkedin}`}>
            <Linkedin size={24} />
            <span className={styles.srOnly}>LinkedIn</span>
          </a>

          {/* GitHub Link */}
          <a
            href='https://github.com/mesajil'
            target='_blank'
            rel='noopener noreferrer'
            className={`${styles.socialLink} ${styles.github}`}>
            <Github size={24} />
            <span className={styles.srOnly}>GitHub</span>
          </a>

          {/* Personal Website Link */}
          <a
            href='https://cv-luis-mesajil.vercel.app/' // Replace with your actual website URL
            target='_blank'
            rel='noopener noreferrer'
            className={`${styles.socialLink} ${styles.website}`}>
            <Globe size={24} />
            <span className={styles.srOnly}>Personal Website</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
