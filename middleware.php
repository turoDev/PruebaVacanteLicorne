<?php

    /**
     * @author Jorge Salgado - Ingeniero en Sistemas | Full Stack Developer | Ethical Hacker | Project Manager
     * @version 3.0.4
     * 
     * @package Ejercicio 2 - Middleware
     * 
     * Instrucciones
     * 
     * Deberás crear una función "middleware" que reciba como parámetro el token del ejercicio anterior.
     * 
     * La función deberá validar por medio de expresiones regulares que el token recibido contenga el 
     * formato solicitado en el ejercicio anterior, de lo contrario deberás crear mensajes indicando el error 
     * 
     * Para ejecutar este proyecto utiliza
     * 
     * php -f middleware.php <token>
     * 
    */

    middleware($argv[1]);

?>