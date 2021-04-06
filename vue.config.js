module.exports = {
    pages: {
      index: {
        entry: './src/pages/LoginPage/main.js',
        template: 'public/index.html',
        title: 'Login Page',
        chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
      },
      account: {
        entry: './src/pages/Account/main.js',
        template: 'public/index.html',
        title: 'Account',
        chunks: [ 'chunk-vendors', 'chunk-common', 'account' ]
      },
      friends: {
        entry: './src/pages/Friends/main.js',
        template: 'public/index.html',
        title: 'Friends',
        chunks: [ 'chunk-vendors', 'chunk-common', 'friends' ]
      },
      game: {
        entry: './src/pages/Game/main.js',
        template: 'public/index.html',
        title: 'Game',
        chunks: [ 'chunk-vendors', 'chunk-common', 'game' ]
      },
      leaderBoard: {
        entry: './src/pages/LeaderBoard/main.js',
        template: 'public/index.html',
        title: 'LeaderBoard',
        chunks: [ 'chunk-vendors', 'chunk-common', 'leaderBoard' ]
      },
      mainMenu: {
        entry: './src/pages/MainMenu/main.js',
        template: 'public/index.html',
        title: 'Main Menu',
        chunks: [ 'chunk-vendors', 'chunk-common', 'mainMenu' ]
      },
      shop: {
        entry: './src/pages/Shop/main.js',
        template: 'public/index.html',
        title: 'Shop',
        chunks: [ 'chunk-vendors', 'chunk-common', 'shop' ]
      }
    }
  }