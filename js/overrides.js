$(document).ready(function () {
  $('#modal').on('show.bs.modal', function (e) {
    var $thumb = $(e.relatedTarget);
    var $modal = $('#modal');

    $modal.find('img').attr('src', $thumb.data('src'));
    $modal.find('.modal-title').text($thumb.data('title'));
    $modal.find('.modal-text').text($thumb.data('text'));
  });
});