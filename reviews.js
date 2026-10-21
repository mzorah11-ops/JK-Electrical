/* reviews.html: keeps the "x months ago" labels current, the same way the home page carousel does (each card carries its review date). */
(function () {
  function ago(iso) {
    var n = new Date(), t = new Date(iso), m = (n.getFullYear() - t.getFullYear()) * 12 + n.getMonth() - t.getMonth();
    if (n.getDate() < t.getDate()) m--;
    if (m < 1) { var days = Math.floor((n - t) / 864e5); return days < 7 ? 'this week' : Math.floor(days / 7) + ' weeks ago'; }
    if (m < 12) return m === 1 ? '1 month ago' : m + ' months ago';
    var y = Math.floor(m / 12);
    return y === 1 ? '1 year ago' : y + ' years ago';
  }
  Array.prototype.forEach.call(document.querySelectorAll('.rcard[data-date]'), function (c) {
    var s = c.querySelector('small');
    if (s) s.textContent = ago(c.dataset.date);
  });
})();
