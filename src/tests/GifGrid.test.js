import { shallow } from "enzyme"
import React from 'react'
import { GifGrid } from "../components/GifGrid";
import { useFetchGifs } from "../hooks/useFetchGifs";

jest.mock("../hooks/useFetchGifs");

describe('Pruebas en <AddCategory />', () => {
    test('debe mostrarse correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(<GifGrid category={"Hollywood monsters"} />);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostrar items cuando se cargan imagenes useFetchGifs', () => {
        const gifs = [
          {
            id: "ABC",
            url: "https://localhost/cualquier/cosa.jpg",
            title: "Cualquier cosa",
          },
          {
            id: "123",
            url: "https://localhost/cualquier/cosa.jpg",
            title: "Cualquier cosa",
          }
        ];

        useFetchGifs.mockReturnValue({
          data: gifs,
          loading: false,
        });

        const wrapper = shallow(<GifGrid category={"Hollywood monsters"} />);
        
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
});