import { airtable } from './core'
import { z } from 'zod'
import slugify from '@sindresorhus/slugify'

const textesDuSiteBase = airtable.base('appGoJm0yLoMjVSeC')

const schema = z.array(
	z
		.object({
			_rawJson: z.object({
				createdTime: z.string(),
			}),
			fields: z.object({
				Titre: z.string(),
				Tags: z.array(z.string()).default([]),
				Contenu: z.string(),
				Vignette: z
					.array(
						z.object({
							url: z.string(),
							width: z.number(),
							height: z.number(),
						}),
					)
					.default([]),
			}),
		})
		.transform((item) => ({
			...item.fields,
			slug: slugify(item.fields.Titre),
			date: item._rawJson.createdTime,
		})),
)

export type TPost = z.infer<typeof schema>[0]

// TODO: remove empty entries
export const blogueData = textesDuSiteBase('Blogue')
	.select()
	.all()
	.then(schema.parseAsync)
	.then((data) => data.reverse())
