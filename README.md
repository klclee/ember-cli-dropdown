# Ember-cli-dropdown

This addon was created back in the time that ember is deprecating the VIEW class. However this is still valid today as a way to generate a drop down.

## Installation

* `ember install ember-cli-dropdown`

## Useage


~~If you already use [Ember.Select](http://emberjs.com/api/classes/Ember.Select.html) this is a very easy transition. A typical `Ember.Select` is:~~

~~```
{{view "select" content=programmers optionValuePath="content.id" optionLabelPath="content.firstName" value=someBindingValue class='some classname'}}
```~~

In Ember-Cli-Dropdown:

```
{{drop-down content=programmers value=someBindingValue optionValuePath="value" optionLabelPath="display"}}
```

~~The main changes here is when using `optionValuePath` and `optionLabelPath` you just need to specify the object's property.~~


## A note on ember data boolean type

From the documentation of ember data. They mention it will convert a string of 'true' or 'false' if you speify the ```attr('boolean')```. This don't seem to be the case for version 2.4.0. To deal with this there is now a extra piece of code if you are using true or false as value of a drop down it will first convert it to boolean before setting the value.
