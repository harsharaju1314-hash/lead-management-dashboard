<h1 style="color:#1f6feb;">Lead Management Dashboard</h1>

<p>
This project is a Lead Management Dashboard developed as part of an assignment.
</p>

<hr/>

<h2 style="color:#1f6feb;">Tech Stack</h2>

<ul>
  <li><b>Backend:</b> Node.js, Express.js</li>
  <li><b>Database:</b> MongoDB (Local – MongoDB Compass)</li>
  <li><b>Frontend:</b> React (Vite)</li>
  <li><b>ODM:</b> Mongoose</li>
</ul>

<hr/>

<h2 style="color:#1f6feb;">Project Structure</h2>

<pre>
lead-management-dashboard/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── seed/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── index.html
│   └── package.json
│
└── README.md
</pre>

<hr/>

<h2 style="color:#1f6feb;">Features</h2>

<ul>
  <li>REST API for managing leads</li>
  <li>Pagination support in backend API</li>
  <li>MongoDB integration using Mongoose</li>
  <li>React frontend using Vite</li>
</ul>

<hr/>

<h2 style="color:#1f6feb;">Backend Setup</h2>

<pre>
cd backend
npm install
node server.js
</pre>

<p><b>Backend runs on:</b></p>

<pre>
http://localhost:5000
</pre>

<p><b>API Example:</b></p>

<pre>
GET /api/leads?page=1&limit=10
</pre>

<hr/>

<h2 style="color:#1f6feb;">Frontend Setup</h2>

<pre>
cd frontend
npm install
npm run dev
</pre>

<p><b>Frontend runs on:</b></p>

<pre>
http://localhost:5173
</pre>

<hr/>

<h2 style="color:#1f6feb;">Database</h2>

<ul>
  <li>MongoDB is connected locally using MongoDB Compass</li>
  <li>Connection URL:</li>
</ul>

<pre>
mongodb://127.0.0.1:27017
</pre>

<hr/>

<h2 style="color:#1f6feb;">Notes</h2>

<ul>
  <li><code>.env</code> file is excluded from GitHub for security</li>
  <li><code>node_modules</code> is ignored using <code>.gitignore</code></li>
  <li>Dummy lead data is generated using a seed script</li>
</ul>

<hr/>

<h2 style="color:#1f6feb;">Author</h2>

<p>
<b>Harsha Raju</b>
</p>
