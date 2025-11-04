export default function Navbar() {
  return (
    <nav style={{
      position: "fixed",
      top: 0,
      width: "100%",
      background: "white",
      boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      padding: "15px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 1000
    }}>
      <h2 style={{ fontWeight: "bold" }}>FramerLanding</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
