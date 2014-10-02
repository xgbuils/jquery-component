function Component(element, options) {
    this.element = element
    this.options = options
}

function functionName(fun) {
    if (fun.name) {
        return fun.name
    } else {
        var str = fun.toString()
        return str.substring(9, str.indexOf('('))
    }
}

Component.add = function($, classCtor) {

    var componentName = functionName(classCtor).toLowerCase()
    $.fn[componentName] = function() {
        var length = arguments.length
        if (length > 2) {
            throw new Error('parameter error')
        }
        
        var arg0 = arguments[0]
        var arg1 = arguments[1]
        if (typeof arg0 === 'string') {
            var component
            if (length === 2) {
            	console.log('setear valor')
                this.each(function(index, elem) {
                    component = $(elem).data(componentName)
                    component.options[arg0] = arg1
                })                
            } else {
            	console.log('obtener valor')
                component = $(this[0]).data(componentName)
                return component.options[arg0]
            }
        } else {
            if (length === 0) {
            	console.log('obtener componente')
                return $(this[0]).data(componentName)
            } else if (length === 1 && arg0 !== null && typeof arg0 === 'object') {
                this.each(function(index, elem) {
                    console.log('constructor')
                    component = $(elem).data(componentName, new classCtor(elem, arg0))
                })
            } else {
                throw new Error('parameter error')
            }
       }
       return this
    }
}