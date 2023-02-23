import type {Route} from 'next';

interface Routes {
    name: string;
    path: Route;
}

export const routes: Routes[] = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Work',
        path: '/#work',
    },
    {
        name: 'Contact',
        path: '/#contact',
    },
    {
        name: 'About',
        path: '/about',
    },
    {
        name: 'Blog',
        path: '/blog',
    }
];