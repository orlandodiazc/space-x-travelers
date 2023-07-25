import {
  Globe,
  Heart,
  HeartOff,
  MapPin,
  Menu,
  Moon,
  Rocket,
  SunMedium,
  Twitter,
  X,
  type LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

const iconFlickr = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    version="1.1"
    viewBox="0 0 362.68 362.68"
    xmlSpace="preserve"
  >
    <circle cx="85.8" cy="181.34" r="85.8" fill="#005DE1"></circle>
    <circle cx="276.88" cy="181.34" r="85.8" fill="#FF007E"></circle>
  </svg>
)

const iconLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
    <g fill="none" fillRule="evenodd">
      <circle cx="24" cy="24" r="24" fill="#FFF"></circle>
      <path
        fill="#0B0D17"
        d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
      ></path>
    </g>
  </svg>
)

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  rocket: Rocket,
  menu: Menu,
  close: X,
  location: MapPin,
  website: Globe,
  twitter: Twitter,
  flickr: iconFlickr,
  logo: iconLogo,
  heart: Heart,
  heartoff: HeartOff,
}
