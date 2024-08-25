import { Metadata } from "next"

export function constructMetadata({
  title = {
    default: "DentiCare",
    template: "%s | DentiCare - Click to Confident Smile",
  },
  description = "DentiCare is a platform designed to bridge the gap between customers seeking dental care services and private dental clinics in Vietnam. With the mission of simplifying the dental care experience, it aims to contribute to creating a community that provides comprehensive solutions, focusing on long-term health and the absolute satisfaction of customers.",
  image = "/thumbnail.png",
  icons = "/logo/logo.png",
}: {
  title?: {
    default: string
    template: string
  }
  description?: string
  image?: string
  icons?: string
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: title.default,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: title.default,
      description,
      images: [image],
      creator: "@DentiCare",
    },
    icons,
    metadataBase: new URL("https://denticare.com/"),
  }
}
