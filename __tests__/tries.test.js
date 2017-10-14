const Trie = require('../src/Trie').Trie;

let trie;

beforeAll(() => {
    trie = new Trie();
    trie.addWord("Bang");
    trie.addWord("Baner");
    trie.addWord("Dzisiaj");
    trie.addWord("hack");
    trie.addWord("hackerrank");

    console.log(JSON.stringify(trie, null, '  '));
});

it('checks correctly if trie has word', () => {
    expect(trie.hasWord('Bane')).toBe(true);
    expect(trie.hasWord('Dzisiaj')).toBe(true);
    expect(trie.hasWord('')).toBe(true);
    expect(trie.hasWord('Bangier')).toBe(false);
    expect(trie.hasWord('Bani')).toBe(false);
});

it('prints correct number of words starting with a phrase', () => {
    expect(trie.countNumberOfWordsThatStartsWith('')).toBe(5);
    expect(trie.countNumberOfWordsThatStartsWith('B')).toBe(2);
    expect(trie.countNumberOfWordsThatStartsWith('Ban')).toBe(2);
    expect(trie.countNumberOfWordsThatStartsWith('Z')).toBe(0);
    expect(trie.countNumberOfWordsThatStartsWith('Dzisiaj')).toBe(1);
    expect(trie.countNumberOfWordsThatStartsWith('hack')).toBe(2);
});

