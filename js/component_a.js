(function(undefined) {

    if (!window.components) {
        console.warn('%cDev Error: %chtmlw.js components library is not loaded.', 'font-weight:bold', 'font-weight:normal');
    }

    const exports = window.components;

    const A = Object.create(exports.baseElement);

    A.create = function create(id, classList, attributes) {
        this.init('a', id, classList, attributes);
    }

    A.classAdd = function classAdd(classList) {
        this.addClass(classList);
    }

    A.classRemove = function classRemove(classList) {
        this.removeClass(classList);
    }

    A.attributesAdd = function attributesAdd(attributes) {
        this.addAttributes(attributes);
    }

    A.childAdd = function childAdd(child) {
        this.addChild(child);
    }

    A.attach = function attach(parent) {
        this.insert(parent);
    }

    exports.A = A;

})();