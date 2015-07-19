export default Em.Component.extend({
  selectClass: '',
  content: null,
  value: '',
  optionValuePath: '',
  optionLabelPath:'',
  didInsertElement: function(){
    this.$().find(`option[value='${this.value}']`).prop('selected', true);
    var _scope = this;
    this.$().on('change', function(){
      _scope.set('value', $("option:selected", this).val());
    });
  }
});
