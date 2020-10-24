namespace React {

  // essential-typescript
  // https://github.com/Apress/essential-typescript/blob/master/15%20-%20Stand-Alone%20Web%20App/webapp/src/tools/jsxFactory.ts

  export function createElement(tag: any, props: any, ...children: any[]) : HTMLElement {

      function addChild(elem: HTMLElement, child: any) {
        if (!(child instanceof Node)) {
          child = document.createTextNode(child.toString());
        }
        elem.appendChild(child);
      }

    if (typeof tag === "function") {
      const result = tag(props || {})
      return result      
    }

    const elem = document.createElement(tag)

    Object.entries(props || {}).forEach(([name, value]) => {
      if (name.startsWith('on') && name.toLowerCase() in window) {
        elem.addEventListener(name.toLowerCase().substr(2), value)
      }
      else {
        value = (value as any).toString()
        if (name == 'className') {
          elem.className = value
        }
        else {
          elem.setAttribute(name, value)
        }
      }
    })

    children.forEach(child => Array.isArray(child) 
      ? child.forEach(c => addChild(elem, c)) : addChild(elem, child));

    if (props && props.ref) {
      props.ref(elem)
    }

    return elem;
  }

}

export default React
