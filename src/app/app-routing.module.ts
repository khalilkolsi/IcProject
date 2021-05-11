import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component'
import { PlansComponent } from './plans/plans.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkspaceComponent } from './dashboard-content/workspace/workspace.component';
import { ProjectsComponent } from './dashboard-content/projects/projects.component';
import { MyProjectsComponent } from './dashboard-content/projects/my-projects/my-projects.component';
import { MyTasksComponent } from './dashboard-content/projects/my-tasks/my-tasks.component';
import { GantComponent } from './dashboard-content/projects/my-tasks/gant/gant.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  }, {
    path: 'home',
    component: HomePageComponent
  }, {
    path: 'plans',
    component: PlansComponent
  }, {
    path: 'sign-up',
    component: SignupComponent
  }, {
    path: 'login',
    component: LoginComponent
  },   {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'workspace',
        component: WorkspaceComponent
      }, {
        path: 'projects',
        component: ProjectsComponent
      },{
        path: 'gantt',
        component: GantComponent
      },
      {
        path: '**',
        redirectTo: 'workspace'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
