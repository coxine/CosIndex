import { z } from 'zod'

export const SiteConfigSchema = z.object({
  siteTitle: z.string(),
  footerText: z.string(),
})

export type SiteConfig = z.infer<typeof SiteConfigSchema>
