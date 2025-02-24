"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["Menu"]));
  const router = useRouter();

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const handleMenuClick = (key: string | any) => {
    switch (key) {
      case "home":
        router.push("/");
        break;
      case "about":
        router.push("/about");
        break;
      case "services":
        router.push("/services");
        break;
      case "contact":
        router.push("/contact");
        break;
      default:
        break;
    }
  };

  return (
    <Navbar>
      <NavbarBrand as={Link} href="/">
        <p className="font-bold text-inherit">
          DM <span className="text-[#236d9b]">Solution Hub</span>
        </p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about">About</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/services">Services</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact">Contact</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Button as={Link} color="primary" href="/contact" variant="flat">
            Contact
          </Button>
        </NavbarItem>
        <div className="sm:hidden">
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered" className="capitalize">
                {selectedValue}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Navigation Menu"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys}
              // @ts-ignore
              onSelectionChange={setSelectedKeys}
              onAction={handleMenuClick}
            >
              <DropdownItem key="home">Home</DropdownItem>
              <DropdownItem key="about">About</DropdownItem>
              <DropdownItem key="services">Services</DropdownItem>
              <DropdownItem key="contact">Contact</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </NavbarContent>
    </Navbar>
  );
}
