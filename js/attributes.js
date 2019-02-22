(function(undefined) {

    if (window.attributes) {
        throw new Error('attributes: Name conflict with window.attributes');
    }

    /**
    * Acceptable attributes for each element type
    * null values only accept attributes in global
    * This can be skipped to allow for custom attributes
    */

    const exports = {
        global: ['accesskey', 'autocapitalize', 'class', 'contenteditable', 'contextmenu', 'data-', 'dir', 'draggable', 
                'hidden', 'id', 'inputmode', 'is', 'itemid', 'itemprop', 'itemref', 'itemscope', 'itemtype', 'lang',
                'slot', 'style', 'tabindex', 'title'],
        a: ['download', 'href', 'hreflang', 'ping', 'referrerpolicy', 'rel', 'target', 'type'],
        abbr: null,
        address: null,
        area: ['alt', 'coords', 'download', 'href', 'ping', 'refferrerpolicy', 'rel', 'shape', 'target'],
        article: null,
        aside: null,
        audio: ['autoplay', 'controls', 'crossorigin', 'use-credentials', 'loop', 'muted', 'preload', 'src'],
        b: null,
        base: ['href', 'target'],
        bdi: null,
        bdo: ['dir'],
        blockquote: ['cite'],
        body: ['onafterprint', 'onbeforeprint', 'onbeforeunload', 'onblur', 'onerror', 'onfocus', 'onhashchange', 'onload', 'onmessage',
                'onoffline', 'ononline', 'onpopstate', 'onredo', 'onresize', 'onstorage', 'onundo', 'onunload'],
        br: null,
        button: ['autofocus', 'autocomplete', 'disabled', 'form', 'formaction', 'formenctype', 'formmethod', 'formnovalidate', 
                'formtarget', 'name', 'type', 'value']
    };
    
    window.attributes = exports;
})()