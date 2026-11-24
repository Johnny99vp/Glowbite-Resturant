// DEMO ONLY: accounts live in this browser's localStorage, so they are not
// shared between devices and are not secure. For a real site, replace these
// functions with calls to your backend (or a service like Firebase/Supabase).

const USERS_KEY = "glowbite-users";
const SESSION_KEY = "glowbite-session";

const read = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));

// Passwords are never stored as plain text (needs https or localhost)
async function hashPassword(email, password) {
  const data = new TextEncoder().encode(`${email}:${password}`);
  const buffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function getSession() {
  return read(SESSION_KEY, null);
}

export async function signup({ name, email, password }) {
  const key = email.trim().toLowerCase();
  const users = read(USERS_KEY, []);
  if (users.some((u) => u.email === key)) {
    throw new Error("An account with this email already exists.");
  }
  const user = { name: name.trim(), email: key, passwordHash: await hashPassword(key, password) };
  write(USERS_KEY, [...users, user]);
  const session = { name: user.name, email: user.email };
  write(SESSION_KEY, session);
  return session;
}

export async function login({ email, password }) {
  const key = email.trim().toLowerCase();
  const user = read(USERS_KEY, []).find((u) => u.email === key);
  if (!user || user.passwordHash !== (await hashPassword(key, password))) {
    throw new Error("Incorrect email or password.");
  }
  const session = { name: user.name, email: user.email };
  write(SESSION_KEY, session);
  return session;
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
}