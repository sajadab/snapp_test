export const toPersianNumber = (num: string): string => {
    let en_number = num;
    let persianDigits = '۰۱۲۳۴۵۶۷۸۹';
    let persianMap = persianDigits.split('');
    return en_number.replace(/\d/g, function (m) {
        return persianMap[parseInt(m)];
    });
};