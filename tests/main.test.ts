import { GhostAdminAPIOptions, PostParams } from '@tryghost/admin-api'
import * as core from '@actions/core'

import dotenv from 'dotenv'

dotenv.config()

import t from 'tap'

import { addPost } from '../src/addPost'

const params: PostParams = {
	title: core.getInput('POST_TITLE', { required: true }),
	html: core.getInput('POST_HTML', { required: true }),
	custom_excerpt: core.getInput('POST_EXCERPT'),
	tags: core.getInput('POST_TAGS').split(','),
}

const options: GhostAdminAPIOptions = {
	url: core.getInput('GHOST_URL', { required: true }),
	key: core.getInput('GHOST_ADMIN_KEY', { required: true }),
	version: "v3",
}

t.test('Params are set', async t => {
	t.plan(4)

	t.test('Title is set', tt => {
		tt.plan(3)
		tt.not(params.title, '', 'Params title is not empty')
		tt.not(params.title, null, 'Params title is not null')
		tt.not(params.title, undefined, 'Params title is not undefined')
	})

	t.test('HTML is set', tt => {
		tt.plan(3)

		tt.not(params.html, '', 'Params html is not empty')
		tt.not(params.html, null, 'Params html is not null')
		tt.not(params.html, undefined, 'Params html is not undefined')
	})

	t.test('Custom Excerpt is set', tt => {
		tt.plan(3)

		tt.not(params.custom_excerpt, '', 'Params custom excerpt is not empty')
		tt.not(params.custom_excerpt, null, 'Params custom excerpt is not null')
		tt.not(params.custom_excerpt, undefined, 'Params custom excerpt is not undefined')
	})

	t.test('Tags are set', tt => {
		tt.plan(1)

		tt.not(params.tags, [], 'Params tags is not empty')
	})
})

t.test('Adds a post with excerpt', async t => {
	t.plan(3)
	const post = await addPost(options, params)
	
	t.equal(post.title, params.title, `Post title is ${params.title}`)
	t.equal(post.status, 'draft', `Post status is draft`)

	t.equal(post.custom_excerpt, params.custom_excerpt, `Custom excerpt is ${params.custom_excerpt || ''}`)

	console.log("t passing 2", t.passing())

})

t.test('Adds a post without excerpt', async t => {
	t.plan(3)

	delete params.custom_excerpt

	const post = await addPost(options, params)

	t.equal(post.title, params.title, `Post title is ${params.title}`)
	t.equal(post.status, 'draft', `Post status is draft`)
	t.equal(post.custom_excerpt, null, 'Custom excerpt is null')
})