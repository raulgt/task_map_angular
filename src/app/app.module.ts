import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './common/nopagefound/nopagefound.component';
import { AppComponent } from './app.component';
import { TasksmapComponent } from './pages/tasksmap/tasksmap.component';
import { AppRoutingModule } from './app-routing.module';
import { TaskTableComponent } from './components/task-table/task-table.component';
import { LocationMapComponent } from './components/location-map/location-map.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './common/footer/footer.component';

import { HttpAuthBearerInterceptor } from './interceptors/http-auth-bearer.interceptor';
import { UserResolver } from './resolvers/user.resolver';
import { NavbarComponent } from './common/navbar/navbar.component';
import { APP_BASE_HREF } from '@angular/common';
import { LogoutModalComponent } from './common/modals/logout-modal/logout-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TasksmapComponent,
    NopagefoundComponent,
    /*old entry components  */
    TaskTableComponent,  
    LocationMapComponent, FooterComponent, NavbarComponent, LogoutModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [  
    {provide: HTTP_INTERCEPTORS, useClass: HttpAuthBearerInterceptor, multi: true},
    UserResolver,
     {provide: APP_BASE_HREF, useValue: '#/task_map_angular'}
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
