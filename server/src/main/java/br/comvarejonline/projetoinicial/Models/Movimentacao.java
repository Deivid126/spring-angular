package br.comvarejonline.projetoinicial.Models;

import br.comvarejonline.projetoinicial.Enum.MovimentacaoEnum;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "movimentacao")
public class Movimentacao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotNull
    @Column(nullable = false,name = "data")
    private Date data;
    @NotNull
    @Column(nullable = false,name = "quantidade")
    private int quantidade;
    @NotNull
    @Column(nullable = false,name = "motivo")
    private String motivo;
    @Column(nullable = false,name = "documento")
    private String documento;
    @NotNull
    @Column(nullable = false, name = "tipo_de_movimentacao")
    @Enumerated(EnumType.STRING)
    private MovimentacaoEnum tipo_de_movimentacao;
    @NotNull
    @ManyToOne
    @JoinColumn(name = "produto_id")
    @JsonBackReference
    private Produtos produto;
}
