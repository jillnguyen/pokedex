$(document).ready(function(){
    for (var i=1; i<152; i++){
        var source = "http://pokeapi.co/media/img/" + i + ".png";
        $("<img src="+source+" id="+i+">").appendTo("#left").addClass("pokemon");                
    }
    $(".pokemon").click(function(){
        var id = $(this).attr("id");
        var linkData = "https://pokeapi.co/api/v2/pokemon/" + id + "/";
        $.get(linkData, function(pkm){
            console.log(pkm);
            var name = pkm.name;
            var heavy = pkm.weight;
            var tall = pkm.height;
            var categories = "<ul>";
            for (var i=0; i< pkm.types.length; i++){
                var item = pkm.types[i].type.name;
                console.log(item);
                categories += "<li>"+item+"</li>";
            }
            categories += "</ul>"
            console.log(categories);
            var linkImage = "http://pokeapi.co/media/img/" + id + ".png"; 
            var addContent = "<h3>"+name+"</h3><img src = "+linkImage+"><h5>Types</h5><div>"+categories+"</div><h5>Height</h5><p>"+tall+"</p><h5>Weight</h5><p>"+heavy+"</p>";
            $("#right").html(addContent);
        }, "json")
    })
})