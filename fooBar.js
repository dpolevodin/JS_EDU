const fooBar = () => {
  for (let i = 0; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('fooBar');
    } else if (i % 3 == 0) {
      console.log('foo')
    } else if (i % 5 == 0) {
      console.log('Bar');
    } else {
      console.log(i);
    }
  }
}
fooBar();
