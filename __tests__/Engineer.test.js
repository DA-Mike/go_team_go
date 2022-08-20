const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('Employee name should be returned', () => {
      expect(new Engineer('Bob', '77', 'bob@bob.com', 'github.com').getName()).toBe('Bob');
    });

    it('Employee ID should be returned', () => {
        expect(new Engineer('Bob', '77', 'bob@bob.com', 'github.com').getId()).toBe('77');
    });

    it('Employee email should be returned', () => {
        expect(new Engineer('Bob', '77', 'bob@bob.com', 'github.com').getEmail()).toBe('bob@bob.com');
    });

    it('Role should be returned', () => {
        expect(new Engineer('Bob', '77', 'bob@bob.com', 'github.com').getRole()).toBe('Engineer');
    });

    it('Role should be returned', () => {
        expect(new Engineer('Bob', '77', 'bob@bob.com', 'github.com').getGithub()).toBe('github.com');
    });
});