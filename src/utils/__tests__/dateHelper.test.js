import { convertToDate, convertToTime } from "../dateHelper";

describe("dateHelper functionality", () => {
    let dateString = [
        "2021-07-16T10:51:46+07:00",
        "Fri, 16 Jul 2021 10:51:46 +0700"
    ];
    // Date: 16 July 2021
    // Time: 10:51
    it("should return date with correct format", () => {
        dateString.forEach(date => {
            expect(convertToDate(date)).toBe("16 July 2021");
        });
    });
    test("should return time with correct format", () => {
        dateString.forEach(date => {
            expect(convertToTime(date)).toBe("10:51");
        });
    })
})