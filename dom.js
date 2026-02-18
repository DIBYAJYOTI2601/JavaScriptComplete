/* 
->Core Selection
    getElementById(id) → Selects a single element by its id.
    getElementsByClassName(class) → Selects all elements with a given class (HTMLCollection).
    getElementsByTagName(tag) → Selects all elements with a given tag name (HTMLCollection).
    querySelector(selector) → Selects the first element matching a CSS selector.
    querySelectorAll(selector) → Selects all elements matching a CSS selector (NodeList).

->Node Creation & Manipulation
    createElement(tag) → Creates a new element node (e.g., <div>).
    createTextNode(text) → Creates a text node.
    createComment(text) → Creates a comment node.
    createDocumentFragment() → Creates a lightweight container for grouping nodes.
    appendChild(node) → Adds a child node.
    removeChild(node) → Removes a child node.
    replaceChild(newNode, oldNode) → Replaces one child node with another.

->Document Information
    document.body → The <body> element.
    document.head → The <head> element.
    document.title → The page title.
    document.URL → The full URL of the document.
    document.domain → The domain name.
    document.cookie → Cookies associated with the document.

->Events & Interaction
    addEventListener(event, handler) → Attach an event handler.
    removeEventListener(event, handler) → Remove an event handler.
    activeElement → Returns the currently focused element.

->Other Useful Methods
    open() / close() → Open/close a stream to write into the document.
    write(text) → Write HTML directly into the document (rarely used now).
    adoptNode(node) → Move a node from another document into the current one.
    importNode(node, deep) → Copy a node from another document.
*/


document.getElementsByClassName('header1')[0].innerHTML = 'Hello World';
console.log(document.getElementsByClassName('header1'));



