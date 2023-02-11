import "./index.css";

const App = `
<div class="container">
  <div>Name: remote-vanilla</div>
  <div>Framework: vanilla</div>
  <div>Language: TypeScript</div>
  <div>CSS: Empty CSS</div>
</div>
`;

const VanillaWrapper = (el: HTMLElement) => {
  el.innerHTML = App;
}

const vanillaApp = document.getElementById('vanilla-app')
if (vanillaApp) VanillaWrapper(vanillaApp);

export default VanillaWrapper;