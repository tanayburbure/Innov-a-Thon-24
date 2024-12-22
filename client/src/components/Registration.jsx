import { useState } from 'react';

const Registration = () => {
  const [participants, setParticipants] = useState([
    { name: '', email: '', age: '', college: '', gender: '', mobile: '' }, 
    { name: '', email: '', age: '', college: '', gender: '', mobile: '' }, 
    { name: '', email: '', age: '', college: '', gender: '', mobile: '' }, 
    { name: '', email: '', age: '', college: '', gender: '', mobile: '' }
  ]);

  const handleChange = (index, event) => {
    const newParticipants = [...participants];
    newParticipants[index][event.target.name] = event.target.value;
    setParticipants(newParticipants);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the data for the API request
    const teamData = {
      participants: participants.map(participant => ({
        name: participant.name,
        email: participant.email,
        age: parseInt(participant.age, 10),
        college: participant.college,
        gender: participant.gender,
        mobile: participant.mobile,
      }))
    };

    try {
      const response = await fetch("http://localhost:3000/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(teamData), // Send the team data as a JSON string
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Registration successful:", result);
        // You can redirect the user or show a success message here
      } else {
        console.error("Error registering team:", result);
        // Handle any errors here
      }
    } catch (error) {
      console.error("Error during the API request:", error);
    }
  };

  return (
    <div className="registration-form-container" style={styles.container}>
      <h2 style={styles.title}>Registration Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {participants.map((participant, index) => (
          <div key={index} style={styles.participant}>
            <h3 style={styles.participantTitle}>Participant {index + 1}</h3>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={participant.name}
              onChange={(event) => handleChange(index, event)}
              style={styles.input}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={participant.email}
              onChange={(event) => handleChange(index, event)}
              style={styles.input}
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={participant.age}
              onChange={(event) => handleChange(index, event)}
              style={styles.input}
              required
            />
            <input
              type="text"
              name="college"
              placeholder="College"
              value={participant.college}
              onChange={(event) => handleChange(index, event)}
              style={styles.input}
              required
            />
            <select
              name="gender"
              value={participant.gender}
              onChange={(event) => handleChange(index, event)}
              style={styles.input}
              required
            >
              <option value="" disabled>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={participant.mobile}
              onChange={(event) => handleChange(index, event)}
              style={styles.input}
              required
            />
          </div>
        ))}
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  participant: {
    marginBottom: '15px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#fff',
  },
  participantTitle: {
    marginBottom: '10px',
    color: '#555',
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  },
};

export default Registration;
