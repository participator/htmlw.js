(function(){
    
    if (!window.components) {
        window.components = {};
    }
    else {
        throw new Error('components.Element: Name conflict with window.components');
    }

    var exports = window.components;

    var baseElement = {
        /*
        * Create the element with the passed in attibutes
        * @param {string} element type to create
        * @param {string|number} id id property
        * @param {object Array} classList array of string class names to add in the class attribute
        * @param {object} attributes object of any attribute to add
        * @param {string} namespace string of namespace to create the element as
        */
        init: function(type, id, classList, attributes, namespace) {
            this.id = id;
            this.attributes = attributes;
            this.children = [];
            this.element = {};
            this.namespace = namespace;

            if (!type) throw new Error ('components.Element: type must be defined for the element');

            
            if (!namespace) {
                this.element = document.createElement(type);
            }
            
            else {
                this.element = document.createElementNS(namespace, type);
            }

            if (id && typeof id  === 'string' || typeof id === 'number') {
                this.element.id = id;
            }
            
            if (classList && classList.length > 0) {
                this.addClass(classList);
            }

            if (attributes) {
                this.addAttributes(attributes);
            }
        },
        /*
        * Adds classes to the element
        * @param {string | string[]} classList string or array of strings to add
        */
        addClass: function(classList) {
            if (typeof classList === 'string' ) {
                this.element.classList.add(classList);
            }
            else if (Array.isArray(classList)) {
                for (var index in classList) {
                    this.element.classList.add(classList[index]);
                }
            }
        },
        /*
        * Remove classes from the element
        * @param {string | {object Array}} classList string or array of strings to remove
        */
        removeClass: function(classList) {
            if (typeof classList === 'string' ) {
                this.element.classList.remove(classList);
            }
            else if (Array.isArray(classList)) {
                for (var index in classList) {
                    this.element.classList.remove(classList[index]);
                }
            }
        },
        /*
        * Add element's attributes to the element
        * @param {object Object} attributes {name: value} object of attributes to add
        */
        addAttributes: function(attributes) {
            for (var attribute in attributes) {
                this.element.setAttribute(attribute, attributes[attribute]);
            }
        },
        /*
        * Add child element
        * @param {string | {object Element} | {object baseElement}} element to add as an child
        */
       addChild: function(child) {
           if (typeof child === 'string') {
               var textNode = document.createTextNode(child);
               this.element.appendChild(textNode);
               this.children.push(textNode);
           }
           else if (child instanceof Element) {
               this.element.appendChild(child);
               this.children.push(child);
           }
           else if (baseElement.isPrototypeOf(child)
                    && child
                    && child.element) {
               this.element.appendChild(child.element);
               this.children.push(child);
           }
           else {
               this.children.push({message: 'error added child', child: child});
           }
       },
       addEvent: function addEvent(type, listener) {
           this.element.addEventListener(type, listener);
       },
       removeEvent: function removeEvent(type, listener) {
           this.element.removeEventListener(type, listener);
       },
        /*
        * Append element to given parent element
        * @param {object ELEMENT} parent 
        */
        insert: function(parent) {
            parent.appendChild(this.element);
        }
    }

    exports.baseElement = baseElement;
    
})();