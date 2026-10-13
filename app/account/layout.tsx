import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Netflix - Account Settings",
}

function AccountLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

export default AccountLayout
