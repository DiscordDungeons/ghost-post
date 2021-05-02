import * as core from '@actions/core'
import GhostAdminAPI, { PostOrPage, PostParams } from '@tryghost/admin-api'

export const addPost = async (data: PostParams): Promise<PostOrPage> => {
	const api = new GhostAdminAPI({
		url: core.getInput('GHOST_URL', { required: true }),
		key: core.getInput('GHOST_ADMIN_KEY', { required: true }),
		version: "v3",
	})

	const post = await api.posts.add(data, { source: 'html' })


	return post
}
