import Ember from "ember"

export default Ember.Component.extend({
  tagName: 'select',
  content: null,
  value: '',
  optionValuePath: '',
  optionLabelPath: '',
  disableOption: false,
  disableOptionText: "Please Select",
  checkValueChange: Ember.observer('value', function(){
    if (Ember.isBlank(this.value)) {
      this.$("option[value='']").prop('selected', true);
    } else {
      this.$(`option[value='${this.value}']`).prop('selected', true);
    }
  }),
  generateDisableOption: Ember.computed('disableOption', 'value', function(){
    if(this.disableOption === true && Ember.isBlank(this.value)){
      return Ember.String.htmlSafe(`<option selected="true" disabled="disabled">${this.disableOptionText}</option>`);
    }else if (this.disableOption === true && !Ember.isBlank(this.value)){
      return Ember.String.htmlSafe(`<option disabled="disabled">${this.disableOptionText}</option>`);
    }else{
      return ""
    }
  }),
  initSelect: Ember.on('didInsertElement', function() {
    this.$().find(`option[value='${this.value}']`).prop('selected', true);
    this.$().on('change', () => {
      var optionValue = false;
      if ($("option:selected", this.$()).val() === 'true') {
        optionValue = $("option:selected", this.$()).val() === 'true';
      } else if ($("option:selected", this.$()).val() === 'false') {
        optionValue = $("option:selected", this.$()).val() === 'true';
      } else {
        optionValue = $("option:selected", this.$()).val();
      }
      this.set('value', optionValue);
    });
  })
});
