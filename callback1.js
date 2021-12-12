const timeout = () => {
  console.log("Timeout occurred!");
};

setTimeout(timeout, 1000);

const interval = () => {
  console.log("Log is done every second!");
};

setInterval(interval, 1000);
