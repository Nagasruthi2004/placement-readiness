'use client'

import React from 'react'
import {
  SiTata,
  SiPaloaltonetworks,
  SiCaterpillar,
} from '@icons-pack/react-simple-icons'
import { 
  Building2, 
  Database, 
  Cpu, 
  ShieldCheck, 
  Banknote, 
  Cloud,
  Rocket,
  BrainCircuit,
  Terminal,
  Tractor,
  GraduationCap
} from 'lucide-react'

interface CompanyLogoProps {
  name: string
  className?: string
  size?: number | string
}

export default function CompanyLogo({ name, className = "", size = 24 }: CompanyLogoProps) {
  const n = name.toLowerCase()
  const baseClasses = `inline-block ${className}`

  // 1. Specific Brand SVGs
  if (n.includes('tata') || n.includes('tcs')) return <SiTata size={size} className={baseClasses} color="#4A90E2" />
  if (n.includes('palo alto')) return <SiPaloaltonetworks size={size} className={baseClasses} color="#F04E23" />
  if (n.includes('caterpillar') || n.includes('cat ')) return <SiCaterpillar size={size} className={baseClasses} color="#FFCD11" />
  
  // 2. Specialized Generic SVGs for specific domains
  if (n.includes('ibm') || n.includes('deloitte')) return <Building2 size={size} className={`${baseClasses} text-blue-400`} />
  if (n.includes('oracle')) return <Database size={size} className={`${baseClasses} text-red-500`} />
  if (n.includes('mathcompany') || n.includes('thorogood')) return <Database size={size} className={`${baseClasses} text-yellow-400`} />
  if (n.includes('jungroo')) return <BrainCircuit size={size} className={`${baseClasses} text-yellow-400`} />
  if (n.includes('phonepe') || n.includes('societe')) return <Banknote size={size} className={`${baseClasses} text-green-400`} />
  if (n.includes('commvault')) return <Cloud size={size} className={`${baseClasses} text-indigo-400`} />
  if (n.includes('celeredge') || n.includes('bounteous')) return <Terminal size={size} className={`${baseClasses} text-brand-400`} />
  if (n.includes('cohort')) return <GraduationCap size={size} className={`${baseClasses} text-brand-400`} />
  
  // 3. Ultimate Fallback Premium SVG
  return <Building2 size={size} className={`${baseClasses} text-slate-400`} />
}
