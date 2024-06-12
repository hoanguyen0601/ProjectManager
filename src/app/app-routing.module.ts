import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChiTietDuAnComponent } from './chi-tiet-du-an/chi-tiet-du-an.component';
import { DuanListComponent } from './duan-list/duan-list.component';
import { DuanSuaComponent } from './duan-sua/duan-sua.component';
import { DuanThemComponent } from './duan-them/duan-them.component';
import { HomeComponent } from './home/home.component';
import { NvListComponent } from './nv-list/nv-list.component';
import { NvSuaComponent } from './nv-sua/nv-sua.component';
import { NvThemComponent } from './nv-them/nv-them.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskSuaComponent } from './task-sua/task-sua.component';
import { TaskThemComponent } from './task-them/task-them.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'', component: HomeComponent, canActivate: [AuthGuard]},
  {path:'duan', component: DuanListComponent, canActivate: [AuthGuard]},
  {path:'task', component: TaskListComponent, canActivate: [AuthGuard]},
  {path:'nhanvien', component: NvListComponent, canActivate: [AuthGuard]},
  {path:'duanthem', component: DuanThemComponent, canActivate: [AuthGuard]},
  {path:'taskthem', component: TaskThemComponent, canActivate: [AuthGuard]},
  {path:'nhanvienthem', component: NvThemComponent, canActivate: [AuthGuard]},
  {path:'suaDA/:id', component: DuanSuaComponent, canActivate: [AuthGuard]},
  {path:'suaNV/:id', component: NvSuaComponent, canActivate: [AuthGuard]},
  {path:'suaTask/:id', component: TaskSuaComponent, canActivate: [AuthGuard]},
  {path:'chitietDA/:id', component: ChiTietDuAnComponent, canActivate: [AuthGuard]},
  {path:'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
