const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('Employee name should be returned', () => {
      expect(new Employee('Bob', '77', 'bob@bob.com').getName()).toBe('Bob');
    });

    it('Employee ID should be returned', () => {
        expect(new Employee('Bob', '77', 'bob@bob.com').getId()).toBe('77');
    });

    it('Employee email should be returned', () => {
        expect(new Employee('Bob', '77', 'bob@bob.com').getEmail()).toBe('bob@bob.com');
    });

    it('Role should be returned', () => {
        expect(new Employee('Bob', '77', 'bob@bob.com').getRole()).toBe('Employee');
    });
});