import { z } from 'zod'

import { airtable } from './core'

const textesDuSiteBase = airtable.base('appGoJm0yLoMjVSeC')

const schema = z.array(
	z
		.object({
			fields: z.object({
				Contenu: z.string(),
				Titre: z.string(),
				URI: z.string(),
			}),
		})
		.transform((item) => item.fields),
)

export type TTexteDuSite = z.infer<typeof schema>[0]

// TODO: remove empty lines
export const textesDuSiteData = textesDuSiteBase('Textes du site')
	.select()
	.all()
	.then(schema.parseAsync)
