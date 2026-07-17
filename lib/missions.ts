/**
 * missions.ts — The single source of truth for all engineering sprint missions.
 *
 * Each mission maps an ISO date to its mission metadata.
 * To add/edit a mission: update MISSIONS_DATA below.
 */

export interface Mission {
  date: string
  missionName: string
  company: string
  companyIcon: string
  skill: string
  week: number
  weekTheme: string
  title: string
  desc: string
  tasks: string[]
  deliverables: string[]
  optionalDeliverables?: string[]
  isSpecial?: boolean
  specialNote?: string
  guide?: string
}

export const WEEK_THEMES: Record<number, { label: string; companies: string; color: string }> = {
  1: { label: 'Consulting & Services',          companies: 'TCS · Deloitte', color: 'blue' },
  2: { label: 'Data, AI & Analytics',           companies: 'MathCompany · Jungroo', color: 'yellow' },
  3: { label: 'Tech Giants & Security',         companies: 'IBM · Palo Alto', color: 'purple' },
  4: { label: 'FinTech, Product & Enterprise',  companies: 'PhonePe · Societe Generale', color: 'green' },
  5: { label: 'Advanced Engineering',           companies: 'Commvault · Bounteous', color: 'indigo' },
  6: { label: 'Cloud & Infrastructure',         companies: 'Oracle · AWS', color: 'blue' },
  7: { label: 'System Design',                  companies: 'TCS · IBM', color: 'purple' },
  8: { label: 'Security & Optimization',        companies: 'Palo Alto · PhonePe', color: 'red' },
  9: { label: 'Capstone & Review',              companies: 'All Companies', color: 'green' },
  10: { label: 'Final Demo Week',               companies: 'Cohort 25MX', color: 'yellow' },
}

const STANDARD_DELIVERABLES = ['README.md', 'reflection.md', 'prompts.md']

export const MISSIONS_DATA: Mission[] = [
  {
    "date": "2026-07-16",
    "missionName": "Mission Tata 1",
    "company": "Tata Consultancy Services",
    "companyIcon": "🏢",
    "skill": "Git & Collaboration",
    "week": 1,
    "weekTheme": "Consulting & Services",
    "title": "Claim Your Folder — Git, Forks & First PR",
    "desc": "The goal of this day is purely operational — every student must experience the full Git workflow (Fork, Clone, Commit, Push, Pull Request) successfully.",
    "tasks": [
      "Fork the main Placement Readiness repository to your GitHub account.",
      "Clone your forked repository to your local machine.",
      "Create a new folder using your Roll Number inside activities/2026-07-16/.",
      "Add your profile.md, commit the changes, and open a Pull Request to the main repo."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Day 1 Operational Task\n\nYour goal today is not to write complex code, but to master the Git workflow.\n1. **Fork** this repository to your own account.\n2. **Clone** it locally.\n3. **Create your folder** at `activities/2026-07-16/YOUR_ROLL_NUMBER/`.\n4. **Create** a `profile.md` file introducing yourself.\n5. **Push** to your fork and open a **Pull Request** to the main repository. Do NOT edit any files outside your folder!"
  },
  {
    "date": "2026-07-17",
    "missionName": "Mission Deloitte 2",
    "company": "Deloitte USI",
    "companyIcon": "📊",
    "skill": "Core Engineering",
    "week": 1,
    "weekTheme": "Consulting & Services",
    "title": "Technical Challenge - Deloitte USI",
    "desc": "A hands-on engineering task focused on resolving client requirements and optimizing consulting deliverables.",
    "tasks": [
      "Analyze the client's problem statement and identify technical requirements.",
      "Design a scalable system architecture or algorithmic solution for the service.",
      "Implement the core logic and test it against edge cases.",
      "Document your architecture, trade-offs, and technical decisions in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Deloitte USI\n\n**Scenario:** You are an engineer at Deloitte USI. \n\n**Your Task:**\nBuild a dynamic JSON-driven form generator in React/Next.js that renders a complex nested questionnaire for a consulting client. The schema should enforce validation (e.g., age > 18) and support conditional logic (if 'Employed' is checked, show 'Company Name' field).\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-07-20",
    "missionName": "Mission Thorogood 3",
    "company": "Thorogood Associates",
    "companyIcon": "🗄️",
    "skill": "Core Engineering",
    "week": 1,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Thorogood Associates",
    "desc": "A data-driven task focusing on machine learning, data processing pipelines, or analytics visualization.",
    "tasks": [
      "Pre-process and clean the provided dataset to ensure data integrity.",
      "Develop a predictive model, AI algorithm, or analytics dashboard.",
      "Evaluate the model's accuracy, performance, or data processing speed.",
      "Document your methodology, results, and insights in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Thorogood Associates\n\n**Scenario:** You are an engineer at Thorogood Associates. \n\n**Your Task:**\nImplement a K-Means Clustering algorithm from scratch (no Scikit-learn). Given a 2D dataset of customer coordinates, cluster them into K distinct zones. Output the final centroid coordinates and visualize the result (or print the clustered arrays).\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-07-21",
    "missionName": "Mission The 4",
    "company": "The MathCompany",
    "companyIcon": "📐",
    "skill": "Core Engineering",
    "week": 1,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - The MathCompany",
    "desc": "A data-driven task focusing on machine learning, data processing pipelines, or analytics visualization.",
    "tasks": [
      "Pre-process and clean the provided dataset to ensure data integrity.",
      "Develop a predictive model, AI algorithm, or analytics dashboard.",
      "Evaluate the model's accuracy, performance, or data processing speed.",
      "Document your methodology, results, and insights in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - The MathCompany\n\n**Scenario:** You are an engineer at The MathCompany. \n\n**Your Task:**\nBuild a predictive text Markov Chain generator. Ingest a large text corpus (e.g., Shakespeare). Build a transition probability matrix, and write a function that generates a 100-word paragraph of readable, procedurally generated text based on the corpus.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-07-22",
    "missionName": "Mission Jungroo 5",
    "company": "Jungroo AI labs",
    "companyIcon": "🧠",
    "skill": "Core Engineering",
    "week": 1,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Jungroo AI labs",
    "desc": "A data-driven task focusing on machine learning, data processing pipelines, or analytics visualization.",
    "tasks": [
      "Pre-process and clean the provided dataset to ensure data integrity.",
      "Develop a predictive model, AI algorithm, or analytics dashboard.",
      "Evaluate the model's accuracy, performance, or data processing speed.",
      "Document your methodology, results, and insights in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Jungroo AI labs\n\n**Scenario:** You are an engineer at Jungroo AI labs. \n\n**Your Task:**\nWrite a Pandas/Polars data cleaning pipeline. Ingest a messy CSV with missing dates, negative prices, and duplicate IDs. Impute missing dates using forward-fill, cap prices at the 99th percentile, remove duplicates, and output a strict, strongly-typed Parquet file.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-07-23",
    "missionName": "Mission Celeredge 6",
    "company": "Celeredge Inc",
    "companyIcon": "🕸️",
    "skill": "Core Engineering",
    "week": 2,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Celeredge Inc",
    "desc": "A data-driven task focusing on machine learning, data processing pipelines, or analytics visualization.",
    "tasks": [
      "Pre-process and clean the provided dataset to ensure data integrity.",
      "Develop a predictive model, AI algorithm, or analytics dashboard.",
      "Evaluate the model's accuracy, performance, or data processing speed.",
      "Document your methodology, results, and insights in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Celeredge Inc\n\n**Scenario:** You are an engineer at Celeredge Inc. \n\n**Your Task:**\nDevelop a TF-IDF (Term Frequency - Inverse Document Frequency) search engine. Given a local directory of 100 text files, index them, and write a search function that takes a query string and returns the top 5 most relevant files ranked by TF-IDF score.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-07-24",
    "missionName": "Mission Caterpillar 7",
    "company": "Caterpillar Hackathon",
    "companyIcon": "🚜",
    "skill": "Core Engineering",
    "week": 2,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Caterpillar Hackathon",
    "desc": "A data-driven task focusing on machine learning, data processing pipelines, or analytics visualization.",
    "tasks": [
      "Pre-process and clean the provided dataset to ensure data integrity.",
      "Develop a predictive model, AI algorithm, or analytics dashboard.",
      "Evaluate the model's accuracy, performance, or data processing speed.",
      "Document your methodology, results, and insights in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Caterpillar Hackathon\n\n**Scenario:** You are an engineer at Caterpillar Hackathon. \n\n**Your Task:**\nBuild a sentiment analysis API. Integrate with a lightweight NLP library (or use an LLM API). Receive a batch array of 50 customer reviews in a single POST request, process them asynchronously, and return a grouped JSON object categorizing them into Positive, Neutral, and Negative.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-07-27",
    "missionName": "Mission IBM 8",
    "company": "IBM",
    "companyIcon": "☁️",
    "skill": "Core Engineering",
    "week": 2,
    "weekTheme": "Tech Giants & Security",
    "title": "Technical Challenge - IBM",
    "desc": "A high-performance task focused on enterprise-level scalability, security, and low-latency systems.",
    "tasks": [
      "Identify security vulnerabilities or performance bottlenecks in the given scenario.",
      "Implement robust security protocols or optimize the system for scale.",
      "Validate the solution against stress tests and security audits.",
      "Document your security improvements and scalability architecture in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - IBM\n\n**Scenario:** You are an engineer at IBM. \n\n**Your Task:**\nImplement a robust JWT (JSON Web Token) authentication system. Create your own function to sign and verify RS256 (asymmetric RSA keys) JWTs. The token must include strict expiration (exp) and issuer (iss) claims. Create a middleware that rejects expired or tampered tokens.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-07-28",
    "missionName": "Mission Palo 9",
    "company": "Palo Alto Networks",
    "companyIcon": "🛡️",
    "skill": "Core Engineering",
    "week": 2,
    "weekTheme": "Tech Giants & Security",
    "title": "Technical Challenge - Palo Alto Networks",
    "desc": "A high-performance task focused on enterprise-level scalability, security, and low-latency systems.",
    "tasks": [
      "Identify security vulnerabilities or performance bottlenecks in the given scenario.",
      "Implement robust security protocols or optimize the system for scale.",
      "Validate the solution against stress tests and security audits.",
      "Document your security improvements and scalability architecture in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Palo Alto Networks\n\n**Scenario:** You are an engineer at Palo Alto Networks. \n\n**Your Task:**\nBuild a secure file upload service. Accept an image upload via multipart/form-data. Validate the file's 'Magic Bytes' (not just the extension) to ensure it's truly a PNG/JPEG. Limit size to 2MB, sanitize the filename, and store it safely without directory traversal vulnerabilities.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-07-29",
    "missionName": "Mission Oracle 10",
    "company": "Oracle OFSS",
    "companyIcon": "💽",
    "skill": "Core Engineering",
    "week": 2,
    "weekTheme": "Tech Giants & Security",
    "title": "Technical Challenge - Oracle OFSS",
    "desc": "A high-performance task focused on enterprise-level scalability, security, and low-latency systems.",
    "tasks": [
      "Identify security vulnerabilities or performance bottlenecks in the given scenario.",
      "Implement robust security protocols or optimize the system for scale.",
      "Validate the solution against stress tests and security audits.",
      "Document your security improvements and scalability architecture in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Oracle OFSS\n\n**Scenario:** You are an engineer at Oracle OFSS. \n\n**Your Task:**\nDesign and implement a Role-Based Access Control (RBAC) matrix. Create an API with three endpoints. Users can have roles like 'Admin', 'Editor', and 'Viewer'. Use a bitmask (e.g., 1 for Read, 2 for Write, 4 for Delete) to validate if the requesting user has permission for the action.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-07-30",
    "missionName": "Mission PhonePe 11",
    "company": "PhonePe",
    "companyIcon": "💸",
    "skill": "Core Engineering",
    "week": 3,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - PhonePe",
    "desc": "A product engineering task focusing on financial transactions, reliability, and enterprise software.",
    "tasks": [
      "Design a robust, fault-tolerant system for financial transactions or enterprise workflows.",
      "Implement the core API endpoints or transactional logic with ACID compliance.",
      "Handle potential failure states (e.g., race conditions, network drops).",
      "Document your database schema, API design, and failure handling in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - PhonePe\n\n**Scenario:** You are an engineer at PhonePe. \n\n**Your Task:**\nBuild a double-entry bookkeeping ledger. Every financial transaction must create two entries (a debit and a credit) that perfectly balance to zero. Implement an API that transfers money between User A and User B, enforcing strict ACID properties using database transactions.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-07-31",
    "missionName": "Mission Societe 12",
    "company": "Societe Generale",
    "companyIcon": "🏦",
    "skill": "Core Engineering",
    "week": 3,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - Societe Generale",
    "desc": "A product engineering task focusing on financial transactions, reliability, and enterprise software.",
    "tasks": [
      "Design a robust, fault-tolerant system for financial transactions or enterprise workflows.",
      "Implement the core API endpoints or transactional logic with ACID compliance.",
      "Handle potential failure states (e.g., race conditions, network drops).",
      "Document your database schema, API design, and failure handling in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Societe Generale\n\n**Scenario:** You are an engineer at Societe Generale. \n\n**Your Task:**\nImplement Idempotency for a Payment API. Clients will send a unique 'Idempotency-Key' header. If the exact same request is sent twice (e.g. network timeout retry), your server must intercept it, skip processing, and return the cached successful response from the first attempt.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-08-03",
    "missionName": "Mission Commvault 13",
    "company": "Commvault",
    "companyIcon": "💾",
    "skill": "Core Engineering",
    "week": 3,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - Commvault",
    "desc": "A product engineering task focusing on financial transactions, reliability, and enterprise software.",
    "tasks": [
      "Design a robust, fault-tolerant system for financial transactions or enterprise workflows.",
      "Implement the core API endpoints or transactional logic with ACID compliance.",
      "Handle potential failure states (e.g., race conditions, network drops).",
      "Document your database schema, API design, and failure handling in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Commvault\n\n**Scenario:** You are an engineer at Commvault. \n\n**Your Task:**\nDesign a complex shopping cart pricing engine. The cart receives an array of items. Implement rules for: 'Buy 1 Get 1 Free', '10% off orders over $100', and complex tax calculations based on regional zip codes. Ensure all float math uses precise integer representations (cents) to avoid rounding errors.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-08-04",
    "missionName": "Mission Bounteous 14",
    "company": "Bounteous x Accolite",
    "companyIcon": "🛍️",
    "skill": "Core Engineering",
    "week": 3,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - Bounteous x Accolite",
    "desc": "A product engineering task focusing on financial transactions, reliability, and enterprise software.",
    "tasks": [
      "Design a robust, fault-tolerant system for financial transactions or enterprise workflows.",
      "Implement the core API endpoints or transactional logic with ACID compliance.",
      "Handle potential failure states (e.g., race conditions, network drops).",
      "Document your database schema, API design, and failure handling in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Bounteous x Accolite\n\n**Scenario:** You are an engineer at Bounteous x Accolite. \n\n**Your Task:**\nBuild an Audit Log tracking system. For a given sensitive database table (e.g., Users), write a system (via DB Triggers or Application Layer) that records every INSERT, UPDATE, and DELETE. The log must capture the exact 'before' and 'after' JSON state, the timestamp, and the actor's ID.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-08-05",
    "missionName": "Mission Tata 15",
    "company": "Tata Consultancy Services",
    "companyIcon": "🏢",
    "skill": "Core Engineering",
    "week": 3,
    "weekTheme": "Consulting & Services",
    "title": "Technical Challenge - Tata Consultancy Services",
    "desc": "A hands-on engineering task focused on resolving client requirements and optimizing consulting deliverables.",
    "tasks": [
      "Analyze the client's problem statement and identify technical requirements.",
      "Design a scalable system architecture or algorithmic solution for the service.",
      "Implement the core logic and test it against edge cases.",
      "Document your architecture, trade-offs, and technical decisions in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Tata Consultancy Services\n\n**Scenario:** You are an engineer at Tata Consultancy Services. \n\n**Your Task:**\nDesign and implement a robust API rate-limiting middleware in Express.js using Redis. The client requires a sliding window algorithm that allows exactly 100 requests per minute per IP, returning a 429 status code with a 'Retry-After' header if exceeded.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-08-06",
    "missionName": "Mission Deloitte 16",
    "company": "Deloitte USI",
    "companyIcon": "📊",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Consulting & Services",
    "title": "Technical Challenge - Deloitte USI",
    "desc": "A hands-on engineering task focused on resolving client requirements and optimizing consulting deliverables.",
    "tasks": [
      "Analyze the client's problem statement and identify technical requirements.",
      "Design a scalable system architecture or algorithmic solution for the service.",
      "Implement the core logic and test it against edge cases.",
      "Document your architecture, trade-offs, and technical decisions in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Deloitte USI\n\n**Scenario:** You are an engineer at Deloitte USI. \n\n**Your Task:**\nWrite a script that parses a massive 1GB log file stream without loading it entirely into memory (use Node.js Streams or Python Generators). Extract all HTTP 500 error traces, anonymize any PII (email/IP addresses) using Regex, and output a clean JSON summary report.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-08-07",
    "missionName": "Mission Thorogood 17",
    "company": "Thorogood Associates",
    "companyIcon": "🗄️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Thorogood Associates",
    "desc": "A data-driven task focusing on machine learning, data processing pipelines, or analytics visualization.",
    "tasks": [
      "Pre-process and clean the provided dataset to ensure data integrity.",
      "Develop a predictive model, AI algorithm, or analytics dashboard.",
      "Evaluate the model's accuracy, performance, or data processing speed.",
      "Document your methodology, results, and insights in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Thorogood Associates\n\n**Scenario:** You are an engineer at Thorogood Associates. \n\n**Your Task:**\nCreate a Data Pipeline DAG (Directed Acyclic Graph) executor. Write a script that reads a JSON definition of 5 tasks (Extract, Transform A, Transform B, Join, Load). Execute independent tasks in parallel, and wait for prerequisites to finish before running dependent tasks.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-08-10",
    "missionName": "Mission The 18",
    "company": "The MathCompany",
    "companyIcon": "📐",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - The MathCompany",
    "desc": "A data-driven task focusing on machine learning, data processing pipelines, or analytics visualization.",
    "tasks": [
      "Pre-process and clean the provided dataset to ensure data integrity.",
      "Develop a predictive model, AI algorithm, or analytics dashboard.",
      "Evaluate the model's accuracy, performance, or data processing speed.",
      "Document your methodology, results, and insights in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - The MathCompany\n\n**Scenario:** You are an engineer at The MathCompany. \n\n**Your Task:**\nImplement an Anomaly Detection script using Z-Scores. Read a time-series dataset of server response times. Identify any data points that are more than 3 standard deviations from a rolling window mean, and output an alert payload for each anomaly.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-08-11",
    "missionName": "Mission Jungroo 19",
    "company": "Jungroo AI labs",
    "companyIcon": "🧠",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Jungroo AI labs",
    "desc": "A data-driven task focusing on machine learning, data processing pipelines, or analytics visualization.",
    "tasks": [
      "Pre-process and clean the provided dataset to ensure data integrity.",
      "Develop a predictive model, AI algorithm, or analytics dashboard.",
      "Evaluate the model's accuracy, performance, or data processing speed.",
      "Document your methodology, results, and insights in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Jungroo AI labs\n\n**Scenario:** You are an engineer at Jungroo AI labs. \n\n**Your Task:**\nBuild a recommendation engine using Collaborative Filtering. Given a matrix of User-Item ratings (1-5 stars), calculate the cosine similarity between users. Predict the missing ratings for a target user and recommend the top 3 items they haven't seen yet.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-08-12",
    "missionName": "Mission Celeredge 20",
    "company": "Celeredge Inc",
    "companyIcon": "🕸️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Celeredge Inc",
    "desc": "A data-driven task focusing on machine learning, data processing pipelines, or analytics visualization.",
    "tasks": [
      "Pre-process and clean the provided dataset to ensure data integrity.",
      "Develop a predictive model, AI algorithm, or analytics dashboard.",
      "Evaluate the model's accuracy, performance, or data processing speed.",
      "Document your methodology, results, and insights in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Celeredge Inc\n\n**Scenario:** You are an engineer at Celeredge Inc. \n\n**Your Task:**\nWrite a web scraper using Playwright or Puppeteer that circumvents basic anti-bot protections. Navigate to an e-commerce page, extract the product name, price, and stock status for 20 items, handle pagination, and save the structured data to a SQLite database.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-08-13",
    "missionName": "Mission Caterpillar 21",
    "company": "Caterpillar Hackathon",
    "companyIcon": "🚜",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Caterpillar Hackathon",
    "desc": "A data-driven task focusing on machine learning, data processing pipelines, or analytics visualization.",
    "tasks": [
      "Pre-process and clean the provided dataset to ensure data integrity.",
      "Develop a predictive model, AI algorithm, or analytics dashboard.",
      "Evaluate the model's accuracy, performance, or data processing speed.",
      "Document your methodology, results, and insights in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Caterpillar Hackathon\n\n**Scenario:** You are an engineer at Caterpillar Hackathon. \n\n**Your Task:**\nDesign a scalable metrics aggregation pipeline. Simulate incoming IoT temperature data at 1000 requests/sec. Buffer these events in memory and write them to the database in bulk batches every 5 seconds to reduce database IOPS, ensuring zero data loss during the flush.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-08-14",
    "missionName": "Mission IBM 22",
    "company": "IBM",
    "companyIcon": "☁️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Tech Giants & Security",
    "title": "Technical Challenge - IBM",
    "desc": "A high-performance task focused on enterprise-level scalability, security, and low-latency systems.",
    "tasks": [
      "Identify security vulnerabilities or performance bottlenecks in the given scenario.",
      "Implement robust security protocols or optimize the system for scale.",
      "Validate the solution against stress tests and security audits.",
      "Document your security improvements and scalability architecture in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - IBM\n\n**Scenario:** You are an engineer at IBM. \n\n**Your Task:**\nImplement a distributed locking mechanism using Redis. Write a script where multiple concurrent workers try to run a 'cron job', but the Redis lock ensures that exactly one worker executes it. Handle edge cases like the worker crashing before releasing the lock (use TTLs).\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-08-17",
    "missionName": "Mission Palo 23",
    "company": "Palo Alto Networks",
    "companyIcon": "🛡️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Tech Giants & Security",
    "title": "Technical Challenge - Palo Alto Networks",
    "desc": "A high-performance task focused on enterprise-level scalability, security, and low-latency systems.",
    "tasks": [
      "Identify security vulnerabilities or performance bottlenecks in the given scenario.",
      "Implement robust security protocols or optimize the system for scale.",
      "Validate the solution against stress tests and security audits.",
      "Document your security improvements and scalability architecture in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Palo Alto Networks\n\n**Scenario:** You are an engineer at Palo Alto Networks. \n\n**Your Task:**\nBuild a defense mechanism against Brute Force attacks. Track failed login attempts per IP address in a fast cache. If an IP fails 5 times within 10 minutes, implement an exponential backoff lockout (e.g., blocked for 1 min, then 5 mins, then 1 hour).\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-08-18",
    "missionName": "Mission Oracle 24",
    "company": "Oracle OFSS",
    "companyIcon": "💽",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Tech Giants & Security",
    "title": "Technical Challenge - Oracle OFSS",
    "desc": "A high-performance task focused on enterprise-level scalability, security, and low-latency systems.",
    "tasks": [
      "Identify security vulnerabilities or performance bottlenecks in the given scenario.",
      "Implement robust security protocols or optimize the system for scale.",
      "Validate the solution against stress tests and security audits.",
      "Document your security improvements and scalability architecture in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Oracle OFSS\n\n**Scenario:** You are an engineer at Oracle OFSS. \n\n**Your Task:**\nWrite a comprehensive SQL Injection vulnerability patch. Take an existing intentionally vulnerable codebase (provided conceptually) that uses string concatenation for queries. Rewrite the entire data layer to use strict Parameterized Queries and ORM query builders, preventing all injections.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-08-19",
    "missionName": "Mission PhonePe 25",
    "company": "PhonePe",
    "companyIcon": "💸",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - PhonePe",
    "desc": "A product engineering task focusing on financial transactions, reliability, and enterprise software.",
    "tasks": [
      "Design a robust, fault-tolerant system for financial transactions or enterprise workflows.",
      "Implement the core API endpoints or transactional logic with ACID compliance.",
      "Handle potential failure states (e.g., race conditions, network drops).",
      "Document your database schema, API design, and failure handling in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - PhonePe\n\n**Scenario:** You are an engineer at PhonePe. \n\n**Your Task:**\nImplement a scalable Pagination API using Keyset Pagination (Cursor-based). Instead of using standard SQL OFFSET (which gets slow on large datasets), design an endpoint that takes a 'next_cursor' parameter to efficiently fetch the next 50 rows using indexed column sorting.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-08-20",
    "missionName": "Mission Societe 26",
    "company": "Societe Generale",
    "companyIcon": "🏦",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - Societe Generale",
    "desc": "A product engineering task focusing on financial transactions, reliability, and enterprise software.",
    "tasks": [
      "Design a robust, fault-tolerant system for financial transactions or enterprise workflows.",
      "Implement the core API endpoints or transactional logic with ACID compliance.",
      "Handle potential failure states (e.g., race conditions, network drops).",
      "Document your database schema, API design, and failure handling in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Societe Generale\n\n**Scenario:** You are an engineer at Societe Generale. \n\n**Your Task:**\nCreate a multi-currency wallet system. Fetch real-time exchange rates from a public API, cache them for 5 minutes, and allow a user to convert their balance from USD to EUR. Ensure thread safety so concurrent conversion requests do not result in a negative or duplicated balance.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-08-21",
    "missionName": "Mission Commvault 27",
    "company": "Commvault",
    "companyIcon": "💾",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - Commvault",
    "desc": "A product engineering task focusing on financial transactions, reliability, and enterprise software.",
    "tasks": [
      "Design a robust, fault-tolerant system for financial transactions or enterprise workflows.",
      "Implement the core API endpoints or transactional logic with ACID compliance.",
      "Handle potential failure states (e.g., race conditions, network drops).",
      "Document your database schema, API design, and failure handling in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Commvault\n\n**Scenario:** You are an engineer at Commvault. \n\n**Your Task:**\nBuild a robust CSV Bulk Import tool. Accept a CSV upload of 50,000 product records. Process the file asynchronously. Validate each row (price > 0, name required). Insert valid rows into the database and generate a downloadable 'Error Report' CSV containing only the rows that failed validation.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-08-24",
    "missionName": "Mission Bounteous 28",
    "company": "Bounteous x Accolite",
    "companyIcon": "🛍️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - Bounteous x Accolite",
    "desc": "A product engineering task focusing on financial transactions, reliability, and enterprise software.",
    "tasks": [
      "Design a robust, fault-tolerant system for financial transactions or enterprise workflows.",
      "Implement the core API endpoints or transactional logic with ACID compliance.",
      "Handle potential failure states (e.g., race conditions, network drops).",
      "Document your database schema, API design, and failure handling in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Bounteous x Accolite\n\n**Scenario:** You are an engineer at Bounteous x Accolite. \n\n**Your Task:**\nDesign a state machine for an Order Fulfillment process. Define states: PENDING, PAID, SHIPPED, DELIVERED, CANCELLED. Enforce strict transition rules (e.g., cannot transition from PENDING directly to SHIPPED). Throw explicit domain errors if an invalid transition is attempted.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-08-25",
    "missionName": "Mission Tata 29",
    "company": "Tata Consultancy Services",
    "companyIcon": "🏢",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Consulting & Services",
    "title": "Technical Challenge - Tata Consultancy Services",
    "desc": "A hands-on engineering task focused on resolving client requirements and optimizing consulting deliverables.",
    "tasks": [
      "Analyze the client's problem statement and identify technical requirements.",
      "Design a scalable system architecture or algorithmic solution for the service.",
      "Implement the core logic and test it against edge cases.",
      "Document your architecture, trade-offs, and technical decisions in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Tata Consultancy Services\n\n**Scenario:** You are an engineer at Tata Consultancy Services. \n\n**Your Task:**\nCreate a microservice that generates PDF invoices dynamically from JSON data using a library like Puppeteer or ReportLab. The service must support custom HTML templates, handle pagination gracefully, and upload the final PDF to a mock S3 bucket.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-08-26",
    "missionName": "Mission Deloitte 30",
    "company": "Deloitte USI",
    "companyIcon": "📊",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Consulting & Services",
    "title": "Technical Challenge - Deloitte USI",
    "desc": "A hands-on engineering task focused on resolving client requirements and optimizing consulting deliverables.",
    "tasks": [
      "Analyze the client's problem statement and identify technical requirements.",
      "Design a scalable system architecture or algorithmic solution for the service.",
      "Implement the core logic and test it against edge cases.",
      "Document your architecture, trade-offs, and technical decisions in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Deloitte USI\n\n**Scenario:** You are an engineer at Deloitte USI. \n\n**Your Task:**\nDevelop a real-time 'Status Dashboard' backend. Create a WebSocket server that receives simulated server health metrics (CPU, Memory) every second from 5 different 'nodes'. Aggregate this data and broadcast it to connected frontend clients with less than 50ms latency.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-08-27",
    "missionName": "Mission Thorogood 31",
    "company": "Thorogood Associates",
    "companyIcon": "🗄️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Thorogood Associates",
    "desc": "A data-driven task focusing on machine learning, data processing pipelines, or analytics visualization.",
    "tasks": [
      "Pre-process and clean the provided dataset to ensure data integrity.",
      "Develop a predictive model, AI algorithm, or analytics dashboard.",
      "Evaluate the model's accuracy, performance, or data processing speed.",
      "Document your methodology, results, and insights in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Thorogood Associates\n\n**Scenario:** You are an engineer at Thorogood Associates. \n\n**Your Task:**\nBuild a custom LRU (Least Recently Used) Cache class from scratch using a Doubly Linked List and a Hash Map. Ensure that both `get(key)` and `put(key, value)` operate in O(1) time complexity.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-08-28",
    "missionName": "Mission The 32",
    "company": "The MathCompany",
    "companyIcon": "📐",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - The MathCompany",
    "desc": "A data-driven task focusing on machine learning, data processing pipelines, or analytics visualization.",
    "tasks": [
      "Pre-process and clean the provided dataset to ensure data integrity.",
      "Develop a predictive model, AI algorithm, or analytics dashboard.",
      "Evaluate the model's accuracy, performance, or data processing speed.",
      "Document your methodology, results, and insights in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - The MathCompany\n\n**Scenario:** You are an engineer at The MathCompany. \n\n**Your Task:**\nImplement a rate-limited asynchronous task queue. Given an array of 100 URLs, write a function that fetches them concurrently, but strictly ensures that no more than 5 requests are in-flight at any given millisecond.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-08-31",
    "missionName": "Mission Jungroo 33",
    "company": "Jungroo AI labs",
    "companyIcon": "🧠",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Jungroo AI labs",
    "desc": "A data-driven task focusing on machine learning, data processing pipelines, or analytics visualization.",
    "tasks": [
      "Pre-process and clean the provided dataset to ensure data integrity.",
      "Develop a predictive model, AI algorithm, or analytics dashboard.",
      "Evaluate the model's accuracy, performance, or data processing speed.",
      "Document your methodology, results, and insights in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Jungroo AI labs\n\n**Scenario:** You are an engineer at Jungroo AI labs. \n\n**Your Task:**\nDesign a URL Shortener API (like bit.ly). Generate a unique Base62 encoded short code for long URLs. Implement a fast redirection endpoint, and track the total click count, storing analytics asynchronously without blocking the redirect.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-09-01",
    "missionName": "Mission Celeredge 34",
    "company": "Celeredge Inc",
    "companyIcon": "🕸️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Celeredge Inc",
    "desc": "A data-driven task focusing on machine learning, data processing pipelines, or analytics visualization.",
    "tasks": [
      "Pre-process and clean the provided dataset to ensure data integrity.",
      "Develop a predictive model, AI algorithm, or analytics dashboard.",
      "Evaluate the model's accuracy, performance, or data processing speed.",
      "Document your methodology, results, and insights in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Celeredge Inc\n\n**Scenario:** You are an engineer at Celeredge Inc. \n\n**Your Task:**\nWrite a generic deep object differ. Given two complex nested JSON objects (with arrays, dates, and nulls), write a recursive function that returns a strict patch object containing only the fields that were modified, added, or removed.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-09-02",
    "missionName": "Mission Caterpillar 35",
    "company": "Caterpillar Hackathon",
    "companyIcon": "🚜",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Caterpillar Hackathon",
    "desc": "A data-driven task focusing on machine learning, data processing pipelines, or analytics visualization.",
    "tasks": [
      "Pre-process and clean the provided dataset to ensure data integrity.",
      "Develop a predictive model, AI algorithm, or analytics dashboard.",
      "Evaluate the model's accuracy, performance, or data processing speed.",
      "Document your methodology, results, and insights in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Caterpillar Hackathon\n\n**Scenario:** You are an engineer at Caterpillar Hackathon. \n\n**Your Task:**\nBuild a scalable Chat Room backend using Server-Sent Events (SSE) or WebSockets. Allow users to subscribe to specific 'rooms', and broadcast messages to only the connected clients in that specific room.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-09-03",
    "missionName": "Mission IBM 36",
    "company": "IBM",
    "companyIcon": "☁️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Tech Giants & Security",
    "title": "Technical Challenge - IBM",
    "desc": "A high-performance task focused on enterprise-level scalability, security, and low-latency systems.",
    "tasks": [
      "Identify security vulnerabilities or performance bottlenecks in the given scenario.",
      "Implement robust security protocols or optimize the system for scale.",
      "Validate the solution against stress tests and security audits.",
      "Document your security improvements and scalability architecture in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - IBM\n\n**Scenario:** You are an engineer at IBM. \n\n**Your Task:**\nImplement Cross-Site Request Forgery (CSRF) protection from scratch. Generate a unique, cryptographically secure CSRF token per session. Require this token in a custom HTTP header for all POST/PUT/DELETE requests, and validate it strictly on the server.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-09-04",
    "missionName": "Mission Palo 37",
    "company": "Palo Alto Networks",
    "companyIcon": "🛡️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Tech Giants & Security",
    "title": "Technical Challenge - Palo Alto Networks",
    "desc": "A high-performance task focused on enterprise-level scalability, security, and low-latency systems.",
    "tasks": [
      "Identify security vulnerabilities or performance bottlenecks in the given scenario.",
      "Implement robust security protocols or optimize the system for scale.",
      "Validate the solution against stress tests and security audits.",
      "Document your security improvements and scalability architecture in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Palo Alto Networks\n\n**Scenario:** You are an engineer at Palo Alto Networks. \n\n**Your Task:**\nBuild a generic Webhook dispatch system. When an event occurs, your system must send an HTTP POST to a registered URL. Implement exponential retry logic for failed deliveries (HTTP 500s), and use an HMAC-SHA256 signature so the receiver can verify the payload's authenticity.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-09-07",
    "missionName": "Mission Oracle 38",
    "company": "Oracle OFSS",
    "companyIcon": "💽",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Tech Giants & Security",
    "title": "Technical Challenge - Oracle OFSS",
    "desc": "A high-performance task focused on enterprise-level scalability, security, and low-latency systems.",
    "tasks": [
      "Identify security vulnerabilities or performance bottlenecks in the given scenario.",
      "Implement robust security protocols or optimize the system for scale.",
      "Validate the solution against stress tests and security audits.",
      "Document your security improvements and scalability architecture in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Oracle OFSS\n\n**Scenario:** You are an engineer at Oracle OFSS. \n\n**Your Task:**\nDesign a secure password reset flow. Generate a high-entropy, time-limited (15 mins) reset token. Store a cryptographically hashed version of the token in the DB (not plain text). Verify the token upon the user clicking the link, and immediately invalidate it after use.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-09-08",
    "missionName": "Mission PhonePe 39",
    "company": "PhonePe",
    "companyIcon": "💸",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - PhonePe",
    "desc": "A product engineering task focusing on financial transactions, reliability, and enterprise software.",
    "tasks": [
      "Design a robust, fault-tolerant system for financial transactions or enterprise workflows.",
      "Implement the core API endpoints or transactional logic with ACID compliance.",
      "Handle potential failure states (e.g., race conditions, network drops).",
      "Document your database schema, API design, and failure handling in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - PhonePe\n\n**Scenario:** You are an engineer at PhonePe. \n\n**Your Task:**\nImplement a Subscription Billing engine. Write a cron-like script that runs daily. It must query all active subscriptions whose 'next_billing_date' is today, attempt to charge them via a mock Payment Gateway, and update their status to PAST_DUE if the payment fails, handling retries.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-09-09",
    "missionName": "Mission Societe 40",
    "company": "Societe Generale",
    "companyIcon": "🏦",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - Societe Generale",
    "desc": "A product engineering task focusing on financial transactions, reliability, and enterprise software.",
    "tasks": [
      "Design a robust, fault-tolerant system for financial transactions or enterprise workflows.",
      "Implement the core API endpoints or transactional logic with ACID compliance.",
      "Handle potential failure states (e.g., race conditions, network drops).",
      "Document your database schema, API design, and failure handling in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Societe Generale\n\n**Scenario:** You are an engineer at Societe Generale. \n\n**Your Task:**\nBuild a GraphQL API for an enterprise product catalog. Define strict schema types, queries, and mutations. Implement a DataLoader to solve the 'N+1 Query Problem' when fetching the associated categories and reviews for a list of products.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-09-10",
    "missionName": "Mission Commvault 41",
    "company": "Commvault",
    "companyIcon": "💾",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - Commvault",
    "desc": "A product engineering task focusing on financial transactions, reliability, and enterprise software.",
    "tasks": [
      "Design a robust, fault-tolerant system for financial transactions or enterprise workflows.",
      "Implement the core API endpoints or transactional logic with ACID compliance.",
      "Handle potential failure states (e.g., race conditions, network drops).",
      "Document your database schema, API design, and failure handling in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Commvault\n\n**Scenario:** You are an engineer at Commvault. \n\n**Your Task:**\nBuild a custom LRU (Least Recently Used) Cache class from scratch using a Doubly Linked List and a Hash Map. Ensure that both `get(key)` and `put(key, value)` operate in O(1) time complexity.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-09-11",
    "missionName": "Mission Bounteous 42",
    "company": "Bounteous x Accolite",
    "companyIcon": "🛍️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - Bounteous x Accolite",
    "desc": "A product engineering task focusing on financial transactions, reliability, and enterprise software.",
    "tasks": [
      "Design a robust, fault-tolerant system for financial transactions or enterprise workflows.",
      "Implement the core API endpoints or transactional logic with ACID compliance.",
      "Handle potential failure states (e.g., race conditions, network drops).",
      "Document your database schema, API design, and failure handling in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Bounteous x Accolite\n\n**Scenario:** You are an engineer at Bounteous x Accolite. \n\n**Your Task:**\nImplement a rate-limited asynchronous task queue. Given an array of 100 URLs, write a function that fetches them concurrently, but strictly ensures that no more than 5 requests are in-flight at any given millisecond.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-09-14",
    "missionName": "Mission Tata 43",
    "company": "Tata Consultancy Services",
    "companyIcon": "🏢",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Consulting & Services",
    "title": "Technical Challenge - Tata Consultancy Services",
    "desc": "A hands-on engineering task focused on resolving client requirements and optimizing consulting deliverables.",
    "tasks": [
      "Analyze the client's problem statement and identify technical requirements.",
      "Design a scalable system architecture or algorithmic solution for the service.",
      "Implement the core logic and test it against edge cases.",
      "Document your architecture, trade-offs, and technical decisions in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Tata Consultancy Services\n\n**Scenario:** You are an engineer at Tata Consultancy Services. \n\n**Your Task:**\nImplement an OAuth2 Authorization Code flow from scratch (without passport.js or high-level wrappers). Build the endpoints for /authorize, /token, and /userinfo, securely handling state, nonces, and JWT signing for a multi-tenant client portal.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-09-15",
    "missionName": "Mission Deloitte 44",
    "company": "Deloitte USI",
    "companyIcon": "📊",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Consulting & Services",
    "title": "Technical Challenge - Deloitte USI",
    "desc": "A hands-on engineering task focused on resolving client requirements and optimizing consulting deliverables.",
    "tasks": [
      "Analyze the client's problem statement and identify technical requirements.",
      "Design a scalable system architecture or algorithmic solution for the service.",
      "Implement the core logic and test it against edge cases.",
      "Document your architecture, trade-offs, and technical decisions in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Deloitte USI\n\n**Scenario:** You are an engineer at Deloitte USI. \n\n**Your Task:**\nBuild a custom 'Undo/Redo' history stack for a complex JSON configuration editor. Implement the Command Pattern in TypeScript so that every mutation (add, edit, delete) can be reverted or reapplied sequentially without data corruption.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-09-16",
    "missionName": "Mission Thorogood 45",
    "company": "Thorogood Associates",
    "companyIcon": "🗄️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Thorogood Associates",
    "desc": "A data-driven task focusing on machine learning, data processing pipelines, or analytics visualization.",
    "tasks": [
      "Pre-process and clean the provided dataset to ensure data integrity.",
      "Develop a predictive model, AI algorithm, or analytics dashboard.",
      "Evaluate the model's accuracy, performance, or data processing speed.",
      "Document your methodology, results, and insights in the README.md."
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "guide": "### Problem Statement: Technical Challenge - Thorogood Associates\n\n**Scenario:** You are an engineer at Thorogood Associates. \n\n**Your Task:**\nDesign a URL Shortener API (like bit.ly). Generate a unique Base62 encoded short code for long URLs. Implement a fast redirection endpoint, and track the total click count, storing analytics asynchronously without blocking the redirect.\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your `README.md`."
  },
  {
    "date": "2026-09-17",
    "missionName": "Mission Demo Day",
    "company": "Cohort 25MX",
    "companyIcon": "🏆",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Demo Day + Engineering Showcase",
    "desc": "The final day of the sprint. Present your engineering portfolio, demonstrate your skills, and showcase your capstone projects.",
    "tasks": [
      "Prepare your final presentation and project demonstration.",
      "Showcase your engineering growth and highlight your best missions.",
      "Review peers' projects and provide constructive feedback.",
      "Celebrate the completion of the 25MX 46-Day Engineering Sprint!"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "isSpecial": true,
    "guide": "### Demo Day Showcase\n\nPrepare a 5-minute presentation demonstrating your most complex engineering solution from the past 45 days. Highlight your architecture diagrams, the bottlenecks you overcame, and your exact Git commit history. Be ready for a live Q&A on your technical decisions."
  }
]

export function getMission(date: string): Mission | undefined {
  return MISSIONS_DATA.find(m => m.date === date)
}

export function getMissionsByWeek(week: number): Mission[] {
  return MISSIONS_DATA.filter(m => m.week === week)
}

export function getTodayMission(): Mission | undefined {
  const istTime = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }))
  const yyyy = istTime.getFullYear()
  const mm   = String(istTime.getMonth() + 1).padStart(2, '0')
  const dd   = String(istTime.getDate()).padStart(2, '0')
  const todayISO = `${yyyy}-${mm}-${dd}`
  return getMission(todayISO)
}

export function isMissionUnlocked(date: string): boolean {
  const istTime = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }))
  const yyyy = istTime.getFullYear()
  const mm   = String(istTime.getMonth() + 1).padStart(2, '0')
  const dd   = String(istTime.getDate()).padStart(2, '0')
  const todayISO = `${yyyy}-${mm}-${dd}`
  
  // A mission is unlocked if its date is less than or equal to today
  return date <= todayISO
}

export function getNextMission(activeDates: string[]): Mission | undefined {
  const activeSet = new Set(activeDates)
  return MISSIONS_DATA.find(m => !activeSet.has(m.date) && m.date > (activeDates[activeDates.length - 1] ?? ''))
}

export const ALL_MISSION_DATES = MISSIONS_DATA.map(m => m.date)
