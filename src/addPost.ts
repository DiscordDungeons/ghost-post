import GhostAdminAPI, { PostOrPage, PostParams, GhostAdminAPIOptions } from '@tryghost/admin-api'

export const addPost = async (opts: GhostAdminAPIOptions, data: PostParams): Promise<PostOrPage> => {
	const api = new GhostAdminAPI(opts)

	const post = await api.posts.add(data, { source: 'html' })


	return post
}
