var fs = require('fs');
var async = require('async');

var DOCUMENTATION_TOP =
  `# sublime-baobab-react-es6
  This is a fork of [mbopreator's React ES6 Sublime Package](https://github.com/mboperator/sublime-react-es6)
  This fork keeps the following main features:
  - Converting function declarations to the new ES6 shorthand.
  - Static class variables (defaultProps, propTypes) are declared using ES7 property intializers.
  - ES6 style exports and imports for component creating snippets.

  This fork brings these main changes:
  - Removing \`rrc\` for Redux connected components. (not used with Baobab simultaneously)

  ![alt tag](https://raw.githubusercontent.com/mboperator/sublime-react/master/docs/img/sr-rcc-out.gif)
  ## Installation
  [WIP]
  ## Usage
  ### Syntax highlighting
  *Syntax highlighting is not provided by this package. Using [babel-sublime](https://github.com/babel/babel-sublime) instead is recommanded.
  ### Snippets
  It's easy! Simply activate snippets by typing a mnemonic followed by TAB
  ![alt tag](https://raw.githubusercontent.com/mboperator/sublime-react/master/docs/img/sr-snippets-out.gif)
  #### Documentation of available snippets (JSX):
  \`\`\``;

var DOCUMENTATION_BOTTOM =
  '```\n\n' +
  '## Contributing\n\n' +
  '### Rebuilding the docs\n\n' +
  'After making changes to snippet files, run `npm install && npm run build-docs` to automatically generate this document from source. **Do not** make changes to README.md directly.\n\n';

fs.readdir('./snippets/js', function(err, files) {
  var snippets = files.filter(function(file) {
    return file.substr(-16) === '.sublime-snippet';
  }).map(function(file) {
    return './snippets/js/' + file;
  });
  async.map(snippets, readAndInspect, function(err, results) {
    if (err) {
      console.error('error mapping snippets', err);
    }
    var snippetDocs =
      DOCUMENTATION_TOP +
      results.map(function(snippet) {
        return inspectFile(snippet);
      }).sort(function(a, b) {
        return a.abbreviation > b.abbreviation
          ? 1
          : a.abbreviation === b.abbreviation
            ? 0
            : -1;
      }).map(function(snippet) {
        return snippet.docBlock;
      }).join('') +
      DOCUMENTATION_BOTTOM;
    fs.writeFile('README.md', snippetDocs, function (err) {
      if (err) {
        console.error('error appending README:', err);
      }
    });
  });
});

function readAndInspect(fileName, cb) {
  fs.readFile(fileName, 'utf-8', function(err, contents) {
    if (!err) {
      cb(null, contents);
    }
  });
}

function inspectFile(contents) {
  var match = contents.match(
    /[\s\S]*<tabTrigger>(.*?)<\/tabTrigger>[\s\S]*?<description>(React: )?(.*?)<\/description>[\s\S]*/i
  );
  var docBlock = '';
  var abbreviation = '';
  var description = '';
  if (match !== null) {
    abbreviation = match[1];
    description = match[3];
    var shortCut = '     '.substring(0, 5 - abbreviation.length) + abbreviation;
    docBlock = '  ' + shortCut + '→  ' + description + '\n\n';
  }
  return {
    docBlock: docBlock,
    abbreviation: abbreviation,
    description: description
  };
}
