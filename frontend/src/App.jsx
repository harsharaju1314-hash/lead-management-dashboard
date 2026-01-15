import { useEffect, useState } from "react";

function App() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/leads?page=1&limit=10")
      .then((res) => res.json())
      .then((data) => {
        setLeads(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching leads:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading leads...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lead Management Dashboard</h1>
      <p>Total Leads: {leads.length}</p>

      {leads.length === 0 ? (
        <p>No leads found</p>
      ) : (
        <ul>
          {leads.map((lead) => (
            <li key={lead._id}>
              {lead.name} – {lead.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
