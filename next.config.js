const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}


// const path = require('path')

// require('dotenv-flow').config({
//   node_env: process.env.APP_ENV || process.env.NODE_ENV || 'development'
// });
// console.log('🔥 -- process.env:', process.env);
// const env = {}
// Object.keys(process.env).forEach((key) => {
//   if (key.startsWith('NEXT_PUBLIC_')) {
//     env[key] = process.env[key]
//   }
// })
// console.log('========env:', { ...env });
// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//   env,
// }