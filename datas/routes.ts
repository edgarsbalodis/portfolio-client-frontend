interface Routes {
    HOME: string;
    WORK: string;
    CONTACT: string;
    ABOUT: string;
    BLOG: string;
    BLOG_POST: (slug: string) => string;
}

export const routes: Routes = {
    HOME: '/',
    WORK: '/#work',
    CONTACT: '/#contact',
    ABOUT: '/about',
    BLOG: '/blog',
    BLOG_POST: (slug: string) => `/blog/${slug}`,
};