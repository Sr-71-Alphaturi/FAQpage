$(".collapsable").click(function ()
{
    $("#"+this.id).toggleClass("active");
    $("."+this.id).toggleClass("show");
});
$(".newColl").click(function ()
{
    $("#"+this.id).toggleClass("active");
    $("."+this.id).toggleClass("show");
    $("."+this.id).toggleClass("alignCenter")
});