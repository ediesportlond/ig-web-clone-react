import { Modal, Form, Input } from 'antd'
export default function Upload() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.error('Failed:', errorInfo);
  };
  return (
    <>
      <Modal title="Upload Photo" open={true}>
        <p>Upload form goes here...</p>
        <Form
          name="post"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name=""
            label=""
          >
            <Input />
          </Form.Item>

        </Form>
      </Modal>
    </>
  )
}