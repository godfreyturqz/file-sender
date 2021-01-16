const app = require('express')()

const PORT = process.env.PORT || 3000
app.get('/', (req, res) => {
    res.download('Trade Like a Stock Market Wizard.pdf')
})

app.listen(PORT, () => {
    console.log('server running')
})
