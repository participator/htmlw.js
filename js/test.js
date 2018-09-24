(function(undefined) {

    if (!window.components) {
        console.warn('%cDev Error: %chtmlw.js components library is not loaded.', 'font-weight:bold', 'font-weight:normal');
    }

    var components = window.components;
    if (!window.components.baseElement) {
        console.warn('%cDev Error: %chtmlw.js baseElement components library is not loaded.', 'font-weight:bold', 'font-weight:normal');
    }
    // Container Object
    var header = Object.create(components.baseElement);
    header.init('div')
    // h1 Object
    var h1 = Object.create(components.baseElement);    
    h1.init('h1', 'title', ['big', 'center'], {required: ''}, 'http://www.w3.org/1999/xhtml');

    h1.addChild('Heading');
    // Test Add Class String
    h1.addClass('center');
    // Test Add Class String[]
    h1.addClass(['bold', 'orange', 'red']);
    // Test Remove Class String
    h1.removeClass('center');
    // Test remove Class String[]
    h1.removeClass(['bold', 'orange']);
    // Test addAttributes
    h1.addAttributes({
        required:'',
        style: 'text-decoration: underline',
    });
    
    // Test addChild string
    header.addChild('Description Text');
    
    // Test addChild Element
    var lessImportant = document.createElement('p');
    lessImportant.style.opacity = .7;
    lessImportant.innerText = 'Minor Heading';
    header.addChild(lessImportant);
    
    // Test addChild baseElement
    header.addChild(h1);
    // Test addChild baseElement
    var subHeading = Object.create(components.baseElement);
    subHeading.init('h2');
    subHeading.addChild('SubHeading');
    header.addChild(subHeading);
    // Test addChild error
    var error = new Error('Errored adding error to addChild');
    header.addChild(error);
    // Test insert
    header.insert(document.body);

    if (!window.components) {
        console.warn('%cDev Error: %chtmlw.js Span components library is not loaded.', 'font-weight:bold', 'font-weight:normal');
    }

    var span = Object.create(components.Span);

    span.create('blank', ['span', 'inline'], {
        style: 'display:flex',
    });

    span.classAdd('underline');
    span.classRemove('inline');
    span.attributesAdd({
        style: 'display:inline',
    });
    span.childAdd('Span');
    span.attach(document.body);
    
})();