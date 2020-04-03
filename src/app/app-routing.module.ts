import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebhomeComponent } from './components/webhome/webhome.component';
import { CursosComponent } from './components/cursos/cursos.component';


const routes: Routes = [
  { path:  "", component: WebhomeComponent },
  { path: "home", component: WebhomeComponent},
  { path: "cursos", component: CursosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
