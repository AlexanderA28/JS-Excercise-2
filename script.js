function myFunction() {

    var base_url = "http://127.0.0.1:5500/"
    var page = document.getElementById("myBtn").value

    var full_path = base_url.concat(page,'.html')
    
    document.getElementById("myBtn").onclick = window.location.href = full_path;
}