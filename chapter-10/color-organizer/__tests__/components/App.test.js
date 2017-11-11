import App from '../../src/components/App'

jest.mock("../../src/components/containers")

describe("<App /> 루트 콤포넌트", () => {

    it("제대로 렌더링됨", () =>
        expect(App().props.children.length).toBe(3)
    )

})
