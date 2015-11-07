(function() {

    var _ = (function () {
        return {
            $: function (data) {
                return {};
            }
        }tpouctouc
    })()


    _.isDefined()
    _.isString()
    _.isNumber()
    _.isNull()
    _.isArray()
    _.isObject()
    _.isFunction()

    _.$('john').exists(['john', 'james'])
    _.$('hi').upperCaseFirstLetter()
    _.$('hi, i am john.').upperCaseFirstLetters()
    _.$('notcamelcased').toCamelCase()


    _.$(['john', 'doe']).each(function (index, value) {
        if (_.$(value).exist(someArray)) {

        }
    })

})()