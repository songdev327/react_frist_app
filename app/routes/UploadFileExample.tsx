import axios from "axios";

export default function UploadFileExample() {
  const handleUpload = async (files: FileList | null) => {
    const file = files?.[0];

    if (!file) return;

    const formData = new FormData();
    const url = 'https://jsonplaceholder.typicode.com/posts';

    formData.append('myFile', file);

    await axios.post(url, formData);
  }

  return (
    <div>
      <h1>Upload File Example</h1>
      <input 
        type="file" 
        className="border border-black p-1 m-2 rounded-md" 
        onChange={e => handleUpload(e.target.files)} 
      />
    </div>
  )
}
