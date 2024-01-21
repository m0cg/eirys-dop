$('#rsvp-form').on('submit', function (e) {
    e.preventDefault();
    var data = $('#rsvp-form').serialize();
    console.log(data);

    $('#alert-wrapper').html(alert_markup('info', '<strong>Un momento</strong> Estamos procesando la solicitud.'));

    $.post('https://script.google.com/macros/s/AKfycbzpGpRBFYsE-B9Ud1_XvMzU51tFIMKwYjeOCos-pBpfNfRxDufukMFVyiiot36AqggLcQ/exec', data)
        .done(function (data) {
            console.log(data);
            if (data.result === "error") {
                $('#alert-wrapper').html(alert_markup('danger', data.message));
            } else {
                $('#alert-wrapper').html('');
                $('#rsvp-modal').modal('show');
            }
        })
        .fail(function (data) {
            console.log(data);
            $('#alert-wrapper').html(alert_markup('danger', '<strong>Oops!</strong> Hay un problema con el servidor. '));
        });

});


// alert_markup
function alert_markup(alert_type, msg) {
    return '<div class="alert alert-' + alert_type + '" role="alert">' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>';
}

