var addSkill;

$("#add-skill").on("submit", function (evt) {
    evt.preventDefault();
    addSkill = $("input").val();
    if (addSkill === "") return;
    $("ul").append(`<li><button>x</button><span>${addSkill}</span></li>`);
    $('input[type="text"]').val("");
});

$("ul").on("click", "button", function () {
    function clear() { $(this).closest("li").remove() }
    $(this).closest("li").fadeOut("fast", clear);
});