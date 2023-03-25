import React, { useState } from 'react'
import axios from 'axios'

const ConvertForm = () => {
  const [inputFilesArray, setInputFilesArray] = useState(null);

  console.log(inputFilesArray);

  const handleFileInputChange = (e) => {
    setInputFilesArray(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Create a new FormData object and append the file to it
    const formData = new FormData()
    formData.append('file', inputFilesArray)

    axios.post('http://localhost:3000/convert', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.error(error)
      });
  }

  return (
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="file-upload" className='block mb-2'>Choose a file to upload:</label>
      <input id="file-upload" type="file" onChange={handleFileInputChange}/>
    </div>
    <input type="submit" value="Submit" />
  </form>
  )
}

export default ConvertForm
