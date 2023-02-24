package br.comvarejonline.projetoinicial.ExceptionHandler;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.Date;

@ControllerAdvice
public class AppExceptionHandler extends ResponseEntityExceptionHandler {

@ExceptionHandler(value = RuntimeException.class)
public ResponseEntity<Object> handlerException(RuntimeException run, WebRequest request)
{
    MensagemError error = new MensagemError(new Date(), run.getMessage());
    return new ResponseEntity<>(error,new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR);
}



}
