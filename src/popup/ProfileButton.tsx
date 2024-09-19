import { LucideProps } from 'lucide-react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'

interface ProfileButtonProps {
  Icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>
  url: string
  size?: number
}

const ProfileButton: React.FC<ProfileButtonProps> = ({ Icon, url, size = 32 }) => {
  return (
    <a href={url} target='_blank' rel='noopener noreferrer' aria-label='Profile Link'>
      <Icon size={size} />
    </a>
  )
}

export default ProfileButton
