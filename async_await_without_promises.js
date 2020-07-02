// complete async await

// Sample Data is resolved here.
// No need of creating a promise object explicitly.

// The problem is it does not have a direct way of rejecting.
// You have to explicitly  write a promise object for that.

let getData = async () => 'Sample Data';

let handleData = async () => {
  let data = await getData();
  console.log(data);
};

handleData();
