import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PictureComponent } from './picture/picture.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'bilder',
  },
  {
    path: 'bilder',
    pathMatch: 'full',
    component: PictureComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
