import { Card, Avatar } from 'antd'

export default function Post({ photo }) {
  return (
    <>
  <Card
    style={{
      width: 300,
    }}

    hoverable
    cover={
      <img
        alt={photo.description}
        src={photo.photo}
      />
    }
    // actions={[
    //   <SettingOutlined key="setting" />,
    //   <EditOutlined key="edit" />,
    //   <EllipsisOutlined key="ellipsis" />,
    // ]}
  >
    <Card.Meta
      avatar={<Avatar src={photo.profilePic} />}
      title={photo.username}
      description={photo.description}
    />
  </Card>
      {/* <img src={photo.photo} alt={photo.description} />
      <img src={photo.profilePic} alt={photo.username} width="250" />
      <p>{photo.username}</p>
      <p>{photo.description}</p> */}
    </>
  )
}