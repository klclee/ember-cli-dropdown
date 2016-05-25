export default Em.Component.extend({
  selectClass: '',
  content: null,
  value: '',
  optionValuePath: '',
  optionLabelPath: '',
  didInsertElement: function() {
    this.$().find(`option[value='${this.value}']`).prop('selected', true);
    var _scope = this;
    this.$().on('change', function() {
      var optionValue = false;
      if ($("option:selected", this).val() === 'true') {
        optionValue = $("option:selected", this).val() === 'true';
      } else if ($("option:selected", this).val() === 'false') {
        optionValue = $("option:selected", this).val() === 'true';
      } else {
        optionValue = $("option:selected", this).val();
      }
      _scope.set('value', optionValue);
    });
  }
});
