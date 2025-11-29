import websites from "../consts/websites"


export default {
    get(target, name) {
        if (name === "emailRaw") 
            return target.email
        
        if (name === "discord") return `https://${websites.discord}${target.discord.id}`
        if (name === "discordTag") return target.discord.tag

    return `${name === "email" ? "mailto:" : "https://"}${websites[name] ?? ""}${target[name]}`
    }
}