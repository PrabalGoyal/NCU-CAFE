// import { CartSummaryComponent } from './navbar/cartsummary.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { StoreFirstGuard } from "./storeFirst.guard";
import { CartDetailComponent } from './navbar/cardetail.component';
// import { CheckoutComponent } from './navbar/checkout.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // AdminComponent,
    NavbarComponent,
    CartDetailComponent,
    // CheckoutComponent,
    // CartSummaryComponent
    

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'admin', loadChildren:'./admin/admin.module#AdminModule'},
      {path:'cart',component:CartDetailComponent},
      // {path:'checkout',component:CheckoutComponent},
      {path:'**',redirectTo:''}
    ])
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
