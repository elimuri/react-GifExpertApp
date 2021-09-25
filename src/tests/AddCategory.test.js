import { shallow } from "enzyme"
import { AddCategory } from "../components/AddCategory"
import React from 'react'

describe('Pruebas en <AddCategory />', () => {
    const setCategories = jest.fn(); // estableciendo la funcion de esta manera, puedo saber si fue llamada, cuantas veces fue llamada, etc
    let wrapper;
    
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo'

        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('NO debe postear la información con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){}})
        expect(setCategories).not.toHaveBeenCalled()
    })

    test('debe llamar el setCategories y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        input.simulate('change', {target: {value: 'Grim Fandango'}});
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).toHaveBeenCalled();
        expect(input.text()).toBe('');
    })
})