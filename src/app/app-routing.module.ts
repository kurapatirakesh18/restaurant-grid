import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  { path: '', redirectTo: '/add-restaurant', pathMatch: 'full' }, 
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'restaurant',component:RestaurantComponent},
  {path:'about',component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
