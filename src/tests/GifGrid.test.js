import { shallow } from "enzyme"
import React from 'react'
import { GifGrid } from "../components/GifGrid";

describe('Pruebas en <AddCategory />', () => {
    let wrapper = shallow(<GifGrid category={'Hollywood monsters'} />);

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
});