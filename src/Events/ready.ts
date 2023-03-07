import { Events } from "../Interfaces";

export const Event: Events = {
    name: "ready",
    once: true,

    async execute(client) {
        console.success("I have successfully logged into Discord")
    },
}