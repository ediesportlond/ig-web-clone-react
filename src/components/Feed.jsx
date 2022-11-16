import { useEffect, useState } from 'react'
import { Button } from 'antd'
import Upload from './Upload'

export default function Feed() {
  const [photoList, setPhotoList] = useState()
  const [showUpload, setShowUpload] = useState(false)

  useEffect(() => {
    fetch('https://express-ts-ee.web.app/photos')
      .then(res => res.json())
      .then(data => setPhotoList(data.message))
      .catch(console.error)
  }, [setPhotoList])
  console.log(photoList)
  return (
    <>
      <section>
        {
          photoList
            ? <p>You have this many posts {photoList.length}</p>
            : <p>Comming Soon... ⏱⏱⏱</p>
        }
        {showUpload && <Upload />}
        <Button onClick ={()=>setShowUpload(true)}className="fab" type="primary" shape="circle" size="large">➕</Button>
      </section>
    </>
  )
}