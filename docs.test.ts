import { assertStringIncludes } from 'https://deno.land/std@0.210.0/assert/mod.ts'

Deno.test('The docs contain the text "hello, world".', async () => {
	const readme = await Deno.readTextFile('./docs.md')
	
	assertStringIncludes(readme, 'hello, world')
})
