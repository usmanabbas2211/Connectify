import { Route } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { FeedComponent } from './components/feed/feed.component';

export const appRoutes: Route[] = [
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'feed',
    component: FeedComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
