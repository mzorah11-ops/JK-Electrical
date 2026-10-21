/* Service pages: the phone/tablet menu (the title bar itself is plain links). */
(function () {
  var btn = document.getElementById('menu-btn'), menu = document.getElementById('mnav');
  if (!btn || !menu) return;
  function set(on) {
    menu.classList.toggle('open', on);
    menu.setAttribute('aria-hidden', on ? 'false' : 'true');
    btn.setAttribute('aria-expanded', on ? 'true' : 'false');
  }
  btn.addEventListener('click', function () { set(true); });
  document.getElementById('mnav-x').addEventListener('click', function () { set(false); });
  Array.prototype.forEach.call(menu.querySelectorAll('a'), function (a) { a.addEventListener('click', function () { set(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
})();
