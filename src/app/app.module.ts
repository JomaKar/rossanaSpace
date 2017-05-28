import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { exposInfoService } from './services/exposInfoService.srv';
import { imgsPresentationInfoService } from './services/imgsPrstService.srv';
import { windowWidthService } from './services/windowWidthService.srv';
import { gridItemHeightService } from './services/regularGridItemHeightService.srv';
import { workInfoService } from './services/workInfoService.srv';

import { ItemGalleryHeightDirective } from './directives/galleryItemHeight.dir';
import { BackgroundImageDirective } from './directives/backImgDir.dir';
import { InjectStyleDirective } from './directives/injectStyle.dir';

import { AppRouterModule } from './router.module';

import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.cmp';
import { BrandNavbar } from './navbar/homeBrand';
import { HeaderTitle } from './headerTitle/header.cmp';
import { MainFooter } from './footer/footer.cmp';
import { GalleryElement } from './galleryGrid/gallerElement.cmp';

import { ImagesListSection } from './sectionImgsPrst/imagesSection.cmp';
import { InnerNavigation } from './sectionImgsPrst/innerNavigation/innerNavbar.cmp';
import { ImagesList } from './sectionImgsPrst/presentationImgsList/imagesList.cmp';
import { ImagesListItem } from './sectionImgsPrst/presentationImgsList/imagesItem.cmp';

import { HomeComponent } from './home/home.cmp';

import { WorkContainerComponent } from './work/workContainer.cmp';
import { workAllSection } from './work/all/allContainer.cmp';
import { installationWorkSection } from './work/installation/installationWork.cmp';
import { paintWorkSection } from './work/paint/paintWork.cmp';
import { skulpturWorkSection } from './work/skulptur/skulpturWork.cmp';

import { ExposComponent } from './expos/expos.cmp';
import { BioComponent } from './bio/bio.cmp';
import { ContactComponent } from './contact/contact.cmp';


@NgModule({
  declarations: [
    ItemGalleryHeightDirective,
    BackgroundImageDirective,
    InjectStyleDirective,
    AppComponent,
    NavbarComponent,
    HeaderTitle,
    BrandNavbar,
    MainFooter,
    ImagesListSection,
    InnerNavigation,
    ImagesList,
    ImagesListItem,
    GalleryElement,
    HomeComponent,
    WorkContainerComponent,
    workAllSection,
    installationWorkSection,
    skulpturWorkSection,
    paintWorkSection,
    ExposComponent,
    BioComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule
  ],
  providers: [
    exposInfoService,
    imgsPresentationInfoService,
    windowWidthService,
    gridItemHeightService,
    workInfoService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
