import merge from '../src/merge';


describe('merge', () => {
    it('should merge three sorted collections into one collections', () => {
        const collection1 = [1, 3, 5];
        const collection2 = [2, 4, 6];
        const collection3 = [10, 8, 6];
        const expected = [1, 2, 3, 4, 5, 6, 6, 8, 10];
        const result = merge(collection1, collection2, collection3);

        expect(result).toEqual(expected);
    });

    it('should handle only one collection with elements', () => {
        const collection1 = [1, 3, 5];
        const collection2: number[] = [];
        const collection3: number[] = [];
        const expectedResult = collection1.slice(); // Create a copy to avoid mutation

        expect(merge(collection1, collection2, collection3)).toEqual(expectedResult);
    });

    it('should handle all empty collections', () => {
        const collection1: number[] = [];
        const collection2: number[] = [];
        const collection3: number[] = [];
        const expectedResult: number[] = [];

        expect(merge(collection1, collection2, collection3)).toEqual(expectedResult);
    });

    it('should handle collections with negative numbers', () => {
        const collection1 = [-2, 0, 3];
        const collection2 = [-1, 4];
        const collection3 = [5, -3];
        const expectedResult = [-3, -2, -1, 0, 3, 4, 5];

        expect(merge(collection1, collection2, collection3)).toEqual(expectedResult);
    });
});
