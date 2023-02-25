import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProdutoCadastroComponent } from './componets/produto-cadastro/produto-cadastro.component';
import { FormsModule } from '@angular/forms';
import { LoginServiceService } from './services/login-service.service';
import { MovimentacaoResultadosComponent } from './componets/movimentacao-resultados/movimentacao-resultados.component';
import { MovimentacaoCadastroComponent } from './componets/movimentacao-cadastro/movimentacao-cadastro.component';
import { HeaderComponent } from './componets/header/header.component';
import { ProdutosEdicaoComponent } from './componets/produtos-edicao/produtos-edicao.component';
import { MovimentacaoEdicaoComponent } from './componets/movimentacao-edicao/movimentacao-edicao.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateProtudosComponent } from './pages/create-protudos/create-protudos.component';
import { UptadeProdutosComponent } from './pages/uptade-produtos/uptade-produtos.component';
import { CreateMovimentacaoComponent } from './pages/create-movimentacao/create-movimentacao.component';
import { UptadeMovimentacaoComponent } from './pages/uptade-movimentacao/uptade-movimentacao.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoCadastroComponent,
    MovimentacaoResultadosComponent,
    MovimentacaoCadastroComponent,
    HeaderComponent,
    ProdutosEdicaoComponent,
    MovimentacaoEdicaoComponent,
    LoginComponent,
    HomeComponent,
    CreateProtudosComponent,
    UptadeProdutosComponent,
    CreateMovimentacaoComponent,
    UptadeMovimentacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
