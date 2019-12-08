export default (context, inject) => {
  // app オブジェクトへ関数を直接セットします
  context.$myInjectedFunction = string =>
    console.log('Okay, another function', string)
}
