// import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AuthComponent } from './auth/auth.component';

export const APP_ROUTE: Route[] = [
  {
    path: "",
    component: BlogComponent,
    loadChildren: () => import("./blog/blog.route").then(m => m.BLOG_ROUTE)
  },
  {
    path: "auth",
    component: AuthComponent,
    loadChildren: () => import("./auth/auth.route").then(m => m.AUTH_ROUTE)
  }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
