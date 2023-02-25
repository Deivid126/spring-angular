package br.comvarejonline.projetoinicial.Models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "produtos")
public class Produtos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotNull
    @Column(nullable = false,name = "codigo_de_barras")
    private String codigodebarras;
    @NotNull
    @Column(nullable = false,name = "nome")
    private String nome;
    @NotNull
    @Column(nullable = false,name = "quantidade_minima")
    private Integer quantidade_minima;
    @NotNull
    @Column(nullable = false,name = "saldo_inicial")
    private Integer saldo_inicial;

    @OneToMany(mappedBy = "produto",fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Movimentacao> movimentacaos = new ArrayList<Movimentacao>();
}
