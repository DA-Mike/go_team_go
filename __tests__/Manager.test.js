const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('Employee name should be returned', () => {
      expect(new Manager('Bob', '77', 'bob@bob.com', '01').getName()).toBe('Bob');
    });

    it('Employee name should be returned', () => {
        expect(new Manager('Bob', '77', 'bob@bob.com', '01').getId()).toBe('77');
      });

    it('Employee email should be returned', () => {
        expect(new Manager('Bob', '77', 'bob@bob.com', '01').getEmail()).toBe('bob@bob.com');
    });

    it('Role should be returned', () => {
        expect(new Manager('Bob', '77', 'bob@bob.com', '01').getRole()).toBe('Manager');
    });

    it('Office number should be returned', () => {
        expect(new Manager('Bob', '77', 'bob@bob.com', '01').getOfficeNumber()).toBe('01');
    });
});