import React from 'react'

const ConvertForm = () => {
  return (
  <form method="POST" action="/submit">
    <div>
      <label htmlFor="file-upload" className='block mb-2'>Choose a file to upload:</label>
      <input id="file-upload" type="file" />
    </div>
    <button className="btn">Submit</button>
  </form>
  )
}

export default ConvertForm;