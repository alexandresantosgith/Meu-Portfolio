<?php

if (isset ($_POST['email'])&& !empty($_POST['email'])){

$name = addcslashes($_POST['name']);
$email = addcslashes($_POST['email']);
$mensagem = addcslashes($_POST['mensagem']);





$to = "ale022_santos@hotmail.com";
$subjet = "Contato - Portifolio";
$body = "Nome:".$nome. "\n".
        "Email:".$email. "\n".
        "Mensagem:".$mensagem;
$header = " From:ale022_santos@hotmail.com"."\r\n".
"Reply-To:".$email."\r\n".
"x=Mailer:PHP/".phpversion();

if(mail($to,$subjet,$body,$header)){

    echo("Email enviado com sucesso!");

}

else{

    echo("O Email não pode ser enviado");
}





}


?>


