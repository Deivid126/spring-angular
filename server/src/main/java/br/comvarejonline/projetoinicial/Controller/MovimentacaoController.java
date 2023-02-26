package br.comvarejonline.projetoinicial.Controller;

import br.comvarejonline.projetoinicial.Models.Movimentacao;
import br.comvarejonline.projetoinicial.Repositorys.MovimentacaoCustom;
import br.comvarejonline.projetoinicial.Services.MovimentacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Comparator;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/movimentacao")
public class MovimentacaoController {

    @Autowired
    MovimentacaoService movimentacaoService;
    @Autowired
    MovimentacaoCustom movimentacaoCustom;

    @PostMapping("/{id}")
    public ResponseEntity<Movimentacao> createMovimentacao(@PathVariable(value = "id") int id, @RequestBody Movimentacao movimentacao)
    {
        return ResponseEntity.status(HttpStatus.CREATED).body(movimentacaoService.save(movimentacao,id));
    }
    @GetMapping("/all")
    public ResponseEntity<List<Movimentacao>> getAllReturn(){
        return ResponseEntity.status(HttpStatus.OK).body(movimentacaoService.getAll());
    }
    @GetMapping
    public ResponseEntity<List<Movimentacao>> getAll(
            @RequestParam(value = "id", required = false) String id,
            @RequestParam(value = "datastart", required = false) String datastart,
            @RequestParam(value = "dataend", required = false) String dataend,
            @RequestParam(value = "tipo_movimentacao", required = false) String tipo_movimentacao,
            @RequestParam(value = "type", required = false) String type
    )
    {
        List<Movimentacao> list = movimentacaoCustom.find(id, datastart, dataend, tipo_movimentacao);
        if(type != null){
            list.sort((Comparator<? super Movimentacao>) Sort.by(Sort.Direction.ASC,type));
        }
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }

}
