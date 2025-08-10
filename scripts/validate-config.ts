#!/usr/bin/env node

import { readFileSync } from 'fs'
import { NavDataSchema } from '../src/config/schemas/nav.schema.ts'
import { SiteConfigSchema } from '../src/config/schemas/site.schema.ts'

const colors = {
  red: '\x1b[1;31m',
  green: '\x1b[1;32m',
  yellow: '\x1b[1;33m',
  reset: '\x1b[0m',
}

function validateJson(filePath, schema, name) {
  try {
    console.log(
      `${colors.yellow}正在检查: ${name} 配置文件格式...${colors.reset}`
    )

    const content = readFileSync(filePath, 'utf-8')
    const data = JSON.parse(content)

    const result = schema.safeParse(data)

    if (result.success) {
      console.log(`${colors.green}${name} 配置文件格式正确。${colors.reset}`)
      return true
    } else {
      console.log(`${colors.red}${name} 配置文件格式错误:${colors.reset}`)
      result.error.errors.forEach((error) => {
        const path = error.path.length > 0 ? ` at ${error.path.join('.')}` : ''
        console.log(`${colors.red}  - ${error.message}${path}${colors.reset}`)
      })
      return false
    }
  } catch (error) {
    console.log(
      `${colors.red}${name} 配置文件解析失败: ${error.message}${colors.reset}`
    )
    return false
  }
}

function main() {
  console.log(`${colors.yellow}开始验证配置文件格式...${colors.reset}`)

  let hasErrors = false

  // 验证 nav.json
  if (!validateJson('src/config/data/nav.json', NavDataSchema, 'Navigation')) {
    hasErrors = true
  }

  // 验证 site.json
  if (!validateJson('src/config/data/site.json', SiteConfigSchema, 'Site')) {
    hasErrors = true
  }

  if (hasErrors) {
    console.log(
      `${colors.red}配置文件验证失败，请修复上述错误后重试。${colors.reset}`
    )
    process.exit(1)
  } else {
    console.log(`${colors.green}所有配置文件格式正确。${colors.reset}`)
  }
}

main()
