import React, { useState, useEffect } from "react";
import { Button, Drawer, Menu, Anchor } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const { Link } = Anchor;

const Navbar: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const showDrawer = () => setDrawerVisible(true);
  const onClose = () => {
    setDrawerVisible(false);
  };
  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault(); // Prevent default anchor behavior

    // Scroll to the section smoothly
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onClose(); // Close the drawer after navigation
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldBeScrolled = scrollTop > 0;
      setIsScrolled(shouldBeScrolled);
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 576);
    };

    // Initial check on mount
    handleResize();

    // Event listeners
    document.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      document.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 ${
        isScrolled ? "bg-white" : "bg-transparent"
      } border-b dark:bg-gray-900 shadow-md`}
      style={{ transition: "background-color 0.3s ease" }}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-3">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://traninc.vn/wp-content/uploads/2020/02/Logo.svg"
            className="h-8"
            alt="Company Logo"
          />
          <span
            className={`self-center text-2xl font-semibold whitespace-nowrap ${
              isScrolled
                ? "text-black dark:text-white"
                : "text-white dark:text-white"
            }`}
          >
            {/* Company Name or Title */}
          </span>
        </a>

        <Button
          type="text"
          className="md:hidden text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
          onClick={showDrawer}
        >
          <MenuOutlined className="w-5 h-5" />
        </Button>

        <Drawer
          title="Menu"
          placement="right"
          onClose={onClose}
          visible={drawerVisible}
          closable={false}
          bodyStyle={{ padding: 0 }}
        >
          <Menu
            mode="inline"
            className="w-full"
            selectedKeys={[window.location.hash]}
          >
            <Menu.Item key="#part-1">
              <a href="#part-1" onClick={(e) =>handleMenuClick(e,'part-1')}>
                Home
              </a>
            </Menu.Item>
            <Menu.Item key="#part-2">
              <a href="#part-2" onClick={(e) =>handleMenuClick(e,'part-2')}>
                Our Offer
              </a>
            </Menu.Item>
            <Menu.Item key="#part-3">
              <a href="#part-3" onClick={(e) =>handleMenuClick(e,'part-3')}>
                Testing Services
              </a>
            </Menu.Item>
            <Menu.Item key="#part-4">
              <a href="#part-4" onClick={(e) =>handleMenuClick(e,'part-4')}>
                About Us
              </a>
            </Menu.Item>
            <Menu.Item key="#part-5">
              <a href="#part-5" onClick={(e) =>handleMenuClick(e,'part-5')}>
                Contact Us
              </a>
            </Menu.Item>
          </Menu>
        </Drawer>

        <div className="hidden md:flex w-full md:w-auto">
        <Anchor
  onClick={(e) => e.preventDefault()}
  bounds={2}
  direction="horizontal"
  className={`font-medium flex flex-row rtl:space-x-reverse ${
    isSmallScreen ? "text-sm" : ""
  }`}
  affix={false}
  style={{ 
    backgroundColor: "inherit",
    gap: "1.5rem" // Adds space between items
  }}
  items={[
    { key: "part-1", href: "#part-1", title: "Home" },
    { key: "part-2", href: "#part-2", title: "Our Offer" },
    { key: "part-3", href: "#part-3", title: "Testing Services" },
    { key: "part-4", href: "#part-4", title: "About Us" },
    { key: "part-5", href: "#part-5", title: "Contact Us" },
  ]}
/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;