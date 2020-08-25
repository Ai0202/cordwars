import { readTheTime } from '../src/readTheTime';

describe('自分の回答', () => {
  test('should ', () => {
    expect(readTheTime('13:00')).toBe("one o'clock")
  })
  
  test("should ", () => {
    expect(readTheTime("13:15")).toBe("quarter past one");
  });

  test("should ", () => {
    expect(readTheTime("13:30")).toBe("half past one");
  });

  test("should ", () => {
    expect(readTheTime("13:45")).toBe("quarter to two");
  });

  test("should ", () => {
    expect(readTheTime("13:09")).toBe("nine minutes past one");
  });

  test("should ", () => {
    expect(readTheTime("13:31")).toBe("twenty nine minutes to two");
  });
  test("midnight ", () => {
    expect(readTheTime("00:00")).toBe("midnight");
  });

  test("midnight ", () => {
    expect(readTheTime("23:51")).toBe("nine minutes to midnight");
  });

  test("twelve ", () => {
    expect(readTheTime("12:00")).toBe("twelve o'clock");
  });


  test("twelve ", () => {
    expect(readTheTime("12:01")).toBe("one minute past twelve");
  });
  
})