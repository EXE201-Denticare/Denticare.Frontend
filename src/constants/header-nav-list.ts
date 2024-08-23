export function getHeaderNavList(pathName: string) {
  return [
    {
      lable: "Trang chủ",
      href: "/",
      isActive: pathName.includes("/"),
    },
    {
      lable: "Trang 2",
      href: "#",
      isActive: pathName.includes("#"),
    },
    {
      lable: "Trang 3",
      href: "#",
      isActive: pathName.includes("#"),
    },
    {
      lable: "Trang 4",
      href: "#",
      isActive: pathName.includes("#"),
    },
  ]
}
