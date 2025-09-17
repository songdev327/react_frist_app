import axios from 'axios';

export default function HeaderExample() {
  const handleClick = async () => {
    const headers = {
      'Authorization': 'Bearer ' + 'your_token_here'
    }
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const response = await axios.get(url, { headers });
    console.log(response.data);
  }

  return (
    <div>
      <h1>Header Example</h1>
      <button className='button' onClick={handleClick}>
        Click me
      </button>
    </div>
  )
}
