import React from 'react'

const UploadOption = props => {
  return (
    <>
      <select>
        <option>Test 1</option>
        <option>Test 1</option>
        <option>Test 1</option>
        <option>Test 1</option>
      </select>
      <input className="my-2" id="file-upload" type="file" onChange={handleFileInputChange}/>
    </>
  )
}

export default UploadOption
 