# sublime-baobab-react-es6
  This is a fork of
  [mbopreator's React ES6 Sublime Package](https://github.com/mboperator/sublime-react-es6)

  This fork keeps the following main features:
  - Converting function declarations to the new ES6 shorthand.
  - Static class variables (defaultProps, propTypes) are declared using ES7 property intializers.
  - ES6 style exports and imports for component creating snippets.

  This fork brings these main changes:
  - Removing `rrc` for Redux connected components. (not used with Baobab simultaneously)
  - Adding a snippet to create a rooted component using the Baobab higher-order components
  - Adding a snippet to create a branched component using the Baobab higher-order components

  ![alt tag](https://raw.githubusercontent.com/mboperator/sublime-react/master/docs/img/sr-rcc-out.gif)
  ## Installation
  [WIP]
  ## Usage
  ### Syntax highlighting
  *Syntax highlighting is not provided by this package.* Using
  [babel-sublime](https://github.com/babel/babel-sublime) instead is recommanded.
  ### Snippets
  It's easy! Simply activate snippets by typing a mnemonic followed by TAB
  ![alt tag](https://raw.githubusercontent.com/mboperator/sublime-react/master/docs/img/sr-snippets-out.gif)
  #### Documentation of available snippets (JSX):
  
    ```
      baobc→  Baobab-React: branched component skeleton

  baorc→  Baobab-React: rooted component skeleton

    cdm→  componentDidMount: fn() { ... }

   cdup→  componentDidUpdate: fn(pp, ps) { ... }

     cs→  import cx from 'classnames';

    cwm→  componentWillMount: fn() { ... }

    cwr→  componentWillReceiveProps: fn(np) { ... }

    cwu→  componentWillUpdate: fn(np, ns) { ... }

   cwun→  componentWillUnmount: fn() { ... }

     cx→  cx({ ... })

    fdn→  React.findDOMNode(...)

    fup→  forceUpdate(...)

    gdp→  static defaultProps = { ... } 

    gis→  getInitialState: fn() { return {...} } 

    ism→  isMounted()

  props→  this.props.

     pt→  propTypes { ... }

   refs→  this.refs.

    ren→  render: fn() { return ... }

    scu→  shouldComponentUpdate: fn(np, ns) { ... }

    sst→  this.setState({ ... })

  state→  this.state.


    ```
    
  ## Contributing
  ### Rebuilding the docs
  After making changes to snippet files, run `npm install && npm run build-docs` to automatically
  generate this document from source. **Do not** make changes to README.md directly.
  