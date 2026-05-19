import { Building2, Home, Heart, GraduationCap, UtensilsCrossed } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Category = 'Commercial' | 'Residential' | 'Healthcare' | 'Hospitality' | 'Education'

export interface ClientGroup {
  id: string
  name: string
  category: Category
  projects: string[]
}

export const clients: ClientGroup[] = [
  {
    id: 'salarpuria',
    name: 'Salarpuria Satva',
    category: 'Commercial',
    projects: [
      'Salarpuria Satva Knowledge Park',
      'Salarpuria Satva Knowledge Capital',
      'Salarpuria Satva Knowledge City',
      'Salarpuria Satva Necklace Pride Mall',
      'Salarpuria Satva Signature Tower',
      'Salarpuria Satva Magnus',
    ],
  },
  {
    id: 'myhome',
    name: 'MyHome',
    category: 'Residential',
    projects: [
      'MyHome Bhooja',
      'MyHome Twitza',
      'MyHome Tarkshya',
      'MyHome Tridasa',
      'MyHome Skyview',
      'MyHome Mangala',
      'MyHome Ankura',
      'MyHome Raka',
      'MyHome Nishida',
    ],
  },
  {
    id: 'phoenix',
    name: 'Phoenix Group',
    category: 'Commercial',
    projects: [
      'Phoenix Centarus',
      'Phoenix Litho',
      'Phoenix Aquila',
      'Phoenix Ivy',
      'Phoenix H10',
    ],
  },
  {
    id: 'rajapushpa',
    name: 'Rajapushpa',
    category: 'Residential',
    projects: [
      'Rajapushpa Summit',
      'Rajapushpa Paradium',
      'Rajapushpa Provencia',
    ],
  },
  {
    id: 'smr',
    name: 'SMR',
    category: 'Residential',
    projects: [
      'SMR Casa Carino Villas',
      'SMR Iconia',
    ],
  },
  {
    id: 'aurobindo',
    name: 'Aurobindo',
    category: 'Residential',
    projects: [
      'Aurobindo Galaxy',
      'Aurobindo Orbit',
    ],
  },
  {
    id: 'asbl',
    name: 'ASBL',
    category: 'Residential',
    projects: [
      'ASBL Lakeside',
      'ASBL Spire',
    ],
  },
  {
    id: 'amazon',
    name: 'Amazon',
    category: 'Commercial',
    projects: ['Amazon Hyderabad Campus'],
  },
  {
    id: 'google',
    name: 'Google',
    category: 'Commercial',
    projects: ['Google Hyderabad Office'],
  },
  {
    id: 'raheja',
    name: 'Raheja Mindspace',
    category: 'Commercial',
    projects: ['Raheja Mindspace IT Park'],
  },
  {
    id: 'capitaland',
    name: 'Capitaland',
    category: 'Commercial',
    projects: ['Capitaland'],
  },
  {
    id: 'jpmc',
    name: 'JPMC',
    category: 'Commercial',
    projects: ['JPMC'],
  },
  {
    id: 'pranava',
    name: 'Pranava Group',
    category: 'Commercial',
    projects: ['Pranava Group'],
  },
  {
    id: 'gsquare',
    name: 'GSquare',
    category: 'Commercial',
    projects: ['GSquare'],
  },
  {
    id: 'simplywork',
    name: 'Simply Work',
    category: 'Commercial',
    projects: ['Simply Work'],
  },
  {
    id: 'kurnool',
    name: 'Kurnool TG Mall',
    category: 'Commercial',
    projects: ['Kurnool TG Mall'],
  },
  {
    id: 'sriaditya',
    name: 'Sri Aditya',
    category: 'Residential',
    projects: ['Sri Aditya'],
  },
  {
    id: 'hrmani',
    name: 'Hrmani',
    category: 'Residential',
    projects: ['Hrmani'],
  },
  {
    id: 'sindhu',
    name: 'Sindhu Hospitals',
    category: 'Healthcare',
    projects: ['Sindhu Hospitals'],
  },
  {
    id: 'jubilee',
    name: 'Jubilee Hills Club',
    category: 'Hospitality',
    projects: ['Jubilee Hills Club'],
  },
  {
    id: 'filmnagar',
    name: 'Filmnagar Club',
    category: 'Hospitality',
    projects: ['Filmnagar Club'],
  },
  {
    id: 'meru',
    name: 'Meru International School',
    category: 'Education',
    projects: ['Meru International School'],
  },
]

export interface CategoryStyle {
  badge: string
  icon: LucideIcon
  accent: string
  grad: string
  bg: string
}

export const categoryStyle: Record<Category, CategoryStyle> = {
  Commercial:  { badge: 'bg-blue-500/15 text-blue-300 border-blue-500/30',          icon: Building2,       accent: 'text-blue-300',    grad: 'from-blue-900/50 to-dcs-navy',    bg: 'bg-blue-500/10' },
  Residential: { badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30', icon: Home,            accent: 'text-emerald-300', grad: 'from-emerald-900/50 to-dcs-navy', bg: 'bg-emerald-500/10' },
  Healthcare:  { badge: 'bg-red-500/15 text-red-300 border-red-500/30',             icon: Heart,           accent: 'text-red-300',     grad: 'from-red-900/50 to-dcs-navy',     bg: 'bg-red-500/10' },
  Hospitality: { badge: 'bg-amber-500/15 text-amber-300 border-amber-500/30',       icon: UtensilsCrossed, accent: 'text-amber-300',   grad: 'from-amber-900/50 to-dcs-navy',   bg: 'bg-amber-500/10' },
  Education:   { badge: 'bg-purple-500/15 text-purple-300 border-purple-500/30',    icon: GraduationCap,   accent: 'text-purple-300',  grad: 'from-purple-900/50 to-dcs-navy',  bg: 'bg-purple-500/10' },
}
