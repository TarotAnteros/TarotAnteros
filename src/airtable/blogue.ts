import slugify from '@sindresorhus/slugify'
import { z } from 'zod'

import { airtable } from './core'

const textesDuSiteBase = airtable.base('appGoJm0yLoMjVSeC')

const schema = z.array(
	z
		.object({
			_rawJson: z.object({
				createdTime: z.string(),
			}),
			fields: z.object({
				Contenu: z.string(),
				Tags: z.array(z.string()).default([]),
				Titre: z.string(),
				Vignette: z
					.array(
						z.object({
							height: z.number(),
							url: z.string(),
							width: z.number(),
						}),
					)
					.default([]),
			}),
		})
		.transform((item) => ({
			...item.fields,
			date: item._rawJson.createdTime,
			slug: slugify(item.fields.Titre),
		})),
)

export type TPost = z.infer<typeof schema>[0]

// TODO: remove empty entries
export const blogueData = textesDuSiteBase('Blogue')
	.select()
	.all()
	.then(schema.parseAsync)
	.then((data) => data.reverse())
