import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Breadcrumbs = () => {
  const router = useRouter();

  const [breadcrumbs, setBreadcrumbs] = useState([]);

  const convertBreadcrumb = (string) => {
    return string
      .replace(/-/g, " ")
      .replace(/oe/g, "ö")
      .replace(/ae/g, "ä")
      .replace(/ue/g, "ü");
  };

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split("/");
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: "/" + linkPath.slice(0, i + 1).join("/"),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <nav>
      <ul className="flex">
        <li className="p-1">
          <Link href="/" className="text-gray-400 text-sm md:text-base hover:text-black hover:underline">
            shop
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="p-1 space-x-1">
            <span className="text-gray-400">/</span>
            <Link
              href={breadcrumb.href}
              className="text-gray-400 text-sm md:text-base hover:text-black hover:underline"
            >
              {convertBreadcrumb(breadcrumb.breadcrumb)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
