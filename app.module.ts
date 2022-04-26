import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';


import { RouterModule, Routes } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';

import { AddReviewComponent } from './User/Review/add-review/add-review.component';
import { EditReviewComponent } from './User/Review/edit-review/edit-review.component';
import { ViewReviewComponent } from './User/Review/view-review/view-review.component';
import { UserNavbarComponent } from './user/user-navbar/user-navbar.component';
import { AdminNavbarComponent } from './Admin/admin-navbar/admin-navbar.component';
import { AddAddonComponent } from './Admin/Addon/add-addon/add-addon.component';
import { EditAddonComponent } from './Admin/Addon/edit-addon/edit-addon.component';
import { ViewAddonComponent } from './Admin/Addon/view-addon/view-addon.component';
import { AddPrepaidComponent } from './Admin/Prepaid/add-prepaid/add-prepaid.component';
import { EditPrepaidComponent } from './Admin/Prepaid/edit-prepaid/edit-prepaid.component';
import { ViewPrepaidComponent } from './Admin/Prepaid/view-prepaid/view-prepaid.component';
import { AddPostpaidComponent } from './Admin/Postpaid/add-postpaid/add-postpaid.component';
import { EditPostpaidComponent } from './Admin/Postpaid/edit-postpaid/edit-postpaid.component';
import { ViewPostpaidComponent } from './Admin/Postpaid/view-postpaid/view-postpaid.component';
import { PopularplansComponent } from './User/Popularplan/popularplans/popularplans.component';
import { RechargeComponent } from './User/Popularplan/recharge/recharge.component';
import { RechargePostpaidComponent } from './User/Popularplan/recharge-postpaid/recharge-postpaid.component';
import { AddonComponent } from './User/Addon/addon/addon.component';
import { Recharge1Component } from './User/Addon/recharge1/recharge1.component';
import { NotificationComponent } from './User/notification/notification.component';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    AddReviewComponent,
    EditReviewComponent,
    ViewReviewComponent,
    UserNavbarComponent,
    AdminNavbarComponent,
    AddAddonComponent,
    EditAddonComponent,
    ViewAddonComponent,
    AddPrepaidComponent,
    EditPrepaidComponent,
    ViewPrepaidComponent,
    AddPostpaidComponent,
    EditPostpaidComponent,
    ViewPostpaidComponent,
    PopularplansComponent,
    RechargeComponent,
    RechargePostpaidComponent,
    AddonComponent,
    Recharge1Component,
    NotificationComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule,
    MatSortModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
