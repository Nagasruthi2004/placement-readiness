import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.join(__dirname, '..')
const missionsFilePath = path.join(rootDir, 'lib', 'missions.ts')

let missionsContent = fs.readFileSync(missionsFilePath, 'utf8')

// We need to parse MISSIONS_DATA. The easiest way is to use a regex to extract the array, modify it, and put it back.
// Since the file exports the array as JSON stringified in setup-missions.js, it's structured nicely.
const arrayRegex = /export const MISSIONS_DATA: Mission\[\] = (\[[\s\S]*?\])\n\nexport function getMission/
const match = missionsContent.match(arrayRegex)

if (!match) {
  console.error("Could not find MISSIONS_DATA array in lib/missions.ts")
  process.exit(1)
}

let missionsData = JSON.parse(match[1])

const getSpecificTasks = (theme) => {
  switch(theme) {
    case 'Consulting & Services':
      return {
        desc: "A hands-on engineering task focused on resolving client requirements and optimizing consulting deliverables.",
        tasks: [
          "Analyze the client's problem statement and identify technical requirements.",
          "Design a scalable system architecture or algorithmic solution for the service.",
          "Implement the core logic and test it against edge cases.",
          "Document your architecture, trade-offs, and technical decisions in the README.md."
        ]
      }
    case 'Data, AI & Analytics':
      return {
        desc: "A data-driven task focusing on machine learning, data processing pipelines, or analytics visualization.",
        tasks: [
          "Pre-process and clean the provided dataset to ensure data integrity.",
          "Develop a predictive model, AI algorithm, or analytics dashboard.",
          "Evaluate the model's accuracy, performance, or data processing speed.",
          "Document your methodology, results, and insights in the README.md."
        ]
      }
    case 'Tech Giants & Security':
      return {
        desc: "A high-performance task focused on enterprise-level scalability, security, and low-latency systems.",
        tasks: [
          "Identify security vulnerabilities or performance bottlenecks in the given scenario.",
          "Implement robust security protocols or optimize the system for scale.",
          "Validate the solution against stress tests and security audits.",
          "Document your security improvements and scalability architecture in the README.md."
        ]
      }
    case 'FinTech, Product & Enterprise':
      return {
        desc: "A product engineering task focusing on financial transactions, reliability, and enterprise software.",
        tasks: [
          "Design a robust, fault-tolerant system for financial transactions or enterprise workflows.",
          "Implement the core API endpoints or transactional logic with ACID compliance.",
          "Handle potential failure states (e.g., race conditions, network drops).",
          "Document your database schema, API design, and failure handling in the README.md."
        ]
      }
    case 'Advanced Engineering':
      return {
        desc: "An advanced task covering complex algorithms, distributed systems, and modern engineering challenges.",
        tasks: [
          "Analyze the distributed system problem and map out the microservice interactions.",
          "Implement the core algorithmic logic using advanced data structures.",
          "Ensure the solution is highly available and fault-tolerant.",
          "Document the system design, algorithmic time complexity, and trade-offs in the README.md."
        ]
      }
    case 'Cloud & Infrastructure':
      return {
        desc: "An infrastructure task focused on cloud deployment, DevOps pipelines, and containerization.",
        tasks: [
          "Containerize the application or design the cloud architecture using AWS/Azure components.",
          "Set up CI/CD pipeline strategies or infrastructure-as-code scripts.",
          "Optimize the deployment for cost and high availability.",
          "Document your infrastructure layout and deployment steps in the README.md."
        ]
      }
    case 'System Design':
      return {
        desc: "A high-level system design task focusing on designing large-scale web applications.",
        tasks: [
          "Define the functional and non-functional requirements of the system.",
          "Design the high-level architecture (Load balancers, DBs, Caching, Microservices).",
          "Identify bottlenecks and propose strategies for horizontal scaling.",
          "Document your detailed system design and diagrams in the README.md."
        ]
      }
    case 'Security & Optimization':
      return {
        desc: "A focused task on identifying system vulnerabilities and improving performance metrics.",
        tasks: [
          "Perform a security audit to find vulnerabilities (e.g., SQLi, XSS, CSRF).",
          "Patch the identified security flaws and optimize database queries.",
          "Implement caching or indexing to improve response times.",
          "Document the before-and-after performance metrics and security patches in the README.md."
        ]
      }
    case 'Capstone & Review':
      return {
        desc: "A comprehensive capstone task integrating all skills learned throughout the sprint.",
        tasks: [
          "Design a full-stack system incorporating Cloud, Security, and Core Engineering.",
          "Implement the end-to-end workflow, ensuring seamless integration between components.",
          "Perform comprehensive end-to-end testing and performance tuning.",
          "Document the complete architecture, setup instructions, and design choices in the README.md."
        ]
      }
    default:
      return {
        desc: "A daily engineering challenge focused on problem-solving and software development.",
        tasks: [
          "Analyze the problem constraints and define a clear approach.",
          "Write clean, modular, and optimized code to solve the challenge.",
          "Test your solution thoroughly against potential edge cases.",
          "Document your thought process and time complexity in the README.md."
        ]
      }
  }
}

missionsData = missionsData.map((mission, index) => {
  // Keep Mission 1 (Git operational) explicitly as is, because it's a tutorial day.
  // Wait, let's just make it very clear for Day 1.
  if (index === 0) {
    mission.desc = "The goal of this day is purely operational — every student must experience the full Git workflow (Fork, Clone, Commit, Push, Pull Request) successfully."
    mission.tasks = [
      "Fork the main Placement Readiness repository to your GitHub account.",
      "Clone your forked repository to your local machine.",
      "Create a new folder using your Roll Number inside activities/2026-07-16/.",
      "Add your profile.md, commit the changes, and open a Pull Request to the main repo."
    ]
    return mission
  }

  // Keep Demo day special
  if (mission.isSpecial) {
    mission.desc = "The final day of the sprint. Present your engineering portfolio, demonstrate your skills, and showcase your capstone projects."
    mission.tasks = [
      "Prepare your final presentation and project demonstration.",
      "Showcase your engineering growth and highlight your best missions.",
      "Review peers' projects and provide constructive feedback.",
      "Celebrate the completion of the 25MX 46-Day Engineering Sprint!"
    ]
    return mission
  }

  // Update other missions dynamically based on their weekTheme
  const updatedDetails = getSpecificTasks(mission.weekTheme)
  mission.desc = updatedDetails.desc
  mission.tasks = updatedDetails.tasks
  
  return mission
})

const updatedJSON = JSON.stringify(missionsData, null, 2)
missionsContent = missionsContent.replace(arrayRegex, `export const MISSIONS_DATA: Mission[] = ${updatedJSON}\n\nexport function getMission`)

fs.writeFileSync(missionsFilePath, missionsContent, 'utf8')
console.log("Successfully updated all mission objectives in lib/missions.ts!")
