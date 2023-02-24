package br.comvarejonline.projetoinicial.Controller;

import br.comvarejonline.projetoinicial.Auth.JwtResponse;
import br.comvarejonline.projetoinicial.Auth.JwtService;
import br.comvarejonline.projetoinicial.Models.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/auth")
public class LoginController {

    @Autowired
    JwtService jwtService;

    @PostMapping("/registrar")
    public ResponseEntity<JwtResponse> registrar(
            @RequestBody Usuario request
    ) {
        return ResponseEntity.ok(jwtService.registro(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<JwtResponse> authenticate(
            @RequestBody Usuario request
    ) {
        return ResponseEntity.ok(jwtService.authenticate(request));
    }

}