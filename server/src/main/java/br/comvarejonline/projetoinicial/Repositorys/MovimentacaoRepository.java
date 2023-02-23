package br.comvarejonline.projetoinicial.Repositorys;

import br.comvarejonline.projetoinicial.Models.Movimentacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovimentacaoRepository extends JpaRepository<Movimentacao, Integer> {
}
