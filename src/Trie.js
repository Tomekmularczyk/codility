/**
 * Trie jest często używany do przetrzymywania znaków.
 * Ma strukture drzewa gdzie kolejne liście tworzą słowa.
 * Możemy tego używać by bardzo szybko znajdować słowa, które zaczynają sie w pewien sposób (***)
 * Liście przechowują informacje o tym, czy jest to kompletne słowo.
 * Przydaje się w sytuacjach gdy mamy do czynienia z walidacją słów w pewnych danych. Np. mamy zescrapować jakąś tablicę danych
 * ... i znaleźć słowa.
 * Często stosuję się referencję do ostatnio szukanej litery by nie przemierzać drzewa od nowa za każdym razem.
 * */

/**
 *
 * [
 *   b: [
 *     a: [     <- "ba" could be word too
 *       n: [
 *         g: []    <- word
 *         e: [
 *           r: []  <- word
 *         ]
 *         d: []    <- word
 *       ]
 *       d: [
 *         u: [
 *           m: []  <- word
 *         ]
 *       ]
 *     ]
 *   ]
 * ]
 */

class Node {
    constructor() {
        this.childNodes = new Map();
        this.isComplete = false;
    }

    addLetters(letters) {
        if (!letters.length) {
            this.isComplete = true;
            return;
        }

        const existingNode = this.childNodes.get(letters[0]);
        if (existingNode) {
            existingNode.addLetters(letters.slice(1));
        } else {
            const newNode = new Node();
            this.childNodes.set(letters[0], newNode);
            newNode.addLetters(letters.slice(1));
        }
    }

    getLastNode(letters) {
        if (!letters.length) {
            return this;
        }

        const nextNode = this.childNodes.get(letters[0]);
        if (!nextNode) {
            return null;
        }

        return nextNode.getLastNode(letters.slice(1));
    }

    countWords() {
        if(!this.childNodes.size) {
            return 1;
        }

        let words = this.isComplete ? 1 : 0;
        this.childNodes.forEach(node => words += node.countWords());
        return words;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    addWord(word) {
        this.root.addLetters(word.split(''));
    }

    hasWord(word) {
        const letters = word.split('');
        return !!this.root.getLastNode(letters);
    }

    countNumberOfWordsThatStartsWith(phrase) {
        const letters = phrase.split('');
        const node = this.root.getLastNode(letters);
        return node ? node.countWords() : 0;
    }

}

module.exports.Trie = Trie;
