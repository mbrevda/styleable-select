var view = require('view.js'),
    $ = require('jquery')

var el = new view()

el.select.append('<option>Apples</option>')
el.select.append('<option>Bananas</option>')
el.select.append('<option>Grapes</option>')
el.select.append('<option>Oranges</option>')
el.select.append('<option>A very long option name to test wrapping and visual collisions</option>')

$(document).ready(function(){
    $('.page').html(el.$el)
})

