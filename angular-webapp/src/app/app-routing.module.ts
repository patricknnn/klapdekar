import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddvideoComponent } from './components/addvideo/addvideo.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { VideogalleryComponent } from './components/videogallery/videogallery.component';

const routes: Routes = [
  // Redirect root to dashboard
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  // Page redirects
  { path: 'home', component: DashboardComponent },
  { path: 'videos', component: VideogalleryComponent },
  { path: 'addvideo', component: AddvideoComponent },

  // 404 redirect
  { path: '**', redirectTo: 'page-not-found' },
  { path: 'page-not-found', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
