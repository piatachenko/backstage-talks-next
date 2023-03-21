import Head from "next/head";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";

export default function App() {
  const [color, setColor] = useState("issue6");
  const [element, setElement] = useState(
    typeof window !== "undefined"
      ? window.innerWidth >= 1024
        ? "main"
        : "div.main"
      : "undefined"
  );

  const innerHeight =
    typeof window !== "undefined" ? window.innerHeight : process.stdout.rows;

  const handleScroll = useCallback(() => {
    const mainElement = document.querySelector(element);
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
      const issue = issues[index] ? issues[index] : issues[issues.length - 1];
      setColor(issue);
    }
  }, [
    innerHeight,
    typeof window !== "undefined" ? window.innerWidth : process.stdout.rows,
  ]);

  const handleResize = () => {
    if (typeof window !== "undefined") {
      setElement(window.innerWidth >= 1024 ? "main" : "div.main");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const mainElement = document.querySelector(element);
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
      <div
        className={`main relative text-lg font-semibold leading-[25px] text-[#251D20] transition-all duration-[0.4s] ease-linear max-lg:overflow-y-scroll h-screen bg-${color}`}
      >
        <div className="hidden">
          <div className="bg-issue6"></div>
          <div className="bg-issue5"></div>
          <div className="bg-issue4"></div>
          <div className="bg-issue3"></div>
          <div className="bg-issue2"></div>
          <div className="bg-issue1"></div>
        </div>
        <header className="lg:absolute mt-[1.25rem] ml-[0.9375rem] max-lg:m b-[3.85rem]">
          <div className="flex items-stretch justify-between">
            <img
              src="https://backstagetalks.com/img/logo.png"
              alt=""
              width="260"
              className="max-md:w-[160px] max-md:mt-0.5 max-md:mb-[0.575rem]"
            />
          </div>
        </header>
        <main className="lg:snap-y scroll-smooth lg:snap-mandatory lg:w-screen lg:h-screen lg:overflow-scroll">
          <section
            id="issue6"
            className="flex items-center justify-center snap-always snap-center lg:w-screen h-screen text-center max-lg:pb-[3.95rem] max-lg:-mb-[2rem]"
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
            className="flex items-center justify-center snap-always snap-center lg:w-screen h-screen text-center"
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
            className="flex items-center justify-center snap-always snap-center lg:w-screen h-screen text-center"
          >
            <article className="flex flex-col items-center w-full my-auto">
              <img
                src="https://backstagetalks.com/img/backstagetalks_cover_issue_4.png"
                alt=""
                className="w-[80%] max-w-[26.25rem]"
              ></img>
              <div>Issue #4 is sold out.</div>
              <div className="text-[0.9375rem] mt-5 mb-[0.8rem] mx-1">
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
            className="flex items-center justify-center snap-always snap-center lg:w-screen h-screen text-center"
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
            className="flex items-center justify-center snap-always snap-center lg:w-screen h-screen text-center"
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
            className="flex items-center justify-center snap-always snap-center lg:w-screen h-screen text-center"
          >
            <article className="flex flex-col items-center w-full my-auto">
              <img
                src="https://backstagetalks.com/img/backstagetalks_cover2016_n.png"
                alt=""
                className="w-[80%] max-w-[26.25rem]"
              ></img>
              <div>Issue #1 is sold out.</div>
              <div className="text-[0.9375rem] mt-5 mb-[0.8rem] mx-1">
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
        <aside className="absolute hidden bottom-5 right-[0.95rem] lg:flex flex-col">
          <Link
            href="#issue6"
            className={`mt-[0.23rem] ${
              color === "issue6" ? "" : "font-normal"
            }`}
          >
            Issue #6
          </Link>
          <Link
            href="#issue5"
            className={`mt-[0.23rem] ${
              color === "issue5" ? "" : "font-normal"
            }`}
          >
            Issue #5
          </Link>
          <Link
            href="#issue4"
            className={`mt-[0.23rem] ${
              color === "issue4" ? "" : "font-normal"
            }`}
          >
            Issue #4
          </Link>
          <Link
            href="#issue3"
            className={`mt-[0.23rem] ${
              color === "issue3" ? "" : "font-normal"
            }`}
          >
            Issue #3
          </Link>
          <Link
            href="#issue2"
            className={`mt-[0.26rem] ${
              color === "issue2" ? "" : "font-normal"
            }`}
          >
            Issue #2
          </Link>
          <Link
            href="#issue1"
            className={`mt-[0.2rem] ${color === "issue1" ? "" : "font-normal"}`}
          >
            Issue #1
          </Link>
        </aside>
        <footer className="max-lg:flex max-md:flex-col max-md:items-center max-md:text-center items-end justify-between">
          <div className="lg:absolute left-[1.375rem] md:max-lg:ml-[0.95rem] bottom-[1.1rem] md:max-lg:mb-[1.1rem] md:w-80 max-md:mx-4">
            <p className="mb-9 md:mb-7">
              Backstage Talks is a&nbsp;magazine of&nbsp;casual, but
              in&nbsp;depth dialogues on&nbsp;design and business. Our decisions
              shape and influence this complex world—to have a&nbsp;chance
              to&nbsp;make the right ones, we need to talk.
            </p>
            <div>
              <a
                href="https://backstagetalks.com/privacy-policy.php"
                className="underline"
              >
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="lg:absolute top-[1.25rem] md:max-lg:mb-[1.1rem] right-[0.9375rem] md:max-lg:mx-[0.95rem] max-md:mb-[3.15rem] max-md:mt-[3.1rem]">
            <Link href="mailto:info@backstagetalks.com">
              info@backstagetalks.com
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
