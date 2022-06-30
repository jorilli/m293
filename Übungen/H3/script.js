function showTextField(){
    if(document.getElementById('favouriteGame').value == "otherGame"){
        document.getElementById("hiddenOtherGame").style.display = "block";
    }else{
        document.getElementById("hiddenOtherGame").style.display = "none";
    }
}