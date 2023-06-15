function createApp() {
  const Cars = [];
  return {
    add(car) {
      Cars.push(car);
    },
    show() {
      console.log(Cars);
    },
  };
}

const Cars = createApp();
console.log(Cars);

Cars.add("bmw");
Cars.add("kia");
Cars.add("mazda");
Cars.add("honda");
Cars.show();
