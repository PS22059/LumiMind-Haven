export async function generateStaticParams() {
  // Since meetings are dynamic and created at runtime,
  // we'll return an empty array to indicate no static paths
  return [];
}

export default function MeetingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 