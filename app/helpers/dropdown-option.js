export default Ember.Handlebars.makeBoundHelper(function(data, valueProp, displayProp) {
  var value = '';
  var display = '';
  if(typeof data.get === 'function' ){
    value = data.get(valueProp);
    display = data.get(displayProp);
  }else{
    value = data[valueProp];
    display = data[displayProp];
  }
  
  if(Em.isBlank(valueProp)){
    value = data;
    display = data;
  }
  return new Em.Handlebars.SafeString(`<option value="${value}">${display}</option>`);
});
