import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './componets/header/header.component';
import { MovimentacaoCadastroComponent } from './componets/movimentacao-cadastro/movimentacao-cadastro.component';
import { MovimentacaoEdicaoComponent } from './componets/movimentacao-edicao/movimentacao-edicao.component';
import { MovimentacaoResultadosComponent } from './componets/movimentacao-resultados/movimentacao-resultados.component';
import { CreateMovimentacaoComponent } from './pages/create-movimentacao/create-movimentacao.component';
import { CreateProtudosComponent } from './pages/create-protudos/create-protudos.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'app-movimentacao-cadastro', component: CreateMovimentacaoComponent },
  { path: 'app-movimentacao-edicao', component: MovimentacaoEdicaoComponent},
  { path: 'app-movimentacao-resultados', component: MovimentacaoResultadosComponent },
  { path:'app-produtos-cadastro', component:CreateProtudosComponent},
  { path: 'app-header', component: HeaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
