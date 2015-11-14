function MedLocker(app) {

  var complete_medicines = [
    { id: 1, name: 'parace que ta mole' },
    { id: 2, name: 'ben loves u, ron' }
  ];

  app.get('/v0/complete_medicines', function(request, response) {
    setTimeout(function() {
      response.json({
        page: 1,
        per_page: 0,
        total_pages: 1,
        total_count: 2,
        complete_medicines: complete_medicines
      });
    }, 500);
  });

}

module.exports = MedLocker;
