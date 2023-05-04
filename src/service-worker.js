// Instalação do Service Worker
self.addEventListener('install', function (event) {
  console.log('Service Worker instalado com sucesso!');
});

// Ativação do Service Worker
self.addEventListener('activate', function (event) {
  console.log('Service Worker ativado com sucesso!');
});

// Fetch do Service Worker
self.addEventListener('fetch', function (event) {
  console.log('Service Worker fetch event:', event);
});
