const db = require('./db')
const helper = require('../helper')
const config = require('../config')
const { listPerPage } = require('../config')

async function getAllBerita(page=1) {
    const offset = helper.getOffset(page, config.listPerPage)
    const data = await db.query(
        `SELECT * FROM Berta LIMIT${offset}, ${config.listPerPage}`
    )
    const result = helper.isEmpty(data)
    const meta = {
        page
    }

    if (data.length) {
        return {
            ...helper.requestSucces('Succes get all berita', false, result)
        }
    } else {
        return {
            ...helper.requestFail('Fail to get all berita')
        }
    }

}

module.exports = {
    getAllBerita
}