/* eslint-disable no-use-before-define */
import React from "react"

import Image from "next/image"
import Link from "next/link"

import { FOOTER_COMPANY_INFO, FOOTER_CONTACT_INFO } from "@/constants/footer"
import { ChevronRight, Mail, Phone } from "lucide-react"

import { Icons } from "@/components/icons"
import MaxWidthWrapper from "@/components/layouts/max-width-wrapper"

export default function Footer() {
  return (
    <footer className="h-full bg-[#202942] pt-10 text-white">
      <MaxWidthWrapper className="mb-10 grid grid-cols-2 gap-10 lg:grid-cols-12">
        <div className="col-span-2 flex flex-col items-start justify-start lg:col-span-4">
          <Link href="/" className="flex items-center gap-x-2">
            <Image
              src="/logo/logo-bg-white.png"
              width={300}
              height={300}
              alt="logo"
              className="size-7"
            />
            <span className="text-lg font-semibold">DentiCare</span>
          </Link>
          <p className="mt-4 text-xs tracking-tighter text-[#adb5bd]">
            DentiCare mission is to simplify the dental care experience,
            offering comprehensive solutions that prioritize long-term health
            and customer satisfaction.
          </p>
        </div>

        <div className="col-span-1 lg:col-span-2">
          <FooterColumn title={FOOTER_COMPANY_INFO.title}>
            <ul className="text-foreground-footer space-y-2 text-sm">
              {FOOTER_COMPANY_INFO.links.map((item) => (
                <Link
                  href={item.url}
                  key={item.label}
                  className="hover:text-foreground-footer-hover flex items-center transition duration-100 hover:translate-x-1"
                >
                  <ChevronRight className="mr-2 size-4" />
                  {item.label}
                </Link>
              ))}
            </ul>
          </FooterColumn>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <FooterColumn title={FOOTER_COMPANY_INFO.title}>
            <ul className="text-foreground-footer space-y-2 text-sm">
              {FOOTER_COMPANY_INFO.links.map((item) => (
                <Link
                  href={item.url}
                  key={item.label}
                  className="hover:text-foreground-footer-hover flex items-center transition duration-100 hover:translate-x-1"
                >
                  <ChevronRight className="mr-2 size-4" />
                  {item.label}
                </Link>
              ))}
            </ul>
          </FooterColumn>
        </div>
        <div className="col-span-2 lg:col-span-3">
          <FooterColumn title={FOOTER_CONTACT_INFO.title}>
            <ul className="text-foreground-footer space-y-2 text-sm">
              <Link
                href="mailto:support-center@denticare.com"
                className="hover:text-foreground-footer-hover flex items-center"
              >
                <Mail className="mr-2 size-4" /> support-center@denticare.com
              </Link>
              <Link
                href="tel:+84 123 456 789"
                className="hover:text-foreground-footer-hover flex items-center"
              >
                <Phone className="mr-2 size-4" />{" "}
                {FOOTER_CONTACT_INFO.links[0].value}
              </Link>
            </ul>
            <div className="text-foreground-footer flex items-center gap-x-2">
              <button
                type="button"
                className="flex size-7 items-center justify-center rounded-full bg-[#2c385a] hover:bg-primary hover:text-white"
              >
                <Icons.facebook className="size-4" />
              </button>
              <button
                type="button"
                className="flex size-7 items-center justify-center rounded-full bg-[#2c385a] hover:bg-primary hover:text-white"
              >
                <Icons.instagram className="size-4" />
              </button>
            </div>
          </FooterColumn>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <div className="flex items-center justify-between border-t border-white/10">
          <div className="text-foreground-footer py-5 text-sm">
            <p>© {new Date().getFullYear()} DentiCare. All rights reserved.</p>
          </div>

          <div className="text-foreground-footer flex items-center space-x-2 text-sm">
            <Link href="/terms" className="hover:text-foreground-footer-hover">
              Terms
            </Link>
            <Link
              href="/privacy"
              className="hover:text-foreground-footer-hover"
            >
              Privacy
            </Link>
            <Link href="/about" className="hover:text-foreground-footer-hover">
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-foreground-footer-hover"
            >
              Contact
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

type FooterColumnProps = {
  title: string
  children: React.ReactNode
}

function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}
