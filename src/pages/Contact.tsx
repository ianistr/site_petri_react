import React, { useState, ChangeEvent, FormEvent } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      setStatus("Te rog completează toate câmpurile!");
      return;
    }
    console.log("Form submitted:", formData);
    setStatus("Mesaj trimis cu succes!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      maxWidth: 700,
      margin: "50px auto",
      marginTop: 200,
      padding: "40px 30px",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      borderRadius: 15,
      backgroundColor: "#f9f9f9",
      boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    },
    title: {
      fontSize: "2rem",
      marginTop:30,
      color: "#222",
      textAlign: "center",
    },
    input: {
      padding: "12px 15px",
      fontSize: 16,
      borderRadius: 8,
      border: "1px solid #ccc",
      width: "100%",
      outline: "none",
      transition: "all 0.2s",
    },
    textarea: {
      padding: "12px 15px",
      fontSize: 16,
      borderRadius: 8,
      border: "1px solid #ccc",
      width: "100%",
      minHeight: 140,
      resize: "vertical",
      outline: "none",
      transition: "all 0.2s",
    },
    label: {
      fontWeight: 600,
      marginBottom: 5,
      display: "block",
      color: "#333",
    },
    button: {
      padding: "14px 20px",
      fontSize: 16,
      backgroundColor: "#007BFF",
      color: "#fff",
      border: "none",
      borderRadius: 10,
      cursor: "pointer",
      fontWeight: 600,
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    status: {
      color: status.includes("succes") ? "green" : "red",
      fontWeight: 600,
      textAlign: "center",
      marginTop: 10,
    },
  };

  return (
<div>

    <Navigation />
    <div style={styles.container}>
        
      <h2 style={styles.title}>Contactează-ne</h2>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 15 }}>
        {["name", "email", "subject"].map((field) => (
          <div key={field}>
            <label style={styles.label} htmlFor={field}>
              {field === "name"
                ? "Nume"
                : field === "email"
                ? "Email"
                : "Subiect"}
            </label>
            <input
              type={field === "email" ? "email" : "text"}
              id={field}
              name={field}
              value={(formData as any)[field]}
              onChange={handleChange}
              style={styles.input}
              placeholder={
                field === "name"
                  ? "Numele tău"
                  : field === "email"
                  ? "Email-ul tău"
                  : "Subiectul mesajului"
              }
            />
          </div>
        ))}

        <div>
          <label style={styles.label} htmlFor="message">
            Mesaj
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
            placeholder="Scrie mesajul tău"
          />
        </div>

        <button type="submit" style={styles.button}>
          Trimite
        </button>
      </form>

      {status && <p style={styles.status}>{status}</p>}
       
    </div>
    </div>
  );
};

export default ContactPage;

