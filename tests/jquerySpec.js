describe('Jquery HTML page test', function() {
  it('should fire jquery events', function() {
    var fixtures  = jasmine.getFixtures() ;
    fixtures.fixturesPath = 'base/spec/javascripts/fixtures/';
    fixtures.load('jquery.html');

    $('#my-jquery-fixture').text('Test complete');
    expect($('#my-jquery-fixture')).toHaveText('Test complete');
  })
})
