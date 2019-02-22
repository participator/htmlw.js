(function(undefined) {

    if (!window.components) {
        console.warn('%cDev Error: %chtmlw.js components library is not loaded.', 'font-weight:bold', 'font-weight:normal');
    }

    const exports = window.components;

    const Article = Object.create(exports.baseElement);

    Article.create = function create(id, classList, attributes) {
        this.init('article', id, classList, attributes);
    }

    Article.classAdd = function classAdd(classList) {
        this.addClass(classList);
    }

    Article.classRemove = function classRemove(classList) {
        this.removeClass(classList);
    }

    Article.attributesAdd = function attributesAdd(attributes) {
        this.addAttributes(attributes);
    }

    Article.childAdd = function childAdd(child) {
        this.addChild(child);
    }

    Article.attach = function attach(parent) {
        this.insert(parent);
    }

    exports.Article = Article;

})();