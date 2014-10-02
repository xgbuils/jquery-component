require.config({
    baseUrl: '',
    paths: {
        jquery: 'lib/jquery-1.11.1.min'
    }
});

require(['jquery', 'component', 'plugin/Component'], function($, Component) {
    console.log('holaaaaaa')
	$(document).ready(function() {
        var div = $('div').component({})
        console.log(div)
        console.log(div.component())
        console.log(div.component('a'))
        console.log(div.component('a', [1,2,3]))
        console.log($(div[1]).component('a'))
        console.log($(div[1]).component('a'))
        console.log(div.component('a'))
        console.log(div.component())
    })
})


