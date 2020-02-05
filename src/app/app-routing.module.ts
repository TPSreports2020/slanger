import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { ErrorPageComponent } from './shared/error-page.component';
import { AuthComponent } from './auth/auth.component';
import { PostFormComponent } from './post-form/post-form.component';
import { SavedComponent } from './saved/saved.component';
import { AccountComponent } from './account/account.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    component: BrowseComponent
    // canActivate: [AuthGuard],
    // children: [
    //   { path: '', component: NoRecipeSelectedComponent},
    //   { path: 'new', component: RecipeEditComponent },
    //   { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService]},
    //   { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]} 
    // ]
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'post',
    component: PostFormComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'saved',
    component: SavedComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'account',
    component: AccountComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: 'Page not found!!' }
  },
  { path: '**', redirectTo: '/not-found' }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}