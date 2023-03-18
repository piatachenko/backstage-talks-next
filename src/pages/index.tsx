import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";

export default function App() {
  const [color, setColor] = useState("issue6");
  const [link, setLink] = useState("");

  const innerHeight =
    typeof window !== "undefined" ? window.innerHeight : process.stdout.rows;

  const handleScroll = useCallback(() => {
    const mainElement = document.querySelector("main");
    if (mainElement !== null) {
      const scrollPosition = mainElement.scrollTop;
      const issues = [
        "issue6",
        "issue5",
        "issue4",
        "issue3",
        "issue2",
        "issue1",
      ];
      const index = Math.round(scrollPosition / innerHeight);
      const issue = issues[index];
      setColor(issue);
      setLink(issue);
    }
  }, [innerHeight]);

  useEffect(() => {
    const mainElement = document.querySelector("main");
    if (mainElement !== null) {
      mainElement.addEventListener("scroll", handleScroll);
      return () => {
        mainElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  return (
    <>
      <Head>
        <title>Backstage Talks Magazine</title>
        <meta
          name="description"
          content="Backstage Talks Issue 5. Read casual in-depth dialogues on design, business and responsibility in Backstage Talks magazine. Available now!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="https://backstagetalks.com/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="https://backstagetalks.com/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="https://backstagetalks.com/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="https://backstagetalks.com/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="https://backstagetalks.com/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="https://backstagetalks.com/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="https://backstagetalks.com/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="https://backstagetalks.com/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://backstagetalks.com/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="https://backstagetalks.com/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://backstagetalks.com/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="https://backstagetalks.com/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://backstagetalks.com/favicon-16x16.png"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        <meta
          property="og:image"
          content="http://backstagetalks.com/img/bt5-og.png"
        />
        <meta property="og:title" content="Read Backstage Talks Magazine" />
        <meta
          property="og:description"
          content="Casual in-depth dialogues on design, business and responsibility. Backstage Talks Magazine 6 now available!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Backstage Talks Magazine" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="relative text-lg font-semibold leading-[25px] text-[#251D20]">
        <div className="hidden">
          <div className="bg-issue6"></div>
          <div className="bg-issue5"></div>
          <div className="bg-issue4"></div>
          <div className="bg-issue3"></div>
          <div className="bg-issue2"></div>
          <div className="bg-issue1"></div>
        </div>
        <header className="absolute top-[1.25rem] inset-x-[0.9375rem]">
          <div className="flex items-stretch justify-between">
            <div>
              <img
                src="https://backstagetalks.com/img/logo.png"
                alt=""
                width="260"
              />
            </div>
            <div>
              <Link href="mailto:info@backstagetalks.com">
                info@backstagetalks.com
              </Link>
            </div>
          </div>
        </header>
        <main
          className={`snap-y scroll-smooth snap-mandatory w-screen h-screen overflow-scroll transition-all duration-700 ease-linear bg-${color}`}
        >
          <section
            id="issue6"
            className="flex items-center justify-center snap-always snap-center w-screen h-screen"
          >
            <article className="flex flex-col items-center w-full my-auto">
              <img
                src="https://backstagetalks.com/img/backstagetalks_cover_issue_6.png"
                alt=""
                className="w-[80%] max-w-[26.25rem]"
              ></img>
              <div>Issue #6</div>
              <div className="text-[0.9375rem] text-center mt-5 space-y-[15px] mb-[13px]">
                <p>
                  <a
                    href="https://brot.sk/products/backstage-talks-6"
                    className="text-[#E568AC] hover:underline"
                  >
                    BUY HERE
                  </a>
                </p>
                <p>
                  or in{" "}
                  <a
                    href="http://backstagetalks.com/stocklist.php"
                    className="text-[#E568AC] hover:underline"
                  >
                    selected stores
                  </a>
                  .
                </p>
              </div>
            </article>
          </section>
          <section
            id="issue5"
            className="flex items-center justify-center snap-always snap-center w-screen h-screen"
          >
            <article className="flex flex-col items-center w-full my-auto">
              <img
                src="https://backstagetalks.com/img/backstagetalks_cover_issue_5.png"
                alt=""
                className="w-[80%] max-w-[26.25rem]"
              ></img>
              <div>Issue #5</div>
              <div className="text-[0.9375rem] text-center mt-5 space-y-[15px] mb-[13px]">
                <p>
                  <a
                    href="https://brot.sk/products/backstage-talks-5"
                    className="text-white hover:underline"
                  >
                    BUY HERE
                  </a>
                </p>
                <p>
                  or in{" "}
                  <a
                    href="http://backstagetalks.com/stocklist.php"
                    className="text-white hover:underline"
                  >
                    selected stores
                  </a>
                  .
                </p>
              </div>
            </article>
          </section>
          <section
            id="issue4"
            className="flex items-center justify-center snap-always snap-center w-screen h-screen"
          >
            <article className="flex flex-col items-center w-full my-auto">
              <img
                src="https://backstagetalks.com/img/backstagetalks_cover_issue_4.png"
                alt=""
                className="w-[80%] max-w-[26.25rem]"
              ></img>
              <div>Issue #4 is sold out.</div>
              <div className="text-[0.9375rem] mt-5 mb-[0.8rem]">
                If you are lucky, you may get the last pieces in{" "}
                <a
                  href="http://backstagetalks.com/stocklist.php"
                  className="text-white hover:underline"
                >
                  selected stores
                </a>
                .
              </div>
            </article>
          </section>
          <section
            id="issue3"
            className="flex items-center justify-center snap-always snap-center w-screen h-screen"
          >
            <article className="flex flex-col items-center w-full my-auto">
              <img
                src={
                  "https://backstagetalks.com/img/backstagetalks_cover_issue_3.png"
                }
                alt=""
                className="w-[80%] max-w-[26.25rem]"
              ></img>
              <div>Issue #3</div>
              <div className="text-[0.9375rem] text-center mt-5 space-y-[15px] mb-[13px]">
                <p>
                  <a
                    href="https://brot.sk/products/backstage-talks-3"
                    className="text-white hover:underline"
                  >
                    BUY HERE
                  </a>
                </p>
                <p>
                  or in{" "}
                  <a
                    href="http://backstagetalks.com/stocklist.php"
                    className="text-white hover:underline"
                  >
                    selected stores
                  </a>
                  .
                </p>
              </div>
            </article>
          </section>
          <section
            id="issue2"
            className="flex items-center justify-center snap-always snap-center w-screen h-screen"
          >
            <article className="flex flex-col items-center w-full my-auto">
              <img
                src="https://backstagetalks.com/img/backstagetalks_cover2017.png"
                alt=""
                className="w-[80%] max-w-[26.25rem]"
              ></img>
              <div>Issue #2</div>
              <div className="text-[0.9375rem] text-center mt-5 space-y-[15px] mb-[13px]">
                <p>
                  <a
                    href="https://brot.sk/products/backstage-talks-2"
                    className="text-white hover:underline"
                  >
                    BUY HERE
                  </a>
                </p>
                <p>
                  or in{" "}
                  <a
                    href="http://backstagetalks.com/stocklist.php"
                    className="text-white hover:underline"
                  >
                    selected stores
                  </a>
                  .
                </p>
              </div>
            </article>
          </section>
          <section
            id="issue1"
            className="flex items-center justify-center snap-always snap-center w-screen h-screen"
          >
            <article className="flex flex-col items-center w-full my-auto">
              <img
                src="https://backstagetalks.com/img/backstagetalks_cover2016_n.png"
                alt=""
                className="w-[80%] max-w-[26.25rem]"
              ></img>
              <div>Issue #1 is sold out.</div>
              <div className="text-[0.9375rem] mt-5 mb-[0.8rem]">
                If you are lucky, you may get the last pieces in{" "}
                <a
                  href="http://backstagetalks.com/stocklist.php"
                  className="text-white hover:underline"
                >
                  selected stores
                </a>
                .
              </div>
            </article>
          </section>
        </main>
        <aside className="absolute bottom-5 right-[0.95rem] flex flex-col gap-[0.23rem]">
          <Link
            href="#issue6"
            className={link === "issue6" ? "" : "font-normal"}
          >
            Issue #6
          </Link>
          <Link
            href="#issue5"
            className={link === "issue5" ? "" : "font-normal"}
          >
            Issue #5
          </Link>
          <Link
            href="#issue4"
            className={link === "issue4" ? "" : "font-normal"}
          >
            Issue #4
          </Link>
          <Link
            href="#issue3"
            className={link === "issue3" ? "" : "font-normal"}
          >
            Issue #3
          </Link>
          <Link
            href="#issue2"
            className={link === "issue2" ? "" : "font-normal"}
          >
            Issue #2
          </Link>
          <Link
            href="#issue1"
            className={link === "issue1" ? "" : "font-normal"}
          >
            Issue #1
          </Link>
        </aside>
        <footer className="absolute left-[1.375rem] bottom-[1.1rem] w-80">
          <p className="mb-7">
            Backstage Talks is a&nbsp;magazine of&nbsp;casual, but in&nbsp;depth
            dialogues on&nbsp;design and business. Our decisions shape and
            influence this complex world—to have a&nbsp;chance to&nbsp;make the
            right ones, we need to talk.
          </p>
          <div>
            <a
              href="https://backstagetalks.com/privacy-policy.php"
              className="underline"
            >
              Privacy Policy
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
