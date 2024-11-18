const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles 15 - 8:15', () => {
    const timeInWords = convertTimeToWords('8:15');
    expect(timeInWords).toBe('quarter past eight');
  });

  it('Handles midday', () => {
    const timeInWords = convertTimeToWords('12:00');
    expect(timeInWords).toBe('midday');
  });

  it('Handles 03 - 8:03', () => {
    const timeInWords = convertTimeToWords('8:03');
    expect(timeInWords).toBe('three past eight');
  });

  it('Handles 47 - 8:47', () => {
    const timeInWords = convertTimeToWords('8:47');
    expect(timeInWords).toBe('thirteen to nine');
  });

  it('Handles o"clock - 2:00', () => {
    const timeInWords = convertTimeToWords('2:00');
    expect(timeInWords).toBe("two o'clock");
  });

  it('Handles time past midday - 13:30', () => {
    const timeInWords = convertTimeToWords('13:30');
    expect(timeInWords).toBe('half past one');
  });
});
