const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());


let students = [
    { id: 101, name: "Arjun Mehta", course: "Web Tech", grade: "A", status: "Active" },
    { id: 102, name: "Sneha Rao", course: "Angular", grade: "B+", status: "Active" },
    { id: 103, name: "Rohan Shah", course: "Node.js", grade: "A-", status: "Inactive" }
];



// 1. Welcome Route
app.get('/', (req, res) => {
    res.send('<h1>🎓 Student Management API</h1><p>Use <b>/students</b> to view data.</p>');
});

// 2. GET: Quick Add via URL (Example: http://localhost:3000/add?name=Vicky&course=React)
app.get('/add', (req, res) => {
    const { name, course } = req.query;

    if (!name || !course) {
        return res.send("<h2>❌ Error:</h2><p>Please provide name and course. <br>Example: <code>/add?name=Vicky&course=React</code></p>");
    }

    const newStudent = {
        id: students.length > 0 ? students[students.length - 1].id + 1 : 101,
        name: name,
        course: course,
        grade: "N/A",
        status: "Active"
    };

    students.push(newStudent);
    res.send(`<h2> Success!</h2><p>${name} has been added with ID: ${newStudent.id}.</p><a href="/students">View All Students</a>`);
});

// 3. GET: All Students OR Search by Name
app.get('/students', (req, res) => {
    const { name } = req.query;
    if (name) {
        const filtered = students.filter(s => s.name.toLowerCase().includes(name.toLowerCase()));
        return res.json(filtered);
    }
    res.json(students);
});

// 4. GET: Single Student by ID
app.get('/students/:id', (req, res) => {
    const idFromUrl = parseInt(req.params.id); 
    const student = students.find(s => s.id === idFromUrl);

    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: "Student not found" });
    }
});

// 5. POST: Add New Student 
app.post('/students', (req, res) => {
    const newStudent = {
        id: students.length > 0 ? students[students.length - 1].id + 1 : 101,
        ...req.body,
        status: "Active"
    };
    students.push(newStudent);
    res.status(201).json(newStudent);
});

// 6. GET: System Status
app.get('/status', (req, res) => {
    res.json({
        server: "Online",
        totalStudents: students.length,
        uptime: process.uptime().toFixed(2) + " seconds"
    });
});

// --- START SERVER (Only at the bottom) ---
app.listen(PORT, () => {
    console.log(`\n STUDENT API PROJECT LIVE`);
    console.log(` Add via URL: http://localhost:${PORT}/add?name=YourName&course=YourCourse`);
    console.log(` View Students: http://localhost:${PORT}/students`);
    console.log(` Check Status: http://localhost:${PORT}/status\n`);
});