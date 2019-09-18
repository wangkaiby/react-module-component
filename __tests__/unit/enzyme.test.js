import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Example from '../../src/Loading.js'
import { expect } from 'chai';
const { shallow } = Enzyme

Enzyme.configure({ adapter: new Adapter() })

describe('Enzyme shallow', function () {
    it('Example component', function () {
        const buttonName='按钮名'
        let app = shallow(<Example buttonName={buttonName} />)
        let btnName=app.find('div').text()
        expect(btnName).to.be.to.equal('loading.....按钮名')
    })
})
