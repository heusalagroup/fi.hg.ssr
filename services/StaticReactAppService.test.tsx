import { StaticReactAppService } from "./StaticReactAppService";

describe("StaticReactAppService", () => {

    describe("renderString", () => {

        it("should render the static React app to a string", () => {
            const url = "/test";
            const App = () => <div>Test</div>;
            const expectedResult = "<div>Test</div>";

            const result = StaticReactAppService.renderString(url, App);

            expect(result).toBe(expectedResult);
        });

        it("should throw an error if the url parameter is not a string", () => {
            const url = 123; // This is not a string
            const App = () => <div>Test</div>;

            expect(() => StaticReactAppService.renderString(url, App)).toThrowError();
        });
        
    });

});