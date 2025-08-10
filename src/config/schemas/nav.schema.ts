import { z } from 'zod'

export const NavDataSchema = z.array(
  z.object({
    title: z.string(),
    desc: z.string().optional(),
    items: z
      .array(
        z.object({
          name: z.string(),
          link: z.string(),
          desc: z.string().optional(),
        })
      )
      .nonempty(),
  })
)

export type NavData = z.infer<typeof NavDataSchema>
