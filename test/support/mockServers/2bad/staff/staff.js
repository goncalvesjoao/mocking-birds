function Staff(app) {

  var members = memberz;

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
