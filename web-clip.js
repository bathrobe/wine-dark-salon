#!/usr/bin/env node

import { execSync } from "child_process"

const url = process.argv[2]

if (!url) {
  console.error("Usage: node web-clip.js <url>")
  console.error("       /clip <url>")
  process.exit(1)
}

// URL encode the URL parameter
const encodedUrl = encodeURIComponent(url)

try {
  const result = execSync(`curl -s "https://r.jina.ai/${encodedUrl}"`, { encoding: "utf8" })
  console.log(result)
} catch (error) {
  console.error("Error fetching content:", error.message)
  process.exit(1)
}
