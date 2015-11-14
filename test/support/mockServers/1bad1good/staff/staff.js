function Staff(app) {

  var members = [
    { id: 1, first_name: 'John', last_name: 'Summer', type: 'doctor', speciality_id: 1, speciality_name: 'Geral medicine', avatar_url: '' },
    { id: 2, first_name: 'Sigurson', last_name: 'Mitroglou', type: 'doctor', speciality_id: 2, speciality_name: 'Geral medicine', avatar_url: '' },
    { id: 3, first_name: 'John', last_name: 'Doe', type: 'assistant', speciality_id: 2, speciality_name: 'Cardiology', avatar_url: '' },
    { id: 4, first_name: 'Sara', last_name: 'Tancredi', type: 'doctor', speciality_id: 1, speciality_name: 'Geral medicine', avatar_url: '' },
    { id: 5, first_name: 'Richard', last_name: 'Neves', type: 'nurse', speciality_id: 1, speciality_name: 'Geral medicine', avatar_url: '' },
    { id: 6, first_name: 'Amanda', last_name: 'Banks', type: 'nurse', speciality_id: 1, speciality_name: 'Geral medicine', avatar_url: '' }
  ];

  app.get('/v0/members', function(request, response) {
    setTimeout(function() {
      response.json({
        page: 1,
        per_page: 0,
        total_pages: 1,
        total_count: 6,
        members: members
      });
    }, 500);
  });

}

module.exports = Staff;
