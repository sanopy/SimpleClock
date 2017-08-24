setInterval(() => {
  const now = new Date();
  $('#clock > p').html(now.toLocaleString());
}, 100);