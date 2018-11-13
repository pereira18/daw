$(()=>{
    $('#ficheiros').load('http://localhost:4004/ficheiros')
    var info = new FormData()
    
    $('#adicionar').click(e => {
        e.preventDefault()
        console.log($('#ficheiro')[0].files[0].name)
        info.append('ficheiro', $('#ficheiro')[0].files[0])
        info.append('desc', $('#desc').val())
        info.append('data', $('#data').val())
        $('#ficheiros').append('<tr> <td> <a href="http://localhost:4004/images/' + $('#ficheiro')[0].files[0].name + '" target="_blank">' + $('#ficheiro')[0].files[0].name + '</a> </td>' + '<td>' + $('#desc').val() + '</td>' +  '<td>' + $('#data').val()+'</td> </tr>')
        ajaxPost()
        $('#processaForm')[0].reset();
    })

    function ajaxPost(){
        $.ajax({
            type: "POST",
            method: 'POST',
            url: "http://localhost:4004/processaForm",
            data: info,
            cache: false,
            contentType: false,
            processData: false,
            dataType: 'json',
            success: p => alert('Ficheiro '+ JSON.stringify(p.nome)+ ' adicionado com sucesso'),
            error: e => {
                alert('Erro no post: ' + e.status)
                console.log("Erro no post: " + e)
            }
        })
    }
})
