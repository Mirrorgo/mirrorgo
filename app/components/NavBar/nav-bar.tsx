import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignJustify, Github, Languages, Linkedin } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Fragment } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import NavItem from "./nav-item";
import { ModeToggle } from "./mode-toggle";

// 导航项数据
const navItems: { label: string; href: string }[] = [
  // { label: "Home", href: "#home" }, // 关键成就的数据，以后多了放放 | 近期动向 | 超级简短介绍
  { label: "About Me", href: "#aboutMe" },
  { label: "Experience", href: "#experience" },
  { label: "Open Source", href: "#openSourceContribution" },
  { label: "Projects", href: "#projects" },
];

const moreNavItems = [
  {
    label: "Codecho",
    href: "https://codecho.unimelb.top/",
  },
  {
    label: "TreeScii",
    href: "https://ascii-tree.unimelb.top/",
  },
  {
    label: "Blog",
    href: "https://www.yuque.com/mirrorgo/blog",
  },
];

const BrandLogo = () => (
  <Link href="/" passHref>
    <div className="text-xl font-bold cursor-pointer flex items-center mt-1">
      <Image src={"/logo.png"} alt={"logo"} width={30} height={30} />
      <div>Mirrorgo</div>
    </div>
  </Link>
);

function NavBar() {
  return (
    <>
      <nav className="sticky top-0 shadow-md z-10 h-10 w-full mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-black bg-opacity-100 dark:bg-opacity-100">
        <div className="hidden lg:flex justify-between  ">
          <div className="flex">
            <BrandLogo />
            <div className="flex justify-around items-center mx-10 w-fit gap-3">
              {navItems.map((item, index) => (
                <Fragment key={item.href}>
                  {index > 0 && (
                    <Separator orientation="vertical" className="h-6" />
                  )}
                  <NavItem label={item.label} href={item.href} />
                </Fragment>
              ))}
              {/* 更多的链接 */}
              {moreNavItems.map((item, index) => (
                <Fragment key={item.href}>
                  <Separator orientation="vertical" className="h-6" />
                  <NavItem label={item.label} href={item.href} />
                </Fragment>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <a
                href="https://www.linkedin.com/in/mirrorgo/"
                target="_blank"
                rel="noopener noreferrer" // 推荐与 target="_blank" 一起使用，以提高安全性
              >
                <Button size="icon" variant="ghost" className="rounded-full">
                  <Linkedin size={18} />
                </Button>
              </a>
              <a
                href="https://github.com/Mirrorgo"
                target="_blank"
                rel="noopener noreferrer" // 推荐与 target="_blank" 一起使用，以提高安全性
              >
                <Button size="icon" variant="ghost" className="rounded-full">
                  <Github size={18} />
                </Button>
              </a>
            </div>
            <Separator orientation="vertical" className="h-5" />
            <Button size="icon" variant="ghost">
              <Languages />
            </Button>
            {/* <IconSwitcher
				  selectedIconIndex={0}
				  onClick={() => {}}
				  icons={[<Moon size="20" />, <Sun size="20" />]}
				/> */}
            <ModeToggle />
          </div>
        </div>
        <div className="flex justify-between items-center lg:hidden">
          <BrandLogo />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {/* 增加一个动态效果,三横转成X的效果 */}
              <div className="flex justify-center items-center h-10 w-10 cursor-pointer">
                <AlignJustify />
              </div>
            </DropdownMenuTrigger>
            {/* <DropdownMenuPortal> */}
            <DropdownMenuContent>
              {navItems.map((item, idx) => (
                <DropdownMenuItem asChild key={idx}>
                  <NavItem
                    key={item.href}
                    label={item.label}
                    href={item.href}
                  />
                </DropdownMenuItem>
              ))}
              {moreNavItems.map((item, idx) => (
                <DropdownMenuItem asChild key={idx}>
                  <NavItem label={item.label} href={item.href} />
                </DropdownMenuItem>
              ))}
              <div className="flex">
                <a
                  href="https://www.linkedin.com/in/mirrorgo/"
                  target="_blank"
                  rel="noopener noreferrer" // 推荐与 target="_blank" 一起使用，以提高安全性
                >
                  <Button size="icon" variant="ghost" className="rounded-full">
                    <Linkedin size={18} />
                  </Button>
                </a>

                <a
                  href="https://github.com/Mirrorgo"
                  target="_blank"
                  rel="noopener noreferrer" // 推荐与 target="_blank" 一起使用，以提高安全性
                >
                  <Button size="icon" variant="ghost" className="rounded-full">
                    <Github size={18} />
                  </Button>
                </a>
              </div>
              <div className="flex justify-evenly">
                <ModeToggle />
                <Button size="icon" variant="ghost">
                  <Languages />
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
