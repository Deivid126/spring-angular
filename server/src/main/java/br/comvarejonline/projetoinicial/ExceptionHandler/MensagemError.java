package br.comvarejonline.projetoinicial.ExceptionHandler;

import lombok.*;

import java.util.Date;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class MensagemError {

    private Date timestemp;
    private String msg;
}
