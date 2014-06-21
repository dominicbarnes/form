# form

A helper for working with HTML forms, contains the functionality of:

 * [component/classes](https://github.com/component/classes)
 * [component/value](https://github.com/component/value)
 * [dominicbarnes/form-element](https://github.com/dominicbarnes/form-element)
 * [dominicbarnes/form-serialize](https://github.com/dominicbarnes/form-serialize)

all wrapped up in a nice package.


## Usage

```html
<form id="my-form">
    <input type="hidden" name="id" value="123456">
    <input type="text" name="user.name" value="dominicbarnes">
    <input type="url" name="user.website" value="http://dbarnes.info/">
</form>
```

```js
var Form = require("form");
var el = document.querySelector("#my-form");

var form = new Form(el);

form.input("id");
// => <input type="hidden" name="id" value="123456">

form.serialize();
// => { id: "123456", user: { name: "dominicbarnes", website: "http://dbarnes.info" } }

form.value("user.name");
// => "dominicbarnes"

form.value("id", "abc123");
// sets "abc123" as the value for the "id" input
```


## API

### Form(el)

Creates a new wrapper (`new` keyword not required) for the input `el` (should be an `HTMLFormElement`)

### Form#input(name)

Returns the form element(s) with the supplied `name`.
(see [dominicbarnes/form-element](https://github.com/dominicbarnes/form-element))

### Form#value(name, val)

Gets or sets the value for the input matching `name`
(see [component/value](https://github.com/component/value))

**NOTE:** This method does not currently support checkboxes or radio groups.

### Form#serialize()

Serializes the entire form into a single JS object.
(see [dominicbarnes/form-serialize](https://github.com/dominicbarnes/form-serialize))

### Form#classes

A CSS class helper via [component/classes](https://github.com/component/classes).
