import { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | SMH Groundworks Ltd",
  description:
    "Privacy Policy for SMH Groundworks Ltd. How we collect, use, and protect your personal data.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="border-b border-border bg-card py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
              <ShieldCheck className="h-7 w-7 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-card-foreground sm:text-5xl text-balance">
              Privacy Policy
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
              SMH Groundworks Ltd is committed to protecting your privacy and
              handling your personal data responsibly.
            </p>
            <p className="mt-3 text-xs text-muted-foreground/60">
              Last updated: February 2026
            </p>
          </div>
        </section>

        {/* Policy Content */}
        <section className="bg-background py-24">
          <div className="mx-auto max-w-3xl px-6">
            <div className="space-y-16">
              {/* 1. Introduction */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  1. Introduction
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    SMH Groundworks Ltd respects your privacy and is committed to
                    protecting your personal data. This privacy policy explains
                    how we collect, use, store, and protect any information you
                    provide to us when you use our website or contact us about
                    our services.
                  </p>
                  <p>
                    This policy applies to all personal data collected through
                    our website, by phone, email, or through any other direct
                    communication with SMH Groundworks Ltd.
                  </p>
                </div>
              </div>

              {/* 2. Information We Collect */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  2. Information We Collect
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    We may collect the following personal information when you
                    contact us or use our services:
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Your name</li>
                    <li>Phone number</li>
                    <li>Email address</li>
                    <li>Postal address or project location</li>
                    <li>
                      Any other information you choose to provide through contact
                      forms, emails, phone calls, or WhatsApp messages
                    </li>
                  </ul>
                  <p>
                    We do not collect any special category data (such as health
                    information, religious beliefs, or biometric data).
                  </p>
                </div>
              </div>

              {/* 3. How We Use Your Information */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  3. How We Use Your Information
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    We only use the personal information you provide for the
                    following purposes:
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>To respond to your enquiries and requests for quotes</li>
                    <li>
                      To provide our groundworks, construction, and building
                      services
                    </li>
                    <li>
                      To communicate with you about ongoing or upcoming projects
                    </li>
                    <li>
                      To manage our business relationship and provide customer
                      support
                    </li>
                  </ul>
                  <p>
                    We will never use your personal data for marketing purposes
                    without your explicit consent.
                  </p>
                </div>
              </div>

              {/* 4. Data Protection */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  4. Data Protection
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    SMH Groundworks Ltd takes appropriate measures to protect
                    your personal data against unauthorised access, loss, or
                    misuse. We are committed to complying with the UK General
                    Data Protection Regulation (UK GDPR) and the Data Protection
                    Act 2018.
                  </p>
                  <p>Key commitments:</p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      We do not sell, rent, or share your personal data with any
                      third parties
                    </li>
                    <li>
                      We only retain your data for as long as necessary to fulfil
                      the purposes for which it was collected
                    </li>
                    <li>
                      We store your data securely and limit access to authorised
                      personnel only
                    </li>
                    <li>
                      We will delete your personal data upon request, subject to
                      any legal obligations to retain it
                    </li>
                  </ul>
                </div>
              </div>

              {/* 5. Your Rights */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  5. Your Rights
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Under UK GDPR, you have the following rights regarding your
                    personal data:
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>The right to access your personal data</li>
                    <li>The right to rectification of inaccurate data</li>
                    <li>
                      The right to erasure (the right to be forgotten)
                    </li>
                    <li>The right to restrict processing</li>
                    <li>The right to data portability</li>
                    <li>The right to object to processing</li>
                  </ul>
                  <p>
                    To exercise any of these rights, please contact us using the
                    details below. We will respond to your request within 30
                    days.
                  </p>
                </div>
              </div>

              {/* 6. Cookies */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  6. Cookies
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Our website may use essential cookies to ensure the proper
                    functioning of the site. We do not use tracking cookies or
                    third-party advertising cookies.
                  </p>
                </div>
              </div>

              {/* 7. Contact Information */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  7. Contact Information
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    If you have any questions about this privacy policy or how we
                    handle your personal data, please contact us:
                  </p>
                </div>
                <div className="mt-6 rounded-lg border border-border bg-card p-6">
                  <p className="mb-4 text-sm font-semibold text-card-foreground">
                    SMH Groundworks Ltd
                  </p>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <address className="not-italic">
                        12 Farnefold Road, Steyning,
                        <br />
                        West Sussex, BN44 3SN
                      </address>
                    </div>
                    <Link
                      href="tel:07743658104"
                      className="flex items-center gap-3 transition-colors hover:text-foreground"
                    >
                      <Phone className="h-4 w-4 shrink-0 text-primary" />
                      07743 658104
                    </Link>
                    <Link
                      href="mailto:SMHgroundworks@hotmail.com"
                      className="flex items-center gap-3 transition-colors hover:text-foreground"
                    >
                      <Mail className="h-4 w-4 shrink-0 text-primary" />
                      SMHgroundworks@hotmail.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
