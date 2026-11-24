import { useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import PageIntro from "../components/ui/PageIntro";
import Section from "../components/ui/Section";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

function Login() {
  const { user, login } = useAuth();
  const location = useLocation();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Already logged in (or just logged in): go back where they came from
  if (user) return <Navigate to={location.state?.from || "/"} replace />;

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(form);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageIntro title="Welcome back" subtitle="Log in to order faster." />

      <Section>
        <form onSubmit={onSubmit} className="mx-auto grid max-w-md gap-4 rounded-2xl border border-line bg-surface p-6 md:p-8">
          {error && (
            <p role="alert" className="rounded-[10px] border border-line bg-tint px-4 py-3 font-bold text-accent">
              {error}
            </p>
          )}
          <Input label="Email" name="email" type="email" autoComplete="email" value={form.email} onChange={onChange} required />
          <Input label="Password" name="password" type="password" autoComplete="current-password" value={form.password} onChange={onChange} required />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Logging in..." : "Log in"}
          </Button>
          <p className="text-center text-sm text-muted">
            New to GlowBite?{" "}
            <Link to="/signup" className="font-bold text-accent hover:underline">Create an account</Link>
          </p>
        </form>
      </Section>
    </>
  );
}

export default Login;