# Ember-cli-dropdown

Alternative to Ember.Select that ember-cli don't complain about using 'view'.

## Installation

* `ember install ember-cli-dropdown`

## Useage

If you already use [Ember.Select](http://emberjs.com/api/classes/Ember.Select.html) this is a very easy transition. A typical `Ember.Select` is:

```
{{view "select" content=programmers optionValuePath="content.id" optionLabelPath="content.firstName" value=someBindingValue class='some classname'}}
```

In Ember-Cli-Dropdown:

```
{{drop-down content=programmers value=someBindingValue selectClass="some classname" optionValuePath="value" optionLabelPath="display"}}
```

The main changes here is `class` is now `selectClass` and when using `optionValuePath` and `optionLabelPath` you just need to sepicfy the object's property.
