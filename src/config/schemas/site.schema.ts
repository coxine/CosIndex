import { z } from 'zod'

export const SiteConfigSchema = z.object({
  siteTitle: z.string(),
  isShortLinkEnabled: z.boolean(),
  shortLinkBaseUrl: z.url(),
  footerText: z.string(),
})

export type SiteConfig = z.infer<typeof SiteConfigSchema>
