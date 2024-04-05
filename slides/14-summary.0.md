<link rel="stylesheet" href="./assets/index.css" />
<script type="module" src="./assets/index.js"></script>
<style>
  h1 {
    border: 0;
    border-right: 2px solid #ccc;
    display: block;
    width: fit-content;
    padding-right: 1ch;
    padding: 0 6px;
    min-height: 36px;
  }
  h1.animate {
    animation: border-animation 1000ms infinite alternate;
  }
  @keyframes border-animation {
    0% {
      border-right: 2px solid #ccc;
    }
    50% {
      border-right: 2px solid transparent;
    }
    100% {
      border-right: 2px solid #ccc;
    }
  }
</style>

# Thank You

- https://github.com/coryrylan/forms-on-the-modern-web
- https://coryrylan.com


<script type="module">
  async function* getNextCharacter(string) {
    for (const char of string) {
      yield await new Promise(r => {
        setTimeout(() => {
          r(char)
        },  getRandomNumber(100, 200));
      });
    }
  }

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  async function simulate(value, element) {
    for await (const char of getNextCharacter(value)) {
      element.textContent = element.textContent + char;
    }
  }

  const value = 'Thank You';
  const heading = document.querySelector('h1');
  heading.textContent = '';
  await simulate(value, heading);
  heading.className = 'animate';

  setInterval(async () => {
    if (heading.textContent === value) {
      heading.className = '';
      heading.textContent = ' ';
      await simulate(value, heading);
      heading.className = 'animate';
    }
  }, 10000);
</script>