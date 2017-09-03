import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdListModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MdProgressSpinnerModule } from '@angular/material';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import 'hammerjs';

import { DataService } from './services/data.service';

import { CreateTokenComponent } from './create-token/create-token.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FinalizeComponent } from './finalize/finalize.component';

const appRoutes: Routes = [
  { path: 'create-token', component: CreateTokenComponent },
  { path: 'finalize/:orderId', component: FinalizeComponent },
  { path: '',
    component: HomeComponent
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    CreateTokenComponent,
    HomeComponent,
    PageNotFoundComponent,
    FinalizeComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSidenavModule,
    MdListModule,
    MdInputModule,
    MdCardModule,
    FormsModule,
    MdProgressSpinnerModule,

    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
