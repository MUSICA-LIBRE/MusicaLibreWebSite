/* Creamos nuestra función para menu hamburguesa */
$(document).ready(function () {
  $("#menu_on").click(function () {
    // Al hacer click...
    $("nav").toggleClass("visible_menu"); // Añadimos o eliminamos la clase 'visible_menu'
  });
});
/* Creamos nuestra función para la ventana entrar */
$(document).ready(function () {
  $(".entrar_on").click(function () {
    $("#s1").toggleClass("visible_entrar");
  });
});
/* Creamos nuestra función para la ventana registrar */
$(document).ready(function () {
  $(".registrar_on").click(function () {
    $("#s2").toggleClass("visible_registrar");
  });
});
