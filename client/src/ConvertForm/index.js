import React, { createElement, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import axios from 'axios'
import Title from '../Title';
import UploadOption from '../UploadOption';

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

  useEffect(() => {
    const container = document.querySelector("#upload-container")
    createPortal(<p>Hello</p>, container)
  }, [])

  return (
    <>
      <Title tag="h3" className="text-lg">Add a file to upload</Title>
      <form onSubmit={handleSubmit}>
        <div id="upload-container" className='my-4'></div>
        <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          value="Submit" 
        />
      </form>
    </>
  )
}

export default ConvertForm
