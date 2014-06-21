var assert = require("assert");
var domify = require("domify");
var Form = require("form");
var simple = require("form/test/simple.html");

describe("Form(el)", function () {
    var el = domify(simple);
    var form = Form(el);

    it("should be a function", function () {
        assert(typeof Form === "function");
    });

    it("should set the element property from el", function () {
        assert.strictEqual(form.element, el);
    });

    it("should not require the new keyword", function () {
        assert(form instanceof Form);
    });

    it("should set up the classes helper automatically", function () {
        assert(form.classes.add && form.classes.remove);
    });
});

describe("Form#input(name)", function () {
    var el = domify(simple);
    var form = Form(el);

    it("should return the username field", function () {
        assert.equal(form.input("username").name, "username");
    });
});

describe("Form#value(name)", function () {
    it("should return the value of the username field", function () {
        var form = Form(domify(simple));
        assert.equal(form.value("username"), "dominicbarnes");
    });

    it("should set the value of the username field", function () {
        var form = Form(domify(simple));
        form.value("username", "testuser")
        assert.equal(form.value("username"), "testuser");
    });
});

describe("Form#serialize([loose])", function () {
    var form = Form(domify(simple));

    it("should serialize the valid fields", function () {
        assert.deepEqual(form.serialize(), {
            username: "dominicbarnes"
        });
    });

    it("should include disabled fields", function () {
        assert.deepEqual(form.serialize(true), {
            username: "dominicbarnes",
            password: "123456"
        });
    });
});
