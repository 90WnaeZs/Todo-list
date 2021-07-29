let asd=$("#text_inp").val();

$('#add').on('click', () => {asd=$("#text_inp").val(), $('#list').append(`<li>${asd}</li>`)});