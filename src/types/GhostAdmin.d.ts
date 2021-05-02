

declare module '@tryghost/admin-api' {
	export interface GhostAdminAPIOptions {
		url: string
		/**
		 * Version of GhostAdminAPI
		 *
		 * Supported Versions: 'v2', 'v3', 'v4', 'canary'
		 */
		version: 'v2' | 'v3' | 'v4' | 'canary'
		key: string
	}

	export type Tag = {
		id: string
		name: string
		slug: string
		description: string | null
		feature_image: string | null
		visibility: 'public' | 'private'
		meta_title: string | null
		meta_description: string | null
		created_at: string
		updated_at: string
		url: string
	}
	
	export type Role = {

	}


	export type Author = {
		id: string
		name: string
		email: string | null
		profile_image: string | null
	
		slug: string | null
		
		cover_image: string | null
		bio: string | null
		website: string | null,
		location: string | null
		facebook: string | null,
		twitter: string | null
		accessibility: string | null
		status: string | null
		meta_title: string | null,
		meta_description: string | null,
		tour: string | null
		last_seen: string | null
		created_at: string | null
		updated_at: string | null
		roles: Role[],
		url: string
	}


	export type PostOrPage = {
		id: string,
		uuid: string,
		title: string,
		slug: string,
		mobiledoc: string,
		comment_id: string,
		feature_image?: string | null
		featured: boolean
		status: 'published' | 'draft'
		visibility: 'private' | 'public'
		created_at: string | null
		updated_at: string | null
		published_at: string | null
		custom_excerpt: string | null,
		codeinjection_head: string | null,
		codeinjection_foot: string | null,
		custom_template: string | null,
		canonical_url: string | null,
		send_email_when_published: boolean,
		tags: Tag[],
		authors: Author[]
		primary_author: Author
		primary_tag: Tag | null
		url: string
		excerpt: string | null,
		email: string | null,
		og_image: string | null,
		og_title: string | null,
		og_description: string | null,
		twitter_image: string | null,
		twitter_title: string | null,
		twitter_description: string | null,
		meta_title: string | null,
		meta_description: string | null,
		email_subject: string | null
	}

	export type PostParams = Record<string, any> & {
		title: string
		html?: string
		custom_excerpt?: string,
		tags?: string | string[]
	}
	
	type PostOptions = {
		source: 'html' | 'mobiledoc'
	}
	
	export interface GhostAPI {
		posts: {
			browse: Promise<PostOrPage[]>
			read: Promise<PostOrPage>
			add(data: PostParams): Promise<PostOrPage>
			add(data: PostParams, options: PostOptions): Promise<PostOrPage>
			edit: Promise<PostOrPage>
			delete: Promise<PostOrPage>
		},
		pages: {
			browse: Promise<PostOrPage[]>
			read: Promise<PostOrPage>
			add(data: PostOrPage): Promise<PostOrPage>
			edit: Promise<PostOrPage>
			delete: Promise<PostOrPage>
		},
		images: {
			upload: Promise<void>
		}
		tags: {
			browse: Promise<Tag>
		}
	}

	declare const GhostAdminAPI: {
		(options: GhostAdminAPIOptions): GhostAPI;
		new(options: GhostAdminAPIOptions): GhostAPI;
	}

	export default GhostAdminAPI
}