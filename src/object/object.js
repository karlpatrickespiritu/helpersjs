(function() {

    var _ = (function () {
        return {
            $: function (data) {
                return {};
            }
        }
    })()

    // boolean
    _.is(somevalue).defined()
    _.is(somevalue).aString()
    _.is(somevalue).aNumber()
    _.is(somevalue).aBoolean()
    _.is(somevalue).aFuncion()
    _.is(somevalue).anObject()
    _.is(somevalue).anArray()
    _.is(somevalue).true()
    _.is(somevalue).false()
    _.is(somevalue).aPropertyOf(object)

    // arrays
    _.does('john').existIn(['john', 'james'])
    _.add('john').to(['james'])
    _.remove('james').in(['james', 'john'])
    _.getLastItem([1, 2, 3])
    _.getFirst([1, 2, 3])

    // strings
    _.convert('hi').toUpperCaseFirstLetters()
    _.convert('hi, i am john\.').toUpperCaseFirstLetters()
    _.convert('notcamelcased').toCamelCase()


    // loops
    _.forEvery([1, 2, 3], function(i, v) {

    })

})()