<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $comando = $_POST['comando'];
        $acao = $comando['acao'];
        // $login = $comando['login'];
        // $senha = $comando['senha'];
    }
    $acao = 'buscarUsuarios';
    $conexao = new mysqli("127.0.0.1:3306"   ,"root",    "",   "harve");

    if ($conexao -> connect_error) {
        echo "Failed to connect to MySQL: " . $conexao -> connect_error;
        exit();
    }

    switch ($acao) {
        case 'login':
            
                $comandoSql = "SELECT * FROM login where login ='".$login."' and senha= '".$senha."';";
                $resultado = $conexao->query($comandoSql);
                
                while($row = $resultado->fetch_assoc()) {
                    echo(json_encode($row));
                    // echo "id " . $row["status"]. " - nome: " . $row["nomeAluno"] ."<br>";
                }

            break;
        case 'buscarUsuarios':
                $comandoSql = "SELECT * FROM login";
                $resultado = $conexao->query($comandoSql);
                $retorno = array();
                // $resultado = $resultado->fetch_assoc();
                // while($row = $resultado->fetch_assoc()) {   
                //     $row = json_encode($row); 
                //     // array_push($retorno, $row);   
                // }

                while ($row = $resultado->fetch_assoc())
                {
                    $data[] = $row;
                    // $data =json_encode($data);
                }


                echo(json_encode($data));


                // $retorno = json_encode($retorno);
                // echo($retorno);
            break;
    }
    $conexao->close();
?>