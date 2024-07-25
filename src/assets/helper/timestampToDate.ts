export const formatTimeStamp = (timeStamp: string): string => {
    if(!timeStamp) return ""
    const dateFormat = new Date(timeStamp);
    const month = dateFormat.toLocaleString('id-ID', { month: "long" })
    const day = String(dateFormat.getDate()).padStart(2, "0");

    return `${day}-${month}-${dateFormat.getFullYear()}`
}