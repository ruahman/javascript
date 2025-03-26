import { expect } from "bun:test";
// how to check for null
export default function null_check() {
    console.log("**** null check ****");
    function printEvent(tecEvent) {
        // you have to check if null or not
        if (tecEvent === null) {
            console.log("No event");
        }
        else {
            console.log(tecEvent.name);
            expect(tecEvent.name).toBe("TypeScript");
        }
        // tecEvent.name; // error
        // if you dont check with if you can use optional chaining
        console.log(tecEvent === null || tecEvent === void 0 ? void 0 : tecEvent.name);
        expect(tecEvent === null || tecEvent === void 0 ? void 0 : tecEvent.name).toBe("TypeScript");
        console.log(tecEvent === null || tecEvent === void 0 ? void 0 : tecEvent.speaker);
        expect(tecEvent === null || tecEvent === void 0 ? void 0 : tecEvent.speaker).toBe("John Doe");
        console.log(tecEvent === null || tecEvent === void 0 ? void 0 : tecEvent.time);
        expect(tecEvent === null || tecEvent === void 0 ? void 0 : tecEvent.time).toBe(10);
    }
    // printEvent(null);
    printEvent({
        name: "TypeScript",
        speaker: "John Doe",
        time: 10,
    });
}
//# sourceMappingURL=null_check.js.map