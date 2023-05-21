interface MyData {
  id: number;
  name: string;
}

const processData = <T,>(data: T): void => {
  console.log(data);
};

const myData: MyData = {
  id: 1,
  name: "John Doe",
};

processData<MyData>(myData); // Logs: { id: 1, name: "John Doe" }
