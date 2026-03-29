import React from 'react'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300 cursor-pointer group">
      <div className="mb-4">
        <Icon className="w-10 h-10 text-orange group-hover:text-orange-light transition-colors" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{description}</p>
    </div>
  )
}

export default ServiceCard