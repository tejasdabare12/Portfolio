import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { DownloadComponent } from './download/download.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
import { SharedTittleComponent } from './shared-tittle/shared-tittle.component';
import { SharedResumeTemplateComponent } from './shared-resume-template/shared-resume-template.component';
import { SharedSkillsTemplateComponent } from './shared-skills-template/shared-skills-template.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { SideNavbarComponent } from "./side-navbar/side-navbar.component";
import { ProjectsComponent } from './projects/projects.component';
import { CentralSeviceService } from './Services/central-sevice.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    DownloadComponent,
    MainPageComponent,
    ResumeComponent,
    AboutComponent,
    SharedTittleComponent,
    SharedResumeTemplateComponent,
    SharedSkillsTemplateComponent,
    SideNavbarComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
