const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const coursesDataPath = path.join(__dirname, '../mocdata/courses/coursesdata.json');

router.post('/api/courses', (req, res) => {
  const newCourse = req.body;

  fs.readFile(coursesDataPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading courses data:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    const courses = JSON.parse(data);
    courses.push(newCourse);

    fs.writeFile(coursesDataPath, JSON.stringify(courses, null, 2), (err) => {
      if (err) {
        console.error('Error writing courses data:', err);
        return res.status(500).json({ message: 'Internal server error' });
      }

      res.status(201).json({ message: 'Course added successfully' });
    });
  });
});

module.exports = router;

