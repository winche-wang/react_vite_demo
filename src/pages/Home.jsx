import { useNavigate } from 'react-router-dom'
import { Button, AutoCenter, Space } from 'antd-mobile'

export default function Home() {
  const navigate = useNavigate()
  const goPage = () => {
    navigate('/about')
  }
  return (
    <div>
      <AutoCenter>
        <Space>
          <Button color='primary' onClick={goPage}>GO ABOUT PAGE</Button>
        </Space>
      </AutoCenter>
    </div>
  )
}

