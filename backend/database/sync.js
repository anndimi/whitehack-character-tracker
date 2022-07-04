const { dropAndSync, populateLevels } = require('./helpers')

async function main() {
  await dropAndSync().then(() => populateLevels())
}

main()
