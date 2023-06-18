const teacher = {
  firsName: "Nguyễn",
  lastName: "Vân",
};

const me = {
  firsName: "Ngô",
  lastName: "Hòa",
  showFullName() {
    console.log(`${this.firsName}  ${this.lastName}`);
  },
};

// me.showFullName.call(teacher);

function logger() {
  const arr = [...arguments];
  console.log(Array.isArray(arr));
}

logger(1, 2, 3, 4, 5, 6, 7);
