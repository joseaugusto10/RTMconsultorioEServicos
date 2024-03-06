<?php
// Configurações do banco de dados
$host = "localhost";
$usuario = "root";
$senha = "";
$banco = "rtm_consultoria";

$teste = "ta indo";

// Conectando ao banco de dados
$conexao = new mysqli($host, $usuario, $senha, $banco);

// Verificando a conexão
if ($conexao->connect_error) {
    die("Falha na conexão: " . $conexao->connect_error);
} else {
    echo "Conexão bem sucedida!<br>";
}

// // Teste de inserção com um nome de teste
// $nomeTeste = "Teste de Inserção";
// $sqlTeste = "INSERT INTO assinado(nome) VALUES ('$nomeTeste')";

// if ($conexao->query($sqlTeste) === TRUE) {
//     echo "Teste de inserção bem-sucedido com o nome: $nomeTeste<br>";
// } else {
//     echo "Erro no teste de inserção: " . $sqlTeste . "<br>" . $conexao->error;
// }


// Preparando e executando a inserção dos dados
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];

    $sql = "INSERT INTO assinado(nome) VALUES ('$nome')";

    if ($conexao->query($sql) === TRUE) {
        echo "Dados inseridos com sucesso!";
    } else {
        echo "Erro: " . $sql . "<br>" . $conexao->error;
    }
}

// Fechando a conexão
$conexao->close();
?>