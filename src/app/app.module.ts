import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    ImageCardComponent
  ],
  imports: [
    AdsenseModule.forRoot({ adClient: 'ca-pub-6185517953080782', adSlot: 6187145078 }),
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
