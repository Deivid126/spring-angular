package br.comvarejonline.projetoinicial.Repositorys;

import br.comvarejonline.projetoinicial.Models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRespository extends JpaRepository<Usuario,Integer> {


    Optional<Usuario> findByEmail(String email);



}
