import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewJobComponent } from './components/new-job/new-job.component';
import { DetailJobComponent } from './components/detail-job/detail-job.component';
import { EditJobComponent } from './components/edit-job/edit-job.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'inicio', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'logout/:sure', component:LoginComponent},
  {path: 'crear/tarea', component:NewJobComponent},
  {path: 'editar/tarea/:id', component:EditJobComponent},
  {path: 'detalle/tarea/:id', component:DetailJobComponent},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
