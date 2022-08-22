const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('Employee name should be returned', () => {
      expect(new Intern('Bob', '77', 'bob@bob.com', 'Cal').getName()).toBe('Bob');
    });

    it('Employee name should be returned', () => {
        expect(new Intern('Bob', '77', 'bob@bob.com', 'Cal').getId()).toBe('77');
      });

    it('Employee email should be returned', () => {
        expect(new Intern('Bob', '77', 'bob@bob.com', 'Cal').getEmail()).toBe('bob@bob.com');
    });

    it('Role should be returned', () => {
        expect(new Intern('Bob', '77', 'bob@bob.com', 'Cal').getRole()).toBe('Intern');
    });

    it('School should be returned', () => {
        expect(new Intern('Bob', '77', 'bob@bob.com', 'Cal').getSchool()).toBe('Cal');
    });
});