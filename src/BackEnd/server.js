const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const coursesRoutes = require('./routes/courses');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(coursesRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
