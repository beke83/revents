// random functions required in the app is added here

//for something to wait for when the function finishes, we need
//to return a new promise
export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
