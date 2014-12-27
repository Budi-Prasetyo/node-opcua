test-cov: istanbul

istanbul:
	istanbul cover ./node_modules/mocha/bin/_mocha -- -R spec test  --recursive

coveralls:
	cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js

# literate_programming stuff
LP = "../node_modules/.bin/literate-programming"
examples:
	( cd documentation ; $(LP) creating_a_server.md )
	( cd documentation ; $(LP) creating_a_client.md )
	( cd documentation ; $(LP) create_a_weather_station.md )

# construct the API javascript documentation
doc: examples
	mkdir -p tmptmp/autogenerated
	node code_gen/makedoc.js  > tmptmp/autogenerated/a.js
	autodoc tmptmp/autogenerated/a.js
	# jsdoc -v tmptmp/autogenerated/a.js lib/nodeid.js -d=tmptmp/api_doc_js_doc
	yuidoc 


build_tools:
	npm install minifyjs -g
	npm install browserify -g

build:
	browserify  bin\simple_server.js --exclude usage --exclude node-expat --exclude ursa --exclude x509 | minifyjs -m -o simple_server.min.js

ug:
	node -e 'var NodeUglifier= require("node-uglifier");(new NodeUglifier("bin/simple_server.js")).uglify().exportToFile("a.js");'
