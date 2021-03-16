function myFunction(clicked_id) {

    var base_url = "http://127.0.0.1:5500/"
    var page = document.getElementById(clicked_id).value

    var full_path = base_url.concat(page,'.html')
    
    document.getElementById(clicked_id).onclick = window.location.href = full_path;
}