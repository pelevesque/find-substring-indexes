/* global describe, it */
'use strict'

const expect = require('chai').expect
const findSubstringIndexes = require('../index')

describe('#findSubstringIndexes()', () => {
  it('should return an empty array when the string to look in is empty', () => {
    const str = ''
    const substring = 'e'
    const result = JSON.stringify(findSubstringIndexes(str, substring))
    const expected = JSON.stringify([])
    expect(result).to.equal(expected)
  })

  it('should return an empty array when the string to look for is empty', () => {
    const str = 'abcd'
    const substring = ''
    const result = JSON.stringify(findSubstringIndexes(str, substring))
    const expected = JSON.stringify([])
    expect(result).to.equal(expected)
  })

  it('should return an empty array when the substring is not found', () => {
    const str = 'abcd'
    const substring = 'e'
    const result = JSON.stringify(findSubstringIndexes(str, substring))
    const expected = JSON.stringify([])
    expect(result).to.equal(expected)
  })

  it('should find a single occurrence of a single character', () => {
    const str = 'abcd'
    const substring = 'b'
    const result = JSON.stringify(findSubstringIndexes(str, substring))
    const expected = JSON.stringify([1])
    expect(result).to.equal(expected)
  })

  it('should find a single occurrence of a multi character substring', () => {
    const str = 'a cat in a hat'
    const substring = 'cat'
    const result = JSON.stringify(findSubstringIndexes(str, substring))
    const expected = JSON.stringify([2])
    expect(result).to.equal(expected)
  })

  it('should find multiple occurrences of a single character', () => {
    const str = 'abcdcba'
    const substring = 'b'
    const result = JSON.stringify(findSubstringIndexes(str, substring))
    const expected = JSON.stringify([1, 5])
    expect(result).to.equal(expected)
  })

  it('should find multiple occurrences of a multi character substring', () => {
    const str = 'a cat in a hat'
    const substring = 'at'
    const result = JSON.stringify(findSubstringIndexes(str, substring))
    const expected = JSON.stringify([3, 12])
    expect(result).to.equal(expected)
  })

  it('should find contiguous occurrences of a single character', () => {
    const str = '-aaaa'
    const substring = 'a'
    const result = JSON.stringify(findSubstringIndexes(str, substring))
    const expected = JSON.stringify([1, 2, 3, 4])
    expect(result).to.equal(expected)
  })

  it('should find contiguous occurrences of a multi character substring', () => {
    const str = '-aaaa'
    const substring = 'aa'
    const result = JSON.stringify(findSubstringIndexes(str, substring))
    const expected = JSON.stringify([1, 2, 3])
    expect(result).to.equal(expected)
  })
})
