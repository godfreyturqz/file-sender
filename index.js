const app = require('express')()

const PORT = process.env.PORT || 5001
app.get('/', (req, res) => {
    res.download('./files/Trade Like a Stock Market Wizard.pdf')
})

app.listen(PORT, () => {
    console.log('server running')
})
