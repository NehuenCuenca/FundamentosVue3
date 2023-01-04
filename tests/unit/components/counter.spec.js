import { shallowMount } from "@vue/test-utils";
import Counter from '@/components/Counter.vue'


describe('Counter component', () => { 
    // PARA ACTUALIZAR EL SNAPSHOT, USAR ESTO EN CMD: npm run test:unit -- -u
    let wrapper;

    // Aca creamos una instancia nueva del componente por cada vez que se ejecuta un test()
    beforeEach(() => {
        wrapper = shallowMount( Counter );
    })

    /* test('Debe de hacer match con el snapshot', () => {         
        expect( wrapper.html() ).toMatchSnapshot();
    }); */

    test('h2 debe tener el valor por defecto (Counter)', () => { 
        expect( wrapper.find('h2').exists() ).toBeTruthy()

        const h2Text = wrapper.find('h2').text();
        expect( h2Text ).toBe('Counter')
    });

    test('El valor por defecto debe ser 100 en el parrafo', () => { 
        // const allParagraphs = wrapper.findAll('p');
        // expect( allParagraphs[1].text() ).toBe('100');

        const value = wrapper.find('p[data-testid="counter"]').text();
        expect( value ).toBe('100');
    });

    test('Debe de incrementar y decrementar el valor del contador', async() => {         
        const [ increaseBtn, decreaseBtn ] = wrapper.findAll('button');
        
        await increaseBtn.trigger('click');
        await increaseBtn.trigger('click');
        await increaseBtn.trigger('click');
        
        await decreaseBtn.trigger('click');
        await decreaseBtn.trigger('click');

        const value = wrapper.find('p[data-testid="counter"]').text();
        
        expect( value ).toBe('101');
    });


    test('Debe de establecer el  valor por defecto', () => { 
        const { start } = wrapper.props();
        
        const value = wrapper.find('p[data-testid="counter"]').text();
        expect( Number(value) ).toBe(start)
    });

    test('debe mostrar la prop title', () => { 
        const title = 'Hola mundo!!'
        const wrapper = shallowMount( Counter, {
            props: {
                title
            }
        } );

        console.log(wrapper.html())
        expect( wrapper.find('h2').text() ).toBe(title);
    });
});