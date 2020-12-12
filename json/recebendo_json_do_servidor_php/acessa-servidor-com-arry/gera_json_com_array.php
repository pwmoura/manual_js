<?php
    
    $clientes = [
        ["nome"=>"José"],
        ["nome"=>"claudio"],
        ["nome"=>"Maria"]
    ];

   //Transforma o objeto em uma string json
    $myJSON = json_encode($clientes);

    // Escreve a string na página para ser lida
    // pelo js como se fosse um json
    echo $myJSON;
?>