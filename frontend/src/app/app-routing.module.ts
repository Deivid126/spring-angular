import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovimentacaoResultadosComponent } from './componets/movimentacao-resultados/movimentacao-resultados.component';
import { CreateMovimentacaoComponent } from './pages/create-movimentacao/create-movimentacao.component';
import { CreateProtudosComponent } from './pages/create-protudos/create-protudos.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UptadeMovimentacaoComponent } from './pages/uptade-movimentacao/uptade-movimentacao.component';
import { UptadeProdutosComponent } from './pages/uptade-produtos/uptade-produtos.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'app-movimentacao-cadastro', component: CreateMovimentacaoComponent },
  { path: 'app-movimentacao-edicao', component: UptadeMovimentacaoComponent},
  { path: 'app-movimentacao-resultados', component: MovimentacaoResultadosComponent },
  { path: 'app-produtos-cadastro', component:CreateProtudosComponent},
  { path: 'app-produtos-edicao', component:UptadeProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
