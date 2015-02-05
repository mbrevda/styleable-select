var Browserify = require('browserify'),
    fs = require('fs'),
    path = require('path'),
    Backbone = require('backbone'),
    jQuery = require('jquery')(require('jsdom').jsdom().parentWindow),
    _ = require('underscore'),
    opts = {
        src: [__dirname + '/../src'],
        testScript: __dirname + '/script.js',
        template: __dirname + '/template.html',
        output: __dirname + '/../testOutput/index.html'
    }


buildScript(opts.view, opts.testScript, function(script) {
    var template = fs.readFileSync(opts.template).toString()
    var style = fs.readFileSync(opts.src + '/style.css').toString()


    var html = _.template(template)({script: script, style: style})
    fs.mkdirSync(path.dirname(opts.output))
    fs.writeFile(opts.output, html, {flag: 'w+'}, function(err){
        if (err) throw err

        console.log(opts.output + ' writen')
    }.bind(this))

}.bind(this))


function buildScript(paths, script, done) {
    var b = Browserify({
        paths: opts.src
    })
    b.add(script)
    var stream = b.bundle()
    var data = ''
    stream.on('data', function(inData) {
        data += inData.toString()
    })
    stream.on('end', function(){
        done(data)
    })
}
