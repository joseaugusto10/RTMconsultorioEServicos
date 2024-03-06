<?php
// Permitir solicitações de qualquer origem (CORS)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$localdb = "localhost";
$nomedb = "rtm_consultoria";
$usuario = "root";
$senha = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Receber dados do formulário
    $nome = $_POST["nome"];
    $telefone = $_POST["telefone"];
    $email = $_POST["email"];
    $mensagem = $_POST["mensagem"];

    // Conectar ao banco de dados
    $conn = new mysqli($localdb, $usuario, $senha, $nomedb);

    // Verificar a conexão
    if ($conn->connect_error) {
        die("Conexão falhou: " . $conn->connect_error);
    }

    // Preparar a declaração SQL para a inserção
    $sql = "INSERT INTO formulario (nome, telefone, email, mensagem) VALUES ('$nome', '$telefone', '$email', '$mensagem')";

    // Executar a declaração SQL
    if ($conn->query($sql) === TRUE) {
        // Redirecionar para index.html
        header("Location: index.html");
        exit(); // Certifique-se de sair após o redirecionamento
    } else {
        // Responder com erro em formato JSON
        echo json_encode(["status" => "Erro ao enviar o formulário: " . $conn->error]);
    }

    // Fechar a conexão com o banco de dados
    $conn->close();
} else {
    // Responder com erro se a requisição não for POST
    echo json_encode(["status" => "Método não permitido"]);
}
?>





