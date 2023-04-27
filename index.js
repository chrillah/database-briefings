// SQLite Ta bort och uppdatera via terminalen
// 4

const sqlite = require('sqlite'),
    sqlite3 = require('sqlite3')

;(async () => {
    const database = await sqlite.open({
        driver: sqlite3.Database,
        filename: 'test.sqlite'
    })

    await database.run('PRAGMA foreign_keys = ON')
    const emails = await database.all('SELECT email FROM accounts')
    if (process.argv[2] === 'list-accounts') {
        emails.forEach((email) => {
            console.log(email.email)
        })
    } else if (process.argv[2] === 'remove-account') {
        const email = process.argv[3]
        try {
            const dbMessage = await database.run(
                'DELETE FROM accounts WHERE email = ?',
                [email]
            )
            if (dbMessage.changes === 0) {
                console.error(`${email} NOT DELETED`)
                process.exit(3)
            } else {
                console.log(`${email} DELETED`)
                process.exit(0)
            }
        } catch (error) {
            console.error(error)
            process.exit(2)
        }
    } else if (process.argv[2] === 'change-password') {
        const email = process.argv[3]
        const changeThisPassword = process.argv[4]
        try {
            const dbMessage = await database.run(
                'UPDATE accounts SET password = ? WHERE email = ?',
                [changeThisPassword, email]
            )
            if (dbMessage.changes === 0) {
                const thisAccountExists = await database.get(
                    'SELECT * FROM accounts WHERE email = ?',
                    [email]
                )
                if (thisAccountExists) {
                    console.error(`ERROR ${email}`)
                    process.exit(3)
                } else {
                    console.error(`${email} NO EXIST`)
                    process.exit(3)
                }
            } else {
                console.log(`${email}s PASSWORD UPDATED`)
                process.exit(0)
            }
        } catch (error) {
            if (error.message.includes('constraint')) {
                console.error(error)
                process.exit(2)
            }
            console.error(error)
            process.exit(3)
        }
    } else if (process.argv[2] === 'add-account') {
        const email = process.argv[3]
        const password = process.argv[4]
        try {
            await database.run(
                'INSERT INTO accounts (email, password) VALUES (? , ?)',
                [email, password]
            )

            console.log(`${email} ADDED`)
            process.exit(0)
        } catch (error) {
            console.error(error)
            process.exit(2)
        }
    } else {
        console.error('ERROR')
        process.exit(1)
    }
})()
