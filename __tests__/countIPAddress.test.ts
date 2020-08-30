import { countIpAddress } from '../src/countIPAddress'

describe('自分の回答', () => {
  test('', () => {
    expect(countIpAddress("10.0.0.0", "10.0.0.50")).toBe(50);
  })

  test('', () => {
    expect(countIpAddress("10.0.0.0", "10.0.0.255")).toBe(255);
  })

  test('', () => {
    expect(countIpAddress("10.0.0.0", "10.0.1.0")).toBe(256);
  })

  test('', () => {
    expect(countIpAddress("20.0.0.10", "20.0.1.0")).toBe(246);
  })
  
})