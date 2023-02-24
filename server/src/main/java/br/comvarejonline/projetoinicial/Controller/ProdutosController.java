package br.comvarejonline.projetoinicial.Controller;

import br.comvarejonline.projetoinicial.Models.Produtos;
import br.comvarejonline.projetoinicial.Services.ProdutosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/produtos")
public class ProdutosController {

    @Autowired
    ProdutosService produtosService;


    @PostMapping
    public ResponseEntity<Produtos> createProduto(@RequestBody Produtos produto){
        return ResponseEntity.status(HttpStatus.CREATED).body(produtosService.save(produto));
    }
    @PutMapping("/{id}")
    public ResponseEntity<Produtos> uptadeProduto(@PathVariable(value = "id") int id, @RequestBody Produtos produtos){
        return ResponseEntity.status(HttpStatus.OK).body(produtosService.uptade(produtos,id));
    }
    @GetMapping
    public ResponseEntity<List<Produtos>> getAllProdutos()
    {
        return ResponseEntity.status(HttpStatus.OK).body(produtosService.getAll());
    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Produtos>> getProtudo(@PathVariable(value = "id") int id)
    {
        return ResponseEntity.status(HttpStatus.OK).body(produtosService.getOne(id));
    }
}
