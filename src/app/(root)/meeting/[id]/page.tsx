"use client";

import MeetingClient from "./MeetingClient";
import { useParams } from "next/navigation";

function MeetingPage() {
  const { id } = useParams();
  return <MeetingClient id={id as string} />;
}

export default MeetingPage;
