import axios from "axios";

export default function HttpExample() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const payload = {
    title: "foo",
    body: "bar",
    userId: 1,
  };

  // GET
  const handleGet = async () => {
    try {
      const response = await axios.get(url);
      console.log("GET:", response.data);
    } catch (error) {
      console.error("GET error:", error);
    }
  };

  // POST
  const handlePost = async () => {
    try {
      const response = await axios.post(url, payload);
      console.log("POST:", response.data);
    } catch (error) {
      console.error("POST error:", error);
    }
  };

  // PUT
  const handlePut = async () => {
    try {
      const response = await axios.put(`${url}/1`, payload);
      console.log("PUT:", response.data);
    } catch (error) {
      console.error("PUT error:", error);
    }
  };

  // DELETE
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${url}/1`);
      console.log("DELETE:", response.data);
    } catch (error) {
      console.error("DELETE error:", error);
    }
  };

  return (
    <div>
      <h1>Axios HTTP Example</h1>
      <button className="button" onClick={handleGet}>GET</button>
      <button className="button" onClick={handlePost}>POST</button>
      <button className="button" onClick={handlePut}>PUT</button>
      <button className="button" onClick={handleDelete}>DELETE</button>
    </div>
  );
}
