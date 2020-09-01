$(document).ready(function() {
    getData();
});

function getData() {
    $.ajax({
        url: "https://api.myjson.com/bins/r37dn",
        method: "GET",
        success: function (res) {
            var html = '';

            for(var i = 0; i < res.length; i++) {
                html += '<div class="item ' + (i % 3 == 2 ? 'last' : '') +'">' + 
                    '<a href="./details.html?id=' + res[i].id + '">' +
                        '<div class="image" style="background-image: url(\'' + res[i].image + '\');">' +
                        '</div>' +
                        '<div class="text">' +
                            '<p class="title">' + res[i].title + '</p>' +
                            '<p>' + res[i].author +
                                '<span>' + res[i].date + '</span>' +
                            '</p>' +
                        '</div>' +
                    '</a>' + 
                '</div>';
            }

            $('.middle').prepend(html);
        },
        error: function (err) {
            alert("Can't get data from server");
            console.log(err)
        }
    })
}