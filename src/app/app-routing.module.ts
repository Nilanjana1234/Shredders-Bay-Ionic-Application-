import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CustomerPage } from './customer/customer/customer.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'frontend',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'frontend',
    loadChildren: () => import('./frontend/frontend.module').then( m => m.FrontendPageModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer/customer.module').then( m => m.CustomerPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./customer/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'contact-us',
    children: [
      {
        path: 'contact-us',
        children: [
          {
            path: 'contact-us',
            loadChildren: () => import('./customer/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
          }
        ]
    }
  ],
},
{
  path: 'customer',
    component: CustomerPage,
    children: [
      {
        path: 'customer',
        children: [
          {
            path: '',
            loadChildren: './customer/customer/CustomerPage.module#CustomerPageModule'
          }
        ]
      },
    ]
  },
  {
    path: 'my-cart',
    loadChildren: () => import('./customer/my-cart/my-cart.module').then( m => m.MyCartPageModule)
  },
  {
    path: 'scrap-items',
    loadChildren: () => import('./customer/scrap-items/scrap-items.module').then( m => m.ScrapItemsPageModule)
  },
  {
    path: 'faqs',
    loadChildren: () => import('./customer/faqs/faqs.module').then( m => m.FaqsPageModule)
  },
  {
    path: 'my-account',
    loadChildren: () => import('./customer/my-account/my-account.module').then( m => m.MyAccountPageModule)
  },
  {
    path: 'my-account',
    children: [
      {
        path: 'my-account',
        children: [
          {
            path: 'my-account',
            loadChildren: () => import('./customer/my-account/my-account.module').then( m => m.MyAccountPageModule)
          }
        ]
    }
  ],
  },
  {
    path: 'notifications',
    loadChildren: () => import('./customer/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'terms-conditions',
    loadChildren: () => import('./customer/terms-conditions/terms-conditions.module').then( m => m.TermsConditionsPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./customer/my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./customer/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'my-addr',
    loadChildren: () => import('./customer/my-addr/my-addr.module').then( m => m.MyAddrPageModule)
  },
  {
    path: 'change-pass',
    loadChildren: () => import('./customer/change-pass/change-pass.module').then( m => m.ChangePassPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./customer/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./customer/forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

