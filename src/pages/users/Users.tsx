import { useState } from "react";
import { User } from "../../type";

const Users = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const fetcholi = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      if (response.ok) {
        setData(data);
      } else {
        setErrMsg("What the FUCK are you looking for");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  if (errMsg) {
    return <h3>{errMsg}</h3>;
  }

  return (
    <>
      <h1>get list of all users</h1>
      <button onClick={fetcholi}>get data</button>
      <hr />
      {loading ? (
        <h1 data-testid={"loading-header"}>loading...</h1>
      ) : (
        <ul>
          {data.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      )}
    </>
  );
};

export default Users;
