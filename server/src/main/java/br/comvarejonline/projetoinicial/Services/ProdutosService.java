package br.comvarejonline.projetoinicial.Services;

import br.comvarejonline.projetoinicial.Enum.MovimentacaoEnum;
import br.comvarejonline.projetoinicial.Models.Movimentacao;
import br.comvarejonline.projetoinicial.Models.Produtos;
import br.comvarejonline.projetoinicial.Repositorys.MovimentacaoRepository;
import br.comvarejonline.projetoinicial.Repositorys.ProdutosRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ProdutosService {
    @Autowired
    private ProdutosRepository repositoryProdutos;
    @Autowired
    private MovimentacaoService MoviService;

    public Produtos save(Produtos produto){

        Produtos produtobanco = repositoryProdutos.FindByCodigo_de_barras(produto.getCodigo_de_barras());

        if(produtobanco != null) {
            throw new RuntimeException("Produto já existe");
        }
        if(produto.getSaldo_minimo() < produto.getQuantidade_minima())
        {
            throw new RuntimeException("Saldo Inicial não posde ser menor que a quantidade minima");
        }
        if(produto.getQuantidade_minima() > 0){
            repositoryProdutos.save(produto);
            Movimentacao movimentacao = new Movimentacao();
            movimentacao.setProduto(produto);
            movimentacao.setData(new Date());
            movimentacao.setMotivo("");
            movimentacao.setQuantidade(produto.getQuantidade_minima());
            movimentacao.setTipo_de_movimentacao(MovimentacaoEnum.SALDO_INICIAL);
            movimentacao.setDocumento("");
            MoviService.save(movimentacao);
            return produto;
        }

        return repositoryProdutos.save(produto);
    }

    public Produtos uptade(Produtos produtos, int id){
        Optional<Produtos> produtosbanco = repositoryProdutos.findById(id);
        if(produtosbanco.isPresent()){
            produtosbanco.get().setNome(produtos.getNome());
            produtosbanco.get().setQuantidade_minima(produtos.getQuantidade_minima());
            produtosbanco.get().setCodigo_de_barras(produtos.getCodigo_de_barras());
            repositoryProdutos.save(produtosbanco.get());
        }
        return produtosbanco.get();
    }

}
