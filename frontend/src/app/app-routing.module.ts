import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoCadastroComponent } from './componets/produto-cadastro/produto-cadastro.component';


const routes: Routes = [
  { path: 'app-produto-cadastro', component: ProdutoCadastroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
