import { SiteConfigSchema } from '../schemas/site.schema'
import siteRaw from '../data/site.json'

const siteConfig = SiteConfigSchema.parse(siteRaw)

export const siteTitle = siteConfig.siteTitle
export const footerText = siteConfig.footerText
