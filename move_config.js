const fs = require('fs')

if (fs.existsSync('../hexo/package.json')){
  const version = JSON.parse(fs.readFileSync('../hexo/package.json')).version
  if (version.split('.')[0] === '5') {
    const oldConfigPath = '../../_config.old.yml'
    const configPath = '../../_config.i.yml'
    if (fs.existsSync(configPath)) {
      fs.writeFileSync( '../../_config.new.yml', fs.readFileSync('./source/_config.yml'))
    } else if(!fs.existsSync(oldConfigPath)) {
      fs.writeFileSync(configPath, fs.readFileSync('./source/_config.yml'))
      logger.info('Successful installation!')
      logger.info('Please modify the file `_config.i.yml` in the root directory')
    }
    fs.unlinkSync('./source/_config.yml')
  }
}

// 借鉴自 https://github.com/HCLonely/hexo-theme-webstack/blob/master/move_config.js