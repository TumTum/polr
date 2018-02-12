var original_link;

function select_text() {
    $('.result-box').focus().select();
}

$('.result-box').click(select_text);
$('.result-box').change(function () {
    $(this).val(original_link);
});


$('#generate-qr-code').click(function () {
    var container = $('.qr-code-container');
    container.empty();
    new QRCode(container.get(0), {
        text: original_link,
        width: 280,
        height: 280
    });
    container.find('img').attr('alt', original_link);
    container.show();
});


var clipboard = new Clipboard('[data-clipboard]');
clipboard.on('success', function(e) {
    e.clearSelection();
    $('[data-clipboard]').tooltip('show');
});
$('[data-clipboard]').on('blur',function () {
    $(this).tooltip('destroy')
}).on('mouseleave',function () {
    $(this).tooltip('destroy')
});

$(function () {
    original_link = $('.result-box').val();
    select_text();
});
