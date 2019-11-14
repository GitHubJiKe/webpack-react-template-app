export const showAlert = text => alert(text);

export const testAsyncFun = async () => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: [1, 2, 3, 4, 5] });
    }, 2000);
  });
};

export default {
  showAlert,
  testAsyncFun
};
