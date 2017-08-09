describe('HTML page test', function() {
  afterEach(function() {
    document.body.innerHTML = '';
  });

  it('should expose the templates to __html__', function() {
    document.body.innerHTML = __html__['static/site.html'];
    expect(document.getElementById('myDiv')).toBeDefined();
    expect(document.getElementById('myDiv')).toHaveText('testing!');
  })
})
