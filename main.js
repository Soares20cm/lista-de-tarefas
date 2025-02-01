$(document).ready(function() {
    $('#form-tarefa').submit(function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const nomeTarefa = $('#nome-tarefa').val();

        if (nomeTarefa.trim() !== '') { // Verifica se o campo não está vazio
            const novaTarefa = $('<li>').text(nomeTarefa);
            $('#lista-tarefas').append(novaTarefa);
            $('#nome-tarefa').val(''); // Limpa o campo de texto
        }
    });

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});