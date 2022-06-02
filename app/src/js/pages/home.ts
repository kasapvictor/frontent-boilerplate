const logTime = <T>(data: T): T | string => {
  const now = new Date();

  if (typeof data === 'string') {
    // eslint-disable-next-line no-console
    console.log('check type:', typeof data, 'and date:', now);
  } else {
    // eslint-disable-next-line no-console
    console.log('check type:', typeof data, 'and date:', now);
  }

  // #1 return type Generic
  return data;

  // #2 return sting
  // return "data";
};

const HomePage = () => {
  console.log('Home page - test generics1');

  // console.log(logTime<string>(2)); // error
  // eslint-disable-next-line no-console
  console.log(logTime<string>('hello')); // ok

  // console.log(logTime<number>("2")); // error
  // eslint-disable-next-line no-console
  console.log(logTime<number>(2)); // ok
};

export default HomePage;
