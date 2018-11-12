import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SiteComponent } from '../../components/home/site/site.component';
import { BlogComponent } from '../../components/blog/blog/blog.component';
import { HelpComponent } from '../../components/help/help/help.component';
import { FeedbackComponent } from '../../components/feedback/feedback/feedback.component';
import { PostComponent } from '../../components/post/post.component';
import { ProfileRootComponent } from 'src/app/components/user/profile-root/profile-root.component';

const rootRoutes: Routes = [
  { path: 'user/:userId', component: ProfileRootComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'help', component: HelpComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: '', component: SiteComponent },
  { path: 'home', redirectTo: '' },
  { path: 'home', redirectTo: '' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(rootRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
