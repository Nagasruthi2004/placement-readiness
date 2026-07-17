import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.join(__dirname, '..')
const missionsFilePath = path.join(rootDir, 'lib', 'missions.ts')

let missionsContent = fs.readFileSync(missionsFilePath, 'utf8')

const arrayRegex = /export const MISSIONS_DATA: Mission\[\] = (\[[\s\S]*?\])\n\nexport function getMission/
const match = missionsContent.match(arrayRegex)

if (!match) {
  console.error("Could not find MISSIONS_DATA array in lib/missions.ts")
  process.exit(1)
}

let missionsData = JSON.parse(match[1])

// We need 46 unique medium/hard problem statements. 
// We will assign them based on the theme to make sure they match the company's domain.

const THEME_BANKS = {
  'Consulting & Services': [
    "Build a dynamic JSON-driven form generator in React/Next.js that renders a complex nested questionnaire for a consulting client. The schema should enforce validation (e.g., age > 18) and support conditional logic (if 'Employed' is checked, show 'Company Name' field).",
    "Design and implement a robust API rate-limiting middleware in Express.js using Redis. The client requires a sliding window algorithm that allows exactly 100 requests per minute per IP, returning a 429 status code with a 'Retry-After' header if exceeded.",
    "Write a script that parses a massive 1GB log file stream without loading it entirely into memory (use Node.js Streams or Python Generators). Extract all HTTP 500 error traces, anonymize any PII (email/IP addresses) using Regex, and output a clean JSON summary report.",
    "Create a microservice that generates PDF invoices dynamically from JSON data using a library like Puppeteer or ReportLab. The service must support custom HTML templates, handle pagination gracefully, and upload the final PDF to a mock S3 bucket.",
    "Develop a real-time 'Status Dashboard' backend. Create a WebSocket server that receives simulated server health metrics (CPU, Memory) every second from 5 different 'nodes'. Aggregate this data and broadcast it to connected frontend clients with less than 50ms latency.",
    "Implement an OAuth2 Authorization Code flow from scratch (without passport.js or high-level wrappers). Build the endpoints for /authorize, /token, and /userinfo, securely handling state, nonces, and JWT signing for a multi-tenant client portal.",
    "Build a custom 'Undo/Redo' history stack for a complex JSON configuration editor. Implement the Command Pattern in TypeScript so that every mutation (add, edit, delete) can be reverted or reapplied sequentially without data corruption.",
    "Design a job queuing system using a database (e.g., PostgreSQL). Implement a worker script that polls for 'pending' jobs, locks them using transaction-level locking (FOR UPDATE SKIP LOCKED) to prevent duplicate execution, processes them, and marks them as 'completed' or 'failed'.",
    "Build a localized CMS backend. Given a single piece of content, design the database schema and API to support 50+ languages with fallback locales (e.g., if es-MX is missing, fallback to es, then en). Implement an endpoint that retrieves the fully resolved translated content.",
    "Create a dependency resolution algorithm (like npm or apt). Given a JSON array of packages where each package lists its required dependencies, write a topological sort algorithm to determine the exact installation order. Detect and throw a specific error if a circular dependency exists."
  ],
  'Data, AI & Analytics': [
    "Implement a K-Means Clustering algorithm from scratch (no Scikit-learn). Given a 2D dataset of customer coordinates, cluster them into K distinct zones. Output the final centroid coordinates and visualize the result (or print the clustered arrays).",
    "Build a predictive text Markov Chain generator. Ingest a large text corpus (e.g., Shakespeare). Build a transition probability matrix, and write a function that generates a 100-word paragraph of readable, procedurally generated text based on the corpus.",
    "Write a Pandas/Polars data cleaning pipeline. Ingest a messy CSV with missing dates, negative prices, and duplicate IDs. Impute missing dates using forward-fill, cap prices at the 99th percentile, remove duplicates, and output a strict, strongly-typed Parquet file.",
    "Develop a TF-IDF (Term Frequency - Inverse Document Frequency) search engine. Given a local directory of 100 text files, index them, and write a search function that takes a query string and returns the top 5 most relevant files ranked by TF-IDF score.",
    "Build a sentiment analysis API. Integrate with a lightweight NLP library (or use an LLM API). Receive a batch array of 50 customer reviews in a single POST request, process them asynchronously, and return a grouped JSON object categorizing them into Positive, Neutral, and Negative.",
    "Create a Data Pipeline DAG (Directed Acyclic Graph) executor. Write a script that reads a JSON definition of 5 tasks (Extract, Transform A, Transform B, Join, Load). Execute independent tasks in parallel, and wait for prerequisites to finish before running dependent tasks.",
    "Implement an Anomaly Detection script using Z-Scores. Read a time-series dataset of server response times. Identify any data points that are more than 3 standard deviations from a rolling window mean, and output an alert payload for each anomaly.",
    "Build a recommendation engine using Collaborative Filtering. Given a matrix of User-Item ratings (1-5 stars), calculate the cosine similarity between users. Predict the missing ratings for a target user and recommend the top 3 items they haven't seen yet.",
    "Write a web scraper using Playwright or Puppeteer that circumvents basic anti-bot protections. Navigate to an e-commerce page, extract the product name, price, and stock status for 20 items, handle pagination, and save the structured data to a SQLite database.",
    "Design a scalable metrics aggregation pipeline. Simulate incoming IoT temperature data at 1000 requests/sec. Buffer these events in memory and write them to the database in bulk batches every 5 seconds to reduce database IOPS, ensuring zero data loss during the flush."
  ],
  'Tech Giants & Security': [
    "Implement a robust JWT (JSON Web Token) authentication system. Create your own function to sign and verify RS256 (asymmetric RSA keys) JWTs. The token must include strict expiration (exp) and issuer (iss) claims. Create a middleware that rejects expired or tampered tokens.",
    "Build a secure file upload service. Accept an image upload via multipart/form-data. Validate the file's 'Magic Bytes' (not just the extension) to ensure it's truly a PNG/JPEG. Limit size to 2MB, sanitize the filename, and store it safely without directory traversal vulnerabilities.",
    "Design and implement a Role-Based Access Control (RBAC) matrix. Create an API with three endpoints. Users can have roles like 'Admin', 'Editor', and 'Viewer'. Use a bitmask (e.g., 1 for Read, 2 for Write, 4 for Delete) to validate if the requesting user has permission for the action.",
    "Implement a distributed locking mechanism using Redis. Write a script where multiple concurrent workers try to run a 'cron job', but the Redis lock ensures that exactly one worker executes it. Handle edge cases like the worker crashing before releasing the lock (use TTLs).",
    "Build a defense mechanism against Brute Force attacks. Track failed login attempts per IP address in a fast cache. If an IP fails 5 times within 10 minutes, implement an exponential backoff lockout (e.g., blocked for 1 min, then 5 mins, then 1 hour).",
    "Write a comprehensive SQL Injection vulnerability patch. Take an existing intentionally vulnerable codebase (provided conceptually) that uses string concatenation for queries. Rewrite the entire data layer to use strict Parameterized Queries and ORM query builders, preventing all injections.",
    "Implement Cross-Site Request Forgery (CSRF) protection from scratch. Generate a unique, cryptographically secure CSRF token per session. Require this token in a custom HTTP header for all POST/PUT/DELETE requests, and validate it strictly on the server.",
    "Build a generic Webhook dispatch system. When an event occurs, your system must send an HTTP POST to a registered URL. Implement exponential retry logic for failed deliveries (HTTP 500s), and use an HMAC-SHA256 signature so the receiver can verify the payload's authenticity.",
    "Design a secure password reset flow. Generate a high-entropy, time-limited (15 mins) reset token. Store a cryptographically hashed version of the token in the DB (not plain text). Verify the token upon the user clicking the link, and immediately invalidate it after use.",
    "Implement Content Security Policy (CSP) headers for a Next.js application. Configure strict directives that completely disable inline scripts (`unsafe-inline`), restrict image sources to specific CDNs, and block all framing (X-Frame-Options equivalent) to prevent Clickjacking."
  ],
  'FinTech, Product & Enterprise': [
    "Build a double-entry bookkeeping ledger. Every financial transaction must create two entries (a debit and a credit) that perfectly balance to zero. Implement an API that transfers money between User A and User B, enforcing strict ACID properties using database transactions.",
    "Implement Idempotency for a Payment API. Clients will send a unique 'Idempotency-Key' header. If the exact same request is sent twice (e.g. network timeout retry), your server must intercept it, skip processing, and return the cached successful response from the first attempt.",
    "Design a complex shopping cart pricing engine. The cart receives an array of items. Implement rules for: 'Buy 1 Get 1 Free', '10% off orders over $100', and complex tax calculations based on regional zip codes. Ensure all float math uses precise integer representations (cents) to avoid rounding errors.",
    "Build an Audit Log tracking system. For a given sensitive database table (e.g., Users), write a system (via DB Triggers or Application Layer) that records every INSERT, UPDATE, and DELETE. The log must capture the exact 'before' and 'after' JSON state, the timestamp, and the actor's ID.",
    "Implement a scalable Pagination API using Keyset Pagination (Cursor-based). Instead of using standard SQL OFFSET (which gets slow on large datasets), design an endpoint that takes a 'next_cursor' parameter to efficiently fetch the next 50 rows using indexed column sorting.",
    "Create a multi-currency wallet system. Fetch real-time exchange rates from a public API, cache them for 5 minutes, and allow a user to convert their balance from USD to EUR. Ensure thread safety so concurrent conversion requests do not result in a negative or duplicated balance.",
    "Build a robust CSV Bulk Import tool. Accept a CSV upload of 50,000 product records. Process the file asynchronously. Validate each row (price > 0, name required). Insert valid rows into the database and generate a downloadable 'Error Report' CSV containing only the rows that failed validation.",
    "Design a state machine for an Order Fulfillment process. Define states: PENDING, PAID, SHIPPED, DELIVERED, CANCELLED. Enforce strict transition rules (e.g., cannot transition from PENDING directly to SHIPPED). Throw explicit domain errors if an invalid transition is attempted.",
    "Implement a Subscription Billing engine. Write a cron-like script that runs daily. It must query all active subscriptions whose 'next_billing_date' is today, attempt to charge them via a mock Payment Gateway, and update their status to PAST_DUE if the payment fails, handling retries.",
    "Build a GraphQL API for an enterprise product catalog. Define strict schema types, queries, and mutations. Implement a DataLoader to solve the 'N+1 Query Problem' when fetching the associated categories and reviews for a list of products."
  ]
}

// Fallback bank if a theme runs out or is unknown
const GENERIC_BANK = [
  "Build a custom LRU (Least Recently Used) Cache class from scratch using a Doubly Linked List and a Hash Map. Ensure that both `get(key)` and `put(key, value)` operate in O(1) time complexity.",
  "Implement a rate-limited asynchronous task queue. Given an array of 100 URLs, write a function that fetches them concurrently, but strictly ensures that no more than 5 requests are in-flight at any given millisecond.",
  "Design a URL Shortener API (like bit.ly). Generate a unique Base62 encoded short code for long URLs. Implement a fast redirection endpoint, and track the total click count, storing analytics asynchronously without blocking the redirect.",
  "Write a generic deep object differ. Given two complex nested JSON objects (with arrays, dates, and nulls), write a recursive function that returns a strict patch object containing only the fields that were modified, added, or removed.",
  "Build a scalable Chat Room backend using Server-Sent Events (SSE) or WebSockets. Allow users to subscribe to specific 'rooms', and broadcast messages to only the connected clients in that specific room."
]

// Counters for themes
const themeCounters = {
  'Consulting & Services': 0,
  'Data, AI & Analytics': 0,
  'Tech Giants & Security': 0,
  'FinTech, Product & Enterprise': 0
}
let genericCounter = 0

missionsData = missionsData.map((mission, index) => {
  if (index === 0) {
    mission.guide = "### Day 1 Operational Task\n\nYour goal today is not to write complex code, but to master the Git workflow.\n1. **Fork** this repository to your own account.\n2. **Clone** it locally.\n3. **Create your folder** at `activities/2026-07-16/YOUR_ROLL_NUMBER/`.\n4. **Create** a `profile.md` file introducing yourself.\n5. **Push** to your fork and open a **Pull Request** to the main repository. Do NOT edit any files outside your folder!"
    return mission
  }

  if (mission.isSpecial) {
    mission.guide = "### Demo Day Showcase\n\nPrepare a 5-minute presentation demonstrating your most complex engineering solution from the past 45 days. Highlight your architecture diagrams, the bottlenecks you overcame, and your exact Git commit history. Be ready for a live Q&A on your technical decisions."
    return mission
  }

  const theme = mission.weekTheme
  let assignedGuide = ""

  if (THEME_BANKS[theme] && themeCounters[theme] < THEME_BANKS[theme].length) {
    assignedGuide = THEME_BANKS[theme][themeCounters[theme]]
    themeCounters[theme]++
  } else {
    // fallback to generic
    assignedGuide = GENERIC_BANK[genericCounter % GENERIC_BANK.length]
    genericCounter++
  }

  mission.guide = `### Problem Statement: ${mission.title}\n\n**Scenario:** You are an engineer at ${mission.company}. \n\n**Your Task:**\n${assignedGuide}\n\n**Deliverables:** Implement the solution in code, and explain your architectural design and Big-O trade-offs in your \`README.md\`.`
  
  return mission
})

const updatedJSON = JSON.stringify(missionsData, null, 2)
missionsContent = missionsContent.replace(arrayRegex, () => `export const MISSIONS_DATA: Mission[] = ${updatedJSON}\n\nexport function getMission`)

fs.writeFileSync(missionsFilePath, missionsContent, 'utf8')
console.log("Successfully injected unique problem statement guides into all 46 missions!")
