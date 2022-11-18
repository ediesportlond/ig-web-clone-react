import firebaseConfig from '../firebaseConfig'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { Button, Form } from 'antd'
import { useContext } from 'react'
import { UserContext } from '../App'

export default function Login() {
  const {setUser} = useContext(UserContext)
  const logginWithGoogle = async () => {
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const res = await signInWithPopup(auth, provider)
      .catch(console.error)
    setUser(res.user)
    sessionStorage.setItem("user", JSON.stringify(res.user))
  }

  return (
    <>
      <Form
        name="login"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
      >
        <Form.Item
        >
          <Button type="primary" onClick={logginWithGoogle}>
            Login with Goooooogle
          </Button>

        </Form.Item>
      </Form>
    </>
  )
}