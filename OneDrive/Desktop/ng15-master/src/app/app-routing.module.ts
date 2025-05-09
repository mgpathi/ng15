import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcelCopyPasteComponent } from './components/excel-copy-paste/excel-copy-paste.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: 'copypaste',
    pathMatch: 'full',
    component: ExcelCopyPasteComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: '**',
    redirectTo: 'copypaste'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
