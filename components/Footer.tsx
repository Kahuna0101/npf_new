import { Separator } from "@/components/ui/separator"
import { contacts, quickLinks, services, socialLinks } from "@/data"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="w-full md:h-full flex flex-col justify-between bg-white-100 gap-12 px-12 md:px-28 py-12">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-1 flex-col gap-5">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="logo" width={60} height={60} />
            <span className="text-base font-semibold text-blue-100">NPF Pensions Limited</span>
          </Link>

          <p className="text-sm font-normal text-grey-100">Securing your financial future with trusted pension management services across Nigeria.</p>

          <div className="flex flex-row gap-5">
            {socialLinks.map((item) => (
              <Link
                key={item.alt}
                href={item.href}
                target="_blank"
                className="group flex items-center"
                style={{ ["--icon-hover-color" as any]: item.color }}
              >
                <div
                  aria-hidden
                  className="w-6 h-6 -colors duration-200 bg-grey-100 group-hover:bg-[var(--icon-hover-color)]"
                  style={
                    {
                      WebkitMaskImage: `url(${item.icon})`,
                      maskImage: `url(${item.icon})`,
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                    } as React.CSSProperties
                  }
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-7">
          <h4 className="text-[18px] font-medium text-black-100">Quicklinks</h4>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4">
            {quickLinks.map((item) => {
              const isExternal = item.href?.startsWith('https');

              return (
                  <Link
                  key={item.title}
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  <p className="text-sm font-normal text-grey-100 hover:text-blue-100">
                    {item.title}
                  </p>
                </Link>
              );
            })}
          </div>

        </div>

        <div className="flex flex-col gap-7">
          <h4 className="text-[18px] font-medium text-black-100">Services</h4>
          <div className="flex flex-col gap-5">
            {services.map((item) => (
              <Link
                key={item.title}
                href={item.href}
              >
                <p className="text-sm font-normal text-grey-100 hover:text-blue-100">{item.title}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-7">
          <h4 className="text-[18px] font-medium text-black-100">Contact Us</h4>
          <div className="flex flex-col gap-5">
            {contacts.map((item) => (
              <Link
                key={item.title}
                href={item.href as string}
              >
                <p className="text-sm font-normal text-grey-100 hover:text-blue-100">{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Separator />

      <div className="flex justify-center">
        <p className="text-sm font-normal text-grey-100">© 2025 NPF Pensions Limited. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer