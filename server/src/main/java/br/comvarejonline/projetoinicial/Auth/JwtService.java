package br.comvarejonline.projetoinicial.Auth;

import br.comvarejonline.projetoinicial.Config.JwtTokenUtil;
import br.comvarejonline.projetoinicial.Enum.Role;
import br.comvarejonline.projetoinicial.Models.Usuario;
import br.comvarejonline.projetoinicial.Repositorys.UsuarioRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class JwtService {
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    JwtTokenUtil jwtTokenUtil;
    @Autowired
    UsuarioRespository repository;
    @Autowired
    AuthenticationManager authenticationManager;

    public JwtResponse registro(Usuario request)
    {
        if(request.getRole() == null)
        {
            throw new RuntimeException("Tem que passar um Role");
        }
        var user = Usuario.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(request.getRole()).build();
        repository.save(user);

        var jwttoken = jwtTokenUtil.generateToken(user);

        return JwtResponse.builder().token(jwttoken).build();

    }

    public JwtResponse authenticate(Usuario request)
    {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = repository.findByEmail(request.getEmail()).orElseThrow(()-> new RuntimeException("Usuario não existe"));

        var jwttoken = jwtTokenUtil.generateToken(user);

        return JwtResponse.builder().token(jwttoken).build();
    }

}
