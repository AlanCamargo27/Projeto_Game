//efeito de esconder formulário de cadastro

$(document).ready(function(){
   
    $("#botao-cadastrar").click(function(){

        $("#form-cadastrar").slideToggle("slow");
        $("#section-login").slideToggle("slow");
        $("#botao-cadastrar").hide();
        
});
});

$(document).ready(function(){
    $("#bt-loginreturn").click(function(){

       $("#section-login").slideToggle("slow");
       $("#form-cadastrar").slideToggle("slow");
       $("#botao-cadastrar").show();

})

});

