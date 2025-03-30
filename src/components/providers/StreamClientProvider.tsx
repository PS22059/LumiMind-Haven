"use client";

import { ReactNode, useEffect, useState } from "react";
import { StreamVideoClient, StreamVideo } from "@stream-io/video-react-sdk";
import { useUser } from "@clerk/nextjs";
import LoaderUI from "../LoaderUI";

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [streamVideoClient, setStreamVideoClient] = useState<StreamVideoClient>();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded || !user) return;

    const fetchToken = async () => {
      try {
        const res = await fetch("/api/streamToken"); // Gọi API Route
        if (!res.ok) throw new Error("Failed to fetch token");

        const { token } = await res.json();
        const client = new StreamVideoClient({
          apiKey: process.env.NEXT_PUBLIC_STREAM_API_KEY!,
          user: {
            id: user.id,
            name: user.firstName || "" + " " + user.lastName || "" || user.id,
            image: user.imageUrl,
          },
          tokenProvider: async () => token,
        });

        setStreamVideoClient(client);
      } catch (error) {
        console.error("Error fetching stream token:", error);
      }
    };

    fetchToken();
  }, [user, isLoaded]);

  if (!streamVideoClient) return <LoaderUI />;

  return <StreamVideo client={streamVideoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;
