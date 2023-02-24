package br.comvarejonline.projetoinicial.Repositorys;

import br.comvarejonline.projetoinicial.Models.Produtos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProdutosRepository extends JpaRepository<Produtos, Integer> {
    Produtos FindByCodigo_de_barras(String codigo_de_barras);


}
