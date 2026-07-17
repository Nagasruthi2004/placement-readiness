import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.join(__dirname, '..')
const activitiesDir = path.join(rootDir, 'activities')

// Helper to calculate working days between two dates
function getWorkingDays(startDateStr, endDateStr) {
  const dates = []
  let currentDate = new Date(startDateStr)
  const endDate = new Date(endDateStr)

  while (currentDate <= endDate) {
    const day = currentDate.getDay()
    // Exclude Sunday (0) and Saturday (6)
    if (day !== 0 && day !== 6) {
      const yyyy = currentDate.getFullYear()
      const mm = String(currentDate.getMonth() + 1).padStart(2, '0')
      const dd = String(currentDate.getDate()).padStart(2, '0')
      dates.push(`${yyyy}-${mm}-${dd}`)
    }
    currentDate.setDate(currentDate.getDate() + 1)
  }
  return dates
}

const dates = getWorkingDays('2026-07-16', '2026-09-17')
console.log(`Calculated ${dates.length} working days.`)

// Theme Definitions
const COMPANIES = [
  { name: 'Tata Consultancy Services', icon: '🏢', theme: 'Consulting & Services', color: 'blue' },
  { name: 'Deloitte USI', icon: '📊', theme: 'Consulting & Services', color: 'blue' },
  { name: 'Thorogood Associates', icon: '🗄️', theme: 'Data, AI & Analytics', color: 'yellow' },
  { name: 'The MathCompany', icon: '📐', theme: 'Data, AI & Analytics', color: 'yellow' },
  { name: 'Jungroo AI labs', icon: '🧠', theme: 'Data, AI & Analytics', color: 'yellow' },
  { name: 'Celeredge Inc', icon: '🕸️', theme: 'Data, AI & Analytics', color: 'yellow' },
  { name: 'Caterpillar Hackathon', icon: '🚜', theme: 'Data, AI & Analytics', color: 'yellow' },
  { name: 'IBM', icon: '☁️', theme: 'Tech Giants & Security', color: 'purple' },
  { name: 'Palo Alto Networks', icon: '🛡️', theme: 'Tech Giants & Security', color: 'purple' },
  { name: 'Oracle OFSS', icon: '💽', theme: 'Tech Giants & Security', color: 'purple' },
  { name: 'PhonePe', icon: '💸', theme: 'FinTech, Product & Enterprise', color: 'green' },
  { name: 'Societe Generale', icon: '🏦', theme: 'FinTech, Product & Enterprise', color: 'green' },
  { name: 'Commvault', icon: '💾', theme: 'FinTech, Product & Enterprise', color: 'green' },
  { name: 'Bounteous x Accolite', icon: '🛍️', theme: 'FinTech, Product & Enterprise', color: 'green' },
]

// Generate Mission Objects
const missions = dates.map((date, i) => {
  const company = COMPANIES[i % COMPANIES.length]
  const week = Math.floor(i / 5) + 1
  
  return {
    date,
    missionName: `Mission ${company.name.split(' ')[0]} ${i + 1}`,
    company: company.name,
    companyIcon: company.icon,
    skill: 'Core Engineering',
    week: week > 4 ? 4 : week, // Cap week at 4 for UI simplicity or use modulo
    weekTheme: company.theme,
    title: `Technical Challenge - ${company.name}`,
    desc: `A daily engineering task focusing on ${company.theme} systems.`,
    tasks: [
      'Understand the problem statement and design constraints',
      'Design the architecture or write the core logic',
      'Document your findings in README.md',
      'Reflect on your learning'
    ],
    deliverables: ['README.md', 'reflection.md', 'prompts.md'],
    optionalDeliverables: ['diagram.png', 'code/']
  }
})

// Add some specific titles for flavor
missions[0].title = 'Claim Your Folder — Git, Forks & First PR'
missions[0].skill = 'Git & Collaboration'
missions[0].desc = 'The goal of this day is purely operational — every student experiences the full Git loop once.'

missions[missions.length - 1].title = 'Demo Day + Engineering Showcase'
missions[missions.length - 1].missionName = 'Mission Demo Day'
missions[missions.length - 1].company = 'Cohort 25MX'
missions[missions.length - 1].companyIcon = '🏆'
missions[missions.length - 1].isSpecial = true

// 1. GENERATE lib/missions.ts
const missionsTsContent = '/**\n' +
' * missions.ts — The single source of truth for all engineering sprint missions.\n' +
' *\n' +
' * Each mission maps an ISO date to its mission metadata.\n' +
' * To add/edit a mission: update MISSIONS_DATA below.\n' +
' */\n\n' +
'export interface Mission {\n' +
'  date: string\n' +
'  missionName: string\n' +
'  company: string\n' +
'  companyIcon: string\n' +
'  skill: string\n' +
'  week: number\n' +
'  weekTheme: string\n' +
'  title: string\n' +
'  desc: string\n' +
'  tasks: string[]\n' +
'  deliverables: string[]\n' +
'  optionalDeliverables?: string[]\n' +
'  isSpecial?: boolean\n' +
'  specialNote?: string\n' +
'  guide?: string\n' +
'}\n\n' +
'export const WEEK_THEMES: Record<number, { label: string; companies: string; color: string }> = {\n' +
"  1: { label: 'Consulting & Services',          companies: 'TCS · Deloitte', color: 'blue' },\n" +
"  2: { label: 'Data, AI & Analytics',           companies: 'MathCompany · Jungroo', color: 'yellow' },\n" +
"  3: { label: 'Tech Giants & Security',         companies: 'IBM · Palo Alto', color: 'purple' },\n" +
"  4: { label: 'FinTech, Product & Enterprise',  companies: 'PhonePe · Societe Generale', color: 'green' },\n" +
"  5: { label: 'Advanced Engineering',           companies: 'Commvault · Bounteous', color: 'indigo' },\n" +
"  6: { label: 'Cloud & Infrastructure',         companies: 'Oracle · AWS', color: 'blue' },\n" +
"  7: { label: 'System Design',                  companies: 'TCS · IBM', color: 'purple' },\n" +
"  8: { label: 'Security & Optimization',        companies: 'Palo Alto · PhonePe', color: 'red' },\n" +
"  9: { label: 'Capstone & Review',              companies: 'All Companies', color: 'green' },\n" +
"  10: { label: 'Final Demo Week',               companies: 'Cohort 25MX', color: 'yellow' },\n" +
'}\n\n' +
"const STANDARD_DELIVERABLES = ['README.md', 'reflection.md', 'prompts.md']\n\n" +
'export const MISSIONS_DATA: Mission[] = ' + JSON.stringify(missions, null, 2) + '\n\n' +
'export function getMission(date: string): Mission | undefined {\n' +
'  return MISSIONS_DATA.find(m => m.date === date)\n' +
'}\n\n' +
'export function getMissionsByWeek(week: number): Mission[] {\n' +
'  return MISSIONS_DATA.filter(m => m.week === week)\n' +
'}\n\n' +
'export function getTodayMission(): Mission | undefined {\n' +
"  const istTime = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }))\n" +
'  const yyyy = istTime.getFullYear()\n' +
"  const mm   = String(istTime.getMonth() + 1).padStart(2, '0')\n" +
"  const dd   = String(istTime.getDate()).padStart(2, '0')\n" +
'  const todayISO = `${yyyy}-${mm}-${dd}`\n' +
'  return getMission(todayISO)\n' +
'}\n\n' +
'export function isMissionUnlocked(date: string): boolean {\n' +
"  const istTime = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }))\n" +
'  const yyyy = istTime.getFullYear()\n' +
"  const mm   = String(istTime.getMonth() + 1).padStart(2, '0')\n" +
"  const dd   = String(istTime.getDate()).padStart(2, '0')\n" +
'  const todayISO = `${yyyy}-${mm}-${dd}`\n' +
'  \n' +
'  // A mission is unlocked if its date is less than or equal to today\n' +
'  return date <= todayISO\n' +
'}\n\n' +
'export function getNextMission(activeDates: string[]): Mission | undefined {\n' +
'  const activeSet = new Set(activeDates)\n' +
"  return MISSIONS_DATA.find(m => !activeSet.has(m.date) && m.date > (activeDates[activeDates.length - 1] ?? ''))\n" +
'}\n\n' +
'export const ALL_MISSION_DATES = MISSIONS_DATA.map(m => m.date)\n'

const targetFile = path.join(rootDir, 'lib', 'missions.ts')
fs.writeFileSync(targetFile, missionsTsContent)
console.log('✅ Generated lib/missions.ts')

// 2. GENERATE FOLDER TEMPLATES
let foldersCreated = 0
dates.forEach(date => {
  const templateDir = path.join(activitiesDir, date, '_template')
  if (!fs.existsSync(templateDir)) {
    fs.mkdirSync(templateDir, { recursive: true })
  }
  
  const readmePath = path.join(templateDir, 'README.md')
  if (!fs.existsSync(readmePath)) {
    fs.writeFileSync(readmePath, '# Mission Documentation\n\nExplain your design here.\n')
  }

  const reflectionPath = path.join(templateDir, 'reflection.md')
  if (!fs.existsSync(reflectionPath)) {
    fs.writeFileSync(reflectionPath, '# Reflection\n\nWhat did you learn today?\n')
  }

  const promptsPath = path.join(templateDir, 'prompts.md')
  if (!fs.existsSync(promptsPath)) {
    fs.writeFileSync(promptsPath, '# LLM Prompts\n\nList the prompts you used today.\n')
  }
  
  foldersCreated++
})

console.log(`✅ Generated ${foldersCreated} daily template folders.`)
