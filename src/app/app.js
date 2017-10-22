function myfirstrequest() {
    var xhhtp = new XMLHttpRequest();

    xhhtp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhhtp.open('GET', 'https://api.themoviedb.org/3/movie/550?api_key=ae03a3bcc77aae15f3e3d3bda3d7d325', true);
    xhhtp.send();
}