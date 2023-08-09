import Tonic from "../node_modules/@socketsupply/tonic/dist/tonic.min.js";

class MyGreeting extends Tonic {
  render () {
    return this.html`<div>Hello, World.</div>`
  }
}

Tonic.add(MyGreeting, 'my-greeting')