package br.comvarejonline.projetoinicial.Repositorys;

import br.comvarejonline.projetoinicial.Models.Movimentacao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.Date;
import java.util.List;

@Repository
public class MovimentacaoCustom {

    @Autowired
    private EntityManager em;


    public List<Movimentacao> find(String id, String datastart, String dataend, String tipo_movimentacao) {

        String query = "select P from movimentacao as P ";
        String condicao = "where";

        if(id != null) {
            query += condicao + " P.id = :id";
            condicao = " and ";
        }

        if(tipo_movimentacao != null) {
            query += condicao + " P.sobrenome = :sobrenome";
            condicao = " and ";
        }

        if(datastart != null) {
            query += condicao + " BETWEEN ?1 and ?2";

        }

        var q = em.createQuery(query, Movimentacao.class);

        if(id != null) {
            q.setParameter("id", id);
        }

        if(datastart != null) {
            q.setParameter("?1", datastart);
            q.setParameter("?2",dataend);
        }

        if(tipo_movimentacao != null) {
            q.setParameter("sobrenome", tipo_movimentacao);
        }

        return q.getResultList();
    }

}