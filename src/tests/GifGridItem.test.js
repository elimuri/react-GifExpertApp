import { shallow } from "enzyme";
import React from 'react';
import { GifGridItem } from "../components/GifGridItem";

describe("Pruebas con <GifGridItem />", () => {
    const title = 'Un título';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test("debe mostrar el componente correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe tener un parrafo con el title', () => {
        const parrafo = wrapper.find('p');
        expect(parrafo.text().trim()).toBe(title);
    })

    test('debe tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('debe tener animate__fadeIn', () => {
        const div = wrapper.find('div');

        expect(div.hasClass("animate__fadeIn")).toBe(true);
        //otra forma:
        // expect(div.prop('className').includes('animate__fadeIn')).toBe(true)
    })
});
