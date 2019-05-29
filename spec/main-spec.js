const main = require('../main/main');
console.log("test")

describe('main()', () => {
    it('should calculate the remaindar', () => {
        console.log("test")
        expect(main(9, 3)).toBe(0);
        expect(main(11, 4)).toBe(3);
    });
    
});
