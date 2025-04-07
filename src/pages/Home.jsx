import React, { Component } from 'react'
import { Button } from '../components/Button'
import { Text } from '../components/Text'
import { Input } from '../components/Input'
import { Container } from '../components/Container'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h1>Главное</h1>
                    <Text color="primary" size="large">
                        Люблю чипсы, а кнопка теперь работает
                    </Text>
                    <Button color="secondary" size="large" title="Подтвердить" />
                

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
                    <div className="mt-4 space-x-4">
                    <Button color="secondary" size="large" title="Удалить" />
                    </div>
                </Container>
            </div>
        )
    }
}
