
import * as core from '@actions/core'
import { PostParams } from '@tryghost/admin-api'
import { addPost } from './addPost'

const params: PostParams = {
	title: core.getInput('POST_TITLE', { required: true }),
	html: core.getInput('POST_HTML', { required: true }),
	custom_excerpt: core.getInput('POST_EXCERPT'),
	tags: core.getInput('POST_TAGS').split(','),
}

async function run(): Promise<void> {
	try {
		const post = await addPost(params)

		core.setOutput('postId', post.id)
	} catch (error) {
		core.setFailed(error.message)
	}
}

run()