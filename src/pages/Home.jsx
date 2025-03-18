import React, { Component } from 'react'
import { Button } from '../components/Button'
import { Text } from '../components/Text'
import { Input } from '../components/Input'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Главное</h1>
                <Text color="primary" size="large">
                    Люблю чипсы, а кнопка не работает почему то
                </Text>
        
                <Input
                    type="text"
                    placeholder="Enter your name"
                    color="primary"
                    size="medium"
                />
        
                <Input
                    type="email"
                    placeholder="Enter your email"
                    color="secondary"
                    size="large"
                />
            </div>
        )
    }
}
