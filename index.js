const PORT = process.env.PORT || 6969;

// app.set(express.urlencoded({ extended: false }));
const app = require('./express/server');

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});