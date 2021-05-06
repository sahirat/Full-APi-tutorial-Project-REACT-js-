import React, { useState } from 'react'
import { Layout, Button, List } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import './Quotes.css';
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';
const config = {
    apiUrl: 'https://type.fit/api/quotes',
    repoUrl: 'https://github.com/sahirat'
}

const { Header, Content } = Layout

function Quotes() {
    const [quotes, setQuotes] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const Quote = ({ text, author }) => {
        return (
            <span>
                <strong>{text}</strong> &nbsp; <span>{author}</span>
            </span>
        )
    }

    const getQuotes = () => {
        setQuotes([])
        setIsLoading(true)
        fetch(config.apiUrl)
            .then(function (response) {
                return response.json()
            })
            .then((data) => {
                setQuotes(data)
                setIsLoading(false)
            })
            .catch(() => {
                setIsLoading(false)
            })
    }
    return (
        <Layout >
            <Header style={{ backgroundColor:"#212121"}}>
                <div className="container">
                    <span className="site-logo"><FlipCameraAndroidIcon style={{ marginRight:"10px" }} />Inspirational Quotes</span>
                </div>
            </Header>
            
            <Content className="container">
                <List
                    size="small"
                    loading={isLoading}
                    header={
                        <Button style={{ backgroundColor: "#ffc400", fontFamily: "cursive"}}
                            onClick={() => getQuotes()}
                        
                            icon={<DownloadOutlined style={{ fontWeight: "600", backgroundColor: "#ffc400" }}/>}
                            disabled={isLoading}
                            size="large">
                            Click to Show Quotes
            </Button>
                    }
                    footer={<a href={config.repoUrl} style={{ fontWeight:"600", color: "black", fontFamily: "cursive" }}>Fork on Github</a>}
                    bordered
                    dataSource={quotes}
                    renderItem={(quote) => (
                        <List.Item>
                            <Quote text={quote.text} author={quote.author} />
                        </List.Item>
                    )}
                />
            </Content>
        </Layout>

        

    )
}

export default Quotes;