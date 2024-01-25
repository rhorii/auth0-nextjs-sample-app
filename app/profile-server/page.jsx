import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Image from "next/image";
import Link from "next/link";

export default withPageAuthRequired(
  async function ProfileServer() {
    const { user } = await getSession();

    return (
      <>
        <Link href="/">Home</Link>
        {user && (
          <div>
            <Image
              src={user.picture}
              width={480}
              height={480}
              alt={user.name}
            />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        )}
      </>
    );
  },
  { returnTo: "/profile-server" }
);
