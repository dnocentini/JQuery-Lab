var addSkill;

$("#add-skill").on("submit", function (evt) {
    evt.preventDefault();
    addSkill = $("input").val();
    if (addSkill === "") return;
    $("ul").append(`<li><button>x</button><span>${addSkill}</span></li>`);
    $('input[type="text"]').val("");
});

