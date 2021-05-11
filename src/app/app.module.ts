import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Pages
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PlansComponent } from './plans/plans.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RightSidebarComponent } from './layout/right-sidebar/right-sidebar.component';
import { LeftSidebarComponent } from './layout/left-sidebar/left-sidebar.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { WorkspaceComponent } from './dashboard-content/workspace/workspace.component';
import { ProjectsComponent } from './dashboard-content/projects/projects.component';
import { MyProjectsComponent } from './dashboard-content/projects/my-projects/my-projects.component';
import { MyTasksComponent } from './dashboard-content/projects/my-tasks/my-tasks.component';
import { ListComponent } from './dashboard-content/projects/my-tasks/list/list.component';
import { GantComponent } from './dashboard-content/projects/my-tasks/gant/gant.component';
import { Service } from './dashboard-content/projects/my-tasks/gant/gantt.service';
import { TaskInfoComponent } from './dashboard-content/projects/my-tasks/task-info/task-info.component';
import { ManagementComponent } from './dashboard-content/projects/my-tasks/management/management.component';
import { CMPVComponent } from './dashboard-content/projects/my-tasks/cmpv/cmpv.component';
import { DeadlineComponent } from './dashboard-content/projects/my-tasks/deadline/deadline.component';
import { DelivrableComponent } from './dashboard-content/projects/my-tasks/delivrable/delivrable.component';
import { StatsComponent } from './dashboard-content/projects/my-tasks/stats/stats.component';
import { GeneralityComponent } from './dashboard-content/projects/my-tasks/task-info/generality/generality.component';
import { OperationModeComponent } from './dashboard-content/projects/my-tasks/task-info/operation-mode/operation-mode.component';
import { FunctionComponent } from './dashboard-content/projects/my-tasks/task-info/function/function.component';


//DevExtreme
import {
  DxDataGridModule,
  DxBulletModule,
  DxSelectBoxModule,
  DxTagBoxModule, 
  DxTemplateModule,
  DxButtonModule,
  DxRadioGroupModule, 
  DxScrollViewModule, 
  DxSortableModule,
  DxPieChartModule,
  DxSparklineModule,
  DxTabsModule
} from 'devextreme-angular';

import { DxGanttModule } from 'devextreme-angular';

import{ DeadLineService } from "../app/dashboard-content/projects/my-tasks/deadline/deadline.service"


//NgxBootsrap
import { TabsModule, TabsetConfig } from 'ngx-bootstrap/tabs';
import { from } from 'rxjs';
if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PlansComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    RightSidebarComponent,
    LeftSidebarComponent,
    TopBarComponent,
    WorkspaceComponent,
    ProjectsComponent,
    MyProjectsComponent,
    MyTasksComponent,
    ListComponent,
    GantComponent,
    TaskInfoComponent,
    ManagementComponent,
    CMPVComponent,
    DeadlineComponent,
    DelivrableComponent,
    StatsComponent,
    GeneralityComponent,
    OperationModeComponent,
    FunctionComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    TabsModule,
    DxTagBoxModule,
    DxTemplateModule,
    DxButtonModule,
    DxDataGridModule,
    DxBulletModule,
    DxSelectBoxModule,
    DxGanttModule,
    DxRadioGroupModule,
    DxScrollViewModule, 
    DxSortableModule,
    DxPieChartModule,
    DxSparklineModule,
    DxTabsModule
  ],
  providers: [TabsetConfig, DeadLineService,  Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule)