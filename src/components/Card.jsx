import { useState, useEffect } from 'react'
import { Card, Avatar, Button } from 'antd'

export default function Post({ photo }) {
  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(0)
  const userId = 1
  const like = () => {
    fetch(`https://express-ts-ee.web.app/likes/${photo.id}/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then((res) => {
        setIsLiked(res.isLiked)
        setLikes(res.likes)
      })
      .catch(console.error)
  }

  useEffect(() => {
    fetch(`https://express-ts-ee.web.app/likes/${photo.id}/${userId}`)
      .then(res => res.json())
      .then((res) => {
        setIsLiked(res.isLiked)
        setLikes(res.likes)
      })
      .catch(console.error)
  }, [setIsLiked, userId, photo.id])

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
        actions={[
          <Button onClick={like}>{isLiked ? "💙" : "🤍"}</Button>
        ]}
      >
        <Card.Meta
          avatar={<Avatar src={photo.profilePic} />}
          title={"Likes " + likes}
          description={photo.username + "=> " + photo.description}
        />
      </Card>
    </>
  )
}