import dynamic from 'next/dynamic'

const MyNotSsrComponent = dynamic(
  () => import('./page-nossr'),
  { ssr: false }
)

export default function MyPage() {
  return <MyNotSsrComponent />
}