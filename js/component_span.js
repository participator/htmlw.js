(function(undefined) {

    if (!window.components) {
        console.warn('%cDev Error: %chtmlw.js components library is not loaded.', 'font-weight:bold', 'font-weight:normal');
    }

    const exports = window.components;

    const Span = Object.create(exports.baseElement);

    Span.create = function create(id, classList, attributes) {
        this.init('span', id, classList, attributes);
    }

    Span.classAdd = function classAdd(classList) {
        this.addClass(classList);
    }

    Span.classRemove = function classRemove(classList) {
        this.removeClass(classList);
    }

    Span.attributesAdd = function attributesAdd(attributes) {
        this.addAttributes(attributes);
    }

    Span.childAdd = function childAdd(child) {
        this.addChild(child);
    }

    Span.attach = function attach(parent) {
        this.insert(parent);
    }

    exports.Span = Span;

})();