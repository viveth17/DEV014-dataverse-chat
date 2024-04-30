import { computeStats, filterData } from '../src/lib/dataFunctions.js';
import { sortBySharkSize } from '../src/lib/dataFunctions.js';
import { data } from '../src/data/dataset.js';


describe('filterData', () => {
  it('should filter data by a specific value', () => {
    const filterBy = 'name';
    const value = 'Tiburón Megamouth';
    const expected = [{
      "id": "megachasma_pelagios",
      "name": "Tiburón Megamouth",
      "shortDescription": "Raro tiburón de aguas profundas.",
      "nombreDeLaEspecie": "Megachasma pelagios",
      "imageUrl": "https://critter.science/wp-content/uploads/2021/01/ms1a-1180x520.jpg",
      "description": "Descubierto en 1976, el tiburón Megamouth es una especie poco común con solo unos pocos avistamientos. Posee una mandíbula peculiar que se abre ampliamente para alimentarse de plancton y pequeños peces. Vive en aguas profundas y su hábitat se extiende por todo el mundo, aunque se desconoce su población exacta. A pesar de su tamaño, es difícil de rastrear debido a su hábitat inaccesible y su comportamiento nocturno. Sin embargo, su papel en el ecosistema marino es crucial para mantener el equilibrio.",
      "facts": {
        "approximateLongevity": 100,
        "locationOfTheSpecie": "Aguas profundas",
        "conduct": "Mayormente solitario, se alimenta principalmente por la noche",
      },
      "nutrition": "Plancton, pequeños peces",
      "maximumSizeMtr": 6,
    }];
    expect(filterData(data, filterBy, value)).toEqual(expected);
  });
});


describe('sortBySharkSize', () => {
  test('Ordena los datos por tamaño de tiburón de forma ascendente', () => {
    const data = [
      { name: 'Tiburón Megamouth', maximumSizeMtr: 6 },
      { name: 'Tiburón Ballena', maximumSizeMtr: 14 },
      { name: 'Tiburón Zorro', maximumSizeMtr: 3.5 },
    ];
    const sortBy = 'maximumSizeMtr';
    const sortOrder = 'asc';
    const sortedData = sortBySharkSize(data, sortBy, sortOrder);

    expect(sortedData).toEqual([
      { name: 'Tiburón Zorro', maximumSizeMtr: 3.5 },
      { name: 'Tiburón Megamouth', maximumSizeMtr: 6 },
      { name: 'Tiburón Ballena', maximumSizeMtr: 14 },
    ]);
  });

  test('Ordena los datos por tamaño de tiburón de forma descendente', () => {
    const data = [
      { name: 'Tiburón Megamouth', maximumSizeMtr: 6 },
      { name: 'Tiburón Ballena', maximumSizeMtr: 14 },
      { name: 'Tiburón Zorro', maximumSizeMtr: 3.5 },
    ];
    const sortBy = 'maximumSizeMtr';
    const sortOrder = 'desc';
    const sortedData = sortBySharkSize(data, sortBy, sortOrder);

    expect(sortedData).toEqual([
      { name: 'Tiburón Ballena', maximumSizeMtr: 14 },
      { name: 'Tiburón Megamouth', maximumSizeMtr: 6 },
      { name: 'Tiburón Zorro', maximumSizeMtr: 3.5 },
    ]);
  });
  test('Ordena los datos por tamaño de tiburón de forma ascendente cuando no se especifica un campo de ordenación', () => {
    const data = [
      { name: 'Tiburón Megamouth', maximumSizeMtr: 6 },
      { name: 'Tiburón Ballena', maximumSizeMtr: 14 },
      { name: 'Tiburón Zorro', maximumSizeMtr: 3.5 },
    ];
    const sortBy = null; 
    const sortOrder = 'asc';

    const sortedData = sortBySharkSize(data, sortBy, sortOrder);

    expect(sortedData).toEqual([
      { name: 'Tiburón Zorro', maximumSizeMtr: 3.5 },
      { name: 'Tiburón Megamouth', maximumSizeMtr: 6 },
      { name: 'Tiburón Ballena', maximumSizeMtr: 14 },

    ]);
  });
  test('Devuelve cero cuando los tamaños de los tiburones son iguales', () => {
    const data = [
      { name: 'Tiburón Megamouth', maximumSizeMtr: 6 },
      { name: 'Tiburón Ballena', maximumSizeMtr: 14 },
      { name: 'Tiburón Zorro', maximumSizeMtr: 14 },
    ];
    const sortBy = 'maximumSizeMtr';
    const sortOrder = 'asc';

    const sortedData = sortBySharkSize(data, sortBy, sortOrder);

   
    expect(sortedData).toEqual([
      { name: 'Tiburón Megamouth', maximumSizeMtr: 6 },
      { name: 'Tiburón Ballena', maximumSizeMtr: 14 },
      { name: 'Tiburón Zorro', maximumSizeMtr: 14 },
    ]);
  });
 
  describe('computeStats', () => {
    test('Calcula el promedio de la longevidad aproximada', () => {
      const data = [
        { facts: { approximateLongevity: 100 } },
        { facts: { approximateLongevity: 70 } },
        { facts: { approximateLongevity: 24 } },
      ];
      const average = computeStats(data);

      expect(average).toBe('64.67');


    });
  });
});
