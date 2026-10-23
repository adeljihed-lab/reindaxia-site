(function(){
  if (document.querySelector('.wa-float')) return;
  var en = (document.documentElement.lang || '').slice(0,2) === 'en';
  var a = document.createElement('a');
  a.className = 'wa-float';
  a.href = 'https://wa.me/21699771875?text=' + encodeURIComponent(en ? 'Hello Reindaxia, ' : 'Bonjour Reindaxia, ');
  a.target = '_blank'; a.rel = 'noopener';
  a.setAttribute('aria-label', en ? 'Contact us on WhatsApp' : 'Nous écrire sur WhatsApp');
  a.innerHTML = '<svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3zm0 23.7c-2 0-4-.5-5.7-1.6l-.4-.2-3.9 1 1-3.8-.3-.4A10.7 10.7 0 1 1 16 26.7zm5.9-8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.8 8.8 0 0 1-4.4-3.8c-.3-.6.3-.5 1-1.7.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.5c.2.2 2.4 3.6 5.8 5 2.1.9 3 1 4 .8.7-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5l-.6-.4z"/></svg><span>' + (en ? 'WhatsApp' : 'WhatsApp') + '</span>';
  document.body.appendChild(a);
})();
