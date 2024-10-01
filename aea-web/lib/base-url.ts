export default function getBaseURL(){
    if(typeof window !== "undefined") return ""
    if(process.env.VRECEL_URL) { return `https://${process.env.VERCEL_URL}`;}
    return "http://localhost:3000";
}