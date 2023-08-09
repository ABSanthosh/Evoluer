import Tonic from "@socketsupply/tonic";

export class MyGreeting extends Tonic {
  render() {
    return this.html`
    <div>    
        Hello, World.
    </div>`;
  }
}
