function myFunction(clicked_id) {

    var base_url = "http://127.0.0.1:5500/"
    var page = document.getElementById(clicked_id).value

    var full_path = base_url.concat(page,'.html')
    
    document.getElementById(clicked_id).onclick = window.location.href = full_path;
}

function divide_by_3() {

    var divisible_by_3 = []

    for (let i = 1; i < 101; i++) {
        if (i % 3 == 0) {
            divisible_by_3.push(i)
        }
    }

    console.log(divisible_by_3.length)
    document.getElementById('output').innerHTML = divisible_by_3.length;

}

function get_current_date_time() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;


    document.getElementById('current_date_time').innerHTML = dateTime;
    
}

function get_current_year() {
    var today = new Date();
    var date = today.getFullYear()

    document.getElementById('current_year').innerHTML = date;
}