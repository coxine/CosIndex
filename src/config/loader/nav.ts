import { NavDataSchema } from '../schemas/nav.schema'
import navRaw from '../data/nav.json'

export const navData = NavDataSchema.parse(navRaw)
