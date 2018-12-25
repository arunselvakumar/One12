import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AdsenseModule } from 'ng2-adsense';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/root/header/header.component';
import { HomeComponent } from './components/home/home/home.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { SiteComponent } from './components/home/site/site.component';
import { BlogComponent } from './components/blog/blog/blog.component';
import { HelpComponent } from './components/help/help/help.component';
import { FeedbackComponent } from './components/feedback/feedback/feedback.component';
import { FilterComponent } from './components/home/filter/filter.component';
import { FeedsListComponent } from './components/home/feeds-list/feeds-list.component';
import { ImageCardComponent } from './components/shared/image-card/image-card.component';
import { TagsListComponent } from './components/home/tags-list/tags-list.component';
import { SidebarComponent } from './components/home/sidebar/sidebar.component';
import { PostComponent } from './components/post/post.component';
import { ProfileRootComponent } from './components/user/profile-root/profile-root.component';
import { ProfileHeaderComponent } from './components/user/profile-header/profile-header.component';
import { ProfileMastheadComponent } from './components/user/profile-masthead/profile-masthead.component';
import { ProfileDetailsComponent } from './components/user/profile-details/profile-details.component';
import { ProfileNavigationComponent } from './components/user/profile-navigation/profile-navigation.component';
import { ProfileScrapbookComponent } from './components/user/profile-scrapbook/profile-scrapbook.component';
import { ProfileScrapComponent } from './components/user/profile-scrapbook/profile-scrap/profile-scrap.component';
import { CommentCardComponent } from './components/shared/comment-card/comment-card.component';
import { AddPostComponent } from './components/modal/add-post/add-post.component';
import { TemplatesListComponent } from './components/modal/templates-list/templates-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    SiteComponent,
    BlogComponent,
    HelpComponent,
    FeedbackComponent,
    FilterComponent,
    FeedsListComponent,
    ImageCardComponent,
    TagsListComponent,
    SidebarComponent,
    PostComponent,
    ProfileRootComponent,
    ProfileHeaderComponent,
    ProfileMastheadComponent,
    ProfileDetailsComponent,
    ProfileNavigationComponent,
    ProfileScrapbookComponent,
    ProfileScrapComponent,
    CommentCardComponent,
    AddPostComponent,
    TemplatesListComponent
  ],
  imports: [
    AdsenseModule.forRoot({ adClient: 'ca-pub-6185517953080782', adSlot: 6187145078 }),
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
