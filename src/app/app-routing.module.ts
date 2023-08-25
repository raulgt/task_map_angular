import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksmapComponent } from './pages/tasksmap/tasksmap.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './common/nopagefound/nopagefound.component';
import { UserResolver } from './resolvers/user.resolver';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'tasks', component: TasksmapComponent, resolve:{userDetail: UserResolver}},
  { path: ''   , redirectTo:'/login', pathMatch: 'full'},
  { path: '**', component: NopagefoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
