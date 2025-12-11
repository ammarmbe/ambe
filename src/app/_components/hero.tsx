import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col">
      <Image
        src="/images/hero.png"
        alt="Ammar Elbehery"
        width={100}
        height={100}
        className="rounded-full"
      />
      <h1 className="mt-5 text-2xl font-semibold">Ammar Elbehery</h1>
      <p className="mt-4 text-neutral-700 dark:text-neutral-300">
        I build user-centric web apps with clean code and functional design.
      </p>
      <div className="mt-6 flex gap-5">
        <Link
          className="text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-400"
          href="https://github.com/ammarmbe"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            height={20}
            width={20}
          >
            <title>GitHub</title>
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              fill="currentColor"
            />
          </svg>
        </Link>

        <Link
          className="text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-400"
          href="https://linkedin.com/in/ammarmbe"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            height={20}
            width={20}
          >
            <title>LinkedIn</title>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.66667 24H21.3333C22.8061 24 24 22.8061 24 21.3333V2.66667C24 1.19391 22.8061 0 21.3333 0H2.66667C1.19391 0 0 1.19391 0 2.66667V21.3333C0 22.8061 1.19391 24 2.66667 24ZM20.6667 20.6667H17.1052V14.6007C17.1052 12.9376 16.4733 12.0082 15.1569 12.0082C13.7249 12.0082 12.9767 12.9754 12.9767 14.6007V20.6667H9.54444V9.11111H12.9767V10.6676C12.9767 10.6676 14.0087 8.75807 16.4609 8.75807C18.9119 8.75807 20.6667 10.2548 20.6667 13.3504V20.6667ZM5.44978 7.598C4.28069 7.598 3.33333 6.64322 3.33333 5.46567C3.33333 4.28812 4.28069 3.33333 5.44978 3.33333C6.61888 3.33333 7.56567 4.28812 7.56567 5.46567C7.56567 6.64322 6.61888 7.598 5.44978 7.598ZM3.67752 20.6667H7.25647V9.11111H3.67752V20.6667Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </div>
      <Link
        href="/resume.pdf"
        target="_blank"
        className="mt-6 underline underline-offset-8"
      >
        View Resume
      </Link>
    </section>
  );
}
