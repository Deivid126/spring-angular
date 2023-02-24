package br.comvarejonline.projetoinicial;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("br.comvarejonline.projetoinicial")
public class ProjetoInicialApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjetoInicialApplication.class, args);
	}


}
