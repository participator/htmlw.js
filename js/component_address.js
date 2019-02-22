(function(undefined) {

    if (!window.components) {
        console.warn('%cDev Error: %chtmlw.js components library is not loaded.', 'font-weight:bold', 'font-weight:normal');
    }

    const exports = window.components;

    const Address = Object.create(exports.baseElement);

    Address.create = function create(id, classList, attributes) {
        this.init('address', id, classList, attributes);
    }

    Address.classAdd = function classAdd(classList) {
        this.addClass(classList);
    }

    Address.classRemove = function classRemove(classList) {
        this.removeClass(classList);
    }

    Address.attributesAdd = function attributesAdd(attributes) {
        this.addAttributes(attributes);
    }

    Address.childAdd = function childAdd(child) {
        this.addChild(child);
    }

    Address.attach = function attach(parent) {
        this.insert(parent);
    }

    exports.Address = Address;

})();