const db = require('./db')
const helper = require('../helper')
const config = require('../config')
const { listPerPage } = require('../config')

async function getAllBerita(page=1) {
    const offset = helper.getOffset(page, config.listPerPage)
    const data = await db.query(
        `SELECT * FROM Berta LIMIT ${offset}, ${config.listPerPage}`
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

async function getSingleBerita(id) {
    const data = await db.query(
        `SELECT * FROM Berta WHERE id=${id}`
    )
    const result = helper.isEmpty(data)


    if (data.length) {
        return {
            ...helper.requestSucces('Success get single berita', false, result)
        }
    } else {
        return {
            ...helper.requestFail('Fail to get single berita')
        }
    }
}

async function createmessage(data) {
    const result = await db.query(
        `INSERT INTO feed (nama, email, subjek, pesan) VALUES ('${data.nama}','${data.email}','${data.subjek}','${data.pesan}')`
    )

    let message = 'Error in adding berita'

    if (result.affectedRows) {
        message = 'Success in adding berita'
        return {
            ...helper.requestSucces(message, true)
        }
    } else {
        return {
            ...helper.requestFail('Fail to add berita')
        }
    }
}

module.exports = {
    getAllBerita,
    getSingleBerita,
    createmessage
}