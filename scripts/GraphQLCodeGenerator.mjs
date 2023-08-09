import { AsyncGenerator, loadRemoteSchema } from 'graphql-ts-client-codegen'

import { join } from 'path'

const generator = new AsyncGenerator({
	schemaLoader: async () => {
		return loadRemoteSchema('http://localhost:1481/content/financial-metrics-manager-3kjs/live', {
			Authorization: 'Bearer 89a719d23cf7080846fd67aa55ba5bea29894256',
		})
	},
	targetDir: join(process.cwd(), 'api/__generated'),
	scalarTypeMap: {
		Json: 'any',
	},
})
generator.generate()
