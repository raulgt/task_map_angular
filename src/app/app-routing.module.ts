import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksmapComponent } from './pages/tasksmap/tasksmap.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './common/nopagefound/nopagefound.component';
import { UserResolver } from './resolvers/user.resolver';
import { AuthuserGuard } from './guards/authuser.guard';



const routes: Routes = [
  
  { path: 'task_map_angular/tasks', component: TasksmapComponent, resolve:{userDetail: UserResolver}, canActivate: [AuthuserGuard]},
  { path: 'task_map_angular/login', component: LoginComponent },
  { path: ''   , redirectTo:'/task_map_angular/login', pathMatch: 'full'},
  { path: '**', component: NopagefoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
