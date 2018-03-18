import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from './pages/auth/auth.guard'
import { AuthComponent } from './pages/auth/auth.component'
import { SignInPageComponent } from './pages/auth/sign-in-page/sign-in-page.component'
import { SignOutPageComponent } from './pages/auth/sign-out-page/sign-out-page.component'
import { ClientsPageComponent } from './pages/auth/clients-page/clients-page.component'
import { InvoicesPageComponent } from './pages/auth/invoices-page/invoices-page.component'
import { SiteComponent } from './pages/site/site.component'
import { HomePageComponent } from './pages/site/home-page/home-page.component'
import { AboutPageComponent } from './pages/site/about-page/about-page.component'
import { ReferencesPageComponent } from './pages/site/references-page/references-page.component'
import { BlogPageComponent } from './pages/site/blog-page/blog-page.component'
import { ContactPageComponent } from './pages/site/contact-page/contact-page.component'
import { ImprintPageComponent } from './pages/site/imprint-page/imprint-page.component'
import { PrivacyPageComponent } from './pages/site/privacy-page/privacy-page.component'
import { NotFoundPageComponent } from './pages/site/not-found-page/not-found-page.component'

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'en'
    },
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'clients'
            },
            {
                path: 'signin',
                component: SignInPageComponent
            },
            {
                path: 'signout',
                component: SignOutPageComponent
            },
            {
                path: 'clients',
                canActivate: [AuthGuard],
                component: ClientsPageComponent
            },
            {
                path: 'invoices',
                canActivate: [AuthGuard],
                component: InvoicesPageComponent
            }
        ]
    },
    {
        path: ':language',
        component: SiteComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home'
            },
            {
                path: 'home',
                component: HomePageComponent
            },
            {
                path: 'about',
                component: AboutPageComponent
            },
            {
                path: 'references',
                component: ReferencesPageComponent
            },
            {
                path: 'blog',
                component: BlogPageComponent
            },
            {
                path: 'contact',
                component: ContactPageComponent
            },
            {
                path: 'imprint',
                component: ImprintPageComponent
            },
            {
                path: 'privacy',
                component: PrivacyPageComponent
            },
            {
                path: '**',
                component: NotFoundPageComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {}
