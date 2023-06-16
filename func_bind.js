const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = (() => {
  const cars = [];
  const root = $("#root");
  const input = $("#input");
  const submit = $("#submit");
  return {
    add(car) {
      cars.push(car);
    },
    delete(index) {
      cars.splice(index, 1);
    },

    handleDelete(e) {
      if (e.target.closest(".delete")) {
        this.delete(e.target.dataset.index);
        this.render();
      }
    },
    render() {
      const html = cars
        .map((car, index) => {
          return `<li>${car}
                    <span class = "delete" data-index="${index}">&times</span>
                </li>`;
        })
        .join("");

      root.innerHTML = html;
    },

    innit() {
      submit.onclick = () => {
        input.value && this.add(input.value);
        this.render();
        input.value = null;
        input.focus();
      };

      root.onclick = this.handleDelete.bind(this);
      this.render();
    },
  };
})();

app.innit();
