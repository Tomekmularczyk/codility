/**
 * Trie jest często używany do przetrzymywania znaków.
 * Ma strukture drzewa gdzie kolejne liście tworzą słowa.
 * Możemy tego używać by bardzo szybko znajdować słowa, które zaczynają sie w pewien sposób (***)
 * Liście przechowują informacje o tym, czy jest to kompletne słowo.
 * Przydaje się w sytuacjach gdy mamy do czynienia z walidacją słów w pewnych danych. Np. mamy zescrapować jakąś tablicę danych
 * ... i znaleźć słowa.
 * Często stosuję się referencję do ostatnio szukanej litery by nie przemierzać drzewa od nowa za każdym razem.
 * */

class Node {
    constructor(letter) {
        this.letter = letter;
        this.childNodes = [];
        this.isComplete = false;
    }

    addLetters(letters) {
        if (!letters.length) {
            this.isComplete = true;
            return;
        }

        const existingNode = this.getNode(letters[0]);
        if (existingNode) {
            existingNode.addLetters(letters.slice(1));
        } else {
            const newNode = new Node(letters[0]);
            this.childNodes.push(newNode);
            newNode.addLetters(letters.slice(1));
        }
    }

    getNode(letter) {
        if (!this.childNodes.length) {
            return;
        }
        return this.childNodes.find(node => node.letter === letter);
    }

    getLastNode(letters) {
        if (!letters.length) {
            return this;
        }

        const nextNode = this.childNodes.find(node => node.letter === letters[0]);
        if (!nextNode) {
            return null;
        }

        return nextNode.getLastNode(letters.slice(1));
    }

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
    countWords() {
        if(!this.childNodes.length) {
            return 1;
        }

        const thisNodeCount = this.isComplete ? 1 : 0;
        return thisNodeCount + this.childNodes.reduce((prev, curr) => prev + curr.countWords(), 0);
    }
}

class Trie {
    constructor() {
        this.root = new Node(null);
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
