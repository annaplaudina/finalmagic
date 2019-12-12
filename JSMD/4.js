$('#some-input2').keyup(function(event){
    if(event.keyCode == 27){
        $(this).val('')
    }

    var currentValue = $(this).val()
    $('#some-heading').html(currentValue)
})

$('#some-input2').keyup(function(e){
    var currentText = $(this).val()
    if (e.keyCode == 13) {
        var newP = $('<p>')
        newP.html(currentText)
        $('#wrapper2').append(newP)
        $(this).val('')
    }
    var currentText = $(this).val()
    $('#some-heading2').html(currentText)
})