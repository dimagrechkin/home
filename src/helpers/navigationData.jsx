import { CharacterIcon, EpisodeIcon, PlanetIcon, SpecieIcon, StarshipIcon, VehicleIcon } from '../assets/icons'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaSkype } from 'react-icons/fa'

export const navLinks = [
  {
    name: 'Contacts',
    path: '/contacts',
    icon: <EpisodeIcon />,
  },
  {
    name: 'Skills',
    path: '/skills',
    icon: <CharacterIcon />,
  },
  {
    name: 'Experience',
    path: '/experience',
    icon: <PlanetIcon />,
  },
  {
    name: 'Education',
    path: '/education',
    icon: <SpecieIcon />,
  },
  {
    name: 'Private',
    path: '/private',
    icon: <VehicleIcon />,
  },
  // {
  //   name: 'Starships',
  //   path: '/starships',
  //   icon: <StarshipIcon />,
  // },
]

export const footerLinks = [
  {
    name: 'Help',
    path: '/help',
  },
  {
    name: 'write me',
    path: '/write',
  },
]

export const socialLinks = [
  {
    name: 'Facebook',
    icon: <FaFacebook />,
    href: '#',
  },
  {
    name: 'Twitter',
    icon: <FaTwitter />,
    href: '#',
  },
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    href: '#',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    href: '#',
  },
  {
    name: 'Skype',
    icon: <FaSkype />,
    href: '#',
  },
]
