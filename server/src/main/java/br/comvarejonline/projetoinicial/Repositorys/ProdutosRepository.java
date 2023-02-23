package br.comvarejonline.projetoinicial.Repositorys;

import br.comvarejonline.projetoinicial.Models.Produtos;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutosRepository extends JpaRepository<Produtos, Integer> {
}
