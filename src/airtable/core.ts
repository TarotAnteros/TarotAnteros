import Airtable from 'airtable'
import assert from 'assert'

const apiKey = process.env.AIRTABLE_API_KEY
assert(apiKey, 'AIRTABLE_API_KEY is not defined')

export const airtable = new Airtable({
	apiKey,
})
