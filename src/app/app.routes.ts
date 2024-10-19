import { Routes } from '@angular/router'

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./layout/layout.component').then((c) => c.LayoutComponent),
        children: [
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
        ],
    },
]
