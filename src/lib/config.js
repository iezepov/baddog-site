/**
 * All of these values are used throughout the site – for example,
 * in the <meta> tags, in the footer, and in the RSS feed.
 */

export const siteTitle = "Bad dog's blog";
export const siteDescription = "You've found my personal blog, cool!";
export const siteURL = 'baddog.ch';
export const siteLink = 'https://baddog.ch/';
export const siteAuthor = 'Ilya';

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 5;

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Blog',
		route: '/blog'
	},
	{
		title: 'Contact',
		route: '/contanct'
	}
];
