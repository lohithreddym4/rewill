import { signIn, signOut, useSession } from 'next-auth/react';

export default function LoginPage() {
    const { data: session } = useSession();

    return (
        <div className="container mx-auto my-8">
            {!session ? (
                <button onClick={() => signIn('google')} className="p-2 bg-blue-500 text-white">
                    Sign in with Google
                </button>
            ) : (
                <button onClick={() => signOut()} className="p-2 bg-red-500 text-white">
                    Sign out
                </button>
            )}
        </div>
    );
}
