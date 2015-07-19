export default Ember.Handlebars.makeBoundHelper(function(data, valueProp, displayProp) {
  var value = data[valueProp];
  var display = data[displayProp];

  if(Em.isBlank(valueProp)){
    value = data;
    display = data;
  }
  return new Em.Handlebars.SafeString(`<option value="${value}">${display}</option>`);
});
