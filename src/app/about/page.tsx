import { HeaderWrapper } from '@/components/headerWrapper/header-wrapper'
import { Col, Row } from 'antd'
import React from 'react'

const page = () => {
  return (
    <div>
        <HeaderWrapper headerTitle='About Portable hub'/>
        <div>
            <Row>
                <Col xs={24}>
                <div className='flex justify-center items-center'>

                </div>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default page