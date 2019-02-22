(function(undefined) {

    if (!window.components) {
        console.warn('%cDev Error: %chtmlw.js components library is not loaded.', 'font-weight:bold', 'font-weight:normal');
    }

    const exports = window.components;

    const Aside = Object.create(exports.baseElement);

    Aside.create = function create(id, classList, attributes) {
        this.init('aside', id, classList, attributes);
    }

    Aside.classAdd = function classAdd(classList) {
        this.addClass(classList);
    }

    Aside.classRemove = function classRemove(classList) {
        this.removeClass(classList);
    }

    Aside.attributesAdd = function attributesAdd(attributes) {
        this.addAttributes(attributes);
    }

    Aside.childAdd = function childAdd(child) {
        this.addChild(child);
    }

    Aside.attach = function attach(parent) {
        this.insert(parent);
    }

    exports.Aside = Aside;

})();