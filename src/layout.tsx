import { Outlet, Link } from '@tanstack/react-router';

export default function Layout() {
    return (
        <main className="container">
            <header>
                <h1>React TypeScript Starter</h1>
                <div>
                    <button><Link to="/">Home</Link></button>
                    <button><Link to="/about">About</Link></button>
                </div>
            </header>

            <hr />

            <Outlet />
        </main>
    )
}