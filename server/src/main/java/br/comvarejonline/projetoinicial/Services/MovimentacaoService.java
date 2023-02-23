package br.comvarejonline.projetoinicial.Services;

import br.comvarejonline.projetoinicial.Enum.MovimentacaoEnum;
import br.comvarejonline.projetoinicial.Models.Movimentacao;
import br.comvarejonline.projetoinicial.Models.Produtos;
import br.comvarejonline.projetoinicial.Repositorys.MovimentacaoRepository;
import br.comvarejonline.projetoinicial.Repositorys.ProdutosRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class MovimentacaoService {

    @Autowired
    MovimentacaoRepository movimentacaoRepository;
    @Autowired
    ProdutosRepository produtosRepository;

    public Movimentacao save(Movimentacao movimentacao){

        Produtos produto = produtosRepository.FindByCodigo_de_barras(movimentacao.getProduto().getCodigo_de_barras());

        if(produto.getMovimentacaos().size() != 0 && movimentacao.getTipo_de_movimentacao() == MovimentacaoEnum.SALDO_INICIAL)
        {
            throw new RuntimeException("O produto já tem movimentações");
        }
        if(produto.getMovimentacaos().size() == 0 && movimentacao.getTipo_de_movimentacao() == MovimentacaoEnum.AJUSTE_ENTRADA || movimentacao.getTipo_de_movimentacao() == MovimentacaoEnum.AJUSTE_SAIDA){
            throw new RuntimeException("É necessário ter movimentações");
        }
        if(produto.getSaldo_minimo() - movimentacao.getQuantidade() < 0)
        {
            throw new RuntimeException("O valor do saldo não pode ser negativo");
        }
        if(movimentacao.getData().before(produto.getMovimentacaos().get(0).getData()))
        {
            throw new RuntimeException("A data não pode ser anterior");
        }

        return movimentacaoRepository.save(movimentacao);
        }
}
