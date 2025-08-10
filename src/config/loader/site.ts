import { SiteConfigSchema } from '../schemas/site.schema'
import siteRaw from '../data/site.json'

const siteConfig = SiteConfigSchema.parse(siteRaw)

export const siteTitle = siteConfig.siteTitle
export const isShortLinkEnabled = siteConfig.isShortLinkEnabled
export const shortLinkBaseUrl = siteConfig.shortLinkBaseUrl
export const footerText = siteConfig.footerText
