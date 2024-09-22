export function getHeaderNavList(pathName: string) {
  return [
    {
      lable: "Trang chủ",
      href: "/",
      isActive: pathName === "/",
    },
    {
      lable: "Tìm Kiếm",
      href: "/search",
      isActive: pathName.includes("search"),
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
