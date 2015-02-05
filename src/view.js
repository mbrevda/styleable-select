var Backbone = require('backbone'),
    $ = require('jquery')

Backbone.$ = $
module.exports = Backbone.View.extend({
    attributes: {
        tagName: 'div',
        class: 'styled-select-button'
    },
    select: $('<select class="styled-select"></select>'),
    initialize: function() {
        this.render()
    },
    render: function() {
        this.$el.append(this.select)
    }
})
