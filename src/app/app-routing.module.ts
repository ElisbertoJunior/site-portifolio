import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { ProjectsComponent } from './pages/projects/projects.component'
import { ContactComponent } from './pages/contact/contact.component'
import { CurriculumComponent } from './pages/curriculum/curriculum.component'

const routes: Routes = [
   {
    path: '',
    component: HomeComponent
   },
   {
    path: 'projects',
    component: ProjectsComponent
   },
   {
    path: 'contact',
    component: ContactComponent
   },
   {
    path: 'curriculum',
    component: CurriculumComponent
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
