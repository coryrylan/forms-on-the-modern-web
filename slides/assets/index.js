
const styles = `
  *, *:before, *:after {
    box-sizing: border-box;
  }

  :host {
    --height: 100%;
    background: ButtonFace;
    color: CanvasText;
    border-top: 1px solid #ccc;
    display: block;
  }

  pre {
    height: var(--height);
    overflow: auto;
    padding: 12px 12px 24px 12px;
    margin: 0;
    line-height: 1.5em;
  }

  header {
    padding: 2px 4px;
    border-bottom: 1px solid #ccc;
    width: 100%;
    font-size: 12px;
  }

  button {
    border: 0;
    cursor: pointer;
  }
`;

const template = document.createElement('template');
template.innerHTML = `
  <style>${styles}</style>
  <header>
    <button aria-label="clear">🚫</button>
    console
  </header>
  <pre></pre>
`;

export class Console extends HTMLElement {
  static formAssociated = true;

  #value = '';

  #logs = [];

  set value(value) {
    this.#value = value;
    this.#pre.innerHTML = this.#value;
    this.#pre.scrollTop = this.#pre.scrollHeight;
  }

  get #pre() {
    return this.shadowRoot.querySelector('pre');
  }

  constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
  
      console.stdlog = console.log.bind(console);
      console.log = (...args) => {
        const type = args[0]?.type ? `"${capitalize(args[0].type)}Event" ` : '';
  
        const values = Array.from(args).map(v => {
          try {
            return JSON.stringify(v, null, 2);
          } catch {
            return '';
          }
        }).filter(v => !v.includes('isTrusted')).join(' ');
  
        this.#logs.push(`${type}${values}`);
        console.stdlog.apply(console, args);
  
        try {
          console.warn(JSON.stringify(this.#logs));
          this.value = this.#logs.map(i => `${i}`).join('\n')
        } catch (_) { }
      };
    }

  connectedCallback() {
    this.shadowRoot.querySelector('button').addEventListener('click', () => {
      this.value = '';
      this.#logs = [];
    });
  }
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

customElements.define('ui-console', Console);


/**
 * VSCode Form Submit Demo Patch
 */
const form = document.querySelector('form');

form.addEventListener('click', (e) => {
  if (e.target.type === 'submit') {
    e.preventDefault();

    if (!form.matches(':has(:invalid)')) {
      form.dispatchEvent(new Event('submit', { type: 'submit' }));
    } else if (!form.noValidate) {
      form.reportValidity();
    }
  }
});
