import { Contact } from './contact';

describe('Person', () => {
  it('should create an instance', () => {
    expect(new Contact(0,'',0)).toBeTruthy();
  });
});
