import { LucideProps } from 'lucide-react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'

interface ProfileButtonProps {
  Icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>
  url: string
  size?: number
  backgroundColor?: string
}

const ProfileButton: React.FC<ProfileButtonProps> = ({ Icon, url, size = 40, backgroundColor = '#000' }) => {
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Profile Link'
      className='profile-button'
      style={{ backgroundColor, width: size, height: size }}>
      <Icon size={size * 0.6} color='#fff' />
    </a>
  )
}

export default ProfileButton
