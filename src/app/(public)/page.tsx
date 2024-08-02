import { auth } from "@/auth"
import HeroSection from "@/containers/landing-page/hero-section"
import { format } from "date-fns"

export default async function Page() {
  const session = await auth()
  return (
    <div className="h-[200vh]">
      <HeroSection />
      <h1>Xin chào 123 , đây là denticare </h1>

      {session?.expires && (
        <p>Expires cookie {format(session?.expires, "yyyy-MM-dd HH:mm:ss")}</p>
      )}

      <div className="p-10">
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 bg-white">
            <thead>
              <tr>
                <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  ID
                </th>
                <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Full Name
                </th>
                <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Email
                </th>
                <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Phone Number
                </th>
                <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Image
                </th>
                <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Date of Birth
                </th>
                <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Address
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  {session?.user?.id}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {session?.user?.fullName}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {session?.user?.email}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {session?.user?.phoneNumber}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {session?.user?.image}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {session?.user?.dateOfBirth}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {session?.user?.address}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="my-10 overflow-x-auto">
          <table className="min-w-full border border-gray-200 bg-white">
            <thead>
              <tr>
                <th className="w-[300px] border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Access Token
                </th>
                <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Refresh Token
                </th>
                <th className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Expired At
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  <p className="text- w-[300px] overflow-auto">
                    {session?.accessToken}
                  </p>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {session?.refreshToken}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {session?.expiredAt && (
                    <p>{format(session?.expiredAt, "yyyy-MM-dd HH:mm:ss")}</p>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
