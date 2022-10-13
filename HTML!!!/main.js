function showhide()
{
    var div = document.getElementById("newpost");
    if (div.style.display !== "block") {
        div.style.display = "block";
    }
    else {
        div.style.display = "none";
    }
}