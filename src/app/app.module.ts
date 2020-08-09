import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

// Import plugins
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { AvatarModule } from 'ngx-avatar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewJobComponent } from './components/new-job/new-job.component';
import { EditJobComponent } from './components/edit-job/edit-job.component';
import { DetailJobComponent } from './components/detail-job/detail-job.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// Import Material
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

// Import services
import { UserService } from './services/user.service';
import { JobsService } from './services/jobs.service';
import { LoginComponent } from './components/login/login.component';
import { SearchJobsPipe } from './pipes/search-jobs.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NewJobComponent,
    EditJobComponent,    
    DetailJobComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SearchJobsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    AngularFileUploaderModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    AvatarModule
  ],
  providers: [UserService, JobsService],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
