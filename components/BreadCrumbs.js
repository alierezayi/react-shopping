import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/outline";

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
  const home = breadcrumbs.find((breadcrumb) => breadcrumb.href === "/");

  return (
    <nav>
      <ul className="flex items-center">
        <li className="mr-1 md:mr-2">
          <Link href="/" legacyBehavior>
            <HomeIcon className="w-5 h-5 text-gray-400 hover:text-black" />
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="p-1 space-x-2 md:space-x-3">
            <span className="text-gray-400">/</span>
            <Link
              href={breadcrumb.href}
              className="text-gray-400 text-sm hover:text-black hover:underline"
              legacyBehavior>
              {convertBreadcrumb(breadcrumb.breadcrumb)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
