# ghost-post
GitHub Action for publishing HTML to a [Ghost](https://github.com/TryGhost/Ghost) instance

# Usage

```yml
	- uses: DiscordDungeons/ghost-post@v1.0.0
	  with:
	    post_title: 'New update!'
		post_html: '<p>Content</p>'
		post_excerpt: 'Optional Excerpt'
		post_tags: 'Tag 1,Tag 2'
		ghost_url: ${{ secrets.GHOST_URL }}
		ghost_admin_key: ${{ secrets.GHOST_ADMIN_KEY }}
```

This example will send the HTML `<p>Content</p>` to the `GHOST_URL` parameter, as a draft.
# Inputs

## `post_title`

**Required** The title that the post will have

## `post_html`

**Required** The HTML content of the post

## `post_excerpt`

**Optional** An optional custom excerpt

## `post_tags`

**Optional** A list of tags, seperated by a comma (`,`)

## `ghost_url`

**Required** The URL of the Ghost instance the post will be published to

## `ghost_admin_key`

**Required** The admin key of your integration. For information about generating this, please refer to [here](https://ghost.org/docs/admin-api/#token-authentication)