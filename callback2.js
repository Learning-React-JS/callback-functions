const sayHi = () => {
  console.log("Hi!");
};

sayHi();

const sayHello = (cb) => {
  cb();
};

sayHello(() => console.log("Hello!"));
