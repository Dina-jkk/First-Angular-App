import { Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { PortofilioComponent } from './component/portofilio/portofilio.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

export const routes: Routes = [
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent,title:'Home'},
{path:'about',component:AboutComponent,title:'About'},
{path:'portfolio',component:PortofilioComponent,title:'Portfolio'},
{path:'contact',component:ContactComponent,title:'Contact'},
{path:'**',component:NotFoundComponent}



];
