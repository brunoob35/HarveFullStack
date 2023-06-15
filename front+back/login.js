$(document).ready(function(){
    $.post( 
        'login.php', 
        {comando:{'acao':'buscarUsuarios'}},
        function(data)
        {
            var usuarios = JSON.parse(data);
            for (let i = 0; i < usuarios.length; i++) {
                
                $('.corpoTabela').append(
                    '<tr>'+
                        '<td>'+usuarios[i]['idLogin']+'</td>'+
                        '<td>'+usuarios[i]['login']+'</td>'+
                        '<td>'+usuarios[i]['senha']+'</td>'+
                    '</tr>'
                );
            }
        }
    );

    $("#entrar").on( "click", function() {
        var login = $('#login').val();
        var senha = $('#senha').val();
        $.post( 
            'login.php', 
            {comando:{'acao':'login','login':login,'senha':senha}},
            function(data)
            {
                data >= JSON.parse(data);

                if(data != null)
                {
                    alert('login com sucesso!');
                    alert('bem vindo '+ data['login']);
                }
            }
        );
    });
});