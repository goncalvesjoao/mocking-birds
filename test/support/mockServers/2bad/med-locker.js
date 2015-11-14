var _ = require('lodash');

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

  app.get('/v0/complete_medicines/:id', function(request, response) {
    var id    = request.params.id;
    var complete_medicine = null;

    _.each(complete_medicines, function(_complete_medicine) {
      if (_complete_medicine.id.toString() === id.toString()) {
        complete_medicine = _complete_medicine;
      }
    });

    setTimeout(function() {
      if (complete_medicine) {
        response.json(complete_medicine);
      } else {
        response.status(404).json({ message: 'not_found by id' });
      }
    }, 500);
  });

  app.post('/v0/complete_medicines', function(request, response) {
    var complete_medicine = request.body.complete_medicine;

    complete_medicine.id = +(new Date());

    complete_medicines.push(complete_medicine);

    // complete_medicine.errors = { body: ["can't be blank"] };

    // response.status(422).json(complete_medicine);

    setTimeout(function() {
      response.json(complete_medicine);
    }, 500);
  });

  app.delete('/v0/complete_medicines/:id', function(request, response) {
    var id = request.params.id;

    var complete_medicine = _.remove(complete_medicines, function(_complete_medicine) {
      return _complete_medicine.id.toString() === id.toString();
    });

    setTimeout(function() {
      // response.status(404).json({});
      response.json(complete_medicine[0]);
    }, 500);
  });

  app.put('/v0/complete_medicines/:id', function(request, response) {
    var status = Number(request.body.complete_medicine.name);

    if (status) {
      complete_medicine = {};
    } else {
      var id = Number(request.params.id);

      var complete_medicine = _.find(complete_medicines, { id: id });

      _.assign(complete_medicine, request.body.complete_medicine);

      status = 200;
    }

    setTimeout(function() {
      response.status(status).json(complete_medicine);
    }, 500);
  });

}

module.exports = MedLocker;
