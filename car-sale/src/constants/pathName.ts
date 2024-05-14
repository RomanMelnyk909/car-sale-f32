export const HOME = '/'
export const PRODUCT = '/Product'
export const CATEGORIES = '/categories'
export const BLOGS = '/blogs'
export const SINGLE_BLOG = '/blogs/:slug'
export const NOT_FOUND = '*'

export const singleBlogPathCreator = (slug: string) => `/blogs/${slug}`
