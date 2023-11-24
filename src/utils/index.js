import crypto from 'crypto'

let utils = {
    generateUUID: async() => crypto.randomUUID(),
    
}

export default utils