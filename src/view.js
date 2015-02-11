var Backbone = require('backbone'),
    $ = require('jquery')

Backbone.$ = $
module.exports = Backbone.View.extend({
    attributes: {
        tagName: 'div',
        class: 'styled-select-button'
    },
    initialize: function() {
        this.select = $('<select class="styled-select"></select>')
        this.render()
    },
    render: function() {
        this.$el.append(this.select)
    }
})
