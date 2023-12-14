export class DateUtils {
    static isToday(date: Date){
        const today = new Date();

        return (
          today.getFullYear() === date.getFullYear() &&
          today.getMonth() === date.getMonth() &&
          today.getDate() === date.getDate()
        );
    }
}