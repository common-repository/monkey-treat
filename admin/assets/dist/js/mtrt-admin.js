"use strict";

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('save_ban_address').addEventListener('click', function (e) {
    var address = document.getElementById('ban-address').value;
    var nonce = document.getElementById('_wpnonce').value;
    var formData = new FormData();
    formData.append('action', 'mtrt_validate_address');
    formData.append('nonce', nonce);
    formData.append('address', address);
    fetch(ajaxurl, {
      method: 'post',
      body: formData
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      var messageArea = document.getElementById('ban-message-area');
      messageArea.innerHTML = '';
      messageArea.innerHTML = res.data;

      if (!res.success) {
        messageArea.style.color = 'red';
      } else {
        messageArea.style.color = 'green';
        var img = document.createElement('img');
        img.id = 'ban-lovely-monkey';
        img.src = 'https://monkey.banano.cc/api/v1/monkey/' + address;
        document.getElementById('ban-message-area').insertAdjacentElement('beforeBegin', img);
      }
    });
  });
});