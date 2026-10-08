import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Netflix - Login",
}

function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

export default LoginLayout