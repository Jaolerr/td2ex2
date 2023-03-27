import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"accueil",component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
