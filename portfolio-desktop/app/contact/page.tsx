export const metadata = {
  title: "Contact",
  description: "Contact page",
};

export default function ContactPage() {
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ marginTop: 0 }}>Contact</h1>
      <p>If you want to reach me:</p>
      <ul>
        <li>Email: your.email@exampl    e.com</li>
        <li>Phone: +31 6 12 34 56 78</li>
      </ul>
    </div>
  );
}