import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddonComponent } from './Admin/Addon/add-addon/add-addon.component';
import { EditAddonComponent } from './Admin/Addon/edit-addon/edit-addon.component';
import { ViewAddonComponent } from './Admin/Addon/view-addon/view-addon.component';
import { AddPostpaidComponent } from './Admin/Postpaid/add-postpaid/add-postpaid.component';
import { EditPostpaidComponent } from './Admin/Postpaid/edit-postpaid/edit-postpaid.component';
import { ViewPostpaidComponent } from './Admin/Postpaid/view-postpaid/view-postpaid.component';
import { AddPrepaidComponent } from './Admin/Prepaid/add-prepaid/add-prepaid.component';
import { EditPrepaidComponent } from './Admin/Prepaid/edit-prepaid/edit-prepaid.component';
import { ViewPrepaidComponent } from './Admin/Prepaid/view-prepaid/view-prepaid.component';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { AddonComponent } from './User/Addon/addon/addon.component';
import { Recharge1Component } from './User/Addon/recharge1/recharge1.component';
import { NotificationComponent } from './User/notification/notification.component';
import { PopularplansComponent } from './User/Popularplan/popularplans/popularplans.component';
import { RechargePostpaidComponent } from './User/Popularplan/recharge-postpaid/recharge-postpaid.component';
import { RechargeComponent } from './User/Popularplan/recharge/recharge.component';
import { AddReviewComponent } from './User/Review/add-review/add-review.component';
import { EditReviewComponent } from './User/Review/edit-review/edit-review.component';
import { ViewReviewComponent } from './User/Review/view-review/view-review.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'addReview',component:AddReviewComponent},
  {path:'viewReview',component:ViewReviewComponent},
  {path:'edit/:id',component:EditReviewComponent},
  {path:'addPrepaid',component:AddPrepaidComponent},
  {path:'editPrepaid/:id',component:EditPrepaidComponent},
  {path:'viewPrepaid',component:ViewPrepaidComponent},
  {path:'addPostpaid',component:AddPostpaidComponent},
  {path:'editPostpaid/:id',component:EditPostpaidComponent},
  {path:'viewPostpaid',component:ViewPostpaidComponent},
  {path:'addAddon',component:AddAddonComponent},
  {path:'editAddon/:id',component:EditAddonComponent},
  {path:'viewAddon',component:ViewAddonComponent},
  {path:'popularplans',component:PopularplansComponent},
  {path:'recharge/:id',component:RechargeComponent},
  {path:'recharge1/:id',component:RechargePostpaidComponent},
  {path:'addon',component:AddonComponent},
  {path:'recharge2/:id',component:Recharge1Component},
  {path:'notification',component:NotificationComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
