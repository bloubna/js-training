'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function capitilize(chaine){
    return chaine.substring(0,1).toUpperCase() + chaine.substring(1,chaine.length).toLowerCase();
}

//* Begin of tests
const assert = require('assert')

// End of tests */
assert.strictEqual(typeof capitilize, 'function')
assert.strictEqual(capitilize.length, 1)
assert.strictEqual(capitilize("loubna"),"Loubna")

//date.substring(0, 2);