export interface IChatMessage {
    message: string;
    user: "receiver" | "sender";
    hasAvatar: boolean;
}