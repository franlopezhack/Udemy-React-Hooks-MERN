import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import '@testing-library/jest-dom'
import heroes from "../../data/heroes";


describe('Pruebas en funciones de heroes', () => { 

    test('debe retornar un heroes por id', () => { 
        
        
        const id = 1;
        const heroe = getHeroeById(id);
        
       const heroeData = heroes.find(h => h.id === id);

       expect(heroe).toEqual(heroeData);
     })

     test('debe retornar undefined si heroes no existe', () => { 
        
        
        const id = 10;
        const heroe = getHeroeById(id);
        
    
       expect(heroe).toBe(undefined);
     })

     test('debe retornar un heroes por DC', () => { 
        
        
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);
        
       const heroeData = heroes.filter(h => h.owner === owner);

       expect(heroe).toEqual(heroeData);
     })

     test('debe retornar un array con los héroes de Marvel', () => { 
        
        
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);
        
       

       expect(heroe.length).toBe(2);
     })

 })