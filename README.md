# Ember-cli-dropdown

This addon was created back in the time that ember is deprecating the VIEW class. However this is still valid today as a way to generate a drop down.

## Installation

* `ember install ember-cli-dropdown`

## Useage


~~If you already use [Ember.Select](http://emberjs.com/api/classes/Ember.Select.html) this is a very easy transition. A typical `Ember.Select` is:~~

In Ember-Cli-Dropdown:

```hbs
{{drop-down content=programmers value=someBindingValue optionValuePath="value" optionLabelPath="display"}}
```

The values of the `optionValuePath` and `optionLabelPath` need to map to the object properties of the `content` array. `content` needs to be an array of objects or it can be a array of `Ember.Object`, either in your component or controller:

```js
contentArray: [ {value: 'open', display: 'Open'}, {value:'closed', display:'Closed'}, {value:'waiting', display:'Waiting'}]
```

then in your hbs:

```hbs
{{drop-down content=contentArray value=ticket.status optionValuePath="value" optionLabelPath="display"}}
```

~~The main changes here is when using `optionValuePath` and `optionLabelPath` you just need to specify the object's property.~~


## A note on ember data boolean type

From the documentation of ember data. They mention it will convert a string of 'true' or 'false' if you speify the ```attr('boolean')```. This don't seem to be the case for version 2.4.0. To deal with this there is now a extra piece of code if you are using true or false as value of a drop down it will first convert it to boolean before setting the value.
