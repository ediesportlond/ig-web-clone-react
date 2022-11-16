import { useEffect, useState } from 'react'
import { Button } from 'antd'
import UploadModal from './UploadModal'

export default function Feed() {
  const [photoList, setPhotoList] = useState()
  const [showUpload, setShowUpload] = useState(false)

  useEffect(() => {
    fetch('https://express-ts-ee.web.app/photos')
      .then(res => res.json())
      .then(data => setPhotoList(data.message))
      .catch(console.error)
  }, [setPhotoList])
  return (
    <>
      <section>
        {
          photoList
            ? <p>You have this many posts {photoList.length}</p>
            : <p>Comming Soon... ⏱⏱⏱</p>
        }
        {showUpload && <UploadModal setShowUpload={setShowUpload} setPhotoList={setPhotoList}/>}
        <Button onClick ={()=>setShowUpload(true)}className="fab" type="primary" shape="circle" size="large">➕</Button>
      </section>
    </>
  )
}