
export default class ReactDOM {

  public static render(element: any, container: any) {
    console.log('ReactDOM.render()')
    container.appendChild(element)
  }

}