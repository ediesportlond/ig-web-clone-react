import { initializeApp } from 'firebase/app'
import { getStorage, ref, uploadBytes } from 'firebase/storage'
import { Modal, Form, Input, Button, Upload } from 'antd'
import firebaseConfig from '../firebaseConfig'

export default function UploadModal({ setShowUpload, setPhotoList }) {
  const onFinish = async (values) => {
    //0. connect to firebase storage
    const app = initializeApp(firebaseConfig)
    const storage = getStorage(app)

    //1. upload photo to storage bucket
    const fileName = encodeURI(values.photo.file.name)
    const imageRef = ref(storage, `photos/${fileName}`)

    await uploadBytes(imageRef, values.photo.file.originFileObj)
      .catch(err => {
        alert(err)
        return
      })

    //2. figure out URL for that photo 
    const photoURL = `https://firebasestorage.googleapis.com/v0/b/upload-storage-ee.appspot.com/o/photos%2F${fileName}?alt=media`

    //3. put that url into new photo obj
    let newPhotoObj = values
    newPhotoObj.photo = photoURL

    //4. POST to api
    // 5. get new list
    fetch('https://express-ts-ee.web.app/photos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then(res => res.json())
      .then(res => {
        //6. setPhotoList and close modal
        setPhotoList(res.message)
        setShowUpload(false)
      })
      .catch(console.error)
  };
  const onFinishFailed = (errorInfo) => {
    console.error('Failed:', errorInfo);
  };
  return (
    <>
      <Modal title="Upload Photo" open={true} footer={null} onCancel={() => setShowUpload(false)}>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          name="post"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            label="Username"
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="profilePic"
            label="Profile Image URL"
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="photo"
            label="Upload an image"
          >
            <Upload listType="picture-card"
            maxCount={1}>
              ➕
            </Upload>
          </Form.Item>

          <Form.Item
            name="description"
            label="Description"
          >
            <Input.TextArea rows={4} required />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button htmlType="submit">Post</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}