// export default Ember.Handlebars.makeBoundHelper(function(data, valueProp, displayProp) {
export default Ember.Helper.helper(function(params, hash) {
  var data = params[0];
  var valueProp = params[1];
  var displayProp = params[2];
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
  const wrappedValue = (value === undefined || value === null || value === true || value === false) ? `${value}` : `"${value}"`;
  return Ember.String.htmlSafe(`<option value=${wrappedValue}>${display}</option>`);
});
