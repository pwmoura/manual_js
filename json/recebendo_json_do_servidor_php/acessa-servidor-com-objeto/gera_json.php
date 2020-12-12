<?php
    //Cria um objeto php
    //As informações podem vir de um db, por exemplo.
    $myObj = new \stdClass();
    $myObj->nome = "Wenys";
    $myObj->idade = 30;
    $myObj->cidade = "Paranaiguara";

    //Transforma o objeto em uma string json
    $myJSON = json_encode($myObj);

    // Escreve a string na página para ser lida
    // pelo js como se fosse um json
    echo $myJSON;
?>