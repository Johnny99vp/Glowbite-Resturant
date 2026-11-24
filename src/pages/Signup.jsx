import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import PageIntro from "../components/ui/PageIntro";
import Section from "../components/ui/Section";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const EMPTY = { name: "", email: "", password: "", confirm: "" };

function Signup() {
  const { user, signup } = useAuth();
  const [form, setForm] = useState(EMPTY);
  const [error, setError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [loading, setLoading] = useState(false);

  if (user) return <Navigate to="/" replace />;

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (form.password !== form.confirm) {
      setConfirmError("Passwords do not match.");
      return;
    }
    setConfirmError("");
    setLoading(true);
    try {
      await signup({ name: form.name, email: form.email, password: form.password });
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageIntro title="Create your account" subtitle="Sign up to order faster next time." />

      <Section>
        <form onSubmit={onSubmit} className="mx-auto grid max-w-md gap-4 rounded-2xl border border-line bg-surface p-6 md:p-8">
          {error && (
            <p role="alert" className="rounded-[10px] border border-line bg-tint px-4 py-3 font-bold text-accent">
              {error}
            </p>
          )}
          <Input label="Full name" name="name" autoComplete="name" value={form.name} onChange={onChange} required />
          <Input label="Email" name="email" type="email" autoComplete="email" value={form.email} onChange={onChange} required />
          <Input
            label="Password"
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="At least 8 characters"
            minLength={8}
            value={form.password}
            onChange={onChange}
            required
          />
          <Input
            label="Confirm password"
            name="confirm"
            type="password"
            autoComplete="new-password"
            value={form.confirm}
            onChange={onChange}
            error={confirmError}
            required
          />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Creating account..." : "Sign up"}
          </Button>
          <p className="text-center text-sm text-muted">
            Already have an account?{" "}
            <Link to="/login" className="font-bold text-accent hover:underline">Log in</Link>
          </p>
        </form>
      </Section>
    </>
  );
}

export default Signup;