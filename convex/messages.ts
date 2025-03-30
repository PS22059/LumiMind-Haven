import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const sendMessage = mutation({
  args: {
    content: v.string(),
    roomId: v.string(),
    userName: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthorized");

    return await ctx.db.insert("messages", {
      content: args.content,
      roomId: args.roomId,
      userId: identity.subject,
      userName: args.userName,
      timestamp: Date.now(),
    });
  },
});

export const getRoomMessages = query({
  args: { roomId: v.string() },
  handler: async (ctx, args) => {
    const messages = await ctx.db
      .query("messages")
      .withIndex("by_room_id", (q) => q.eq("roomId", args.roomId))
      .order("asc")
      .collect();
    
    return messages;
  },
});

export const uploadImage = mutation({
  args: {
    file: v.any()
  },
  handler: async (ctx, args) => {
    // Xử lý upload ảnh và trả về URL
    // Có thể sử dụng storage service như Convex File Storage hoặc external service
    // Return URL của ảnh đã upload
  }
}); 