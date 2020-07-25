import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { ProductsComponent } from './products/products.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SigninComponent } from './signin/signin.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactsComponent } from './contacts/contacts.component';
const routes: Routes = [
  {path: '', redirectTo:'products-edit',pathMatch:'full' },
  {path:'signin', component:SigninComponent},
  {path:'checkout', component: CheckoutComponent},
  {path:'contacts', component: ContactsComponent},
  {path: 'products', component: ProductsComponent},
  {path:'products-view', component: ProductViewComponent },
  { path: 'products-edit', component: ProductEditComponent},
  {path: 'search', component: SearchComponent},
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
