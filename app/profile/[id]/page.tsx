import { Metadata } from "next";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        rock
      </div>
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  return {
  title: `${params.id} on Grateful!`,
    description: `it is ${new Date().getTime()}`,
    openGraph: {
      images: [
        {
          url: "https://mvamictakpgckrafjsbm.supabase.co/storage/v1/object/public/profiles/avatars/0xd4fa3539118d7b869214b25b84bdee5b7a6040aa40f935f33ba0bf1fc1beab80?1706904693907",
        },
      ],
    },
  };
}

export const revalidate = 10; // every 10 secs
