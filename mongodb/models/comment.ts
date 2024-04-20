// comment.ts
import { IUser } from "@/types/user";
import mongoose, { Schema, Document, models } from "mongoose";

export interface ICommentBase {
  user: IUser;
  text: string;
}

export interface IComment extends Document, ICommentBase {}

const CommentSchema = new Schema<IComment>({
  user: {
    userId: { type: String, required: true },
    userImage: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  text: { type: String, required: true },
});

export const Comment =
  models.Comment || mongoose.model<IComment>("Comment", CommentSchema);