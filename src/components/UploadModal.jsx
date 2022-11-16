import { Modal, Form, Input, Button, Upload } from 'antd'
export default function UploadModal({ setShowUpload, setPhotoList }) {
  const onFinish = (values) => {
    console.log('Success:', values);
    setPhotoList([values])
    setShowUpload(false)
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
            <Upload listType="picture-card">
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