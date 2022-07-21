import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas 09-promesas', () => {

    test('Debe de retornar un herore', (done) => {

        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done()
            })

    })

    test('Debe de retornar un error si heroe no existe', (done) => {

        const id = 100;
        getHeroeByIdAsync(id)
           .catch(error => {
            expect(error).toBe(`No se pudo encontrar el héroe${id}`);
            done()
           })
    })

})