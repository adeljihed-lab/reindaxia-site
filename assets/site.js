/* Reindaxia — menu mobile et formulaire de demande */
(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  }

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Pré-sélection du besoin via ?besoin=audit (liens des pages prestations)
  var form = document.getElementById('rq');
  if (!form) return;
  try {
    var q = new URLSearchParams(location.search).get('besoin');
    var sel = form.querySelector('#rq-need');
    if (q && sel && sel.querySelector('option[value="' + q + '"]')) sel.value = q;
  } catch (e) { /* pas de paramètre */ }

  var status = form.querySelector('.status');
  var lang = document.documentElement.lang === 'en' ? 'en' : 'fr';
  var T = {
    fr: { missing: 'Merci de renseigner votre nom, votre e-mail et votre besoin.', sending: 'Envoi en cours…', ok: 'Merci. Votre demande est envoyée ; nous vous répondons sous 48 heures ouvrées.', fail: "L'envoi a échoué. Écrivez-nous directement à ", mail: 'Votre logiciel de messagerie va s’ouvrir avec la demande pré-remplie. Si rien ne s’ouvre, écrivez à ' },
    en: { missing: 'Please enter your name, e-mail and need.', sending: 'Sending…', ok: 'Thank you. Your request has been sent; we reply within 48 working hours.', fail: 'Sending failed. Please write to ', mail: 'Your e-mail application will open with the request filled in. If nothing opens, write to ' }
  }[lang];
  var to = form.getAttribute('data-to') || 'contact@reindaxia.tn';

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.classList.remove('err');
    if (form.querySelector('.hp input') && form.querySelector('.hp input').value) return; // anti-spam
    var name = form.querySelector('#rq-name').value.trim();
    var mail = form.querySelector('#rq-mail').value.trim();
    var msg = form.querySelector('#rq-msg').value.trim();
    if (!name || !mail || !msg || !form.checkValidity()) { status.textContent = T.missing; status.classList.add('err'); return; }

    var endpoint = form.getAttribute('data-endpoint');
    if (endpoint) {
      status.textContent = T.sending;
      fetch(endpoint, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } })
        .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
        .then(function (d) { if (d && (d.success === false || d.success === 'false')) throw new Error('fs'); status.textContent = T.ok; form.reset(); })
        .catch(function () { status.textContent = T.fail + to; status.classList.add('err'); });
      return;
    }
    // Sans service d'envoi configuré : message pré-rempli dans la messagerie du visiteur
    var need = form.querySelector('#rq-need');
    var lines = [
      (lang === 'en' ? 'Name / role: ' : 'Nom / fonction : ') + name,
      (lang === 'en' ? 'Company: ' : 'Entreprise : ') + form.querySelector('#rq-org').value.trim(),
      'E-mail : ' + mail,
      (lang === 'en' ? 'Phone: ' : 'Téléphone : ') + form.querySelector('#rq-tel').value.trim(),
      (lang === 'en' ? 'Need: ' : 'Besoin : ') + need.options[need.selectedIndex].text,
      '', msg
    ];
    var subject = (lang === 'en' ? 'Request — ' : 'Demande — ') + need.options[need.selectedIndex].text;
    status.textContent = T.mail + to + '.';
    window.location.href = 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
  });
})();
