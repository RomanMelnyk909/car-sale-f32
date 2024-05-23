const DEFAULT_API_URL = "https://roman.itstep.click/api/"

export const blogsList: string = `${DEFAULT_API_URL}Blogs/list`;
export const addNewPost: string = `${DEFAULT_API_URL}Blogs/add`;
export const getBlogBySlug = (slug) => `${DEFAULT_API_URL}Blogs/get/${slug}`;
export const editBlog: string = `${DEFAULT_API_URL}Blogs/edit`;
export const deleteBlog = (id: number) => `${DEFAULT_API_URL}Blogs/delete/${id}`;

export const productsList: string = "https://roman.itstep.click/api/Products/list"
export const categoriesList: string = "https://roman.itstep.click/api/Categories/list"