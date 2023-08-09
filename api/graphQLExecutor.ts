export const graphQLExecutor = (token?: string) => {
	return async (request: string, variables: object) => {
		if (!process.env.NEXT_PUBLIC_CONTENT_URL) throw new Error('You must define NEXT_PUBLIC_CONTENT_URL.')

		const response = await fetch(process.env.NEXT_PUBLIC_CONTENT_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${token ?? process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
			},
			body: JSON.stringify({
				query: request,
				variables,
			}),
			next: { revalidate: 0 }
		})
		return await response.json()
	}
}
