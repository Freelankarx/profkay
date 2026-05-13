const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = [
  "assets/AtoZSystem-CXfdkU54.js",
  "assets/vendor-react-CfkYKD7G.js",
  "assets/check-63Bk6Mmu.js",
  "assets/createLucideIcon-Bex6bMmO.js",
  "assets/PainPoints-C65s1ZPt.js",
  "assets/OldVsNew-Bbb6fqHB.js",
  "assets/WhatYouGet-D6HXWzve.js",
  "assets/MentorshipBridge-Wi80pN9U.js",
  "assets/CurriculumSection-DeyJ8w1M.js",
  "assets/plus-SygNBGRz.js",
  "assets/TestimonialsSection-CVrbrTRK.js",
  "assets/arrow-right-BJIh4t_U.js",
  "assets/ForYouSection-CQluqe0Q.js",
  "assets/FAQSection-sizSaqd2.js",
  "assets/CTASection-B9qGhVsS.js",
  "assets/Apply-CmJxHZmi.js",
  "assets/LearnMore-MRSLrsUh.js",
  "assets/PrivacyPolicy-m7Rzt3Pr.js",
  "assets/EarningsDisclaimer-CpqFWYV7.js",
  "assets/TermsOfService-y3STIEaG.js",
  "assets/NotFound-DvsJ7s0G.js",
  "assets/vendor-radix-VdrorRsZ.js",
  "assets/vendor-router-CuIEy8jV.js"
]))) => i.map(i => d[i]);

import { r as React, j as jsx, c as ReactDOM } from "./vendor-react-CfkYKD7G.js";
import { S as Router, R as Route, u as useLocation } from "./vendor-router-CuIEy8jV.js";

/* ---------------- module preload polyfill ---------------- */

(() => {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) return;

  const preload = (link) => {
    if (link.ep) return;
    link.ep = true;

    fetch(link.href, {
      credentials:
        link.crossOrigin === "use-credentials"
          ? "include"
          : link.crossOrigin === "anonymous"
          ? "omit"
          : "same-origin",
      integrity: link.integrity,
      referrerPolicy: link.referrerPolicy,
    });
  };

  document
    .querySelectorAll('link[rel="modulepreload"]')
    .forEach(preload);

  new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.type === "childList") {
        m.addedNodes.forEach((node) => {
          if (node.tagName === "LINK" && node.rel === "modulepreload") {
            preload(node);
          }
        });
      }
    }
  }).observe(document, { childList: true, subtree: true });
})();

/* ---------------- module loader ---------------- */

const moduleCache = {};
const toPath = (r) => "/" + r;

const loadModule = (factory, deps) => {
  let p = Promise.resolve();

  if (deps?.length) {
    p = Promise.all(
      deps.map((d) => {
        const path = toPath(d);
        if (moduleCache[path]) return;

        moduleCache[path] = true;

        const isCss = path.endsWith(".css");
        if (document.querySelector(`link[href="${path}"]`)) return;

        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : "modulepreload";
        if (!isCss) link.as = "script";
        link.href = path;

        document.head.appendChild(link);

        if (isCss) {
          return new Promise((res, rej) => {
            link.onload = res;
            link.onerror = () =>
              rej(new Error(`Unable to preload CSS: ${path}`));
          });
        }
      })
    );
  }

  const handleError = (err) => {
    const event = new Event("vite:preloadError", { cancelable: true });
    event.payload = err;
    window.dispatchEvent(event);
    if (!event.defaultPrevented) throw err;
  };

  return p.then(() => factory().catch(handleError));
};

/* ---------------- Error Boundary ---------------- */

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return jsx("div", {
      className: "flex items-center justify-center min-h-screen p-8 bg-white",
      children: jsx("pre", {
        className: "text-sm text-red-600",
        children: this.state.error?.stack,
      }),
    });
  }
}

/* ---------------- App entry ---------------- */

function App() {
  return jsx(ErrorBoundary, {
    children: jsx(Root),
  });
}

function Root() {
  return jsx(React.Suspense, {
    fallback: jsx("div", { className: "min-h-screen" }),
    children: jsx(Router, {
      children: [
        jsx(Route, { path: "/", component: Home }),
        jsx(Route, { path: "/learn-more", component: LearnMore }),
        jsx(Route, { path: "/apply", component: Apply }),
        jsx(Route, { path: "*", component: NotFound }),
      ],
    }),
  });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  jsx(App)
);
