import { Routes } from '@angular/router'

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./layout/layout.component').then((c) => c.LayoutComponent),
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./pages/home/home.component').then(
                        (c) => c.HomeComponent
                    ),
            },
            {
                path: 'users',
                loadComponent: () =>
                    import('./pages/users/users.component').then(
                        (c) => c.UsersComponent
                    ),
            },

            {
                path: 'users/:id',
                loadComponent: () =>
                    import(
                        './pages/user-detailed/user-detailed.component'
                    ).then((c) => c.UserDetailedComponent),
            },
            {
                path: 'users/:id/posts',
                loadComponent: () =>
                    import('./pages/user-posts/user-posts.component').then(
                        (c) => c.UserPostsComponent
                    ),
            },
        ],
    },
]
