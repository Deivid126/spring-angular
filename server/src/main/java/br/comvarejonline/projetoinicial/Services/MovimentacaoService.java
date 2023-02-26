package br.comvarejonline.projetoinicial.Services;

import br.comvarejonline.projetoinicial.Enum.MovimentacaoEnum;
import br.comvarejonline.projetoinicial.Models.Movimentacao;
import br.comvarejonline.projetoinicial.Models.Produtos;
import br.comvarejonline.projetoinicial.Repositorys.MovimentacaoRepository;
import br.comvarejonline.projetoinicial.Repositorys.ProdutosRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class MovimentacaoService {

    @Autowired
    MovimentacaoRepository movimentacaoRepository;
    @Autowired
    ProdutosRepository produtosRepository;

    public List<Movimentacao> getAll(){
        return movimentacaoRepository.findAll();
    }

    public Movimentacao save(Movimentacao movimentacao, int id){

        Optional<Produtos> produto = produtosRepository.findById(id);

        if(produto.get().getMovimentacaos().size() != 0 && movimentacao.getTipo_de_movimentacao() == MovimentacaoEnum.SALDO_INICIAL)
        {
            throw new RuntimeException("O produto já tem movimentações");
        }
        if(produto.get().getMovimentacaos().size() == 0 && movimentacao.getTipo_de_movimentacao() == MovimentacaoEnum.AJUSTE_ENTRADA || movimentacao.getTipo_de_movimentacao() == MovimentacaoEnum.AJUSTE_SAIDA){
            throw new RuntimeException("É necessário ter movimentações");
        }
        if(produto.get().getSaldo_inicial() - movimentacao.getQuantidade() < 0)
        {
            throw new RuntimeException("O valor do saldo não pode ser negativo");
        }
        if(movimentacao.getTipo_de_movimentacao() != MovimentacaoEnum.SALDO_INICIAL && movimentacao.getData().before(produto.get().getMovimentacaos().get(0).getData()))
        {
            throw new RuntimeException("A data não pode ser anterior");
        }

        return movimentacaoRepository.save(movimentacao);
        }
}
