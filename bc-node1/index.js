const { format } = require('date-fns')
const {v4: uuid} = require('uuid')

console.log(uuid())
console.log(format(new Date(), 'yyyy-MM-dd HH:mm:ss'))